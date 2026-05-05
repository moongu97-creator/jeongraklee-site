import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { TimelineEntry } from "@/components/timeline-entry";
import { PublicationCard } from "@/components/publication-card";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { patents, domesticPatentsSummary } from "@/data/patents";
import { grantsAsParticipant } from "@/data/grants";
import { publications } from "@/data/publications";
import { awards } from "@/data/awards";
import { journalReviewer, memberships } from "@/data/teaching";
import { references } from "@/data/references";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/locale";
import { localePath, pick } from "@/i18n/locale";
import { t } from "@/i18n/messages";

export function CvView({ locale = "en" }: { locale?: Locale }) {
  const dict = t(locale);
  const name = pick(profile.name, profile.nameKo, locale);

  return (
    <>
      <section>
        <Container className="pt-12 pb-10 md:pt-20 md:pb-14">
          <div className="grid items-start gap-8 md:grid-cols-[180px_1fr] md:gap-10">
            <div className="relative aspect-[3/4] w-36 overflow-hidden rounded-2xl border border-border bg-card md:w-full">
              <Image
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 768px) 180px, 144px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {name}
              </h1>
              <p className="mt-4 text-base font-semibold leading-snug text-brand-primary md:text-lg">
                {dict.cv.profileTitleLine1}
              </p>
              <p className="text-base font-semibold leading-snug text-brand-primary md:text-lg">
                {dict.cv.profileTitleLine2}
              </p>

              <dl className="mt-6 space-y-2 text-sm md:text-base">
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">{dict.common.email}:</dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-foreground transition-colors hover:text-brand-primary"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">{dict.common.phone}:</dt>
                  <dd className="text-foreground">{profile.phone}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm md:text-base">
                <a
                  href={profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-primary"
                >
                  {dict.common.googleScholar}
                </a>
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-primary"
                >
                  {dict.common.linkedIn}
                </a>
                <a
                  href={profile.cvPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-primary"
                >
                  {dict.common.cvPdf}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow={dict.cv.educationEyebrow} title={dict.cv.educationTitle}>
        {education.map((e, i) => (
          <TimelineEntry
            key={i}
            period={e.period}
            title={pick(e.institution, e.institutionKo, locale)}
            subtitle={pick(e.degree || undefined, e.degreeKo, locale)}
            meta={pick(e.location, e.locationKo, locale)}
            detail={pick(e.detail, e.detailKo, locale)}
            bullets={pick(e.honors, e.honorsKo, locale)}
          />
        ))}
      </Section>

      <Section eyebrow={dict.cv.experienceEyebrow} title={dict.cv.experienceTitle}>
        {experience.map((x, i) => (
          <TimelineEntry
            key={i}
            period={x.period}
            title={pick(x.role, x.roleKo, locale)}
            subtitle={pick(x.organization, x.organizationKo, locale)}
            meta={pick(x.detail, x.detailKo, locale)}
            bullets={pick(x.bullets, x.bulletsKo, locale)}
          />
        ))}
      </Section>

      <Section
        eyebrow={dict.cv.pubsEyebrow}
        title={dict.cv.pubsTitle}
        description={dict.cv.pubsDescription}
      >
        <div>
          {publications
            .filter((p) => p.highlight)
            .map((p) => (
              <PublicationCard key={p.number} pub={p} locale={locale} />
            ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            href={localePath("/publications", locale)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            {dict.cv.allPublications} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow={dict.cv.honorsEyebrow}
        title={dict.cv.honorsTitle}
        description={dict.cv.honorsDescription}
      >
        <ul className="space-y-4">
          {[
            dict.cv.sejongFellowship,
            dict.cv.sbsFellowship,
            ...awards
              .filter((a) => a.highlight)
              .map((a) => ({
                year: a.year,
                title: pick(a.title, a.titleKo, locale),
                body: pick(a.body, a.bodyKo, locale),
                detail: pick(a.detail, a.detailKo, locale),
              })),
          ].map((a, i) => (
            <li
              key={i}
              className="grid gap-1 border-b border-border pb-4 last:border-b-0 md:grid-cols-[120px_1fr] md:gap-6"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
                {a.year}
              </span>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  {a.title}
                </p>
                {a.body && (
                  <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
                )}
                {a.detail && (
                  <p className="mt-1 text-xs italic text-muted-foreground">
                    {a.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-end">
          <Link
            href={localePath("/awards", locale)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            {dict.cv.allAwards} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow={dict.cv.grantsEyebrow}
        title={dict.cv.grantsTitle}
        description={dict.cv.grantsDescription}
      >
        <ul className="space-y-5">
          {grantsAsParticipant.map((g, i) => (
            <li
              key={i}
              className="border-b border-border pb-5 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-heading text-base font-semibold text-foreground">
                  {pick(g.title, g.titleKo, locale)}
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
        eyebrow={dict.cv.patentsEyebrow}
        title={dict.cv.patentsTitle}
        description={
          locale === "ko"
            ? `국제 특허 ${patents.length}건, 국내 특허 ${domesticPatentsSummary.total}건 (등록 ${domesticPatentsSummary.registered} + 출원 ${domesticPatentsSummary.pending}). 모두 1순위 발명자.`
            : `International patents (${patents.length}) and domestic patents (${domesticPatentsSummary.total}; ${domesticPatentsSummary.registered} registered + ${domesticPatentsSummary.pending} pending). All as first inventor.`
        }
      >
        <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {dict.common.internationalPatents}
        </h3>
        <ol className="space-y-4">
          {patents.map((p, i) => (
            <li
              key={i}
              className="border-b border-border pb-4 last:border-b-0"
            >
              <p className="font-heading text-base font-semibold text-foreground">
                {pick(p.title, p.titleKo, locale)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {pick(p.inventors, p.inventorsKo, locale)}
              </p>
              <p className="mt-1 text-sm">
                <span className="font-medium text-foreground">{p.number}</span>
                <span className="text-muted-foreground">
                  {" "}
                  ·{" "}
                  {p.status === "registered"
                    ? dict.common.registered
                    : dict.common.application}{" "}
                  {p.date}
                </span>
              </p>
            </li>
          ))}
        </ol>

        <h3 className="mt-10 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {dict.common.domesticRegisteredHeading} ({domesticPatentsSummary.registered})
        </h3>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {pick(
            domesticPatentsSummary.registeredList,
            domesticPatentsSummary.registeredListKo,
            locale,
          ).map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {dict.common.domesticPendingHeading} ({domesticPatentsSummary.pending})
        </h3>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {pick(
            domesticPatentsSummary.pendingList,
            domesticPatentsSummary.pendingListKo,
            locale,
          ).map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow={dict.cv.serviceEyebrow} title={dict.cv.serviceTitle}>
        <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {dict.common.journalReviewer}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {journalReviewer.join(" · ")}
        </p>

        <h3 className="mt-8 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {dict.common.memberships}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {memberships.join(" · ")}
        </p>
      </Section>

      <Section eyebrow={dict.cv.referencesEyebrow} title={dict.cv.referencesTitle}>
        <ul className="grid gap-6 md:grid-cols-2">
          {references.map((r, i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-card p-5"
            >
              <p className="font-heading text-base font-semibold text-foreground">
                {pick(r.name, r.nameKo, locale)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {pick(r.affiliation, r.affiliationKo, locale)}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {pick(r.address, r.addressKo, locale)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {r.tel && <span>{dict.common.tel}: {r.tel} · </span>}
                <a
                  href={`mailto:${r.email}`}
                  className="text-brand-primary transition-colors hover:text-brand-primary-hover"
                >
                  {r.email}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
