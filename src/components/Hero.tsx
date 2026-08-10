export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={{ backgroundColor: "#03152f" }}
    >
      {/* Full image anchored top-right; its dark edges blend into the background (desktop/tablet) */}
      <img
        src="/images/hero.png"
        alt="Child exploring cognitive intelligence with concept map"
        className="hidden md:block absolute inset-y-0 right-0 h-full w-[50%] lg:w-[50%] object-contain object-top"
      />

      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-42 py-8 md:py-12 lg:py-14 xl:py-16">
        {/* Left text block */}
        <div className="md:max-w-[48%] lg:max-w-[47%]">
          <h1 className="font-serif text-white font-semibold leading-[1.16] text-[28px] sm:text-[36px] md:text-[35px] lg:text-[38px] xl:text-[44px]">
            Transitioning Early Learners
            <br />
            from Rote Memory to
            <br />
            True Intelligence
          </h1>
          <p className="mt-5 xl:mt-7 max-w-xl text-[14px] lg:text-[16px] xl:text-[18px] leading-relaxed text-slate-300">
            Epoch Olympiad Foundation is an independent education research
            foundation dedicated to transforming how children&apos;s cognitive
            abilities are measured, nurtured, and benchmarked. Through
            research-driven assessments, diagnostic analytics, and innovative
            learning frameworks, we help schools move beyond rote memory toward
            authentic intelligence.
          </p>
          <div className="mt-7 lg:mt-9 flex flex-wrap sm:flex-nowrap items-center gap-2.5 lg:gap-3.5">
            <a
              href="#"
              className="whitespace-nowrap rounded-md bg-gold px-4 lg:px-6 py-3 lg:py-3.5 text-[13px] lg:text-[15px] font-semibold text-navy hover:bg-gold-dark transition-colors"
            >
              Explore Our Research
            </a>
            <a
              href="#"
              className="whitespace-nowrap rounded-md border border-white/25 bg-white/5 px-4 lg:px-6 py-3 lg:py-3.5 text-[13px] lg:text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Academic Health Report
            </a>
            <a
              href="#"
              className="flex items-center gap-2 whitespace-nowrap rounded-md border border-white/25 bg-white/5 px-4 lg:px-6 py-3 lg:py-3.5 text-[13px] lg:text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span className="flex h-5 w-5 lg:h-6 lg:w-6 items-center justify-center rounded-full bg-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-navy"
                  fill="currentColor"
                >
                  <path d="M8 5l11 7-11 7z" />
                </svg>
              </span>
              Watch Our Vision
            </a>
          </div>
        </div>

        {/* Mobile image (stacked, fully visible) */}
        <div className="mt-8 md:hidden">
          <img
            src="/images/hero.png"
            alt="Child exploring cognitive intelligence with concept map"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
