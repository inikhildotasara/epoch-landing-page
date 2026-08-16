import { Reveal } from "../Reveal";
import { AdvisorySectionHeading, OliveSprig } from "./decor";

export function AcademicLeadership() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 pt-10 pb-7 sm:px-6 md:px-12 lg:px-page lg:pt-14 lg:pb-9 2xl:pt-16 2xl:pb-11">
        <AdvisorySectionHeading label="Academic Leadership" />

        <Reveal className="mt-6 lg:mt-8">
          <article className="relative overflow-hidden rounded-xl border border-[#eee7d8] bg-white p-4 shadow-[0_2px_18px_-8px_rgba(11,28,63,0.12)] sm:p-5 lg:p-6 xl:p-7">
            {/* Only shown from lg up, where the card is wide enough for the
                watermark to sit clear of the copy. */}
            <OliveSprig className="pointer-events-none absolute right-2 top-1/2 hidden h-[124%] w-auto -translate-y-1/2 text-gold/20 lg:block" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:gap-6 lg:gap-8">
              <div className="w-full shrink-0 sm:w-[34%] sm:max-w-[280px]">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 ring-1 ring-black/5">
                  <img
                    src="/images/advisors/prof-ajai-shukla.webp"
                    alt="Prof. (Dr.) Ajai Shukla"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0 sm:pt-1">
                <h3 className="font-serif text-[22px] font-medium leading-tight text-navy sm:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px]">
                  Prof. (Dr.) Ajai Shukla
                </h3>
                <p className="mt-1.5 font-serif text-[15px] text-gold-dark lg:text-[17px] xl:text-[18px]">
                  Director of Education
                </p>
                <p className="mt-1.5 text-[13px] font-semibold text-navy lg:text-[14.5px] xl:text-[15px]">
                  Epoch Olympiad Foundation
                </p>
                <p className="mt-2.5 text-[11.5px] text-slate-500 lg:text-[12.5px]">
                  Former Research Scholar @IIT Kanpur &nbsp;•&nbsp; BITS Pilani
                  &nbsp;•&nbsp; University of Alberta, Edmonton, Canada
                </p>

                <span className="mt-4 block h-px w-full max-w-[560px] bg-slate-200 lg:mt-5" />

                <p className="mt-4 max-w-[72ch] text-[12.5px] leading-relaxed text-slate-600 lg:mt-5 lg:text-[13.5px] xl:text-[14px]">
                  Prof. (Dr.) Ajai Shukla provides academic leadership and
                  strategic guidance to the Foundation&apos;s educational and
                  assessment initiatives. His academic experience and
                  research-oriented perspective contribute to the development of
                  rigorous, meaningful and future-focused assessment frameworks.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
