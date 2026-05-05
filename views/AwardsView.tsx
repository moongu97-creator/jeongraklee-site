import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { awards } from "@/data/awards";
import { grantsAsPI } from "@/data/grants";
import { Award as AwardIcon, Trophy, Banknote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/locale";
import { pick } from "@/i18n/locale";
import { t } from "@/i18n/messages";

export function AwardsView({ locale = "en" }: { locale?: Locale }) {
  const dict = t(locale);
  const graduate = awards.filter((a) => a.level === "graduate");
  const undergraduate = awards.filter((a) => a.level === "undergraduate");

  return (
    <>
      <PageHeader
        eyebrow={dict.awards.pageEyebrow}
        title={dict.awards.pageTitle}
        description={dict.awards.pageDescription}
      />

      <Section
        eyebrow={dict.awards.fundingEyebrow}
        title={dict.awards.fundingTitle}
        description={dict.awards.fundingDescription}
      >
        <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <Banknote className="h-3.5 w-3.5" /> {dict.common.asPrincipalInvestigator}
        </h3>
        <ul className="space-y-5">
          {grantsAsPI.map((g, i) => (
            <li
              key={i}
              className={cn(
                "border-b border-border pb-5 last:border-b-0",
                g.highlight &&
                  "relative overflow-hidden rounded-2xl border border-brand-primary/40 bg-brand-primary/[0.06] p-5 last:border-b last:border-brand-primary/40 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-primary",
              )}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-heading text-base font-semibold text-foreground">
                  {pick(g.title, g.titleKo, locale)}
                  {g.highlight && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-brand-primary/15 px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wide text-brand-primary">
                      <Star className="h-3 w-3 fill-current" /> {dict.common.featured}
                    </span>
                  )}
                </p>
                <span className="font-mono text-xs text-muted-foreground">
                  {g.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {pick(g.agency, g.agencyKo, locale)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {pick(g.role, g.roleKo, locale)}
                </span>
                {g.amount && <span> · {pick(g.amount, g.amountKo, locale)}</span>}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pick(g.project, g.projectKo, locale)}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow={dict.awards.awardsEyebrow}
        title={dict.awards.awardsTitle}
        description={dict.awards.awardsDescription}
      >
        <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <Trophy className="h-3.5 w-3.5" /> {dict.common.graduate}
        </h3>
        <ol className="space-y-4">
          {graduate.map((a, i) => (
            <li
              key={i}
              className={cn(
                "grid gap-1 border-b border-border pb-4 last:border-b-0 md:grid-cols-[48px_120px_1fr] md:gap-4",
                a.highlight &&
                  "relative overflow-hidden rounded-2xl border border-brand-primary/40 bg-brand-primary/[0.06] p-4 md:p-5 last:border-b last:border-brand-primary/40 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-primary",
              )}
            >
              <span className="font-mono text-xs text-muted-foreground md:text-sm">
                #{i + 1}
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {a.year}
              </span>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  {pick(a.title, a.titleKo, locale)}
                  {a.highlight && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-brand-primary/15 px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wide text-brand-primary">
                      <Star className="h-3 w-3 fill-current" /> {dict.common.featured}
                    </span>
                  )}
                </p>
                {a.body && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pick(a.body, a.bodyKo, locale)}
                  </p>
                )}
                {a.detail && (
                  <p className="mt-1 text-xs italic text-muted-foreground">
                    {pick(a.detail, a.detailKo, locale)}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-10 mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <AwardIcon className="h-3.5 w-3.5" /> {dict.common.undergraduate}
        </h3>
        <ol className="space-y-4">
          {undergraduate.map((a, i) => (
            <li
              key={i}
              className={cn(
                "grid gap-1 border-b border-border pb-4 last:border-b-0 md:grid-cols-[48px_120px_1fr] md:gap-4",
                a.highlight &&
                  "relative overflow-hidden rounded-2xl border border-brand-primary/40 bg-brand-primary/[0.06] p-4 md:p-5 last:border-b last:border-brand-primary/40 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-primary",
              )}
            >
              <span className="font-mono text-xs text-muted-foreground md:text-sm">
                #{graduate.length + i + 1}
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {a.year}
              </span>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  {pick(a.title, a.titleKo, locale)}
                  {a.highlight && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-brand-primary/15 px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wide text-brand-primary">
                      <Star className="h-3 w-3 fill-current" /> {dict.common.featured}
                    </span>
                  )}
                </p>
                {a.body && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pick(a.body, a.bodyKo, locale)}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
