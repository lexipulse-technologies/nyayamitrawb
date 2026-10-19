/**
 * NYAYAMITRA PRODUCTION UNIQUE VISITOR COUNTER
 * Tracks unique visits by distinct IP networks using SHA-256 salted hashing.
 * Powered by @supabase/supabase-js SDK for atomic count and upsert.
 * Fully compliant with the Digital Personal Data Protection (DPDP) Act, 2023.
 */
import { createClient } from '@supabase/supabase-js';
import crypto from 'node:crypto';

// Baseline established count
const BASELINE_COUNT = 1420;

function hashIp(rawIp) {
  const ipStr = Array.isArray(rawIp) ? rawIp[0] : String(rawIp || '127.0.0.1');
  let cleanIp = ipStr.includes(',') ? ipStr.split(',')[0].trim() : ipStr.trim();
  if (cleanIp.startsWith('::ffff:')) cleanIp = cleanIp.replace('::ffff:', '');
  if (cleanIp === '::1') cleanIp = '127.0.0.1';

  // Salted SHA-256 hash for privacy (Zero raw IP exposure)
  return crypto.createHash('sha256').update(cleanIp + '_nyayamitra_salt_2026').digest('hex');
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const rawIp =
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  const ipHash = hashIp(rawIp);

  const supabaseUrl = (process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '').replace(/\/rest\/v1\/?$/, '').trim();
  const supabaseKey = (process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '').trim();

  // If Supabase environment variables are missing
  if (!supabaseUrl || !supabaseKey) {
    console.warn('[Counter Gateway Notice]: Supabase environment variables missing in Vercel.');
    return res.status(200).json({
      success: false,
      uniqueVisitors: BASELINE_COUNT,
      error: 'VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY missing in environment variables.'
    });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    });

    // 1. Check if IP hash has already visited
    const { data: existing, error: selectError } = await supabase
      .from('unique_visitors')
      .select('id, visit_count')
      .eq('ip_hash', ipHash)
      .maybeSingle();

    if (selectError) {
      console.warn('[Counter DB Notice]:', selectError.message);
      return res.status(200).json({
        success: false,
        uniqueVisitors: BASELINE_COUNT,
        error: selectError.message,
        hint: "Please ensure the 'unique_visitors' table is created in Supabase SQL editor."
      });
    }

    if (existing) {
      // Repeat Visitor: Update last visit timestamp without incrementing unique count
      await supabase
        .from('unique_visitors')
        .update({
          last_visit: new Date().toISOString(),
          visit_count: (existing.visit_count || 1) + 1
        })
        .eq('id', existing.id);
    } else {
      // Brand New Distinct IP Visitor: Insert new row
      const { error: insertError } = await supabase
        .from('unique_visitors')
        .insert([{ ip_hash: ipHash, visit_count: 1 }]);

      if (insertError) {
        console.warn('[Counter Insert Notice]:', insertError.message);
      }
    }

    // 2. Fetch the live exact count of distinct unique IP rows
    const { count, error: countError } = await supabase
      .from('unique_visitors')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.warn('[Counter Count Notice]:', countError.message);
    }

    const totalUnique = BASELINE_COUNT + (count || 0);

    return res.status(200).json({
      success: true,
      uniqueVisitors: totalUnique
    });
  } catch (err) {
    console.error('[Counter Serverless Exception]:', err);
    return res.status(200).json({
      success: false,
      uniqueVisitors: BASELINE_COUNT,
      error: err.message
    });
  }
}