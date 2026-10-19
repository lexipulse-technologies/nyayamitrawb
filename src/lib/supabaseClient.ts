import { createClient } from '@supabase/supabase-js';

// Project Canonical Supabase Configuration (mwborzyxcgykrjuyqfel, ap-northeast-1)
const configuredSupabaseUrl =
  (import.meta as any).env?.VITE_SUPABASE_URL ||
  'https://mwborzyxcgykrjuyqfel.supabase.co';

// Supabase JS appends /rest/v1 internally; accept either the project root or REST URL.
export function normalizeSupabaseProjectUrl(value: string): string {
  let url = String(value || '').trim().replace(/\/+$/, '');
  while (/\/rest\/v1$/i.test(url)) {
    url = url.replace(/\/rest\/v1$/i, '').replace(/\/+$/, '');
  }
  return url;
}

const supabaseUrl = normalizeSupabaseProjectUrl(configuredSupabaseUrl);

const supabaseAnonKey =
  (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    })
  : null;

if (!supabase) {
  console.warn(
    '[NyayaMitra Supabase Client]: Running in fallback mode. Ensure VITE_SUPABASE_ANON_KEY is configured in Vercel Environment Variables.'
  );
}
