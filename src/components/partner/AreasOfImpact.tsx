import { impactAreas } from "./data";
import { Panel } from "./Panel";

export function AreasOfImpact() {
  return (
    <Panel
      title="Our Four Areas of Impact"
      intro="There are several ways a partner can work with us — across research, assessment, early learning and learning analytics."
    >
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {impactAreas.map(({ name, tagline, desc, img, imgPosition, accent, Icon }) => (
          <li
            key={name}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <div className="relative h-28 bg-slate-100 sm:h-32 xl:h-28">
              <img
                src={img}
                alt={name}
                className={`h-full w-full object-cover ${imgPosition ?? ""}`}
              />
              <span
                className="absolute left-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-white shadow-sm"
                style={{ backgroundColor: accent }}
                aria-hidden
              >
                <Icon className="h-4 w-4" />
              </span>
            </div>

            <div
              className="px-3 py-2 text-center"
              style={{ backgroundColor: accent }}
            >
              <p className="text-[11px] font-semibold leading-tight text-white lg:text-[11.5px]">
                {tagline}
              </p>
            </div>

            <div className="flex flex-1 flex-col px-3.5 py-3">
              <h3
                className="text-[12.5px] font-bold leading-snug lg:text-[13px]"
                style={{ color: accent }}
              >
                {name}
              </h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 lg:text-[11.5px]">
                {desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
