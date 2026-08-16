"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../olympiad/SectionHeading";

const faqs = [
  {
    q: "Who can use MY CCBee?",
    a: "Schools from Playgroup to Class 2 can use MY CCBee, along with their teachers and the parents of every enrolled child.",
  },
  {
    q: "Can schools track activities?",
    a: "Yes. Daily activities, participation, attendance, homework, events and school-wide programmes are all recorded and visible in one place.",
  },
  {
    q: "Who can access the platform?",
    a: "Parents, teachers and school leadership each get their own view. Everyone sees the same child's journey from the perspective relevant to them.",
  },
  {
    q: "Does MY CCBee support communication?",
    a: "Yes. Notices, reminders, homework updates, leave requests, appointments and queries move between school and parents inside the platform.",
  },
  {
    q: "What can parents see?",
    a: "Parents see their child's daily performance and achievements, homework and school updates, and clear insights into how progress is building over time.",
  },
  {
    q: "Is MY CCBee only a reporting platform?",
    a: "No. Alongside tracking, MY CCBee includes gamified tools and engaging activities that motivate young learners to practise and improve every day.",
  },
  {
    q: "Can schools track teacher performance?",
    a: "Yes. School leadership can monitor teacher activity, productivity and classroom outcomes to support them where it matters most.",
  },
  {
    q: "How can our school see the platform?",
    a: "Request a demo and our team will walk your school through the parent, teacher and leadership views, and help you plan the rollout.",
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
    <div className="border-b border-slate-200">
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

const half = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, half), faqs.slice(half)];

export function CCBeeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-4 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </Reveal>

        {/* Two independent stacks rather than a 2-col grid: an open answer then
            only pushes the rows under it, instead of stretching its row. */}
        <div className="mt-6 grid grid-cols-1 items-start gap-x-10 lg:mt-8 lg:grid-cols-2">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col">
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
      </div>
    </section>
  );
}
