import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import {
  AnalyticsIcon,
  HeadBulbIcon,
  BulbIcon,
  TrendUpIcon,
  PuzzleIcon,
  LaurelGlobeIcon,
  TargetIcon,
  ClipboardIcon,
} from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const features: { icon: IconType; label: string }[] = [
  { icon: AnalyticsIcon, label: "Learning Patterns" },
  { icon: HeadBulbIcon, label: "Thinking Abilities" },
  { icon: BulbIcon, label: "Concept Mastery" },
  { icon: TrendUpIcon, label: "Growth Areas" },
  { icon: PuzzleIcon, label: "Logical Reasoning" },
  { icon: LaurelGlobeIcon, label: "International Benchmark" },
  { icon: TargetIcon, label: "Problem-Solving Skills" },
  { icon: ClipboardIcon, label: "Learning Readiness" },
];

export function ResearchInPractice() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-12 lg:pb-16">
        <Reveal className="overflow-hidden rounded-3xl bg-[#fdf6e9]">
          <div className="grid grid-cols-1 items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[1.05fr_1fr_0.7fr] lg:gap-6 lg:px-12 lg:py-12">
            {/* Device mockup */}
            <img
              src="/images/research-ahr-devices.png"
              alt="Academic Health Report on laptop and mobile"
              className="mx-auto w-full max-w-[460px] object-contain lg:max-w-none"
            />

            {/* Copy */}
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark lg:text-[13px]">
                Our Research in Practice
              </p>
              <h2 className="mt-2 font-serif text-[26px] font-medium text-navy lg:text-[32px]">
                Academic Health Report
              </h2>
              <p className="mt-1 font-serif text-[16px] italic text-gold-dark lg:text-[18px]">
                Beyond Marks. Understand the Learner.
              </p>
              <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                <p>
                  Our research is translated into the Academic Health Report—a
                  comprehensive diagnostic framework designed to provide a deeper
                  view of a learner&apos;s academic and cognitive development.
                </p>
                <p>
                  Instead of presenting performance as a single score, the report
                  brings together multiple dimensions of learning to help schools
                  and parents understand where a learner is today, how the learner
                  is progressing, and where meaningful growth may be possible.
                </p>
              </div>
              <a
                href="/academic-health-report"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark lg:text-[14px]"
              >
                Explore Academic Health Report
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Feature icons */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Icon className="h-5 w-5 text-gold-dark" strokeWidth={1.6} />
                    </div>
                    <span className="text-[12px] leading-tight text-slate-700 lg:text-[12.5px]">
                      {f.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
