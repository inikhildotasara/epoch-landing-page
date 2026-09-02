import Image from "next/image";
import Link from "next/link";

export function EnquiryHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee]">
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

        <div className="mt-6 grid items-center gap-8 lg:mt-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <h1 className="font-serif font-semibold leading-[1.08] text-navy">
              <span className="block text-[36px] sm:text-[48px] lg:text-[46px] xl:text-[54px] 2xl:text-[60px]">
                Explore Our
              </span>
              <span className="mt-1 block text-[24px] sm:text-[32px] lg:text-[30px] xl:text-[36px] 2xl:text-[40px]">
                Assessments &amp; Learning Platforms
              </span>
            </h1>
            <span
              aria-hidden
              className="mt-3 block h-[3px] w-20 rounded-full bg-gold sm:w-24"
            />
            <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[15px]">
              Assess to understand. Learn to grow. Empowering every child with
              the right insight today and the right skills for tomorrow.
            </p>
          </div>

          <Image
            src="/images/brain-booster/brainiac-hero.jpg"
            width={1024}
            height={682}
            sizes="(min-width: 1024px) 50vw, 100vw"
            quality={90}
            priority
            alt="A young learner thinking beside building blocks and a Brainiac Global workbook, with the programme's five focus areas: curiosity, observation, reasoning, problem-solving and foundational thinking"
            className="mx-auto block h-auto w-full max-w-[1024px] rounded-xl object-cover ring-1 ring-navy/10 shadow-[0_26px_60px_-40px_rgba(11,28,63,0.6)] lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
