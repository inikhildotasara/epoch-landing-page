import Link from "next/link";
import { Reveal } from "../Reveal";

export function BrainiacHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Photo bleeds to the right edge from lg up, with a white gradient so the
          copy stays readable where the two overlap */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block xl:w-[48%]">
        <img
          src="/images/brain-booster/hero-children.jpg"
          alt="Two young learners working through a Brainiac Global workbook"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent xl:w-36" />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pt-4 pb-10 lg:pb-14">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[11.5px] text-slate-500 lg:text-[12px]"
        >
          <Link href="/" className="transition-colors hover:text-navy">
            Home
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <Link href="/initiatives" className="transition-colors hover:text-navy">
            Our Initiatives
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <span className="font-semibold text-navy">Brainiac Global</span>
        </nav>

        <div className="mt-6 lg:max-w-[52%] xl:max-w-[50%]">
          <Reveal className="hero-anim">
            <h1 className="font-serif text-[30px] font-semibold leading-[1.08] text-navy sm:text-[40px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]">
              BRAINIAC GLOBAL
            </h1>
            <p className="mt-3 font-serif text-[19px] font-semibold leading-snug text-gold-dark sm:text-[22px] lg:text-[22px] xl:text-[26px]">
              Building Thinking Minds
              <br />
              from the Earliest Years
            </p>
            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
              An early-learning initiative designed to nurture curiosity,
              observation, reasoning, problem-solving and foundational thinking
              through engaging experiences and brain-boosting assessment.
            </p>
          </Reveal>
        </div>

        {/* Mobile / tablet stacked photo */}
        <Reveal delay={100} className="mt-8 lg:hidden">
          <img
            src="/images/brain-booster/hero-children.jpg"
            alt="Two young learners working through a Brainiac Global workbook"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
