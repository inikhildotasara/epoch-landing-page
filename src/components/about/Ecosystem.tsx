import { Fragment } from "react";
import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "./SectionLabel";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const ORANGE = "#e8862e";

const nodes: {
  logo: string;
  title: string;
  sub: string;
  color: string;
  href?: string;
}[] = [
  {
    logo: "/images/epoch-research-foundation.png",
    title: "Epoch Olympiad Foundation",
    sub: "Education Research Foundation",
    color: "#c79a3b",
  },
  {
    logo: "/images/BRAINIAC LOGO.png",
    title: "Brainiac Global",
    sub: "International Brain Booster Exams (Kindergarten)",
    color: "#2f9e5b",
    href: "/initiatives/brain-booster-olympiad",
  },
  {
    logo: "/images/EPOCH NAME LOGO - Copy.png",
    title: "Epoch Olympiad",
    sub: "International Olympiads (Classes 1–10)",
    color: "#1b3566",
    href: "/initiatives/epoch-olympiad",
  },
  {
    logo: "/images/MY CC BEE.png",
    title: "MY CCBee",
    sub: "Performance Tracker & Booster Platform",
    color: ORANGE,
    href: "/initiatives/my-ccbee",
  },
];

function Box({
  logo,
  icon: Icon,
  title,
  sub,
  color,
  href,
  imageClassName,
  className = "",
}: {
  logo?: string;
  icon?: IconType;
  title: string;
  sub: string;
  color: string;
  href?: string;
  imageClassName?: string;
  className?: string;
}) {
  /* The Foundation node has no page of its own, so it stays a plain box. */
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      className={`flex min-w-0 items-center gap-5 rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_2px_14px_rgba(15,28,63,0.06)] transition-shadow lg:px-6 lg:py-6 xl:gap-3 xl:px-3 xl:py-3 ${
        href ? "hover:shadow-[0_6px_22px_rgba(15,28,63,0.13)]" : ""
      } ${className}`}
    >
      {logo ? (
        <img
          src={logo}
          alt={title}
          className={
            imageClassName ??
            "h-20 w-[190px] shrink-0 object-contain object-left lg:h-[84px] lg:w-[210px] xl:h-16 xl:w-[clamp(90px,12vw,180px)]"
          }
        />
      ) : (
        Icon && (
          <Icon
            className="h-11 w-11 shrink-0 lg:h-[52px] lg:w-[52px]"
            style={{ color }}
            strokeWidth={1.5}
          />
        )
      )}
      <div className="min-w-0">
        <p className="break-words text-[14px] font-semibold leading-snug text-slate-600 lg:text-[15px]">
          {sub}
        </p>
      </div>
    </Tag>
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
  logo: "/images/ahr-tablet.webp",
  imageClassName:
    "h-28 w-[92px] shrink-0 object-contain object-center lg:h-[132px] lg:w-[108px]",
  title: "Academic Health Report",
  sub: "Data-driven insights for holistic academic growth and improvement",
  color: "#1b3566",
  href: "/academic-health-report",
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
              <Box {...ahrProps} className="h-[150px]" />
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
