"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#0a0a0a_100%)]" />
        <FlashLines />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center pt-24 pb-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-stamp text-xs sm:text-sm uppercase tracking-[0.4em] text-blood-bright mb-6"
        >
          ✦ Brooklyn · Private Chair · Est. 2014 ✦
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold uppercase tracking-tight leading-[0.9] text-5xl sm:text-7xl md:text-8xl"
        >
          Ink that <br />
          <span className="italic text-blood">outlives</span> you.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Custom traditional, blackwork &amp; fine line by Terry —
          one chair, one artist, no rushed appointments.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest px-8"
          >
            <Link href="/booking">Book a Session</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-bone/30 text-bone hover:bg-bone/5 uppercase tracking-widest px-8"
          >
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 flex justify-center z-10"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] font-stamp uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

function FlashLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="hero-rg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(232,230,227,0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#hero-rg)"
        strokeWidth="0.6"
        strokeLinecap="round"
      >
        <circle cx="400" cy="300" r="140" />
        <circle cx="400" cy="300" r="180" strokeDasharray="4 6" />
        <circle cx="400" cy="300" r="220" />
        <path d="M250 300 Q 400 150 550 300" />
        <path d="M250 300 Q 400 450 550 300" />
        <path d="M400 100 L 400 500" />
        <path d="M200 300 L 600 300" />
      </g>
    </svg>
  );
}
