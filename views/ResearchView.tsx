import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { ResearchTabs } from "@/components/research-tabs";
import type { Locale } from "@/i18n/locale";
import { t } from "@/i18n/messages";

export function ResearchView({ locale = "en" }: { locale?: Locale }) {
  const dict = t(locale);
  return (
    <>
      <PageHeader
        eyebrow={dict.research.pageEyebrow}
        title={dict.research.pageTitle}
        description={dict.research.pageDescription}
      />
      <Container className="pb-20">
        <ResearchTabs locale={locale} />
      </Container>
    </>
  );
}
