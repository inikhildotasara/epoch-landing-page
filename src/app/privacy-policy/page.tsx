import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalBody } from "@/components/legal/LegalBody";
import {
  privacyIntro,
  privacySections,
} from "@/components/legal/privacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Epoch Olympiad Foundation",
  description:
    "How Epoch Olympiad Foundation collects, uses, shares, stores and protects personal data across its website, Olympiads, Genie App and MY CCBee, including safeguards for children's data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero {...privacyIntro} />
        <LegalBody sections={privacySections} />
      </main>
      <Footer />
    </>
  );
}
