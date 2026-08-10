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

export function AdvisoryHealth() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 py-10 lg:py-14 grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Advisory */}
        <Reveal className="h-full rounded-xl border border-slate-200 bg-white p-5 lg:p-7 flex flex-col sm:flex-row gap-5 lg:gap-7">
          <img
            src="/images/professor.png"
            alt="Prof. Ajai Shukla"
            className="w-full h-56 sm:h-auto sm:w-[190px] lg:w-[220px] sm:self-stretch shrink-0 rounded-lg object-cover object-top"
          />
          <div className="flex flex-col">
            <h3 className="font-serif text-[21px] lg:text-[26px] xl:text-[30px] font-medium text-navy leading-snug">
              Guided by Distinguished Academic Leaders
            </h3>
            <p className="mt-3 text-[16px] lg:text-[18px] font-semibold text-navy">
              Prof. Ajai Shukla
            </p>
            <p className="mt-1 text-[12px] lg:text-[13px] text-slate-500">
              Director of Education
            </p>
            <p className="text-[12px] lg:text-[13px] text-slate-500">
              Former IIT Kanpur &nbsp;•&nbsp; BITS Pilani &nbsp;•
            </p>
            <p className="text-[12px] lg:text-[13px] text-slate-500">
              University of Alberta, Canada
            </p>
            <p className="mt-3 text-[12.5px] lg:text-[14px] leading-relaxed text-slate-600">
              We are building one of India&apos;s most respected academic
              advisory ecosystems comprising renowned education leaders and
              researchers.
            </p>
            <a
              href="#"
              className="mt-auto pt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 lg:px-5 lg:py-3 text-[12.5px] lg:text-[14px] font-semibold text-navy hover:bg-gold-dark transition-colors"
            >
              View Advisory Board
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Academic Health */}
        <Reveal
          delay={120}
          className="relative h-full rounded-xl border border-slate-200 bg-[#eef3fb] p-5 lg:p-7 overflow-hidden"
        >
          <div className="relative z-10 w-full sm:max-w-[62%]">
            <h3 className="font-serif text-[22px] lg:text-[26px] xl:text-[30px] font-medium text-navy leading-snug">
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
                  <span className="text-[11.5px] lg:text-[13px] text-slate-600">{c}</span>
                </div>
              ))}
            </div>

            {/* Dashboard graphic (stacked on mobile) */}
            <img
              src="/images/health-dashboard.png"
              alt="Academic health dashboard"
              className="sm:hidden mt-5 w-full rounded-lg shadow-lg ring-1 ring-black/5"
            />

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 lg:px-5 lg:py-3 text-[12.5px] lg:text-[14px] font-semibold text-navy hover:bg-gold-dark transition-colors"
            >
              Explore Academic Health Report
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Dashboard graphic bleeding off the right (desktop/tablet) */}
          <img
            src="/images/health-dashboard.png"
            alt="Academic health dashboard"
            className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 w-[42%] rounded-lg shadow-xl ring-1 ring-black/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
