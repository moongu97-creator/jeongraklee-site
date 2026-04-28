import type { Publication } from "@/data/publications";
import { CategoryTag } from "@/components/tag";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function PublicationCard({
  pub,
  compact = false,
}: {
  pub: Publication;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex gap-4 border-b border-border py-5 last:border-b-0",
        !compact && "md:gap-6",
      )}
    >
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
        <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-foreground md:text-lg">
          {pub.url ? (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-primary"
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          <span className="text-foreground/80">{pub.authors}</span>
        </p>
        <p className="mt-1 flex items-center gap-2 text-sm">
          <em className="not-italic font-medium text-foreground">{pub.venue}</em>
          {pub.url && (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open DOI link"
              className="inline-flex items-center text-muted-foreground transition-colors hover:text-brand-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </p>
      </div>
    </article>
  );
}
