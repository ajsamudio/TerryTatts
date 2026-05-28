import Link from "next/link";
import { Check, Droplet, Sun, Activity, Shield, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SERVICES, DEPOSIT_USD } from "@/lib/services";
import { FAQ } from "@/lib/faq";

export const metadata = {
  title: "Services & Pricing — buddha_.tattz",
  description: "Custom work, flash, half/full sleeves, cover-ups — pricing, aftercare, and everything you need to know before you book.",
};

const PHASES = [
  {
    title: "Day 1 — In the wrap",
    body: "I'll bandage your piece before you leave. Leave it on for the time I tell you (usually 2–24 hrs depending on bandage type). Don't peek.",
    icon: Shield,
  },
  {
    title: "Days 2–3 — Wash & moisture",
    body: "Wash gently with lukewarm water and fragrance-free soap, 2–3x daily. Pat dry with a clean paper towel. Apply a thin layer of unscented lotion (Aquaphor for the first 2 days, then unscented Lubriderm or Hustle Butter).",
    icon: Droplet,
  },
  {
    title: "Week 1 — The itch",
    body: "It'll feel tight, scabby, maybe a bit shiny. DO NOT pick, scratch, or peel. Keep it moisturized, keep it clean, keep it out of direct sun.",
    icon: Activity,
  },
  {
    title: "Weeks 2–4 — Settling in",
    body: "Most of the surface healing is done. The deeper layers take about a month to fully settle. Stay out of pools, saunas, hot tubs, and direct sun. SPF 50+ once fully healed — sun is what fades ink.",
    icon: Sun,
  },
];

const DOS = [
  "Wash gently 2–3x per day with unscented soap",
  "Pat dry with paper towel (towels harbor bacteria)",
  "Thin layer of moisturizer — less is more",
  "Sleep on clean sheets in loose, breathable clothing",
  "SPF 50+ once fully healed, forever",
];

const DONTS = [
  "Pick, scratch, or peel scabs",
  "Soak in pools, baths, hot tubs, or the ocean for 2 weeks",
  "Direct sun exposure or tanning beds",
  "Heavy gym sessions for 48 hrs (sweat)",
  "Scented lotions, Vaseline (long-term), or 'tattoo healing' miracle creams",
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services & pricing"
          title={<>Pick your <span className="italic text-blood">poison.</span></>}
          description={`Every booking starts with a $${DEPOSIT_USD} deposit that goes toward your final total. Quotes below are starting points — final price is locked in after the consult.`}
          align="center"
          className="mb-16"
        />

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="border border-border bg-card/50 p-8 h-full flex flex-col">
                <div className="font-stamp text-xs uppercase tracking-[0.3em] text-blood-bright">
                  From {s.priceFrom}
                </div>
                <h3 className="font-heading text-3xl uppercase mt-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {s.blurb}
                </p>
                <div className="mt-6 text-xs font-stamp uppercase tracking-widest text-muted-foreground">
                  {s.duration}
                </div>
                <ul className="mt-6 space-y-2">
                  {s.inclusions.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-blood" /> {it}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8 bg-blood hover:bg-blood-bright text-white uppercase tracking-widest w-full"
                >
                  <Link href="/booking">Book {s.name}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Deposit policy */}
        <Reveal className="mt-16 border border-border bg-card/30 p-8">
          <h3 className="font-heading text-xl uppercase tracking-widest mb-4">
            Deposit & cancellation policy
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>· $50 non-refundable deposit holds your appointment and is applied to your total.</li>
            <li>· Reschedule 48+ hours ahead and the deposit moves with you, no penalty.</li>
            <li>· Inside 48 hours or no-show, deposit is forfeit.</li>
            <li>· Touch-ups are free within 90 days of your session — one per piece.</li>
          </ul>
        </Reveal>

        {/* FAQ */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Frequently asked"
            title={<>Before you <span className="italic text-blood">book.</span></>}
            description="The questions that come up most often. Still stuck? Drop a message on the contact page."
            align="center"
            className="mb-12"
          />
          <Reveal>
            <Accordion type="single" collapsible className="border border-border bg-card/30">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-b-0 px-6">
                  <AccordionTrigger className="text-left font-heading uppercase tracking-wider text-base hover:text-blood">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>

        {/* Aftercare */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Aftercare"
            title={<>Heal it <span className="italic text-blood">right.</span></>}
            description="A tattoo is an open wound for a couple of weeks. Follow these and yours will land sharp, saturated, and as intended."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {PHASES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="border border-border bg-card/50 p-6 flex gap-5">
                  <div className="h-12 w-12 border border-blood/40 bg-blood/10 flex items-center justify-center shrink-0">
                    <p.icon className="h-5 w-5 text-blood" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wider">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="border border-border bg-card/50 p-6">
                <h3 className="font-heading uppercase tracking-widest text-blood mb-4">✓ Do</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {DOS.map((d) => (
                    <li key={d}>· {d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-border bg-card/50 p-6">
                <h3 className="font-heading uppercase tracking-widest text-blood mb-4">✕ Don&apos;t</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {DONTS.map((d) => (
                    <li key={d}>· {d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-8 border border-blood/50 bg-blood/5 p-6 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-blood-bright shrink-0" />
            <div>
              <div className="font-heading uppercase tracking-widest text-sm text-blood-bright">
                When to call me
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Spreading redness past the tattoo, hot to the touch, oozing pus, fever, or anything
                that just feels wrong — text me first, then your doctor if it doesn&apos;t resolve
                in 24 hrs. Real infections are rare but I&apos;d rather check.
              </p>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button
            asChild
            size="lg"
            className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
          >
            <Link href="/booking">Book a session</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
