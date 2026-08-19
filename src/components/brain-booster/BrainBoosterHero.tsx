import Link from "next/link";
import { Reveal } from "../Reveal";
import { BulbIcon, ChildFaceIcon, FlaskIcon, SproutIcon } from "../icons";

const badges = [
  { icon: FlaskIcon, label: "Research-Driven" },
  { icon: SproutIcon, label: "Age-Appropriate" },
  { icon: ChildFaceIcon, label: "Child-Friendly" },
  { icon: BulbIcon, label: "Insight-Oriented" },
];

export function BrainBoosterHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Photo bleeds to the right edge from lg up, with a white gradient so the
          copy stays readable where the two overlap */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block xl:w-[46%]">
        <img
          src="/images/brain-booster/hero-learners.jpg"
          alt="Two young learners working through a Brain Booster workbook"
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
          <Link
            href="/initiatives/brain-booster-olympiad"
            className="transition-colors hover:text-navy"
          >
            Brainiac Global
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <span className="font-semibold text-navy">
            International Brain Booster Olympiad
          </span>
        </nav>

        <div className="mt-6 lg:max-w-[56%] xl:max-w-[52%]">
          <Reveal className="hero-anim">
            <h1 className="font-serif text-navy">
              <span className="block text-[18px] font-semibold lg:text-[20px] xl:text-[22px]">
                International
              </span>
              <span className="mt-1 block text-[30px] font-semibold leading-[1.08] sm:text-[40px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]">
                Brain Booster Olympiad
              </span>
            </h1>
            <p className="mt-3 text-[14px] font-semibold text-gold-dark lg:text-[15px] xl:text-[16px]">
              Building Thinking Before Memorisation
            </p>
            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
              A joyful, age-appropriate cognitive assessment designed to
              understand how young learners observe, recognise patterns, connect
              ideas, reason and explore simple problems.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <li
                    key={b.label}
                    className="flex items-center gap-2 text-[12px] font-semibold text-navy lg:text-[12.5px]"
                  >
                    <Icon className="h-5 w-5 shrink-0" strokeWidth={1.7} />
                    {b.label}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* Mobile / tablet stacked photo */}
        <Reveal delay={100} className="mt-8 lg:hidden">
          <img
            src="/images/brain-booster/hero-learners.jpg"
            alt="Two young learners working through a Brain Booster workbook"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
