import { ShieldIcon } from "../icons";
import { Reveal } from "../Reveal";
import { ColonnadeMotif } from "./decor";

export function IndependentPerspective() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 pt-7 pb-9 sm:px-6 md:px-12 lg:px-page lg:pt-9 lg:pb-11 2xl:pt-11 2xl:pb-13">
        <Reveal>
          <article className="relative overflow-hidden rounded-xl border border-[#eee7d8] bg-white px-4 py-5 sm:px-5 sm:py-6 lg:px-7 lg:py-7">
            <ColonnadeMotif
              className="pointer-events-none absolute -right-3 top-1 hidden h-[150%] w-auto text-navy/6 md:block"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, #000 68%, #000 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, #000 68%, #000 100%)",
              }}
            />

            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 lg:gap-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                <ShieldIcon className="h-6 w-6 text-gold lg:h-7 lg:w-7" />
              </span>

              <div className="min-w-0">
                <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-navy sm:text-[13px] sm:tracking-[0.16em] lg:text-[15px]">
                  Independent Academic Perspective
                </h2>
                <p className="mt-2 max-w-[92ch] text-[12px] leading-relaxed text-slate-600 lg:mt-2.5 lg:text-[13.5px] xl:text-[14px]">
                  Epoch Olympiad Foundation believes that educational assessment
                  must remain intellectually rigorous, transparent and
                  learner-focused. Our Advisory Council provides independent
                  academic and institutional perspectives to strengthen the
                  quality and integrity of our frameworks.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
