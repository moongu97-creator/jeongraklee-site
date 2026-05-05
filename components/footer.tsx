"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/locale";
import { pick } from "@/i18n/locale";
import { t } from "@/i18n/messages";

export function Footer() {
  const pathname = usePathname();
  const locale: Locale =
    pathname === "/ko" || pathname.startsWith("/ko/") ? "ko" : "en";
  const dict = t(locale);
  const year = new Date().getFullYear();
  const name = pick(profile.name, profile.nameKo, locale);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <p>
          &copy; {year} {name}. {dict.common.rightsReserved}
        </p>
        <div className="flex items-center gap-5">
          <Link
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            {dict.common.email}
          </Link>
          <a
            href={profile.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {dict.common.googleScholar}
          </a>
          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {dict.common.linkedIn}
          </a>
        </div>
      </div>
    </footer>
  );
}
