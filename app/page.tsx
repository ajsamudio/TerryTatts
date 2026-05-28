import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedGrid } from "@/components/featured-grid";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { InstagramCarousel } from "@/components/instagram-carousel";
import { Button } from "@/components/ui/button";
import { GALLERY } from "@/lib/gallery";
import { SERVICES } from "@/lib/services";

export default function HomePage() {
  const featured = GALLERY.slice(0, 6);
  const ig = GALLERY.slice(0, 8);

  return (
    <>
      <Hero />

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[4/5] border border-border bg-card relative overflow-hidden grain">
              <Image
                src="/gallery/profileImage.jpg"
                alt="Buddha tattooing in the studio"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(185,28,28,0.2),transparent_60%)]" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <div className="font-stamp uppercase text-xs tracking-[0.3em] text-blood-bright">
                    Meet the artist
                  </div>
                  <div className="font-heading text-3xl uppercase mt-2">Buddha</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    10 years · 4,000+ pieces
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About the studio"
              title={
                <>
                  One chair. <br />
                  <span className="italic text-blood">No compromises.</span>
                </>
              }
              description="I run a private studio in South Central — one client at a time, in a clean room, with the time we both need. No counter pressure, no rushed line work. If we book a session, the room is yours."
            />
            <Reveal delay={0.1} className="mt-8 grid sm:grid-cols-2 gap-4">
              <Feature icon={ShieldCheck} title="Single-use, sterile" body="Hospital-grade autoclave. Every needle, single-use." />
              <Feature icon={Award} title="10 years pro" body="From South Central, CA. Tattooing since 2014." />
              <Feature icon={Clock3} title="No rushed chairs" body="Sessions booked with breathing room. Yours alone." />
              <Feature icon={Sparkles} title="Touch-ups included" body="Free touch-up within 90 days. One per piece." />
            </Reveal>
            <Reveal delay={0.2}>
              <Button
                asChild
                variant="outline"
                className="mt-8 border-blood text-blood hover:bg-blood hover:text-white uppercase tracking-widest"
              >
                <Link href="/about">
                  More about Buddha <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Featured work"
            title={<>Recent <span className="italic text-blood">pieces.</span></>}
          />
          <Reveal delay={0.1}>
            <Button
              asChild
              variant="ghost"
              className="text-bone hover:text-blood uppercase tracking-widest"
            >
              <Link href="/gallery">
                Full gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <FeaturedGrid items={featured} />
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <SectionHeading
            eyebrow="Services"
            title={<>What I do <span className="italic text-blood">best.</span></>}
            description="Custom work, flash, and cover-ups. Rough pricing below — final quote after your consult."
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <div className="h-full border border-border bg-background p-6 hover:border-blood transition-colors group">
                  <div className="font-stamp text-xs uppercase tracking-[0.3em] text-blood-bright">
                    From {s.priceFrom}
                  </div>
                  <h3 className="font-heading text-2xl uppercase mt-2 group-hover:text-blood transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {s.blurb}
                  </p>
                  <div className="mt-6 text-xs font-stamp uppercase tracking-wider text-muted-foreground">
                    {s.duration}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
            >
              <Link href="/services">Full service list</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <SectionHeading
          eyebrow="On the gram"
          title={<>Latest from <span className="italic text-blood">@buddha_.tattz</span></>}
          className="mb-10"
        />
        <InstagramCarousel items={ig} />
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <SectionHeading
            eyebrow="From the chair"
            title={<>Real clients. <span className="italic text-blood">Real ink.</span></>}
            align="center"
            className="mb-12"
          />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-28 text-center">
        <Reveal>
          <p className="font-stamp uppercase tracking-[0.4em] text-blood-bright text-xs mb-6">
            ✦ Ready when you are ✦
          </p>
          <h2 className="font-heading text-5xl sm:text-7xl uppercase font-bold leading-[0.95]">
            Let&apos;s make <br />
            something <span className="italic text-blood">permanent.</span>
          </h2>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-blood hover:bg-blood-bright text-white uppercase tracking-widest px-10"
          >
            <Link href="/booking">Book your session</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}

function Feature({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="h-5 w-5 text-blood shrink-0 mt-0.5" />
      <div>
        <div className="font-heading uppercase tracking-wider text-sm">{title}</div>
        <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  );
}
