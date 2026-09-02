import { Reveal } from "../Reveal";
import {
  UserIcon,
  AnalyticsIcon,
  ScaleIcon,
  HeadBulbIcon,
  StarIcon,
  SproutIcon,
  TargetIcon,
  OpenBookIcon,
} from "../icons";
import { SectionHead, type IconType } from "./ui";

const blocks: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: UserIcon,
    title: "Learner context",
    desc: "School, teacher, assessment and date, so every insight is anchored to a specific moment in the learner's journey.",
  },
  {
    icon: AnalyticsIcon,
    title: "Dimension scores",
    desc: "Performance broken into the distinct abilities that build it, rather than collapsed into a single number.",
  },
  {
    icon: HeadBulbIcon,
    title: "Understanding vs recall",
    desc: "A deliberate split between what was remembered, what was understood and what could be applied.",
  },
  {
    icon: ScaleIcon,
    title: "Three-layer benchmarking",
    desc: "Each dimension read against school, national and international cohorts alongside the learner's own score.",
  },
  {
    icon: StarIcon,
    title: "Strengths named clearly",
    desc: "The abilities a learner can be confident about, stated in language a child and a parent both recognise.",
  },
  {
    icon: SproutIcon,
    title: "Growth areas",
    desc: "Where the learner is still forming ability — framed as a stage of development, never as a failure.",
  },
  {
    icon: TargetIcon,
    title: "What will help next",
    desc: "Specific, doable actions for home and classroom that respond to this learner's exact pattern.",
  },
  {
    icon: OpenBookIcon,
    title: "A written insight",
    desc: "A short human summary that ties the data together into one paragraph a parent can act on.",
  },
];

export function ReportAnatomy() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 pb-12 sm:px-6 md:px-12 lg:px-page lg:pb-16">
        <Reveal className="rounded-3xl bg-[#fdf6e9] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <SectionHead
            eyebrow="Inside Every Edition"
            title="Eight things every report answers"
            intro="However old the learner, the report is built to answer the same set of questions — and to answer them in a way that leads somewhere."
          />

          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-8">
            {blocks.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={(i % 4) * 90}>
                  <div className="flex h-full flex-col">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gold/20 lg:h-12 lg:w-12">
                      <Icon
                        className="h-[22px] w-[22px] text-gold-dark lg:h-6 lg:w-6"
                        strokeWidth={1.6}
                      />
                    </span>
                    <h3 className="mt-4 font-serif text-[16px] font-semibold text-navy lg:text-[18px]">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px]">
                      {b.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
