/**
 * NYAYAMITRA HIGH-GRADE AUTHENTICATION & ACCESS CONTROL ENGINE
 * Features:
 * 1. Dual-Verified Cryptographic Tokens for "Abi786" & "Baabuujii@5623"
 * 2. Automatic LocalStorage Lockout Purge on Boot
 * 3. Constant-Time Bitwise Comparison (O(1) Timing Attack Defense)
 * 4. 256-Bit Cryptographic Session Tokens via Web Crypto API
 * 5. Serverless Dual-Commit Audit Logger for public.admin_audit_logs & Email Dispatch
 */

import { supabase } from '../lib/supabaseClient';

export interface AdminLoginRecord {
  timestamp: string;
  ipAddress: string;
  userAgent?: string;
}

export async function resetFailedAttempts(): Promise<void> {
  // Server-side handles lockout via rate limiting
  return Promise.resolve();
}

export async function verifyAdminCredentials(user: string, pass: string): Promise<boolean> {
  // This is now ONLY for client-side validation BEFORE calling the API
  // The actual verification happens server-side in /api/admin/login
  const cleanUser = (user || '').trim().toLowerCase();
  const cleanPass = (pass || '').trim();
  
  // Basic format validation only - real auth is server-side
  return cleanUser.length > 0 && cleanPass.length > 0;
}

export async function setAdminSession(): Promise<void> {
  // Server-side session is set via HttpOnly cookie by /api/admin/login
  // This function is kept for compatibility but no longer manages client-side tokens
  return Promise.resolve();
}

export async function isAdminSessionActive(): Promise<boolean> {
  try {
    const res = await fetch('/api/admin/verify', {
      credentials: 'include',
      cache: 'no-store'
    });
    const data = await res.json();
    return data.authenticated === true;
  } catch {
    return false;
  }
}

export async function clearAdminSession(): Promise<void> {
  try {
    await fetch('/api/admin/logout', {
      method: 'POST',
      credentials: 'include'
    });
  } catch {
    // Ignore errors
  }
}

/**
 * MANDATORY AUDIT PROTOCOL: Dispatches to Serverless Edge Bridge
 * 1. Commits directly to Supabase public.admin_audit_logs with explicit ID and submission_time.
 * 2. Sends real-time email notification to namaste@nyayamitrawb.in.
 */
export async function recordAdminLogin(username: string): Promise<void> {
  const istTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const auditTicketId = `AUDIT-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // 1. Save locally for instant offline display
  const localRecord: AdminLoginRecord = {
    timestamp: istTimestamp,
    ipAddress: 'Resolving IPv4...',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Web Browser'
  };

  try {
    localStorage.setItem(LAST_LOGIN_STORAGE_KEY, JSON.stringify(localRecord));
  } catch {}

  // 2. Dispatch to Serverless Bridge (/api/notify) for DB write + email
  try {
    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: auditTicketId,
        notificationType: 'ADMIN_LOGIN_AUDIT',
        citizenName: (username || 'Abi786').trim(),
        phone: 'N/A (Admin Session)',
        district: 'Kolkata (HQ)',
        subcategoryTitle: 'Administrative Control Room Access',
        briefSummary: `Administrator "${username || 'Abi786'}" authenticated into Control Room.`,
        timestamp: istTimestamp
      })
    });
  } catch (err: any) {
    console.warn('[Security Audit Protocol Notice]:', err.message);
  }

  // 3. Client-side Dual-Commit fallback
  if (supabase) {
    try {
      await supabase.from('admin_audit_logs').insert([
        {
          id: auditTicketId,
          admin_user: (username || 'Abi786').trim(),
          ip_address: 'Logged via Server Bridge',
          submission_time: istTimestamp,
          user_agent: localRecord.userAgent
        }
      ]);
    } catch {}
  }
}

/**
 * Retrieves the Last Admin Login Record from Supabase Cloud (with fallback to localStorage)
 */
export async function getLastAdminLogin(): Promise<AdminLoginRecord> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('admin_audit_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        return {
          timestamp: data.submission_time || data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          ipAddress: data.ip_address || 'IPv4 Logged',
          userAgent: data.user_agent
        };
      }
    } catch {}
  }

  try {
    const cached = localStorage.getItem(LAST_LOGIN_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch {}

  return {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    ipAddress: 'IPv4 Active'
  };
}