"use client";

import { useState } from "react";
import { DocIcon } from "../icons";
import { FaqAnswer, type FaqItem } from "../faq/FaqAnswer";

const faqs: FaqItem[] = [
  {
    q: "What is the International Brain Booster Olympiad?",
    a: [
      "The International Brain Booster Olympiad is a joyful, age-appropriate cognitive assessment for kindergarten and eligible early learners.",
      "It explores how children observe, recognise patterns, connect ideas, reason and approach simple problems.",
      "The assessment is designed to understand thinking and learning readiness—not simply how much information a child can remember.",
    ],
  },
  {
    q: "What skills does the Brain Booster Olympiad assess?",
    a: [
      "The assessment focuses on foundational thinking abilities such as:",
      [
        "Observation",
        "Pattern Recognition",
        "Connecting Ideas",
        "Reasoning",
        "Early Problem-Solving",
      ],
      "These are important foundations that develop before and alongside formal academic learning.",
    ],
  },
  {
    q: "Is the Brain Booster Olympiad based on a school textbook syllabus?",
    a: [
      "No. The assessment is not tied to a particular textbook. It uses age-appropriate situations involving colours, shapes and familiar everyday objects to understand how young children observe, recognise, connect and reason.",
    ],
  },
  {
    q: "Is the Brain Booster Olympiad suitable for young children?",
    a: [
      "Yes. It is designed specifically for kindergarten and eligible early learners and is conducted offline using paper and crayon colours in a familiar school environment.",
      "The experience is designed to be child-friendly and age-appropriate rather than stressful or dependent on advanced academic preparation.",
    ],
  },
  {
    q: "How can my child participate in International Brain Booster Olympiad?",
    a: [
      "The International Brain Booster Olympiad is conducted through participating schools.",
      "The usual process is:",
      [
        "Register through your school.",
        "Complete the parent consent form available at the school.",
        "Submit the examination fee and consent form to the class teacher.",
        "Receive the coloured workbook and access to the Genie App.",
        "Appear for the assessment in a friendly school environment.",
      ],
    ],
  },
  {
    q: "How should my child prepare for the Brain Booster Olympiad?",
    a: [
      "No intensive coaching is required. Children can prepare naturally by:",
      [
        "playing observation and thinking games,",
        "using the engaging coloured workbook,",
        "exploring patterns through colours, shapes and everyday objects,",
        "practising sample and previous-year papers through the Genie App, and",
        "being encouraged to ask “why?”, “how?” and “what if?” questions.",
      ],
      "The aim is to encourage thinking—not drilling.",
    ],
  },
  {
    q: "What does a child receive after the assessment?",
    a: [
      "The child receives Awards, Prizes, Scholarship, Surprise Gift as per their performance and an Academic Health Report with parent-friendly insights into their thinking abilities and learning readiness.",
      "The report is designed to help parents and educators understand the child's strengths and areas that may benefit from further development, rather than looking only at marks or a rank.",
    ],
  },
  {
    q: "Does my child need coaching to participate?",
    a: [
      "No. The Brain Booster Olympiad is designed to understand how a child thinks, rather than how extensively the child has been coached or drilled.",
      "Parents can support their child simply by encouraging observation, curiosity, conversation, exploration and “why/how/what-if” thinking in everyday situations. Colour workbook and sufficient study materials are already available in our Genie App.",
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
        <FaqAnswer
          blocks={a}
          textClass="text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]"
        />
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
