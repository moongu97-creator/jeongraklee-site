"use client";

import { useEffect, useState } from "react";
import { researchAreas, type ResearchAreaTag } from "@/data/research";
import { researchDetails } from "@/data/research-detail";
import { publications } from "@/data/publications";
import { CategoryTag } from "@/components/tag";
import { PublicationCard } from "@/components/publication-card";
import { cn } from "@/lib/utils";

const TABS: ResearchAreaTag[] = ["chemical", "hybrid", "photonics", "other"];

const TAG_GRADIENT: Record<ResearchAreaTag, string> = {
  chemical: "from-tag-chemical/30 via-tag-chemical/10 to-transparent",
  hybrid: "from-tag-hybrid/30 via-tag-hybrid/10 to-transparent",
  photonics: "from-tag-photonics/30 via-tag-photonics/10 to-transparent",
  other: "from-tag-other/30 via-tag-other/10 to-transparent",
};

const TAB_ACTIVE_BG: Record<ResearchAreaTag, string> = {
  chemical: "bg-tag-chemical",
  hybrid: "bg-tag-hybrid",
  photonics: "bg-tag-photonics",
  other: "bg-tag-other",
};

const TAB_HOVER_BORDER: Record<ResearchAreaTag, string> = {
  chemical: "hover:border-tag-chemical/60",
  hybrid: "hover:border-tag-hybrid/60",
  photonics: "hover:border-tag-photonics/60",
  other: "hover:border-tag-other/60",
};

const SHORT_TITLE: Record<ResearchAreaTag, string> = {
  chemical: "Chemical Propulsion",
  hybrid: "Chemical-Plasma Propulsion",
  photonics: "Photonic Propulsion",
  other: "Aerospace Applications",
};

export function ResearchTabs() {
  const [active, setActive] = useState<ResearchAreaTag>("chemical");

  useEffect(() => {
    const fromHash = () => {
      if (typeof window === "undefined") return;
      const h = window.location.hash.replace("#", "");
      if ((TABS as string[]).includes(h)) {
        setActive(h as ResearchAreaTag);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const onSelect = (tag: ResearchAreaTag) => {
    setActive(tag);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${tag}`);
    }
  };

  const area = researchAreas.find((a) => a.tag === active)!;
  const detail = researchDetails[active];
  const pubs = detail.selectedPubs
    .map((n) => publications.find((p) => p.number === n))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* Block tab selector */}
      <div
        role="tablist"
        className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      >
        {TABS.map((tag) => {
          const a = researchAreas.find((x) => x.tag === tag)!;
          const isActive = tag === active;
          return (
            <button
              key={tag}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(tag)}
              className={cn(
                "group relative overflow-hidden rounded-2xl px-5 py-5 text-left transition-all duration-200",
                isActive
                  ? cn(
                      TAB_ACTIVE_BG[tag],
                      "text-white shadow-lg shadow-foreground/10",
                    )
                  : cn(
                      "border border-border bg-card text-foreground hover:-translate-y-0.5 hover:shadow-md",
                      TAB_HOVER_BORDER[tag],
                    ),
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.15em]",
                    isActive
                      ? "text-white/80"
                      : "text-muted-foreground",
                  )}
                >
                  0{a.index}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-medium uppercase tracking-wide",
                    isActive ? "text-white/70" : "text-muted-foreground/80",
                  )}
                >
                  {a.horizon}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-base font-bold leading-tight md:text-lg">
                {SHORT_TITLE[tag]}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div role="tabpanel" key={active} className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <CategoryTag tag={active} />
            <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {area.horizon}
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {area.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            {detail.longDescription}
          </p>

          <h3 className="mt-10 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Research pillars
          </h3>
          <ul className="space-y-5">
            {detail.pillars.map((p, i) => (
              <li
                key={i}
                className="border-l-2 border-border pl-5 transition-colors hover:border-foreground/30"
              >
                <p className="font-heading text-base font-semibold text-foreground">
                  {p.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Keywords
          </h3>
          <div className="flex flex-wrap gap-2">
            {detail.keywords.map((k) => (
              <span
                key={k}
                className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        <aside>
          <figure
            className={cn(
              "relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br",
              TAG_GRADIENT[active],
            )}
          >
            <div className="absolute inset-0 grid place-items-center text-center">
              <div className="px-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Figure placeholder
                </p>
                <p className="mt-3 font-heading text-base font-semibold text-foreground/80">
                  {detail.imageHint}
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Replace at <code className="font-mono">public/research/{active}.jpg</code>
                </p>
              </div>
            </div>
          </figure>

          <h3 className="mt-8 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Selected publications
          </h3>
          <div>
            {pubs.map((p) => (
              <PublicationCard key={p.number} pub={p} compact />
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
