import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, TrophyIcon } from "../icons";

const achievers = [
  {
    img: "/images/brain-booster/achiever-1.jpg",
    name: "Aarav Mehta",
    grade: "Class KG 2",
    school: ["Spring Dale School", "Lucknow"],
  },
  {
    img: "/images/brain-booster/achiever-2.jpg",
    name: "Ananya Singh",
    grade: "Class KG 1",
    school: ["Delhi Public School", "Gurugram"],
  },
  {
    img: "/images/brain-booster/achiever-3.jpg",
    name: "Vivaan Rao",
    grade: "Class KG 2",
    school: ["Podar Intl. School", "Mumbai"],
  },
  {
    img: "/images/brain-booster/achiever-4.jpg",
    name: "Myra Patel",
    grade: "Class KG 1",
    school: ["Ryan International School", "Bengaluru"],
  },
  {
    img: "/images/achievers-brainiac.png",
    name: "Ishaan Verma",
    grade: "Class KG 2",
    school: ["EuroKids Pre School", "Indore"],
  },
];

export function YoungThinkers() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal
          id="achievers"
          className="scroll-mt-9 rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 lg:px-10 lg:py-9"
        >
          <SectionHeading>Young Thinkers. Big Achievements.</SectionHeading>

          {/* The celebration panel only moves beside the portraits from xl, so the
              five achievers keep a readable width at every size below that. */}
          <div className="mt-7 grid grid-cols-1 gap-6 lg:mt-8 xl:grid-cols-[minmax(0,1fr)_232px] xl:gap-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
              {achievers.map((a, i) => (
                <Reveal key={a.name} delay={i * 60} className="text-center">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="mx-auto aspect-[5/6] w-full max-w-[150px] rounded-xl bg-slate-50 object-cover"
                  />
                  <h3 className="mt-2.5 text-[12px] font-bold text-navy lg:text-[12.5px]">
                    {a.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                    {a.grade}
                    <br />
                    {a.school[0]}
                    <br />
                    {a.school[1]}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal
              delay={120}
              className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-[#fbfaff] px-5 py-6 text-center"
            >
              <TrophyIcon
                className="h-9 w-9"
                style={{ color: "#e8a013" }}
                strokeWidth={1.6}
              />
              <p className="font-serif text-[14px] font-semibold leading-snug text-navy lg:text-[15px]">
                Celebrating Curious Minds Across the Globe!
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-navy px-4 py-2 text-[12px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white lg:text-[12.5px]"
              >
                View All Achievers <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
