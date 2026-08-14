import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";

export function ResearchClosing() {
  return (
    <section className="bg-navy" style={{ backgroundColor: "#0a1b3d" }}>
      <div className="mx-auto w-full px-4 py-16 sm:px-6 md:px-12 lg:px-page lg:py-20">
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span className="pointer-events-none absolute -left-2 -top-6 font-serif text-[70px] leading-none text-gold/40 lg:-left-6 lg:text-[90px]">
            &ldquo;
          </span>
          <h2 className="font-serif text-fluid-3 font-medium leading-snug text-white">
            We don&apos;t just ask what a child knows.
            <br />
            <span className="text-gold">We ask how the child thinks.</span>
          </h2>
          <p className="mt-5 text-[14px] text-slate-300 lg:text-[16px]">
            And that question is where our research begins.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/academic-health-report"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-[14px] font-semibold text-navy transition-colors hover:bg-gold-dark sm:w-auto"
            >
              Explore Academic Health Report
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Watch Our Vision
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M8 5l11 7-11 7z" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
