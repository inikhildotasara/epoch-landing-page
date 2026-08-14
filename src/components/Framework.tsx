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
    <div className="flex flex-col items-center gap-2 shrink-0 w-[58px] xl:w-[clamp(60px,4.7vw,104px)]">
      <div className="h-12 w-12 xl:h-[clamp(56px,4.1vw,88px)] xl:w-[clamp(56px,4.1vw,88px)] rounded-full border border-gold/60 flex items-center justify-center">
        <Icon
          className="h-[24px] w-[24px] xl:h-[clamp(26px,1.93vw,42px)] xl:w-[clamp(26px,1.93vw,42px)] text-gold"
          strokeWidth={1.9}
        />
      </div>
      <span className="text-[10px] lg:text-[12px] xl:text-[clamp(12px,0.72vw,15px)] leading-tight text-slate-200 text-center whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}

function Arrow() {
  // Matches the circle's height so the glyph stays centred on it as the nodes scale.
  return (
    <span className="shrink-0 flex items-center h-12 xl:h-[clamp(56px,4.1vw,88px)] text-gold/70 text-sm lg:text-base xl:text-[clamp(16px,0.95vw,20px)]">
      →
    </span>
  );
}

function LabelRule({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-2 w-full h-5">
      <span className="h-px flex-1 border-t border-dashed border-white/20" />
      <span
        className={`text-[12px] lg:text-[14px] xl:text-[clamp(14px,0.85vw,17px)] font-medium tracking-wide ${color}`}
      >
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
        {/* Below xl the diagram stacks and its rows are only ~530px wide, so the
            card is capped to stop it swimming in empty navy. From xl it goes back
            to the page width like every other section and the nodes scale instead. */}
        <Reveal className="mx-auto w-full max-w-[700px] rounded-2xl bg-navy px-5 py-7 md:px-8 lg:px-10 lg:py-9 xl:max-w-none xl:px-10 xl:py-11 2xl:px-14 2xl:py-14">
          <h2 className="text-center font-serif text-fluid-2 font-medium text-white">
            A New Framework for Learning
          </h2>

          <div className="mt-6 lg:mt-8 xl:mt-10 flex flex-col xl:flex-row items-stretch justify-center gap-6 xl:gap-2">
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
              <div className="relative mt-5 flex h-12 xl:h-[clamp(56px,4.1vw,88px)] items-center justify-center">
                <span className="absolute left-1/2 top-1/2 hidden h-24 xl:h-[clamp(96px,7.2vw,146px)] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gold/70 xl:block" />
                <div className="relative h-12 w-12 xl:h-[clamp(56px,4.1vw,88px)] xl:w-[clamp(56px,4.1vw,88px)] rounded-full bg-gold flex items-center justify-center">
                  <span className="text-[14px] lg:text-[16px] xl:text-[clamp(16px,1.05vw,22px)] font-bold text-navy">
                    VS
                  </span>
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
