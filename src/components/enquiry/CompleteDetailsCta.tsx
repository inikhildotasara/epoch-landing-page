import { ArrowRight } from "../icons";
import type { EnquiryProgram } from "@/content/enquiry/programs";
import { brandForProgram, siteBrands } from "@/content/site";

export function CompleteDetailsCta({ program }: { program: EnquiryProgram }) {
  const brand = siteBrands[brandForProgram(program.id)];

  return (
    <div className="rounded-2xl border border-slate-200 bg-[#e8f1fb] px-5 py-6 text-center sm:px-8 lg:px-10 lg:py-7">
      <p className="font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
        Need Complete Details?
      </p>
      <p className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
        Open the {brand.genieAppLabel} for syllabus, sample papers, workbooks and
        results for {program.shortName}.
      </p>
      <a
        href={brand.genieAppHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[13px]"
      >
        {brand.genieAppLabel} <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
