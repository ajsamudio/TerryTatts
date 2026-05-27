"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { GalleryTile, PlaceholderArtwork } from "@/components/gallery-tile";
import type { GalleryItem } from "@/lib/gallery";

export function InstagramCarousel({ items }: { items: GalleryItem[] }) {
  const loop = [...items, ...items];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [imgErrored, setImgErrored] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    const pxPerSec = 30;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && el) {
        const half = el.scrollWidth / 2;
        let next = el.scrollLeft + pxPerSec * dt;
        if (next >= half) next -= half;
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
    };

    // Keep the infinite loop seamless when the user swipes manually.
    const onScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft < 0) el.scrollLeft += half;
    };

    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resume);
    el.addEventListener("pointercancel", resume);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resume);
      el.removeEventListener("pointercancel", resume);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto no-scrollbar overscroll-x-contain touch-pan-x"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {loop.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="w-[180px] sm:w-[220px] md:w-[240px] shrink-0"
            >
              <GalleryTile
                item={{ ...item, ratio: "square" }}
                onClick={() => {
                  setImgErrored(false);
                  setActive(item);
                }}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      <Dialog
        open={!!active}
        onOpenChange={(o) => {
          if (!o) setActive(null);
        }}
      >
        <DialogContent className="bg-background border-border max-w-4xl p-0 overflow-hidden">
          {active && (
            <>
              <div className="relative w-full aspect-square sm:aspect-[16/10] bg-card">
                {!imgErrored ? (
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-contain"
                    onError={() => setImgErrored(true)}
                  />
                ) : (
                  <PlaceholderArtwork seed={active.id} style={active.style} />
                )}
              </div>
              <div className="p-6">
                <DialogTitle className="font-heading text-2xl uppercase tracking-wider">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="font-stamp uppercase tracking-widest text-xs text-blood-bright mt-1">
                  {active.style}
                </DialogDescription>
                <p className="mt-3 text-sm text-muted-foreground">
                  {active.alt}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
