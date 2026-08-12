import { Reveal } from "../Reveal";
import { BrainIcon, TrophyIcon, TrendUpIcon } from "../icons";

const PURPLE = "#6d4aa7";
const ORANGE = "#e8862e";

const items = [
  {
    icon: BrainIcon,
    color: PURPLE,
    tint: "#f2ecfb",
    title: "Brainiac Global",
    sub: "Build Thinking",
  },
  {
    icon: TrophyIcon,
    color: "#0b1c3f",
    tint: "#eef2fb",
    title: "Epoch Olympiad",
    sub: "Assess Intelligence",
  },
  {
    icon: TrendUpIcon,
    color: ORANGE,
    tint: "#fdf1e5",
    title: "MY CCBee",
    sub: "Enable Growth",
  },
];

export function PhilosophyStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-10 lg:py-14">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/70 lg:w-16" />
            <h2 className="text-center font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
              One Research Philosophy. Three Initiatives.
            </h2>
            <span className="h-px w-10 bg-gold/70 lg:w-16" />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-10">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal
                key={it.title}
                delay={i * 90}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-6 transition-shadow duration-300 hover:shadow-md"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: it.tint }}
                >
                  <Icon
                    className="h-7 w-7"
                    style={{ color: it.color }}
                    strokeWidth={1.7}
                  />
                </span>
                <div>
                  <h3
                    className="font-serif text-[19px] font-semibold lg:text-[21px]"
                    style={{ color: it.color }}
                  >
                    {it.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-slate-500 lg:text-[14px]">
                    {it.sub}
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
