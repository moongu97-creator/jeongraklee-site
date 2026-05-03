import Link from "next/link";
import {
  Mail,
  FileText,
  BookOpen,
  ArrowRight,
  Award,
  Sparkles,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/container";

const highlightIcons: LucideIcon[] = [Award, Sparkles, BookOpen, Rocket];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--brand-primary)_18%,transparent)_0%,transparent_70%)]"
      />
      <Container className="pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="grid items-stretch gap-10 md:grid-cols-[1.35fr_1fr] md:gap-12">
          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-brand-primary">
              {profile.title} · {profile.shortAffiliation}
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 font-heading text-lg leading-snug text-foreground md:text-2xl">
              {profile.tagline}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.bio}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/research"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover"
              >
                Research <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={profile.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
              >
                <FileText className="h-4 w-4" /> CV (PDF)
              </a>
              <a
                href={profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
              >
                <BookOpen className="h-4 w-4" /> Scholar
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
          <aside className="md:order-last md:h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-5 md:p-6">
              <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-brand-primary">
                Highlights
              </p>
              <ul className="flex flex-1 flex-col justify-between gap-3">
                {profile.highlights.map((item, i) => {
                  const Icon = highlightIcons[i] ?? Sparkles;
                  return (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm leading-snug text-foreground">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
