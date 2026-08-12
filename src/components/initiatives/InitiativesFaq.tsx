"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { GradCapIcon } from "../icons";

const faqs = [
  {
    q: "How do these initiatives work together?",
    a: "Brainiac Global, Epoch Olympiad and MY CCBee form one connected journey—from early thinking to assessment to continuous growth.",
  },
  {
    q: "Who can participate in these assessments?",
    a: "Learners from kindergarten through school, with age-appropriate assessments designed for each stage of development.",
  },
  {
    q: "What makes these assessments different?",
    a: "We measure understanding and reasoning rather than rote memory, translating results into meaningful, actionable insights.",
  },
  {
    q: "What is the Academic Health Report?",
    a: "A diagnostic report that goes beyond marks to reveal how a learner thinks, where they excel and where they can grow.",
  },
  {
    q: "How are results evaluated and benchmarked?",
    a: "Responses are analysed against research-driven frameworks and international benchmarks for a fair, comprehensive view.",
  },
  {
    q: "How does MY CCBee help schools?",
    a: "It converts assessment data into dashboards, progress tracking and booster resources for continuous improvement.",
  },
];

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/12 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
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
        <p className="min-h-0 overflow-hidden text-[12.5px] leading-relaxed text-slate-300">
          {a}
        </p>
      </div>
    </div>
  );
}

export function InitiativesFaq() {
  return (
    <section className="bg-navy" style={{ backgroundColor: "#0b1c3f" }}>
      <div className="mx-auto grid w-full grid-cols-1 items-start gap-10 px-4 py-14 sm:px-6 md:px-12 lg:grid-cols-[1.7fr_1fr] lg:gap-14 lg:px-28 lg:py-16 xl:px-40">
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
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {faqs.map((f) => (
              <FaqRow key={f.q} q={f.q} a={f.a} />
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
