import { Fragment } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "./SectionLabel";

const ORANGE = "#e8862e";

const nodes: {
  logo: string;
  title: string;
  sub: string;
  href?: string;
}[] = [
  {
    logo: "/images/EPOCH research final.png",
    title: "Epoch Olympiad Foundation",
    sub: "Education Research Foundation",
  },
  {
    logo: "/images/BRAINIAC LOGO.png",
    title: "Brainiac Global",
    sub: "Building Thinking Minds from the Earliest Years",
    href: "/initiatives/brain-booster-olympiad",
  },
  {
    logo: "/images/EPOCH NAME LOGO - Copy.png",
    title: "Epoch Olympiad",
    sub: "International Olympiads & Future-Ready Learning Platforms",
    href: "/initiatives/epoch-olympiad",
  },
  {
    logo: "/images/MY CC BEE.png",
    title: "MY CCBee",
    sub: "Performance Tracking & Booster Platform for Schools",
    href: "/initiatives/my-ccbee",
  },
];

function Box({
  logo,
  title,
  sub,
  href,
  className = "",
}: {
  logo: string;
  title: string;
  sub: string;
  href?: string;
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
      <img
        src={logo}
        alt={title}
        className="h-20 w-[190px] shrink-0 object-contain object-left lg:h-[84px] lg:w-[210px] xl:h-16 xl:w-[clamp(90px,12vw,180px)]"
      />
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
        </Reveal>
      </div>
    </section>
  );
}
