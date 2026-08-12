import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdvisoryHero } from "@/components/advisory/AdvisoryHero";
import { AcademicLeadership } from "@/components/advisory/AcademicLeadership";
import { CouncilContributes } from "@/components/advisory/CouncilContributes";
import { PatronAndJury } from "@/components/advisory/PatronAndJury";
import { ChiefAmbassadors } from "@/components/advisory/ChiefAmbassadors";
import { IndependentPerspective } from "@/components/advisory/IndependentPerspective";
import { AdvisoryCTA } from "@/components/advisory/AdvisoryCTA";

export const metadata: Metadata = {
  title: "Advisory Board | Epoch Olympiad Foundation",
  description:
    "The Epoch Olympiad Foundation Advisory Council brings together eminent educators, academic leaders and school leaders who strengthen educational assessment, academic integrity and cognitive development.",
};

export default function AdvisoryBoardPage() {
  return (
    <>
      <Header />
      <main>
        <AdvisoryHero />
        <AcademicLeadership />
        <CouncilContributes />
        <PatronAndJury />
        <ChiefAmbassadors />
        <IndependentPerspective />
        <AdvisoryCTA />
      </main>
      <Footer />
    </>
  );
}
