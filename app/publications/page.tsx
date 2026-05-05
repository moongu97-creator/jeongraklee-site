import type { Metadata } from "next";
import { PublicationsView } from "@/views/PublicationsView";
import { t } from "@/i18n/messages";

const dict = t("en");

export const metadata: Metadata = {
  title: dict.publications.metaTitle,
  description: dict.publications.metaDescription,
};

export default function PublicationsPage() {
  return <PublicationsView locale="en" />;
}
