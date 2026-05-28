import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SERVICES, DEPOSIT_USD } from "@/lib/services";

export const metadata = {
  title: "Services & Pricing — buddha_.tattz",
  description: "Custom work, flash, half/full sleeves, and cover-ups. Pricing and what's included.",
};

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
      </div>
    </div>
  );
}
