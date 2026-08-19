import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import { BrainIcon, TrophyIcon, TrendUpIcon } from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const apps: {
  img: string;
  icon: IconType;
  color: string;
  title: string;
  desc: string;
  href: string;
}[] = [
  {
    img: "/images/card-brainiac.png",
    icon: BrainIcon,
    color: "#16a34a",
    title: "Brainiac Global",
    desc: "Research-driven cognitive assessment for kindergarten learners, focusing on foundational thinking and learning abilities.",
    href: "/initiatives/brain-booster-olympiad",
  },
  {
    img: "/images/card-olympiad.png",
    icon: TrophyIcon,
    color: "#1b3566",
    title: "Epoch International Olympiads",
    desc: "Research-based assessments for Classes 1–10 designed to evaluate conceptual understanding, reasoning and academic thinking.",
    href: "/initiatives/epoch-olympiad",
  },
  {
    img: "/images/ccbee-dashboard.webp",
    icon: TrendUpIcon,
    color: "#e8862e",
    title: "MY CCBee",
    desc: "A performance tracking and booster platform that helps convert assessment data into ongoing learner insights and improvement pathways.",
    href: "/initiatives/my-ccbee",
  },
];

export function ApplicationsVideo() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full grid-cols-1 gap-6 px-4 pb-12 sm:px-6 md:px-12 lg:grid-cols-2 lg:gap-8 lg:px-page lg:pb-16">
        {/* Applications */}
        <Reveal className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 lg:p-8">
          <h2 className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy lg:text-[15px]">
            Research Applications Across the Learning Journey
          </h2>

          <div className="mt-6 space-y-5">
            {apps.map((a) => {
              const Icon = a.icon;
              return (
                <a
                  key={a.title}
                  href={a.href}
                  className="flex gap-4 rounded-xl bg-white p-3 shadow-[0_1px_10px_rgba(15,28,63,0.05)] transition-shadow hover:shadow-[0_4px_16px_rgba(15,28,63,0.12)]"
                >
                  <img
                    src={a.img}
                    alt={a.title}
                    className="h-[86px] w-[116px] shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 shrink-0" style={{ color: a.color }} strokeWidth={1.7} />
                      <h3 className="text-[14px] font-bold text-navy lg:text-[15px]">
                        {a.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[12px] leading-snug text-slate-500 lg:text-[12.5px]">
                      {a.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <p className="mt-6 text-center font-serif text-[15px] font-medium text-navy lg:text-[17px]">
            One research philosophy. Three applications. One learner journey.
          </p>
        </Reveal>

        {/* Video */}
        <Reveal delay={120} className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
          <h2 className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy lg:text-[15px]">
            Why We Are Rethinking Assessment
          </h2>

          <a href="#" className="group relative mt-6 block overflow-hidden rounded-xl">
            <img
              src="/images/research-video.png"
              alt="From Rote Memory to True Intelligence"
              className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-[260px]"
            />
            <span className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/25 to-transparent" />
            <span className="absolute left-5 top-5 max-w-[55%] font-serif text-[22px] font-medium leading-tight text-white lg:text-[26px]">
              From Rote Memory to True Intelligence
            </span>
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy" fill="currentColor">
                <path d="M8 5l11 7-11 7z" />
              </svg>
            </span>
          </a>

          <p className="mt-5 text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
            A short introduction to why Epoch Olympiad Foundation believes the
            future of education must move beyond measuring memory toward
            understanding intelligence, reasoning and cognitive growth.
          </p>

          <div className="mt-5 flex items-center justify-between">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[14px]"
            >
              Watch Our Vision
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M8 5l11 7-11 7z" />
              </svg>
            </a>
            <span className="text-[12px] font-medium text-slate-400 lg:text-[13px]">
              2:05 min
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
