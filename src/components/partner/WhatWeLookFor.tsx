import { lookFor } from "./data";
import { Panel } from "./Panel";

export function WhatWeLookFor() {
  return (
    <Panel
      title="What We Look For in Partners"
      intro="We look for partners who bring one or more of the following:"
    >
      <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
        {lookFor.map(({ label, Icon }) => (
          <li key={label} className="flex items-start gap-2.5">
            <span
              className="mt-px flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-[#eef3fb]"
              aria-hidden
            >
              <Icon className="h-4 w-4 text-navy-600" />
            </span>
            <span className="pt-1 text-[11.5px] font-medium leading-snug text-navy lg:text-[12.5px]">
              {label}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 rounded-xl bg-[#fdf6e7] px-4 py-3 text-center text-[12px] font-semibold text-navy ring-1 ring-gold/25 lg:text-[13px]">
        We value purpose-led partnerships over transactional arrangements.
      </p>
    </Panel>
  );
}
