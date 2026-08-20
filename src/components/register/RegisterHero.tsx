import { heroBadges } from "./data";

const HERO_IMAGE = "/images/register-school-hero.webp";

export function RegisterHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 95% at 6% 0%, #17325f 0%, #0d2049 48%, #0b1c3f 100%)",
        }}
        aria-hidden
      />

      {/* The photo is anchored to the section rather than the padded container
          so it can bleed to the viewport edge, and the huge left radius gives
          it the arc that separates it from the copy. Only shown from lg, where
          there is a second column of space for it to live in. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] xl:w-[48%] lg:block"
        aria-hidden
      >
        <div className="h-full w-full rounded-l-full bg-gold pl-[3px]">
          <div className="relative h-full w-full overflow-hidden rounded-l-full">
            <img
              src={HERO_IMAGE}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(11,28,63,0.92) 0%, rgba(11,28,63,0.55) 22%, rgba(11,28,63,0.12) 52%, rgba(11,28,63,0) 78%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid w-full gap-8 px-4 pb-14 pt-9 sm:px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-10 lg:px-page lg:pb-24 lg:pt-12 xl:pt-14 2xl:pt-16">
        <div className="hero-anim">
          <h1 className="font-serif uppercase leading-[1.06]">
            <span className="block text-fluid-1 font-medium">Register</span>
            <span className="block text-fluid-1 font-medium text-gold">
              Your School
            </span>
          </h1>

          <p className="mt-4 max-w-[30ch] font-serif text-[16px] leading-snug text-white sm:text-[18px] lg:mt-5 lg:text-[21px] xl:text-[23px]">
            Partner with us to unlock the true potential of young minds.
          </p>

          <span className="mt-5 flex items-center gap-2 lg:mt-6" aria-hidden>
            <span className="h-px w-8 bg-gold/50" />
            <span className="h-[7px] w-[7px] rotate-45 bg-gold" />
            <span className="h-px w-8 bg-gold/50" />
          </span>

          <p className="mt-5 max-w-[52ch] text-[12.5px] leading-relaxed text-slate-300 lg:text-[13.5px] xl:text-[14px]">
            Please share your school details and let us know which initiative(s)
            you are interested in. Our team will connect with you to provide
            relevant information and support.
          </p>

          {/* Back to two columns at lg, where the copy column is at its
              narrowest and four badges would break every label mid-word. */}
          <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 lg:mt-9 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-5">
            {heroBadges.map(({ label, Icon }) => (
              <li key={label} className="flex items-start gap-2.5">
                <Icon
                  className="h-[22px] w-[22px] shrink-0 text-gold lg:h-6 lg:w-6"
                  aria-hidden
                />
                <span className="text-[11.5px] font-medium leading-snug text-slate-100 lg:text-[12.5px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Below lg the arc has nowhere to sit, so the same photo runs full
            width under the copy instead of disappearing. */}
        <div className="hero-fade lg:hidden">
          <img
            src={HERO_IMAGE}
            alt="A school campus partnering with Epoch Olympiad Foundation"
            className="h-44 w-full rounded-xl object-cover object-center ring-1 ring-white/15 sm:h-56 md:h-64"
          />
        </div>
      </div>
    </section>
  );
}
