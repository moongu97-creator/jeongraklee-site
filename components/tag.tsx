import type { ResearchAreaTag } from "@/data/research";
import type { Locale } from "@/i18n/locale";
import { t } from "@/i18n/messages";
import { cn } from "@/lib/utils";

const TAG_CLASS: Record<ResearchAreaTag, string> = {
  chemical: "bg-tag-chemical/10 text-tag-chemical ring-tag-chemical/30",
  hybrid: "bg-tag-hybrid/10 text-tag-hybrid ring-tag-hybrid/30",
  photonics: "bg-tag-photonics/10 text-tag-photonics ring-tag-photonics/30",
  other: "bg-tag-other/10 text-tag-other ring-tag-other/30",
};

export function CategoryTag({
  tag,
  className,
  locale = "en",
}: {
  tag: ResearchAreaTag;
  className?: string;
  locale?: Locale;
}) {
  const dict = t(locale);
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ring-1 ring-inset",
        TAG_CLASS[tag],
        className,
      )}
    >
      {dict.tag[tag]}
    </span>
  );
}
