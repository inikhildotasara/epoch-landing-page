import { lookFor } from "./data";

export function WhatWeLookFor() {
  return (
    /* Five tiles: two rows on small screens, one row from lg where each tile
       still has room for a two-line title and a three-line description. */
    <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-5 xl:gap-x-7">
      {lookFor.map(({ title, desc, Icon }) => (
        <li key={title} className="flex flex-col items-center text-center">
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#fdf6e7] ring-1 ring-gold/25 lg:h-[58px] lg:w-[58px]">
            <Icon
              className="h-[26px] w-[26px] text-navy lg:h-7 lg:w-7"
              aria-hidden
            />
          </span>
          <h3 className="mt-3 text-[12.5px] font-semibold leading-snug text-navy lg:text-[13.5px]">
            {title}
          </h3>
          <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-500 lg:text-[12.5px]">
            {desc}
          </p>
        </li>
      ))}
    </ul>
  );
}
