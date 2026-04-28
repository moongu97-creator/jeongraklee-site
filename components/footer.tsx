import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </Link>
          <a
            href={profile.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Google Scholar
          </a>
        </div>
      </div>
    </footer>
  );
}
