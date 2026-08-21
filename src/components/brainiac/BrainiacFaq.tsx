"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import { FaqAnswer, type FaqItem } from "../faq/FaqAnswer";

const faqs: FaqItem[] = [
  {
    q: "What is Brainiac Global?",
    a: [
      "Brainiac Global is an early-learning initiative designed to nurture curiosity, observation, reasoning, problem-solving and foundational thinking during the formative years.",
      "It combines joyful, age-appropriate experiences with meaningful assessment to help children develop the habit of thinking, exploring and discovering, rather than relying only on memorisation.",
    ],
  },
  {
    q: "What does Brainiac Global offer young learners?",
    a: [
      "Brainiac Global brings together assessment and future-focused learning initiatives like IFLY (International Finance & Digital Literacy Olympiad for Young Leaders) and IHOST (International Holistic Olympiad for Smart Thinkers) for kindergarten learners.",
      "Its ecosystem is designed to help children:",
      [
        "build foundational thinking abilities,",
        "explore through engaging experiences,",
        "understand how they think and learn, and",
        "develop curiosity and confidence for future learning.",
      ],
    ],
  },
  {
    q: "Does Brainiac Global only focus on assessment?",
    a: [
      "No. Assessment is one part of the Brainiac Global ecosystem. The broader vision is to combine understanding with learning.",
      "The International Brain Booster Olympiad helps understand a child's foundational thinking abilities and learning readiness, while future-focused learning platforms like IFLY and IHOST will provide engaging experiences that encourage curiosity, exploration, financial awareness, digital awareness and other skills needed for tomorrow.",
    ],
  },
  {
    q: "What is IFLY?",
    a: [
      "IFLY is an upcoming future-focused learning platform designed to introduce young learners to age-appropriate financial and digital literacy concepts.",
    ],
  },
  {
    q: "What awards and recognition are available?",
    a: [
      "Brainiac Global provides opportunities for young learners to be recognised through:",
      [
        "Olympiad Awards for outstanding performance,",
        "Scholarships for eligible high-performing learners according to published criteria, and",
        "Special Recognition for notable achievements and exceptional performance.",
        "Trophies and Medals at International/National/Zonal/Class level.",
        "Surprise Gifts for every participant.",
      ],
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
        <FaqAnswer
          blocks={a}
          textClass="text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]"
        />
      </div>
    </div>
  );
}

const half = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, half), faqs.slice(half)];

export function BrainiacFaq() {
  // Single open row at a time, so the two columns never jump around together.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-4 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-12">
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
