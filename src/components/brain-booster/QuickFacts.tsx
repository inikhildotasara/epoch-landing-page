import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  ChildFaceIcon,
  DocIcon,
  EditIcon,
  GroupIcon,
  TargetIcon,
} from "../icons";

type Fact = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  title: string;
  lines?: string[];
  note?: string;
  bullets?: string[];
};

const facts: Fact[] = [
  {
    icon: ChildFaceIcon,
    color: "#6d4aa7",
    title: "Eligibility",
    lines: ["Kindergarten /", "eligible early learners"],
    note: "(As per annual notification)",
  },
  {
    icon: EditIcon,
    color: "#16a34a",
    title: "Mode",
    lines: ["Crayon colours", "and paper"],
    note: "(Offline)",
  },
  {
    icon: TargetIcon,
    color: "#e8862e",
    title: "Purpose",
    lines: ["Understand thinking", "abilities and learning", "readiness"],
  },
  {
    icon: DocIcon,
    color: "#e0407f",
    title: "Outcome",
    lines: ["Academic Health", "Report with", "parent-friendly insights"],
  },
  {
    icon: GroupIcon,
    color: "#0f9c9a",
    title: "Who Benefits?",
    bullets: ["Students", "Parents", "Schools"],
  },
];

export function QuickFacts() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal
                key={f.title}
                delay={i * 70}
                className="flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <Icon
                    className="h-6 w-6 shrink-0"
                    style={{ color: f.color }}
                    strokeWidth={1.7}
                  />
                  <h2
                    className="font-serif text-[16px] font-semibold lg:text-[15.5px] xl:text-[17px]"
                    style={{ color: f.color }}
                  >
                    {f.title}
                  </h2>
                </div>

                {f.bullets ? (
                  <ul className="mt-3 space-y-1 text-left text-[12.5px] font-medium text-navy lg:text-[13px]">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-navy" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="mt-3 text-[12.5px] font-medium leading-relaxed text-navy lg:text-[13px]">
                      {f.lines?.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    {f.note && (
                      <p className="mt-1.5 text-[11px] text-slate-500 lg:text-[11.5px]">
                        {f.note}
                      </p>
                    )}
                  </>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
