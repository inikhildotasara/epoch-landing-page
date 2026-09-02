import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  BrainIcon,
  TrendUpIcon,
  BulbIcon,
  GlobeIcon,
  PuzzleIcon,
  StarIcon,
} from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const orbit: {
  icon: IconType;
  label: string;
  pos: string;
}[] = [
  { icon: BrainIcon, label: "Think", pos: "top-[4%] left-[10%]" },
  { icon: TrendUpIcon, label: "Grow", pos: "top-[4%] right-[10%]" },
  { icon: BulbIcon, label: "Explore", pos: "top-[40%] left-[-2%]" },
  { icon: GlobeIcon, label: "Excel", pos: "top-[40%] right-[-2%]" },
  { icon: PuzzleIcon, label: "Solve", pos: "bottom-[6%] left-[8%]" },
  { icon: StarIcon, label: "Lead", pos: "bottom-[6%] right-[8%]" },
];

function OrbitIcon({ icon: Icon, label }: { icon: IconType; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <Icon className="h-10 w-10 lg:h-12 lg:w-12 text-navy" strokeWidth={1.4} />
      <span className="text-[12px] lg:text-[14px] font-semibold text-navy">
        {label}
      </span>
    </div>
  );
}

export function AboutHero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 55%, #ffffff 100%), linear-gradient(90deg, #d7cdb5 0%, rgba(215,205,181,0) 30%, rgba(215,205,181,0) 70%, #d7cdb5 100%), linear-gradient(180deg, #ece6d9 0%, #f8f6f0 55%, #fdfcf9 100%)",
      }}
    >
      <div className="mx-auto grid w-full grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.12fr_0.88fr] md:px-12 lg:gap-8 lg:px-24 lg:py-16 xl:px-36">
        <Reveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-gold-dark lg:text-[15px]">
            About the Foundation
          </p>
          <h1 className="mt-4 font-serif text-[28px] font-medium leading-[1.18] text-navy sm:text-[34px] lg:text-[38px] xl:text-[42px]">
            Building a future where
            <br className="hidden sm:block" /> every child is measured by
            <br className="hidden sm:block" /> intelligence, not just memory
            &amp; marks.
          </h1>
          <span className="mt-5 block h-[3px] w-14 rounded-full bg-gold" />
          <div className="mt-5 space-y-3.5 text-[13.5px] leading-relaxed text-slate-600 lg:mt-6 lg:text-[15px]">
            <p>
              Epoch Olympiad Foundation is an independent education research
              foundation working to transform how children&apos;s thinking,
              learning and cognitive development are understood, assessed and
              nurtured.
            </p>
            <p>
              We believe that true education goes far beyond memorization—it
              develops curiosity, reasoning, creativity, and the ability to
              think independently.
            </p>
            <p>
              Through research-driven assessment frameworks, cognitive
              diagnostics, international benchmarking, and educational
              innovation, we are working toward a future where every learner is
              empowered to achieve their true intellectual potential.
            </p>
          </div>
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2.5 rounded-lg border-2 border-navy/30 bg-navy px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_0_0_3px_rgba(20,41,77,0.08)] transition-colors hover:bg-navy-600 sm:px-5 sm:py-3 sm:text-[13px]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-navy">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M8 5l11 7-11 7z" />
              </svg>
            </span>
            Watch Our Vision
          </button>
        </Reveal>

        <Reveal delay={120}>
          {/* Orbit layout (md and up) */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
            {/* soft golden glow */}
            <div
              className="absolute left-1/2 top-[46%] h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(233,190,110,0.35) 0%, rgba(233,190,110,0.12) 52%, rgba(233,190,110,0) 70%)",
              }}
            />
            {/* golden ring */}
            <div
              className="absolute left-1/2 top-[46%] h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                boxShadow:
                  "0 0 0 2.5px rgba(212,164,74,0.9), 0 0 34px 6px rgba(233,190,110,0.65), inset 0 0 24px rgba(233,190,110,0.25)",
              }}
            />
            <img
              src="/images/about-hero.png"
              alt="A learner imagining their journey toward intelligence"
              className="absolute bottom-0 left-1/2 h-[95%] w-auto -translate-x-1/2 object-contain"
            />
            {orbit.map((o) => (
              <div key={o.label} className={`absolute ${o.pos}`}>
                <OrbitIcon icon={o.icon} label={o.label} />
              </div>
            ))}
          </div>

          {/* Stacked layout (mobile) */}
          <div className="md:hidden">
            <div className="relative mx-auto w-[78%] max-w-[320px]">
              <div
                className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  boxShadow:
                    "0 0 0 2px rgba(214,168,80,0.8), 0 0 24px 4px rgba(226,180,96,0.5)",
                }}
              />
              <img
                src="/images/about-hero.png"
                alt="A learner imagining their journey toward intelligence"
                className="relative w-full object-contain"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {orbit.map((o) => (
                <OrbitIcon key={o.label} icon={o.icon} label={o.label} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
