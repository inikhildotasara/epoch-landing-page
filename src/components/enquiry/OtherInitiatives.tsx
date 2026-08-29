"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeftIcon, ChevronRightIcon } from "../icons";
import {
  enquiryPrograms,
  type EnquiryProgram,
  type ProgramId,
} from "@/content/enquiry/programs";

export function OtherInitiatives({
  selectedId,
  onSelect,
}: {
  selectedId: ProgramId;
  onSelect: (id: ProgramId) => void;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const others = enquiryPrograms.filter((p) => p.id !== selectedId);

  function scroll(dir: -1 | 1) {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  }

  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/70 sm:w-12" />
            <h2 className="font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
              Explore Other Initiatives
            </h2>
            <span className="h-px w-8 bg-gold/70 sm:w-12" />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous initiatives"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:bg-slate-50"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next initiatives"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:bg-slate-50"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {others.map((p) => (
            <InitiativeCard key={p.id} program={p} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InitiativeCard({
  program,
  onSelect,
}: {
  program: EnquiryProgram;
  onSelect: (id: ProgramId) => void;
}) {
  const isLearn = program.group === "learn";

  return (
    <article className="flex w-[220px] shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-4">
      <img
        src={program.logo}
        alt=""
        className="h-16 w-16 object-contain"
      />
      <h3 className="mt-3 font-serif text-[20px] font-semibold text-navy">
        {program.code === "BB" ? "Brain Booster" : program.code}
      </h3>
      <p className="mt-1 text-[12px] font-medium leading-snug text-slate-600">
        {program.name}
      </p>
      <span
        className={`mt-3 w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-white ${
          isLearn ? "bg-[#1a8f5c]" : "bg-navy"
        }`}
      >
        {isLearn ? "Learning Platform" : "Assessment"}
      </span>
      <p className="mt-3 text-[12px] text-slate-500">{program.audience}</p>
      <button
        type="button"
        onClick={() => onSelect(program.id)}
        className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-navy transition-opacity hover:opacity-70"
      >
        Know More <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </article>
  );
}
