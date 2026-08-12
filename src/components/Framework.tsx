import {
  BrainIcon,
  StarIcon,
  RankingIcon,
  CertificateIcon,
  BulbIcon,
  PuzzleIcon,
  TrendUpIcon,
  GlobeIcon,
} from "./icons";
import { Reveal } from "./Reveal";

const traditional = [
  { icon: BrainIcon, label: "Memory" },
  { icon: StarIcon, label: "Marks" },
  { icon: RankingIcon, label: "Ranking" },
  { icon: CertificateIcon, label: "Certificates" },
];

const epoch = [
  { icon: BulbIcon, label: "Thinking" },
  { icon: PuzzleIcon, label: "Understanding" },
  { icon: PuzzleIcon, label: "Diagnosis" },
  { icon: TrendUpIcon, label: "Improvement" },
  { icon: BrainIcon, label: "Academic\nHealth" },
  { icon: BulbIcon, label: "Growth" },
  { icon: GlobeIcon, label: "Intelligence" },
];

function Node({
  icon: Icon,
  label,
}: {
  icon: (p: { className?: string; strokeWidth?: number }) => React.ReactElement;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 shrink-0 w-[58px] xl:w-[60px]">
      <div className="h-12 w-12 xl:h-14 xl:w-14 rounded-full border border-gold/60 flex items-center justify-center">
        <Icon
          className="h-[24px] w-[24px] xl:h-[26px] xl:w-[26px] text-gold"
          strokeWidth={1.9}
        />
      </div>
      <span className="text-[10px] lg:text-[12px] leading-tight text-slate-200 text-center whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}

function Arrow() {
  return <span className="text-gold/70 text-sm lg:text-base shrink-0 mt-[14px] lg:mt-[16px]">→</span>;
}

function LabelRule({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-2 w-full h-5">
      <span className="h-px flex-1 border-t border-dashed border-white/20" />
      <span className={`text-[12px] lg:text-[14px] font-medium tracking-wide ${color}`}>
        {text}
      </span>
      <span className="h-px flex-1 border-t border-dashed border-white/20" />
    </div>
  );
}

export function Framework() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-6 lg:py-8">
        <Reveal className="rounded-2xl bg-navy px-6 py-8 md:px-10 lg:px-14 lg:py-12">
          <h2 className="text-center font-serif text-[24px] md:text-[27px] lg:text-[38px] xl:text-[44px] font-medium text-white">
            A New Framework for Learning
          </h2>

          <div className="mt-8 lg:mt-12 flex flex-col xl:flex-row items-stretch justify-center gap-6 xl:gap-2">
            {/* Traditional */}
            <div className="flex-[4] flex flex-col">
              <LabelRule text="Traditional Education" color="text-slate-300" />
              <div className="mt-5 flex flex-wrap xl:flex-nowrap items-start justify-center gap-y-4 gap-x-1">
                {traditional.map((t, i) => (
                  <div key={t.label} className="flex items-start gap-1">
                    <Node icon={t.icon} label={t.label} />
                    {i < traditional.length - 1 && <Arrow />}
                  </div>
                ))}
              </div>
            </div>

            {/* VS with vertical divider, centered on the icon row */}
            <div className="flex flex-col items-center shrink-0">
              <div className="hidden h-5 xl:block" />
              <div className="relative mt-5 flex h-12 xl:h-14 items-center justify-center">
                <span className="absolute left-1/2 top-1/2 hidden h-24 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gold/70 xl:block" />
                <div className="relative h-12 w-12 xl:h-14 xl:w-14 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-[14px] lg:text-[16px] font-bold text-navy">VS</span>
                </div>
              </div>
            </div>

            {/* Epoch */}
            <div className="flex-[7] flex flex-col">
              <LabelRule text="Epoch Framework" color="text-gold" />
              <div className="mt-5 flex flex-wrap xl:flex-nowrap items-start justify-center gap-y-4 gap-x-0.5">
                {epoch.map((e, i) => (
                  <div key={e.label} className="flex items-start gap-0.5">
                    <Node icon={e.icon} label={e.label} />
                    {i < epoch.length - 1 && <Arrow />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
