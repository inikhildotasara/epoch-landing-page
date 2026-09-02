"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHead } from "./ui";

const faqs = [
  {
    q: "What is an Academic Health Report?",
    a: "An Academic Health Report is a diagnostic report designed to help parents and educators understand how a child learns—not just how many marks they scored. It brings together performance across relevant cognitive and academic dimensions, identifies strengths and growth areas, provides meaningful benchmarks where applicable, and suggests what may help the learner next.",
  },
  {
    q: "How is an Academic Health Report different from a report card or rank card?",
    a: "A traditional report card mainly communicates academic performance. The Academic Health Report goes further by examining different dimensions of learning and thinking. Depending on the learner's stage, it may show understanding, reasoning, problem-solving, application and other relevant dimensions. It is designed for insight and growth, not simply ranking.",
  },
  {
    q: "Why are there three different editions of the Academic Health Report?",
    a: "Children develop and learn differently at different ages. The Academic Health Report therefore has three age-tuned editions: Early Years, School Years and Senior Years. The framework remains connected, but the way learning and thinking are described becomes more advanced as the learner grows.",
  },
  {
    q: "What does the Academic Health Report actually measure?",
    a: "The dimensions depend on the learner's stage. They can include areas such as observation, pattern recognition and learning readiness in the Early Years; conceptual understanding, logical reasoning, problem-solving, visual-spatial thinking, analytical thinking and knowledge application during the School Years; and more advanced dimensions such as conceptual reasoning, scientific inquiry and multidisciplinary thinking in the Senior Years.",
  },
  {
    q: "What do the benchmarks in the report mean?",
    a: "For editions that use scored benchmarking, a learner's performance can be read alongside relevant school, national and international cohorts. This provides context to the score instead of treating the number in isolation. The Early Years edition uses qualitative developmental descriptions rather than rank or percentile.",
  },
  {
    q: "What do “Strengths” and “Growth Areas” mean?",
    a: "Strengths show abilities that are developing well. Growth areas identify abilities that are still developing and may benefit from further practice or experience. They are not labels of failure. The report connects these areas with practical suggestions that parents and educators can use.",
  },
  {
    q: "How should parents use the Academic Health Report?",
    a: "Use it as a guide for understanding and supporting your child's learning—not as a comparison tool. Read the strengths, growth areas and recommended next steps together. Discuss the insights with the child and, where appropriate, with the teacher so that everyday learning experiences can respond to what the report reveals.",
  },
  {
    q: "How often should a child receive an Academic Health Report?",
    a: "Each report provides a current-year view of the learner's strengths, growth areas and learning profile.",
  },
  {
    q: "Who can see my child's Academic Health Report?",
    a: "Individual reports are intended for the learner and family, while schools receive aggregated views of their participating cohort. The report is designed to support learning and development rather than public comparison.",
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
    <div className="rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
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

const half = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, half), faqs.slice(half)];

export function ReportFaq() {
  // Single open row at a time, so the two columns never jump around together.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

        {/* Two independent stacks rather than a 2-col grid: an open answer then
            only pushes the cards under it, instead of stretching its row. */}
        <div className="mx-auto mt-9 grid max-w-5xl grid-cols-1 items-start gap-3 lg:mt-12 lg:grid-cols-2 lg:gap-4">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3 lg:gap-4">
              {col.map((f, ri) => {
                const i = ci * half + ri;
                return (
                  <Reveal key={f.q} delay={ci * 90}>
                    <FaqRow
                      q={f.q}
                      a={f.a}
                      open={openIndex === i}
                      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
