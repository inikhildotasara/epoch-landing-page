import { ClipboardListIcon, GroupIcon } from "../icons";
import {
  enquiryPrograms,
  type EnquiryProgram,
  type ProgramId,
} from "@/content/enquiry/programs";

const assess = enquiryPrograms.filter((p) => p.group === "assess");
const learn = enquiryPrograms.filter((p) => p.group === "learn");

function ProgramButton({
  program,
  selected,
  onSelect,
}: {
  program: EnquiryProgram;
  selected: boolean;
  onSelect: (id: ProgramId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(program.id)}
      aria-pressed={selected}
      className="group flex w-[88px] flex-col items-center sm:w-[96px]"
    >
      <span
        className={`flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white transition-shadow sm:h-[80px] sm:w-[80px] ${
          selected
            ? "ring-[3px] ring-offset-2"
            : "ring-1 ring-slate-200 group-hover:ring-slate-300"
        }`}
        style={selected ? { boxShadow: `0 0 0 3px ${program.color}` } : undefined}
      >
        <img
          src={program.logo}
          alt=""
          className="h-[58px] w-[58px] object-contain sm:h-[64px] sm:w-[64px]"
        />
      </span>
      <span className="mt-2 text-center text-[11.5px] font-semibold leading-snug text-navy lg:text-[12.5px]">
        {program.shortName}
      </span>
      <span
        className={`mt-1 text-[10.5px] font-semibold transition-colors lg:text-[11px] ${
          selected ? "text-gold-dark" : "text-slate-400 group-hover:text-navy"
        }`}
      >
        Explore more
      </span>
    </button>
  );
}

function GroupIntro({
  title,
  color,
  icon: Icon,
  copy,
}: {
  title: string;
  color: string;
  icon: typeof ClipboardListIcon;
  copy: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: color }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <div>
        <p
          className="text-[11px] font-bold uppercase tracking-[0.14em]"
          style={{ color }}
        >
          {title}
        </p>
        <p className="mt-1 max-w-sm text-[12px] leading-relaxed text-slate-500 lg:text-[12.5px]">
          {copy}
        </p>
      </div>
    </div>
  );
}

export function ProgramSelector({
  selectedId,
  onSelect,
}: {
  selectedId: ProgramId;
  onSelect: (id: ProgramId) => void;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-8 lg:pb-10">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-[0_18px_40px_-28px_rgba(11,28,63,0.35)] sm:px-6 lg:px-8 lg:py-7">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/70 lg:w-14" />
            <h2 className="text-center font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
              What are you looking for?
            </h2>
            <span className="h-px w-10 bg-gold/70 lg:w-14" />
          </div>

          <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:gap-0">
            <div className="lg:pr-8">
              <GroupIntro
                title="Assess"
                color="#1b3566"
                icon={ClipboardListIcon}
                copy="Understand your child's abilities through our assessments."
              />
              <div className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-5 sm:justify-start sm:gap-x-4">
                {assess.map((p) => (
                  <ProgramButton
                    key={p.id}
                    program={p}
                    selected={selectedId === p.id}
                    onSelect={onSelect}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <GroupIntro
                title="Learn"
                color="#1a8f5c"
                icon={GroupIcon}
                copy="Build future-ready skills with our learning platforms."
              />
              <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-5 sm:justify-start">
                {learn.map((p) => (
                  <ProgramButton
                    key={p.id}
                    program={p}
                    selected={selectedId === p.id}
                    onSelect={onSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
