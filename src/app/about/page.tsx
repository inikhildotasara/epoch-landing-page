import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { VisionBand } from "@/components/about/VisionBand";
import { Mission } from "@/components/about/Mission";
import { FounderMessage } from "@/components/about/FounderMessage";
import { Ecosystem } from "@/components/about/Ecosystem";
import { GuidingPrinciples } from "@/components/about/GuidingPrinciples";
import { ClosingQuote } from "@/components/about/ClosingQuote";

export const metadata: Metadata = {
  title: "About the Foundation | Epoch Olympiad Foundation",
  description:
    "Building a future where every child is measured by intelligence, not just memory. Learn about Epoch Olympiad Foundation's vision, mission, ecosystem, and guiding principles.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <VisionBand />
        <Mission />
        <FounderMessage />
        <Ecosystem />
        <GuidingPrinciples />
        <ClosingQuote />
      </main>
      <Footer />
    </>
  );
}
