"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  researchSlides,
  type ResearchSlide,
} from "@/data/research-slides";
import { CategoryTag } from "@/components/tag";
import type { Locale } from "@/i18n/locale";
import { pick } from "@/i18n/locale";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5000;

const ASPECT_CLASSES = {
  video: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
} as const;

type Props = {
  slides?: ResearchSlide[];
  locale?: Locale;
  aspect?: keyof typeof ASPECT_CLASSES;
  placeholder?: ReactNode;
};

export function ResearchCarousel({
  slides = researchSlides,
  locale = "en",
  aspect = "video",
  placeholder,
}: Props) {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  if (total === 0) return <>{placeholder ?? null}</>;

  const current = slides[index] ?? slides[0];
  const go = (next: number) =>
    setIndex(((next % total) + total) % total);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Research image carousel"
    >
      <figure className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className={cn("relative w-full", ASPECT_CLASSES[aspect])}>
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={cn(
                "absolute inset-0 transition-all duration-1000 ease-in-out",
                i === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
              )}
              aria-hidden={i !== index}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}

          <div className="pointer-events-none absolute left-4 top-4 z-10">
            <CategoryTag tag={current.area} locale={locale} />
          </div>
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </figure>

      <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        {pick(current.caption, current.captionKo, locale)}
      </p>

      {total > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index
                  ? "w-6 bg-brand-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
