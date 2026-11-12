import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabase";

export async function POST(req) {
  const { email } = await req.json().catch(() => ({}));
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert({ email }, { onConflict: "email" });
    if (error) return NextResponse.json({ error: "Could not subscribe" }, { status: 500 });
  } else {
    console.log("[subscribe:demo-mode]", { email });
  }
  return NextResponse.json({ ok: true });
}
