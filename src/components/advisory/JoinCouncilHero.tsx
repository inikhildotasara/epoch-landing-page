export function JoinCouncilHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full items-center gap-8 px-4 py-10 sm:px-6 md:px-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-page lg:py-14">
        <div>
          <h1 className="font-serif text-[26px] font-semibold leading-[1.15] text-navy sm:text-[32px] lg:text-[38px] xl:text-[42px]">
            Become a Part of Our
            <br />
            Advisory Council
          </h1>
          <span className="mt-4 block h-px w-16 bg-gold" />
          <p className="mt-4 max-w-[56ch] text-[13px] leading-relaxed text-slate-600 sm:text-[14px] lg:text-[14.5px]">
            We invite distinguished leaders from academia, institutions and
            society to guide our vision of moving education beyond marks
            towards deeper thinking, meaningful assessment and future
            readiness for every child.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-[0_20px_45px_-25px_rgba(11,28,63,0.35)]">
          <img
            src="/images/advisory-hero-books.png"
            alt="A stack of books labelled Academic Integrity, Assessment Excellence, Educational Vision and Global Perspective, beside an institution emblem and a globe"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
