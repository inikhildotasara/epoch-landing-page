import { Reveal } from "../Reveal";
import { BulbIcon, ClipboardIcon, DocIcon, TrendUpIcon } from "../icons";

const steps = [
  { icon: BulbIcon, title: "Discover", desc: "Spark curiosity and thinking" },
  {
    icon: ClipboardIcon,
    title: "Assess",
    desc: "Evaluate abilities with research-driven assessments",
  },
  {
    icon: DocIcon,
    title: "Understand",
    desc: "Gain meaningful insights with diagnostic reports",
  },
  {
    icon: TrendUpIcon,
    title: "Improve",
    desc: "Track progress and nurture growth",
  },
];

export function JourneyBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 pb-4 lg:pb-8">
        <Reveal className="rounded-2xl bg-navy px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:flex xl:items-center xl:gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="flex items-center gap-3 xl:flex-1"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5">
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold text-white lg:text-[17px]">
                        {s.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-snug text-slate-300 lg:text-[12.5px]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="ml-auto hidden text-2xl text-gold xl:block">
                      &#8594;
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
