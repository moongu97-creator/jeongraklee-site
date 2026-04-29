import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ResearchAreaCard } from "@/components/research-area-card";
import { PublicationCard } from "@/components/publication-card";
import { researchAreas } from "@/data/research";
import { publications } from "@/data/publications";

const recentHighlights = publications
  .filter((p) => p.highlight)
  .slice(0, 5);

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Research at a glance"
        title="A roadmap of next-generation propulsion"
        description="One framework spanning chemical (now), plasma-hybrid (near term), and photonic-structural (long term) propulsion — three horizons unified by additive manufacturing, plasma actuation, and predictive thin-film mechanics. Each horizon targets a different mission timescale and technology readiness level, but all build on the same engineering toolkit."
      >
        <figure className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-tag-chemical/15 via-tag-hybrid/15 to-tag-photonics/15">
          <div className="aspect-[16/9] w-full">
            <div className="grid h-full place-items-center text-center">
              <div className="px-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Diagram placeholder
                </p>
                <p className="mt-3 font-heading text-base font-semibold text-foreground/85 md:text-lg">
                  Research overview & roadmap diagram
                </p>
                <p className="mt-2 max-w-md text-xs italic text-muted-foreground md:text-sm">
                  Replace with a 16:9 SVG/PNG at{" "}
                  <code className="font-mono">public/research-overview.png</code>
                </p>
              </div>
            </div>
          </div>
        </figure>
        <p className="mt-3 text-center text-xs italic text-muted-foreground md:text-sm">
          Figure 1. Roadmap connecting three propulsion horizons across mission
          timescales and technology readiness.
        </p>
      </Section>

      <Section
        eyebrow="Research"
        title="Three horizons of next-generation space propulsion"
        description="From mission-ready chemical micro-thrusters today, to plasma-hybrid systems for the near-term frontier, to photonic propulsion for deep-space exploration."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {researchAreas.slice(0, 3).map((area) => (
            <ResearchAreaCard key={area.tag} area={area} />
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            All research areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Selected Publications"
        title="Recent highlights"
        description="A selection of representative work — see all 16 SCIE publications in the full list."
      >
        <div>
          {recentHighlights.map((p) => (
            <PublicationCard key={p.number} pub={p} />
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            All publications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
