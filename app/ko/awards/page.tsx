import type { Metadata } from "next";
import { AwardsView } from "@/views/AwardsView";
import { t } from "@/i18n/messages";

const dict = t("ko");

export const metadata: Metadata = {
  title: dict.awards.metaTitle,
  description: dict.awards.metaDescription,
};

export default function KoAwardsPage() {
  return <AwardsView locale="ko" />;
}
