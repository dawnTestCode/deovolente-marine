import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabase";

export async function POST(req) {
  const { name, email, phone, message } = await req.json().catch(() => ({}));
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("contact_messages").insert({ name, email, phone, message });
    if (error) return NextResponse.json({ error: "Could not save message" }, { status: 500 });
  } else {
    // Demo mode (no Supabase configured yet): visible in Vercel function logs.
    console.log("[contact:demo-mode]", { name, email, phone, message });
  }
  return NextResponse.json({ ok: true });
}
