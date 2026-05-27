import type { Metadata } from "next";
import { Inter, Cinzel, Special_Elite } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const stamp = Special_Elite({
  variable: "--font-mono-stamp",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terry Tattoos — Custom ink, built to last",
  description:
    "Terry Tattoos is a single-chair private tattoo studio specializing in blackwork, fine line, and traditional. Book a consultation today.",
  openGraph: {
    title: "Terry Tattoos",
    description: "Custom tattoos by Terry. Book a session.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${body.variable} ${display.variable} ${stamp.variable}`}
    >
      <body className="min-h-screen flex flex-col noise">
        <SiteNav />
        <main className="flex-1 relative z-10">{children}</main>
        <SiteFooter />
        <MobileCta />
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  );
}
