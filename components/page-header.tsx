import { Container } from "@/components/container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <Container className="pt-16 pb-10 md:pt-24 md:pb-14">
      {eyebrow && (
        <p className="mb-4 text-xs font-mono uppercase tracking-[0.18em] text-brand-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Container>
  );
}
