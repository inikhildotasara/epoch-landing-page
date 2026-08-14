export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={{ backgroundColor: "#03152f" }}
    >
      {/* The subject is cut out of its own dark background so it dissolves into the
          section navy instead of reading as a pasted-in panel. The artwork keeps wide
          empty margins on both sides: object-cover then fills the section height at
          every width and only ever crops that empty space, never the boy or brain. */}
      <img
        src="/images/hero-brain.webp"
        alt="Child thinking, with a glowing neural network brain above him"
        style={{ animationDelay: "120ms" }}
        className="hero-fade hidden lg:block absolute bottom-0 right-0 h-full w-[44%] xl:w-[48%] 2xl:w-[46%] object-cover object-bottom"
      />

      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-8 md:py-12 lg:py-10 xl:py-16">
        {/* Left text block */}
        <div className="hero-anim">
          <div className="lg:max-w-[50%]">
            <h1 className="font-serif text-white font-semibold leading-[1.16] text-[28px] sm:text-[36px] md:text-[35px] lg:text-[30px] xl:text-[36px] 2xl:text-[44px]">
              Transitioning Early Learners
              <br />
              from Rote Memory to
              <br />
              True Intelligence
            </h1>
            <p className="mt-5 xl:mt-7 max-w-xl text-[14px] lg:text-[15px] xl:text-[18px] leading-relaxed text-slate-300">
              Epoch Olympiad Foundation is an independent education research
              foundation dedicated to transforming how children&apos;s cognitive
              abilities are measured, nurtured, and benchmarked. Through
              research-driven assessments, diagnostic analytics, and innovative
              learning frameworks, we help schools move beyond rote memory toward
              authentic intelligence.
            </p>
          </div>
          {/* Equal-width columns keep the three CTAs on one row; the row is allowed
              to run wider than the text block so they still fit at 1024. */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5 lg:gap-3 xl:gap-3.5 lg:max-w-[62%] xl:max-w-[66%] 2xl:flex 2xl:flex-wrap 2xl:items-center 2xl:max-w-none">
            <a
              href="#"
              className="inline-flex h-[46px] lg:h-[38px] xl:h-[52px] 2xl:min-w-[15rem] items-center justify-center whitespace-nowrap rounded-md bg-gold px-3.5 lg:px-2.5 xl:px-5 2xl:px-6 text-[13px] lg:text-[11.5px] xl:text-[14px] 2xl:text-[15px] font-semibold text-navy hover:bg-gold-dark transition-colors"
            >
              Explore Our Research
            </a>
            <a
              href="/academic-health-report"
              className="inline-flex h-[46px] lg:h-[38px] xl:h-[52px] 2xl:min-w-[15rem] items-center justify-center whitespace-nowrap rounded-md border border-white/25 bg-white/5 px-3.5 lg:px-2.5 xl:px-5 2xl:px-6 text-[13px] lg:text-[11.5px] xl:text-[14px] 2xl:text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Academic Health Report
            </a>
            <a
              href="#"
              className="inline-flex h-[46px] lg:h-[38px] xl:h-[52px] 2xl:min-w-[15rem] items-center justify-center gap-2 lg:gap-1.5 xl:gap-2 whitespace-nowrap rounded-md border border-white/25 bg-white/5 px-3.5 lg:px-2.5 xl:px-5 2xl:px-6 text-[13px] lg:text-[11.5px] xl:text-[14px] 2xl:text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span className="flex h-5 w-5 lg:h-4 lg:w-4 xl:h-6 xl:w-6 shrink-0 items-center justify-center rounded-full bg-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 lg:h-2 lg:w-2 xl:h-3.5 xl:w-3.5 text-navy"
                  fill="currentColor"
                >
                  <path d="M8 5l11 7-11 7z" />
                </svg>
              </span>
              Watch Our Vision
            </a>
          </div>
        </div>

        {/* Stacked image for mobile & tablet — full-bleed so it blends into the
            navy background and sits flush with the bottom of the section */}
        <div className="mt-8 -mx-4 -mb-8 sm:-mx-6 md:-mx-12 md:-mb-12 lg:hidden">
          <img
            src="/images/hero-brain.webp"
            alt="Child thinking, with a glowing neural network brain above him"
            className="w-full aspect-[16/11] object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
