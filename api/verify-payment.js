/**
 * NYAYAMITRA PRO: CRYPTOGRAPHIC SIGNATURE VERIFICATION & SUPABASE PERSISTENCE
 * Target: Vercel Edge Serverless / Node.js Runtime
 * Algorithm: HMAC-SHA256(order_id + "|" + payment_id, RAZORPAY_KEY_SECRET)
 * Beneficiary / Merchant: LEXIPULSE TECHNOLOGIES
 * Database Target: Supabase Cloud PostgreSQL (mwborzyxcgykrjuyqfel) -> public.pro_transactions
 */

import crypto from 'node:crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

const ALLOWED_ORIGINS = [
  'https://nyayamitrawb.in',
  'https://www.nyayamitrawb.in',
  'https://localhost'
];

function setCors(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Canonical Project Keys as resilient fallbacks
const CANONICAL_SUPABASE_URL = 'https://mwborzyxcgykrjuyqfel.supabase.co';
const CANONICAL_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13Ym9yenl4Y2d5a3JqdXlxZmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4ODczNTIsImV4cCI6MjAzMjQ2MzM1Mn0.Kk68-OQk8yF6-Xg2iSgV46hQ_x7tD3w5n4r_XQyL9z4';

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    referenceId,
    citizenName,
    phone,
    district,
    disputeTopic
  } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({
      verified: false,
      error: 'Missing required Razorpay payment credentials.'
    });
  }

  const keySecret = (process.env.RAZORPAY_KEY_SECRET || '7L6obgTM86jcU2egxsXEpvlL').trim();

  // 1. CRYPTOGRAPHIC HMAC-SHA256 SIGNATURE VERIFICATION
  const expectedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  const isAuthentic = crypto.timingSafeEqual(
    Buffer.from(expectedSignature, 'utf8'),
    Buffer.from(razorpay_signature, 'utf8')
  );

  if (!isAuthentic) {
    console.warn(`[Security Alert]: Signature mismatch for Order: ${razorpay_order_id}`);
    return res.status(400).json({
      verified: false,
      error: 'Cryptographic signature mismatch. Unauthorized transaction rejected.'
    });
  }

  const currentTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const finalTicketId = referenceId || razorpay_order_id;
  let dbSaved = false;

  // 2. HARDENED PERSISTENCE IN SUPABASE CLOUD (public.pro_transactions)
  const supabaseUrl = (
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    CANONICAL_SUPABASE_URL
  ).trim();

  const supabaseKey = (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    CANONICAL_SUPABASE_ANON_KEY
  ).trim();

  try {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false }
    });

    const payload = {
      id: finalTicketId,
      citizen_name: citizenName || 'Pro Drafter User',
      phone: phone || 'Not provided',
      district: district || 'West Bengal',
      dispute_topic: disputeTopic || 'Statutory Notice',
      utr_number: razorpay_payment_id,
      amount: 99.00,
      submission_time: currentTimestamp
    };

    // Primary: Upsert with conflict resolution on primary key
    const { error: upsertError } = await supabase
      .from('pro_transactions')
      .upsert([payload], { onConflict: 'id' });

    if (!upsertError) {
      dbSaved = true;
      console.log(`[Supabase DB Success]: Recorded ${finalTicketId} (Razorpay ID: ${razorpay_payment_id})`);
    } else {
      console.warn('[Supabase Upsert Warning, attempting direct insert]:', upsertError.message);
      
      // Secondary Fallback: Direct Insert
      const { error: insertError } = await supabase
        .from('pro_transactions')
        .insert([payload]);

      if (!insertError) {
        dbSaved = true;
        console.log(`[Supabase Fallback Insert Success]: Recorded ${finalTicketId}`);
      } else {
        console.error('[Supabase DB Fatal Error]:', insertError.message);
      }
    }
  } catch (dbEx) {
    console.error('[Supabase Client Exception]:', dbEx.message);
  }

  // 3. DISPATCH TRANSACTIONAL EMAIL TO namaste@nyayamitrawb.in
  const emailUser = (process.env.GMAIL_USER || 'namaste@nyayamitrawb.in').trim();
  const rawPass = (process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD || '').trim();
  const emailPass = rawPass.replace(/\s+/g, '');

  if (emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: emailUser, pass: emailPass }
      });

      await transporter.sendMail({
        from: `"NyayaMitra Settlement" <${emailUser}>`,
        to: emailUser,
        subject: `[₹99 Paid Verified Live] ${finalTicketId} - Razorpay: ${razorpay_payment_id}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #1a3d60; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #0f2b48; color: #ffffff; padding: 18px 24px; text-align: center;">
              <h2 style="margin: 0; font-size: 20px;">NyayaMitra Pro — Live Payment Received</h2>
              <p style="margin: 4px 0 0; font-size: 12px; color: #cbd5e1;">Razorpay Live Cryptographic Signature Confirmed</p>
            </div>
            <div style="padding: 24px; background-color: #f8fafc; color: #0f172a;">
              <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 40%;">Reference Ticket ID:</td><td style="padding: 8px 0; font-weight: bold; font-family: monospace;">${finalTicketId}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Razorpay Payment ID:</td><td style="padding: 8px 0; font-weight: bold; font-family: monospace; color: #065f46;">${razorpay_payment_id}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Razorpay Order ID:</td><td style="padding: 8px 0; font-family: monospace;">${razorpay_order_id}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Citizen Name:</td><td style="padding: 8px 0; font-weight: bold;">${citizenName}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Contact Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">District:</td><td style="padding: 8px 0;">${district}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Dispute Topic:</td><td style="padding: 8px 0;">${disputeTopic}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Amount Settled:</td><td style="padding: 8px 0; font-weight: bold; color: #059669;">₹99.00 INR</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Database Status:</td><td style="padding: 8px 0; font-weight: bold; color: ${dbSaved ? '#059669' : '#b91c1c'};">${dbSaved ? 'Saved to Supabase' : 'Database Retry Pending'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Settlement Time:</td><td style="padding: 8px 0;">${currentTimestamp}</td></tr>
              </table>
            </div>
            <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8;">
              LEXIPULSE TECHNOLOGIES &bull; Automated Payment Gateway Live Settlement
            </div>
          </div>
        `
      });
    } catch (mailErr) {
      console.warn('[Confirmation Email Notice]:', mailErr.message);
    }
  }

  // 4. RETURN CONFIRMATION TO CLIENT
  return res.status(200).json({
    verified: true,
    status: 'SUCCESS',
    dbSaved: dbSaved,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id
  });
}