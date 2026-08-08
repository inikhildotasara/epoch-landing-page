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
      <div className="mx-auto max-w-[1200px] px-5 pb-6 pt-2">
        <div className="text-center">
          <h2 className="font-serif text-[28px] md:text-[32px] font-medium text-navy">
            Education Research &amp; Innovation
          </h2>
          <p className="mt-2 text-[14px] text-slate-500">
            Our research pillars drive every initiative we develop.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="text-center px-2">
                <div className="mx-auto h-14 w-14 rounded-xl bg-cream border border-gold/30 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-gold-dark" />
                </div>
                <h3 className="mt-4 text-[14px] font-semibold text-navy leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
