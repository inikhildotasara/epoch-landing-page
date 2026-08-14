import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";

const reports = [
  {
    src: "/images/ahr-report-foundation.webp",
    alt: "Brainiac Global Academic Health Report for early years learners",
    stage: "Stage 1",
    name: "Early Years",
    href: "#foundation",
  },
  {
    src: "/images/ahr-report-olympiad.webp",
    alt: "Epoch Olympiad Academic Health Report for primary and middle school learners",
    stage: "Stage 2",
    name: "School Years",
    href: "#olympiad",
  },
  {
    src: "/images/ahr-report-advanced.webp",
    alt: "Epoch Olympiad advanced Academic Health Report for senior learners",
    stage: "Stage 3",
    name: "Senior Years",
    href: "#advanced",
  },
];

const facts = [
  { value: "3", label: "Age-tuned report editions" },
  { value: "20+", label: "Cognitive & academic dimensions" },
  { value: "4", label: "Benchmark layers per dimension" },
  { value: "1", label: "Continuous learning story" },
];

export function ReportHero() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={{ backgroundColor: "#0a1b3d" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(65% 55% at 50% 0%, rgba(43,86,168,0.38) 0%, rgba(10,27,61,0) 62%)",
        }}
      />

      <div className="relative mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
        <Reveal className="hero-anim mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold lg:text-[14px]">
            Academic Health Report
          </p>
          <h1 className="mt-4 font-serif text-[28px] font-medium leading-[1.15] text-white sm:text-[36px] lg:text-[44px] xl:text-[50px]">
            Beyond Marks.
            <br />
            Understand How Your Child Thinks.
          </h1>
          <span className="mx-auto mt-5 block h-[3px] w-16 rounded-full bg-gold" />
          <p className="mt-5 text-[14px] leading-relaxed text-slate-300 lg:text-[15.5px]">
            A single mark tells you where a learner finished. The Academic Health
            Report tells you how they got there — what they understand, how they
            reason, where they apply knowledge and what will help them next. One
            diagnostic framework, published in three age-tuned editions that grow
            with the learner.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#stages"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark lg:text-[14px]"
            >
              Explore the three editions
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#request"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/10 lg:text-[14px]"
            >
              Request a sample report
            </a>
          </div>
        </Reveal>

        {/* Triptych: three complete report pages, scaled proportionally so each
            one stays whole at every viewport width. */}
        <Reveal
          delay={140}
          className="hero-fade mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-2.5 sm:gap-4 lg:mt-12 lg:gap-6 xl:max-w-5xl"
        >
          {reports.map((r) => (
            <a key={r.stage} href={r.href} className="group flex h-full flex-col">
              <div className="rounded-lg border border-white/15 bg-white/5 p-1 shadow-lg transition-transform duration-300 group-hover:-translate-y-1.5 sm:rounded-xl sm:p-1.5 lg:p-2">
                <img
                  src={r.src}
                  alt={r.alt}
                  className="block h-auto w-full rounded-md sm:rounded-lg"
                />
              </div>
              {/* Pushed to the bottom of the cell so the three captions line up
                  even though the report pages differ slightly in proportion. */}
              <div className="mt-auto pt-2 lg:pt-3">
                <p className="text-center text-[9.5px] font-semibold uppercase tracking-[0.12em] text-gold sm:text-[10.5px] lg:text-[11.5px]">
                  {r.stage}
                </p>
                <p className="text-center text-[10.5px] leading-tight text-slate-300 sm:text-[12px] lg:text-[13px]">
                  {r.name}
                </p>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal
          delay={220}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4 lg:mt-12"
        >
          {facts.map((f) => (
            <div key={f.label} className="text-center">
              <p className="font-serif text-[26px] font-medium text-gold lg:text-[32px]">
                {f.value}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-slate-300 lg:text-[12.5px]">
                {f.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
