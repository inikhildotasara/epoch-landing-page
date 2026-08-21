"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { GradCapIcon } from "../icons";
import { FaqAnswer, type FaqItem } from "../faq/FaqAnswer";

const faqs: FaqItem[] = [
  {
    q: "How do Brainiac Global, Epoch Olympiad and MY CCBee work together?",
    a: [
      "Brainiac Global, Epoch Olympiad and MY CCBee are three initiatives built on one research philosophy.",
      "Brainiac Global focuses on building thinking foundations in the early years.",
      "Epoch Olympiad provides research-driven international assessments for school learners.",
      "MY CCBee helps schools track performance, understand learning patterns and support continuous improvement.",
      "Together, they create a journey from thinking → assessment → insight → improvement.",
    ],
  },
  {
    q: "Which initiative is right for my child or school?",
    a: [
      "It depends on the learner's stage and the school's objective.",
      [
        "Brainiac Global — for kindergarten and early-years learners, with a focus on foundational thinking and learning readiness.",
        "Epoch Olympiad — for school learners seeking international assessments across different academic and thinking domains.",
        "MY CCBee — for schools and educators who want to track performance, identify learning gaps and support continuous improvement.",
      ],
    ],
  },
  {
    q: "Are all three initiatives assessment programmes?",
    a: [
      "No. Each initiative has a different role.",
      "Brainiac Global combines early-years cognitive development with age-appropriate assessment.",
      "Epoch Olympiad offers international assessments and future-focused learning initiatives like IFLY (International Finance & Digital Literacy Olympiad for Young Leaders) and IHOST (International Holistic Olympiad for Smart Thinkers).",
      "MY CCBee is a performance tracking and booster platform that helps schools turn assessment information into actionable insights.",
    ],
  },
  {
    q: "What makes Epoch's assessments different from conventional assessments?",
    a: [
      "Our assessments are designed to look beyond rote memorisation and explore areas such as conceptual understanding, reasoning, problem-solving, analytical thinking and knowledge application.",
      "The aim is not simply to produce a score or rank, but to generate meaningful information about how a learner understands and applies knowledge.",
    ],
  },
  {
    q: "What is an Academic Health Report?",
    a: [
      "An Academic Health Report goes beyond marks to provide a clearer picture of a learner's strengths, areas for growth, thinking abilities and learning patterns.",
      "It converts assessment results into parent-friendly insights so that students, parents and educators can better understand where the learner is today and what the results reveal about their development.",
    ],
  },
  {
    q: "How are assessment results evaluated and benchmarked?",
    a: [
      "Assessment responses are analysed using research-informed frameworks and appropriate benchmarks to provide a structured view of learner performance.",
      "The results are interpreted across relevant areas of understanding and thinking rather than relying only on a single overall score.",
    ],
  },
  {
    q: "How does MY CCBee help schools?",
    a: [
      "MY CCBee helps schools move from simply collecting assessment data to understanding and acting on it.",
      "It enables schools and educators to monitor performance, identify strengths and learning gaps, observe patterns and access insights and booster resources that support continuous improvement.",
    ],
  },
];

function FaqRow({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: FaqItem["a"];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-white/12 bg-white/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
      >
        <span className="text-[13px] font-medium text-white lg:text-[13.5px]">
          {q}
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden px-4 transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-3.5" : "grid-rows-[0fr]"
        }`}
      >
        <FaqAnswer
          blocks={a}
          textClass="text-[12.5px] leading-relaxed text-slate-300"
          dotClass="bg-gold"
        />
      </div>
    </div>
  );
}

const half = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, half), faqs.slice(half)];

export function InitiativesFaq() {
  // Single open row at a time, so the two columns never jump around together.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-navy" style={{ backgroundColor: "#0b1c3f" }}>
      <div className="mx-auto grid w-full grid-cols-1 items-start gap-10 px-4 py-14 sm:px-6 md:px-12 lg:grid-cols-[1.7fr_1fr] lg:gap-14 lg:px-page lg:py-16">
        {/* Left: FAQ accordion */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <GradCapIcon className="h-5 w-5 text-gold" strokeWidth={1.7} />
            </span>
            <h2 className="font-serif text-[24px] font-medium text-white lg:text-[28px]">
              Frequently Asked
            </h2>
          </div>
          {/* Two independent stacks rather than a 2-col grid: an open answer then
              only pushes the cards under it, instead of stretching its row. */}
          <div className="mt-6 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
            {columns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3">
                {col.map((f, ri) => {
                  const i = ci * half + ri;
                  return (
                    <FaqRow
                      key={f.q}
                      q={f.q}
                      a={f.a}
                      open={openIndex === i}
                      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right: purpose statement */}
        <Reveal delay={120} className="lg:pl-4">
          <div className="flex flex-col items-start lg:items-center lg:text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <GradCapIcon className="h-8 w-8 text-gold" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 font-serif text-[24px] font-medium leading-snug text-white lg:text-[28px]">
              Three Initiatives.
              <br />
              One Purpose.
            </h3>
            <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-slate-300 lg:text-[14px]">
              Helping every learner move from memory to meaningful thinking,
              understanding and growth.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
