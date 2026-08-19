import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  ArrowRight,
  BulbIcon,
  CheckIcon,
  ChildFaceIcon,
  ChipIcon,
  CoinsIcon,
  CompassIcon,
  FlaskIcon,
  HeadBulbIcon,
  SproutIcon,
  TrophyIcon,
} from "../icons";

const PURPLE = "#6d4aa7";
const ORANGE = "#e8862e";

const EXAM_HREF =
  "/initiatives/brain-booster-olympiad/international-brain-booster-olympiad";

type Badge = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  label: [string, string];
};

const examBadges: Badge[] = [
  { icon: FlaskIcon, color: "#6d4aa7", label: ["Research", "Informed"] },
  { icon: SproutIcon, color: "#16a34a", label: ["Age", "Appropriate"] },
  { icon: ChildFaceIcon, color: "#e0407f", label: ["Child", "Friendly"] },
  { icon: BulbIcon, color: "#e8a013", label: ["Insight", "Oriented"] },
  { icon: TrophyIcon, color: "#0f9c9a", label: ["Awards, Prizes", "& Scholarship"] },
];

const flyBadges: Badge[] = [
  { icon: CoinsIcon, color: "#6d4aa7", label: ["Early Financial", "Awareness"] },
  { icon: ChipIcon, color: "#6d4aa7", label: ["Digital", "Awareness"] },
  { icon: CompassIcon, color: "#6d4aa7", label: ["Smart", "Choices"] },
  { icon: HeadBulbIcon, color: "#6d4aa7", label: ["Future Ready", "Thinking"] },
];

const outcomes = [
  "Develop thinking and reasoning abilities",
  "Strengthen problem-solving skills",
  "Improve observation and pattern recognition",
  "Encourage independent thinking",
  "Build confidence through meaningful challenges",
  "Receive recognition and motivation",
];

function GroupPill({ color, children }: { color: string; children: string }) {
  return (
    <p
      className="mx-auto w-fit rounded-full px-5 py-1.5 text-center text-[10.5px] font-semibold text-white lg:text-[11px]"
      style={{ backgroundColor: color }}
    >
      {children}
    </p>
  );
}

function BadgeRow({ badges, cols }: { badges: Badge[]; cols: string }) {
  return (
    <div className={`grid grid-cols-2 gap-y-5 lg:gap-y-0 ${cols}`}>
      {badges.map((b, i) => {
        const Icon = b.icon;
        return (
          <div
            key={b.label.join(" ")}
            className={`flex flex-col items-center px-2 text-center ${
              i > 0 ? "sm:border-l sm:border-slate-200" : ""
            }`}
          >
            <Icon
              className="h-7 w-7"
              style={{ color: b.color }}
              strokeWidth={1.6}
            />
            <p
              className="mt-2 text-[11px] font-semibold leading-snug lg:text-[11.5px]"
              style={{ color: b.color }}
            >
              {b.label[0]}
              <br />
              {b.label[1]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function BrainiacEcosystem() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-[#fbfaff] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <SectionHeading>Explore the Brainiac Global Ecosystem</SectionHeading>

          {/* The two groups sit side by side only from xl, so the assessment card
              keeps enough width for its photo, badge row and outcome list. */}
          <div className="mt-7 grid grid-cols-1 gap-7 lg:mt-9 xl:grid-cols-[1.75fr_1fr] xl:gap-6">
            {/* A. International Olympiad */}
            <div>
              <GroupPill color={PURPLE}>
                A. International Olympiad (Assessment)
              </GroupPill>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 lg:mt-5 lg:p-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-[220px_minmax(0,1fr)] lg:gap-6">
                  <img
                    src="/images/init-brainiac.png"
                    alt="A young learner working on a Brain Booster activity"
                    className="aspect-[4/3] w-full rounded-xl object-cover object-[56%_50%]"
                  />

                  <div>
                    <h3 className="font-serif text-[18px] font-semibold leading-snug text-navy lg:text-[21px]">
                      International Brain Booster Olympiad
                    </h3>
                    <p
                      className="mt-1.5 font-serif text-[14px] font-semibold lg:text-[15px]"
                      style={{ color: ORANGE }}
                    >
                      Discovering New Einstein
                    </p>
                    <p className="mt-3 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                      A joyful, age-appropriate cognitive assessment designed to
                      understand how young learners observe, recognise patterns,
                      connect ideas, reason and explore simple problems.
                    </p>
                  </div>
                </div>

                <div className="mt-6 lg:mt-7">
                  <BadgeRow badges={examBadges} cols="sm:grid-cols-5" />
                </div>

                <div className="mt-6 rounded-xl bg-[#fdf4ec] p-4 lg:p-5">
                  <p className="text-[12px] font-semibold text-navy lg:text-[12.5px]">
                    This olympiad helps children to:
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {outcomes.map((o) => (
                      <li key={o} className="flex gap-2.5">
                        <span className="mt-px flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#16a34a]">
                          <CheckIcon className="h-[11px] w-[11px] text-white" />
                        </span>
                        <span className="text-[12px] leading-snug text-slate-600 lg:text-[12.5px]">
                          {o}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={EXAM_HREF}
                  className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-md px-6 py-2.5 text-[12.5px] font-semibold text-white transition-opacity hover:opacity-90 lg:text-[13px]"
                  style={{ backgroundColor: PURPLE }}
                >
                  Explore More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* B. Future-Focused Learning Platforms */}
            <div>
              <GroupPill color={ORANGE}>
                B. Future-Focused Learning Platforms (Learning)
              </GroupPill>

              <div className="mt-4 flex h-[calc(100%-2.75rem)] flex-col rounded-2xl border border-slate-200 bg-white p-5 lg:mt-5 lg:p-6">
                {/* Wordmark is set in type — the artwork colours each letter group */}
                <p className="font-serif text-[34px] font-bold leading-none tracking-tight lg:text-[38px]">
                  <span className="text-[#11a6a4]">i</span>
                  <span style={{ color: ORANGE }}>F</span>
                  <span className="text-navy">L</span>
                  <span className="text-[#11a6a4]">Y</span>
                </p>
                <p className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-slate-500 lg:text-[10px]">
                  Shape. Lead. Tomorrow.
                </p>

                <h3
                  className="mt-4 font-serif text-[17px] font-semibold leading-snug lg:text-[19px]"
                  style={{ color: ORANGE }}
                >
                  International Finance &amp; Digital Literacy Olympiad for Young
                  Leaders
                </h3>
                <p className="mt-3 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                  Introducing young learners to the world of money, digital
                  choices and responsible decision-making in a fun and engaging
                  way.
                </p>

                <div className="mt-6">
                  <BadgeRow badges={flyBadges} cols="sm:grid-cols-4" />
                </div>

                <div className="mt-6 flex flex-col items-center gap-4 rounded-xl border border-dashed border-gold px-4 py-4 sm:flex-row sm:justify-between lg:mt-auto">
                  <span
                    className="whitespace-nowrap rounded-md px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.02em] text-white lg:text-[14px]"
                    style={{ backgroundColor: "#f28123" }}
                  >
                    Coming Soon
                  </span>
                  <Link
                    href="/initiatives/epoch-olympiad"
                    className="text-center text-[12.5px] font-semibold text-navy transition-colors hover:text-gold-dark lg:text-[13px]"
                  >
                    More learning platforms
                    <br />
                    <span className="inline-flex items-center gap-1.5">
                      Click here <ArrowRight className="h-3.5 w-3.5 text-gold-dark" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
