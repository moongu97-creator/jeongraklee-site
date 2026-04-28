import type { ResearchArea } from "@/data/research";
import { CategoryTag } from "@/components/tag";
import { cn } from "@/lib/utils";

const ACCENT: Record<ResearchArea["tag"], string> = {
  chemical: "before:bg-tag-chemical",
  hybrid: "before:bg-tag-hybrid",
  photonics: "before:bg-tag-photonics",
  other: "before:bg-tag-other",
};

export function ResearchAreaCard({
  area,
  expanded = false,
}: {
  area: ResearchArea;
  expanded?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg md:p-8",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-1",
        ACCENT[area.tag],
      )}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          0{area.index}
        </span>
        <CategoryTag tag={area.tag} />
        <span className="ml-auto text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {area.horizon}
        </span>
      </div>
      <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl">
        {area.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {area.summary}
      </p>
      {expanded && (
        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
          {area.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
