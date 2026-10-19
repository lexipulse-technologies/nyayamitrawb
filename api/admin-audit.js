/**
 * NYAYAMITRA ADMIN SECURITY AUDIT & EMAIL NOTIFICATION GATEWAY
 * Captures true edge IPv4 address, generates 12-hour IST timestamp,
 * and automatically dispatches an immediate security alert to namaste@nyayamitrawb.in.
 */
import nodemailer from 'nodemailer';

function formatTimestampIST(date = new Date()) {
  const kolkataDateStr = date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const d = new Date(kolkataDateStr);

  let hours = d.getHours();
  const minutes = d.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours = hours.toString().padStart(2, '0');
  const timePart = `${formattedHours}:${minutes} ${ampm}`;

  const day = d.getDate().toString().padStart(2, '0');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const datePart = `${day}-${month}-${year}`;

  return `${timePart} / ${datePart}`;
}

function cleanIpv4(rawIp) {
  if (!rawIp) return '127.0.0.1';
  let ip = String(rawIp).trim();

  if (ip.includes(',')) {
    ip = ip.split(',')[0].trim();
  }

  if (ip.startsWith('::ffff:')) {
    ip = ip.replace('::ffff:', '');
  }

  if (ip === '::1') {
    return '127.0.0.1';
  }

  return ip;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const rawIp =
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      '127.0.0.1';

    const clientIpv4 = cleanIpv4(rawIp);
    const timestampFormatted = formatTimestampIST(new Date());
    const userAgent = req.headers['user-agent'] || 'Unknown Browser';

    // Parse incoming payload for admin username (if POST)
    let adminUser = 'Abi786';
    if (req.method === 'POST') {
      try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        if (body?.adminUser) {
          adminUser = String(body.adminUser).trim();
        }
      } catch {}
    }

    // AUTOMATED SECURITY EMAIL NOTIFICATION TO namaste@nyayamitrawb.in
    const emailUser = (process.env.GMAIL_USER || 'namaste@nyayamitrawb.in').trim();
    const rawPass = (process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD || '').trim();
    const emailPass = rawPass.replace(/\s+/g, '');

    if (emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: emailUser,
            pass: emailPass
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000
        });

        const alertHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 2px solid #b45309; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
            <div style="background-color: #0f2b48; color: #ffffff; padding: 18px 24px; text-align: center; border-bottom: 3px solid #f59e0b;">
              <h2 style="margin: 0; font-size: 19px; font-weight: bold; letter-spacing: 0.5px;">NyayaMitra Security Telemetry</h2>
              <p style="margin: 4px 0 0; font-size: 12px; color: #fde047; font-weight: bold;">[Security Audit Active - Anti-Tamper Notice]</p>
            </div>
            <div style="padding: 24px; background-color: #f8fafc; color: #0f172a;">
              <div style="background-color: #fef2f2; border: 1px solid #f87171; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 14px; font-weight: bold; color: #991b1b;">
                  User from IP <span style="font-family: monospace; font-size: 15px; color: #7f1d1d; background: #fee2e2; padding: 2px 6px; border-radius: 4px;">${clientIpv4}</span> has logged into the NyayaMitra Administrative Panel at <span style="color: #7f1d1d;">${timestampFormatted} IST</span>.
                </p>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 40%;">Admin Identity:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${adminUser}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Login IP Address (IPv4):</td>
                  <td style="padding: 8px 0; color: #0f172a; font-family: monospace; font-weight: bold; font-size: 14px;">${clientIpv4}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Timestamp (IST):</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${timestampFormatted} IST</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Device / User Agent:</td>
                  <td style="padding: 8px 0; color: #475569; font-size: 11.5px; font-family: monospace;">${userAgent}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Audit Protocol Status:</td>
                  <td style="padding: 8px 0; color: #047857; font-weight: bold;">Security Audit Active (Anti-Tamper)</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 10px; background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; font-size: 11px; color: #1e40af; line-height: 1.4;">
                <strong>Security Protocol Note:</strong> This automated notification was dispatched from the Vercel edge gateway to preserve an immutable administrative audit trail. If you did not perform this login, immediately review your serverless credentials.
              </div>
              <div style="margin-top: 20px; text-align: center;">
                <a href="https://nyayamitrawb.in" style="background-color: #0f2b48; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 12px; font-weight: bold; display: inline-block;">Open NyayaMitra Control Room</a>
              </div>
            </div>
            <div style="background-color: #f1f5f9; padding: 10px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              NyayaMitra Administrative Security &bull; Dispatched to ${emailUser}
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"NyayaMitra Security Telemetry" <${emailUser}>`,
          to: emailUser,
          subject: `[Security Alert] Admin Login: ${adminUser} from IP: ${clientIpv4} at ${timestampFormatted} IST`,
          html: alertHtml
        });

        console.log(`[Admin Audit Notification]: Dispatched login alert for ${adminUser} (${clientIpv4}) to ${emailUser}`);
      } catch (mailErr) {
        console.warn('[Admin Audit Notification Error]:', mailErr.message);
      }
    } else {
      console.warn('[Admin Audit Notification]: GMAIL_APP_PASSWORD not set, skipping email dispatch.');
    }

    return res.status(200).json({
      success: true,
      ip: clientIpv4,
      timestamp: timestampFormatted,
      userAgent: userAgent
    });
  } catch (err) {
    console.error('[Admin Audit Error]:', err);
    return res.status(200).json({
      success: true,
      ip: '127.0.0.1',
      timestamp: formatTimestampIST(new Date()),
      userAgent: 'Fallback Resolver'
    });
  }
}