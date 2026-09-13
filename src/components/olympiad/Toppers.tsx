"use client";

import { useRef } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../brainiac/SectionHeading";
import { ArrowRight, TrophyIcon } from "../icons";

const toppers = [
  {
    img: "/images/epoch-toppers/Manvendra Singh Sengar, Class 6, Genius Student of The Year, DPS Kalyanpur.png",
    name: "Manvendra Singh Sengar",
    grade: "Genius Student of The Year",
    school: ["Class 6", "DPS Kalyanpur"],
  },
  {
    img: "/images/epoch-toppers/Abhinav Gupta, Class 8 Aptitude Champion Mercy.png",
    name: "Abhinav Gupta",
    grade: "Aptitude Champion",
    school: ["Class 8", "Mercy Memorial School"],
  },
  {
    img: "/images/epoch-toppers/Ansu Priya, Class 2 Math Champion, MTM.png",
    name: "Ansu Priya",
    grade: "Math’s Champion",
    school: ["Class 2", "Mother Teresa Mission H. S. School"],
  },
  {
    img: "/images/epoch-toppers/Saubhagya Gupta, Class 2 ITST Champion SAJS.png",
    name: "Saubhagya Gupta",
    grade: "Science Champion",
    school: ["Class 2", "Seth Anandram Jaipuria School"],
  },
];

export function Toppers() {
  const toppersRef = useRef<HTMLDivElement>(null);

  const scrollToNextTopper = () => {
    toppersRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };

  const scrollToPreviousTopper = () => {
    toppersRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 pb-10 sm:px-6 md:px-12 lg:px-page lg:pb-14">
        <Reveal
          id="toppers"
          className="scroll-mt-9 rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 lg:px-10 lg:py-9"
        >
          <SectionHeading>Olympiad Toppers</SectionHeading>

          <div className="mt-7 grid grid-cols-1 gap-6 lg:mt-8 xl:grid-cols-[minmax(0,1fr)_232px] xl:gap-7">
            <div className="relative min-w-0">
              <div
                ref={toppersRef}
                className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-3"
              >
                {toppers.map((topper, i) => (
                  <Reveal
                    key={topper.name}
                    delay={i * 60}
                    className="min-w-[calc((100%-1rem)/2)] flex-none text-center sm:min-w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)] lg:min-w-0"
                  >
                    <img
                      src={topper.img}
                      alt={topper.name}
                      className="mx-auto aspect-[5/6] w-full max-w-[150px] rounded-xl bg-slate-50 object-cover"
                    />
                    <h3 className="mt-2.5 text-[12px] font-bold text-navy lg:text-[12.5px]">
                      {topper.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                      {topper.grade}
                      <br />
                      {topper.school[0]}
                      <br />
                      {topper.school[1]}
                    </p>
                  </Reveal>
                ))}
              </div>
              <button
                type="button"
                onClick={scrollToPreviousTopper}
                aria-label="Show previous Olympiad toppers"
                className="absolute left-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-navy shadow-sm transition hover:bg-navy hover:text-white"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={scrollToNextTopper}
                aria-label="Show more Olympiad toppers"
                className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-navy shadow-sm transition hover:bg-navy hover:text-white"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <Reveal
              delay={120}
              className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-[#fbfaff] px-5 py-6 text-center"
            >
              <TrophyIcon
                className="h-9 w-9"
                style={{ color: "#e8a013" }}
                strokeWidth={1.6}
              />
              <p className="font-serif text-[14px] font-semibold leading-snug text-navy lg:text-[15px]">
                Celebrating Olympiad Excellence!
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
