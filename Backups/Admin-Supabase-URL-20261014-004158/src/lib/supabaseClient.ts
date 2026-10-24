import { createClient } from '@supabase/supabase-js';

// Project Canonical Supabase Configuration (mwborzyxcgykrjuyqfel, ap-northeast-1)
const supabaseUrl =
  (import.meta as any).env?.VITE_SUPABASE_URL ||
  'https://mwborzyxcgykrjuyqfel.supabase.co';

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