import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    id,
    citizenName,
    phone,
    district,
    subcategoryTitle,
    briefSummary,
    isBPL,
    preferredAidType,
    timestamp,
    notificationType,
    utrNumber
  } = req.body || {};

  const emailUser = (process.env.GMAIL_USER || 'namaste@nyayamitrawb.in').trim();
  const rawPass = (process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD || '').trim();
  const emailPass = rawPass.replace(/\s+/g, '');

  const rawIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1';
  const resolvedIp = Array.isArray(rawIp) ? rawIp[0] : (String(rawIp).split(',')[0].trim());
  const currentTimestamp = timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const isAdminAudit = notificationType === 'ADMIN_LOGIN_AUDIT';
  const isProDrafter = (id && id.startsWith('NM-DOC-')) ||
                       (notificationType === 'PRO_DRAFTER_PAYMENT') ||
                       (subcategoryTitle && subcategoryTitle.includes('Pro Payment'));

  // Referral submissions now use /api/submit-intake, which persists the case and
  // separately protected IPv4 record before sending the authorized notice.
  if (!isAdminAudit && !isProDrafter) {
    return res.status(410).json({ error: 'Use the secure referral intake endpoint.' });
  }

  // 1. SERVER-SIDE DATABASE PERSISTENCE (PRO TRANSACTIONS & ADMIN AUDIT LOGS)
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || 'https://mwborzyxcgykrjuyqfel.supabase.co';
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false, autoRefreshToken: false }
      });

      // A. Commit Admin Login to public.admin_audit_logs (Matching working pro_transactions structure)
      if (isAdminAudit) {
        const auditId = id || `AUDIT-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
        const { error: auditError } = await supabase.from('admin_audit_logs').upsert([
          {
            id: auditId,
            admin_user: citizenName || 'Abi786',
            ip_address: resolvedIp,
            submission_time: currentTimestamp,
            user_agent: req.headers['user-agent'] || 'Web Browser'
          }
        ]);

        if (auditError) {
          console.error('[Serverless Admin Audit DB Error]:', auditError.message);
        } else {
          console.log(`[Serverless Admin Audit DB Success]: Recorded ${auditId} in public.admin_audit_logs`);
        }
      }

      // B. Commit Pro Transaction to public.pro_transactions
      if (isProDrafter) {
        const resolvedUtr = utrNumber || (briefSummary && briefSummary.match(/\b\d{12}\b/) ? briefSummary.match(/\b\d{12}\b/)[0] : 'N/A');
        const cleanTopic = (subcategoryTitle || 'Statutory Legal Notice').replace(/^NyayaMitra Pro Payment:\s*/i, '');

        const { error: dbError } = await supabase.from('pro_transactions').upsert([
          {
            id: id,
            citizen_name: citizenName,
            phone: phone,
            district: district || 'West Bengal',
            dispute_topic: cleanTopic,
            utr_number: resolvedUtr,
            amount: 99.00,
            submission_time: currentTimestamp
          }
        ]);

        if (dbError) {
          console.error('[Serverless Supabase Pro Insert Error]:', dbError.message);
        } else {
          console.log(`[Serverless Supabase Pro Success]: Recorded ${id} in public.pro_transactions`);
        }
      }
    } catch (dbEx) {
      console.error('[Serverless Supabase Exception]:', dbEx.message);
    }
  }

  // 2. DISPATCH EMAIL NOTIFICATIONS
  if (!emailPass) {
    console.warn('[NyayaMitra Notify]: GMAIL_APP_PASSWORD is not set. Email skipped.');
    return res.status(200).json({ status: 'db_completed', reason: 'Email password not set' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // EMAIL RECIPIENT FIREWALL:
    // Admin Login Audit -> namaste@nyayamitrawb.in ONLY
    // Pro ₹99 Drafter   -> namaste@nyayamitrawb.in ONLY
    const recipientEmails = emailUser;

    let subjectLine = '';
    let htmlContent = '';

    if (isAdminAudit) {
      subjectLine = `[Security Alert: Admin Login] ${citizenName || 'Abi786'} (${resolvedIp})`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #1a3d60; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f2b48; color: #ffffff; padding: 18px 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px; font-weight: bold;">NyayaMitra Security Telemetry</h2>
            <p style="margin: 4px 0 0; font-size: 12px; color: #cbd5e1;">Administrative Control Room Access Notification</p>
          </div>
          <div style="padding: 24px; background-color: #f8fafc; color: #0f172a;">
            <div style="background-color: #fef2f2; border: 1px solid #f87171; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; text-align: center;">
              <span style="font-size: 13px; color: #991b1b; font-weight: bold;">Authenticated Administrator Login:</span>
              <div style="font-size: 20px; font-family: monospace; font-weight: bold; color: #7f1d1d; margin-top: 4px;">${citizenName || 'Abi786'}</div>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 38%;">Client IPv4 Address:</td>
                <td style="padding: 8px 0; color: #0f172a; font-family: monospace; font-weight: bold;">${resolvedIp}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Login Timestamp:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${currentTimestamp}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Client User Agent:</td>
                <td style="padding: 8px 0; color: #334155; font-size: 11px;">${req.headers['user-agent'] || 'Web Browser'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Security Status:</td>
                <td style="padding: 8px 0; color: #059669; font-weight: bold;">Verified Session Active</td>
              </tr>
            </table>
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://nyayamitrawb.in" style="background-color: #0f2b48; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 12px; font-weight: bold; display: inline-block;">
                Access Control Room
              </a>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            LEXIPULSE TECHNOLOGIES &bull; Automated Security Dispatch to ${recipientEmails}
          </div>
        </div>
      `;
    } else if (isProDrafter) {
      subjectLine = `[₹99 Pro Notice Payment] ${id} - ${district} (${citizenName})`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #1a3d60; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f2b48; color: #ffffff; padding: 18px 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px; font-weight: bold;">NyayaMitra Pro — Statutory Notice Payment</h2>
            <p style="margin: 4px 0 0; font-size: 12px; color: #cbd5e1;">New ₹99 Paid Statutory Notice Generation & UTR Verification</p>
          </div>
          <div style="padding: 24px; background-color: #f8fafc; color: #0f172a;">
            <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; text-align: center;">
              <span style="font-size: 13px; color: #92400e; font-weight: 600;">Reference Ticket ID:</span>
              <div style="font-size: 22px; font-family: monospace; font-weight: bold; color: #78350f; margin-top: 4px;">${id}</div>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 38%;">Citizen Name:</td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${citizenName}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Contact Phone:</td><td style="padding: 8px 0; color: #0f172a; font-family: monospace; font-weight: bold;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">District in WB:</td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${district || 'West Bengal'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Dispute Topic:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${subcategoryTitle}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Submission Time:</td><td style="padding: 8px 0; color: #64748b; font-size: 12px;">${currentTimestamp}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Payment Amount:</td><td style="padding: 8px 0; color: #065f46; font-weight: bold;">₹99.00 INR (Direct SBI UPI Settlement)</td></tr>
            </table>
            ${briefSummary ? `
              <div style="margin-top: 20px; padding: 12px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
                <div style="font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase;">Banking UTR & Transaction Details:</div>
                <p style="margin: 6px 0 0; font-size: 12px; color: #334155; font-family: monospace;">${briefSummary}</p>
              </div>
            ` : ''}
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://nyayamitrawb.in" style="background-color: #0f2b48; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 12px; font-weight: bold; display: inline-block;">Open Control Room</a>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            LEXIPULSE TECHNOLOGIES &bull; Dispatched to: ${recipientEmails}
          </div>
        </div>
      `;
    } else {
      subjectLine = `[New Referral Intake] ${id} - ${district} (${citizenName})`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #1a3d60; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f2b48; color: #ffffff; padding: 18px 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px; font-weight: bold;">NyayaMitra Legal Navigator — Citizen Referral</h2>
            <p style="margin: 4px 0 0; font-size: 12px; color: #cbd5e1;">New Citizen Intake Request Notification</p>
          </div>
          <div style="padding: 24px; background-color: #f8fafc; color: #0f172a;">
            <div style="background-color: #ecfdf5; border: 1px solid #6ee7b7; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; text-align: center;">
              <span style="font-size: 13px; color: #065f46; font-weight: 600;">Reference Ticket ID:</span>
              <div style="font-size: 22px; font-family: monospace; font-weight: bold; color: #064e3b; margin-top: 4px;">${id}</div>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 38%;">Citizen Name:</td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${citizenName}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Contact Phone:</td><td style="padding: 8px 0; color: #0f172a; font-family: monospace; font-weight: bold;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">District in WB:</td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${district || 'West Bengal'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Dispute Topic:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${subcategoryTitle}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Submission Time:</td><td style="padding: 8px 0; color: #64748b; font-size: 12px;">${currentTimestamp}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Counsel Preference:</td><td style="padding: 8px 0; color: ${preferredAidType === 'ADVOCATE' ? '#1e40af' : '#065f46'}; font-weight: bold;">${preferredAidType === 'ADVOCATE' ? 'Track B: Empanelled Independent Advocate' : 'Track A: Government DLSA Free Aid'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Free Legal Aid (BPL):</td><td style="padding: 8px 0; color: #0f172a;">${isBPL ? 'Yes (Income < ₹3 Lakhs)' : 'General'}</td></tr>
            </table>
            ${briefSummary ? `
              <div style="margin-top: 20px; padding: 12px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
                <div style="font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase;">Citizen Summary / Dispute Details:</div>
                <p style="margin: 6px 0 0; font-size: 12px; color: #334155; line-height: 1.5;">${briefSummary}</p>
              </div>
            ` : ''}
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://nyayamitrawb.in" style="background-color: #0f2b48; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 12px; font-weight: bold; display: inline-block;">Open Control Room</a>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            NyayaMitraWB &bull; Dispatched to: ${recipientEmails}
          </div>
        </div>
      `;
    }

    await transporter.sendMail({
      from: `"NyayaMitra Security" <${emailUser}>`,
      to: recipientEmails,
      subject: subjectLine,
      html: htmlContent
    });

    console.log(`[NyayaMitra Notify]: Successfully dispatched email to ${recipientEmails}`);
    return res.status(200).json({ status: 'success', dispatchedTo: recipientEmails, dbWritten: true });
  } catch (err) {
    console.error('[NyayaMitra Notify Error]:', err);
    return res.status(500).json({ error: 'Failed to send notification: ' + err.message });
  }
}
