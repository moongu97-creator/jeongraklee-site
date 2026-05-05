import type { Metadata } from "next";
import { MediaView } from "@/views/MediaView";
import { t } from "@/i18n/messages";

const dict = t("ko");

export const metadata: Metadata = {
  title: dict.media.metaTitle,
  description: dict.media.metaDescription,
};

export default function KoMediaPage() {
  return <MediaView locale="ko" />;
}
