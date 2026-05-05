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
import type { Locale } from "@/i18n/locale";
import { pick, localePath } from "@/i18n/locale";
import { t } from "@/i18n/messages";

const highlightIcons: LucideIcon[] = [Award, Sparkles, BookOpen, Rocket];

export function Hero({ locale = "en" }: { locale?: Locale } = {}) {
  const dict = t(locale);
  const title = pick(profile.title, profile.titleKo, locale);
  const shortAffiliation = pick(
    profile.shortAffiliation,
    profile.shortAffiliationKo,
    locale,
  );
  const name = pick(profile.name, profile.nameKo, locale);
  const tagline = pick(profile.tagline, profile.taglineKo, locale);
  const bio = pick(profile.bio, profile.bioKo, locale);
  const highlights = pick(profile.highlights, profile.highlightsKo, locale);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--brand-primary)_18%,transparent)_0%,transparent_70%)]"
      />
      <Container className="pt-16 pb-8 md:pt-24 md:pb-10">
        <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-brand-primary">
          {title} · {shortAffiliation}
        </p>
        {locale !== "ko" && (
          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {name}
          </h1>
        )}
        {locale !== "ko" && (
          <p className="mt-6 font-heading text-xl leading-snug text-foreground md:text-3xl">
            {tagline}
          </p>
        )}

        <div className="mt-5 grid items-stretch gap-6 md:grid-cols-[1fr_320px] md:gap-10">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {bio}
          </p>
          <aside className="md:h-full">
            <ul className="flex h-full flex-col justify-between gap-2 rounded-2xl border border-border bg-card/60 p-3">
              {highlights.map((item, i) => {
                const Icon = highlightIcons[i] ?? Sparkles;
                return (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <Icon className="h-3 w-3" />
                    </span>
                    <span className="text-xs leading-tight text-foreground">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href={localePath("/research", locale)}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover"
          >
            {dict.common.research} <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={profile.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
          >
            <FileText className="h-4 w-4" /> {dict.common.cvPdf}
          </a>
          <a
            href={profile.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
          >
            <BookOpen className="h-4 w-4" /> {dict.common.scholar}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
          >
            <Mail className="h-4 w-4" /> {dict.common.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
