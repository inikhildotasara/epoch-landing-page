"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHead } from "./ui";

const faqs = [
  {
    q: "Is the Academic Health Report a rank card?",
    a: "No. It carries no rank and no pass or fail. Scores exist only so they can be compared with cohort benchmarks, and every dimension is reported separately rather than averaged into one verdict.",
  },
  {
    q: "Why are there three different editions?",
    a: "Because the same measurement would be meaningless across the age range. Early years thinking is described qualitatively, school years introduce scored dimensions and benchmarking, and senior years add novelty and application testing.",
  },
  {
    q: "What does the application gap mean?",
    a: "It is the distance between what a learner knows and what they can do with it under unfamiliar conditions. A wide gap points to practice that has been rehearsal-heavy, and is closed with different work rather than more of the same.",
  },
  {
    q: "How should a parent use the growth areas?",
    a: "As a stage, not a shortfall. Each growth area is paired with concrete actions in the report, and the recommended activities are chosen to target that exact pattern.",
  },
  {
    q: "Who else sees the report?",
    a: "Schools receive aggregated views for their cohort while individual reports stay with the learner and family. Nothing in the report is designed for public comparison.",
  },
  {
    q: "How often should a learner be reassessed?",
    a: "Annually is enough to see movement without turning assessment into a routine. Because the framework is continuous, the following year's report can be read directly against this one.",
  },
];

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left lg:px-5"
      >
        <span className="text-[12.5px] font-medium text-navy lg:text-[13.5px]">
          {q}
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 text-gold-dark transition-transform duration-300 ${
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
      <div
        className={`grid overflow-hidden px-4 transition-all duration-300 lg:px-5 ${
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <p className="min-h-0 overflow-hidden text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
          {a}
        </p>
      </div>
    </div>
  );
}

export function ReportFaq() {
  return (
    <section className="border-t border-slate-100 bg-[#f9fafc]">
      <div className="mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
        <Reveal>
          <SectionHead
            eyebrow="Questions Parents Ask"
            title="Reading the report with confidence"
            intro="A diagnostic report only helps if it is understood the way it was intended. These are the questions that come up most often."
          />
        </Reveal>

        <div className="mx-auto mt-9 grid max-w-5xl grid-cols-1 gap-3 lg:mt-12 lg:grid-cols-2 lg:gap-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 90}>
              <FaqRow q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
