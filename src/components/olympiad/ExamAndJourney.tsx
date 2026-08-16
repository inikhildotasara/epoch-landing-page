import { Reveal } from "../Reveal";
import {
  BarChartArrowIcon,
  ClipboardIcon,
  GlobeIcon,
  SearchIcon,
  TrophyIcon,
} from "../icons";
import { ProgramBadge, olympiads, platforms } from "./programs";

const columns = ["IMO", "ITST", "IAO", "IGKO"] as const;

const rows: { label: string; values: [string, string, string, string] }[] = [
  {
    label: "Eligibility",
    values: ["Classes 1–10", "Classes 1–10", "Classes 1–10", "Classes 1–10"],
  },
  { label: "Exam Mode", values: ["Offline", "Offline", "Offline", "Offline"] },
  {
    label: "Medium",
    values: ["As prescribed", "As prescribed", "As prescribed", "As prescribed"],
  },
  {
    label: "Pattern",
    values: ["Objective", "Objective", "Objective", "Objective"],
  },
  { label: "Negative Marking", values: ["No", "No", "No", "No"] },
  {
    label: "Duration",
    values: ["60 Minutes", "60 Minutes", "60 Minutes", "60 Minutes"],
  },
  {
    label: "Questions",
    values: [
      "30 (Classes 1–4)\n35 (Classes 5–10)",
      "30 (Classes 1–4)\n35 (Classes 5–10)",
      "30 (Classes 1–4)\n35 (Classes 5–10)",
      "35 (Classes 1–4)\n35 (Classes 5–10)",
    ],
  },
  {
    label: "Level",
    values: ["Pre + Mains", "Pre + Mains", "Pre + Mains", "Single Level"],
  },
];

const flow = [
  { icon: ClipboardIcon, label: "Pre Exam" },
  { icon: SearchIcon, label: "Evaluation" },
  { icon: BarChartArrowIcon, label: "Top 10%" },
  { icon: TrophyIcon, label: "Mains /\nAdvance Level" },
];

function ExamTable() {
  return (
    <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
      <h2 className="text-center font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
        Common Examination Information
      </h2>
      <p className="mt-1 text-center text-[11.5px] font-medium text-slate-500 lg:text-[12px]">
        (For IMO, ITST, IAO &amp; IGKO)
      </p>

      {/* The table keeps a floor width and scrolls sideways on small screens
          rather than squeezing five columns into 320px */}
      <div className="mt-4 -mx-1 overflow-x-auto px-1">
        <table className="w-full min-w-[480px] border-collapse text-center">
          <caption className="sr-only">
            Common examination information for IMO, ITST, IAO and IGKO
          </caption>
          <thead>
            <tr className="bg-navy text-white">
              <th
                scope="col"
                className="rounded-tl-md px-3 py-2 text-left text-[11px] font-semibold lg:text-[11.5px]"
              >
                Particular
              </th>
              {columns.map((c, i) => (
                <th
                  key={c}
                  scope="col"
                  className={`px-3 py-2 text-[11px] font-semibold lg:text-[11.5px] ${
                    i === columns.length - 1 ? "rounded-tr-md" : ""
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.label}
                className={i % 2 === 1 ? "bg-slate-50" : undefined}
              >
                <th
                  scope="row"
                  className="border-b border-slate-100 px-3 py-2 text-left text-[11px] font-semibold text-navy lg:text-[11.5px]"
                >
                  {r.label}
                </th>
                {r.values.map((v, j) => (
                  <td
                    key={`${r.label}-${columns[j]}`}
                    className="border-b border-slate-100 px-3 py-2 text-[11px] leading-snug whitespace-pre-line text-slate-600 lg:text-[11.5px]"
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
          <TrophyIcon
            className="h-6 w-6 shrink-0 text-gold-dark"
            strokeWidth={1.7}
          />
          <div>
            <h3 className="text-[12.5px] font-bold text-gold-dark lg:text-[13px]">
              Criteria for Mains (For IMO, ITST &amp; IAO)
            </h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600 lg:text-[12px]">
              Top 10% of participating students in the Pre Exam are eligible for
              the Mains (Advance Level).
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
          <GlobeIcon
            className="h-6 w-6 shrink-0 text-[#1e6fb8]"
            strokeWidth={1.7}
          />
          <div>
            <h3 className="text-[12.5px] font-bold text-[#1e6fb8] lg:text-[13px]">
              About IGKO
            </h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600 lg:text-[12px]">
              IGKO is a single-level International Olympiad. There is no separate
              Mains examination.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 rounded-lg bg-[#eaf3fc] px-4 py-2.5 text-center text-[11.5px] font-medium leading-relaxed text-[#215383] lg:text-[12px]">
        Note: Detailed syllabus, marking scheme, sample papers, previous year
        papers and level-wise information are available in the Genie App.
      </p>
    </Reveal>
  );
}

function JourneyPanel() {
  return (
    <Reveal delay={90} className="flex flex-col gap-4">
      <h2 className="text-center font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
        The Epoch Learning Journey
      </h2>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
        <h3 className="font-serif text-[15px] font-semibold text-navy lg:text-[16px]">
          Assess{" "}
          <span className="font-sans text-[11.5px] font-semibold text-gold-dark lg:text-[12px]">
            (Olympiads)
          </span>
        </h3>
        <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
          Assess understanding, reasoning, application and academic skills.
        </p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {olympiads.map((p) => (
            <div key={p.code} className="flex flex-col items-center gap-1.5">
              <ProgramBadge
                program={p}
                className="h-10 w-10"
                iconClassName="h-5 w-5"
                glyphClassName="text-[13px]"
              />
              <span className="text-[11.5px] font-semibold text-navy lg:text-[12px]">
                {p.code}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
        <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
          {flow.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-start justify-center">
                <div className="flex w-full flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white">
                    <Icon className="h-6 w-6 text-navy" strokeWidth={1.6} />
                  </span>
                  <span className="whitespace-pre-line text-center text-[11.5px] font-semibold leading-snug text-navy lg:text-[12px]">
                    {s.label}
                  </span>
                </div>
                {i < flow.length - 1 && (
                  <span
                    className="-ml-2 mt-3 hidden text-[15px] text-gold sm:block"
                    aria-hidden
                  >
                    &#10230;
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-[11px] font-medium text-slate-500 lg:text-[11.5px]">
          *Not applicable for IGKO (Single Level)
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
        <h3 className="font-serif text-[15px] font-semibold text-navy lg:text-[16px]">
          Learn{" "}
          <span className="font-sans text-[11.5px] font-semibold text-gold-dark lg:text-[12px]">
            (Learning Platforms)
          </span>
        </h3>
        <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
          Build balanced intelligence and future-ready capabilities.
        </p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {platforms.map((p) => (
            <div key={p.code} className="flex flex-col items-center gap-1.5">
              <ProgramBadge
                program={p}
                className="h-10 w-10"
                iconClassName="h-5 w-5"
              />
              <span className="text-[11.5px] font-semibold text-navy lg:text-[12px]">
                {p.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function ExamAndJourney() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-5">
          <ExamTable />
          <JourneyPanel />
        </div>
      </div>
    </section>
  );
}
