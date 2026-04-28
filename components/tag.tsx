import type { ResearchAreaTag } from "@/data/research";
import { cn } from "@/lib/utils";

const TAG_LABEL: Record<ResearchAreaTag, string> = {
  chemical: "Chemical",
  hybrid: "Hybrid",
  photonics: "Photonics",
  other: "Cross-cutting",
};

const TAG_CLASS: Record<ResearchAreaTag, string> = {
  chemical: "bg-tag-chemical/10 text-tag-chemical ring-tag-chemical/30",
  hybrid: "bg-tag-hybrid/10 text-tag-hybrid ring-tag-hybrid/30",
  photonics: "bg-tag-photonics/10 text-tag-photonics ring-tag-photonics/30",
  other: "bg-tag-other/10 text-tag-other ring-tag-other/30",
};

export function CategoryTag({
  tag,
  className,
}: {
  tag: ResearchAreaTag;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ring-1 ring-inset",
        TAG_CLASS[tag],
        className,
      )}
    >
      {TAG_LABEL[tag]}
    </span>
  );
}
