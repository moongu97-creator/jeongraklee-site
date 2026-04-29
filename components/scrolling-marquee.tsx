"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const SPEED_PX_PER_SEC = 40;
const STEP = 336;

export type MarqueeItem = {
  image: string;
  alt: string;
  title: string;
  meta?: string;
  href?: string;
};

export function ScrollingMarquee({ items }: { items: MarqueeItem[] }) {
  const doubled = [...items, ...items];

  const trackRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [explicitPaused, setExplicitPaused] = useState(false);
  const isPaused = hovered || explicitPaused;

  useEffect(() => {
    if (isPaused || items.length === 0) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const el = trackRef.current;
      if (el) {
        const half = el.scrollWidth / 2;
        let next = el.scrollLeft + SPEED_PX_PER_SEC * dt;
        if (next >= half) next -= half;
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, items.length]);

  const nudge = (delta: number) => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    let next = el.scrollLeft + delta;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    el.scrollTo({ left: next, behavior: "smooth" });
    setExplicitPaused(true);
  };

  if (items.length === 0) return null;

  return (
    <div
      className="relative py-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {doubled.map((item, i) => {
          const card = (
            <div className="relative aspect-[16/10] w-72 shrink-0 overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:scale-[1.02] md:w-80">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 320px, 288px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-3 text-white">
                <p className="line-clamp-2 text-xs font-medium md:text-sm">
                  {item.title}
                </p>
                {item.meta && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wide opacity-80">
                    {item.meta}
                  </p>
                )}
              </div>
            </div>
          );
          return item.href ? (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {card}
            </a>
          ) : (
            <div key={i} className="block">
              {card}
            </div>
          );
        })}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24"
      />

      <button
        type="button"
        onClick={() => nudge(-STEP)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => nudge(STEP)}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => setExplicitPaused((p) => !p)}
        aria-label={explicitPaused ? "Play" : "Pause"}
        className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
      >
        {explicitPaused ? (
          <Play className="h-4 w-4" />
        ) : (
          <Pause className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
