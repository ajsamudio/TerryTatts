"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";

export function MobileCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/booking")) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-background via-background/95 to-transparent">
      <Link
        href="/booking"
        className="flex items-center justify-center gap-2 w-full py-4 bg-blood hover:bg-blood-bright text-white font-heading uppercase tracking-widest text-sm shadow-2xl shadow-blood/30"
      >
        <Calendar className="h-4 w-4" />
        Book a Session
      </Link>
    </div>
  );
}
