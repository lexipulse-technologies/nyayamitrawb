import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHmac, timingSafeEqual } from 'crypto';

const ADMIN_USER = 'abi786';
const ADMIN_PASS_HASH = 'Baabuujii@5623'; // Case-sensitive: matches original credentials
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'dev-secret-change-in-production';
const COOKIE_NAME = 'nyayamitra_admin_session';

function base64url(input: Buffer | string): string {
  return Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function signJWT(payload: object): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  const signature = createHmac('sha256', JWT_SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest();
  const encodedSignature = base64url(signature);
  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body as { username?: string; password?: string };

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const cleanUser = username.trim().toLowerCase();
  const cleanPass = password.trim();

  const isUserValid = constantTimeEqual(cleanUser, ADMIN_USER);
  const isPassValid = constantTimeEqual(cleanPass, ADMIN_PASS_HASH);

  if (!isUserValid || !isPassValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = signJWT({
    sub: 'admin',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60, // 8 hours
  });

  const isProd = process.env.VERCEL_ENV === 'production';
  
  res.setHeader('Set-Cookie', [
    `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${8 * 60 * 60}${isProd ? '' : '; Domain=localhost'}`
  ]);

  return res.status(200).json({ success: true, user: { role: 'admin' } });
}