import crypto from 'node:crypto';
import { createClient } from '@supabase/supabase-js';
import { getLocalMockIpv4, isLocalIntakeMockEnabled } from './local-intake-mock.js';

function constantTimeEqual(left, right) {
  const a = Buffer.from(String(left || ''), 'utf8');
  const b = Buffer.from(String(right || ''), 'utf8');
  return a.length > 0 && a.length === b.length && crypto.timingSafeEqual(a, b);
}

function getSupabase() {
  const url = String(process.env.SUPABASE_URL || '').trim().replace(/\/rest\/v1\/?$/, '');
  const serviceKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, private');
  res.setHeader('Vary', 'Authorization');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const localMockEnabled = isLocalIntakeMockEnabled();
  const expectedToken = String(process.env.INTAKE_IP_ADMIN_TOKEN || (localMockEnabled ? 'local-ip-review-token' : '')).trim();
  const authorization = String(req.headers.authorization || '');
  const providedToken = authorization.startsWith('Bearer ') ? authorization.slice(7).trim() : '';
  if (!expectedToken || !constantTimeEqual(providedToken, expectedToken)) {
    return res.status(expectedToken ? 401 : 503).json({ error: 'Authorized IP lookup is not configured' });
  }

  const ticketsParam = String(req.query?.tickets || '');
  const tickets = [...new Set(ticketsParam.split(',').map(value => value.trim().toUpperCase()).filter(value => /^WB-REF-\d{6}$/.test(value)))].slice(0, 100);
  if (tickets.length === 0) return res.status(200).json({ items: [] });

  if (localMockEnabled) {
    return res.status(200).json({ items: getLocalMockIpv4(tickets), mock: true });
  }

  const supabase = getSupabase();
  if (!supabase) return res.status(503).json({ error: 'Server-side data access is not configured' });

  const { data, error } = await supabase
    .from('case_intake_ip_audit')
    .select('ticket_id, client_ipv4, ip_capture_status, captured_at')
    .in('ticket_id', tickets);

  if (error) {
    console.error('[Admin intake IP lookup]:', error.message);
    return res.status(503).json({ error: 'IP records are temporarily unavailable' });
  }

  return res.status(200).json({
    items: (data || []).map(row => ({
      ticketId: row.ticket_id,
      clientIpv4: row.client_ipv4,
      ipCaptureStatus: row.ip_capture_status,
      capturedAt: row.captured_at
    }))
  });
}
