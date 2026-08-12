import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResearchHero } from "@/components/research/ResearchHero";
import { PerformancePotential } from "@/components/research/PerformancePotential";
import { ResearchDomains } from "@/components/research/ResearchDomains";
import { ResearchInPractice } from "@/components/research/ResearchInPractice";
import { ResearchImpact } from "@/components/research/ResearchImpact";
import { ApplicationsVideo } from "@/components/research/ApplicationsVideo";
import { StudyIntegrityInsights } from "@/components/research/StudyIntegrityInsights";
import { ResearchClosing } from "@/components/research/ResearchClosing";

export const metadata: Metadata = {
  title: "Research | Epoch Olympiad Foundation",
  description:
    "Understanding how children think, learn and grow. Explore Epoch Olympiad Foundation's research domains, diagnostic frameworks, and the Academic Health Report.",
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <ResearchHero />
        <PerformancePotential />
        <ResearchDomains />
        <ResearchInPractice />
        <ResearchImpact />
        <ApplicationsVideo />
        <StudyIntegrityInsights />
        <ResearchClosing />
      </main>
      <Footer />
    </>
  );
}
