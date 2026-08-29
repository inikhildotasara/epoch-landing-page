"use client";

import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Reveal } from "../Reveal";
import {
  DEFAULT_PROGRAM_ID,
  getEnquiryProgram,
  isProgramId,
  type ProgramId,
} from "@/content/enquiry/programs";
import { EnquiryHero } from "./EnquiryHero";
import { ProgramSelector } from "./ProgramSelector";
import { ProgramBanner } from "./ProgramBanner";
import { DetailGrid } from "./DetailGrid";
import { PrepareAndFaq } from "./PrepareAndFaq";
import { EnquiryFaq } from "./EnquiryFaq";
import { OtherInitiatives } from "./OtherInitiatives";
import { EnquiryCTA } from "./EnquiryCTA";

export function EnquiryHub() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requested = searchParams.get("exam");
  const [selectedId, setSelectedId] = useState<ProgramId>(
    isProgramId(requested) ? requested : DEFAULT_PROGRAM_ID
  );
  const program = getEnquiryProgram(selectedId);

  const select = useCallback(
    (id: ProgramId) => {
      setSelectedId(id);
      const href =
        id === DEFAULT_PROGRAM_ID ? pathname : `${pathname}?exam=${id}`;
      router.replace(href, { scroll: false });
      requestAnimationFrame(() => {
        document
          .getElementById("enquiry-detail")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    [pathname, router]
  );

  return (
    <>
      <EnquiryHero />
      <ProgramSelector selectedId={selectedId} onSelect={select} />

      <section className="bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
          <Reveal
            id="enquiry-detail"
            className="scroll-mt-6 space-y-4 lg:space-y-5"
          >
            <ProgramBanner program={program} />
            <DetailGrid program={program} />
            <PrepareAndFaq program={program} />
            <EnquiryFaq key={program.id} program={program} />
          </Reveal>
        </div>
      </section>

      <OtherInitiatives selectedId={selectedId} onSelect={select} />
      <EnquiryCTA />
    </>
  );
}
