import type { Metadata } from "next";
import { Inter, Cinzel, Special_Elite } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
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
  title: "buddha_.tattz — Custom ink, built to last",
  description:
    "buddha_.tattz is a single-chair private tattoo studio in South Central, CA specializing in blackwork, fine line, and traditional. Book a consultation today.",
  metadataBase: new URL("https://buddhatattz.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "buddha_.tattz — Custom ink, built to last",
    description: "Private studio. South Central, CA. Custom blackwork, fine line & realism by Buddha. Book a session.",
    type: "website",
    url: "https://buddhatattz.com",
    siteName: "buddha_.tattz",
    images: [
      {
        url: "/gallery/galleryTat1.jpg",
        width: 1200,
        height: 1200,
        alt: "LA cityscape half sleeve by buddha_.tattz — South Central, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "buddha_.tattz — Custom ink, built to last",
    description: "Private studio. South Central, CA. Custom blackwork, fine line & realism by Buddha.",
    images: ["/gallery/galleryTat1.jpg"],
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
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  );
}
