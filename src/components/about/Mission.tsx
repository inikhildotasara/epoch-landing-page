import { MicroscopeIcon, ClipboardIcon, TrendUpIcon, NetworkIcon } from "../icons";
import { Reveal } from "../Reveal";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    icon: MicroscopeIcon,
    title: "Research",
    desc: "Advance evidence-based educational frameworks through continuous research and collaboration.",
  },
  {
    icon: ClipboardIcon,
    title: "Assessment",
    desc: "Develop meaningful cognitive assessments that measure thinking, not just memory.",
  },
  {
    icon: TrendUpIcon,
    title: "Diagnosis",
    desc: "Provide Academic Health Reports that turn assessment data into meaningful insights and identify areas for growth.",
  },
  {
    icon: NetworkIcon,
    title: "Transformation",
    desc: "Empower schools and educators to nurture thinking, creativity, and problem-solving in every learner.",
  },
];

export function Mission() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-10 lg:py-16">
        <Reveal>
          <SectionLabel text="Our Mission" />
        </Reveal>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
          {items.map((m, i) => {
            const Icon = m.icon;
            // Divider sits in the gap to the left of an item.
            // 4-col (xl): before items 1,2,3 · 2-col (sm): before items 1,3
            const dividerClass =
              i === 0
                ? ""
                : i % 2 === 1
                ? "hidden sm:block"
                : "hidden xl:block";
            return (
              <Reveal
                key={m.title}
                delay={i * 100}
                className="group relative flex items-start gap-4"
              >
                {i > 0 && (
                  <span
                    className={`${dividerClass} absolute inset-y-1 left-[-16px] w-px bg-slate-200 lg:left-[-20px] xl:left-[-24px]`}
                  />
                )}
                <div className="relative shrink-0">
                  <span className="absolute -left-2 -top-2 h-[92px] w-[92px] rounded-full bg-gold/10 lg:h-[112px] lg:w-[112px]" />
                  <div className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full bg-navy transition-transform duration-300 group-hover:scale-105 lg:h-[94px] lg:w-[94px]">
                    <Icon className="h-[42px] w-[42px] text-gold lg:h-[52px] lg:w-[52px]" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[18px] font-semibold text-navy lg:text-[21px]">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500 lg:text-[14px]">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
