import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrainBoosterHero } from "@/components/brain-booster/BrainBoosterHero";
import { ThinkingFlow } from "@/components/brain-booster/ThinkingFlow";
import { QuickFacts } from "@/components/brain-booster/QuickFacts";
import { DirectorMessage } from "@/components/brain-booster/DirectorMessage";
import { ParticipateAwardsPrepare } from "@/components/brain-booster/ParticipateAwardsPrepare";
import { AchieversAndFaq } from "@/components/brain-booster/AchieversAndFaq";
import { InitiativeCTA } from "@/components/InitiativeCTA";
import { LogoFlash } from "@/components/LogoFlash";

export const metadata: Metadata = {
  title: "International Brain Booster Olympiad | Epoch Olympiad Foundation",
  description:
    "A joyful, age-appropriate cognitive assessment for kindergarten and early learners. Brain Booster Olympiad looks at how young children observe, recognise patterns, connect ideas, reason and explore simple problems.",
};

export default function InternationalBrainBoosterOlympiadPage() {
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
        <BrainBoosterHero />
        <ThinkingFlow />
        <QuickFacts />
        {/* <DirectorMessage /> */}
        <ParticipateAwardsPrepare />
        <AchieversAndFaq />
        <InitiativeCTA />
      </main>
      <Footer />
    </>
  );
}
