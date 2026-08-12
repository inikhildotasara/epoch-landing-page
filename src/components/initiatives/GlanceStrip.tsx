import { Reveal } from "../Reveal";
import { BrainIcon, TrophyIcon, TrendUpIcon } from "../icons";

const cols = [
  {
    icon: BrainIcon,
    color: "#6d4aa7",
    title: "Brainiac Global",
    desc: "Brainiac Global is an early-years cognitive assessment initiative focused on understanding foundational thinking abilities. Its current assessment, the Brain Booster Olympiad, is designed for young learners and helps build observation, logic, patterns, spatial thinking and learning readiness.",
  },
  {
    icon: TrophyIcon,
    color: "#0b1c3f",
    title: "Epoch Olympiad",
    desc: "Epoch Olympiad is our international assessment initiative for school learners. It offers IAO, ITST, IMO and IGKO to evaluate conceptual understanding, reasoning, analytical thinking and knowledge application across multiple subjects.",
  },
  {
    icon: TrendUpIcon,
    color: "#e8862e",
    title: "MY CCBee",
    desc: "MY CCBee is a performance tracking and booster platform that helps schools and educators interpret assessment data, monitor progress and support continuous improvement through meaningful insights and resources.",
  },
];

export function GlanceStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 py-12 lg:py-16">
        <Reveal className="rounded-2xl bg-[#f8f8fb] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/70 lg:w-16" />
            <h2 className="text-center font-serif text-[19px] font-semibold text-navy lg:text-[24px]">
              Our Initiatives at a Glance
            </h2>
            <span className="h-px w-10 bg-gold/70 lg:w-16" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-10 lg:gap-10">
            {cols.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title}>
                  <Icon
                    className="h-9 w-9"
                    style={{ color: c.color }}
                    strokeWidth={1.7}
                  />
                  <h3
                    className="mt-4 font-serif text-[19px] font-semibold lg:text-[21px]"
                    style={{ color: c.color }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-600 lg:text-[13.5px]">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
