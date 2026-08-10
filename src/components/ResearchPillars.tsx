import {
  BrainIcon,
  AnalyticsIcon,
  GlobeIcon,
  HeartPulseIcon,
  MapIcon,
  ChipIcon,
} from "./icons";

const pillars = [
  {
    icon: BrainIcon,
    title: "Cognitive Intelligence",
    desc: "Understanding how children think and learn.",
  },
  {
    icon: AnalyticsIcon,
    title: "Diagnostic Analytics",
    desc: "Turning assessment data into actionable insights.",
  },
  {
    icon: GlobeIcon,
    title: "International Benchmarking",
    desc: "Aligning with global standards for meaningful comparison.",
  },
  {
    icon: HeartPulseIcon,
    title: "Academic Health Report",
    desc: "A comprehensive view of a learner's academic well-being.",
  },
  {
    icon: MapIcon,
    title: "Curriculum Mapping",
    desc: "Ensuring depth, conceptual clarity & progressive learning.",
  },
  {
    icon: ChipIcon,
    title: "AI-Powered Learning Analytics",
    desc: "Leveraging technology to accelerate learning outcomes.",
  },
];

export function ResearchPillars() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 pb-6 pt-2 lg:pt-6">
        <div className="text-center">
          <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[44px] xl:text-[52px] font-medium text-navy">
            Education Research &amp; Innovation
          </h2>
          <p className="mt-2 text-[14px] lg:text-[16px] xl:text-[18px] text-slate-500">
            Our research pillars drive every initiative we develop.
          </p>
        </div>

        <div className="mt-10 lg:mt-14 overflow-hidden rounded-xl border-t border-l border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex flex-col items-center border-r border-b border-slate-200 px-4 py-10 lg:px-6 lg:py-12 text-center"
                >
                  <Icon className="h-12 w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-gold" />
                  <h3 className="mt-4 lg:mt-5 text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-navy leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[12px] lg:text-[14px] xl:text-[15px] leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
