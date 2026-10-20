import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHmac, timingSafeEqual } from 'crypto';

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'dev-secret-change-in-production';
const COOKIE_NAME = 'nyayamitra_admin_session';

function base64urlDecode(input: string): Buffer {
  const padded = input.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice(0, (input.length % 4) || 4);
  return Buffer.from(padded, 'base64');
}

function verifyJWT(token: string): { valid: boolean; payload?: any } {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return { valid: false };

    const [header, payload, signature] = parts;
    const expectedSignature = createHmac('sha256', JWT_SECRET)
      .update(`${header}.${payload}`)
      .digest();
    
    const providedSignature = base64urlDecode(signature);
    
    if (!timingSafeEqual(expectedSignature, providedSignature)) {
      return { valid: false };
    }

    const decodedPayload = JSON.parse(base64urlDecode(payload).toString());
    
    if (decodedPayload.exp && decodedPayload.exp * 1000 < Date.now()) {
      return { valid: false };
    }

    return { valid: true, payload: decodedPayload };
  } catch {
    return { valid: false };
  }
}

function getCookie(req: VercelRequest, name: string): string | undefined {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return undefined;
  const cookies = cookieHeader.split(';').map(c => c.trim());
  for (const cookie of cookies) {
    const [key, ...valueParts] = cookie.split('=');
    if (key === name) return valueParts.join('=');
  }
  return undefined;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = getCookie(req, COOKIE_NAME);
  
  if (!token) {
    return res.status(401).json({ authenticated: false, error: 'No session' });
  }

  const { valid, payload } = verifyJWT(token);
  
  if (!valid) {
    res.setHeader('Set-Cookie', `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`);
    return res.status(401).json({ authenticated: false, error: 'Invalid or expired session' });
  }

  return res.status(200).json({ authenticated: true, user: payload });
}