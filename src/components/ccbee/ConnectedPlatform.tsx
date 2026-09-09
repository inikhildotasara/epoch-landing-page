import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../Reveal";
import { BuildingIcon, ChildFaceIcon, GroupIcon, UserIcon } from "../icons";

const perspectives = [
  {
    icon: GroupIcon,
    color: "#4f9c46",
    title: "Parent",
    desc: ["Understands the child's daily journey", "Receives relevant updates", "Connects with teachers"],
  },
  {
    icon: UserIcon,
    color: "#7c5cd6",
    title: "Teacher",
    desc: ["Records and supports learning", "Tracks progress", "Acts when attention is needed"],
  },
  {
    icon: BuildingIcon,
    color: "#e8862e",
    title: "School",
    desc: ["Sees the bigger picture", "Identifies patterns", "Makes informed decisions"],
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
  desc: string[];
  className?: string;
}) {
  return (
    <div
      className={`relative z-10 rounded-2xl border px-5 py-4 shadow-sm ${className}`}
      style={{ borderColor: `${color}35`, backgroundColor: `${color}0d` }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ color, backgroundColor: `${color}1c` }}>
          <Icon className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <h3 className="text-[15px] font-bold" style={{ color }}>{title}</h3>
      </div>
      <ul className="mt-3 space-y-1 text-[11.5px] leading-snug text-slate-600">
        {desc.map((item) => <li key={item} className="flex gap-1.5"><span style={{ color }}>•</span>{item}</li>)}
      </ul>
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

          <div className="relative mx-auto mt-7 max-w-4xl md:mt-10">
            <div className="hidden md:absolute md:left-[31%] md:top-1/2 md:block md:h-px md:w-[12%] md:bg-slate-200" />
            <div className="hidden md:absolute md:left-[58%] md:top-[34%] md:h-[18%] md:w-px md:bg-slate-200" />
            <div className="hidden md:absolute md:left-[58%] md:top-1/2 md:block md:h-px md:w-[12%] md:bg-slate-200" />
            <div className="grid items-center gap-5 md:grid-cols-[1fr_220px_1fr] md:grid-rows-2 md:gap-x-12 md:gap-y-5 lg:grid-cols-[1fr_250px_1fr]">
            <Perspective {...perspectives[0]} className="md:row-span-2" />

            <div className="relative row-start-1 flex items-center justify-center md:row-span-2">
              {/* Orbit the three roles sit on, once they surround the child */}
              <span
                className="pointer-events-none absolute h-[205px] w-[205px] rounded-full border border-dashed border-slate-200 lg:h-[230px] lg:w-[230px]"
                aria-hidden
              />
              <div className="relative flex h-[155px] w-[155px] flex-col items-center justify-center rounded-full border-[6px] border-[#d9eff8] bg-white shadow-md lg:h-[175px] lg:w-[175px]">
                <span className="absolute inset-3 rounded-full border border-dashed border-slate-200" />
                <div className="flex flex-col items-center">
                  <ChildFaceIcon className="h-12 w-12 text-navy" strokeWidth={1.5} />
                  <p className="mt-2 text-[15px] font-bold text-navy">Child</p>
                  <p className="text-center text-[12px] font-semibold leading-snug text-gold-dark">Learning Journey</p>
                </div>
              </div>
            </div>

            <Perspective {...perspectives[1]} />

            <Perspective
              {...perspectives[2]}
            />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
