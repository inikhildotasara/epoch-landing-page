import { BrainIcon, AnalyticsIcon, ArrowRight } from "./icons";
import { Reveal } from "./Reveal";

const cards = [
  {
    img: "/images/card-olympiad.png",
    icon: null,
    title: "Epoch Olympiad",
    subtitle: "International Olympiads (Classes 1–10)",
    desc: "Research-based international assessments designed to evaluate conceptual understanding, analytical reasoning, scientific thinking, and academic excellence.",
    cta: "Explore",
  },
  {
    img: "/images/card-brainiac.png",
    icon: <BrainIcon className="h-6 w-6 lg:h-7 lg:w-7 text-navy" />,
    title: "Brainiac Global",
    subtitle: "International Brain Booster Olympiads (Kindergarten)",
    desc: "Building cognitive foundations during the most critical years of brain development through age-appropriate assessments.",
    cta: "Learn More",
  },
  {
    img: "/images/card-ccbee.png",
    icon: <AnalyticsIcon className="h-6 w-6 lg:h-7 lg:w-7 text-navy" />,
    title: "MY CCBee",
    subtitle: "Performance Tracker & Booster Platform",
    desc: "AI-assisted academic analytics, progress tracking, diagnostic insights, and personalized improvement plans.",
    cta: "Explore Platform",
  },
];

function DashboardMock() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center p-4">
      <div className="w-full rounded-md border border-slate-200 shadow-sm overflow-hidden">
        <div className="h-6 bg-slate-100 flex items-center gap-1 px-2">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
        <div className="p-3 flex gap-3">
          <div className="flex-1 space-y-2">
            <div className="h-2 w-2/3 rounded bg-slate-200" />
            <div className="flex items-end gap-1.5 h-20">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-sky-500/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="w-16 flex flex-col items-center justify-center">
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
              <div className="absolute inset-0 rounded-full border-4 border-sky-500 border-r-transparent border-b-transparent rotate-45" />
            </div>
            <div className="mt-2 h-1.5 w-10 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Initiatives() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 py-14 lg:py-24 xl:py-32">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
            <div
              className="h-full rounded-xl border border-slate-200 bg-white overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-[transform,box-shadow] duration-300"
            >
              <div className="relative h-44 lg:h-52 bg-slate-100">
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <DashboardMock />
                )}
                {c.icon && (
                  <div className="absolute top-3 right-3 h-11 w-11 lg:h-12 lg:w-12 rounded-full bg-cream border border-gold/40 flex items-center justify-center shadow-sm">
                    {c.icon}
                  </div>
                )}
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="font-serif text-[19px] lg:text-[23px] xl:text-[26px] font-medium text-navy">
                  {c.title}
                </h3>
                <p className="mt-0.5 text-[12.5px] lg:text-[14px] xl:text-[15px] text-slate-500">
                  {c.subtitle}
                </p>
                <p className="mt-3 text-[13px] lg:text-[15px] xl:text-[16px] leading-relaxed xl:leading-7 text-slate-600">
                  {c.desc}
                </p>
                <a
                  href="#"
                  className="mt-4 xl:mt-5 inline-flex items-center gap-1.5 text-[13px] lg:text-[15px] xl:text-[16px] font-semibold text-navy hover:text-gold-dark transition-colors"
                >
                  {c.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
