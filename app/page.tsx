import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CoverCarousel } from "@/components/cover-carousel";
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
      >
        <div className="mb-8 max-w-5xl space-y-3">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            One framework spanning chemical (now), plasma-hybrid (near term),
            and photonic-structural (long term) propulsion — connected by
            additive manufacturing, plasma actuation, and predictive thin-film
            mechanics.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Each horizon pairs with the enabling technology that brings it to
            flight: additive manufacturing scales chemical micro-thrusters from
            prototype to constellation, plasma actuation drives the rotating
            gliding arc thruster at the heart of near-term in-space mobility,
            and predictive thin-film mechanics underpins the lightweight
            active-structure sails of photonic-structural propulsion.
          </p>
        </div>
        <CoverCarousel />
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
