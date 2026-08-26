import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  ArrowRight,
  BulbIcon,
  CheckIcon,
  ChildFaceIcon,
  FlaskIcon,
  SproutIcon,
  TrophyIcon,
} from "../icons";

const PURPLE = "#6d4aa7";
const ORANGE = "#e8862e";
const TEAL = "#0f9c9a";

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

const outcomes = [
  "Develop thinking and reasoning abilities",
  "Strengthen problem-solving skills",
  "Improve observation and pattern recognition",
  "Encourage independent thinking",
  "Build confidence through meaningful challenges",
  "Receive recognition and motivation",
];

const platforms: {
  code: string;
  logo: string;
  color: string;
  name: string;
  tagline: string;
  copy: string;
  button: string;
}[] = [
  {
    code: "IHOST",
    logo: "/images/exam-icons/IHOST.png",
    color: TEAL,
    name: "International Holistic Olympiad for Smart Thinkers",
    tagline: "Think • Explore • Discover • Excel",
    copy: "A holistic learning platform that builds curiosity, reasoning and problem-solving by connecting Mathematics, Science, Language, Aptitude and General Knowledge with meaningful, engaging learning experiences.",
    button: "Explore IHOST",
  },
  {
    code: "IFLY",
    logo: "/images/exam-icons/IFLY.png",
    color: ORANGE,
    name: "International Finance & Digital Literacy Olympiad for Young Leaders",
    tagline: "Understanding Money & Digital World.",
    copy: "A future-focused learning platform that helps children understand money, make responsible choices and navigate the digital world with awareness, confidence and safety.",
    button: "Explore IFLY",
  },
];

function GroupBanner({
  letter,
  color,
  title,
  subtitle,
}: {
  letter: string;
  color: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-center gap-3.5 sm:gap-4">
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-[18px] font-bold text-white shadow-[0_8px_18px_-10px_rgba(11,28,63,0.55)] lg:h-12 lg:w-12 lg:text-[20px]"
        style={{ backgroundColor: color }}
      >
        {letter}
      </span>
      <div>
        <h3 className="font-serif text-[18px] font-semibold leading-tight text-navy sm:text-[20px] lg:text-[24px]">
          {title}
        </h3>
        {subtitle ? (
          <p
            className="mt-0.5 text-[12px] font-semibold tracking-[0.06em] lg:text-[13px]"
            style={{ color }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
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

function PlatformWordmark({ code }: { code: string }) {
  if (code === "IFLY") {
    return (
      <p className="font-serif text-[34px] font-bold leading-none tracking-tight lg:text-[38px]">
        <span className="text-[#11a6a4]">i</span>
        <span style={{ color: ORANGE }}>F</span>
        <span className="text-navy">L</span>
        <span className="text-[#11a6a4]">Y</span>
      </p>
    );
  }

  return (
    <p
      className="font-serif text-[34px] font-bold leading-none tracking-tight lg:text-[38px]"
      style={{ color: TEAL }}
    >
      IHOST
    </p>
  );
}

export function BrainiacEcosystem() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal>
          <SectionHeading>Explore the Brainiac Global Ecosystem</SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[13px] leading-relaxed text-slate-600 lg:text-[14.5px]">
            Assessment and learning platforms are both important parts of the
            Brainiac Global Ecosystem.
          </p>
        </Reveal>

        <div className="mt-8 space-y-7 lg:mt-10 lg:space-y-8">
          {/* A. International Olympiad — content, image and outcomes unchanged */}
          <Reveal className="rounded-2xl border border-[#6d4aa7]/20 bg-[#f6f2fb] px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <GroupBanner
              letter="A"
              color={PURPLE}
              title="International Olympiad"
              subtitle="(Cognitive Assessment)"
            />

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 lg:mt-6 lg:p-6">
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
                    Building thinking minds from the earliest years
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
          </Reveal>

          {/* B. Future-Focused Learning Platforms */}
          <Reveal className="rounded-2xl border border-[#e8862e]/20 bg-[#fdf6ee] px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <GroupBanner
              letter="B"
              color={ORANGE}
              title="Future-Focused Learning Platforms"
            />

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-6 lg:gap-5">
              {platforms.map((p) => (
                  <article
                    key={p.code}
                    className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 lg:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <img
                        src={p.logo}
                        alt={`${p.code} logo`}
                        className="h-20 w-20 shrink-0 object-contain"
                      />
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white"
                        style={{ backgroundColor: p.color }}
                      >
                        Coming Soon
                      </span>
                    </div>

                    <div className="mt-4">
                      <PlatformWordmark code={p.code} />
                      <h4 className="mt-3 font-serif text-[15px] font-semibold leading-snug text-navy lg:text-[17px]">
                        {p.name}
                      </h4>
                      <p
                        className="mt-2 font-serif text-[13px] font-semibold leading-snug lg:text-[14px]"
                        style={{ color: p.color }}
                      >
                        {p.tagline}
                      </p>
                      <p className="mt-3 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                        {p.copy}
                      </p>
                    </div>

                    <div className="mt-6 lg:mt-auto lg:pt-6">
                      <a
                        href="#faq"
                        className="inline-flex w-fit items-center gap-2 rounded-md px-5 py-2.5 text-[12.5px] font-semibold text-white transition-opacity hover:opacity-90 lg:text-[13px]"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.button} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
