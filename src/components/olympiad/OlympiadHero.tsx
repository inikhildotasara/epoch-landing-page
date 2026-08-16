import Link from "next/link";
import { Reveal } from "../Reveal";
import { BulbIcon, FlaskIcon, TargetIcon, UserIcon } from "../icons";

const badges = [
  { icon: FlaskIcon, label: "Research-Driven" },
  { icon: TargetIcon, label: "Insight-Oriented" },
  { icon: BulbIcon, label: "Future-Ready" },
  { icon: UserIcon, label: "Student-Centric" },
];

export function OlympiadHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Photo bleeds to the right edge from lg up, with a white gradient so the
          copy stays readable where the two overlap */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block xl:w-[46%]">
        <img
          src="/images/initiatives-hero.png"
          alt="Students working through an Epoch Olympiad paper"
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
          <span className="font-semibold text-navy">Epoch Olympiad</span>
        </nav>

        <div className="mt-6 lg:max-w-[56%] xl:max-w-[54%]">
          <Reveal className="hero-anim">
            <h1 className="font-serif text-[30px] font-semibold leading-[1.08] text-navy sm:text-[40px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]">
              EPOCH OLYMPIAD
            </h1>
            <p className="mt-3 font-serif text-[16px] font-semibold leading-snug text-navy lg:text-[17px] xl:text-[19px]">
              International Olympiads &amp;
              <br className="hidden sm:block" /> Future-Ready Learning Platforms
              for Classes 1–10
            </p>
            <p className="mt-3 text-[13px] font-semibold text-gold-dark lg:text-[14px]">
              Assessing Knowledge. Developing Thinking. Preparing for the Future.
            </p>
            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
              Epoch brings together subject-focused International Olympiads and
              innovative learning platforms designed to move students beyond rote
              learning toward conceptual understanding, reasoning, application and
              real-world intelligence.
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
            src="/images/initiatives-hero.png"
            alt="Students working through an Epoch Olympiad paper"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
