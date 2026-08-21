import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="bg-navy-800">
      <Reveal className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-14 lg:py-24 xl:py-32 text-center">
        <h2 className="font-serif text-fluid-1 font-medium text-white">
          Join the Movement Transforming Education
        </h2>
        <p className="mx-auto mt-3 max-w-2xl lg:max-w-3xl text-[14px] lg:text-[16px] text-slate-300">
          Whether you are a school, educator, researcher, or parent, become part
          of the next generation of cognitive education.
        </p>
        <div className="mt-7 lg:mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/partner-with-us"
            className="rounded-md bg-gold px-6 lg:px-7 py-3 lg:py-3.5 text-[13px] lg:text-[15px] font-semibold text-navy hover:bg-gold-dark transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="/advisory-board"
            className="rounded-md border border-white/25 bg-white/5 px-6 lg:px-7 py-3 lg:py-3.5 text-[13px] lg:text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Become an Advisor
          </a>
          <a
            href="/register-your-school"
            className="rounded-md border border-white/25 bg-white/5 px-6 lg:px-7 py-3 lg:py-3.5 text-[13px] lg:text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Register Your School
          </a>
        </div>
      </Reveal>
    </section>
  );
}
