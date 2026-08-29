import { ArrowRight } from "../icons";
import type { EnquiryProgram } from "@/content/enquiry/programs";

export function ProgramBanner({ program }: { program: EnquiryProgram }) {
  return (
    <div className="grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:items-center lg:gap-7 lg:p-6">
      <img
        src={program.bannerImage}
        alt={program.bannerAlt}
        className="aspect-[4/3] w-full rounded-xl object-cover"
      />

      <div>
        <div className="flex flex-wrap items-center gap-2.5">
          <h2 className="font-serif text-[20px] font-semibold leading-snug text-navy lg:text-[26px]">
            {program.name}
          </h2>
          <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-navy">
            {program.tag}
          </span>
          {program.comingSoon ? (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-slate-500">
              Coming soon
            </span>
          ) : null}
        </div>
        <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
          {program.summary}
        </p>
      </div>

      <div className="rounded-xl bg-[#e8f1fb] px-4 py-4 text-center lg:px-5 lg:py-5">
        <p className="font-serif text-[15px] font-semibold text-navy lg:text-[16px]">
          Need Complete Details?
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[12.5px]"
        >
          Explore on Genie App <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
