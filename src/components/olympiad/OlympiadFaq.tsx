"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import { FaqAnswer, type FaqItem } from "../faq/FaqAnswer";

const faqs: FaqItem[] = [
  {
    q: "What is Epoch Olympiad?",
    a: [
      "Epoch Olympiad is an educational initiative of Epoch Olympiad Foundation offering international assessments and future-focused learning initiatives for students from kindergarten to Class 10.",
      "Its ecosystem combines subject-based assessment with broader learning experiences designed to encourage conceptual understanding, reasoning, application, holistic thinking and future readiness.",
    ],
  },
  {
    q: "What assessments are offered under Epoch Olympiad?",
    a: [
      "Epoch Olympiad currently offers four subject-based assessments:",
      [
        "IMO — International Mathematics Olympiad",
        "ITST — International Test of Science and Technology",
        "IAO — International Aptitude Olympiad",
        "IGKO — International General Knowledge Olympiad",
      ],
      "Each assessment focuses on a different area of learning and development.",
      "Detailed syllabus, pattern and preparation information is available in our Genie App.",
    ],
  },
  {
    q: "Are IHOST and IFLY also examinations?",
    a: [
      "No.",
      "IHOST — International Holistic Olympiad for Smart Thinkers is a learning platform built around the “Balanced Diet for the Brain” approach, bringing together Mathematics, Science, Aptitude and General Knowledge.",
      "IFLY — International Future Literacy for Young Leaders is a future-focused learning initiative designed to develop awareness of finance and digital literacy.",
      "Both initiatives extend Epoch Olympiad beyond conventional examination-based learning.",
    ],
  },
  {
    q: "Who can participate in Epoch Olympiad?",
    a: [
      "Epoch Olympiad is designed for students across the school years, with age- and class-appropriate programmes.",
      "The current ecosystem serves learners from Class 1 to 10, while eligibility may vary by individual assessment or learning initiative.",
      "For each assessment, the specific eligibility information is provided with its programme details.",
    ],
  },
  {
    q: "What is the criteria for Mains in Epoch Olympiad?",
    a: [
      "For assessments that have a Pre and Mains structure, the top 10% of participating students in the Pre examination are selected for the Mains (Advance Level), according to the applicable assessment criteria.",
      "IGKO is a single-level examination and therefore does not follow the Pre–Mains structure.",
      "Detailed examination patterns and marking schemes are available in our Genie App.",
    ],
  },
  {
    q: "How are Epoch Olympiad assessments different from conventional exams?",
    a: [
      "Epoch Olympiad assessments are designed to look beyond simple recall and explore areas such as conceptual understanding, reasoning, application, problem-solving and subject-specific thinking.",
      "The objective is not only to determine how many questions a student can answer correctly, but to create meaningful insight into how the student understands and applies knowledge.",
    ],
  },
  {
    q: "How can students prepare for Epoch Olympiad?",
    a: [
      "Students can prepare using the workbooks, syllabus, sample papers, previous-year papers, marking schemes and other preparatory resources provided in our Genie App.",
      "The Genie App is planned to bring these resources together so students can access important preparation and assessment information in one place.",
      "Preparation should focus on understanding concepts, practising application and developing thinking skills, rather than relying only on memorisation.",
    ],
  },
  {
    q: "What awards, scholarships and recognition are available?",
    a: [
      "Epoch Olympiad provides opportunities for recognition at Pre and Mains levels, wherever the assessment has both levels.",
      "Recognition may be awarded at multiple levels, including:",
      ["International", "National", "Zone", "School", "Class"],
      "Scholarships and specific award criteria may vary by programme and published guidelines.",
      "Detailed information about awards, scholarships, eligibility, marking schemes and recognition are available through the Genie App and relevant programme information.",
    ],
  },
  {
    q: "What is the difference between Pre Exam and Mains?",
    a: [
      "The Pre Exam assesses conceptual understanding and reasoning for every participant. The Mains (Advance Level) is an advanced round for the top 10% of participants in IMO, ITST and IAO.",
    ],
  },
  {
    q: "Can a student participate in more than one Olympiad?",
    a: [
      "Yes. A student may appear for any combination of Olympiads they are eligible for, and can also join the IHOST and IFLY learning platforms.",
    ],
  },
  {
    q: "Is there any negative marking in Epoch exams?",
    a: [
      "No. There is no negative marking in any Epoch Olympiad, at either the Pre or the Mains level.",
    ],
  },
  {
    q: "Where can I check the results and detailed performance report?",
    a: [
      "Results and the Academic Health Report are published in the Genie App, where schools and parents can review performance in detail.",
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
