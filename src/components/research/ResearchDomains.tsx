import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../about/SectionLabel";
import {
  BrainIcon,
  HeadBulbIcon,
  ClipboardIcon,
  LaurelGlobeIcon,
  ChipIcon,
} from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const domains: { icon: IconType; num: string; title: string; desc: string }[] = [
  {
    icon: BrainIcon,
    num: "01",
    title: "Cognitive Abilities",
    desc: "Understanding the cognitive abilities that influence how children process information, reason, connect concepts and solve unfamiliar problems.",
  },
  {
    icon: HeadBulbIcon,
    num: "02",
    title: "Learning & Thinking",
    desc: "Studying how learners understand concepts, recognize patterns, apply knowledge and transfer learning to new situations.",
  },
  {
    icon: ClipboardIcon,
    num: "03",
    title: "Diagnostic Assessment",
    desc: "Developing assessment frameworks that reveal more than marks—identifying strengths, gaps, learning patterns and growth opportunities.",
  },
  {
    icon: LaurelGlobeIcon,
    num: "04",
    title: "International Benchmarking",
    desc: "Creating meaningful benchmarks that allow student performance and cognitive development to be understood beyond a single school or region.",
  },
  {
    icon: ChipIcon,
    num: "05",
    title: "Educational Technology",
    desc: "Using data, analytics and technology to transform assessment results into actionable insights for educators, parents and schools.",
  },
];

export function ResearchDomains() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-12 lg:pb-16">
        <Reveal>
          <SectionLabel text="Our Research Domains" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5">
          {domains.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal
                key={d.title}
                delay={i * 80}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7 text-gold" strokeWidth={1.6} />
                    </div>
                    <span className="text-[15px] font-semibold text-gold-dark">
                      {d.num}
                    </span>
                  </div>
                  <span className="font-serif text-[34px] font-bold leading-none text-slate-100">
                    {d.num}
                  </span>
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-gold-dark lg:text-[17px]">
                  {d.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500 lg:text-[13.5px]">
                  {d.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
