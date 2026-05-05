import type { Metadata } from "next";
import { AwardsView } from "@/views/AwardsView";
import { t } from "@/i18n/messages";

const dict = t("en");

export const metadata: Metadata = {
  title: dict.awards.metaTitle,
  description: dict.awards.metaDescription,
};

export default function AwardsPage() {
  return <AwardsView locale="en" />;
}
