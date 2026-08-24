import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InitiativesHero } from "@/components/initiatives/InitiativesHero";
import { JourneyBand } from "@/components/initiatives/JourneyBand";
import { PhilosophyStrip } from "@/components/initiatives/PhilosophyStrip";
import { EcosystemStrip } from "@/components/initiatives/EcosystemStrip";
import { InitiativesFaq } from "@/components/initiatives/InitiativesFaq";

export const metadata: Metadata = {
  title: "Our Initiatives | Epoch Olympiad Foundation",
  description:
    "Turning educational research into meaningful impact. Explore Brainiac Global, Epoch Olympiad and MY CCBee—supporting learners from early cognitive development to academic assessment and continuous improvement.",
};

export default function InitiativesPage() {
  return (
    <>
      <Header />
      <main>
        <InitiativesHero />
        <JourneyBand />
        <PhilosophyStrip />
        <EcosystemStrip />
        <InitiativesFaq />
      </main>
      <Footer />
    </>
  );
}
