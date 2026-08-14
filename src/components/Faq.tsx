"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is Epoch Olympiad Foundation?",
    a: "An independent education research foundation working on how children's cognitive abilities are measured, nurtured and benchmarked. Our research feeds directly into the assessments, analytics and reports we build for schools.",
  },
  {
    q: "Who can participate in Epoch assessments?",
    a: "Learners from kindergarten through Class 10. Brainiac Global covers the early years, while the Epoch Olympiads run across Classes 1 to 10, with each stage assessed in an age-appropriate way.",
  },
  {
    q: "How is this different from a regular olympiad?",
    a: "A conventional olympiad ends at a rank. Ours is designed to reveal how a learner thinks—conceptual understanding, reasoning and application—and every participant receives a diagnostic report rather than only a score.",
  },
  {
    q: "What is the Academic Health Report?",
    a: "A 360° view of a learner's academic well-being. It looks beyond marks at concept mastery, problem-solving, thinking abilities and growth areas, and benchmarks them internationally.",
  },
  {
    q: "How can a school partner with the Foundation?",
    a: "Schools can register directly with us to run the assessments on their own campus. We handle the assessment framework, evaluation and reporting, and share aggregated cohort insights with the school.",
  },
  {
    q: "Are the assessments aligned to our curriculum?",
    a: "Yes. Our curriculum mapping work keeps the assessments consistent with what learners are taught, so the results reflect genuine understanding of their syllabus rather than unfamiliar material.",
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
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left lg:px-5 lg:py-5"
      >
        <span className="text-[13px] font-medium text-navy lg:text-[14.5px] xl:text-[15px]">
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
      {/* grid-rows 0fr→1fr animates the panel open without a hard-coded height */}
      <div
        className={`grid overflow-hidden px-4 transition-all duration-300 lg:px-5 ${
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <p className="min-h-0 overflow-hidden text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px] xl:text-[14.5px]">
          {a}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  // Single open row at a time, so the list never grows into a wall of text.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-14 lg:py-20 xl:py-24">
        <Reveal className="text-center">
          <p className="text-[11px] lg:text-[12px] font-semibold tracking-[0.2em] text-gold-dark">
            FREQUENTLY ASKED
          </p>
          <h2 className="mt-2 font-serif text-fluid-1 font-medium text-navy">
            Questions, Answered
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] lg:text-[16px] xl:text-[18px] text-slate-500">
            What schools and parents most often ask about our research,
            assessments and reports.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 lg:mt-12 flex max-w-3xl flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <FaqRow
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
