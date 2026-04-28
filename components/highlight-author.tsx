import type { ReactNode } from "react";

const SELF_PATTERN = /(Lee,\s*J\.(?:\*|†)*|Jeo[gn]grak Lee)/g;

/**
 * Highlights the author's name in a citation string by wrapping the matched
 * occurrence in <strong>. By default only the first match is bolded (works for
 * most cases). Pass `myIndex` to bold a specific match (0-based) when there are
 * multiple "Lee, J." entries and the author is not the first one.
 */
export function HighlightAuthor({
  text,
  myIndex = 0,
  className = "font-semibold text-foreground",
}: {
  text: string;
  myIndex?: number;
  className?: string;
}) {
  const regex = new RegExp(SELF_PATTERN.source, SELF_PATTERN.flags);
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let count = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (count === myIndex) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(
        <strong key={key++} className={className}>
          {match[0]}
        </strong>,
      );
      lastIndex = match.index + match[0].length;
    }
    count++;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return <>{parts}</>;
}
