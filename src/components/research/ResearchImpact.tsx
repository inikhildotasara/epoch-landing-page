import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../about/SectionLabel";
import {
  SearchIcon,
  ClipboardIcon,
  DatabaseIcon,
  TargetIcon,
  BulbIcon,
  UserIcon,
} from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const steps: { icon: IconType; title: string; desc: string }[] = [
  { icon: SearchIcon, title: "Research", desc: "We study how children learn and think." },
  { icon: ClipboardIcon, title: "Assessment", desc: "We design age-appropriate assessments." },
  { icon: DatabaseIcon, title: "Data", desc: "We capture meaningful patterns in learner responses." },
  { icon: TargetIcon, title: "Diagnosis", desc: "We identify strengths, gaps and growth opportunities." },
  { icon: BulbIcon, title: "Insight", desc: "We transform data into understandable Academic Health Reports." },
  { icon: UserIcon, title: "Action", desc: "Schools and educators use insights to support better learning and decision-making." },
];

export function ResearchImpact() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 pb-12 lg:pb-16">
        <Reveal>
          <SectionLabel text="How Research Becomes Impact" />
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-start justify-center gap-x-2 gap-y-8 lg:mt-14 xl:flex-nowrap">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex items-start gap-2 xl:flex-1">
                <div className="group flex w-[140px] flex-col items-center text-center xl:w-auto xl:flex-1">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy transition-transform duration-300 group-hover:scale-105 lg:h-[68px] lg:w-[68px]">
                    <Icon className="h-8 w-8 text-gold" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-navy lg:text-[16px]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-snug text-slate-500 lg:text-[12.5px]">
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <span className="mt-6 hidden shrink-0 text-xl text-gold xl:block">
                    &#8594;
                  </span>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
