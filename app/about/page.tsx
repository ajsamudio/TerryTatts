import Link from "next/link";
import { Award, MapPin, Clock3, Heart } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About — Terry Tattoos",
  description: "Meet Terry — single-chair private studio in Brooklyn.",
};

const STYLES_I_DO = [
  "Traditional",
  "Neo-traditional",
  "Blackwork",
  "Fine line",
  "Japanese",
  "Realism",
  "Ornamental",
  "Cover-ups",
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The artist"
          title={<>Hi, I&apos;m <span className="italic text-blood">Terry.</span></>}
          description="A decade of ink. One chair. No assembly line."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="aspect-[4/5] border border-border bg-card relative overflow-hidden grain">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(185,28,28,0.25),transparent_55%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                <div>
                  <div className="font-stamp uppercase text-xs tracking-[0.3em] text-blood-bright">
                    Terry
                  </div>
                  <div className="font-heading text-2xl uppercase">In the studio</div>
                </div>
                <div className="text-xs font-stamp uppercase tracking-widest text-muted-foreground">
                  Est. 2014
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-bone leading-relaxed">
              <p>
                I started tattooing in 2014 after a three-year apprenticeship in
                Tokyo under Master Horiyuki. Came home to Brooklyn, worked the
                shop circuit for six years, opened my own private studio in 2020.
              </p>
              <p>
                The reason it&apos;s private is simple: I don&apos;t want to rush
                you. No counter pressure, no next-up in the chair behind you,
                no music you didn&apos;t pick. Just you, me, and the work we
                planned together.
              </p>
              <p>
                Every piece starts with a conversation. I don&apos;t take
                walk-ins, but I do open a few flash days a month — those drop on
                Instagram. For custom work, book a consult and we&apos;ll go
                from there.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <Stat icon={Award} label="Years" value="10+" />
                <Stat icon={Heart} label="Pieces" value="4,000+" />
                <Stat icon={MapPin} label="Studio" value="Brooklyn" />
                <Stat icon={Clock3} label="By appt." value="Tue–Sat" />
              </div>
            </div>
          </Reveal>
        </div>

        <section className="mt-24">
          <SectionHeading
            eyebrow="What I do"
            title="Styles in rotation"
            className="mb-8"
          />
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {STYLES_I_DO.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 border border-border font-stamp uppercase tracking-[0.2em] text-xs text-bone hover:border-blood hover:text-blood transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mt-24 border-t border-border pt-16 text-center">
          <Reveal>
            <p className="font-stamp text-xs uppercase tracking-[0.4em] text-blood-bright mb-3">
              ✦ Let&apos;s talk ✦
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold">
              Got an idea? <span className="italic text-blood">Bring it.</span>
            </h2>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
            >
              <Link href="/booking">Book a consult</Link>
            </Button>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="border border-border bg-card/50 p-4">
      <Icon className="h-4 w-4 text-blood" />
      <div className="font-heading text-2xl mt-2">{value}</div>
      <div className="text-xs font-stamp uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
