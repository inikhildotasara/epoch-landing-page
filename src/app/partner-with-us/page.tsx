import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { AreasOfImpact } from "@/components/partner/AreasOfImpact";
import { ClosingBand } from "@/components/partner/ClosingBand";
import { CollaborationForm } from "@/components/partner/CollaborationForm";
import { ExploreTogether } from "@/components/partner/ExploreTogether";
import { PartnerHero } from "@/components/partner/PartnerHero";
import { WhatWeLookFor } from "@/components/partner/WhatWeLookFor";
import { WhoCanPartner } from "@/components/partner/WhoCanPartner";
import { WhyPartner } from "@/components/partner/WhyPartner";

export const metadata: Metadata = {
  title: "Partner With Us | Epoch Olympiad Foundation",
  description:
    "Explore research, CSR, government, academic, technology and international collaborations with Epoch Olympiad Foundation. Tell us how we can work together to build better learning for children.",
};

export default function PartnerWithUsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f8fc]">
        <PartnerHero />

        {/* The form sits beside the story from xl, where both columns have room;
            below that it follows the sections it is answering. */}
        <div className="mx-auto grid w-full items-start gap-6 px-4 py-8 sm:px-6 md:px-12 lg:px-page lg:py-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-7">
          <div className="space-y-6">
            <Reveal>
              <WhyPartner />
            </Reveal>
            <Reveal>
              <WhoCanPartner />
            </Reveal>
            <Reveal>
              <ExploreTogether />
            </Reveal>
            <Reveal>
              <AreasOfImpact />
            </Reveal>
            <Reveal>
              <WhatWeLookFor />
            </Reveal>
          </div>

          <CollaborationForm />
        </div>

        <ClosingBand />
      </main>
      <Footer />
    </>
  );
}
