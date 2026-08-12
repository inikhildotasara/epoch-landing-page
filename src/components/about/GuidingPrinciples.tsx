import {
  HeadBulbIcon,
  MicroscopeDetailIcon,
  ChildFaceIcon,
  TargetDartIcon,
  ShieldIcon,
  OpenBookIcon,
} from "../icons";
import { Reveal } from "../Reveal";

const principles = [
  { icon: HeadBulbIcon, label: "Think Beyond Memory" },
  { icon: MicroscopeDetailIcon, label: "Research Before Assumption" },
  { icon: ChildFaceIcon, label: "Every Child Can Grow" },
  { icon: TargetDartIcon, label: "Measure What Matters" },
  { icon: ShieldIcon, label: "Innovation with Integrity" },
  { icon: OpenBookIcon, label: "Learning for Life" },
];

// Whether a cell shows a short divider on its left edge (i.e. it is NOT the
// first cell in its row) at base (2 cols) / sm (3 cols) / lg (6 cols).
const dividerVis = [
  "hidden",
  "block",
  "hidden sm:block",
  "block sm:hidden lg:block",
  "hidden sm:block",
  "block",
];

export function GuidingPrinciples() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-12 lg:py-20">
        <Reveal>
          <div className="relative rounded-2xl border border-slate-200">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-5 text-[13px] font-semibold uppercase tracking-[0.22em] text-gold-dark lg:text-[15px]">
              Our Guiding Principles
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.label}
                    className="group relative flex flex-col items-center px-4 py-10 text-center lg:py-12"
                  >
                    <span
                      className={`pointer-events-none absolute left-0 top-1/2 h-1/2 w-px -translate-y-1/2 bg-slate-200 ${dividerVis[i]}`}
                    />
                    <Icon
                      className="h-12 w-12 text-[#464763] transition-transform duration-300 group-hover:scale-110 lg:h-[58px] lg:w-[58px]"
                      strokeWidth={1.4}
                    />
                    <h3 className="mt-4 text-[13px] font-semibold leading-snug text-[#2c2f57] lg:mt-5 lg:text-[14.5px]">
                      {p.label}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
