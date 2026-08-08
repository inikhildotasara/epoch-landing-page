export function CTA() {
  return (
    <section className="bg-navy-800">
      <div className="mx-auto max-w-[1200px] px-5 py-14 text-center">
        <h2 className="font-serif text-[27px] md:text-[32px] font-medium text-white">
          Join the Movement Transforming Education
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[14px] text-slate-300">
          Whether you are a school, educator, researcher, or parent, become part
          of the next generation of cognitive education.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-md bg-gold px-6 py-3 text-[13px] font-semibold text-navy hover:bg-gold-dark transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="#"
            className="rounded-md border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Become an Advisor
          </a>
          <a
            href="#"
            className="rounded-md border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Register Your School
          </a>
        </div>
      </div>
    </section>
  );
}
