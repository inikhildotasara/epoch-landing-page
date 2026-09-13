import {
  ArrowRight,
  BriefcaseIcon,
  BulbIcon,
  CoinsIcon,
  GearIcon,
  GlobeIcon,
  GrowthIcon,
  HeadIdeaIcon,
  OpenBookIcon,
  SearchIcon,
  SeedlingIcon,
  ShieldIcon,
  StarIcon,
} from "../icons";
import { Reveal } from "../Reveal";

const domains = [
  {
    title: "Money & Everyday Life",
    detail: "Understand how money works in daily life.",
    color: "#42b58d",
    Icon: CoinsIcon,
  },
  {
    title: "Smart Financial Decisions",
    detail: "Make thoughtful choices and plan for the future.",
    color: "#3f7fd6",
    Icon: BulbIcon,
  },
  {
    title: "Earning & Future Readiness",
    detail: "Build skills for opportunities and growth.",
    color: "#f39a35",
    Icon: BriefcaseIcon,
  },
  {
    title: "Saving, Risk & Financial Well-being",
    detail: "Plan, protect and build financial confidence.",
    color: "#8854b5",
    Icon: GrowthIcon,
  },
  {
    title: "Digital Safety & Identity",
    detail: "Stay safe, be kind and protect your digital footprint.",
    color: "#0f9c9a",
    Icon: ShieldIcon,
  },
  {
    title: "Digital Intelligence & Information",
    detail:
      "Think critically, spot misinformation and use technology wisely.",
    color: "#e84f88",
    Icon: GlobeIcon,
  },
];

const learningCycle = [
  { title: "Learn", detail: "Understand the concept.", Icon: OpenBookIcon },
  { title: "Explore", detail: "See it in real-life situations.", Icon: SearchIcon },
  { title: "Decide", detail: "Make a thoughtful choice.", Icon: HeadIdeaIcon },
  { title: "Act", detail: "Complete a small mission.", Icon: GearIcon },
  { title: "Reflect", detail: "Think about what you learned.", Icon: StarIcon },
  { title: "Grow", detail: "Carry the learning into the next stage.", Icon: SeedlingIcon },
];

const differences: [string, string][] = [
  ["No Marks", "Learning financial and digital judgement is more important than getting a score."],
  ["Real-Life Learning", "Children learn through situations they may encounter in everyday life."],
  ["Age-Progressive", "The same concepts return at deeper levels as the child grows."],
  ["Decision-Based Learning", "Children are encouraged to compare, decide and explain their choices."],
  ["Parent Partnership", "Small parent-child conversations extend learning beyond school."],
  ["Digital Readiness", "Children learn not only how to use technology, but how to use it safely and intelligently."],
  ["Continuous Growth", "The journey develops from Kindergarten to Class 8."],
];

const stages = [
  {
    title: "Discover",
    stage: "Kindergarten",
    detail: "Awareness & safe habits",
    color: "#42b58d",
  },
  {
    title: "Explore",
    stage: "Classes 1–2",
    detail: "Everyday money & digital habits",
    color: "#3f7fd6",
  },
  {
    title: "Decide",
    stage: "Classes 3–4",
    detail: "Choices & simple decisions",
    color: "#f39a35",
  },
  {
    title: "Navigate",
    stage: "Classes 5–6",
    detail: "Financial planning & digital judgement",
    color: "#8854b5",
  },
  {
    title: "Lead",
    stage: "Classes 7–8",
    detail: "Real-world financial & digital readiness",
    color: "#e84f88",
  },
];

export function IFlyOverview() {
  return (
    <section className="overflow-hidden bg-[#fdf8ef]">
      <div className="mx-auto w-full space-y-14 py-12 lg:py-16">
        {/* 1. A Balanced Learning Journey */}
        <div>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              {/* <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d27909]">
                IFLY · Understand Money · Navigate Digital Life
              </p> */}
              <h2 className="mt-3 font-serif text-[26px] font-semibold text-navy lg:text-[34px]">
                A Balanced Learning Journey
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                IFLY brings together six key domains to build well-rounded
                financial and digital readiness for life.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {domains.map((domain, index) => {
              const { Icon } = domain;
              return (
                <Reveal
                  key={domain.title}
                  delay={index * 60}
                  className="rounded-2xl border border-white bg-white px-3 py-5 text-center shadow-sm"
                >
                  <span
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: domain.color }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-3 font-serif text-[13.5px] font-semibold leading-snug text-navy">
                    {domain.title}
                  </h3>
                  <p className="mt-1 text-[10.5px] leading-snug text-slate-600">
                    {domain.detail}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* 2. The IFLY Learning Cycle */}
        <Reveal>
          <div className="rounded-3xl bg-white px-4 py-8 shadow-sm ring-1 ring-slate-100 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Learn · Explore · Decide · Act · Reflect · Grow
              </p>
              <h2 className="mt-2 font-serif text-[25px] font-semibold text-navy lg:text-[32px]">
                The IFLY Learning Cycle
              </h2>
              <p className="mt-2 text-[13px] text-slate-600">
                Children move from understanding to action through a simple,
                experiential cycle.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
              {learningCycle.map((step, index) => {
                const { Icon } = step;
                return (
                  <div key={step.title} className="relative text-center">
                    <div className="flex items-center justify-center sm:block">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fdf0d8] text-[#d27909] sm:mx-auto">
                        <Icon className="h-7 w-7" strokeWidth={1.6} />
                      </span>
                      {index < learningCycle.length - 1 ? (
                        <span className="ml-3 hidden text-xl text-navy lg:absolute lg:right-[-10px] lg:top-4 lg:block">
                          →
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 font-serif text-[16px] font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-1 max-w-[135px] text-[11px] leading-snug text-slate-600">
                      {step.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* 3. What makes IFLY different? */}
        <Reveal>
          <div className="rounded-3xl bg-[#fff8e7] px-4 py-8 ring-1 ring-[#f2e6bf] sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d27909]">
                A different kind of learning experience
              </p>
              <h2 className="mt-2 font-serif text-[25px] font-semibold text-navy lg:text-[32px]">
                What Makes IFLY Different?
              </h2>
              <p className="mt-2 font-serif text-[16px] italic text-[#d27909]">
                Learn at Your Pace. Grow Through the Journey.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {differences.map(([title, detail]) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl bg-white/80 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdecc9] text-sm text-[#d27909]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-serif text-[15px] font-semibold text-navy">
                      {title}
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 4. Growing with Your Child */}
        <div>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d27909]">
                Discover · Explore · Decide · Navigate · Lead
              </p>
              <h2 className="mt-2 font-serif text-[25px] font-semibold text-navy lg:text-[32px]">
                Growing with Your Child
              </h2>
              <p className="mt-2 text-[13px] text-slate-600">
                Five developmental stages. One continuous journey.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stages.map((stage, index) => (
              <Reveal
                key={stage.title}
                delay={index * 60}
                className="relative rounded-2xl border border-white bg-white p-5 text-center shadow-sm"
              >
                <span
                  className="mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                  style={{ backgroundColor: stage.color }}
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 font-serif text-[17px] font-semibold text-navy">
                  {stage.title}
                </h3>
                <p
                  className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: stage.color }}
                >
                  {stage.stage}
                </p>
                <p className="mx-auto mt-2 max-w-[170px] text-[11.5px] leading-snug text-slate-600">
                  {stage.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 5. Closing banner + CTA */}
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-navy px-6 py-10 text-center sm:px-10 lg:px-14">
            <p className="font-serif text-[16px] italic text-gold lg:text-[18px]">
              Better financial decisions. Safer digital habits. A brighter
              future.
            </p>
            <h2 className="max-w-2xl font-serif text-[22px] font-semibold text-white lg:text-[28px]">
              IFLY — Because life skills build confident leaders.
            </h2>
            <a
              href="/register-your-school?program=ifly"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark lg:text-[14px]"
            >
              Register Your School for IFLY <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
