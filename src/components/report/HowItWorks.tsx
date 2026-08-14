import { Reveal } from "../Reveal";
import { ClipboardIcon, AnalyticsIcon, ScaleIcon, TrendUpIcon } from "../icons";
import { type IconType } from "./ui";

const steps: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: ClipboardIcon,
    title: "Assess",
    desc: "The learner sits an age-appropriate assessment built to reveal reasoning, not recall speed.",
  },
  {
    icon: AnalyticsIcon,
    title: "Analyse",
    desc: "Responses are decomposed into the distinct abilities behind them instead of one aggregate mark.",
  },
  {
    icon: ScaleIcon,
    title: "Benchmark",
    desc: "Each ability is placed against school, national and international cohorts of the same stage.",
  },
  {
    icon: TrendUpIcon,
    title: "Act",
    desc: "The report closes with specific next steps for home and classroom, tuned to this learner's pattern.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy" style={{ backgroundColor: "#0b1c3f" }}>
      <div className="mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold lg:text-[12.5px]">
            From Assessment to Action
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl font-serif text-[24px] font-medium leading-snug text-white lg:text-[32px]">
            How a report is built
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="relative flex h-full flex-col rounded-2xl border border-white/12 bg-white/5 p-5 lg:p-6">
                  <span className="absolute right-4 top-4 font-serif text-[30px] font-medium leading-none text-white/10 lg:text-[38px]">
                    {i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-navy/40">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-serif text-[18px] font-medium text-white lg:text-[20px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300 lg:text-[13.5px]">
                    {s.desc}
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
