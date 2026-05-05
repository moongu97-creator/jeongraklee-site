import type { Metadata } from "next";
import { ResearchView } from "@/views/ResearchView";
import { t } from "@/i18n/messages";

const dict = t("ko");

export const metadata: Metadata = {
  title: dict.research.metaTitle,
  description: dict.research.metaDescription,
};

export default function KoResearchPage() {
  return <ResearchView locale="ko" />;
}
