import type { Metadata } from "next";
import { PublicationsView } from "@/views/PublicationsView";
import { t } from "@/i18n/messages";

const dict = t("ko");

export const metadata: Metadata = {
  title: dict.publications.metaTitle,
  description: dict.publications.metaDescription,
};

export default function KoPublicationsPage() {
  return <PublicationsView locale="ko" />;
}
