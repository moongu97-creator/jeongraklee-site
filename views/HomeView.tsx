import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CoverCarousel } from "@/components/cover-carousel";
import { ScrollingMarquee } from "@/components/scrolling-marquee";
import { ResearchAreaCard } from "@/components/research-area-card";
import { PublicationCard } from "@/components/publication-card";
import { researchAreas } from "@/data/research";
import { publications } from "@/data/publications";
import { media } from "@/data/media";
import type { Locale } from "@/i18n/locale";
import { localePath, pick } from "@/i18n/locale";
import { t } from "@/i18n/messages";

const recentHighlights = publications.filter((p) => p.highlight).slice(0, 5);

export function HomeView({ locale = "en" }: { locale?: Locale }) {
  const dict = t(locale);

  const mediaMarqueeItems = media
    .filter((m) => m.image)
    .map((m) => ({
      image: m.image!,
      alt: pick(m.title, m.titleKo, locale),
      title: pick(m.title, m.titleKo, locale),
      meta: pick(m.date, m.dateKo, locale),
      href: m.outlets?.find((o) => o.url)?.url,
    }));

  return (
    <>
      <Hero locale={locale} />

      <Section eyebrow={dict.home.glanceEyebrow} title={dict.home.glanceTitle}>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          {dict.home.glanceBody}
        </p>
        <CoverCarousel />
      </Section>

      <Section
        eyebrow={dict.home.researchEyebrow}
        title={dict.home.researchTitle}
        description={dict.home.researchDescription}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {researchAreas.slice(0, 3).map((area) => (
            <ResearchAreaCard key={area.tag} area={area} locale={locale} />
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Link
            href={localePath("/research", locale)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            {dict.home.allResearchAreas} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow={dict.home.pressEyebrow}
        title={dict.home.pressTitle}
        description={dict.home.pressDescription}
      >
        <ScrollingMarquee items={mediaMarqueeItems} />
        <div className="mt-8 flex justify-end">
          <Link
            href={localePath("/media", locale)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            {dict.home.allMediaCoverage} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow={dict.home.pubsEyebrow}
        title={dict.home.pubsTitle}
        description={dict.home.pubsDescription}
      >
        <div>
          {recentHighlights.map((p) => (
            <PublicationCard key={p.number} pub={p} locale={locale} />
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Link
            href={localePath("/publications", locale)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            {dict.home.allPublications} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
