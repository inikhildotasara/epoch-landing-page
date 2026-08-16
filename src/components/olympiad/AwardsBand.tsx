import { Reveal } from "../Reveal";
import {
  ArrowRight,
  BuildingIcon,
  FlagIcon,
  GlobeIcon,
  GradCapIcon,
  MedalIcon,
  PinIcon,
  TrophyIcon,
} from "../icons";

const levels = [
  { icon: GlobeIcon, label: "International\nLevel" },
  { icon: FlagIcon, label: "National\nLevel" },
  { icon: PinIcon, label: "Zone\nLevel" },
  { icon: BuildingIcon, label: "School\nLevel" },
  { icon: GradCapIcon, label: "Class\nLevel" },
];

const recognitions = [
  {
    icon: GradCapIcon,
    title: "Scholarships",
    desc: "Scholarship opportunities for eligible achievers as per defined criteria.",
  },
  {
    icon: MedalIcon,
    title: "Special Recognition",
    desc: "Special awards for notable achievements and overall excellence.",
  },
];

function LevelRow({ tone, label }: { tone: "pre" | "mains"; label: string }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
      <span
        className={`w-fit shrink-0 rounded-md px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-white lg:text-[11px] md:w-[104px] md:text-center ${
          tone === "pre" ? "bg-navy" : "bg-gold-dark"
        }`}
      >
        {label}
      </span>
      <div className="grid flex-1 grid-cols-3 gap-3 sm:grid-cols-5">
        {levels.map((l) => {
          const Icon = l.icon;
          return (
            <div
              key={`${label}-${l.label}`}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <Icon
                className={`h-6 w-6 ${
                  tone === "pre" ? "text-navy" : "text-gold-dark"
                }`}
                strokeWidth={1.6}
              />
              <span className="whitespace-pre-line text-[10.5px] font-semibold leading-snug text-slate-600 lg:text-[11px]">
                {l.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AwardsBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="overflow-hidden rounded-2xl border border-slate-200">
          {/* At 1024 the recognition rail drops below and splits into two columns
              instead of squeezing three panels onto one row. */}
          <div className="grid grid-cols-1 lg:grid-cols-[236px_minmax(0,1fr)] xl:grid-cols-[236px_minmax(0,1fr)_246px]">
            <div className="flex flex-col justify-between gap-5 bg-navy px-6 py-6">
              <div>
                <h2 className="font-serif text-[17px] font-semibold leading-snug text-white lg:text-[18px]">
                  Awards, Scholarships &amp; Recognition
                </h2>
                <p className="mt-2 text-[11.5px] leading-relaxed text-slate-300 lg:text-[12px]">
                  We celebrate achievement at every stage of the journey.
                </p>
              </div>
              <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
                <TrophyIcon className="h-14 w-14 text-gold" strokeWidth={1.5} />
              </span>
            </div>

            <div className="border-t border-slate-200 px-5 py-6 lg:border-t-0 lg:border-l lg:px-6">
              <h3 className="text-center font-serif text-[14px] font-semibold text-navy lg:text-[15px]">
                Awards will be given in both levels (Pre &amp; Mains*)
              </h3>
              <div className="mt-5 flex flex-col gap-5">
                <LevelRow tone="pre" label="Pre Level" />
                <LevelRow tone="mains" label="Mains Level" />
              </div>
              <p className="mt-5 text-center text-[10.5px] font-medium text-slate-500 lg:text-[11px]">
                *Not applicable for IGKO (Single Level)
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 border-t border-slate-200 px-5 py-6 sm:grid-cols-2 lg:col-span-2 xl:col-span-1 xl:grid-cols-1 xl:border-t-0 xl:border-l">
              {recognitions.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                      <Icon
                        className="h-5 w-5 text-gold-dark"
                        strokeWidth={1.7}
                      />
                    </span>
                    <div>
                      <h4 className="text-[12.5px] font-bold text-navy lg:text-[13px]">
                        {r.title}
                      </h4>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600 lg:text-[12px]">
                        {r.desc}
                      </p>
                      <a
                        href="#faq"
                        className="mt-2 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-gold-dark transition-opacity hover:opacity-80 lg:text-[12px]"
                      >
                        Click here for more details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
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
