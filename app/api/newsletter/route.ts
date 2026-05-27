import { NextResponse } from "next/server";

/**
 * POST /api/newsletter — adds an email to the flash-drop list.
 *
 * DEMO MODE: Logs and returns ok.
 *
 * GOING LIVE — Resend audience contact:
 *   import { resend } from "@/lib/resend";
 *   await resend.contacts.create({
 *     email,
 *     audienceId: process.env.RESEND_AUDIENCE_ID!,
 *     unsubscribed: false,
 *   });
 */
export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}));
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  console.log("[DEMO] Newsletter signup:", email);
  await new Promise((r) => setTimeout(r, 300));
  return NextResponse.json({ ok: true });
}
