"use client";

import { useState } from "react";
import { DocIcon } from "../icons";

const faqs = [
  {
    q: "Who can participate in the International Brain Booster Olympiad?",
    a: "Kindergarten and eligible early learners, registered through their school as per the annual notification.",
  },
  {
    q: "What skills does Brain Booster Olympiad assess?",
    a: "Observation, pattern recognition, connecting ideas, simple reasoning and early problem-solving—the thinking abilities that come before subject knowledge.",
  },
  {
    q: "Is Brain Booster based on a school textbook syllabus?",
    a: "No. It is not tied to any textbook. Questions use colours, shapes and everyday objects that young children already recognise.",
  },
  {
    q: "Is the assessment suitable for young children?",
    a: "Yes. It is offline, crayon-and-paper based, age-appropriate and conducted in a familiar, friendly environment at the child's own school.",
  },
  {
    q: "How should my child prepare?",
    a: "Play observation games, work through the coloured workbook, explore patterns in everyday objects and encourage why, how and what-if questions.",
  },
  {
    q: "Does my child need coaching?",
    a: "No coaching is required. The assessment measures how a child thinks, not how much a child has been drilled.",
  },
  {
    q: "What does the child receive after the assessment?",
    a: "An Academic Health Report with parent-friendly insights into the child's thinking abilities and learning readiness.",
  },
  {
    q: "How are awards, scholarships and recognition decided?",
    a: "On performance at international, national and school levels, with scholarships and special recognition awarded as per published criteria.",
  },
];

function FaqRow({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <span className="text-[12.5px] font-medium text-navy lg:text-[13px]">
          {q}
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 shrink-0 text-gold-dark transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {/* grid-rows 0fr→1fr animates the panel open without a hard-coded height */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
        }`}
      >
        <p className="min-h-0 overflow-hidden text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
          {a}
        </p>
      </div>
    </div>
  );
}

export function BrainBoosterFaq() {
  // Single open row at a time, so the panel never grows into a wall of text.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
      <div className="flex items-center gap-2.5">
        <DocIcon className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.7} />
        <h2 className="font-serif text-[16px] font-semibold text-navy lg:text-[18px]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-3 flex flex-col">
        {faqs.map((f, i) => (
          <FaqRow
            key={f.q}
            q={f.q}
            a={f.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}
