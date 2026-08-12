import { ArrowRight } from "../icons";
import { CouncilIcon, NoteFlourish } from "./decor";

const FADE_IN_FROM_LEFT =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 26%, #000 52%)";

export function AdvisoryCTA() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        {/* Sized off the band height so the whole frame stays visible and
            uncropped; the left edge is masked so it melts into the navy. */}
        <img
          src="/images/about-closing.png"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-auto max-w-[27%] object-contain object-right lg:block 2xl:max-w-[34%]"
          style={{
            maskImage: FADE_IN_FROM_LEFT,
            WebkitMaskImage: FADE_IN_FROM_LEFT,
          }}
        />

        <div className="relative mx-auto w-full px-4 py-7 sm:px-6 md:px-12 lg:min-h-[196px] lg:px-page lg:py-8 xl:min-h-[228px]">
          {/* Room is reserved on the right for the bleeding image, so the copy
              never runs underneath it. The buttons only move alongside the copy
              at 2xl, the first width with room for all three columns. */}
          <div className="lg:mr-[220px] xl:mr-[260px] 2xl:mr-[350px]">
            <div className="flex flex-col gap-5 sm:gap-6 2xl:flex-row 2xl:items-center 2xl:gap-9">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 lg:gap-6 2xl:flex-1">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/60 sm:h-16 sm:w-16 lg:h-[68px] lg:w-[68px] xl:h-[76px] xl:w-[76px]">
                  <CouncilIcon className="h-7 w-7 text-gold lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
                </span>

                <div className="min-w-0">
                  <h2 className="font-serif text-[20px] font-medium leading-snug text-white sm:text-[23px] lg:text-[25px] xl:text-[27px] 2xl:text-[30px]">
                    Could Your Experience Help Shape
                    <br className="hidden 2xl:block" /> the Future of Education?
                  </h2>
                  <p className="mt-2.5 max-w-[76ch] text-[11.5px] leading-relaxed text-slate-300 lg:mt-3 lg:text-[12.5px] xl:text-[13px]">
                    We welcome expressions of interest from distinguished
                    academic leaders, school principals, education researchers
                    and institutional leaders who share our commitment to
                    advancing meaningful assessment and cognitive development.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap 2xl:w-[250px] 2xl:shrink-0 2xl:flex-col">
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-center text-[12px] font-semibold leading-snug text-navy transition-colors hover:bg-gold-dark sm:min-w-[210px] sm:flex-none lg:px-5 lg:py-3 lg:text-[13px] 2xl:w-full"
                >
                  Express Interest in Joining the Advisory Council
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-4 py-2.5 text-center text-[12px] font-semibold leading-snug text-white transition-colors hover:bg-white/10 sm:min-w-[210px] sm:flex-none lg:px-5 lg:py-3 lg:text-[13px] 2xl:w-full"
                >
                  View Eligibility &amp; Roles
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/about-closing.png"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="mx-auto block w-full max-w-[430px] sm:max-w-[520px] lg:hidden"
        />
      </section>

      <section className="bg-cream">
        <div className="mx-auto w-full px-4 py-5 sm:px-6 md:px-12 lg:px-page lg:py-6">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <NoteFlourish className="hidden h-9 w-auto shrink-0 text-gold/70 sm:block lg:h-11" />
            <p className="max-w-[104ch] text-center font-serif text-[11.5px] italic leading-relaxed text-navy/75 sm:text-[12.5px] lg:text-[13.5px]">
              The Advisory Council members serve in honorary capacity and provide
              their valuable time and expertise to strengthen our mission of
              transitioning early learners from rote memory to true intelligence.
            </p>
            <NoteFlourish className="hidden h-9 w-auto shrink-0 -scale-x-100 text-gold/70 sm:block lg:h-11" />
          </div>
        </div>
      </section>
    </>
  );
}
