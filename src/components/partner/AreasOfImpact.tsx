import { impactAreas } from "./data";
import { Panel } from "./Panel";

/* Each partner logo comes as its own brand asset with a different shape and
   amount of built-in padding, so a single "max-h-full" rule makes some look
   oversized and others tiny. These per-logo caps even out the visual weight
   so all four sit at roughly the same size. */
const LOGO_SIZE: Record<number, string> = {
  0: "max-h-full max-w-[74%]",
  1: "max-h-[58%] max-w-[80%]",
  2: "max-h-full max-w-[88%]",
  3: "max-h-full max-w-[88%]",
};

export function AreasOfImpact() {
  return (
    <Panel
      title="Our Four Areas of Impact"
      intro="There are several ways a partner can work with us — across research, assessment, early learning and learning analytics."
    >
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {impactAreas.map(({ name, logo, tagline, desc, img, imgPosition, accent, Icon }, index) => (
          <li
            key={name}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <div className="relative h-40 bg-slate-100 sm:h-44 xl:h-36">
              <img
                src={img}
                alt={name}
                className={`h-full w-full ${imgPosition ?? "object-cover object-center"}`}
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
              <div className="flex h-14 items-center justify-center">
                <img
                  src={logo}
                  alt={name}
                  className={`object-contain ${LOGO_SIZE[index] ?? "max-h-full max-w-[85%]"}`}
                />
              </div>
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
