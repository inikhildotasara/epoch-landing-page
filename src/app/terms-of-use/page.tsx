import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalBody } from "@/components/legal/LegalBody";
import { termsIntro, termsSections } from "@/components/legal/termsOfUseContent";

export const metadata: Metadata = {
  title: "Terms of Use | Epoch Olympiad Foundation",
  description:
    "The terms governing use of Epoch Olympiad Foundation's website, Olympiad and Brain Booster examinations, Genie App, MY CCBee and related educational services.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero {...termsIntro} />
        <LegalBody sections={termsSections} />
      </main>
      <Footer />
    </>
  );
}
