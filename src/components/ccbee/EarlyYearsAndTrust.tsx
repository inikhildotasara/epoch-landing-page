import { Reveal } from "../Reveal";
import {
  ChildFaceIcon,
  GradCapIcon,
  OpenBookIcon,
  SeedlingIcon,
  SproutIcon,
} from "../icons";

const stages = [
  { icon: SeedlingIcon, label: "Playgroup" },
  { icon: SproutIcon, label: "Nursery" },
  { icon: ChildFaceIcon, label: "KG" },
  { icon: OpenBookIcon, label: "Class 1" },
  { icon: GradCapIcon, label: "Class 2" },
];

function SchoolGraphic() {
  return (
    <svg viewBox="0 0 96 80" className="h-full w-full" aria-hidden>
      <path d="M48 6v9" stroke="#94a3b8" strokeWidth="1.6" />
      <path d="M48 6h9l-2.6 3.2L57 12.4h-9z" fill="#e8862e" />
      <path d="M22 30 48 16l26 14z" fill="#f0a05a" />
      <rect x="26" y="30" width="44" height="34" rx="2" fill="#f6b97a" />
      <rect x="14" y="42" width="14" height="22" rx="2" fill="#f0d9b5" />
      <rect x="68" y="42" width="14" height="22" rx="2" fill="#f0d9b5" />
      <rect x="42" y="46" width="12" height="18" rx="1.5" fill="#2f80c9" />
      <rect x="31" y="36" width="8" height="7" rx="1.2" fill="#fdf6ea" />
      <rect x="57" y="36" width="8" height="7" rx="1.2" fill="#fdf6ea" />
      <rect x="17" y="47" width="7" height="6" rx="1.2" fill="#fdf6ea" />
      <rect x="72" y="47" width="7" height="6" rx="1.2" fill="#fdf6ea" />
      <circle cx="48" cy="26" r="3.4" fill="#fdf6ea" />
      <path d="M8 64h80" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10" cy="58" r="6" fill="#7cbf8e" />
      <circle cx="86" cy="58" r="6" fill="#7cbf8e" />
    </svg>
  );
}

export function EarlyYearsAndTrust() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <div className="flex flex-col gap-5">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8">
            <h2 className="text-center font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
              Built for the Early Years
            </h2>
            <p className="mt-2 text-center text-[12.5px] font-semibold text-gold-dark lg:text-[13px]">
              Playgroup to Class 2
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[13px] leading-relaxed text-slate-600 lg:text-[13.5px]">
              The early years lay the foundation for a child&rsquo;s future. MY
              CCBee helps schools and parents nurture every small step, every
              day.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {stages.map((s) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.label}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 text-navy"
                      strokeWidth={1.7}
                    />
                    <span className="text-[12.5px] font-semibold text-navy lg:text-[13px]">
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal
            delay={80}
            className="rounded-2xl border border-slate-200 bg-[#fffaf4] p-5 sm:p-7 lg:p-8"
          >
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-7 sm:text-left">
              <span className="flex h-24 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-slate-200 lg:h-28 lg:w-32">
                <SchoolGraphic />
              </span>
              <div>
                <h2 className="font-serif text-[18px] font-semibold text-navy lg:text-[20px]">
                  Trusted by 500+ Schools
                </h2>
                <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[13.5px]">
                  Built by an experienced education team committed to helping
                  schools, teachers and parents work together for every
                  child&rsquo;s success.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
