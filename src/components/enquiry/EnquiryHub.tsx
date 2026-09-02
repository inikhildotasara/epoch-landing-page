"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DEFAULT_PROGRAM_ID,
  getEnquiryProgram,
  type ProgramId,
} from "@/content/enquiry/programs";
import { brandForProgram } from "@/content/site";
import { EnquiryHero } from "./EnquiryHero";
import { ProgramSelector } from "./ProgramSelector";
import { ProgramBanner } from "./ProgramBanner";
import { DetailGrid } from "./DetailGrid";
import { CompleteDetailsCta } from "./CompleteDetailsCta";
import { PrepareAndFaq } from "./PrepareAndFaq";
import { EnquiryFaq } from "./EnquiryFaq";
import { OtherInitiatives } from "./OtherInitiatives";
import { EnquiryCTA } from "./EnquiryCTA";

export function EnquiryHub({ initialId }: { initialId: ProgramId }) {
  const pathname = usePathname();
  const [selectedId, setSelectedId] = useState<ProgramId>(initialId);
  const program = getEnquiryProgram(selectedId);

  const select = useCallback(
    (id: ProgramId) => {
      setSelectedId(id);
      const href =
        id === DEFAULT_PROGRAM_ID ? pathname : `${pathname}?exam=${id}`;
      window.history.replaceState(null, "", href);
      requestAnimationFrame(() => {
        document
          .getElementById("enquiry-detail")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    [pathname]
  );

  return (
    <>
      <EnquiryHero />
      <ProgramSelector selectedId={selectedId} onSelect={select} />

      <section className="bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
          <div id="enquiry-detail" className="scroll-mt-6 space-y-4 lg:space-y-5">
            <ProgramBanner program={program} />
            <DetailGrid program={program} />
            <CompleteDetailsCta program={program} />
            <PrepareAndFaq program={program} />
            <EnquiryFaq key={program.id} program={program} />
          </div>
        </div>
      </section>

      <OtherInitiatives selectedId={selectedId} onSelect={select} />
      <EnquiryCTA brand={brandForProgram(program.id)} />
    </>
  );
}
