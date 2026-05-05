export type Locale = "en" | "ko";

export function pick<T>(en: T, ko: T | undefined | null, locale: Locale): T {
  if (locale !== "ko") return en;
  if (ko === undefined || ko === null) return en;
  if (typeof ko === "string" && ko.trim() === "") return en;
  if (Array.isArray(ko) && ko.length === 0) return en;
  return ko;
}

export function localePath(href: string, locale: Locale): string {
  if (locale !== "ko") return href;
  if (href === "/") return "/ko";
  if (href.startsWith("#") || href.startsWith("/ko") || /^https?:/i.test(href))
    return href;
  if (href.startsWith("/")) return `/ko${href}`;
  return href;
}
