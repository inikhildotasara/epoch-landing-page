import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import { BrainBoosterFaq } from "./BrainBoosterFaq";

const achievers = [
  {
    img: "/images/brain-booster/achiever-1.jpg",
    name: "Aarav Mehta",
    title: "Brain Booster Champion",
  },
  {
    img: "/images/brain-booster/achiever-2.jpg",
    name: "Ananya Singh",
    title: "Top Performer",
  },
  {
    img: "/images/brain-booster/achiever-3.jpg",
    name: "Vivaan Rao",
    title: "Excellence Awardee",
  },
  {
    img: "/images/brain-booster/achiever-4.jpg",
    name: "Myra Patel",
    title: "Rising Young Thinker",
  },
];

export function AchieversAndFaq() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {/* Extra scroll margin covers the 20px the reveal animation lifts the
              block by after the browser has already jumped to the anchor. */}
          <Reveal
            id="achievers"
            className="scroll-mt-9 rounded-2xl border border-slate-200 bg-white p-5 lg:p-6"
          >
            <h2 className="text-center font-serif text-[16px] font-semibold text-navy lg:text-[18px]">
              Young Thinkers. Big Achievements.
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {achievers.map((a) => (
                <div key={a.name} className="text-center">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="mx-auto aspect-[5/6] w-full max-w-[124px] rounded-xl bg-slate-50 object-cover"
                  />
                  <h3 className="mt-2.5 text-[12px] font-bold text-navy lg:text-[12.5px]">
                    {a.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-slate-500 lg:text-[11.5px]">
                    {a.title}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-md border border-navy px-5 py-2.5 text-[12.5px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white lg:text-[13px]"
            >
              View All Achievers Gallery <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>

          <Reveal id="faq" delay={90} className="scroll-mt-9">
            <BrainBoosterFaq />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
