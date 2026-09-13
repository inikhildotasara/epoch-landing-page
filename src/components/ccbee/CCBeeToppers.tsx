"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../olympiad/SectionHeading";
import { ArrowRight, TrophyIcon } from "../icons";

const toppers = [
  { img: "/images/ccbee-toppers/CCB1.jpg", alt: "MY CCBee star performer" },
  { img: "/images/ccbee-toppers/CCB2.jpg", alt: "MY CCBee star performer" },
  { img: "/images/ccbee-toppers/CCB3.jpg", alt: "MY CCBee star performer" },
  { img: "/images/ccbee-toppers/CCB4.jpg", alt: "MY CCBee star performer" },
  { img: "/images/ccbee-toppers/CCB5.jpg", alt: "MY CCBee star performer" },
];

export function CCBeeToppers() {
  const toppersRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = toppersRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const gap = 16;
    const amount = card ? card.offsetWidth + gap : 260;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 pb-10 sm:px-6 md:px-12 lg:px-page lg:pb-14">
        <Reveal
          id="ccbee-toppers"
          className="scroll-mt-9 rounded-2xl border border-[#e0759f]/70 bg-white px-5 py-7 sm:px-8 lg:px-10 lg:py-9"
        >
          <SectionHeading>Star Performing CCBee</SectionHeading>

          <div className="mt-7 grid grid-cols-1 gap-6 lg:mt-8 xl:grid-cols-[minmax(0,1fr)_232px] xl:gap-7">
            <div className="relative min-w-0">
              <div
                ref={toppersRef}
                className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-3"
              >
                {toppers.map((topper, i) => (
                  <Reveal
                    key={topper.img}
                    delay={i * 60}
                    className="w-[264px] min-w-[264px] flex-none"
                  >
                    <Image
                      src={topper.img}
                      alt={topper.alt}
                      width={264}
                      height={422}
                      sizes="264px"
                      className="mx-auto h-[422px] w-full overflow-hidden rounded-2xl bg-[#fffaf4] object-cover"
                    />
                  </Reveal>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Show previous CCBee toppers"
                className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-navy shadow-sm transition hover:bg-navy hover:text-white"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Show more CCBee toppers"
                className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-navy shadow-sm transition hover:bg-navy hover:text-white"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <Reveal
              delay={120}
              className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-[#fffaf4] px-5 py-6 text-center"
            >
              <TrophyIcon
                className="h-9 w-9"
                style={{ color: "#e8a013" }}
                strokeWidth={1.6}
              />
              <p className="font-serif text-[14px] font-semibold leading-snug text-navy lg:text-[15px]">
                Celebrating young CCBee stars!
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
