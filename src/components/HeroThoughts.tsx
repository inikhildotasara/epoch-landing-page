/* Cognitive-ability labels that point at the brain in the hero artwork.
 *
 * The artwork is a wide cutout whose only croppable content is the empty margin
 * around the subject, so the brain always sits in the same place *within the
 * artwork*. Each label is therefore described in artwork coordinates — `y` down
 * from the top, `reach` out from the centre line, both as a percentage of the
 * artwork height — and mapped back to the box with container query units.
 *
 * object-cover paints the artwork at max(boxW, A × boxH) wide, bottom aligned,
 * hence the max() pairs: whichever term wins matches the axis cover scaled from,
 * so the dots stay on the brain at every box shape the layout can produce.
 */
const ART_ASPECT = 1.818; // hero-brain.webp, 1536 × 845

type Thought = {
  label: string;
  side: "left" | "right";
  y: number;
  reach: number;
};

/* Reach values follow the brain's silhouette at each label's height, so the
   dots trace its outline rather than sitting on a straight column. */
const thoughts: Thought[] = [
  { label: "Logical Reasoning", side: "left", y: 15, reach: 15 },
  { label: "Mathematics", side: "left", y: 25, reach: 23 },
  { label: "Language", side: "left", y: 34.5, reach: 26 },
  { label: "Memory", side: "left", y: 44, reach: 21 },
  { label: "Analytical Thinking", side: "right", y: 17, reach: 12.5 },
  { label: "Creativity", side: "right", y: 26.5, reach: 20.5 },
  { label: "Problem Solving", side: "right", y: 36, reach: 21 },
  { label: "Concept Mastery", side: "right", y: 45, reach: 15 },
];

const DOT = "#8ed3ff";

/* Artwork-height percentage → container units, honouring how cover scales. */
const span = (pct: number) =>
  `max(${(pct / ART_ASPECT).toFixed(2)}cqw, ${pct}cqh)`;

function Dot() {
  return (
    <span
      className="h-[5px] w-[5px] shrink-0 rounded-full xl:h-1.5 xl:w-1.5"
      style={{
        backgroundColor: DOT,
        boxShadow: `0 0 6px ${DOT}, 0 0 2px #fff`,
      }}
    />
  );
}

export function HeroThoughts() {
  return (
    <ul
      aria-hidden
      className="hero-fade pointer-events-none absolute inset-0 hidden select-none supports-[container-type:size]:block"
      style={{ animationDelay: "420ms" }}
    >
      {thoughts.map((t) => {
        const isLeft = t.side === "left";
        return (
          <li
            key={t.label}
            className={`absolute flex translate-y-1/2 items-center gap-0.5 sm:gap-1.5 ${
              isLeft ? "flex-row" : "flex-row-reverse"
            }`}
            style={{
              bottom: span(100 - t.y),
              [isLeft ? "right" : "left"]: `calc(50% + ${span(t.reach)})`,
            }}
          >
            <span
              /* All eight labels share the artwork on the narrowest phones, so
                 the type tightens below sm to keep them clear of each other and
                 inside the viewport. */
              className={`max-w-[62px] text-[8px] font-medium leading-tight tracking-wide text-white/85 sm:max-w-[112px] sm:text-[10.5px] lg:max-w-[72px] lg:text-[10px] xl:max-w-[124px] xl:text-[11px] 2xl:max-w-[140px] 2xl:text-[12px] ${
                isLeft ? "text-right" : "text-left"
              }`}
              style={{ textShadow: "0 1px 6px rgba(3, 21, 47, 0.9)" }}
            >
              {t.label}
            </span>
            <span
              className="h-px w-2 shrink-0 sm:w-5 lg:w-3 xl:w-5 2xl:w-6"
              style={{
                backgroundImage: `linear-gradient(to ${
                  isLeft ? "right" : "left"
                }, transparent, ${DOT}cc)`,
              }}
            />
            <Dot />
          </li>
        );
      })}
    </ul>
  );
}
