import { Reveal } from "../Reveal";
import { SeedlingIcon } from "../icons";
import {
  Panel,
  AnimatedNumber,
  ScoreDonut,
  MeterBar,
  BenchmarkTable,
  InsightList,
  StageShell,
  type BenchRow,
} from "./ui";

const ACCENT = "#8a6a12";

const profile = [
  { label: "Conceptual Reasoning", value: 84, color: "#1a7a4c" },
  { label: "Analytical Thinking", value: 81, color: "#e8862e" },
  { label: "Logical Reasoning", value: 88, color: "#2b6fd1" },
  { label: "Problem Solving", value: 79, color: "#7a52c7" },
  { label: "Knowledge Application", value: 91, color: "#0f9b8e" },
  { label: "Scientific Inquiry", value: 76, color: "#d9455f" },
  { label: "Multidisciplinary Thinking", value: 73, color: "#4a5fc1" },
];

const challenge = [
  { label: "Familiar problem", value: 92, color: "#1a7a4c" },
  { label: "Modified problem", value: 84, color: "#3bb6c4" },
  { label: "Unfamiliar problem", value: 76, color: "#2b6fd1" },
  { label: "Multi-step problem", value: 69, color: "#7a52c7" },
];

const insights: BenchRow[] = [
  {
    dimension: "Conceptual Reasoning",
    score: 84,
    school: 78,
    national: 74,
    international: 69,
    status: "STRONG",
  },
  {
    dimension: "Analytical Thinking",
    score: 81,
    school: 75,
    national: 71,
    international: 66,
    status: "STRONG",
  },
  {
    dimension: "Logical Reasoning",
    score: 88,
    school: 80,
    national: 76,
    international: 71,
    status: "EXCEPTIONAL",
  },
  {
    dimension: "Problem Solving",
    score: 79,
    school: 72,
    national: 68,
    international: 61,
    status: "STRONG",
  },
  {
    dimension: "Knowledge Application",
    score: 91,
    school: 82,
    national: 78,
    international: 72,
    status: "EXCEPTIONAL",
  },
  {
    dimension: "Scientific Inquiry",
    score: 76,
    school: 70,
    national: 65,
    international: 59,
    status: "DEVELOPING",
  },
  {
    dimension: "Multidisciplinary Thinking",
    score: 73,
    school: 68,
    national: 63,
    international: 57,
    status: "GROWTH AREA",
  },
];

const fields = [
  { label: "Student Name", value: "Nikhil Advani" },
  { label: "School", value: "Kendriya Vidyalaya, Kota" },
  { label: "Class Teacher", value: "Mrs. Archana Gupta" },
  { label: "Principal", value: "Dr. Dinesh Bhardwaj" },
  { label: "Exam Name", value: "International Science Olympiad" },
  { label: "Date", value: "18 November 2025" },
  { label: "Report ID", value: "EO21409" },
];

export function StageAdvanced() {
  return (
    <StageShell
      id="advanced"
      accent={ACCENT}
      background="#ffffff"
      stage="Stage 3 — Senior Years"
      brand="Epoch Olympiad Advanced"
      tagline="From Structured Thinking to Advanced Application"
      audience="Senior learners"
      heading="Where knowing a concept and being able to use it stop being the same thing"
      paragraphs={[
        "Senior learners rarely fail because they do not know the material. They stall the moment a question stops looking like the one they practised. This edition measures that directly: the same learner is scored on familiar, modified, unfamiliar and multi-step problems, and the slope between them is the finding.",
        "It also states the application gap outright — knowledge at 89 percent against application at 74 leaves fifteen points that no amount of revision will close. Closing it needs different practice, and the report says which.",
      ]}
      previewSrc="/images/ahr-report-advanced.webp"
      previewAlt="Advanced Academic Health Report showing the seven-dimension cognitive profile, knowledge versus application gap, thinking under challenge and detailed cognitive insights"
      fields={fields}
      mascotSrc="/images/ahr-mascot-advanced.webp"
      logoSrc="/images/EPOCH NAME LOGO - Copy.png"
      footerTagline="Understand. Apply. Excel."
    >
      {/* Cognitive profile */}
      <Reveal>
        <Panel title="Advanced cognitive profile" accent={ACCENT}>
          <div className="grid grid-cols-3 justify-items-center gap-x-3 gap-y-5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-2">
            {profile.map((p) => (
              <ScoreDonut key={p.label} {...p} />
            ))}
          </div>
        </Panel>
      </Reveal>

      {/* Application gap + challenge curve */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-6">
        <Reveal>
          <Panel
            title="Knowledge vs application"
            accent={ACCENT}
            className="h-full"
          >
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-6">
                <ScoreDonut
                  value={89}
                  suffix="%"
                  label="Knowledge"
                  color="#4a9b3f"
                />
                <ScoreDonut
                  value={74}
                  suffix="%"
                  label="Application"
                  color="#e8862e"
                />
              </div>
              <div
                className="mt-5 w-full rounded-xl px-4 py-3 text-center"
                style={{ backgroundColor: `${ACCENT}12` }}
              >
                <p
                  className="text-[9.5px] font-semibold uppercase tracking-[0.16em] lg:text-[10.5px]"
                  style={{ color: ACCENT }}
                >
                  Application gap
                </p>
                <p className="mt-1 font-serif text-[26px] font-medium leading-none text-navy lg:text-[30px]">
                  <AnimatedNumber value={15} />{" "}
                  <span className="text-[13px] font-sans font-semibold uppercase tracking-[0.1em] text-slate-500 lg:text-[14px]">
                    points
                  </span>
                </p>
              </div>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={110}>
          <Panel
            title="Thinking under challenge"
            note="The same learner, four levels of novelty"
            accent={ACCENT}
            className="h-full"
          >
            <div className="flex flex-1 flex-col justify-center gap-4 lg:gap-5">
              {challenge.map((c) => (
                <MeterBar key={c.label} {...c} />
              ))}
            </div>
            <p className="mt-5 border-t border-slate-100 pt-3 text-[11.5px] italic leading-relaxed text-slate-500 lg:text-[12.5px]">
              Performance weakens as complexity and novelty increase — the shape
              of that decline matters more than any single score above it.
            </p>
          </Panel>
        </Reveal>
      </div>

      {/* Detailed insights */}
      <Reveal>
        <Panel
          title="Detailed cognitive insights"
          note="Seven dimensions, four reference points each"
          accent={ACCENT}
        >
          <BenchmarkTable rows={insights} accent={ACCENT} />
        </Panel>
      </Reveal>

      {/* Read-out */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <Reveal>
          <InsightList
            title="Strengths"
            items={[
              "Excellent logical reasoning",
              "Strong concept application",
              "Good analytical ability",
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
              "Scientific inquiry",
              "Multidisciplinary thinking",
              "Solving unseen & complex problems",
            ]}
            accent="#e8862e"
            marker="arrow"
            className="h-full"
          />
        </Reveal>
        <Reveal delay={200} className="md:col-span-2 lg:col-span-1">
          <InsightList
            title="Focus areas"
            items={[
              "Practice application-based questions",
              "Engage in real-world problem solving",
              "Strengthen research and inquiry skills",
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
              &ldquo;Nikhil demonstrates excellent abilities in knowledge
              application and logical reasoning. His performance indicates a
              strong potential for advanced problem solving. Focusing on
              improving scientific inquiry and multidisciplinary thinking will
              help him tackle complex and unfamiliar challenges more
              confidently. Encourage exploration, curiosity, and participation
              in science activities to support his continued growth.&rdquo;
            </p>
          </div>
        </div>
      </Reveal>
    </StageShell>
  );
}
