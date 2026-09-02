import { ArrowRight, CheckIcon } from "./icons";
import { Reveal } from "./Reveal";

const checks = [
  "Learning Patterns",
  "Concept Mastery",
  "Problem-solving Skills",
  "Thinking Abilities",
  "Growth Areas",
  "International Benchmark",
  "Confidence Indicators",
  "Learning Readiness",
];

/* The report tablet is cut out onto transparency, so the depth comes from a
   drop-shadow that follows the device silhouette rather than a box-shadow that
   would trace a rectangle around the rounded corners. */
const tabletStyle = {
  transform: "rotateY(-14deg) rotateZ(1.5deg)",
  filter: "drop-shadow(-10px 16px 16px rgba(15, 28, 63, 0.3))",
};

export function AdvisoryHealth() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-10 lg:py-14 grid xl:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Advisory */}
        <Reveal className="h-full rounded-xl border border-slate-200 bg-white p-5 lg:p-7 flex flex-col sm:flex-row gap-5 lg:gap-7">
          {/* Portrait frame rather than stretching to the card height, which used to
              squeeze the headshot into a narrow strip on mid-size screens */}
          <img
            src="/images/advisors/prof-ajai-shukla.webp"
            alt="Prof. (Dr.) Ajai Shukla"
            className="w-full h-56 sm:h-auto sm:aspect-[4/5] sm:w-[190px] lg:w-[210px] xl:w-[180px] 2xl:w-[220px] sm:self-start shrink-0 rounded-lg object-cover object-top"
          />
          <div className="flex flex-col">
            {/* Sizes dip at xl because the two cards go side-by-side there, so each
                card is narrower at 1280 than it is at 1024 where it spans full width. */}
            <h3 className="font-serif text-[21px] lg:text-[26px] xl:text-[23px] 2xl:text-[30px] font-medium text-navy leading-snug">
              Guided by Distinguished Academic Leaders
            </h3>
            <p className="mt-3 text-[16px] lg:text-[18px] font-semibold text-navy">
              Prof. (Dr.) Ajai Shukla
            </p>
            <p className="mt-1 text-[12px] lg:text-[13px] text-slate-500">
              Director of Education, Epoch Olympiad Foundation
            </p>
            <p className="text-[12px] lg:text-[13px] text-slate-500">
              Former Research Scholar @IIT Kanpur &nbsp;•&nbsp; BITS Pilani &nbsp;•
            </p>
            <p className="text-[12px] lg:text-[13px] text-slate-500">
              University of Alberta, Edmonton, Canada
            </p>
            <p className="mt-3 text-[12.5px] lg:text-[14px] leading-relaxed text-slate-600">
              We are building one of India&apos;s most respected academic
              advisory ecosystems comprising renowned education leaders and
              researchers.
            </p>
            <a
              href="/advisory-board"
              className="mt-auto pt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 lg:px-5 lg:py-3 text-[12.5px] lg:text-[14px] font-semibold text-navy hover:bg-gold-dark transition-colors"
            >
              View Advisory Council
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Academic Health */}
        <Reveal
          delay={120}
          className="h-full rounded-xl border border-slate-200 bg-[#eef3fb] p-5 lg:p-7"
        >
          {/* Two real columns rather than an absolutely placed graphic, so the
              report preview is never clipped by the card edge. */}
          <div className="flex h-full flex-col sm:flex-row sm:items-center sm:gap-5 lg:gap-6">
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-[22px] lg:text-[26px] xl:text-[24px] 2xl:text-[30px] font-medium text-navy leading-snug">
                Beyond Marks. Discover Academic Health.
              </h3>
              <p className="mt-2 text-[12.5px] lg:text-[14px] leading-relaxed text-slate-600">
                Our Academic Health Report goes beyond test scores to provide a
                360° view of a learner&apos;s cognitive and academic well-being.
              </p>

              <div className="mt-4 lg:mt-5 grid grid-cols-2 gap-y-2.5 lg:gap-y-3 gap-x-4">
                {checks.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <span className="h-4 w-4 lg:h-5 lg:w-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <CheckIcon className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-white" />
                    </span>
                    <span className="text-[11.5px] lg:text-[13px] text-slate-600">
                      {c}
                    </span>
                  </div>
                ))}
              </div>

              {/* Report tablet (stacked on mobile) */}
              <div className="mt-6 sm:hidden [perspective:1000px]">
                <img
                  src="/images/ahr-tablet.webp"
                  alt="Academic Health Report shown on a tablet"
                  className="mx-auto w-full max-w-[250px]"
                  style={tabletStyle}
                />
              </div>

              <a
                href="/academic-health-report"
                className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 lg:px-5 lg:py-3 text-[12.5px] lg:text-[14px] font-semibold text-navy hover:bg-gold-dark transition-colors"
              >
                Explore Academic Health Report
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Report tablet (desktop). The perspective sits on the wrapper so
                the tilt reads as depth — the device angles out of the card toward
                the viewer rather than looking like a flat skew. */}
            {/* A larger share at xl, where the two cards go side by side and this
                one is at its narrowest but tallest. */}
            <div className="hidden sm:block w-[34%] xl:w-[42%] 2xl:w-[34%] max-w-[270px] shrink-0 self-center [perspective:1200px]">
              <img
                src="/images/ahr-tablet.webp"
                alt="Academic Health Report shown on a tablet"
                className="w-full"
                style={tabletStyle}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
