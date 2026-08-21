import { GroupIcon, HandshakeIcon } from "../icons";
import { closingStats } from "./data";

export function ClosingBand() {
  return (
    <section className="bg-navy">
      <div className="mx-auto grid w-full gap-8 px-4 py-10 sm:px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.5fr)] lg:items-center lg:gap-10 lg:px-page lg:py-12">
        <div className="flex items-start gap-4">
          <span
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 sm:flex"
            aria-hidden
          >
            <GroupIcon className="h-6 w-6 text-gold" />
          </span>
          <p className="font-serif text-[16px] font-medium leading-snug text-white lg:text-[19px]">
            Together, let&rsquo;s create meaningful learning experiences that
            shape stronger minds and a better tomorrow.
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-6 border-y border-white/10 py-6 lg:gap-8 lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
          {closingStats.map(({ big, label, Icon }) => (
            <li key={label} className="text-center">
              <Icon className="mx-auto h-5 w-5 text-gold" aria-hidden />
              <p className="mt-1.5 font-serif text-[22px] font-semibold leading-none text-white lg:text-[28px]">
                {big}
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-slate-300 lg:text-[12px]">
                {label}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 lg:justify-end">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10"
            aria-hidden
          >
            <HandshakeIcon className="h-[22px] w-[22px] text-gold" />
          </span>
          <p className="text-[12.5px] font-semibold leading-snug text-white lg:text-[13.5px]">
            We look forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
}
