import { Reveal } from "../Reveal";

const PURPLE = "#6d4aa7";
const NAVY = "#0b1c3f";
const ORANGE = "#e8862e";

const steps = [
  {
    logo: "/images/brainic.png",
    color: PURPLE,
    tint: "#f2ecfb",
    title: "Brainiac Global",
    role: "Build Thinking",
    audience: "Kindergarten | Ages 2–6",
    desc: "Builds the foundations of curiosity, observation, reasoning and problem-solving through engaging early-learning experiences.",
  },
  {
    logo: "/images/LOGO - EPOCH.png",
    color: NAVY,
    tint: "#eef2fb",
    title: "Epoch Olympiad",
    role: "Measure Understanding",
    audience: "Classes 1–10",
    desc: "Builds on those foundations through subject learning, reasoning, knowledge application and future-ready thinking.",
  },
  {
    logo: "/images/LOGO - MY CCBEE.png",
    color: ORANGE,
    tint: "#fdf1e5",
    title: "MY CCBee",
    role: "Enable Growth",
    audience: "For Schools",
    desc: "Helps schools understand children's progress and turn meaningful insights into better learning and continuous improvement.",
  },
];

function Arrow({
  direction,
  className = "",
}: {
  direction: "right" | "down";
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={`h-6 w-6 shrink-0 text-navy/35 ${
        direction === "down" ? "rotate-90" : ""
      } ${className}`}
    >
      <path
        d="M4 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2.4 3.2"
      />
    </svg>
  );
}

function StepCard({
  step,
  stacked = false,
}: {
  step: (typeof steps)[number];
  stacked?: boolean;
}) {
  return (
    <div
      className={
        stacked
          ? "flex min-w-0 flex-col items-center text-center"
          : "flex min-w-0 items-start gap-4"
      }
    >
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: step.tint }}
      >
        <img
          src={step.logo}
          alt=""
          className="h-8 w-8 object-contain"
        />
      </span>
      <div className={stacked ? "mt-3" : undefined}>

        <h3
          className="mt-1 font-serif text-[18px] font-semibold lg:text-[20px]"
          style={{ color: step.color }}
        >
          {step.title}
        </h3>
        
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: step.color }}
        >
          {step.role}
        </p>
        <p className="mt-0.5 text-[12px] font-medium text-slate-500">
          {step.audience}
        </p>
        <p
          className={`mt-2 text-[13px] leading-relaxed text-slate-600 ${
            stacked ? "max-w-[18rem]" : ""
          }`}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export function EcosystemStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-12 lg:py-16">
        <Reveal className="rounded-2xl bg-[#f8f8fb] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/70 lg:w-16" />
            <h2 className="text-center font-serif text-[19px] font-semibold text-navy lg:text-[24px]">
              How Our Ecosystem Works Together
            </h2>
            <span className="h-px w-10 bg-gold/70 lg:w-16" />
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[13.5px] leading-relaxed text-slate-500 lg:text-[14.5px]">
            Each initiative serves a different stage of the learning journey — from building early thinking to developing deeper understanding and enabling continuous growth.
          </p>

          {/* Phone: one column so the path is always 1 ↓ 2 ↓ 3 */}
          <ol className="mt-8 flex flex-col gap-5 md:hidden">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-stretch gap-4">
                <StepCard step={s} />
                {i < steps.length - 1 && (
                  <Arrow direction="down" className="self-center" />
                )}
              </li>
            ))}
          </ol>

          {/* Tablet and up: three nodes in one row, connectors at icon height */}
          <ol className="mt-10 hidden md:flex md:items-start">
            {steps.map((s, i) => (
              <li key={s.title} className="flex min-w-0 flex-1 items-start">
                <div className="min-w-0 flex-1">
                  <StepCard step={s} stacked />
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="mt-[18px] flex h-14 w-10 shrink-0 items-center lg:w-14"
                    aria-hidden
                  >
                    <span className="mr-0.5 hidden h-px flex-1 border-t border-dashed border-navy/25 lg:block" />
                    <Arrow direction="right" />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-10 max-w-3xl rounded-xl bg-[#eef2fb] px-5 py-4 text-center text-[13.5px] leading-relaxed text-navy lg:mt-12 lg:px-8 lg:py-5 lg:text-[15px]">
            Together, they create a connected journey from early thinking to
            measurable understanding and continuous growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
