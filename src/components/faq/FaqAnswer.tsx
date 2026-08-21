/* An answer is a sequence of paragraphs; a nested array becomes a bullet list
   and a `links` block becomes a row of inline links. */
export type FaqBlock =
  | string
  | string[]
  | { links: { label: string; href: string }[] };

export type FaqItem = { q: string; a: FaqBlock[] };

export function FaqAnswer({
  blocks,
  textClass,
  dotClass = "bg-gold-dark",
  linkClass = "font-medium text-navy underline decoration-gold/70 decoration-2 underline-offset-[3px] transition-colors hover:text-gold-dark",
  className = "",
}: {
  blocks: FaqBlock[];
  textClass: string;
  dotClass?: string;
  linkClass?: string;
  className?: string;
}) {
  return (
    <div className={`min-h-0 space-y-2 overflow-hidden ${className}`}>
      {blocks.map((block, i) =>
        typeof block === "object" && !Array.isArray(block) ? (
          <div key={i} className={`flex flex-wrap gap-x-4 gap-y-1 ${textClass}`}>
            {block.links.map((l) => (
              <a key={l.href + l.label} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
          </div>
        ) : Array.isArray(block) ? (
          <ul key={i} className="space-y-1.5">
            {block.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className={`mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full ${dotClass}`}
                />
                <span className={textClass}>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className={textClass}>
            {block}
          </p>
        )
      )}
    </div>
  );
}
