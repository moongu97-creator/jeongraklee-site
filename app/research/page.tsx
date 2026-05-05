import type { Metadata } from "next";
import { ResearchView } from "@/views/ResearchView";
import { t } from "@/i18n/messages";

const dict = t("en");

export const metadata: Metadata = {
  title: dict.research.metaTitle,
  description: dict.research.metaDescription,
};

export default function ResearchPage() {
  return <ResearchView locale="en" />;
}
