import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { ScrollingMarquee } from "@/components/scrolling-marquee";
import { media } from "@/data/media";
import { Newspaper, ExternalLink } from "lucide-react";
import type { Locale } from "@/i18n/locale";
import { pick } from "@/i18n/locale";
import { t } from "@/i18n/messages";

export function MediaView({ locale = "en" }: { locale?: Locale }) {
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
      <PageHeader
        eyebrow={dict.media.pageEyebrow}
        title={dict.media.pageTitle}
        description={dict.media.pageDescription}
      />

      <ScrollingMarquee items={mediaMarqueeItems} />

      <Section className="pt-4">
        <ol className="space-y-5">
          {media.map((m) => (
            <li
              key={m.number}
              className="grid gap-2 border-b border-border pb-5 last:border-b-0 md:grid-cols-[48px_160px_1fr] md:gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground md:text-sm">
                #{m.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {pick(m.date, m.dateKo, locale)}
              </span>
              <div>
                <p className="text-sm leading-relaxed text-foreground md:text-base">
                  <Newspaper className="mr-1.5 inline h-4 w-4 text-muted-foreground" />
                  {pick(m.title, m.titleKo, locale)}
                </p>
                {m.outlets && m.outlets.length > 0 && (
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {m.outlets.map((o, i) => {
                      const className =
                        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium transition-colors";
                      return o.url ? (
                        <li key={i}>
                          <a
                            href={o.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${className} text-foreground hover:border-brand-primary/40 hover:text-brand-primary`}
                          >
                            {o.name}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                      ) : (
                        <li key={i}>
                          <span
                            className={`${className} text-muted-foreground`}
                            title={dict.media.linkNotAvailable}
                          >
                            {o.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
