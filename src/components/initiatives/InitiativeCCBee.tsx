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
    <div className="flex h-full w-full items-end justify-center gap-2 rounded-xl bg-[#fdf1e5] px-4 py-3">
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
        <Reveal className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fffaf4] p-5 sm:p-7 lg:p-9">
          {/* At 1024 three columns leave the copy too narrow, so the rail tucks in
              under the tablet as a left sidebar until there is room for it beside. */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-7 lg:gap-y-7 xl:grid-cols-[1.5fr_3.2fr_minmax(212px,1fr)] xl:grid-rows-none xl:gap-8">
            {/* Tinted panel — bleeds into the card padding so it sits flush with the
                card edges, and fills the whole card height from xl up */}
            <div
              className="relative -mx-5 -mt-5 flex items-center justify-center p-6 pt-12 sm:-mx-7 sm:-mt-7 lg:mx-0 lg:-ml-9 lg:-mt-9 lg:col-start-1 lg:row-start-1 lg:p-7 lg:pt-14 xl:-mb-9"
              style={{ backgroundColor: "#fbeedd" }}
            >
              <span
                className="pointer-events-none absolute left-3 top-1 font-serif text-[54px] font-bold leading-none lg:text-[64px]"
                style={{ color: ORANGE, opacity: 0.35 }}
              >
                03
              </span>
              <div className="w-full rounded-xl border-[5px] border-[#1b2436] bg-[#1b2436] shadow-lg">
                <img
                  src="/images/ccbee-dashboard.webp"
                  alt="MY CCBee analytics dashboard"
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 xl:row-span-1">
              <h3
                className="font-serif text-[26px] font-semibold lg:text-[30px]"
                style={{ color: ORANGE }}
              >
                MY CCBee
              </h3>
              <p
                className="mt-1 font-serif text-[15px] font-semibold lg:text-[16px]"
                style={{ color: ORANGE }}
              >
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
                      className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <Icon
                        className="h-7 w-7 shrink-0"
                        style={{ color: ORANGE }}
                        strokeWidth={1.7}
                      />
                      <div>
                        <h5
                          className="text-[14px] font-bold"
                          style={{ color: ORANGE }}
                        >
                          {f.title}
                        </h5>
                        <p className="mt-1 text-[12px] leading-snug text-slate-500 lg:text-[12.5px]">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/initiatives/my-ccbee"
                className="mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ORANGE }}
              >
                Explore Platform <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Achievers + FAQ rail */}
            <AchieversRail
              accent={ORANGE}
              faqHref="/initiatives/my-ccbee#faq"
              className="lg:col-start-1 lg:row-start-2 lg:self-start xl:col-start-3 xl:row-start-1 xl:self-stretch xl:justify-between xl:border-l xl:border-slate-200 xl:pl-6"
              gallery={<GrowthGraphic />}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
