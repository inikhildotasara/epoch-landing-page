import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";

export function BrainiacHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 75% at 88% 0%, #f4f8fd 0%, rgba(244,248,253,0) 62%), radial-gradient(65% 65% at 0% 100%, #fdf6e7 0%, rgba(253,246,231,0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full px-4 pt-4 pb-10 sm:px-6 md:px-12 lg:px-page lg:pb-14">
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

        <div className="mt-6 grid items-center gap-8 lg:mt-7 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-9 xl:gap-12">
          <Reveal className="hero-anim">
            <h1 className="font-serif text-[30px] font-semibold leading-[1.08] text-navy sm:text-[40px] lg:text-[32px] xl:text-[40px] 2xl:text-[46px]">
              BRAINIAC GLOBAL
            </h1>
            <p className="mt-3 font-serif text-[19px] font-semibold leading-snug text-gold-dark sm:text-[22px] lg:text-[19px] xl:text-[23px] 2xl:text-[26px]">
              Building Thinking Minds
              <br />
              from the Earliest Years
            </p>

            <span className="mt-4 flex items-center gap-2 lg:mt-5" aria-hidden>
              <span className="h-px w-8 bg-gold" />
              <span className="h-[7px] w-[7px] rotate-45 bg-gold" />
              <span className="h-px w-16 bg-gold/40" />
            </span>

            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:mt-5 lg:text-[14px]">
              An early-learning initiative designed to nurture curiosity,
              observation, reasoning, problem-solving and foundational thinking
              through engaging experiences and brain-boosting assessment.
            </p>
          </Reveal>

          {/* The artwork is a self-contained banner (labelled icons plus a
              feature strip), so it is shown whole at its natural 3:2 ratio
              rather than cropped, and never scaled past its native 1024px.
              Beyond ~2200px the column outgrows that cap, so the image stays
              pinned to the page gutter rather than drifting inwards. */}
          <Reveal delay={100} className="hero-fade">
            <Image
              src="/images/brain-booster/brainiac-hero.jpg"
              width={1024}
              height={682}
              sizes="(min-width: 1536px) 900px, (min-width: 1024px) 55vw, (min-width: 768px) 100vw, 100vw"
              quality={90}
              priority
              alt="A young learner thinking beside building blocks and a Brainiac Global workbook, with the programme's five focus areas: curiosity, observation, reasoning, problem-solving and foundational thinking"
              className="mx-auto block h-auto w-full max-w-[1024px] rounded-xl ring-1 ring-navy/10 shadow-[0_26px_60px_-40px_rgba(11,28,63,0.6)] lg:mr-0 lg:ml-auto lg:rounded-2xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
