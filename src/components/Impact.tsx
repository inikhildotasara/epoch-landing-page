import {
  BuildingIcon,
  GlobeIcon,
  DocIcon,
  BulbIcon,
  AnalyticsIcon,
  GradCapIcon,
} from "./icons";

const stats = [
  { icon: BuildingIcon, big: "500+", label: "Schools Worldwide" },
  { icon: GlobeIcon, big: "5+", label: "Countries" },
  { icon: DocIcon, big: "1M+", label: "Assessments Conducted" },
  { icon: BulbIcon, big: "", label: "Research-Driven Assessments" },
  { icon: AnalyticsIcon, big: "", label: "Diagnostic Reporting" },
  { icon: GradCapIcon, big: "", label: "Future-Ready Learners" },
];

export function Impact() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-14">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark">
            OUR IMPACT
          </p>
          <h2 className="mt-2 font-serif text-[28px] md:text-[32px] font-medium text-navy">
            Research Today. Better Tomorrow.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white border border-gold/30 flex items-center justify-center shadow-sm">
                  <Icon className="h-7 w-7 text-gold-dark" />
                </div>
                {s.big && (
                  <div className="mt-3 font-serif text-[26px] font-bold text-navy leading-none">
                    {s.big}
                  </div>
                )}
                <div
                  className={`${
                    s.big ? "mt-1" : "mt-3"
                  } text-[12.5px] font-medium text-slate-600 max-w-[130px]`}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
