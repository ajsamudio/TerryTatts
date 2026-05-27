import { NextResponse } from "next/server";

/**
 * POST /api/bookings — receives a booking from the wizard.
 *
 * DEMO MODE: This logs to the server console and returns a fake confirmation
 * number. The client then redirects to /booking/success.
 *
 * GOING LIVE — uncomment and wire in this order:
 *
 *   1. Validate input  (zod schema)
 *   2. Persist to Supabase
 *   3. Create a Stripe Checkout session, return its URL
 *   4. On Stripe webhook (success), send confirmation email via Resend
 *
 * Reference implementations are at:
 *   - lib/supabase.ts
 *   - lib/stripe.ts
 *   - lib/resend.ts
 *   - emails/BookingConfirmation.tsx
 *   - supabase/schema.sql
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // ---------------------------------------------------------------------------
  // 1. Validate
  //
  // import { bookingSchema } from "@/lib/schemas";
  // const parsed = bookingSchema.safeParse(body);
  // if (!parsed.success) {
  //   return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  // }
  // const data = parsed.data;
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // 2. Persist to Supabase
  //
  // import { supabaseServer } from "@/lib/supabase";
  // const supabase = supabaseServer();
  // const { data: booking, error } = await supabase
  //   .from("bookings")
  //   .insert({
  //     starts_at: new Date(`${data.date}T${data.time}:00`).toISOString(),
  //     style: data.style,
  //     size: data.size,
  //     placement: data.placement,
  //     description: data.description,
  //     name: data.name,
  //     email: data.email,
  //     phone: data.phone,
  //     status: "pending_deposit",
  //   })
  //   .select()
  //   .single();
  // if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // 3. Create Stripe Checkout session
  //
  // import { stripe } from "@/lib/stripe";
  // const session = await stripe.checkout.sessions.create({
  //   mode: "payment",
  //   payment_method_types: ["card"],
  //   line_items: [{
  //     price_data: {
  //       currency: "usd",
  //       product_data: { name: "Terry Tattoos — booking deposit" },
  //       unit_amount: 5000,
  //     },
  //     quantity: 1,
  //   }],
  //   metadata: { booking_id: booking.id },
  //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking/success?ref=${booking.id}`,
  //   cancel_url:  `${process.env.NEXT_PUBLIC_SITE_URL}/booking?canceled=1`,
  // });
  // return NextResponse.json({ checkoutUrl: session.url });
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // 4. After Stripe webhook fires "checkout.session.completed",
  //    a separate route (app/api/stripe/webhook/route.ts) sends the email:
  //
  // import { resend } from "@/lib/resend";
  // import BookingConfirmation from "@/emails/BookingConfirmation";
  // await resend.emails.send({
  //   from: "Terry Tattoos <hello@terrytattoos.com>",
  //   to: booking.email,
  //   subject: "Your booking is confirmed",
  //   react: BookingConfirmation({ booking }),
  // });
  // ---------------------------------------------------------------------------

  console.log("[DEMO] Booking received:", body);
  await new Promise((r) => setTimeout(r, 700)); // simulate work
  const confirmationNumber = `TT-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({ ok: true, confirmationNumber });
}
