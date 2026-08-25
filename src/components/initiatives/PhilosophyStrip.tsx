import type { CSSProperties } from "react";
import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";

const PURPLE = "#6d4aa7";
const NAVY = "#0b1c3f";
const ORANGE = "#e8862e";

const cards = [
  {
    logo: "/images/brainic.png",
    color: PURPLE,
    tint: "#f2ecfb",
    wash: "#faf8fe",
    title: "Brainiac Global",
    tagline: "Building Thinking Foundations from the Earliest Years",
    audience: "Kindergarten | Ages 2–6",
    what: "Builds early thinking through engaging learning experiences and age-appropriate cognitive assessment—helping young children develop curiosity, observation, reasoning and problem-solving.",
    who: "Young learners in playschool, nursery, LKG and UKG.",
    cta: "Explore Brainiac Global",
    href: "/initiatives/brain-booster-olympiad",
  },
  {
    logo: "/images/LOGO - EPOCH.png",
    color: NAVY,
    tint: "#eef2fb",
    wash: "#f7f9fd",
    title: "Epoch Olympiad",
    tagline: "International Assessments & Future-Ready Learning",
    audience: "Classes 1–10",
    what: "International assessments and future-ready learning initiatives that develop conceptual understanding, reasoning, problem-solving and knowledge application.",
    who: "Students from Classes 1 to 10 seeking research-driven olympiads and learning.",
    cta: "Explore Epoch Olympiad",
    href: "/initiatives/epoch-olympiad",
  },
  {
    logo: "/images/LOGO - MY CCBEE.png",
    color: ORANGE,
    tint: "#fdf1e5",
    wash: "#fffaf4",
    title: "MY CCBee",
    tagline: "Turning School Performance Data into Meaningful Action",
    audience: "For Schools",
    what: "A performance tracking and booster platform that helps schools convert assessment data into actionable insights.",
    who: "Schools, principals and teachers supporting continuous improvement.",
    cta: "Explore MY CCBee",
    href: "/initiatives/my-ccbee",
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

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-10 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="h-full">
              <article
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 transition-shadow duration-300 hover:shadow-md"
                style={
                  {
                    backgroundColor: c.wash,
                    "--accent": c.color,
                  } as CSSProperties
                }
              >
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: c.tint }}
                    >
                      <img
                        src={c.logo}
                        alt={`${c.title} logo`}
                        className="h-8 w-8 object-contain"
                      />
                    </span>
                    <h3
                      className="font-serif text-[19px] font-semibold lg:text-[21px]"
                      style={{ color: c.color }}
                    >
                      {c.title}
                    </h3>
                  </div>

                  <p className="mt-4 font-serif text-[14.5px] font-semibold leading-snug text-navy lg:text-[15.5px]">
                    {c.tagline}
                  </p>
                  <p
                    className="mt-2 inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
                    style={{ backgroundColor: c.tint, color: c.color }}
                  >
                    {c.audience}
                  </p>

                  <div className="mt-5 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                    <div>
                      <h4 className="text-[12.5px] font-bold text-navy lg:text-[13px]">
                        What We Do
                      </h4>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                        {c.what}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[12.5px] font-bold text-navy lg:text-[13px]">
                        Who It&apos;s For
                      </h4>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                        {c.who}
                      </p>
                    </div>
                  </div>

                  <a
                    href={c.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-[var(--accent)] bg-white px-3.5 py-2 text-[13px] font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
