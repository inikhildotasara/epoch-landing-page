"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Who can participate in Epoch Olympiad?",
    a: "Students of Classes 1 to 10 can participate through their school. Schools register with the Foundation and then enrol their students for the selected Olympiads or learning platforms.",
  },
  {
    q: "Is IGKO also conducted in two levels?",
    a: "No. IGKO is a single-level International Olympiad, so there is no separate Mains examination for it.",
  },
  {
    q: "What is the difference between Pre Exam and Mains?",
    a: "The Pre Exam assesses conceptual understanding and reasoning for every participant. The Mains (Advance Level) is an advanced round for the top 10% of participants in IMO, ITST and IAO.",
  },
  {
    q: "Can a student participate in more than one Olympiad?",
    a: "Yes. A student may appear for any combination of Olympiads they are eligible for, and can also join the IHOST and IFLY learning platforms.",
  },
  {
    q: "How are students selected for Mains (Advance Level)?",
    a: "Selection is purely performance based. The top 10% of participating students in the Pre Exam qualify for the Mains in IMO, ITST and IAO.",
  },
  {
    q: "Where are the exams conducted?",
    a: "All examinations are conducted offline at the student's own school on the scheduled date, so there is no separate exam centre to travel to.",
  },
  {
    q: "Is there any negative marking in Epoch exams?",
    a: "No. There is no negative marking in any Epoch Olympiad, at either the Pre or the Mains level.",
  },
  {
    q: "How can I prepare for the Olympiads and learning platforms?",
    a: "Detailed syllabus, marking scheme, sample papers, previous year papers and level-wise resources are available in the Genie App along with the official school workbooks.",
  },
  {
    q: "How many questions will be asked?",
    a: "Classes 1 to 4 answer 30 objective questions and Classes 5 to 10 answer 35, in 60 minutes. IGKO has 35 questions across all classes.",
  },
  {
    q: "Where can I check the results and detailed information?",
    a: "Results and the Academic Health Report are published in the Genie App, where schools and parents can review performance in detail.",
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

const half = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, half), faqs.slice(half)];

export function OlympiadFaq() {
  // Single open row at a time, so the two columns never jump around together.
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
