"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../olympiad/SectionHeading";
import { FaqAnswer, type FaqItem } from "../faq/FaqAnswer";

const faqs: FaqItem[] = [
  {
    q: "What is MY CCBee?",
    a: [
      "MY CCBee is a Performance Tracker & Booster Platform for Playgroup to Class 2 that connects parents, teachers and schools through one platform.",
      "It helps schools capture everyday activities and performance, build a continuous picture of each child's progress, identify areas requiring attention and take timely action.",
    ],
  },
  {
    q: "Who can use MY CCBee?",
    a: [
      "MY CCBee is designed for schools from Playgroup to Class 2, along with their teachers, school leadership and the parents of enrolled children.",
      "Each user gets a view designed around their role in the child's learning journey.",
    ],
  },
  {
    q: "What can schools track through MY CCBee?",
    a: [
      "Schools can track a wide range of everyday information, including:",
      [
        "Student performance & achievements",
        "Attendance",
        "Homework",
        "School activities",
        "Teacher performance",
        "Communication",
        "Leave & appointments",
        "Complaints & queries",
        "Events and engagement",
      ],
      "The platform brings this information together so schools can develop a clearer picture of daily performance and school activities.",
    ],
  },
  {
    q: "How does MY CCBee help schools understand performance?",
    a: [
      "MY CCBee follows a simple cycle: Capture → Track → Understand → Act.",
      "It helps schools record everyday information, monitor performance over time, identify patterns and areas requiring attention, and use those insights to take timely action.",
    ],
  },
  {
    q: "What can parents see on MY CCBee?",
    a: [
      "Parents can see their child's daily performance and achievements, homework, school updates and progress insights.",
      "They can also stay connected with teachers and receive relevant school communication through the platform.",
    ],
  },
  {
    q: "Who can access MY CCBee?",
    a: [
      "MY CCBee provides role-based views for parents, teachers and school leadership.",
      "Parents can follow their child's journey, teachers can record activities and monitor progress, and school leadership can view wider performance, activities and operational insights.",
    ],
  },
  {
    q: "Does MY CCBee support communication between school and parents?",
    a: [
      "Yes. MY CCBee brings important school-parent communication into one platform, including notices, reminders, homework updates, leave requests, appointments, complaints and queries.",
      "This helps reduce scattered communication and keeps relevant information connected to the child's school journey.",
    ],
  },
  {
    q: "Is MY CCBee only a reporting or tracking platform?",
    a: [
      "No. MY CCBee combines performance tracking with insights and performance-boosting tools.",
      "Its gamified tools and engaging activities are designed to encourage young learners to participate, practise and improve regularly.",
    ],
  },
  {
    q: "Can MY CCBee help schools monitor teacher performance?",
    a: [
      "Yes. School leadership can monitor teacher activity, productivity and classroom outcomes through the platform.",
      "This can help school leaders understand execution, identify areas requiring support and make more informed decisions.",
    ],
  },
  {
    q: "How can our school see MY CCBee in action?",
    a: [
      "Schools can Request a Demo to explore the platform and understand the parent, teacher and school leadership views.",
      "Our team can demonstrate how MY CCBee can fit into the school's existing processes and help plan its implementation.",
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
