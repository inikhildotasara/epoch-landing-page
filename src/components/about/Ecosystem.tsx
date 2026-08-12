import { Fragment } from "react";
import type { SVGProps } from "react";
import {
  LaurelGlobeIcon,
  TrophyPinIcon,
  BrainIcon,
  BarChartArrowIcon,
  ClipboardIcon,
} from "../icons";
import { Reveal } from "../Reveal";
import { SectionLabel } from "./SectionLabel";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const ORANGE = "#e8862e";

const nodes: {
  icon: IconType;
  title: string;
  sub: string;
  color: string;
}[] = [
  {
    icon: LaurelGlobeIcon,
    title: "Epoch Olympiad Foundation",
    sub: "Education Research Foundation",
    color: "#c79a3b",
  },
  {
    icon: TrophyPinIcon,
    title: "Epoch Olympiad",
    sub: "International Olympiads (Classes 1–10)",
    color: "#1b3566",
  },
  {
    icon: BrainIcon,
    title: "Brainiac Global",
    sub: "International Brain Booster Exams (Kindergarten)",
    color: "#2f9e5b",
  },
  {
    icon: BarChartArrowIcon,
    title: "MY CCBee",
    sub: "Performance Tracker & Booster Platform",
    color: ORANGE,
  },
];

function Box({
  icon: Icon,
  title,
  sub,
  color,
  className = "",
}: {
  icon: IconType;
  title: string;
  sub: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_2px_14px_rgba(15,28,63,0.06)] lg:px-6 lg:py-6 ${className}`}
    >
      <Icon
        className="h-11 w-11 shrink-0 lg:h-[52px] lg:w-[52px]"
        style={{ color }}
        strokeWidth={1.5}
      />
      <div>
        <h3 className="text-[14px] font-bold leading-snug text-navy lg:text-[16px]">
          {title}
        </h3>
        <p className="mt-1 text-[11.5px] leading-snug text-slate-500 lg:text-[12.5px]">
          {sub}
        </p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <span
      className="hidden shrink-0 items-center justify-center self-center px-1 text-[38px] font-bold leading-none xl:flex"
      style={{ color: ORANGE }}
    >
      &#8594;
    </span>
  );
}

const ahrProps = {
  icon: ClipboardIcon,
  title: "Academic Health Report",
  sub: "Data-driven insights for holistic academic growth and improvement",
  color: "#1b3566",
} as const;

export function Ecosystem() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-10 lg:py-16">
        <Reveal>
          <SectionLabel text="Our Ecosystem" />
        </Reveal>

        <Reveal delay={100} className="mt-10 lg:mt-14">
          <div className="flex flex-wrap items-stretch justify-center gap-3 xl:flex-nowrap xl:gap-3">
            {nodes.map((n, i) => (
              <Fragment key={n.title}>
                <Box
                  {...n}
                  className="w-full min-w-0 sm:w-[calc(50%-0.375rem)] xl:w-auto xl:flex-1"
                />
                {i < nodes.length - 1 && <Arrow />}
              </Fragment>
            ))}
          </div>

          {/* Desktop (xl): legs drop from the outer boxes (Foundation & MY CCBee) into the report */}
          <div className="hidden flex-col items-center xl:flex">
            <div
              className="h-24 w-[80%] rounded-b-[16px] border-x-2 border-b-2"
              style={{ borderColor: `${ORANGE}80` }}
            />
            <div className="-mt-[52px] w-[52%]">
              <Box {...ahrProps} className="h-[104px]" />
            </div>
          </div>

          {/* Below xl: simple stacked connector */}
          <div className="mt-3 flex flex-col items-center xl:hidden">
            <span
              className="h-6 w-[2px]"
              style={{ backgroundColor: `${ORANGE}80` }}
            />
            <Box {...ahrProps} className="w-full sm:w-[80%]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
