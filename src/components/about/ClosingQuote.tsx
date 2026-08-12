export function ClosingQuote() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/about-closing.png"
        alt="A child looking toward the horizon at dawn"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/40" />
      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center gap-3 px-6 py-16 text-center lg:gap-6 lg:py-24">
        <span className="self-start font-serif text-[52px] leading-none text-gold lg:text-[70px]">
          &ldquo;
        </span>
        <div className="max-w-3xl">
          <p className="font-serif text-[20px] leading-snug text-white md:text-[26px] lg:text-[30px]">
            The future of education will not be defined by higher scores alone,
            but by deeper understanding.
          </p>
          <p className="mt-3 font-serif text-[17px] text-gold md:text-[21px] lg:text-[24px]">
            Epoch Olympiad Foundation exists to make that future possible.
          </p>
        </div>
        <span className="self-end font-serif text-[52px] leading-none text-gold lg:text-[70px]">
          &rdquo;
        </span>
      </div>
    </section>
  );
}
