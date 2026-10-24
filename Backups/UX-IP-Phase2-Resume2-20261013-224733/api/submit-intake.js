import crypto from 'node:crypto';
import net from 'node:net';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';
import { createLocalTicketId, isLocalIntakeMockEnabled, localIntakeMockRecord } from './local-intake-mock.js';

export const config = { api: { bodyParser: false } };

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let bytes = 0;
    req.on('data', chunk => {
      bytes += chunk.length;
      if (bytes > 24 * 1024) {
        reject(new Error('Request body too large'));
        req.destroy();
        return;
      }
      chunks.push(Buffer.from(chunk));
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function getTrustedClientIpv4(req) {
  // Vercel documents x-forwarded-for/x-real-ip as the public client address.
  // Do not use req.socket or any client body field as a fallback.
  const forwarded = req.headers['x-forwarded-for'];
  const realIp = req.headers['x-real-ip'];
  const candidate = typeof realIp === 'string'
    ? realIp
    : Array.isArray(forwarded) ? forwarded[0] : forwarded;
  if (typeof candidate !== 'string') return null;

  const ip = candidate.split(',')[0].trim();
  if (net.isIP(ip) !== 4) return null;
  const octets = ip.split('.').map(Number);
  if (octets.some(octet => octet < 0 || octet > 255)) return null;
  // Do not persist loopback, private, link-local, documentation or unspecified ranges.
  if (octets[0] === 0 || octets[0] === 10 || octets[0] === 127 || octets[0] >= 224) return null;
  if (octets[0] === 169 && octets[1] === 254) return null;
  if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) return null;
  if (octets[0] === 192 && octets[1] === 168) return null;
  if (octets[0] === 100 && octets[1] >= 64 && octets[1] <= 127) return null;
  if (octets[0] === 198 && (octets[1] === 18 || octets[1] === 19)) return null;
  if (octets[0] === 198 && octets[1] === 51 && octets[2] === 100) return null;
  return ip;
}

function validText(value, maxLength, required = false) {
  if (typeof value !== 'string') return !required;
  const clean = value.trim();
  return (!required || clean.length > 0) && clean.length <= maxLength;
}

async function sendReferralEmail(item, clientIpv4) {
  const user = String(process.env.GMAIL_USER || 'namaste@nyayamitrawb.in').trim();
  const password = String(process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD || '').replace(/\s+/g, '');
  if (!password) return { sent: false, reason: 'email_not_configured' };

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass: password },
    connectionTimeout: 3500,
    greetingTimeout: 3500,
    socketTimeout: 5000
  });
  const h = escapeHtml;
  const recipients = `${user}, khantanweer85@gmail.com`;
  await transporter.sendMail({
    from: `"NyayaMitra Intake" <${user}>`,
    to: recipients,
    subject: `[Confidential referral intake] ${h(item.id)} - ${h(item.district)}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#0f172a">
      <h2 style="color:#0f2b48">Confidential citizen referral intake</h2>
      <p><strong>Ticket:</strong> ${h(item.id)}</p>
      <p><strong>Name:</strong> ${h(item.citizenName)}</p>
      <p><strong>Phone:</strong> ${h(item.phone)}</p>
      <p><strong>District:</strong> ${h(item.district)}</p>
      <p><strong>Topic:</strong> ${h(item.subcategoryTitle)}</p>
      <p><strong>Track:</strong> ${h(item.preferredAidType)}</p>
      <p><strong>BPL declared:</strong> ${item.isBPL ? 'Yes' : 'No'}</p>
      <p><strong>Submitted:</strong> ${h(item.timestamp)}</p>
      <p><strong>IPv4 captured:</strong> ${clientIpv4 ? h(clientIpv4) : 'Unavailable (no verified public IPv4 was provided by the platform)'}</p>
      ${item.briefSummary ? `<p><strong>Citizen summary:</strong><br>${h(item.briefSummary)}</p>` : ''}
      <p style="font-size:11px;color:#64748b">Sensitive personal data. Handle confidentially; do not forward or export except for authorized intake administration.</p>
    </div>`
  });
  return { sent: true };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Vary', 'Origin');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let payload;
  try {
    payload = JSON.parse(await readBody(req));
  } catch {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  if (payload?.consentGiven !== true) return res.status(400).json({ error: 'Affirmative consent is required' });
  if (!validText(payload.citizenName, 160, true) || !validText(payload.phone, 20, true) || !/^\d{10}$/.test(payload.phone.trim())) {
    return res.status(400).json({ error: 'Please provide a name and valid 10-digit phone number' });
  }
  if (!validText(payload.district, 80, true) || !validText(payload.subcategoryTitle, 240, true) || !validText(payload.briefSummary || '', 2000)) {
    return res.status(400).json({ error: 'One or more intake fields are invalid' });
  }
  if (!['DLSA', 'ADVOCATE'].includes(payload.preferredAidType) || typeof payload.isBPL !== 'boolean') {
    return res.status(400).json({ error: 'Invalid aid preference' });
  }

  if (isLocalIntakeMockEnabled()) {
    const item = localIntakeMockRecord(payload, createLocalTicketId());
    return res.status(200).json({ status: 'success', item, mock: true, emailStatus: 'not_sent_local_mock' });
  }

  const supabaseUrl = String(process.env.SUPABASE_URL || '').trim().replace(/\/rest\/v1\/?$/, '');
  const serviceRoleKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();
  if (!supabaseUrl || !serviceRoleKey) return res.status(503).json({ error: 'Secure intake persistence is not configured' });

  const clientIpv4 = getTrustedClientIpv4(req);
  const item = {
    id: createLocalTicketId(),
    citizenName: payload.citizenName.trim(),
    phone: payload.phone.trim(),
    district: payload.district.trim(),
    subcategoryTitle: payload.subcategoryTitle.trim(),
    briefSummary: (payload.briefSummary || '').trim(),
    isBPL: payload.isBPL,
    preferredAidType: payload.preferredAidType,
    consentGiven: true,
    timestamp: new Date().toISOString(),
    clientIpv4,
    ipCaptureStatus: clientIpv4 ? 'captured' : 'unavailable'
  };

  const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const caseRow = {
    id: item.id,
    citizen_name: item.citizenName,
    phone: item.phone,
    district: item.district,
    subcategory_title: item.subcategoryTitle,
    brief_summary: item.briefSummary,
    is_bpl: item.isBPL,
    preferred_aid_type: item.preferredAidType,
    consent_given: true,
    timestamp: item.timestamp
  };

  // Store the case and sensitive IP in one database transaction through a narrowly scoped RPC.
  const { error: saveError } = await supabase.rpc('create_case_intake_with_ipv4', {
    intake_row: caseRow,
    client_ipv4: clientIpv4
  });
  if (saveError) {
    console.error('[Intake persistence error]:', saveError.message);
    return res.status(503).json({ error: 'Unable to securely save intake. Please retry.' });
  }

  let emailStatus = 'sent';
  try {
    const result = await sendReferralEmail(item, clientIpv4);
    if (!result.sent) emailStatus = result.reason;
  } catch (error) {
    emailStatus = 'failed';
    console.error('[Referral notification error]:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Never send the sensitive address back to the citizen browser/localStorage.
  const { clientIpv4: _privateIpv4, ipCaptureStatus: _privateStatus, ...citizenItem } = item;
  return res.status(200).json({ status: 'success', item: citizenItem, emailStatus });
}
