"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/gallery";

const RATIO_CLASS: Record<GalleryItem["ratio"], string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

export function GalleryTile({
  item,
  onClick,
  priority = false,
}: {
  item: GalleryItem;
  onClick?: () => void;
  priority?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden border border-border bg-card text-left transition-all hover:border-blood",
        RATIO_CLASS[item.ratio]
      )}
    >
      {!errored ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          onError={() => setErrored(true)}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <PlaceholderArtwork seed={item.id} style={item.style} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="text-xs font-stamp uppercase tracking-[0.2em] text-blood-bright">
          {item.style}
        </div>
        <div className="font-heading text-lg uppercase tracking-wider text-bone">
          {item.title}
        </div>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-stamp uppercase tracking-widest text-bone bg-blood/80 px-2 py-1">
        View
      </div>
    </button>
  );
}

/** Inline SVG "tattoo flash" placeholder — runs when no real photo exists yet. */
export function PlaceholderArtwork({
  seed,
  style,
}: {
  seed: string;
  style: string;
}) {
  const n = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = (n * 17) % 20; // narrow red hue range
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <radialGradient id={`g-${seed}`} cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor={`hsl(${hue}, 50%, 14%)`} />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
          <pattern id={`p-${seed}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform={`rotate(${n % 90})`}>
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(232,230,227,0.06)" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#g-${seed})`} />
        <rect width="100" height="100" fill={`url(#p-${seed})`} />
        <g
          fill="none"
          stroke="rgba(232,230,227,0.5)"
          strokeWidth="0.6"
          strokeLinecap="round"
        >
          <circle cx="50" cy="50" r={20 + (n % 8)} />
          <circle cx="50" cy="50" r={28 + (n % 8)} strokeDasharray="2 3" />
          <path d={`M${30 + (n % 6)} 70 Q 50 ${30 + (n % 10)}, ${70 - (n % 6)} 70`} />
          <path d={`M50 ${20 + (n % 6)} L 50 ${80 - (n % 6)}`} />
        </g>
        <text
          x="50"
          y="52"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="6"
          letterSpacing="1.5"
          fill="rgba(232,230,227,0.4)"
          style={{ textTransform: "uppercase" }}
        >
          {style}
        </text>
      </svg>
    </div>
  );
}
