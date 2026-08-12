import { BuildingIcon, BulbIcon, GradCapIcon } from "../icons";
import { FountainPen, LaurelBranch } from "./decor";

const badges = [
  { label: "Academic Leadership", Icon: GradCapIcon },
  { label: "Institutional Wisdom", Icon: BuildingIcon },
  { label: "Educational Vision", Icon: BulbIcon },
];

const creed = ["Knowledge", "Experience", "Integrity", "Vision"];

/* The book/laurel/pen crest is laid out in percentages inside a fixed-ratio
   box and its type is sized in container-query units, so the whole crest
   scales as one piece and never reflows at any viewport width. */
function AdvisoryCrest() {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "655 / 600", containerType: "inline-size" }}
    >
      <div className="absolute left-[4%] right-[4%] bottom-0 h-[7%] rounded-[50%] bg-black/50 blur-[6px]" />

      <LaurelBranch className="absolute left-0 top-[22%] h-[56%] w-[20.5%] text-[#cfa236] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" />
      <LaurelBranch className="absolute right-0 top-[22%] h-[56%] w-[20.5%] -scale-x-100 text-[#cfa236] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" />

      <div
        className="absolute left-[16.8%] top-[2.5%] h-[88.3%] w-[63.4%] overflow-hidden rounded-l-[2px] rounded-r-[5px] ring-1 ring-white/10"
        style={{
          background:
            "linear-gradient(118deg,#1d2b47 0%,#16223a 38%,#101a33 72%,#1b2842 100%)",
          boxShadow:
            "0 24px 40px -12px rgba(0,0,0,0.75), 0 4px 14px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="absolute inset-y-0 left-0 w-[13%]"
          style={{
            background:
              "linear-gradient(90deg,#05080f 0%,#0a1120 45%,#141f36 88%,#243352 100%)",
          }}
        />
        <div className="absolute inset-y-0 left-[13%] w-px bg-white/12" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

        <div className="absolute inset-y-0 left-[13%] right-0 flex flex-col items-center justify-center">
          {creed.map((word) => (
            <span
              key={word}
              className="block whitespace-nowrap font-serif uppercase text-[#e5bd52]"
              style={{
                fontSize: "5.1cqw",
                lineHeight: 1.5,
                letterSpacing: "0.05em",
                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <FountainPen className="absolute left-[3%] bottom-[1%] w-[69%] -rotate-[5deg] drop-shadow-[0_6px_10px_rgba(0,0,0,0.55)]" />
    </div>
  );
}

export function AdvisoryHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img
        src="/images/advisory-hero-bg.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right lg:left-auto lg:w-[60%]"
      />
      <div
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{ background: "rgba(11,28,63,0.82)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg,#0b1c3f 0%,#0b1c3f 40%,rgba(11,28,63,0.78) 54%,rgba(11,28,63,0.42) 72%,rgba(11,28,63,0.62) 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full items-center gap-8 px-4 py-9 sm:gap-10 sm:px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-8 lg:px-page lg:py-11 xl:gap-12 xl:py-14 2xl:py-16">
        <div className="hero-anim">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-[12px] lg:text-[13px]">
            Advisory Board
          </p>

          <h1 className="mt-3 font-serif text-fluid-1 font-medium leading-[1.18] text-white lg:mt-4">
            Guiding the Future of
            <br className="hidden sm:block" /> Cognitive Education
          </h1>

          <span className="mt-4 block h-px w-14 bg-gold lg:mt-5 lg:w-16" />

          <p className="mt-4 max-w-[60ch] text-[12.5px] leading-relaxed text-slate-200/90 lg:mt-5 lg:text-[13.5px] xl:text-[14px]">
            Epoch Olympiad Foundation is committed to ensuring that its
            assessment frameworks are shaped by distinguished academic
            leadership, institutional experience and a deep understanding of
            education.
          </p>
          <p className="mt-3 max-w-[60ch] text-[12.5px] leading-relaxed text-slate-200/90 lg:mt-4 lg:text-[13.5px] xl:text-[14px]">
            Our Advisory Council brings together eminent educators, academic
            leaders and school leaders who contribute their experience and
            perspective toward strengthening educational assessment, academic
            integrity and cognitive development.
          </p>

          {/* The rules between the three badges only appear from xl up, which is
              the first width where all three fit on a single line. */}
          <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3 lg:mt-8 xl:gap-x-6">
            {badges.map(({ label, Icon }, i) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 ${
                  i > 0 ? "xl:border-l xl:border-white/20 xl:pl-6" : ""
                }`}
              >
                <Icon className="h-[22px] w-[22px] shrink-0 text-gold lg:h-6 lg:w-6" />
                <span className="text-[12px] text-slate-100 lg:text-[13px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Capped per breakpoint rather than left fluid: at lg the whole hero
            still has to clear a 600px-tall viewport. */}
        <div className="hero-fade mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[340px] xl:max-w-[430px] 2xl:max-w-[540px] min-[1800px]:max-w-[620px]">
          <AdvisoryCrest />
        </div>
      </div>
    </section>
  );
}
