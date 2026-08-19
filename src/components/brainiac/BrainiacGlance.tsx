import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  ChildFaceIcon,
  EditIcon,
  GroupIcon,
  TargetIcon,
  TrophyIcon,
} from "../icons";

type Card = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  tint: string;
  title: string;
  lines?: string[];
  note?: string;
  bullets?: string[];
};

const cards: Card[] = [
  {
    icon: ChildFaceIcon,
    color: "#6d4aa7",
    tint: "#f4f0fc",
    title: "A) Eligibility",
    lines: ["Kindergarten"],
    note: "(Age Group 2–6 years)",
  },
  {
    icon: EditIcon,
    color: "#16a34a",
    tint: "#eff8f1",
    title: "B) Mode",
    lines: ["Offline"],
    note: "(paper and crayon colours)",
  },
  {
    icon: TargetIcon,
    color: "#e8862e",
    tint: "#fdf5ec",
    title: "C) Purpose",
    lines: [
      "Understanding thinking, observations and decision making abilities and learning readiness",
    ],
  },
  {
    icon: TrophyIcon,
    color: "#e0407f",
    tint: "#fdeff5",
    title: "D) Motivation",
    lines: [
      "Exciting awards, gift and Academic Health report with parent friendly insights",
    ],
  },
  {
    icon: GroupIcon,
    color: "#0f9c9a",
    tint: "#eef8f8",
    title: "E) Who Benefits?",
    bullets: ["Students", "Parents", "Schools"],
  },
];

export function BrainiacGlance() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-6 lg:pb-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 70} className="h-full">
                <div
                  className="flex h-full flex-col rounded-xl px-4 py-4 transition-shadow duration-300 hover:shadow-md lg:px-5 lg:py-5"
                  style={{ backgroundColor: c.tint }}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className="h-6 w-6 shrink-0"
                      style={{ color: c.color }}
                      strokeWidth={1.7}
                    />
                    <h2
                      className="text-[12.5px] font-bold uppercase tracking-[0.03em] lg:text-[13px]"
                      style={{ color: c.color }}
                    >
                      {c.title}
                    </h2>
                  </div>

                  {c.bullets ? (
                    <ul className="mt-3 space-y-1.5 text-[12.5px] font-semibold text-navy lg:text-[13px]">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: c.color }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="mt-3 text-[12.5px] font-semibold leading-relaxed text-navy lg:text-[13px]">
                        {c.lines?.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                      {c.note && (
                        <p className="mt-1 text-[12px] font-semibold text-navy lg:text-[12.5px]">
                          {c.note}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
