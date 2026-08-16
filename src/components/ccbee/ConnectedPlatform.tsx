import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../Reveal";
import { BuildingIcon, ChildFaceIcon, GroupIcon, UserIcon } from "../icons";

const perspectives = [
  {
    icon: GroupIcon,
    color: "#4f9c46",
    title: "Parent",
    desc: "Sees daily updates, achievements and connects with teachers.",
  },
  {
    icon: UserIcon,
    color: "#7c5cd6",
    title: "Teacher",
    desc: "Records activities, tracks progress and communicates effectively.",
  },
  {
    icon: BuildingIcon,
    color: "#e8862e",
    title: "School",
    desc: "Monitors performance, activities and takes data-driven decisions.",
  },
];

function Perspective({
  icon: Icon,
  color,
  title,
  desc,
  className = "",
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Icon className="h-8 w-8" style={{ color }} strokeWidth={1.6} />
      <h3
        className="mt-2 text-[13.5px] font-bold lg:text-[14px]"
        style={{ color }}
      >
        {title}
      </h3>
      <p className="mt-1.5 max-w-[210px] text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
        {desc}
      </p>
    </div>
  );
}

export function ConnectedPlatform() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8">
          <h2 className="text-center font-serif text-[18px] font-semibold leading-snug text-navy lg:text-[22px]">
            One Child. Three Perspectives.
            <br className="hidden sm:block" /> One Connected Platform.
          </h2>

          {/* The three roles orbit the child from md up; below that they simply
              stack under the child bubble. */}
          <div className="mt-7 grid grid-cols-1 justify-items-center gap-7 md:mt-9 md:grid-cols-3 md:items-center md:gap-4 lg:mt-11 lg:gap-6">
            <Perspective {...perspectives[0]} className="md:col-start-1" />

            <div className="relative flex flex-col items-center md:col-start-2 md:row-start-1">
              {/* Orbit the three roles sit on, once they surround the child */}
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-200 md:block lg:h-[340px] lg:w-[340px]"
                aria-hidden
              />
              <div className="relative flex h-[152px] w-[152px] items-center justify-center rounded-full border border-slate-200 bg-white lg:h-[168px] lg:w-[168px]">
                <span className="absolute inset-3 rounded-full border border-dashed border-slate-200" />
                <div className="flex flex-col items-center">
                  <ChildFaceIcon
                    className="h-9 w-9 text-navy"
                    strokeWidth={1.6}
                  />
                  <p className="mt-1.5 text-[12.5px] font-bold leading-snug text-navy lg:text-[13px]">
                    Child
                  </p>
                  <p className="text-[11.5px] font-semibold leading-snug text-gold-dark lg:text-[12px]">
                    Learning
                    <br />
                    Journey
                  </p>
                </div>
              </div>
            </div>

            <Perspective {...perspectives[1]} className="md:col-start-3 md:row-start-1" />

            <Perspective
              {...perspectives[2]}
              className="md:col-start-2 md:row-start-2 md:mt-2"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
