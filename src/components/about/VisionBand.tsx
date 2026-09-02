import { EyeIcon } from "../icons";
import { Reveal } from "../Reveal";

export function VisionBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-8 lg:pb-12">
        <Reveal className="rounded-2xl bg-navy px-6 py-8 lg:px-12 lg:py-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-8">
          <div className="shrink-0 h-16 w-16 lg:h-20 lg:w-20 rounded-full border border-gold/50 flex items-center justify-center">
            <EyeIcon className="h-9 w-9 lg:h-11 lg:w-11 text-gold" />
          </div>
          <div>
            <p className="text-[13px] lg:text-[15px] font-semibold tracking-[0.2em] text-gold uppercase">
              Our Vision
            </p>
            <p className="mt-2 font-serif text-[19px] md:text-[22px] lg:text-[26px] leading-snug text-white">
              To help learners move from rote memory to deeper thinking through
              research, meaningful assessment and educational innovation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
