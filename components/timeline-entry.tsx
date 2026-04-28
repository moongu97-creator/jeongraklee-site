type Props = {
  title: string;
  subtitle?: string;
  meta?: string;
  detail?: string;
  bullets?: string[];
  period: string;
};

export function TimelineEntry({
  title,
  subtitle,
  meta,
  detail,
  bullets,
  period,
}: Props) {
  return (
    <article className="grid gap-2 border-b border-border py-5 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-6">
      <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:text-[13px]">
        {period}
      </div>
      <div>
        <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
        {meta && (
          <p className="mt-1 text-xs italic text-muted-foreground">{meta}</p>
        )}
        {detail && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {detail}
          </p>
        )}
        {bullets && bullets.length > 0 && (
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
