import { createHmac, timingSafeEqual } from 'crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const ADVOCATE_EMAIL = 'khantanweer85@gmail.com';  // CONFIRMED (Decision D1): advocate action inbox
const ADMIN_EMAIL = 'namaste@nyayamitrawb.in';     // CONFIRMED (Decision D2): audit-trail inbox
const CALENDLY_URL = 'https://calendly.com/namaste-nyayamitrawb/60mins'; // 60-min lawyer consultation scheduling

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '\u0026amp;')
    .replace(/</g, '\u0026lt;')
    .replace(/>/g, '\u0026gt;')
    .replace(/"/g, '\u0026quot;')
    .replace(/'/g, '\u0026#39;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature,
          citizenName, mobile, citizenEmail, comment,
          workflowId, workflowTitle } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature ||
      !citizenName || !mobile || !citizenEmail) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const expected = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
  const provided = String(razorpay_signature);
  const ok = expected.length === provided.length &&
    timingSafeEqual(Buffer.from(expected), Buffer.from(provided));
  if (!ok) return res.status(401).json({ error: 'Invalid payment signature' });

  const { error: dbError } = await supabase
    .from('advocate_connect_requests')
    .insert({
      citizen_name: citizenName,
      citizen_mobile: mobile,
      citizen_email: citizenEmail,
      citizen_comment: comment || null,
      workflow_id: workflowId || null,
      workflow_title: workflowTitle || null,
      razorpay_payment_id,
      razorpay_order_id,
      amount: 499,
      notified_advocate: true
    });
  if (dbError) console.error('[AdvocateConnect] DB insert failed:', dbError);

  if (!process.env.GMAIL_APP_PASSWORD) {
    return res.status(200).json({ status: 'db_completed', reason: 'email_creds_missing' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD }
    });

    const safeName = escapeHtml(citizenName);
    const safeEmail = escapeHtml(citizenEmail);
    const safeComment = escapeHtml(comment || '');
    const safeWorkflowTitle = escapeHtml(workflowTitle || '');
    const safePaymentId = escapeHtml(razorpay_payment_id);

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #1a3d60;border-radius:12px;overflow:hidden">
        <div style="background:#0f2b48;color:#fff;padding:18px 24px;text-align:center">
          <h2 style="margin:0">NyayaMitra Advocate Connect — Payment Confirmed (₹499)</h2>
        </div>
        <div style="padding:24px;background:#f8fafc;color:#0f172a;font-size:14px">
          <p style="background:#ecfdf5;border:1px solid #6ee7b7;border-radius:8px;padding:10px 14px"><b style="color:#065f46">PAYMENT CONFIRMED:</b> Razorpay payment received and signature verified.</p>
          <p><b>Citizen:</b> ${safeName}</p>
          <p><b>Mobile:</b> ${escapeHtml(mobile)} &nbsp;|&nbsp; <b>Email:</b> ${safeEmail}</p>
          <p><b>Workflow:</b> ${safeWorkflowTitle || '—'} (${escapeHtml(workflowId || '')})</p>
          <p><b>Query:</b> ${safeComment || '—'}</p>
          <p><b>Payment ID:</b> <code>${safePaymentId}</code> (signature verified)</p>
          <div style="background:#fffbeb;border:1px solid #f59e0b;border-radius:8px;padding:14px 16px;margin-top:14px">
            <b style="color:#92400e">CONSULTATION SCHEDULING (Calendly):</b>
            <p style="margin:8px 0">The citizen has been instructed to schedule the 60-minute consultation with the advocate via this Calendly link:</p>
            <p style="margin:8px 0"><a href="${CALENDLY_URL}" style="color:#1d4ed8;font-weight:bold;word-break:break-all">${CALENDLY_URL}</a></p>
          </div>
          <div style="background:#fef2f2;border:1px solid #f87171;border-radius:8px;padding:12px 16px;margin-top:12px">
            <b style="color:#991b1b">ACTION:</b> Keep the consultation slot ready once the citizen schedules via Calendly. If not scheduled within 24 working hours, call the citizen at ${escapeHtml(mobile)}.
          </div>
        </div>
      </div>`;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: [ADVOCATE_EMAIL, ADMIN_EMAIL],
      subject: `[NyayaMitra Advocate Connect] Payment Confirmed — ${citizenName} — ${mobile}`,
      html
    });

    return res.status(200).json({ success: true });
  } catch (mailError) {
    console.error('[AdvocateConnect] Email failed:', mailError);
    return res.status(200).json({ status: 'db_completed', reason: 'email_failed' });
  }
}
