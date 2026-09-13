import Image from "next/image";
import { Reveal } from "../Reveal";
import {
  BookIcon,
  BrainIcon,
  RocketIcon,
  TargetDartIcon,
} from "../icons";
import { SectionHeading } from "./SectionHeading";

const missionPoints = [
  {
    title: "Understand",
    detail: "Go beyond recall to understand what a learner knows.",
    Icon: BookIcon,
    color: "text-blue-600",
    background: "bg-blue-50",
  },
  {
    title: "Think",
    detail: "Encourage reasoning, analysis and independent thinking.",
    Icon: BrainIcon,
    color: "text-violet-600",
    background: "bg-violet-50",
  },
  {
    title: "Apply",
    detail: "Help students use knowledge in unfamiliar situations.",
    Icon: TargetDartIcon,
    color: "text-emerald-600",
    background: "bg-emerald-50",
  },
  {
    title: "Prepare",
    detail: "Build capabilities that remain useful beyond the classroom.",
    Icon: RocketIcon,
    color: "text-sky-600",
    background: "bg-sky-50",
  },
];

export function OlympiadPurpose() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 md:px-12 lg:px-page lg:py-14">
        <Reveal>
          <SectionHeading>Why Epoch Olympiad Exists</SectionHeading>
        </Reveal>

        <div className="mt-7 grid items-center gap-7 lg:mt-9 lg:grid-cols-[0.82fr_1.65fr] lg:gap-12">
          <Reveal className="relative overflow-hidden rounded-2xl bg-[#fff8e9] lg:min-h-[260px]">
            <Image
              src="/images/olympiad-purpose.png"
              alt="A child thinking creatively"
              width={1024}
              height={1024}
              className="h-full min-h-[250px] w-full object-cover object-center"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[15px] font-semibold leading-snug text-navy lg:text-[18px]">
              &ldquo;An Olympiad should do more than rank a child. It should
              reveal how a child thinks.&rdquo;
            </p>
            <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
              Epoch Olympiad was created to move assessment beyond
              memorisation—to understand conceptual clarity, reasoning,
              application and the ability to approach unfamiliar problems.
            </p>
            <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
              Our vision is to build generations of learners who think deeply,
              solve creatively and are ready for a changing world.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-2xl bg-[#f2f8ff] px-5 py-7 sm:px-7 lg:mt-14 lg:px-10 lg:py-9">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_2fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-dark lg:text-[12px]">
                Our Mission
              </p>
              <h2 className="mt-3 max-w-sm font-serif text-[23px] font-semibold leading-tight text-navy lg:text-[29px]">
                Make assessment a meaningful part of learning—not merely a
                measure of marks.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4 lg:gap-6">
              {missionPoints.map(({ title, detail, Icon, color, background }) => (
                <div key={title} className="text-center">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${background} ${color} lg:h-16 lg:w-16`}
                  >
                    <Icon className="h-8 w-8 lg:h-9 lg:w-9" strokeWidth={1.55} />
                  </div>
                  <h3 className="mt-3 font-serif text-[16px] font-semibold text-navy lg:text-[18px]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-500 lg:text-[12px]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
