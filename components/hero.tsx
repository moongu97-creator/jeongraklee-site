import Link from "next/link";
import Image from "next/image";
import { Mail, FileText, BookOpen, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--brand-primary)_18%,transparent)_0%,transparent_70%)]"
      />
      <Container className="pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_320px] md:gap-12">
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
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.bio}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80 md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
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
          <div className="order-first md:order-last">
            <div className="relative aspect-[2/3] w-44 overflow-hidden rounded-2xl border border-border bg-card md:aspect-auto md:h-full md:w-full">
              <Image
                src={profile.portraitUrl}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 768px) 320px, 176px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
