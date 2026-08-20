import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegisterHero } from "@/components/register/RegisterHero";
import { RegistrationForm } from "@/components/register/RegistrationForm";

export const metadata: Metadata = {
  title: "Register Your School | Epoch Olympiad Foundation",
  description:
    "Partner with Epoch Olympiad Foundation. Share your school details and the initiatives you are interested in — Brainiac Global, Epoch Olympiad or MY CCBee — and our team will connect with you.",
};

export default function RegisterYourSchoolPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f8fc]">
        <RegisterHero />
        {/* Lifted into the hero so the form reads as the page's subject rather
            than as a section that starts below the fold. */}
        <div className="relative z-10 mx-auto -mt-8 w-full px-4 pb-14 sm:px-6 md:px-12 lg:-mt-14 lg:px-page lg:pb-20">
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
