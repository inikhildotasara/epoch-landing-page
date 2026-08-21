import { whyPartner } from "./data";
import { Panel } from "./Panel";

export function WhyPartner() {
  return (
    <Panel title="Why Partner With Us?">
      {/* Five tiles across from xl, where the content column is at its widest;
          two and three column steps below that keep each description readable. */}
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-5 xl:gap-x-4">
        {whyPartner.map(({ title, desc, Icon }) => (
          <li key={title} className="flex flex-col items-center text-center">
            <span
              className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-[#fdf6e7] ring-1 ring-gold/25 lg:h-[52px] lg:w-[52px]"
              aria-hidden
            >
              <Icon className="h-[23px] w-[23px] text-navy lg:h-[26px] lg:w-[26px]" />
            </span>
            <h3 className="mt-2.5 text-[12px] font-semibold leading-snug text-navy lg:text-[13px]">
              {title}
            </h3>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 lg:text-[11.5px]">
              {desc}
            </p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
