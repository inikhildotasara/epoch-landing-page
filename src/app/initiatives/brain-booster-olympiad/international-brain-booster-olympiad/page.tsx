import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryHub } from "@/components/enquiry/EnquiryHub";
import {
  DEFAULT_PROGRAM_ID,
  isProgramId,
} from "@/content/enquiry/programs";

export const metadata: Metadata = {
  title: "Assessments & Learning Platforms | Epoch Olympiad Foundation",
  description:
    "Explore Epoch assessments and learning platforms in one place. Brain Booster, IMO, ITST, IAO and IGKO help you understand a child's abilities. IHOST and IFLY build future-ready skills.",
};

export default async function InternationalBrainBoosterOlympiadPage({
  searchParams,
}: {
  searchParams: Promise<{ exam?: string }>;
}) {
  const { exam } = await searchParams;
  const initialId = isProgramId(exam ?? null) ? exam : DEFAULT_PROGRAM_ID;

  return (
    <>
      <Header />
      <main>
        <EnquiryHub initialId={initialId} />
      </main>
      <Footer />
    </>
  );
}
