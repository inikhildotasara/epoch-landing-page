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
    name: "International Test of Science & Technology",
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
        <Reveal className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9fd] p-5 sm:p-7 lg:p-9">
          {/* At 1024 three columns leave the copy too narrow, so the rail tucks in
              under the photo as a left sidebar until there is room for it beside. */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-7 lg:gap-y-7 xl:grid-cols-[1.5fr_3.2fr_minmax(212px,1fr)] xl:grid-rows-none xl:gap-8">
            {/* Photo panel — bleeds into the card padding so it sits flush with the
                card edges, and fills the whole card height from xl up */}
            <div
              className="relative -mx-5 -mt-5 sm:-mx-7 sm:-mt-7 lg:mx-0 lg:-ml-9 lg:-mt-9 lg:col-start-1 lg:row-start-1 xl:-mb-9"
              style={{ backgroundColor: "#e8eefb" }}
            >
              <span
                className="pointer-events-none absolute left-3 top-1 z-10 font-serif text-[54px] font-bold leading-none lg:text-[64px]"
                style={{ color: NAVY, opacity: 0.3 }}
              >
                02
              </span>
              <img
                src="/images/init-olympiad.png"
                alt="A student writing an assessment"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Main content */}
            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 xl:row-span-1">
              <h3>
                <img
                  src="/images/EPOCH NAME LOGO - Copy.png"
                  alt="Epoch Olympiad"
                  className="h-16 w-auto max-w-[260px] object-contain object-left lg:h-[76px]"
                />
              </h3>
              <p className="mt-1 font-serif text-[15px] font-semibold text-navy lg:text-[16px]">
                International Assessment Beyond Rote Memory
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                Epoch Olympiad conducts international assessments that evaluate
                conceptual understanding, reasoning, problem-solving and knowledge
                application across multiple domains.
              </p>

              <h4 className="mt-6 font-serif text-[15px] font-bold text-navy lg:text-[16px]">
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
                href="/initiatives/epoch-olympiad"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600"
              >
                Explore All Exams <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Achievers + FAQ rail */}
            <AchieversRail
              accent={NAVY}
              faqHref="/initiatives/epoch-olympiad#faq"
              className="lg:col-start-1 lg:row-start-2 lg:self-start xl:col-start-3 xl:row-start-1 xl:self-stretch xl:justify-between xl:border-l xl:border-slate-200 xl:pl-6"
              gallery={
                <img
                  src="/images/achievers-olympiad.png"
                  alt="Students holding certificates"
                  className="h-full w-full object-cover"
                />
              }
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
