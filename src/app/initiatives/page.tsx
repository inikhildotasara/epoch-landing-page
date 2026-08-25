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
        <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-10 sm:gap-4">
          <a
            href="tel:+919807714979"
            className="rounded-md bg-navy px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600"
          >
            Contact Us
          </a>
          <a
            href="/register-your-school"
            className="rounded-md bg-gold px-6 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark"
          >
            Register Your School
          </a>
        </div>
        <InitiativesFaq />
      </main>
      <Footer />
    </>
  );
}
