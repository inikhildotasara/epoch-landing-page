import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../about/SectionLabel";
import {
  ClipboardIcon,
  RankingIcon,
  AnalyticsIcon,
  DocIcon,
  HeadIdeaIcon,
  PuzzleIcon,
  TargetIcon,
  TrendUpIcon,
  TrophyIcon,
} from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const traditional: { icon: IconType; label: string }[] = [
  { icon: ClipboardIcon, label: "How many answers were correct?" },
  { icon: RankingIcon, label: "What is the rank?" },
  { icon: AnalyticsIcon, label: "How did the child perform?" },
  { icon: DocIcon, label: "Result" },
];

const epoch: { icon: IconType; label: string }[] = [
  { icon: HeadIdeaIcon, label: "How does the child reason?" },
  { icon: PuzzleIcon, label: "How does the child approach problems?" },
  { icon: TargetIcon, label: "Where are the cognitive strengths?" },
  { icon: TrendUpIcon, label: "Where are the growth opportunities?" },
  { icon: TrophyIcon, label: "How can we help the child progress?" },
];

function Flow({
  items,
  variant,
}: {
  items: { icon: IconType; label: string }[];
  variant: "muted" | "gold";
}) {
  const circle =
    variant === "gold"
      ? "border-gold/40 bg-gold/10 text-gold-dark"
      : "border-slate-200 bg-white text-slate-400";
  const arrow = variant === "gold" ? "text-gold-dark/70" : "text-slate-400";
  return (
    <div className="mt-6 flex flex-wrap items-start justify-center gap-x-1 gap-y-4">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <div key={it.label} className="flex items-start gap-1">
            <div className="flex w-[74px] flex-col items-center gap-2 text-center lg:w-[86px]">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full border lg:h-14 lg:w-14 ${circle}`}>
                <Icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.6} />
              </div>
              <span className="text-[10.5px] leading-snug text-slate-600 lg:text-[11.5px]">
                {it.label}
              </span>
            </div>
            {i < items.length - 1 && (
              <span className={`mt-[16px] shrink-0 text-lg lg:mt-[20px] ${arrow}`}>
                &#8594;
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function PerformancePotential() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 py-12 lg:py-16">
        <Reveal>
          <SectionLabel text="From Measuring Performance to Understanding Potential" />
        </Reveal>

        <Reveal delay={100} className="relative mt-10 lg:mt-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Traditional */}
            <div className="rounded-2xl bg-slate-50 px-6 py-8 lg:px-8 lg:py-10">
              <div className="flex justify-center">
                <span className="rounded-full bg-navy px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white lg:text-[13px]">
                  Traditional Assessment
                </span>
              </div>
              <p className="mt-5 text-center font-serif text-[17px] font-medium text-navy lg:text-[19px]">
                What did the child score?
              </p>
              <Flow items={traditional} variant="muted" />
            </div>

            {/* Epoch */}
            <div className="rounded-2xl bg-[#fdf6e7] px-6 py-8 lg:px-8 lg:py-10">
              <div className="flex justify-center">
                <span className="rounded-full bg-gold px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy lg:text-[13px]">
                  Epoch Research Approach
                </span>
              </div>
              <p className="mt-5 text-center font-serif text-[17px] font-medium text-navy lg:text-[19px]">
                What does the child understand?
              </p>
              <Flow items={epoch} variant="gold" />
            </div>
          </div>

          {/* VS badge */}
          <div className="absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-[13px] font-bold text-white ring-4 ring-white lg:flex lg:h-12 lg:w-12">
            VS
          </div>
        </Reveal>
      </div>
    </section>
  );
}
