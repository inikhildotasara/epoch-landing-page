import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OlympiadHero } from "@/components/olympiad/OlympiadHero";
import { Ecosystem } from "@/components/olympiad/Ecosystem";
import { ExamAndJourney } from "@/components/olympiad/ExamAndJourney";
import { HowToParticipate } from "@/components/olympiad/HowToParticipate";
import { AwardsBand } from "@/components/olympiad/AwardsBand";
import { Voices } from "@/components/olympiad/Voices";
import { OlympiadFaq } from "@/components/olympiad/OlympiadFaq";
import { InitiativeCTA } from "@/components/InitiativeCTA";
import { LogoFlash } from "@/components/LogoFlash";

export const metadata: Metadata = {
  title: "Epoch Olympiad | Epoch Olympiad Foundation",
  description:
    "International Olympiads and future-ready learning platforms for Classes 1–10. IMO, ITST, IAO and IGKO assess understanding and reasoning, while IHOST and IFLY build balanced, future-ready capabilities.",
};

export default function EpochOlympiadPage() {
  return (
    <>
      <LogoFlash
        src="/images/logo-full.webp"
        alt="Epoch Olympiad Foundation"
        background="#f6f8fd"
        glow="rgba(27, 53, 102, 0.16)"
        rule="#1b3566"
        width="min(62vw, 360px)"
      />
      <Header />
      <main>
        <OlympiadHero />
        <Ecosystem />
        <ExamAndJourney />
        <HowToParticipate />
        <AwardsBand />
        <Voices />
        <OlympiadFaq />
        <InitiativeCTA />
      </main>
      <Footer />
    </>
  );
}
