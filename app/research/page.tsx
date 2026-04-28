import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { ResearchTabs } from "@/components/research-tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Three horizons of next-generation space propulsion: chemical, plasma-hybrid, and photonic — plus cross-cutting aerospace applications.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Three horizons toward deep space"
        description="My research charts the path from advanced chemical propulsion deployable today, to electrochemical hybrid propulsion for the near future, and ultimately to photonic propulsion that opens deep-space exploration."
      />
      <Container className="pb-20">
        <ResearchTabs />
      </Container>
    </>
  );
}
