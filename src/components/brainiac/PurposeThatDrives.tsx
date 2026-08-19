import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import { BrainIcon, EyeIcon, GridIcon, LinkIcon, RocketIcon } from "../icons";

const pillars = [
  {
    icon: EyeIcon,
    color: "#6d4aa7",
    title: "Observe",
    desc: "Noticing details in familiar situations",
  },
  {
    icon: GridIcon,
    color: "#16a34a",
    title: "Recognise",
    desc: "Identifying patterns, shapes and relationships",
  },
  {
    icon: LinkIcon,
    color: "#0f9c9a",
    title: "Connect",
    desc: "Making meaningful connections between ideas",
  },
  {
    icon: BrainIcon,
    color: "#e0407f",
    title: "Reason",
    desc: "Thinking through simple situations",
  },
  {
    icon: RocketIcon,
    color: "#e8862e",
    title: "Explore",
    desc: "Trying, questioning and discovering possible solutions",
  },
];

export function PurposeThatDrives() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-[#fbfaff] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <SectionHeading>The Purpose That Drives Us</SectionHeading>

          <div className="mx-auto mt-5 max-w-3xl space-y-2.5 text-center text-[12.5px] leading-relaxed text-navy lg:text-[13.5px]">
            <p>
              The early years are not only a time to learn what things are — they
              are the time to develop the habit of discovering why and how they
              work.
            </p>
            <p>
              Brainiac Global focuses on the thinking foundations that begin
              before formal academic learning: observing carefully, recognising
              patterns, connecting ideas, asking questions and solving simple
              problems.
            </p>
            <p>
              Through joyful, age-appropriate experiences and meaningful
              assessment, we aim to help children build the confidence and
              curiosity to become independent thinkers.
            </p>
          </div>

          {/* Hairline dividers only appear once all five pillars share a row. */}
          <div className="mt-8 grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:mt-10 lg:grid-cols-5 lg:gap-y-0">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.title}
                  delay={i * 70}
                  className={`flex flex-col items-center px-3 text-center lg:px-4 ${
                    i > 0 ? "lg:border-l lg:border-slate-200" : ""
                  }`}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full lg:h-12 lg:w-12"
                    style={{ backgroundColor: p.color }}
                  >
                    <Icon
                      className="h-[22px] w-[22px] text-white lg:h-6 lg:w-6"
                      strokeWidth={1.7}
                    />
                  </span>
                  <h3
                    className="mt-2.5 text-[13px] font-bold lg:text-[13.5px]"
                    style={{ color: p.color }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-snug text-navy lg:text-[12px]">
                    {p.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
