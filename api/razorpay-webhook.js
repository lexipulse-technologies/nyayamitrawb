import crypto from 'node:crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

export const config = {
  api: {
    bodyParser: false
  }
};

const SUPPORTED_EVENTS = new Set([
  'payment.authorized',
  'payment.captured',
  'payment.failed',
  'order.paid',
  'refund.processed'
]);

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on('data', chunk => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function isValidSignature(rawBody, receivedSignature, secret) {
  if (!receivedSignature || !secret) return false;

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  const expected = Buffer.from(expectedSignature, 'utf8');
  const received = Buffer.from(receivedSignature, 'utf8');

  return expected.length === received.length && crypto.timingSafeEqual(expected, received);
}

function getFirstHeaderValue(value) {
  return Array.isArray(value) ? value[0] : value;
}

function normaliseSupabaseUrl(url) {
  return String(url || '').replace(/\/rest\/v1\/?$/, '').trim();
}

function getPaymentDetails(payload) {
  const payment = payload?.payload?.payment?.entity || {};
  const order = payload?.payload?.order?.entity || {};
  const refund = payload?.payload?.refund?.entity || {};
  const notes = { ...(order.notes || {}), ...(payment.notes || {}) };

  return {
    payment,
    order,
    refund,
    notes,
    referenceId: order.receipt || notes.referenceId || payment.order_id || order.id || null,
    paymentId: payment.id || refund.payment_id || null,
    orderId: payment.order_id || order.id || null,
    amount: typeof payment.amount === 'number' ? payment.amount / 100 : null,
    topic: notes.topic || 'Statutory Legal Notice'
  };
}

async function sendWebhookEmail({ env, eventName, eventId, details }) {
  const emailUser = String(env.GMAIL_USER || 'namaste@nyayamitrawb.in').trim();
  const emailPass = String(env.GMAIL_APP_PASSWORD || env.EMAIL_PASSWORD || '').replace(/\s+/g, '');

  if (!emailPass) return;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: emailUser, pass: emailPass },
    connectionTimeout: 3000,
    greetingTimeout: 3000,
    socketTimeout: 3000
  });

  await transporter.sendMail({
    from: `"NyayaMitra Razorpay Webhook" <${emailUser}>`,
    to: emailUser,
    subject: `[Razorpay Webhook] ${eventName} - ${details.referenceId || details.orderId || eventId}`,
    html: `
      <div style="font-family:Arial,sans-serif;padding:20px;color:#0f172a;">
        <h2 style="margin:0 0 16px;color:#0f2b48;">NyayaMitra Razorpay Webhook Received</h2>
        <p><strong>Event:</strong> ${eventName}</p>
        <p><strong>Event ID:</strong> ${eventId}</p>
        <p><strong>Reference:</strong> ${details.referenceId || 'Not supplied by Razorpay'}</p>
        <p><strong>Order ID:</strong> ${details.orderId || 'Not supplied'}</p>
        <p><strong>Payment ID:</strong> ${details.paymentId || 'Not supplied'}</p>
        <p><strong>Amount:</strong> ${details.amount === null ? 'Not supplied' : `INR ${details.amount.toFixed(2)}`}</p>
        <p><strong>Topic:</strong> ${details.topic}</p>
      </div>
    `
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawBody = await readRawBody(req);
  const signature = getFirstHeaderValue(req.headers['x-razorpay-signature']);
  const eventId = getFirstHeaderValue(req.headers['x-razorpay-event-id']);
  const webhookSecret = String(process.env.RAZORPAY_KEY_SECRET || '').trim();

  if (!isValidSignature(rawBody, signature, webhookSecret)) {
    return res.status(401).json({ error: 'Invalid Razorpay webhook signature' });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody.toString('utf8'));
  } catch {
    return res.status(400).json({ error: 'Invalid JSON webhook payload' });
  }

  const eventName = String(payload.event || 'unknown');
  if (!eventId) {
    return res.status(400).json({ error: 'Missing x-razorpay-event-id header' });
  }

  const supabaseUrl = normaliseSupabaseUrl(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL);
  const supabaseServiceRoleKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('[Razorpay Webhook]: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
    return res.status(503).json({ error: 'Webhook persistence is not configured' });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
  const details = getPaymentDetails(payload);

  // A unique primary key on webhook_events.event_id makes Razorpay's at-least-once delivery safe.
  const { error: eventInsertError } = await supabase.from('webhook_events').insert({
    event_id: eventId,
    event_name: eventName,
    razorpay_order_id: details.orderId,
    razorpay_payment_id: details.paymentId,
    payload
  });

  if (eventInsertError?.code === '23505') {
    return res.status(200).json({ received: true, duplicate: true });
  }

  if (eventInsertError) {
    console.error('[Razorpay Webhook]: Could not create idempotency record:', eventInsertError.message);
    return res.status(503).json({ error: 'Webhook idempotency ledger is unavailable' });
  }

  try {
    if (SUPPORTED_EVENTS.has(eventName) && details.referenceId) {
      const { data: existingTransaction } = await supabase
        .from('pro_transactions')
        .select('citizen_name, phone, district, dispute_topic')
        .eq('id', details.referenceId)
        .maybeSingle();

      const isPaid = eventName === 'payment.captured' || eventName === 'order.paid';
      const isRefund = eventName === 'refund.processed';
      const transactionPayload = {
        id: details.referenceId,
        citizen_name: existingTransaction?.citizen_name || 'Razorpay Webhook Payment',
        phone: existingTransaction?.phone || 'Not provided',
        district: existingTransaction?.district || 'West Bengal',
        dispute_topic: existingTransaction?.dispute_topic || details.topic,
        utr_number: details.paymentId || eventName,
        amount: details.amount === null ? 99 : details.amount,
        submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      if (isPaid || isRefund || eventName === 'payment.authorized' || eventName === 'payment.failed') {
        const { error: transactionError } = await supabase
          .from('pro_transactions')
          .upsert([transactionPayload], { onConflict: 'id' });

        if (transactionError) {
          throw new Error(`Pro transaction update failed: ${transactionError.message}`);
        }
      }
    }

    const { error: auditError } = await supabase.from('admin_audit_logs').insert({
      id: `RZP-WEBHOOK-${eventId}`,
      admin_user: 'RAZORPAY_WEBHOOK',
      ip_address: 'razorpay-webhook',
      submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      user_agent: `Razorpay event: ${eventName}`
    });

    if (auditError) {
      console.warn('[Razorpay Webhook]: Audit ledger write failed:', auditError.message);
    }

    await sendWebhookEmail({ env: process.env, eventName, eventId, details });

    return res.status(200).json({ received: true });
  } catch (error) {
    // Do not mark a partially processed event as complete. Razorpay can retry it.
    const { error: deleteError } = await supabase
      .from('webhook_events')
      .delete()
      .eq('event_id', eventId);

    if (deleteError) {
      console.error('[Razorpay Webhook]: Could not release failed event:', deleteError.message);
    }
    console.error('[Razorpay Webhook]: Processing failed:', error instanceof Error ? error.message : error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}
