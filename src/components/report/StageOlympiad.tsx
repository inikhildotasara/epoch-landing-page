import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  OpenBookIcon,
  PuzzleIcon,
  BulbIcon,
  ChipIcon,
  SearchIcon,
  ClipboardIcon,
  FlaskIcon,
  SeedlingIcon,
} from "../icons";
import {
  Panel,
  AnimatedNumber,
  ScoreTile,
  MeterBar,
  BenchmarkTable,
  InsightList,
  StageShell,
  type BenchRow,
  type IconType,
} from "./ui";

const ACCENT = "#1b4f9c";

const iconBase = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

const BoltIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase(p)}>
    <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />
  </svg>
);

const GemIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase(p)}>
    <path d="M6 3h12l3 6-9 12L3 9l3-6Z" />
    <path d="M3 9h18M9 3l-3 6 6 12 6-12-3-6" />
  </svg>
);

const LeafIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase(p)}>
    <path d="M4 20c8 1 15-4 16-16-7 0-13 2-15 7-1.2 3 .3 6-1 9Z" />
    <path d="M4 20c2-5 5-8 9-10" />
  </svg>
);

const snapshot: { label: string; value: number; color: string; icon: IconType }[] =
  [
    {
      label: "Conceptual Understanding",
      value: 82,
      color: "#1a7a4c",
      icon: OpenBookIcon,
    },
    { label: "Logical Reasoning", value: 76, color: "#e8862e", icon: PuzzleIcon },
    { label: "Problem Solving", value: 84, color: "#2b6fd1", icon: BulbIcon },
    {
      label: "Visual-Spatial Thinking",
      value: 88,
      color: "#7a52c7",
      icon: ChipIcon,
    },
    { label: "Analytical Thinking", value: 73, color: "#0f9b8e", icon: SearchIcon },
    {
      label: "Knowledge Application",
      value: 79,
      color: "#d9455f",
      icon: ClipboardIcon,
    },
  ];

const recall = [
  {
    label: "Recall performance",
    value: 78,
    color: "#e8b53c",
    caption: "What was remembered",
  },
  {
    label: "Conceptual understanding",
    value: 86,
    color: "#4a9b3f",
    caption: "What was genuinely understood",
  },
  {
    label: "Application performance",
    value: 82,
    color: "#2b6fd1",
    caption: "What could be used in a new situation",
  },
];

const nutrition: {
  subject: string;
  nutrient: string;
  value: number;
  color: string;
  icon: IconType;
}[] = [
  {
    subject: "Mathematics",
    nutrient: "Energy",
    value: 84,
    color: "#e8a020",
    icon: BoltIcon,
  },
  {
    subject: "Science",
    nutrient: "Protein",
    value: 78,
    color: "#2b8fd1",
    icon: FlaskIcon,
  },
  {
    subject: "Aptitude",
    nutrient: "Minerals",
    value: 81,
    color: "#7a52c7",
    icon: GemIcon,
  },
  {
    subject: "G.K.",
    nutrient: "Vitamins",
    value: 75,
    color: "#4a9b3f",
    icon: LeafIcon,
  },
];

const matrix: BenchRow[] = [
  {
    dimension: "Conceptual Understanding",
    score: 86,
    school: 75,
    national: 72,
    international: 68,
    status: "STRENGTH",
  },
  {
    dimension: "Logical Reasoning",
    score: 79,
    school: 74,
    national: 70,
    international: 65,
    status: "STRONG",
  },
  {
    dimension: "Problem Solving",
    score: 83,
    school: 76,
    national: 72,
    international: 66,
    status: "STRENGTH",
  },
  {
    dimension: "Analytical Thinking",
    score: 68,
    school: 73,
    national: 69,
    international: 62,
    status: "GROWTH AREA",
  },
  {
    dimension: "Visual-Spatial Thinking",
    score: 91,
    school: 77,
    national: 73,
    international: 67,
    status: "EXCEPTIONAL",
  },
  {
    dimension: "Knowledge Application",
    score: 72,
    school: 74,
    national: 70,
    international: 64,
    status: "DEVELOPING",
  },
];

const fields = [
  { label: "Student Name", value: "Komal Chandra" },
  { label: "School", value: "DPS World School" },
  { label: "Class Teacher", value: "Ms. Vartika Bhalla" },
  { label: "Principal", value: "Dr. Shikha Nigam" },
  { label: "Exam Name", value: "International Aptitude Olympiad" },
  { label: "Date", value: "11 November 2025" },
  { label: "Report ID", value: "EO10403" },
];

export function StageOlympiad() {
  return (
    <StageShell
      id="olympiad"
      accent={ACCENT}
      background="#f6f8fc"
      stage="Stage 2 — School Years"
      brand="Epoch Olympiad"
      tagline="From Exploration to Structured Thinking"
      audience="Primary & middle school"
      heading="The edition that separates remembering from understanding"
      paragraphs={[
        "Once marks enter the picture they start hiding things. Two learners can score the same and be in completely different places — one recalled the answer, the other reasoned it out. This edition reports those as separate numbers, because the difference between them predicts what happens next year.",
        "Every dimension is then placed against three cohorts: the learner's own school, the national field and the international field. A score of 68 means very little on its own; 68 against a national 69 and an international 62 means something specific.",
      ]}
      previewSrc="/images/ahr-report-olympiad.webp"
      previewAlt="Epoch Olympiad Academic Health Report showing the cognitive snapshot, understanding versus recall bars, academic nutrition and the academic health matrix"
      fields={fields}
      mascotSrc="/images/ahr-mascot-olympiad.webp"
      logoSrc="/images/EPOCH NAME LOGO - Copy.png"
      footerTagline="Beyond marks, we reveal potential."
    >
      {/* Snapshot */}
      <Reveal>
        <Panel title="Academic & cognitive snapshot" accent={ACCENT}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {snapshot.map((s) => (
              <ScoreTile key={s.label} {...s} />
            ))}
          </div>
        </Panel>
      </Reveal>

      {/* Recall split + nutrition */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <Panel
            title="Understanding vs recall"
            note="Three different questions, three different answers"
            accent={ACCENT}
            className="h-full"
          >
            <div className="flex flex-1 flex-col justify-center gap-5">
              {recall.map((r) => (
                <MeterBar key={r.label} {...r} />
              ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={110}>
          <Panel
            title="Academic nutrition"
            note="A balanced diet for the brain, subject by subject"
            accent={ACCENT}
            className="h-full"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-3">
              {nutrition.map((n) => {
                const Icon = n.icon;
                return (
                  <div
                    key={n.subject}
                    className="flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3.5 text-center"
                    style={{
                      borderColor: `${n.color}33`,
                      backgroundColor: `${n.color}0d`,
                    }}
                  >
                    <span className="text-[10.5px] font-medium leading-tight text-slate-600 lg:text-[11.5px]">
                      {n.subject}
                    </span>
                    <span
                      className="text-[9px] font-semibold uppercase tracking-[0.1em] lg:text-[9.5px]"
                      style={{ color: n.color }}
                    >
                      {n.nutrient}
                    </span>
                    <Icon
                      className="mt-1 h-6 w-6 lg:h-7 lg:w-7"
                      style={{ color: n.color }}
                      strokeWidth={1.6}
                    />
                    <span
                      className="mt-1 text-[17px] font-bold leading-none tabular-nums lg:text-[20px]"
                      style={{ color: n.color }}
                    >
                      <AnimatedNumber value={n.value} suffix="%" />
                    </span>
                  </div>
                );
              })}
            </div>
          </Panel>
        </Reveal>
      </div>

      {/* Matrix */}
      <Reveal>
        <Panel
          title="Academic health matrix"
          note="Every dimension read against school, national and international cohorts"
          accent={ACCENT}
        >
          <BenchmarkTable rows={matrix} accent={ACCENT} />
        </Panel>
      </Reveal>

      {/* Read-out */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <Reveal>
          <InsightList
            title="Strengths"
            items={[
              "Excellent visual-spatial skills",
              "Strong problem solving ability",
              "Good conceptual clarity",
            ]}
            accent="#1a7a4c"
            marker="check"
            className="h-full"
          />
        </Reveal>
        <Reveal delay={100}>
          <InsightList
            title="Growth areas"
            items={[
              "Analytical thinking",
              "Applying concepts in unfamiliar situations",
              "Multi-step reasoning",
            ]}
            accent="#e8862e"
            marker="arrow"
            className="h-full"
          />
        </Reveal>
        <Reveal delay={200} className="md:col-span-2 lg:col-span-1">
          <InsightList
            title="What will help"
            items={[
              "Practice higher order thinking questions",
              "Solve real-life based problems",
              "Read, explore and ask “why” more",
            ]}
            accent={ACCENT}
            marker="star"
            className="h-full"
          />
        </Reveal>
      </div>

      {/* Parent insight */}
      <Reveal>
        <div
          className="flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-start sm:gap-6 lg:p-7"
          style={{ borderColor: `${ACCENT}26`, backgroundColor: `${ACCENT}0a` }}
        >
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm lg:h-14 lg:w-14"
            style={{ color: ACCENT }}
          >
            <SeedlingIcon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.6} />
          </span>
          <div>
            <h3
              className="text-[10.5px] font-semibold uppercase tracking-[0.14em] lg:text-[11.5px]"
              style={{ color: ACCENT }}
            >
              Parent insight
            </h3>
            <p className="mt-2 font-serif text-[15px] italic leading-relaxed text-navy lg:text-[18px]">
              &ldquo;Komal is a bright and curious learner with excellent
              visual-spatial strengths and strong problem-solving abilities. The
              report shows his conceptual understanding and application skills
              are well developed. With a focused effort on analytical thinking
              and multi-step reasoning, he can achieve even higher levels of
              academic excellence. Encourage regular practice, real-life
              exploration, and asking questions to nurture his natural
              potential.&rdquo;
            </p>
          </div>
        </div>
      </Reveal>
    </StageShell>
  );
}
