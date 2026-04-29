import Image from "next/image";
import Link from "next/link";
import type { Publication } from "@/data/publications";
import { CategoryTag } from "@/components/tag";
import { HighlightAuthor } from "@/components/highlight-author";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PublicationCard({
  pub,
  compact = false,
  withThumbnail = false,
}: {
  pub: Publication;
  compact?: boolean;
  withThumbnail?: boolean;
}) {
  const showThumbnail = withThumbnail && !compact && Boolean(pub.thumbnailUrl);
  const internalHref = pub.slug ? `/publications/${pub.slug}` : null;
  const externalHref = pub.url ?? null;
  const hasInteractiveCard = Boolean(internalHref || externalHref);

  const cardInner = (
    <>
      <div className="hidden shrink-0 pt-1 text-right md:block md:w-12">
        <span className="font-mono text-xs text-muted-foreground">
          {String(pub.number).padStart(2, "0")}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <CategoryTag tag={pub.category} />
          <span className="font-mono text-muted-foreground">{pub.year}</span>
          {pub.note && (
            <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-[11px] font-medium text-brand-primary">
              {pub.note}
            </span>
          )}
        </div>
        <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-brand-primary md:text-lg">
          {pub.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          <span className="text-foreground/80">
            <HighlightAuthor text={pub.authors} myIndex={pub.myIndex} />
          </span>
        </p>
        <p className="mt-1 flex items-center gap-2 text-sm">
          <em className="not-italic font-medium text-foreground">{pub.venue}</em>
          {internalHref ? (
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-brand-primary" />
          ) : externalHref ? (
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-brand-primary" />
          ) : null}
        </p>
      </div>
      {showThumbnail && (
        <div className="hidden shrink-0 md:block">
          <div className="relative aspect-[1000/538] w-52 overflow-hidden rounded-lg border border-border bg-white">
            <Image
              src={pub.thumbnailUrl as string}
              alt={`Figure for ${pub.title}`}
              fill
              sizes="208px"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );

  const cardClass = cn(
    "group flex gap-4 border-b border-border py-5 last:border-b-0",
    !compact && "md:gap-6",
    hasInteractiveCard &&
      "transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/[0.015] hover:shadow-sm motion-reduce:transition-none",
  );

  if (internalHref) {
    return (
      <Link href={internalHref} className={cn(cardClass, "no-underline")}>
        {cardInner}
      </Link>
    );
  }

  if (externalHref) {
    return (
      <a
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(cardClass, "no-underline")}
      >
        {cardInner}
      </a>
    );
  }

  return <article className={cardClass}>{cardInner}</article>;
}
