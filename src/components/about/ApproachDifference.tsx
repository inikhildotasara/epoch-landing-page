import {
  MicroscopeDetailIcon,
  HeadIdeaIcon,
  AnalyticsIcon,
  NetworkIcon,
} from "../icons";
import { Reveal } from "../Reveal";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    icon: MicroscopeDetailIcon,
    title: "Research-led",
    desc: "Our approach begins with educational research, not simply examination.",
  },
  {
    icon: HeadIdeaIcon,
    title: "Thinking-focused",
    desc: "We look beyond recall to reasoning, application and problem-solving.",
  },
  {
    icon: AnalyticsIcon,
    title: "Insight-driven",
    desc: "Assessment is used to understand learning and identify areas for growth.",
  },
  {
    icon: NetworkIcon,
    title: "Ecosystem-based",
    desc: "We connect assessment, learning and school-level improvement.",
  },
];

export function ApproachDifference() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-10 lg:py-16">
        <Reveal>
          <SectionLabel text="What Makes Our Approach Different?" />
        </Reveal>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="rounded-2xl border border-[#ece3d2] bg-white px-6 py-7 lg:px-7 lg:py-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy lg:h-14 lg:w-14">
                  <Icon
                    className="h-6 w-6 text-gold lg:h-7 lg:w-7"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-5 font-serif text-[18px] font-semibold text-navy lg:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500 lg:text-[14px]">
                  {item.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
