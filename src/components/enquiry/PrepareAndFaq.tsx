import {
  ArrowRight,
  DocIcon,
  EditIcon,
  GradCapIcon,
  HelpBubbleIcon,
  OpenBookIcon,
} from "../icons";
import type { EnquiryProgram } from "@/content/enquiry/programs";

const resources = [
  { icon: OpenBookIcon, label: "Engaging Workbooks" },
  { icon: EditIcon, label: "Practice Exams" },
  { icon: DocIcon, label: "Sample Papers" },
  { icon: GradCapIcon, label: "Learning Resources" },
];

export function PrepareAndFaq({ program }: { program: EnquiryProgram }) {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(260px,0.85fr)] xl:items-stretch">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f4f0e6]">
        <div className="grid grid-cols-1 items-start md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
          <img
            src="/images/brain-booster/hero-learners.jpg"
            alt="Young learners preparing with workbooks"
            className="block h-auto w-full object-contain object-center"
          />
          <div className="p-5 lg:p-6">
            <h3 className="font-serif text-[18px] font-semibold text-navy lg:text-[20px]">
              How to Prepare?
            </h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
              {program.prepare}
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[12.5px]"
            >
              Explore Genie App <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {resources.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.label} className="flex flex-col items-center text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <p className="mt-2 text-[11px] font-semibold leading-snug text-navy lg:text-[11.5px]">
                      {r.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
        <div>
          <div className="flex items-center gap-2.5">
            <HelpBubbleIcon className="h-6 w-6 text-navy" strokeWidth={1.7} />
            <h3 className="font-serif text-[18px] font-semibold text-navy lg:text-[20px]">
              Frequently Asked Questions
            </h3>
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
            Quick answers about eligibility, format, preparation and results for{" "}
            {program.shortName}.
          </p>
        </div>
        <a
          href="#faq"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[12.5px]"
        >
          View FAQs <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
