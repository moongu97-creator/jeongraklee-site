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
        <CoverCarousel />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          One framework spans chemical (now), plasma-hybrid (near term), and
          photonic-structural (long term) propulsion. Chemical advances
          today&apos;s thrusters for CubeSats and constellations,
          plasma-hybrid delivers rotating gliding arc thrusters that combine
          high thrust (&gt;1 N) and high specific impulse (&gt;500 s) for
          orbital transfer vehicles and kick stages, and photonic-structural
          sails open propellantless light-pressure propulsion on
          active-structure thin films for sustained long-range cruise.
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
