import { Reveal } from "../Reveal";
import {
  AnalyticsIcon,
  ArrowRight,
  CheckIcon,
  ClipboardIcon,
  TrendUpIcon,
} from "../icons";

const steps = [
  {
    num: "01",
    icon: ClipboardIcon,
    title: "Capture",
    desc: "Record activities, participation and achievements",
  },
  {
    num: "02",
    icon: TrendUpIcon,
    title: "Track",
    desc: "Build a continuous picture of performance",
  },
  {
    num: "03",
    icon: AnalyticsIcon,
    title: "Understand",
    desc: "Identify patterns, strengths and areas requiring attention",
  },
  {
    num: "04",
    icon: CheckIcon,
    title: "Act",
    desc: "Take timely action for better learning outcomes",
  },
];

export function WhyCCBee() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8">
          <h2 className="text-center font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
            Why MY CCBee?
          </h2>
          <p className="mt-2 text-center text-[12.5px] font-semibold text-gold-dark lg:text-[13px]">
            From daily school activities to actionable insights
          </p>

          {/* Connectors only show once the four steps sit in one row, which they
              only do from xl up — at 1024 a 2×2 grid keeps the copy readable. */}
          <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-7 xl:grid-cols-[repeat(4,minmax(0,1fr))] xl:gap-0">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="flex items-stretch">
                  <div className="flex flex-1 items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 xl:gap-3 xl:p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3fb]">
                      <Icon
                        className="h-5 w-5 text-navy xl:h-[22px] xl:w-[22px]"
                        strokeWidth={1.7}
                      />
                    </span>
                    <div>
                      <h3 className="flex items-baseline gap-1.5 text-[13px] font-bold text-navy lg:text-[13px] xl:text-[13.5px]">
                        <span className="font-semibold text-gold-dark">
                          {s.num}
                        </span>
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-snug text-slate-600 lg:text-[12px] xl:text-[12.5px]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <span
                      className="hidden shrink-0 items-center justify-center px-2.5 text-navy xl:flex"
                      aria-hidden
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
