import { Reveal } from "../Reveal";
import { CheckIcon, RankingIcon, StarIcon, TrophyIcon } from "../icons";

const NAVY = "#0b1c3f";
const BOOSTER_PURPLE = "#5b3fbf";

const leadershipPoints = [
  "Real-time visibility of student performance",
  "Monitor teacher performance and productivity",
  "Track school-wide activities and outcomes",
  "Make informed decisions with data insights",
  "Improve execution and school operations",
];

export function LeadershipAndBooster() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f7f8fc] p-5 sm:p-7 lg:p-7">
              <div className="flex items-center gap-2.5">
                <RankingIcon
                  className="h-6 w-6 shrink-0 text-navy"
                  strokeWidth={1.7}
                />
                <h2 className="font-serif text-[16px] font-semibold text-navy lg:text-[18px]">
                  For School Leadership
                </h2>
              </div>
              <ul className="mt-4 space-y-3 sm:columns-1">
                {leadershipPoints.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: NAVY }}
                      strokeWidth={2.4}
                    />
                    <span className="text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-[#fffaf4] p-5 sm:p-7 lg:p-7">
              <div className="flex items-center gap-2.5">
                <TrophyIcon
                  className="h-6 w-6 shrink-0"
                  style={{ color: BOOSTER_PURPLE }}
                  strokeWidth={1.7}
                />
                <h2 className="font-serif text-[16px] font-semibold text-navy lg:text-[18px]">
                  Performance Booster
                </h2>
              </div>

              <div className="mt-4 grid grid-cols-1 items-center gap-5 sm:grid-cols-[minmax(0,1fr)_150px] sm:gap-6 xl:grid-cols-[minmax(0,1fr)_140px]">
                <div>
                  <p className="text-[14px] font-bold leading-snug text-navy lg:text-[15px]">
                    Don&rsquo;t just track performance. Boost it.
                  </p>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                    Gamified tools and engaging activities motivate young
                    learners to participate, practice and perform better every
                    day.
                  </p>
                </div>

                {/* Stand-in for the in-app reward screen young learners see */}
                <div
                  className="mx-auto flex aspect-[4/3] w-full max-w-[200px] items-center justify-center rounded-xl border-[4px] border-[#1b2436] bg-gradient-to-br from-[#3aa7c9] to-[#2b7fa8] shadow-md sm:max-w-none"
                  aria-hidden
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] font-bold text-white">
                      Well Done!
                    </span>
                    <StarIcon
                      className="mt-1 h-10 w-10 text-gold"
                      strokeWidth={1.4}
                      fill="currentColor"
                    />
                    <span className="mt-1 rounded-full bg-white/85 px-2 py-0.5 text-[9px] font-semibold text-navy">
                      Level Up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
