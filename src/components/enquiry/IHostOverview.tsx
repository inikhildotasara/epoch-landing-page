import Image from "next/image";
import { ArrowRight } from "../icons";
import { Reveal } from "../Reveal";

const learningPillars = [
  {
    title: "Mathematics",
    detail: "Builds logical thinking",
    color: "#2aa9d6",
    symbol: undefined,
    image: "/images/ihost/mathematics.png",
  },
  {
    title: "Science",
    detail: "Encourages curiosity",
    color: "#42b58d",
    symbol: undefined,
    image: "/images/ihost/science.png",
  },
  {
    title: "Aptitude",
    detail: "Strengthens reasoning",
    color: "#f39a35",
    symbol: undefined,
    image: "/images/ihost/aptitude.png",
  },
  {
    title: "General Knowledge",
    detail: "Expands world awareness",
    color: "#8854b5",
    symbol: undefined,
    image: "/images/ihost/general-knowledge.png",
  },
  {
    title: "Language",
    detail: "Builds communication",
    color: "#e84f88",
    symbol: undefined,
    image: "/images/ihost/language.png",
  },
];

const journey = [
  ["Think", "Ask questions and find possibilities", "💡"],
  ["Explore", "Observe, investigate and be curious", "⌕"],
  ["Apply", "Use knowledge in real-life situations", "◎"],
  ["Create", "Imagine, design and build", "♧"],
  ["Reflect", "Think about what you have learned", "☆"],
];

const differences = [
  ["No Marks", "Learning is not reduced to a score."],
  ["Flexible Timing", "Begin at a suitable time, with ongoing learning."],
  ["Flexible Grouping", "Combine classes as needed for the experience."],
  ["Parent Partnership", "Selected challenges can include parents as learning partners."],
  ["Continuous Growth", "The journey continues from Kindergarten to Class 8."],
  ["Growth Snapshot", "Track meaningful progress, insights and next steps."],
];

export function IHostOverview() {
  return (
    <section className="overflow-hidden bg-[#f4fbfc]">
      <div className="mx-auto w-full space-y-14 py-12 lg:py-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            {/* <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f9c9a]">
              IHOST · International Holistic Olympiad for Smart Thinkers
            </p> */}
            <h2 className="mt-3 font-serif text-[26px] font-semibold text-navy lg:text-[34px]">
              A Balanced Diet for the Brain
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
              Just as the body needs different nutrients to grow, the developing
              mind needs different forms of intellectual nourishment.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {learningPillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 70}
              className="rounded-2xl border border-white bg-white px-3 py-5 text-center shadow-sm"
            >
              {pillar.image ? (
                <Image
                  src={pillar.image}
                  alt={`${pillar.title} icon`}
                  width={64}
                  height={64}
                  className="mx-auto h-14 w-14 rounded-full object-contain"
                />
              ) : (
                <span
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-[28px] font-light text-white"
                  style={{ backgroundColor: pillar.color }}
                >
                  {pillar.symbol}
                </span>
              )}
              <h3 className="mt-3 font-serif text-[16px] font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-1 text-[11px] leading-snug text-slate-600">
                {pillar.detail}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-3xl bg-white px-4 py-8 shadow-sm ring-1 ring-slate-100 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Think · Explore · Discover · Excel
              </p>
              <h2 className="mt-2 font-serif text-[25px] font-semibold text-navy lg:text-[32px]">
                Five Learning Pillars
              </h2>
              <p className="mt-2 text-[13px] text-slate-600">
                A journey of real-life learning, from curiosity to confident
                application.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-3">
              {journey.map(([title, detail, symbol], index) => (
                <div key={title} className="relative text-center">
                  <div className="flex items-center justify-center sm:block">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e4f4f6] text-[28px] text-[#0f9c9a] sm:mx-auto">
                      {symbol}
                    </span>
                    {index < journey.length - 1 ? (
                      <span className="ml-3 hidden text-xl text-navy sm:absolute sm:right-[-10px] sm:top-4 sm:block">
                        →
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 font-serif text-[16px] font-semibold text-navy">
                    {title}
                  </h3>
                  <p className="mx-auto mt-1 max-w-[135px] text-[11px] leading-snug text-slate-600">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl bg-[#fff8e7] px-4 py-8 ring-1 ring-[#f2e6bf] sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d27909]">
                A different kind of learning experience
              </p>
              <h2 className="mt-2 font-serif text-[25px] font-semibold text-navy lg:text-[32px]">
                How It&apos;s Different from Olympiad Exams
              </h2>
              <p className="mt-2 font-serif text-[16px] italic text-[#d27909]">
                Learn at Your Pace. Grow Through the Journey.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {differences.map(([title, detail], index) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl bg-white/80 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e5f3df] text-sm text-[#23834b]">
                    {index === differences.length - 1 ? "↗" : "✓"}
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

        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-navy px-6 py-10 text-center sm:px-10 lg:px-14">
            <p className="font-serif text-[16px] italic text-[#5fd0cd] lg:text-[18px]">
              Curiosity. Reasoning. Real-life thinking.
            </p>
            <h2 className="max-w-2xl font-serif text-[22px] font-semibold text-white lg:text-[28px]">
              IHOST — A Balanced Diet for the Growing Mind.
            </h2>
            <a
              href="/register-your-school?program=ihost"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark lg:text-[14px]"
            >
              Register Your School for IHOST <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
