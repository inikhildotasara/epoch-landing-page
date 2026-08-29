import { ArrowRight } from "../icons";
import { Reveal } from "../Reveal";

export function EnquiryCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-12 lg:pb-16">
        <Reveal className="flex flex-col items-center gap-5 rounded-2xl bg-navy px-6 py-8 text-center sm:px-10 lg:px-14">
          <h2 className="font-serif text-[20px] font-semibold text-white lg:text-[26px]">
            Ready to empower your child&apos;s future?
          </h2>
          <p className="max-w-2xl text-[12.5px] leading-relaxed text-slate-300 lg:text-[14px]">
            Join thousands of schools and parents in nurturing thinking,
            confidence and future-ready skills.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/register-your-school"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark lg:text-[14px]"
            >
              Register Your School <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+919807714979"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/10 lg:text-[14px]"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
