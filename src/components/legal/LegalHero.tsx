import { Reveal } from "../Reveal";
import { ShieldIcon, CalendarIcon, CheckIcon } from "../icons";

export function LegalHero({
  eyebrow,
  title,
  effectiveDate,
  lastUpdated,
  lead,
  scopeIntro,
  scopeTitle = "This Policy applies when you",
  scopeItems,
  objective,
}: {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  lead: string | string[];
  scopeIntro?: string;
  scopeTitle?: string;
  scopeItems: string[];
  objective: string;
}) {
  const leadParagraphs = Array.isArray(lead) ? lead : [lead];

  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={{ backgroundColor: "#0a1b3d" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(55% 60% at 78% 30%, rgba(43,86,168,0.35) 0%, rgba(10,27,61,0) 62%)",
        }}
      />
      <div className="relative mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
        <Reveal className="hero-anim">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-gold lg:text-[15px]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-[30px] font-medium leading-[1.15] text-white sm:text-[38px] lg:text-[46px] xl:text-[52px]">
            {title}
          </h1>
          <span className="mt-5 block h-[3px] w-16 rounded-full bg-gold" />

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {[
              { label: "Effective Date", value: effectiveDate },
              { label: "Last Updated", value: lastUpdated },
            ].map((d) => (
              <span
                key={d.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] text-slate-300 lg:text-[13px]"
              >
                <CalendarIcon className="h-4 w-4 text-gold" strokeWidth={1.6} />
                <span className="font-medium text-white">{d.label}:</span>
                {d.value}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="hero-fade">
          <div className="mt-9 grid grid-cols-1 gap-8 lg:mt-11 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <div className="space-y-4 text-[14px] leading-relaxed text-slate-300 lg:text-[15.5px]">
              {leadParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {scopeIntro && <p>{scopeIntro}</p>}
              <p className="border-l-2 border-gold/70 pl-4 text-slate-200">
                {objective}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:p-7">
              <div className="flex items-center gap-2.5">
                <ShieldIcon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white lg:text-[13px]">
                  {scopeTitle}
                </p>
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {scopeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon
                      className="mt-[3px] h-3.5 w-3.5 shrink-0 text-gold"
                      strokeWidth={2.4}
                    />
                    <span className="text-[13px] leading-relaxed text-slate-300 lg:text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
