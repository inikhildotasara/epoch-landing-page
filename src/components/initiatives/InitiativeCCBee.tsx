import { Reveal } from "../Reveal";
import { AchieversRail } from "./AchieversRail";
import { TrendUpIcon, TargetIcon, GrowthIcon, ArrowRight } from "../icons";

const ORANGE = "#e8862e";

const features = [
  {
    icon: TrendUpIcon,
    title: "Track",
    desc: "Monitor performance across assessments and domains.",
  },
  {
    icon: TargetIcon,
    title: "Understand",
    desc: "Identify strengths, learning gaps and patterns.",
  },
  {
    icon: GrowthIcon,
    title: "Improve",
    desc: "Provide targeted insights and booster resources.",
  },
];

function GrowthGraphic() {
  return (
    <div className="flex h-28 w-full items-end justify-center gap-2 rounded-xl bg-[#fdf1e5] px-4 py-3">
      <svg viewBox="0 0 160 90" className="h-full w-full" fill="none">
        <g>
          <rect x="14" y="56" width="20" height="28" rx="3" fill="#7cbf8e" />
          <rect x="46" y="44" width="20" height="40" rx="3" fill="#6fb98a" />
          <rect x="78" y="30" width="20" height="54" rx="3" fill="#5fb185" />
          <rect x="110" y="14" width="20" height="70" rx="3" fill="#e8862e" />
        </g>
        <path
          d="M14 58 L56 46 L88 32 L136 12"
          stroke="#e8862e"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m136 4 2.2 4.5 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7z"
          fill="#e8862e"
        />
      </svg>
    </div>
  );
}

export function InitiativeCCBee() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-6 lg:py-8">
        <Reveal className="rounded-2xl border border-slate-200 bg-[#fffaf4] p-5 sm:p-7 lg:p-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)_180px] lg:gap-8">
            {/* Tablet mock + number */}
            <div className="relative">
              <span
                className="pointer-events-none absolute -top-2 left-1 font-serif text-[54px] font-bold leading-none lg:text-[64px]"
                style={{ color: ORANGE, opacity: 0.28 }}
              >
                03
              </span>
              <div
                className="mt-6 flex items-center justify-center rounded-2xl p-4"
                style={{ backgroundColor: "#fbeedd" }}
              >
                <div className="w-full rounded-xl border-[5px] border-[#1b2436] bg-[#1b2436] shadow-lg">
                  <img
                    src="/images/card-ccbee.png"
                    alt="MY CCBee analytics dashboard"
                    className="w-full rounded-md object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main content */}
            <div>
              <h3
                className="font-serif text-[26px] font-semibold lg:text-[30px]"
                style={{ color: ORANGE }}
              >
                MY CCBee
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-navy lg:text-[16px]">
                From Assessment Data to Continuous Improvement
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                MY CCBee is a performance tracking and booster platform that helps
                schools and educators convert assessment data into actionable
                insights and ensure continuous academic growth.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <Icon
                        className="h-7 w-7"
                        style={{ color: ORANGE }}
                        strokeWidth={1.7}
                      />
                      <h5 className="mt-3 text-[14px] font-bold text-navy">
                        {f.title}
                      </h5>
                      <p className="mt-1 text-[12px] leading-snug text-slate-500 lg:text-[12.5px]">
                        {f.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ORANGE }}
              >
                Explore Platform <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Achievers + FAQ rail */}
            <AchieversRail accent={ORANGE} gallery={<GrowthGraphic />} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
