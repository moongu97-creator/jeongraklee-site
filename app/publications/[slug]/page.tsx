import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CategoryTag } from "@/components/tag";
import { HighlightAuthor } from "@/components/highlight-author";
import { publications } from "@/data/publications";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return publications
    .filter((p) => Boolean(p.slug))
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pub = publications.find((p) => p.slug === slug);
  if (!pub) return {};
  return {
    title: pub.title,
    description: pub.abstract?.slice(0, 160) ?? `${pub.venue} ${pub.year}`,
  };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pub = publications.find((p) => p.slug === slug);
  if (!pub) notFound();

  const sameThrust = publications.filter(
    (p) => p.category === pub.category && p.number !== pub.number,
  );

  return (
    <>
      <Container className="pt-8 md:pt-12">
        <Link
          href="/publications"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All publications
        </Link>
      </Container>

      <PageHeader
        eyebrow={`Publication #${String(pub.number).padStart(2, "0")}`}
        title={pub.title}
        description={pub.venue}
      />

      <Container className="-mt-2 pb-2">
        <div className="flex flex-wrap items-center gap-3">
          <CategoryTag tag={pub.category} />
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {pub.year}
          </span>
          {pub.note && (
            <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-[11px] font-medium text-brand-primary">
              {pub.note}
            </span>
          )}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <HighlightAuthor text={pub.authors} myIndex={pub.myIndex} />
        </p>
        {pub.url && (
          <div className="mt-6">
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover"
            >
              Read full paper on {pub.venue}
              <ExternalLink className="h-4 w-4" />
            </a>
            {pub.doi && (
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                DOI: {pub.doi}
              </span>
            )}
          </div>
        )}
      </Container>

      {pub.thumbnailUrl && (
        <Section>
          <figure className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="relative aspect-[1000/538]">
              <Image
                src={pub.thumbnailUrl}
                alt={`Figure for ${pub.title}`}
                fill
                sizes="(min-width: 768px) 1024px, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </figure>
          <figcaption className="mt-3 text-center text-xs italic text-muted-foreground md:text-sm">
            Graphical abstract.
          </figcaption>
        </Section>
      )}

      {pub.background && (
        <Section eyebrow="Background" title="Why this work">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {pub.background}
          </p>
        </Section>
      )}

      {pub.approach && (
        <Section eyebrow="Approach" title="Design idea">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {pub.approach}
          </p>
        </Section>
      )}

      {pub.highlights && pub.highlights.length > 0 && (
        <Section eyebrow="Highlights" title="Key results">
          <ul className="space-y-3">
            {pub.highlights.map((h, i) => (
              <li
                key={i}
                className="border-l-2 border-brand-primary/30 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {h}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {pub.figures && pub.figures.length > 0 && (
        <Section eyebrow="Figures" title="Selected figures">
          <div className="space-y-10">
            {pub.figures.map((f, i) => (
              <figure key={i}>
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={1400}
                    height={1000}
                    sizes="(min-width: 768px) 960px, 100vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {f.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      {pub.significance && (
        <Section eyebrow="Significance" title="Why it matters">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {pub.significance}
          </p>
        </Section>
      )}

      {pub.videoUrl && (
        <Section eyebrow="Video" title="Demonstration">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-video">
              <iframe
                src={pub.videoUrl}
                title={`Video for ${pub.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Section>
      )}

      <Section
        eyebrow="Related"
        title="Other publications in this thrust"
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {sameThrust.slice(0, 4).map((p) => (
            <li key={p.number}>
              <Link
                href={p.slug ? `/publications/${p.slug}` : (p.url ?? "#")}
                target={p.slug ? undefined : "_blank"}
                rel={p.slug ? undefined : "noopener noreferrer"}
                className="group block rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono text-muted-foreground">
                    #{String(p.number).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-muted-foreground">
                    {p.year}
                  </span>
                </div>
                <p className="mt-2 font-heading text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-brand-primary md:text-base">
                  {p.title}
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">
                  {p.venue}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  {p.slug ? (
                    <>
                      View detail <ArrowUpRight className="h-3 w-3" />
                    </>
                  ) : (
                    <>
                      Open DOI <ExternalLink className="h-3 w-3" />
                    </>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
