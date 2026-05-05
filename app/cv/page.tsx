import type { Metadata } from "next";
import { CvView } from "@/views/CvView";
import { t } from "@/i18n/messages";

const dict = t("en");

export const metadata: Metadata = {
  title: dict.cv.metaTitle,
  description: dict.cv.metaDescription,
};

export default function CVPage() {
  return <CvView locale="en" />;
}
