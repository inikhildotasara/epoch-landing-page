import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrainiacHero } from "@/components/brainiac/BrainiacHero";
import { PurposeThatDrives } from "@/components/brainiac/PurposeThatDrives";
import { DirectorMessage } from "@/components/brain-booster/DirectorMessage";
import { BrainiacEcosystem } from "@/components/brainiac/BrainiacEcosystem";
import { YoungThinkers } from "@/components/brainiac/YoungThinkers";
import { BrainiacVoices } from "@/components/brainiac/BrainiacVoices";
import { BrainiacFaq } from "@/components/brainiac/BrainiacFaq";
import { InitiativeCTA } from "@/components/InitiativeCTA";
import { LogoFlash } from "@/components/LogoFlash";

export const metadata: Metadata = {
  title: "Brainiac Global | Epoch Olympiad Foundation",
  description:
    "Brainiac Global is an early-learning initiative that builds thinking minds from the earliest years, nurturing curiosity, observation, reasoning and problem-solving through engaging experiences and brain-boosting assessment.",
};

export default function BrainiacGlobalPage() {
  return (
    <>
      <LogoFlash
        src="/images/BRAINIAC LOGO.png"
        alt="Brainiac Global — Discovering New Einstein"
        background="#fffaf7"
        glow="rgba(214, 40, 57, 0.16)"
        rule="#d62839"
      />
      <Header />
      <main>
        <BrainiacHero />
        <PurposeThatDrives />
        <DirectorMessage />
        <BrainiacEcosystem />
        <YoungThinkers />
        <BrainiacVoices />
        {/* <BrainiacGlance /> */}
        {/* <BrainiacResources /> */}
        <BrainiacFaq />
        <InitiativeCTA brand="brainiac" />
      </main>
      <Footer />
    </>
  );
}
