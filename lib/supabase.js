import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client. Returns null when Supabase isn't configured yet,
// so the site runs fine on Vercel before a backend is connected.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
