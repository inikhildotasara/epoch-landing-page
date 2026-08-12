import {
  BuildingIcon,
  GlobeIcon,
  DocIcon,
  BulbIcon,
  AnalyticsIcon,
  GradCapIcon,
} from "./icons";
import { Reveal } from "./Reveal";

const stats = [
  { icon: BuildingIcon, big: "500+", label: "Schools Worldwide" },
  { icon: GlobeIcon, big: "5+", label: "Countries" },
  { icon: DocIcon, big: "5M+", label: "Assessments Conducted" },
  { icon: BulbIcon, big: "", label: "Research-Driven Assessments" },
  { icon: AnalyticsIcon, big: "", label: "Diagnostic Reporting" },
  { icon: GradCapIcon, big: "", label: "Future-Ready Learners" },
];

export function Impact() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-14 lg:py-24 xl:py-32">
        <Reveal className="text-center">
          <p className="text-[11px] lg:text-[12px] font-semibold tracking-[0.2em] text-gold-dark">
            OUR IMPACT
          </p>
          <h2 className="mt-2 font-serif text-[28px] md:text-[32px] lg:text-[44px] xl:text-[52px] font-medium text-navy">
            Research Today. Better Tomorrow.
          </h2>
        </Reveal>

        <div className="mt-10 lg:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-5 2xl:gap-7">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 90} className="group flex items-center gap-3 lg:gap-4">
                <div className="h-14 w-14 lg:h-16 lg:w-16 2xl:h-18 2xl:w-18 shrink-0 rounded-full bg-white border border-gold/30 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 text-gold-dark" />
                </div>
                <div className="text-left">
                  {s.big && (
                    <div className="font-serif text-[24px] lg:text-[30px] 2xl:text-[36px] font-medium text-navy leading-none">
                      {s.big}
                    </div>
                  )}
                  <div
                    className={`${
                      s.big ? "mt-1.5" : ""
                    } text-[12.5px] lg:text-[13.5px] 2xl:text-[14px] font-medium text-slate-600 leading-snug`}
                  >
                    {s.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
