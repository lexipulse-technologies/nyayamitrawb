/**
 * NYAYAMITRA PRO: RAZORPAY LIVE ORDER CREATION SERVERLESS GATEWAY
 * Target: Vercel Edge Serverless / Node.js Runtime
 * Calling: POST https://api.razorpay.com/v1/orders
 * Beneficiary / Merchant: LEXIPULSE TECHNOLOGIES
 * Credentials: Live Production Key
 */

import https from 'node:https';

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

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { referenceId, disputeTopic } = req.body || {};

  // Amount whitelist (paise): ₹99 drafter default, ₹199 dispatch, ₹499 advocate connect
  const ALLOWED = { 9900: true, 19900: true, 49900: true };
  const body = req.body || {};
  const amountPaise = ALLOWED[Number(body.amount)] ? Number(body.amount) : 9900;

  const keyId = (process.env.RAZORPAY_KEY_ID || 'rzp_live_TkN8MUwR01Npxf').trim();
  const keySecret = (process.env.RAZORPAY_KEY_SECRET || '7L6obgTM86jcU2egxsXEpvlL').trim();

  if (!keyId || !keySecret) {
    return res.status(500).json({ error: 'Razorpay Live credentials not configured on server.' });
  }

  const orderPayload = JSON.stringify({
    amount: amountPaise,
    currency: 'INR',
    receipt: referenceId || `NM-DOC-${Date.now()}`,
    notes: {
      platform: 'NyayaMitra Pro',
      merchant: 'LEXIPULSE TECHNOLOGIES',
      topic: disputeTopic || 'Statutory Legal Notice'
    }
  });

  const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.razorpay.com',
      port: 443,
      path: '/v1/orders',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
        'Content-Length': Buffer.byteLength(orderPayload)
      },
      timeout: 15000
    };

    const razorpayReq = https.request(options, (razorpayRes) => {
      let responseBody = '';
      razorpayRes.setEncoding('utf8');
      razorpayRes.on('data', (chunk) => { responseBody += chunk; });
      razorpayRes.on('end', () => {
        try {
          const parsed = JSON.parse(responseBody);
          if (razorpayRes.statusCode >= 200 && razorpayRes.statusCode < 300) {
            res.status(200).json({
              orderId: parsed.id,
              amount: parsed.amount,
              currency: parsed.currency,
              keyId: keyId
            });
          } else {
            console.error('[Razorpay Live Order Error]:', parsed);
            res.status(razorpayRes.statusCode || 500).json({
              error: parsed.error?.description || 'Failed to create Razorpay live order'
            });
          }
        } catch (e) {
          res.status(500).json({ error: 'Invalid response from Razorpay Live API' });
        }
        resolve();
      });
    });

    razorpayReq.on('timeout', () => {
      razorpayReq.destroy();
      res.status(504).json({ error: 'Razorpay Live order creation timed out.' });
      resolve();
    });

    razorpayReq.on('error', (err) => {
      console.error('[Razorpay Request Exception]:', err.message);
      res.status(500).json({ error: err.message });
      resolve();
    });

    razorpayReq.end(orderPayload);
  });
}