import type { ReactNode } from "react";
import { Reveal } from "../Reveal";
import { AchieversRail } from "./AchieversRail";
import { HeadIdeaIcon, FlaskIcon, GlobeIcon, ArrowRight } from "../icons";

const NAVY = "#0b1c3f";

const exams: { code: string; name: string; icon: ReactNode }[] = [
  {
    code: "IAO",
    name: "International Aptitude Olympiad",
    icon: <HeadIdeaIcon className="h-7 w-7 text-navy" strokeWidth={1.6} />,
  },
  {
    code: "ITST",
    name: "International Talent Search Test",
    icon: <FlaskIcon className="h-7 w-7 text-navy" strokeWidth={1.6} />,
  },
  {
    code: "IMO",
    name: "International Mathematics Olympiad",
    icon: (
      <span className="font-serif text-[26px] font-semibold leading-none text-navy">
        &pi;
      </span>
    ),
  },
  {
    code: "IGKO",
    name: "International General Knowledge Olympiad",
    icon: <GlobeIcon className="h-7 w-7 text-navy" strokeWidth={1.6} />,
  },
  {
    code: "+ More",
    name: "Assessments Coming Soon",
    icon: (
      <span className="text-[26px] font-light leading-none text-slate-400">+</span>
    ),
  },
];

export function InitiativeOlympiad() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-6 lg:py-8">
        <Reveal className="rounded-2xl border border-slate-200 bg-[#f7f9fd] p-5 sm:p-7 lg:p-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)_180px] lg:gap-8">
            {/* Photo + number */}
            <div className="relative">
              <span
                className="pointer-events-none absolute -top-2 left-1 font-serif text-[54px] font-bold leading-none lg:text-[64px]"
                style={{ color: NAVY, opacity: 0.18 }}
              >
                02
              </span>
              <div
                className="mt-6 overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#e8eefb" }}
              >
                <img
                  src="/images/init-olympiad.png"
                  alt="A student writing an assessment"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Main content */}
            <div>
              <h3 className="font-serif text-[26px] font-semibold text-navy lg:text-[30px]">
                Epoch Olympiad
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-navy lg:text-[16px]">
                International Assessment Beyond Rote Memory
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                Epoch Olympiad conducts international assessments that evaluate
                conceptual understanding, reasoning, problem-solving and knowledge
                application across multiple domains.
              </p>

              <h4 className="mt-6 text-[15px] font-bold text-navy lg:text-[16px]">
                Our International Olympiad Exams
              </h4>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {exams.map((e) => (
                  <div
                    key={e.code}
                    className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-2 py-4 text-center"
                  >
                    <span className="flex h-9 items-center justify-center">
                      {e.icon}
                    </span>
                    <span className="mt-2 text-[14px] font-bold text-navy">
                      {e.code}
                    </span>
                    <span className="mt-1 text-[10.5px] leading-tight text-slate-500">
                      {e.name}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600"
              >
                Explore All Exams <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Achievers + FAQ rail */}
            <AchieversRail
              accent={NAVY}
              gallery={
                <img
                  src="/images/achievers-olympiad.png"
                  alt="Students holding certificates"
                  className="h-28 w-full object-cover"
                />
              }
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
