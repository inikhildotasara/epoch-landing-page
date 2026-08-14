import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReportHero } from "@/components/report/ReportHero";
import { ReportStages } from "@/components/report/ReportStages";
import { ReportAnatomy } from "@/components/report/ReportAnatomy";
import { HowItWorks } from "@/components/report/HowItWorks";
import { StageFoundation } from "@/components/report/StageFoundation";
import { StageOlympiad } from "@/components/report/StageOlympiad";
import { StageAdvanced } from "@/components/report/StageAdvanced";
import { ReportFaq } from "@/components/report/ReportFaq";
import { ReportCTA } from "@/components/report/ReportCTA";

export const metadata: Metadata = {
  title: "Academic Health Report | Epoch Olympiad Foundation",
  description:
    "Beyond marks. The Academic Health Report is a diagnostic framework published in three age-tuned editions, revealing how a learner understands, reasons, applies knowledge and grows.",
};

export default function AcademicHealthReportPage() {
  return (
    <>
      <Header />
      <main>
        <ReportHero />
        <ReportStages />
        <ReportAnatomy />
        <HowItWorks />
        <StageFoundation />
        <StageOlympiad />
        <StageAdvanced />
        <ReportFaq />
        <ReportCTA />
      </main>
      <Footer />
    </>
  );
}
