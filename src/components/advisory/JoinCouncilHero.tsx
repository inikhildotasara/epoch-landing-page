import { BuildingIcon, GlobeIcon } from "../icons";

const bookLabels = [
  "Academic Integrity",
  "Assessment Excellence",
  "Educational Vision",
  "Global Perspective",
];

const bookShades = ["#16233f", "#122043", "#0e1c46", "#0a1a4a"];

/* A stack of gold-lettered "books" standing in for the reference photograph,
   paired with an institution badge and a globe so the composition still
   reads as academia + global perspective without needing a stock photo. */
function BookStack() {
  return (
    <div className="relative mx-auto flex w-full max-w-[360px] items-end justify-center gap-4 sm:max-w-[420px]">
      <div className="flex w-full max-w-[240px] flex-col-reverse gap-[3px] sm:max-w-[270px]">
        {bookLabels.map((label, i) => (
          <div
            key={label}
            className="flex items-center rounded-[3px] px-3.5 py-2.5 shadow-[0_3px_8px_rgba(0,0,0,0.25)] sm:py-3"
            style={{
              background: `linear-gradient(90deg, ${bookShades[i]} 0%, #1c2c52 100%)`,
              marginLeft: `${i * 3}px`,
            }}
          >
            <span className="font-serif text-[10px] font-semibold uppercase tracking-[0.12em] text-gold sm:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="relative mb-2 flex shrink-0 flex-col items-center gap-3">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-navy shadow-[0_6px_16px_rgba(11,28,63,0.35)] sm:h-[74px] sm:w-[74px]">
          <BuildingIcon className="h-7 w-7 text-gold sm:h-8 sm:w-8" strokeWidth={1.5} />
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 bg-white shadow-[0_4px_12px_rgba(11,28,63,0.18)] sm:h-14 sm:w-14">
          <GlobeIcon className="h-6 w-6 text-navy sm:h-7 sm:w-7" strokeWidth={1.4} />
        </span>
      </div>
    </div>
  );
}

export function JoinCouncilHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full items-center gap-8 px-4 py-10 sm:px-6 md:px-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-page lg:py-14">
        <div>
          <h1 className="font-serif text-[26px] font-semibold leading-[1.15] text-navy sm:text-[32px] lg:text-[38px] xl:text-[42px]">
            Become a Part of Our
            <br />
            Advisory Council
          </h1>
          <span className="mt-4 block h-px w-16 bg-gold" />
          <p className="mt-4 max-w-[56ch] text-[13px] leading-relaxed text-slate-600 sm:text-[14px] lg:text-[14.5px]">
            We invite distinguished leaders from academia, institutions and
            society to guide our vision of moving education beyond marks
            towards deeper thinking, meaningful assessment and future
            readiness for every child.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 lg:p-9">
          <BookStack />
        </div>
      </div>
    </section>
  );
}
