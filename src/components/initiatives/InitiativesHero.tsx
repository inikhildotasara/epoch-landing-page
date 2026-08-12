import { Reveal } from "../Reveal";

export function InitiativesHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Desktop full-height photo bleeding to the right edge. The artwork carries
          blended white headroom on top, so the panel can be much taller than a 3:2
          photo without ever cropping a child out of the frame. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] 2xl:w-[44%] lg:block">
        <img
          src="/images/initiatives-hero-tall.webp"
          alt="Children learning together"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-10 sm:py-14 lg:py-20 xl:py-24">
        <div className="lg:max-w-[60%]">
          <Reveal className="hero-anim">
            <p className="text-[13px] lg:text-[15px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Our Initiatives
            </p>
            <h1 className="mt-4 font-serif text-[28px] sm:text-[38px] lg:text-[36px] xl:text-[40px] 2xl:text-[46px] font-medium leading-[1.14] text-navy">
              Turning Educational Research
              <br className="hidden sm:block" /> into Meaningful Impact
            </h1>
            <span className="mt-6 block h-[3px] w-20 rounded-full bg-gold" />
            <p className="mt-6 max-w-xl text-[14px] lg:text-[16px] leading-relaxed text-slate-600">
              Our initiatives are designed to support learners at every stage—from
              early cognitive development to academic assessment and continuous
              improvement.
            </p>
          </Reveal>
        </div>

        {/* Mobile / tablet stacked photo */}
        <Reveal delay={100} className="mt-8 lg:hidden">
          <img
            src="/images/initiatives-hero.png"
            alt="Children learning together"
            className="w-full rounded-xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
