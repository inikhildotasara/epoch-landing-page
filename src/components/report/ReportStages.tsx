import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import { SectionHead } from "./ui";

const stages: {
  logo: string;
  accent: string;
  stage: string;
  brand: string;
  tagline: string;
  who: string;
  focus: string;
  measures: string[];
  href: string;
}[] = [
  {
    logo: "/images/LOGO - BRAINIAC.png",
    accent: "#1a7a4c",
    stage: "Stage 1",
    brand: "Brainiac Global",
    tagline: "Building Thinking Before Memorisation",
    who: "Early years learners",
    focus:
      "Reads how a young child observes, notices patterns and stays with a task — described in plain language, without a single rank.",
    measures: [
      "Six developmental lenses",
      "Learning readiness profile",
      "Play-based next steps",
    ],
    href: "#foundation",
  },
  {
    logo: "/images/LOGO - EPOCH.png",
    accent: "#1b4f9c",
    stage: "Stage 2",
    brand: "Epoch Olympiad",
    tagline: "From Exploration to Structured Thinking",
    who: "Primary & middle school",
    focus:
      "Separates what a learner remembers from what they actually understand, then benchmarks both against school, national and global cohorts.",
    measures: [
      "Six scored dimensions",
      "Understanding vs recall split",
      "Academic health matrix",
    ],
    href: "#olympiad",
  },
  {
    logo: "/images/LOGO - EPOCH.png",
    accent: "#8a6a12",
    stage: "Stage 3",
    brand: "Epoch Olympiad Advanced",
    tagline: "From Structured Thinking to Advanced Application",
    who: "Senior learners",
    focus:
      "Tests thinking as problems become unfamiliar, exposing the gap between knowing a concept and applying it under genuine novelty.",
    measures: [
      "Seven cognitive dimensions",
      "Knowledge vs application gap",
      "Performance under complexity",
    ],
    href: "#advanced",
  },
];

export function ReportStages() {
  return (
    <section id="stages" className="scroll-mt-4 bg-white">
      <div className="mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
        <Reveal>
          <SectionHead
            eyebrow="One Framework, Three Editions"
            title="The report grows with the learner"
            intro="The questions worth asking about a five-year-old are not the questions worth asking about a fifteen-year-old. Each edition keeps the same diagnostic spine and changes the lens, so a family can follow one continuous story from early play to advanced application."
          />
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {stages.map((s, i) => {
            return (
              <Reveal
                key={s.brand}
                delay={i * 110}
                className="h-full"
              >
                <a
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl lg:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12"
                      style={{ backgroundColor: `${s.accent}14` }}
                    >
                      <img
                        src={s.logo}
                        alt={`${s.brand} logo`}
                        className="h-8 w-8 object-contain lg:h-9 lg:w-9"
                      />
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: s.accent }}
                      >
                        {s.stage}
                      </p>
                      <p className="text-[11.5px] text-slate-500 lg:text-[12px]">
                        {s.who}
                      </p>
                    </div>
                  </div>

                  {/* `lh` minimums keep the three cards' bullet lists on the
                      same baseline when a title or tagline wraps. */}
                  <h3 className="mt-4 font-serif text-[19px] font-medium text-navy md:min-h-[2lh] lg:text-[22px]">
                    {s.brand}
                  </h3>
                  <p
                    className="mt-1 font-serif text-[13px] italic md:min-h-[2lh] lg:text-[14px]"
                    style={{ color: s.accent }}
                  >
                    {s.tagline}
                  </p>
                  <p className="mt-3 mb-4 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px]">
                    {s.focus}
                  </p>

                  <ul className="mt-auto space-y-1.5 border-t border-slate-100 pt-4">
                    {s.measures.map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-2 text-[12px] text-slate-600 lg:text-[12.5px]"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: s.accent }}
                        />
                        {m}
                      </li>
                    ))}
                  </ul>

                  <span
                    className="inline-flex items-center gap-1.5 pt-5 text-[12.5px] font-semibold lg:text-[13px]"
                    style={{ color: s.accent }}
                  >
                    See what&apos;s inside
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
