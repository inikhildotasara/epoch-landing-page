import Link from "next/link";
import { Reveal } from "../Reveal";

export function EnquiryHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block xl:w-[44%]">
        <img
          src="/images/brain-booster/hero-children.jpg"
          alt="Young learners working together"
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#f7f4ee] to-transparent xl:w-36" />
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
            Assessments &amp; Learning Platforms
          </span>
        </nav>

        <div className="mt-8 lg:max-w-[56%] xl:max-w-[54%]">
          <Reveal className="hero-anim">
            <h1 className="font-serif text-[30px] font-semibold leading-[1.12] text-navy sm:text-[40px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]">
              Explore Our Assessments &amp; Learning Platforms
            </h1>
            <span
              aria-hidden
              className="mt-3 block h-[3px] w-20 rounded-full bg-gold sm:w-24"
            />
            <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[15px]">
              Assess to understand. Learn to grow. Empowering every child with
              the right insight today and the right skills for tomorrow.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-8 lg:hidden">
          <img
            src="/images/brain-booster/hero-children.jpg"
            alt="Young learners working together"
            className="aspect-[16/9] w-full rounded-xl object-cover object-[center_20%]"
          />
        </Reveal>
      </div>
    </section>
  );
}
