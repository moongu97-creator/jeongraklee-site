import type { ReactNode } from "react";

const SELF_PATTERN = /(Lee,\s*J\.(?:\*|†)*|Jeo[gn]grak Lee)/g;

export function HighlightAuthor({
  text,
  className = "font-semibold text-foreground",
}: {
  text: string;
  className?: string;
}) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  const regex = new RegExp(SELF_PATTERN.source, SELF_PATTERN.flags);
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
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
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return <>{parts}</>;
}
