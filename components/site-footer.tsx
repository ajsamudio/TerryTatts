import Link from "next/link";
import { Mail, MapPin, Skull } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/brand-icons";
import { NAV_LINKS } from "@/lib/nav";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Skull className="h-6 w-6 text-blood" />
            <span className="font-heading font-bold tracking-widest uppercase">
              buddha_<span className="text-blood">.</span>tattz
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Private chair. Custom work. By appointment only.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/buddha_.tattz/"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-border hover:border-blood hover:text-blood transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-border hover:border-blood hover:text-blood transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@buddhatattz.com"
              className="p-2 border border-border hover:border-blood hover:text-blood transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm mb-4">
            Sitemap
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-muted-foreground hover:text-blood transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm mb-4">
            Studio
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-blood shrink-0" />
              <span>
                South Central
                <br />
                Los Angeles, CA
              </span>
            </li>
            <li>Tue–Sat · 11am–8pm</li>
            <li>Sun–Mon · Closed</li>
            <li>(555) 010-INK1</li>
          </ul>
          <div className="mt-4 border border-border overflow-hidden aspect-[4/3]">
            <iframe
              title="Studio location"
              src="https://www.google.com/maps?q=south+central+los+angeles+ca&output=embed"
              className="w-full h-full filter grayscale invert-[0.92] hue-rotate-180 contrast-90 pointer-events-none"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>

        <div className="md:col-span-1">
          <h4 className="font-heading uppercase tracking-widest text-sm mb-4">
            Flash drops
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            New flash sheets and open dates. No spam.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground uppercase tracking-widest">
          <span>© {new Date().getFullYear()} buddha_.tattz</span>
          <span className="font-stamp normal-case tracking-normal">
            Hand-made in South Central
          </span>
        </div>
      </div>
    </footer>
  );
}
