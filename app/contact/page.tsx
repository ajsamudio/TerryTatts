import { MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact — buddha_.tattz",
  description: "Find the studio, hours, and a quick message form.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title={<>Find the <span className="italic text-blood">studio.</span></>}
          description="By appointment only. Drop a note, DM on Instagram, or use the booking flow for actual sessions."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-6">
              <InfoRow
                icon={MapPin}
                label="Studio"
                value={<>South Central<br />Los Angeles, CA</>}
              />
              <InfoRow
                icon={Clock3}
                label="Hours"
                value={
                  <>
                    Tue–Sat · 11am – 8pm
                    <br />
                    Sun &amp; Mon · Closed
                  </>
                }
              />
              <InfoRow icon={Phone} label="Phone" value="(555) 010-INK1" />
              <InfoRow icon={Mail} label="Email" value="hello@buddhatattz.com" />
              <div className="flex gap-3 pt-2">
                <Social href="https://www.instagram.com/buddha_.tattz/" icon={InstagramIcon} label="Instagram" />
                <Social href="https://tiktok.com" icon={TikTokIcon} label="TikTok" />
              </div>
              <div className="aspect-[4/3] border border-border overflow-hidden mt-6">
                <iframe
                  title="Studio location"
                  src="https://www.google.com/maps?q=south+central+los+angeles+ca&output=embed"
                  className="w-full h-full filter grayscale invert-[0.92] hue-rotate-180 contrast-90"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-border bg-card/50 p-8">
              <h3 className="font-heading text-2xl uppercase mb-6">Send a message</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 border border-border flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-blood" />
      </div>
      <div>
        <div className="text-xs font-stamp uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-bone mt-1 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function Social({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 border border-border flex items-center justify-center hover:border-blood hover:text-blood transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
