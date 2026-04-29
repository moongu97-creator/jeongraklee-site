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
        <div className="mb-8 max-w-5xl space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            One framework spanning chemical (now), plasma-hybrid (near term),
            and photonic-structural (long term) propulsion.
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            <li>
              <strong className="font-semibold text-foreground">
                Chemical (now)
              </strong>{" "}
              — advancing today&apos;s chemical thrusters for CubeSats and
              constellations.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Plasma-hybrid (near term)
              </strong>{" "}
              — rotating gliding arc thruster combining high thrust (&gt;1 N)
              and high specific impulse (&gt;500 s) for orbital transfer
              vehicles and kick stages.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Photonic-structural sail (long term)
              </strong>{" "}
              — propellantless propulsion via light pressure on
              active-structure thin-film sails for sustained long-range cruise.
            </li>
          </ul>
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
