import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contained?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contained = true,
}: Props) {
  const inner = (
    <>
      {(eyebrow || title || description) && (
        <header className="mb-6 md:mb-8">
          {eyebrow && (
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.18em] text-brand-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </>
  );

  return (
    <section id={id} className={cn("py-8 md:py-12", className)}>
      {contained ? <Container>{inner}</Container> : inner}
    </section>
  );
}
