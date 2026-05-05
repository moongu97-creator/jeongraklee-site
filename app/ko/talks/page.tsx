import type { Metadata } from "next";
import { TalksView } from "@/views/TalksView";
import { t } from "@/i18n/messages";

const dict = t("ko");

export const metadata: Metadata = {
  title: dict.talks.metaTitle,
  description: dict.talks.metaDescription,
};

export default function KoTalksPage() {
  return <TalksView locale="ko" />;
}
