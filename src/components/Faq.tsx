"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { FaqAnswer, type FaqItem } from "./faq/FaqAnswer";

const faqs: FaqItem[] = [
  {
    q: "What is Epoch Olympiad Foundation?",
    a: [
      "Epoch Olympiad Foundation is an independent education research foundation focused on understanding how children think, learn and develop.",
      "Our research explores cognitive abilities, conceptual understanding, reasoning, problem-solving, learning patterns and academic development. This research informs the assessments, diagnostic frameworks, Academic Health Reports and learning initiatives developed through our ecosystem.",
    ],
  },
  {
    q: "What does Epoch Olympiad Foundation research?",
    a: [
      "We research how children's learning goes beyond memorising information. Our work focuses on areas such as cognitive intelligence, reasoning, conceptual understanding, problem-solving, knowledge application, learning readiness and academic development.",
      "The purpose is to understand not only what a child knows, but how the child thinks and applies what they know.",
    ],
  },
  {
    q: "How is Epoch Olympiad Foundation different from a conventional Olympiad organisation?",
    a: [
      "A conventional Olympiad may primarily focus on competition, scores and rankings. Epoch Olympiad Foundation takes a broader research-driven approach.",
      "Our framework aims to use assessment as a way to understand learning, identify strengths and growth areas, and generate meaningful insights for students, parents and schools.",
      "Assessment is not the destination; understanding the learner is.",
    ],
  },
  {
    q: "What is the relationship between Epoch Olympiad Foundation and its initiatives?",
    a: [
      "Epoch Olympiad Foundation is the research foundation. Its research and frameworks are translated into practical educational initiatives.",
      "These currently include:",
      [
        "Brainiac Global — early-years cognitive development and assessment",
        "Epoch Olympiad — international assessments and future-focused learning platforms",
        "MY CCBee — performance tracking, diagnostic insights and continuous improvement",
      ],
      "Together, they represent one connected approach: research → assessment → insight → improvement.",
    ],
  },
  {
    q: "What is cognitive intelligence, and why does it matter in education?",
    a: [
      "Cognitive intelligence relates to how a learner observes, understands, reasons, connects ideas, solves problems and applies knowledge.",
      "It matters because academic marks alone may not reveal the complete picture of how a child thinks and learns.",
      "Our research therefore looks beyond recall and considers the thinking abilities that support deeper learning and future readiness.",
    ],
  },
  {
    q: "What is an Academic Health Report?",
    a: [
      "An Academic Health Report is a diagnostic view of a learner's academic and cognitive development.",
      "Instead of presenting only marks or ranks, it helps reveal areas such as conceptual understanding, reasoning, problem-solving, thinking abilities, strengths and growth areas.",
      "It is designed to turn assessment results into information that parents and educators can understand and use.",
    ],
  },
  {
    q: "Who benefits from the Foundation's research?",
    a: [
      "The Foundation's work is designed to create value for the wider education ecosystem:",
      [
        "Students — understand their strengths and areas for growth.",
        "Parents — gain clearer insights into how their child learns.",
        "Schools and educators — receive meaningful information to support learning and improvement.",
        "Researchers and academic leaders — contribute perspectives that help advance educational assessment and practice.",
      ],
    ],
  },
  {
    q: "How can a school, educator, researcher or organisation work with Epoch Olympiad Foundation?",
    a: [
      "There are multiple ways to engage with the Foundation, depending on the nature of the organisation and its objectives.",
      "Schools can participate in our educational initiatives, while educators, academic leaders, researchers, institutions, organisations and potential partners may explore opportunities for academic collaboration, research, innovation, outreach and educational development.",
      "Explore:",
      {
        links: [
          { label: "Register Your School", href: "/register-your-school" },
          { label: "Become an Advisor", href: "/become-an-advisor" },
          { label: "Partner With Us", href: "/partner-with-us" },
        ],
      },
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
        <FaqAnswer
          blocks={a}
          textClass="text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px] xl:text-[14.5px]"
        />
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
