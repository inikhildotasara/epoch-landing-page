import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  ArrowRight,
  ClipboardIcon,
  DocIcon,
  MedalIcon,
  OpenBookIcon,
  ShieldIcon,
  TrophyIcon,
} from "../icons";

const participateSteps = [
  "Register through your school",
  "Fill the parent consent form",
  "Submit fee & consent to your class teacher",
  "Receive workbook & Genie App access",
  "Let the child think, explore and enjoy the assessment",
];

const prepareSteps = [
  "Play observation games",
  "Explore colours, shapes & patterns",
  "Ask \u201cwhy?\u201d, \u201chow?\u201d and \u201cwhat if?\u201d",
  "Use the engaging Brainiac workbook",
  "Explore resources through Genie App",
];

const awards: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  label: string;
  note?: string;
}[] = [
  {
    icon: TrophyIcon,
    color: "#e8a013",
    label: "Olympiad Awards",
    note: "(International)",
  },
  { icon: MedalIcon, color: "#6d4aa7", label: "National Recognition" },
  { icon: ShieldIcon, color: "#16a34a", label: "School Recognition" },
];

const contactCards: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
}[] = [
  { icon: ClipboardIcon, title: "D) Structure & Pattern of Exam" },
  { icon: OpenBookIcon, title: "E) Syllabus" },
  { icon: DocIcon, title: "F) Sample Papers" },
];

function CardTitle({ children }: { children: string }) {
  return (
    <h2 className="text-[11.5px] font-bold uppercase leading-snug tracking-[0.03em] text-navy lg:text-[12px]">
      {children}
    </h2>
  );
}

function NumberedList({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-3 space-y-1.5">
      {steps.map((s, i) => (
        <li key={s} className="flex gap-2.5">
          <span className="text-[12px] font-bold text-[#6d4aa7] lg:text-[12.5px]">
            {i + 1}
          </span>
          <span className="text-[11.5px] leading-snug text-slate-600 lg:text-[12px]">
            {s}
          </span>
        </li>
      ))}
    </ol>
  );
}

function GhostButton({ children }: { children: string }) {
  return (
    <a
      href="#"
      className="mt-4 inline-flex w-fit items-center gap-2 self-center rounded-md border border-navy px-4 py-1.5 text-[11.5px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white lg:text-[12px]"
    >
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}

export function BrainiacResources() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-12">
        {/* All six cards only share a row from xl; below that they wrap in twos
            and threes so the numbered lists keep a readable measure. */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 py-4 transition-shadow duration-300 hover:shadow-md">
              <CardTitle>A) How to Participate</CardTitle>
              <NumberedList steps={participateSteps} />
              <div className="mt-auto flex flex-col">
                <GhostButton>View Details</GhostButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={70} className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 py-4 transition-shadow duration-300 hover:shadow-md">
              <CardTitle>B) How to Prepare</CardTitle>
              <NumberedList steps={prepareSteps} />
              <div className="mt-auto flex flex-col">
                <GhostButton>View Details</GhostButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 py-4 transition-shadow duration-300 hover:shadow-md">
              <CardTitle>C) Awards &amp; Recognition</CardTitle>
              <ul className="mt-3 space-y-3">
                {awards.map((a) => {
                  const Icon = a.icon;
                  return (
                    <li key={a.label} className="flex items-center gap-2.5">
                      <Icon
                        className="h-6 w-6 shrink-0"
                        style={{ color: a.color }}
                        strokeWidth={1.6}
                      />
                      <span className="text-[11.5px] leading-snug text-slate-600 lg:text-[12px]">
                        {a.label}
                        {a.note && (
                          <>
                            <br />
                            {a.note}
                          </>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto flex flex-col">
                <GhostButton>View Details</GhostButton>
              </div>
            </div>
          </Reveal>

          {contactCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={210 + i * 70} className="h-full">
                <div className="flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-4 text-center transition-shadow duration-300 hover:shadow-md">
                  <CardTitle>{c.title}</CardTitle>
                  <Icon
                    className="mt-4 h-9 w-9 text-navy"
                    strokeWidth={1.5}
                  />
                  <p className="mt-4 text-[11.5px] font-semibold text-navy lg:text-[12px]">
                    Click Here
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500 lg:text-[11.5px]">
                    (Redirect Contact Us)
                  </p>
                  <div className="mt-auto flex flex-col">
                    <GhostButton>Contact Us</GhostButton>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <p className="mt-4 text-center text-[11.5px] leading-relaxed text-slate-600 lg:text-[12px]">
            <span className="font-semibold text-gold-dark">Note:</span> Detailed
            syllabus, marking scheme, sample papers, previous year papers and
            scholarship are available in the{" "}
            <span className="font-semibold text-gold-dark">Genie App</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
