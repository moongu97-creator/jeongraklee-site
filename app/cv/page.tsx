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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae of Jeongrak Lee — education, professional experience, patents, teaching, and service.",
};

export default function CVPage() {
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
                {profile.name}
              </h1>
              <p className="mt-4 text-base font-semibold leading-snug text-brand-primary md:text-lg">
                Postdoctoral Researcher at Pohang University of Science and Technology (POSTECH)
              </p>
              <p className="text-base font-semibold leading-snug text-brand-primary md:text-lg">
                Center for Advanced Aerospace Materials, GIFT
              </p>

              <dl className="mt-6 space-y-2 text-sm md:text-base">
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">Email:</dt>
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
                  <dt className="font-semibold text-foreground">Phone:</dt>
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
                  Google Scholar
                </a>
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-primary"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.cvPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-primary"
                >
                  CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="Education" title="Education">
        {education.map((e, i) => (
          <TimelineEntry
            key={i}
            period={e.period}
            title={e.institution}
            subtitle={e.degree || undefined}
            meta={e.location}
            detail={e.detail}
            bullets={e.honors}
          />
        ))}
      </Section>

      <Section eyebrow="Experience" title="Professional experience">
        {experience.map((x, i) => (
          <TimelineEntry
            key={i}
            period={x.period}
            title={x.role}
            subtitle={x.organization}
            meta={x.detail}
            bullets={x.bullets}
          />
        ))}
      </Section>

      <Section
        eyebrow="Selected Publications"
        title="Selected publications"
        description="Representative work. See the full 16 SCIE list and 6 manuscripts under review on the Publications page."
      >
        <div>
          {publications
            .filter((p) => p.highlight)
            .map((p) => (
              <PublicationCard key={p.number} pub={p} />
            ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            All publications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Selective Honors"
        title="Selective honors & fellowships"
        description="Most distinguished recognition and competitive fellowships. See the full list on the Awards page."
      >
        <ul className="space-y-4">
          {[
            {
              year: "2026–2031",
              title: "Sejong Science Fellowship",
              body: "National Research Foundation of Korea (NRF)",
              detail: "KRW 500,000,000",
            },
            {
              year: "2020–2026",
              title: "SBS Foundation Research Fellowship",
              body: "SBS Foundation",
              detail: "KRW 97,000,000",
            },
            ...awards.filter((a) => a.highlight),
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
                  <p className="mt-1 text-sm text-muted-foreground">
                    {a.body}
                  </p>
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
            href="/awards"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            All awards & funding <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Research"
        title="Research projects (participation)"
        description="Project participation under the supervision of the principal investigator."
      >
        <ul className="space-y-5">
          {grantsAsParticipant.map((g, i) => (
            <li
              key={i}
              className="border-b border-border pb-5 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-heading text-base font-semibold text-foreground">
                  {g.title}
                </p>
                <span className="font-mono text-xs text-muted-foreground">
                  {g.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{g.agency}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{g.role}</span>
                {g.amount && <span> · {g.amount}</span>}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {g.project}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Patents"
        title="Patents"
        description={`International patents (${patents.length}) and domestic patents (${domesticPatentsSummary.total}; ${domesticPatentsSummary.registered} registered + ${domesticPatentsSummary.pending} pending). All as first inventor.`}
      >
        <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          International patents
        </h3>
        <ol className="space-y-4">
          {patents.map((p, i) => (
            <li
              key={i}
              className="border-b border-border pb-4 last:border-b-0"
            >
              <p className="font-heading text-base font-semibold text-foreground">
                {p.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.inventors}
              </p>
              <p className="mt-1 text-sm">
                <span className="font-medium text-foreground">{p.number}</span>
                <span className="text-muted-foreground">
                  {" "}
                  · {p.status === "registered" ? "Registered" : "Application"} {p.date}
                </span>
              </p>
            </li>
          ))}
        </ol>

        <h3 className="mt-10 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Domestic patents — registered ({domesticPatentsSummary.registered})
        </h3>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {domesticPatentsSummary.registeredList.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Domestic patents — pending ({domesticPatentsSummary.pending})
        </h3>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {domesticPatentsSummary.pendingList.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Service" title="Service activities">
        <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Journal reviewer
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {journalReviewer.join(" · ")}
        </p>

        <h3 className="mt-8 mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Memberships
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {memberships.join(" · ")}
        </p>
      </Section>

      <Section eyebrow="References" title="References">
        <ul className="grid gap-6 md:grid-cols-2">
          {references.map((r, i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-card p-5"
            >
              <p className="font-heading text-base font-semibold text-foreground">
                {r.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {r.affiliation}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {r.address}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {r.tel && <span>Tel: {r.tel} · </span>}
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
