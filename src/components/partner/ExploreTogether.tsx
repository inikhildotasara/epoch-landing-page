import { exploreAreas } from "./data";
import { Panel } from "./Panel";

export function ExploreTogether() {
  return (
    <Panel
      title="Areas We Can Explore Together"
      intro="Possible areas of collaboration — and what each one could look like."
    >
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {exploreAreas.map(({ area, desc }) => (
          <li
            key={area}
            className="rounded-xl border border-slate-200 bg-[#f7faff] px-3.5 py-3 transition-colors hover:border-navy/25 hover:bg-white"
          >
            <h3 className="text-[12px] font-semibold leading-snug text-navy lg:text-[12.5px]">
              {area}
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 lg:text-[11.5px]">
              {desc}
            </p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
