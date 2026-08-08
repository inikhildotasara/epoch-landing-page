import {
  BrainIcon,
  StarIcon,
  RankingIcon,
  CertificateIcon,
  BulbIcon,
  PuzzleIcon,
  AnalyticsIcon,
  GrowthIcon,
  HeartPulseIcon,
  GlobeIcon,
} from "./icons";

const traditional = [
  { icon: BrainIcon, label: "Memory" },
  { icon: StarIcon, label: "Marks" },
  { icon: RankingIcon, label: "Ranking" },
  { icon: CertificateIcon, label: "Certificates" },
];

const epoch = [
  { icon: BulbIcon, label: "Thinking" },
  { icon: PuzzleIcon, label: "Understanding" },
  { icon: AnalyticsIcon, label: "Diagnosis" },
  { icon: GrowthIcon, label: "Improvement" },
  { icon: HeartPulseIcon, label: "Academic\nHealth" },
  { icon: BulbIcon, label: "Growth" },
  { icon: GlobeIcon, label: "Intelligence" },
];

function Node({
  icon: Icon,
  label,
}: {
  icon: (p: { className?: string }) => React.ReactElement;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 shrink-0 w-[62px]">
      <div className="h-10 w-10 rounded-full border border-gold/50 flex items-center justify-center">
        <Icon className="h-[18px] w-[18px] text-gold" />
      </div>
      <span className="text-[10px] leading-tight text-slate-200 text-center whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}

function Arrow() {
  return <span className="text-gold/50 text-sm shrink-0 mt-[10px]">→</span>;
}

function LabelRule({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-2 w-full h-5">
      <span className="h-px flex-1 border-t border-dashed border-white/20" />
      <span className={`text-[12px] font-medium tracking-wide ${color}`}>
        {text}
      </span>
      <span className="h-px flex-1 border-t border-dashed border-white/20" />
    </div>
  );
}

export function Framework() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-6">
        <div className="rounded-2xl bg-navy px-6 py-8 md:px-10">
          <h2 className="text-center font-serif text-[24px] md:text-[27px] font-medium text-white">
            A New Framework for Learning
          </h2>

          <div className="mt-8 flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-3">
            {/* Traditional */}
            <div className="flex-1 flex flex-col">
              <LabelRule text="Traditional Education" color="text-slate-300" />
              <div className="mt-5 flex flex-wrap items-start justify-center gap-y-4 gap-x-1">
                {traditional.map((t, i) => (
                  <div key={t.label} className="flex items-start gap-1">
                    <Node icon={t.icon} label={t.label} />
                    {i < traditional.length - 1 && <Arrow />}
                  </div>
                ))}
              </div>
            </div>

            {/* VS with vertical divider, aligned to icon row */}
            <div className="flex flex-col items-center shrink-0">
              <div className="h-5" />
              <div className="mt-5 h-10 flex items-center relative">
                <span className="absolute left-1/2 -translate-x-1/2 h-16 w-px bg-white/15" />
                <div className="relative h-11 w-11 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-[12px] font-bold text-navy">VS</span>
                </div>
              </div>
            </div>

            {/* Epoch */}
            <div className="flex-1 flex flex-col">
              <LabelRule text="Epoch Framework" color="text-gold" />
              <div className="mt-5 flex flex-wrap items-start justify-center gap-y-4 gap-x-0.5">
                {epoch.map((e, i) => (
                  <div key={e.label} className="flex items-start gap-0.5">
                    <Node icon={e.icon} label={e.label} />
                    {i < epoch.length - 1 && <Arrow />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
