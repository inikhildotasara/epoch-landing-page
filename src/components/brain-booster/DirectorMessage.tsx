import Image from "next/image";
import { Reveal } from "../Reveal";

export function DirectorMessage() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-[#f8f8fb] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[200px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[250px_minmax(0,1fr)]">
            <Image
              src="/images/advisors/deepmala-gupto.webp"
              alt="Mrs. Deepmala Gupto, Director of Brainiac Global"
              width={600}
              height={800}
              sizes="(min-width: 1280px) 250px, (min-width: 640px) 200px, 240px"
              className="aspect-[3/4] w-full max-w-[240px] rounded-xl object-cover object-top sm:max-w-none"
            />

            <div>
              <h2 className="font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
                Message from the Director
              </h2>
              <span
                className="mt-3 block font-serif text-[30px] leading-none text-navy/35"
                aria-hidden
              >
                &ldquo;
              </span>

              <p className="mt-2 text-[13px] leading-relaxed text-slate-600 lg:text-[13.5px]">
                Every child is born curious. They naturally observe, question,
                explore and make sense of the world in their own beautiful way.
                At Brainiac Global, we believe in nurturing this natural ability
                through joyful, age-appropriate experiences that build strong
                thinking foundations.
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600 lg:text-[13.5px]">
                The International Brain Booster Olympiad is not about how much a
                child knows, but about how a child thinks. It encourages young
                learners to observe better, connect ideas, solve simple problems
                and build confidence in their own thinking.
              </p>

              <div className="mt-5 rounded-xl border border-navy/20 bg-white px-5 py-4 text-center">
                <p className="text-[12px] font-semibold text-navy lg:text-[12.5px]">
                  Our Motto
                </p>
                <p className="mt-1 font-serif text-[15px] font-semibold text-navy lg:text-[18px]">
                  Develop a Habit of <span className="text-gold-dark">How to Think</span>, Not What to Think.
                </p>
              </div>

              <p className="mt-5 font-serif text-[14px] font-semibold text-navy lg:text-[15px]">
                Mrs. Deepmala Gupto
              </p>
              <p className="mt-0.5 text-[12px] text-slate-500 lg:text-[12.5px]">
                Director, Brainiac Global
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
