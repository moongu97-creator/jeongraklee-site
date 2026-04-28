import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import {
  invitedTalks,
  internationalConferences,
  domesticConferenceNote,
  domesticConferences,
} from "@/data/talks";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "Invited talks and conference presentations on next-generation space propulsion.",
};

export default function TalksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talks & Presentations"
        title="Talks"
        description="Invited talks at universities, research institutes, and industry, plus international and domestic conference presentations."
      />

      <Section
        eyebrow="Invited"
        title="Invited talks"
        description="Recent invited lectures across universities, research institutes, and aerospace industry."
      >
        <ul className="space-y-5">
          {invitedTalks.map((t) => (
            <li
              key={t.number}
              className="grid gap-2 border-b border-border pb-5 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-6"
            >
              <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {t.date}
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  {t.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.host}</span>
                  {" · "}
                  {t.location}
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">
                  Hosted by {t.hostedBy}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Conference"
        title="International conferences"
        description="Presentations at ASME SSDM, APS March Meeting, ICTAM, IUTAM, PRESM, and others."
      >
        <ul className="space-y-4">
          {internationalConferences.map((c) => (
            <li
              key={c.number}
              className="grid gap-1 border-b border-border pb-4 last:border-b-0 md:grid-cols-[80px_1fr] md:gap-6"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {c.year}
              </span>
              <div>
                <p className="font-heading text-base font-semibold leading-snug text-foreground">
                  {c.title}
                  {c.award && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-brand-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-primary">
                      {c.award}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.authors}
                </p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {c.venue}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Conference" title="Domestic conferences">
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {domesticConferenceNote}
        </p>

        <details className="group mt-6 rounded-2xl border border-border bg-card">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
            <span>View all {domesticConferences.length} domestic presentations</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <ol className="border-t border-border px-5 py-4">
            {domesticConferences.map((c) => (
              <li
                key={c.number}
                className="grid gap-1 border-b border-border py-4 last:border-b-0 md:grid-cols-[88px_1fr] md:gap-6"
              >
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
                    {c.title}
                    {c.award && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-brand-primary/10 px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wide text-brand-primary">
                        {c.award}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                    {c.authors}
                  </p>
                  <p className="mt-1 text-xs italic text-muted-foreground md:text-sm">
                    {c.venue} · {c.location}
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
