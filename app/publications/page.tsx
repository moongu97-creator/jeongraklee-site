import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { PublicationCard } from "@/components/publication-card";
import {
  publicationsByCategory,
  underReview,
} from "@/data/publications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "16 SCIE publications grouped by Advanced Chemical Propulsion, Chemical–Plasma Hybrid, and Photonics-Based Propulsion & Thin-Film Mechanics.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="International journal publications"
        description={
          "16 SCIE papers across three thrust areas. * Equal contribution; † Corresponding author."
        }
      />

      <Section
        eyebrow="Thrust I"
        title="Advanced Chemical Propulsion"
        description="MEMS-based monopropellant micro-thrusters and Lab-on-PCB propellant validation platforms for CubeSats and constellations."
      >
        {publicationsByCategory.chemical.map((p) => (
          <PublicationCard key={p.number} pub={p} />
        ))}
      </Section>

      <Section
        eyebrow="Thrust II"
        title="Chemical–Plasma Hybrid Propulsion"
        description="Rotating Gliding Arc plasma-assisted propulsion targeting high-thrust, high-Isp regimes for orbital transfer vehicles and kick stages."
      >
        {publicationsByCategory.hybrid.map((p) => (
          <PublicationCard key={p.number} pub={p} />
        ))}
      </Section>

      <Section
        eyebrow="Thrust III"
        title="Photonics-Based Space Propulsion & Thin-Film Mechanics"
        description="Light/solar sails enabled by thin-film actuators integrated with optical metasurfaces; predictive mechanics of wrinkling, buckling, and large deformation."
      >
        {publicationsByCategory.photonics.map((p) => (
          <PublicationCard key={p.number} pub={p} />
        ))}
      </Section>

      <Section
        eyebrow="In Progress"
        title="Under review"
        description="Manuscripts currently under peer review."
      >
        <ol className="space-y-4">
          {underReview.map((p) => (
            <li
              key={p.number}
              className="border-b border-border pb-4 last:border-b-0"
            >
              <p className="font-heading text-base font-semibold text-foreground md:text-lg">
                {p.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.authors}
              </p>
              <p className="mt-1 text-sm italic text-muted-foreground">
                Under review
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
