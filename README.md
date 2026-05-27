# Terry Tattoos — demo site

A mobile-first marketing + booking site for a fictional single-chair tattoo
studio. Built as a sales demo — every flow that would normally hit a third-party
service (Supabase, Resend, Stripe) is stubbed with **visible TODO comments**
showing exactly how the real wiring looks. Flip the switches when a real client
takes it over.

## Stack

- **Next.js 16** (App Router, Turbopack) · TypeScript · Tailwind v4
- **shadcn/ui** (Radix) for primitives
- **Framer Motion** for scroll animations
- **react-hook-form + zod** ready (schemas to be added at go-live)
- **lucide-react** + custom brand icons

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, about strip, featured work, services preview, IG strip, testimonials, final CTA |
| `/gallery` | Filterable masonry of work with lightbox |
| `/booking` | 4-step wizard: date/time → tattoo details → contact → review/deposit |
| `/booking/success` | Fake post-deposit confirmation |
| `/about` | Bio, styles, stats |
| `/services` | Tiers + pricing + deposit/cancellation policy |
| `/faq` | Accordion |
| `/contact` | Hours, address, Google Maps embed, contact form |
| `/aftercare` | Day-by-day healing guide |
| `/api/bookings`, `/api/contact`, `/api/newsletter` | Stubbed handlers — log & 200 |

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build:

```bash
npm run build && npm start
```

## Adding real images

Drop tattoo photos at `public/gallery/<style>-<n>.jpg` matching the entries in
`lib/gallery.ts`. Missing images fall back to a styled SVG placeholder so the
layout never breaks while you're swapping in real work.

## Cost — **$0**

The demo runs on free tiers only:

- **Vercel Hobby** — free for personal projects, plenty of bandwidth for a demo.
- **No Supabase / Resend / Stripe accounts created.** All three are commented-out clients.
- **Google Maps embed** uses the public iframe URL — no API key, no billing.
- **Fonts** — self-hosted via `next/font`.
- Free `*.vercel.app` subdomain. No domain purchase needed.

## Going live — checklist

Roughly 1–2 hours of work, in order:

1. **Supabase** — create a project, run `supabase/schema.sql` in the SQL editor,
   copy the URL + anon key + service-role key into `.env`. Uncomment the client
   in `lib/supabase.ts`.
2. **Resend** — verify the studio's sending domain, grab an API key, uncomment
   `lib/resend.ts`. (Optional: create an audience and set `RESEND_AUDIENCE_ID`
   to wire up the newsletter form.)
3. **Email templates** — `npm install @react-email/components`, then uncomment
   `emails/BookingConfirmation.tsx` and `emails/ContactNotification.tsx`.
4. **Stripe** — create an account, copy the secret key, uncomment `lib/stripe.ts`.
   Set up a webhook at `/api/stripe/webhook` (you'll need to write that route —
   the booking route already includes the Checkout-session creation snippet
   ready to uncomment).
5. **Wire the API routes** — open `app/api/bookings/route.ts`,
   `app/api/contact/route.ts`, `app/api/newsletter/route.ts`. Each has a block
   of commented production code labeled `GOING LIVE`. Uncomment top-to-bottom.
6. **Replace mocks** — `lib/availability.ts` currently returns deterministic
   pseudo-random "booked" slots. Replace `getBookedSlots()` with the Supabase
   query shown in the file's docstring.
7. **Push to Vercel**, set the env vars from `.env.example` in the dashboard,
   deploy.

## File map

```
app/                      route segments (one folder per page)
  api/                    POST stubs with TODOs showing real wiring
components/               feature components (nav, footer, hero, booking-wizard, etc.)
  ui/                     shadcn primitives
lib/                      data + commented-out service clients
  gallery.ts              gallery items
  services.ts             pricing tiers
  faq.ts                  FAQ content
  testimonials.ts         testimonial quotes
  availability.ts         mock booking availability — replace with Supabase query
  supabase.ts             commented client
  resend.ts               commented client
  stripe.ts               commented client
emails/                   commented React Email templates
supabase/schema.sql       bookings + contact_messages tables (commented policies)
public/gallery/           drop real images here
.env.example              every var you'll need at go-live
```
