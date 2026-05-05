import type { Metadata } from "next";
import { CvView } from "@/views/CvView";
import { t } from "@/i18n/messages";

const dict = t("ko");

export const metadata: Metadata = {
  title: dict.cv.metaTitle,
  description: dict.cv.metaDescription,
};

export default function KoCVPage() {
  return <CvView locale="ko" />;
}
