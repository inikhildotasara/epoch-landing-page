import { Reveal } from "../Reveal";

export function FounderMessage() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full grid-cols-1 gap-12 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1fr] md:gap-0 md:px-12 lg:px-24 lg:py-20 xl:px-32">
        {/* Left: photo + caption */}
        <Reveal className="relative flex flex-col items-start gap-5 md:pr-8 lg:pr-10 xl:flex-row xl:items-center xl:gap-6">
          <div className="relative shrink-0">
            <img
              src="/images/advisors/deepak-gupto.webp"
              alt="Mr. Deepak Gupto, Founder & Managing Director"
              className="aspect-[5/6] w-[190px] rounded-2xl object-cover object-top shadow-xl sm:w-[210px] lg:w-[230px]"
            />
          </div>
          <div className="relative z-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark lg:text-[13px]">
              Founder&apos;s Message
            </p>
            <p className="mt-2 font-serif text-[22px] font-semibold text-navy lg:text-[26px] xl:whitespace-nowrap">
              Mr. Deepak Gupto
            </p>
            <p className="mt-1 font-serif text-[14px] italic text-gold-dark lg:text-[16px]">
              Founder &amp; Managing Director
            </p>
            <p className="mt-2 text-[13px] font-semibold text-navy lg:text-[15px]">
              Epoch Olympiad Foundation
            </p>
            <span className="mt-4 block h-[2px] w-14 rounded-full bg-gold" />
          </div>

          {/* Decorative gold swirls, bottom-left */}
          <svg
            className="pointer-events-none absolute -bottom-2 left-0 hidden h-12 w-[62%] text-gold/55 md:block"
            viewBox="0 0 320 70"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 44C64 12 132 12 186 34s96 22 130 2"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M6 56C72 28 138 28 190 46s92 16 124 0"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M28 34C74 12 122 16 156 30"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </Reveal>

        {/* Right: quote with vertical divider */}
        <Reveal
          delay={120}
          className="flex flex-col justify-center md:border-l md:border-slate-200 md:pl-8 lg:pl-12"
        >
          <span className="block font-serif text-[64px] leading-[0.5] text-gold">
            &ldquo;
          </span>
          <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-slate-600 lg:text-[15.5px]">
            <p>
              When I began this journey, one question continued to challenge me:
              Are we measuring what children know, or are we understanding how
              they think? That question became the foundation of Epoch Olympiad
              Foundation.
            </p>
            <p>
              Our vision is not simply to conduct examinations but to redefine
              educational assessment through cognitive science, research, and
              innovation. We aspire to provide schools, educators, and parents
              with meaningful insights that help every child discover and
              develop their unique intellectual potential.
            </p>
            <p>
              The future belongs not to those who memorize the most, but to
              those who can think, adapt, and solve meaningful problems. Every
              initiative we undertake—from Epoch Olympiads to Brainiac Global and
              MY CCBee—is a step toward that future.
            </p>
            <p>
              I warmly invite educators, researchers, school leaders, and parents
              to join us in shaping a generation that learns with curiosity,
              thinks independently, and grows with confidence.
            </p>
          </div>
          <p className="mt-6 font-script text-[36px] leading-none text-navy lg:text-[42px]">
            Deepak Gupto
          </p>
        </Reveal>
      </div>
    </section>
  );
}
