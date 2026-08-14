import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { ResearchPillars } from "@/components/ResearchPillars";
import { Framework } from "@/components/Framework";
import { AdvisoryHealth } from "@/components/AdvisoryHealth";
import { Impact } from "@/components/Impact";
import { Insights } from "@/components/Insights";
import { CTA } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Initiatives />
        <ResearchPillars />
        <Framework />
        <AdvisoryHealth />
        <Impact />
        <Insights />
        <CTA />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
