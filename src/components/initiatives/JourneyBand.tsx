import { Reveal } from "../Reveal";
import { BulbIcon, ClipboardIcon, DocIcon, TrendUpIcon } from "../icons";

const steps = [
  { num: "01", icon: BulbIcon, title: "Discover", desc: "Spark curiosity and thinking" },
  {
    num: "02",
    icon: ClipboardIcon,
    title: "Assess",
    desc: "Evaluate abilities with research-driven assessments",
  },
  {
    num: "03",
    icon: DocIcon,
    title: "Understand",
    desc: "Gain meaningful insights with diagnostic reports",
  },
  {
    num: "04",
    icon: TrendUpIcon,
    title: "Improve",
    desc: "Track progress and nurture growth",
  },
];

function StepCard({
  step,
  stacked = false,
}: {
  step: (typeof steps)[number];
  stacked?: boolean;
}) {
  const Icon = step.icon;
  return (
    <div
      className={
        stacked
          ? "flex min-w-0 flex-col items-center text-center"
          : "flex min-w-0 items-start gap-4"
      }
    >
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5">
        <Icon className="h-7 w-7 text-white" strokeWidth={1.6} />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
          {step.num.replace(/^0/, "")}
        </span>
      </span>
      <div className={stacked ? "mt-3" : undefined}>
        <h3 className="text-[16px] font-bold text-white lg:text-[17px]">
          {step.title}
        </h3>
        <p
          className={`mt-0.5 text-[12px] leading-snug text-slate-300 lg:text-[12.5px] ${
            stacked ? "max-w-[11.5rem]" : ""
          }`}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

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
      className={`h-6 w-6 shrink-0 text-gold ${
        direction === "down" ? "rotate-90" : ""
      } ${className}`}
    >
      <path
        d="M4 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function JourneyBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pt-6 pb-4 lg:pt-10 lg:pb-8 xl:pt-12">
        <Reveal className="rounded-2xl bg-navy px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          {/* Phone: one column so the path is always 1 ↓ 2 ↓ 3 ↓ 4 */}
          <ol className="flex flex-col gap-4 sm:hidden">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-stretch gap-3">
                <StepCard step={s} />
                {i < steps.length - 1 && (
                  <Arrow direction="down" className="self-center" />
                )}
              </li>
            ))}
          </ol>

          {/* Tablet: 2×2 in reading order. Numbers carry the sequence here —
              arrows wrap poorly in this range, so they stay off until lg. */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 lg:hidden">
            {steps.map((s) => (
              <StepCard key={s.title} step={s} />
            ))}
          </div>

          {/* Desktop: four compact nodes in one row, connectors at icon height */}
          <ol className="hidden lg:flex lg:items-start">
            {steps.map((s, i) => (
              <li key={s.title} className="flex min-w-0 flex-1 items-start">
                <div className="min-w-0 flex-1">
                  <StepCard step={s} stacked />
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="mt-[18px] flex h-14 w-10 shrink-0 items-center xl:w-14"
                    aria-hidden
                  >
                    <span className="mr-0.5 hidden h-px flex-1 border-t border-dashed border-gold/45 xl:block" />
                    <Arrow direction="right" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
