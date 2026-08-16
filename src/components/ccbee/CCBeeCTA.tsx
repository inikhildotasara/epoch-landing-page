import { Reveal } from "../Reveal";
import {
  AnalyticsIcon,
  ArrowRight,
  BulbIcon,
  PlayIcon,
  TargetIcon,
  TrendUpIcon,
} from "../icons";

const highlights = [
  { icon: AnalyticsIcon, label: "Smarter Tracking" },
  { icon: BulbIcon, label: "Better Insights" },
  { icon: TargetIcon, label: "Timely Action" },
  { icon: TrendUpIcon, label: "Stronger Growth" },
];

export function CCBeeCTA() {
  return (
    <section id="demo" className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-12 lg:pb-16">
        <Reveal className="rounded-2xl bg-navy px-6 py-7 lg:px-9 lg:py-8">
          <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
            <div className="text-center xl:text-left">
              <h2 className="font-serif text-[19px] font-semibold text-gold lg:text-[22px]">
                See MY CCBee in Action
              </h2>
              <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300 lg:text-[13px]">
                Your school is already generating valuable information every
                day.
                <br className="hidden sm:block" /> MY CCBee helps you turn that
                information into timely action.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 xl:shrink-0">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <li
                    key={h.label}
                    className="flex flex-col items-center text-center"
                  >
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.7} />
                    <span className="mt-2 text-[11.5px] font-semibold text-white lg:text-[12px]">
                      {h.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark sm:w-auto lg:text-[14px]"
            >
              Request For Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto lg:text-[14px]"
            >
              Watch Product Overview
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/60">
                <PlayIcon className="h-2.5 w-2.5" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
