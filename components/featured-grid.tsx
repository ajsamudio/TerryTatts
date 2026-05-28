"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GalleryTile } from "@/components/gallery-tile";
import { Reveal } from "@/components/reveal";
import type { GalleryItem } from "@/lib/gallery";

export function FeaturedGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <GalleryTile
              item={item}
              priority={i < 3}
              onClick={() => setActive(item)}
            />
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="bg-black border-border max-w-[95vw] w-[95vw] p-0 overflow-hidden">
          {active && (
            <>
              <div className="relative bg-black" style={{ height: "85vh" }}>
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="95vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-sm border-t border-border">
                <div>
                  <DialogTitle className="font-heading text-lg uppercase tracking-wider">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="font-stamp uppercase tracking-widest text-xs text-blood-bright mt-0.5">
                    {active.style}
                  </DialogDescription>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest shrink-0"
                >
                  <Link href="/booking">Book similar</Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
