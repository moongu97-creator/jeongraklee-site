import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { PublicationCard } from "@/components/publication-card";
import { HighlightAuthor } from "@/components/highlight-author";
import { ScrollingMarquee } from "@/components/scrolling-marquee";
import { publications, publicationsByCategory, underReview } from "@/data/publications";
import type { Locale } from "@/i18n/locale";
import { t } from "@/i18n/messages";

// Toggle to bring back the paper-cover marquee at the top of the page.
// To restore: set to true. Variable + ScrollingMarquee import below stay in place.
const SHOW_PUBLICATIONS_MARQUEE = false;

const publicationsMarqueeItems = publications
  .filter((p) => p.paperImageUrl)
  .slice()
  .sort((a, b) => b.year - a.year)
  .map((p) => ({
    image: p.paperImageUrl!,
    alt: p.title,
    title: p.title,
    meta: `${p.venue} (${p.year})`,
    href: p.url,
  }));

export function PublicationsView({ locale = "en" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.publications.pageEyebrow}
        title={dict.publications.pageTitle}
        description={dict.publications.pageDescription}
      />

      {SHOW_PUBLICATIONS_MARQUEE && (
        <ScrollingMarquee items={publicationsMarqueeItems} layout="tall" />
      )}

      <Section
        eyebrow={dict.publications.thrustIEyebrow}
        title={dict.publications.thrustITitle}
        description={dict.publications.thrustIDescription}
      >
        {publicationsByCategory.chemical.map((p) => (
          <PublicationCard
            key={p.number}
            pub={p}
            withThumbnail
            locale={locale}
          />
        ))}
      </Section>

      <Section
        eyebrow={dict.publications.thrustIIEyebrow}
        title={dict.publications.thrustIITitle}
        description={dict.publications.thrustIIDescription}
      >
        {publicationsByCategory.hybrid.map((p) => (
          <PublicationCard
            key={p.number}
            pub={p}
            withThumbnail
            locale={locale}
          />
        ))}
      </Section>

      <Section
        eyebrow={dict.publications.thrustIIIEyebrow}
        title={dict.publications.thrustIIITitle}
        description={dict.publications.thrustIIIDescription}
      >
        {publicationsByCategory.photonics.map((p) => (
          <PublicationCard
            key={p.number}
            pub={p}
            withThumbnail
            locale={locale}
          />
        ))}
      </Section>

      <Section
        eyebrow={dict.publications.inProgressEyebrow}
        title={dict.publications.inProgressTitle}
        description={dict.publications.inProgressDescription}
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
                <HighlightAuthor text={p.authors} myIndex={p.myIndex} />
              </p>
              <p className="mt-1 text-sm italic text-muted-foreground">
                {dict.common.underReview}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
