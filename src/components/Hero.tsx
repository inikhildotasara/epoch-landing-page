import { HeroThoughts } from "./HeroThoughts";

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
      {/* container-type: size gives the thought labels inside a height to anchor
          to, so they follow the brain instead of drifting with the viewport. */}
      <div className="hidden lg:block absolute bottom-0 right-0 h-full w-[44%] xl:w-[48%] 2xl:w-[46%] [container-type:size]">
        <img
          src="/images/hero-brain.webp"
          alt="Child thinking, with a glowing neural network brain above him"
          style={{ animationDelay: "120ms" }}
          className="hero-fade h-full w-full object-cover object-bottom"
        />
        <HeroThoughts />
      </div>

      {/* With the CTA row gone the copy alone no longer gives the section enough
          height for the artwork to breathe, so the desktop layout keeps a floor.
          It stays under the 516px available below the header at 1024×600. */}
      <div className="relative mx-auto flex w-full flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-page py-8 md:py-12 lg:min-h-[380px] lg:py-10 xl:min-h-[450px] xl:py-14 2xl:min-h-[530px]">
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
        </div>

        {/* Stacked image for mobile & tablet — full-bleed so it blends into the
            navy background and sits flush with the bottom of the section */}
        <div className="mt-8 -mx-4 -mb-8 sm:-mx-6 md:-mx-12 md:-mb-12 lg:hidden">
          <div className="relative aspect-[16/11] w-full [container-type:size]">
            <img
              src="/images/hero-brain.webp"
              alt="Child thinking, with a glowing neural network brain above him"
              className="absolute inset-0 h-full w-full object-cover object-bottom"
            />
            <HeroThoughts />
          </div>
        </div>
      </div>
    </section>
  );
}
