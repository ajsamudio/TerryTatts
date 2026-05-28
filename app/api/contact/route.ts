import { NextResponse } from "next/server";

/**
 * POST /api/contact — handles the contact form.
 *
 * DEMO MODE: Logs and returns ok.
 *
 * GOING LIVE:
 *   import { resend } from "@/lib/resend";
 *   import ContactNotification from "@/emails/ContactNotification";
 *   await resend.emails.send({
 *     from: "buddha_.tattz <hello@buddhatattz.com>",
 *     to: "hello@buddhatattz.com",
 *     replyTo: data.email,
 *     subject: `New message from ${data.name}`,
 *     react: ContactNotification({ ...data }),
 *   });
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  console.log("[DEMO] Contact message:", body);
  await new Promise((r) => setTimeout(r, 400));
  return NextResponse.json({ ok: true });
}
