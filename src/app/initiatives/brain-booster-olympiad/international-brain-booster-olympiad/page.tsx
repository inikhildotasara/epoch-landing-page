import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryHub } from "@/components/enquiry/EnquiryHub";

export const metadata: Metadata = {
  title: "Assessments & Learning Platforms | Epoch Olympiad Foundation",
  description:
    "Explore Epoch assessments and learning platforms in one place. Brain Booster, IMO, ITST, IAO and IGKO help you understand a child's abilities. IHOST and IFLY build future-ready skills.",
};

function EnquiryFallback() {
  return (
    <div className="min-h-[60vh] bg-[#f7f4ee]" aria-hidden>
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-16">
        <div className="h-10 w-2/3 max-w-xl rounded bg-navy/10" />
        <div className="mt-4 h-4 w-1/2 max-w-md rounded bg-navy/5" />
      </div>
    </div>
  );
}

export default function InternationalBrainBoosterOlympiadPage() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<EnquiryFallback />}>
          <EnquiryHub />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
