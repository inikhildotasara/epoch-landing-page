import { Reveal } from "../Reveal";
import {
  EyeIcon,
  PuzzleIcon,
  ChipIcon,
  NetworkIcon,
  BulbIcon,
  TargetIcon,
  OpenBookIcon,
  SearchIcon,
  SeedlingIcon,
} from "../icons";
import {
  Panel,
  InsightList,
  StarRating,
  StageShell,
  type IconType,
} from "./ui";

const ACCENT = "#1a7a4c";

const lenses: {
  icon: IconType;
  label: string;
  color: string;
  level: "STRONG" | "DEVELOPING";
}[] = [
  { icon: EyeIcon, label: "Observation", color: "#0f9b8e", level: "STRONG" },
  {
    icon: PuzzleIcon,
    label: "Pattern Recognition",
    color: "#e8862e",
    level: "DEVELOPING",
  },
  {
    icon: ChipIcon,
    label: "Visual & Spatial Skills",
    color: "#2b6fd1",
    level: "STRONG",
  },
  {
    icon: NetworkIcon,
    label: "Logical Connections",
    color: "#d9455f",
    level: "DEVELOPING",
  },
  {
    icon: BulbIcon,
    label: "Curiosity & Exploration",
    color: "#7a52c7",
    level: "STRONG",
  },
  {
    icon: TargetIcon,
    label: "Attention & Readiness",
    color: "#1a9bd7",
    level: "DEVELOPING",
  },
];

const readiness = [
  { label: "Attention", value: 4 },
  { label: "Instruction Following", value: 4 },
  { label: "Visual Discrimination", value: 4 },
  { label: "Pattern Recognition", value: 3 },
  { label: "Independent Exploration", value: 4 },
];

const experiences: { icon: IconType; label: string }[] = [
  { icon: PuzzleIcon, label: "Puzzles & shape sorting" },
  { icon: ChipIcon, label: "Building blocks & construction" },
  { icon: NetworkIcon, label: "Sequencing activities" },
  { icon: OpenBookIcon, label: "Storytelling & role play" },
  { icon: SearchIcon, label: "Find-the-difference activities" },
];

const strengths = [
  "Notices small details easily",
  "Shows interest in puzzles and patterns",
  "Understands shapes and spatial positions",
  "Asks questions and loves to explore",
];

const opportunities = [
  "Completing pattern sequences",
  "Connecting cause and effect",
  "Sustaining attention for longer activities",
  "Following multi-step instructions",
];

const fields = [
  { label: "Student Name", value: "Kush Gupta" },
  { label: "School", value: "Sunshine Kids World" },
  { label: "Class Teacher", value: "Ms. Neha Verma" },
  { label: "Principal", value: "Mrs. Neha Chabra" },
  { label: "Exam Name", value: "International Brain Booster Olympiad" },
  { label: "Date", value: "17 November 2025" },
  { label: "Report ID", value: "IBO25052" },
];

export function StageFoundation() {
  return (
    <StageShell
      id="foundation"
      accent={ACCENT}
      background="#ffffff"
      stage="Stage 1 — Early Years"
      brand="Brainiac Global"
      tagline="Building Thinking Before Memorisation"
      audience="Early years"
      heading="No Percentile, No Comparison — A description of how a young child thinks"
      paragraphs={[
        "At this age a score would mislead more than it informs. So the early years edition never produces one. It reads six developmental lenses and reports each as strong or still developing, which is exactly how thinking behaves before formal schooling settles in.",
        "The result is a report a parent can read in four minutes and act on the same evening: what the child already does well, what is still forming, and which everyday play would move it forward.",
      ]}
      previewSrc="/images/ahr-report-foundation-updated.png"
      previewAlt="Brainiac Global Academic Health Report showing developmental lenses, strengths, learning readiness profile and parent insight"
      fields={fields}
      logoSrc="/images/BRAINIAC LOGO.png"
      footerTagline="Every child thinks differently. We help you understand how."
    >
      {/* Developmental lenses */}
      <Reveal>
        <Panel title="How your child is developing" accent={ACCENT}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {lenses.map((l) => {
              const Icon = l.icon;
              return (
                <div
                  key={l.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/60 px-2 py-4 text-center"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm lg:h-12 lg:w-12"
                    style={{ color: l.color }}
                  >
                    <Icon className="h-[22px] w-[22px] lg:h-6 lg:w-6" strokeWidth={1.6} />
                  </span>
                  <span className="text-[11px] font-medium leading-tight text-slate-700 lg:text-[12px]">
                    {l.label}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] ring-1 lg:text-[9.5px] ${
                      l.level === "STRONG"
                        ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                        : "bg-amber-50 text-amber-700 ring-amber-200"
                    }`}
                  >
                    {l.level}
                  </span>
                </div>
              );
            })}
          </div>
        </Panel>
      </Reveal>

      {/* Strengths / opportunities */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
        <Reveal>
          <InsightList
            title="Strengths to celebrate"
            items={strengths}
            accent={ACCENT}
            marker="star"
            className="h-full"
          />
        </Reveal>
        <Reveal delay={110}>
          <InsightList
            title="Opportunities to develop"
            items={opportunities}
            accent="#e8862e"
            marker="arrow"
            className="h-full"
          />
        </Reveal>
      </div>

      {/* Readiness + experiences */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <Panel
            title="Learning readiness profile"
            accent={ACCENT}
            className="h-full"
          >
            <ul className="space-y-3">
              {readiness.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center justify-between gap-4 border-b border-dashed border-slate-100 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-[12px] text-slate-600 lg:text-[13px]">
                    {r.label}
                  </span>
                  <StarRating value={r.value} color={ACCENT} />
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>

        <Reveal delay={110}>
          <Panel
            title="Recommended experiences"
            note="Play that targets exactly what is still forming"
            accent={ACCENT}
            className="h-full"
          >
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {experiences.map((e) => {
                const Icon = e.icon;
                return (
                  <div
                    key={e.label}
                    className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2.5"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
                      style={{ color: ACCENT }}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                    </span>
                    <span className="text-[11.5px] leading-snug text-slate-700 lg:text-[12.5px]">
                      {e.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Panel>
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
              &ldquo;Your child is curious and observant with good spatial
              awareness. Consistent play-based activities that involve patterns,
              sequencing and following instructions will support steady
              growth.&rdquo;
            </p>
          </div>
        </div>
      </Reveal>
    </StageShell>
  );
}
