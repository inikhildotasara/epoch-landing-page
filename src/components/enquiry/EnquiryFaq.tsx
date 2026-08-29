"use client";

import { useState } from "react";
import { FaqAnswer } from "../faq/FaqAnswer";
import type { EnquiryProgram } from "@/content/enquiry/programs";

function FaqRow({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: EnquiryProgram["faqs"][number]["a"];
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

export function EnquiryFaq({ program }: { program: EnquiryProgram }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-9 bg-white">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
        <h2 className="font-serif text-[16px] font-semibold text-navy lg:text-[18px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-[12px] text-slate-500 lg:text-[12.5px]">
          {program.name}
        </p>
        <div className="mt-3 flex flex-col">
          {program.faqs.map((f, i) => (
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
    </section>
  );
}
