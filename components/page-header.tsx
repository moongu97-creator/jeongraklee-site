import { Container } from "@/components/container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <Container className="pt-12 pb-6 md:pt-20 md:pb-10">
      {eyebrow && (
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.18em] text-brand-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Container>
  );
}
