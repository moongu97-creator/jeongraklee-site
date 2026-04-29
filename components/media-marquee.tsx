"use client";

import Image from "next/image";
import type { MediaItem } from "@/data/media";

export function MediaMarquee({ items }: { items: MediaItem[] }) {
  const withImages = items.filter((item) => item.image);
  if (withImages.length === 0) return null;

  const doubled = [...withImages, ...withImages];
  const durationSec = withImages.length * 8;

  return (
    <div className="group relative overflow-hidden py-2">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24"
      />

      <div
        className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee-scroll ${durationSec}s linear infinite` }}
      >
        {doubled.map((item, i) => {
          const firstUrl = item.outlets?.find((o) => o.url)?.url;
          const card = (
            <div className="relative aspect-[16/10] w-72 shrink-0 overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:scale-[1.02] md:w-80">
              <Image
                src={item.image!}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 320px, 288px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-3 text-white">
                <p className="line-clamp-2 text-xs font-medium md:text-sm">
                  {item.title}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide opacity-80">
                  {item.date}
                </p>
              </div>
            </div>
          );
          return firstUrl ? (
            <a
              key={i}
              href={firstUrl}
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
    </div>
  );
}
