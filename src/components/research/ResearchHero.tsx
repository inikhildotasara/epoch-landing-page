import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  SearchIcon,
  EditIcon,
  AnalyticsIcon,
  TargetIcon,
  UserIcon,
  TrendUpIcon,
  SproutIcon,
} from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const nodes: {
  icon: IconType;
  title: string;
  desc: string;
  pos: string;
}[] = [
  {
    icon: SearchIcon,
    title: "Research",
    desc: "We explore and ask the right questions",
    pos: "top-[1%] left-1/2",
  },
  {
    icon: EditIcon,
    title: "Assess",
    desc: "We design age-appropriate assessments",
    pos: "top-[16%] left-[85%]",
  },
  {
    icon: AnalyticsIcon,
    title: "Analyse",
    desc: "We capture and analyze meaningful data",
    pos: "top-[45%] left-[90%]",
  },
  {
    icon: TargetIcon,
    title: "Diagnose",
    desc: "We identify strengths, gaps and growth opportunities",
    pos: "top-[74%] left-[85%]",
  },
  {
    icon: UserIcon,
    title: "Understand",
    desc: "We understand how each learner thinks and learns",
    pos: "top-[93%] left-1/2",
  },
  {
    icon: TrendUpIcon,
    title: "Improve",
    desc: "We turn insights into actionable guidance for educators",
    pos: "top-[74%] left-[15%]",
  },
  {
    icon: SproutIcon,
    title: "Grow",
    desc: "We empower every child to reach their true potential",
    pos: "top-[16%] left-[15%]",
  },
];

function Node({ icon: Icon, title, desc }: { icon: IconType; title: string; desc: string }) {
  return (
    <div className="flex w-[116px] flex-col items-center gap-1.5 text-center lg:w-[124px]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-navy/40 lg:h-14 lg:w-14">
        <Icon className="h-6 w-6 text-gold lg:h-7 lg:w-7" strokeWidth={1.6} />
      </div>
      <span className="text-[12px] font-semibold uppercase tracking-wide text-white lg:text-[13px]">
        {title}
      </span>
      <span className="text-[10.5px] leading-snug text-slate-400 lg:text-[11px]">
        {desc}
      </span>
    </div>
  );
}

export function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-navy" style={{ backgroundColor: "#0a1b3d" }}>
      {/* subtle radial glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 72% 45%, rgba(43,86,168,0.35) 0%, rgba(10,27,61,0) 60%)",
        }}
      />
      <div className="relative mx-auto grid w-full grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:px-12 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:px-24 lg:py-16 xl:px-36">
        {/* Left: copy */}
        <Reveal className="hero-anim">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-gold lg:text-[15px]">
            Research
          </p>
          <h1 className="mt-4 font-serif text-[30px] font-medium leading-[1.15] text-white sm:text-[38px] lg:text-[46px] xl:text-[52px]">
            Understanding How
            <br /> Children Think, Learn &amp; Grow.
          </h1>
          <span className="mt-5 block h-[3px] w-16 rounded-full bg-gold" />
          <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-slate-300 lg:text-[15.5px]">
            <p>
              At Epoch Olympiad Foundation, research is the foundation of
              everything we develop. We study how children understand, reason,
              solve problems, apply knowledge, and develop cognitive
              abilities—and translate those insights into meaningful assessment
              and learning frameworks.
            </p>
            <p>
              Our work brings together cognitive assessment, educational
              research, diagnostic analytics, international benchmarking, and
              technology to move education beyond measuring what a child
              remembers toward understanding how a child thinks.
            </p>
          </div>
        </Reveal>

        {/* Right: radial diagram (lg and up) */}
        <Reveal delay={120} className="hero-fade">
          <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block">
            <img
              src="/images/research-hero.png"
              alt="A child gazing at a glowing neural network brain"
              className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 object-contain"
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 48%, #000 58%, transparent 74%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 48%, #000 58%, transparent 74%)",
              }}
            />
            {nodes.map((n) => (
              <div
                key={n.title}
                className={`absolute -translate-x-1/2 -translate-y-1/2 ${n.pos}`}
              >
                <Node icon={n.icon} title={n.title} desc={n.desc} />
              </div>
            ))}
          </div>

          {/* Stacked layout (below lg) */}
          <div className="lg:hidden">
            <img
              src="/images/research-hero.png"
              alt="A child gazing at a glowing neural network brain"
              className="mx-auto w-full max-w-[420px] object-contain"
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 48%, #000 60%, transparent 76%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 48%, #000 60%, transparent 76%)",
              }}
            />
            <div className="mt-6 grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3">
              {nodes.map((n) => (
                <Node key={n.title} icon={n.icon} title={n.title} desc={n.desc} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
