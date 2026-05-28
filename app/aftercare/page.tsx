import { Droplet, Sun, Activity, Shield, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Aftercare — buddha_.tattz",
  description: "How to heal your new tattoo: day-by-day instructions, do's and don'ts.",
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

export default function AftercarePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Aftercare"
          title={<>Heal it <span className="italic text-blood">right.</span></>}
          description="A tattoo is an open wound for a couple of weeks. Follow these and yours will land sharp, saturated, and as intended."
          align="center"
          className="mb-16"
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
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="border border-border bg-card/50 p-6">
              <h3 className="font-heading uppercase tracking-widest text-blood mb-4">
                ✓ Do
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {DOS.map((d) => (
                  <li key={d}>· {d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-border bg-card/50 p-6">
              <h3 className="font-heading uppercase tracking-widest text-blood mb-4">
                ✕ Don&apos;t
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {DONTS.map((d) => (
                  <li key={d}>· {d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 border border-blood/50 bg-blood/5 p-6 flex gap-4">
          <AlertTriangle className="h-6 w-6 text-blood-bright shrink-0" />
          <div>
            <div className="font-heading uppercase tracking-widest text-sm text-blood-bright">
              When to call me
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Spreading redness past the tattoo, hot to the touch, oozing pus,
              fever, or anything that just feels wrong — text me first, then your
              doctor if it doesn&apos;t resolve in 24 hrs. Real infections are
              rare but I&apos;d rather check.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
