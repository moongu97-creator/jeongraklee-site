import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import {
  invitedTalks,
  internationalConferences,
  domesticConferenceNote,
  domesticConferenceNoteKo,
  domesticConferences,
} from "@/data/talks";
import { HighlightAuthor } from "@/components/highlight-author";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/locale";
import { pick } from "@/i18n/locale";
import { t, viewAllDomesticPresentationsLabel } from "@/i18n/messages";

export function TalksView({ locale = "en" }: { locale?: Locale }) {
  const dict = t(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.talks.pageEyebrow}
        title={dict.talks.pageTitle}
        description={dict.talks.pageDescription}
      />

      <Section
        eyebrow={dict.talks.invitedEyebrow}
        title={dict.talks.invitedTitle}
        description={dict.talks.invitedDescription}
      >
        <ol className="space-y-5">
          {invitedTalks.map((talk) => (
            <li
              key={talk.number}
              className="grid gap-2 border-b border-border pb-5 last:border-b-0 md:grid-cols-[48px_180px_1fr] md:gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground md:text-sm">
                #{talk.number}
              </span>
              <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {pick(talk.date, talk.dateKo, locale)}
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  {pick(talk.title, talk.titleKo, locale)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {pick(talk.host, talk.hostKo, locale)}
                  </span>
                  {" · "}
                  {pick(talk.location, talk.locationKo, locale)}
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">
                  {dict.common.hostedBy} {pick(talk.hostedBy, talk.hostedByKo, locale)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow={dict.talks.intlEyebrow}
        title={dict.talks.intlTitle}
        description={dict.talks.intlDescription}
      >
        <ol className="space-y-4">
          {internationalConferences.map((c) => (
            <li
              key={c.number}
              className="grid gap-1 border-b border-border pb-4 last:border-b-0 md:grid-cols-[48px_80px_1fr] md:gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground md:text-sm">
                #{c.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {c.year}
              </span>
              <div>
                <p className="font-heading text-base font-semibold leading-snug text-foreground">
                  {pick(c.title, c.titleKo, locale)}
                  {c.award && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-brand-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-primary">
                      {pick(c.award, c.awardKo, locale)}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <HighlightAuthor text={c.authors} myIndex={c.myIndex} />
                </p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {pick(c.venue, c.venueKo, locale)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow={dict.talks.domesticEyebrow} title={dict.talks.domesticTitle}>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {pick(domesticConferenceNote, domesticConferenceNoteKo, locale)}
        </p>

        <details className="group mt-6 rounded-2xl border border-border bg-card">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
            <span>
              {viewAllDomesticPresentationsLabel(locale, domesticConferences.length)}
            </span>
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <ol className="border-t border-border px-5 py-4">
            {domesticConferences.map((c) => (
              <li
                key={c.number}
                className="grid gap-1 border-b border-border py-4 last:border-b-0 md:grid-cols-[48px_88px_1fr] md:gap-4"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  #{c.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {c.date}
                </span>
                <div>
                  <p
                    className={
                      c.isFirstAuthor
                        ? "font-heading text-sm font-semibold leading-snug text-foreground md:text-base"
                        : "text-sm leading-snug text-foreground/85 md:text-base"
                    }
                  >
                    {pick(c.title, c.titleKo, locale)}
                    {c.award && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-brand-primary/10 px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wide text-brand-primary">
                        {pick(c.award, c.awardKo, locale)}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                    <HighlightAuthor text={c.authors} />
                  </p>
                  <p className="mt-1 text-xs italic text-muted-foreground md:text-sm">
                    {pick(c.venue, c.venueKo, locale)} · {pick(c.location, c.locationKo, locale)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </details>
      </Section>
    </>
  );
}
