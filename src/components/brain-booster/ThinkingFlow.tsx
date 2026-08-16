import { Fragment } from "react";
import { Reveal } from "../Reveal";
import {
  EyeIcon,
  GridIcon,
  NetworkIcon,
  RocketIcon,
  ScaleIcon,
} from "../icons";

const steps = [
  { icon: EyeIcon, label: "Observe", color: "#6d4aa7" },
  { icon: GridIcon, label: "Recognise", color: "#16a34a" },
  { icon: NetworkIcon, label: "Connect", color: "#0f9c9a" },
  { icon: ScaleIcon, label: "Reason", color: "#e0407f" },
  { icon: RocketIcon, label: "Explore", color: "#e8862e" },
];

export function ThinkingFlow() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pt-6 pb-10 lg:pt-8 lg:pb-12">
        <Reveal className="rounded-2xl bg-navy px-6 py-7 sm:px-8 lg:px-10">
          {/* The dashed connectors only make sense once the five stages sit on a
              single row, so they stay hidden while the grid wraps. */}
          <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:flex lg:items-start lg:gap-2">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Fragment key={s.label}>
                  <div className="flex flex-col items-center gap-2 lg:shrink-0">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14"
                      style={{ backgroundColor: s.color }}
                    >
                      <Icon
                        className="h-6 w-6 text-white lg:h-7 lg:w-7"
                        strokeWidth={1.7}
                      />
                    </span>
                    <span className="text-[12px] font-semibold text-white lg:text-[12.5px]">
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="mt-6 hidden flex-1 items-center gap-1 lg:mt-7 lg:flex">
                      <span className="h-0 flex-1 border-t border-dashed border-white/35" />
                      <span
                        className="text-[13px] leading-none text-white/60"
                        aria-hidden
                      >
                        &#10095;
                      </span>
                    </span>
                  )}
                </Fragment>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
