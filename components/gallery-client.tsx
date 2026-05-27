"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GalleryTile, PlaceholderArtwork } from "@/components/gallery-tile";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { STYLES, type GalleryItem, type TattooStyle } from "@/lib/gallery";

type Filter = "All" | TattooStyle;

export function GalleryClient({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.style === filter)),
    [items, filter]
  );

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {STYLES.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={cn(
              "px-4 py-2 text-xs font-stamp uppercase tracking-[0.2em] border transition-colors",
              filter === s
                ? "bg-blood border-blood text-white"
                : "border-border text-muted-foreground hover:border-blood hover:text-blood"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filtered.map((item, i) => (
          <Reveal key={item.id} delay={Math.min(i * 0.04, 0.4)}>
            <GalleryTile item={item} onClick={() => setActive(item)} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          Nothing in this style yet — check back soon.
        </p>
      )}

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="bg-background border-border max-w-3xl p-0 overflow-hidden">
          {active && (
            <>
              <div className="relative aspect-[4/5] sm:aspect-[16/10] bg-card">
                <PlaceholderArtwork seed={active.id} style={active.style} />
                {/* When real image exists, next/image will swap in via the tile */}
              </div>
              <div className="p-6">
                <DialogTitle className="font-heading text-2xl uppercase tracking-wider">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="font-stamp uppercase tracking-widest text-xs text-blood-bright mt-1">
                  {active.style}
                </DialogDescription>
                <p className="mt-3 text-sm text-muted-foreground">{active.alt}</p>
                <Button
                  asChild
                  className="mt-6 bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
                >
                  <Link href="/booking">Book something similar</Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
