import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import { TrophyIcon } from "../icons";

const achievers = [
  {
    img: "/images/brain-booster/1. Pratishtaha Saini, Brainiac Einstein Award, Cosmos, Seth Anandram Jaipuria School, Kanpur.jpeg",
    name: "Pratishtaha Saini",
    grade: "Brainiac Einstein Award",
    school: ["Class – Cosmos (UKG)", "Seth Anandram Jaipuria School, Kanpur"],
  },

  {
    img: "/images/brain-booster/2. Aayansh Singh, National Topper, Peony, Delhi Public School Kalyanpur.jpeg",
    name: "Aayansh Singh",
    grade: "National Topper",
    school: ["Class – Peony (PG)", "Delhi Public School Kalyanpur"],
  },

  {
    img: "/images/brain-booster/3. Maryam Fatima, National Topper, Tulip, Allen Kids Swaroop Nagar.jpeg",
    name: "Maryam Fatima",
    grade: "National Topper",
    school: ["Class – Tulip (LKG)", "Allen Kids Swaroop Nagar"],
  },

  {
    img: "/images/brain-booster/4. Rudraksh Verma, International Topper, Peony, Pt. Deen Dayal Upadhyay S.D. Vidyalaya, Kanpur.jpeg",
    name: "Rudraksh Verma",
    grade: "International Topper",
    school: ["Class – Peony (PG)", "Pt. Deen Dayal Upadhyay S.D. Vidyalaya, Kanpur"],
  },

  {
    img: "/images/brain-booster/5. Kiara Agarwal, Brainiac Einstein Award, Cosmos, Seth Anandram Jaipuria School, Kanpur.jpeg",
    name: "Kiara Agarwal",
    grade: "Brainiac Einstein Award",
    school: ["Class – Cosmos (UKG)", "Seth Anandram Jaipuria School, Kanpur"],
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
            <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-3">
              {achievers.map((a, i) => (
                <Reveal
                  key={a.name}
                  delay={i * 60}
                  className="min-w-[calc((100%-1rem)/2)] flex-none text-center sm:min-w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/5)] lg:min-w-0"
                >
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
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
