import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import { LegalToc } from "./LegalToc";
import type { LegalBlock, LegalSection } from "./types";

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="text-[14px] leading-[1.75] text-slate-600 lg:text-[15px]">
          {block.text}
        </p>
      );

    case "h3":
      return (
        <h3 className="pt-1 text-[14px] font-semibold text-navy lg:text-[15.5px]">
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
              <span className="text-[14px] leading-[1.7] text-slate-600 lg:text-[15px]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="space-y-2">
          {block.items.map((item, i) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-navy/5 text-[11px] font-semibold text-navy">
                {i + 1}
              </span>
              <span className="text-[14px] leading-[1.7] text-slate-600 lg:text-[15px]">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );

    case "pills":
      return (
        <div className="flex flex-wrap gap-2">
          {block.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-navy/10 bg-navy/[0.04] px-3.5 py-1.5 text-[12.5px] font-medium text-navy lg:text-[13px]"
            >
              {item}
            </span>
          ))}
        </div>
      );

    case "links":
      return (
        <div className="flex flex-wrap gap-2.5">
          {block.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-[13px] font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              {item.label}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          ))}
        </div>
      );

    case "highlight":
      return (
        <p className="rounded-xl border-l-[3px] border-gold bg-gold/[0.07] px-4 py-3 text-[14px] font-medium leading-[1.7] text-navy lg:text-[15px]">
          {block.text}
        </p>
      );

    case "note":
      return (
        <p className="rounded-xl bg-slate-100/80 px-4 py-3 text-[13px] leading-[1.7] text-slate-500 lg:text-[13.5px]">
          {block.text}
        </p>
      );

    case "contact":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-6">
          {block.title && (
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">
              {block.title}
            </p>
          )}
          <dl className="grid grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2">
            {block.rows.map((row) => (
              <div key={row.label}>
                <dt className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  {row.label}
                </dt>
                <dd className="mt-1 text-[14px] leading-relaxed text-slate-700 lg:text-[14.5px]">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-navy underline decoration-gold/60 decoration-2 underline-offset-[3px] transition-colors hover:text-gold-dark"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );
  }
}

export function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:px-12 lg:grid-cols-[264px_minmax(0,1fr)] lg:gap-14 lg:px-page lg:py-16">
        <div className="lg:h-full">
          <LegalToc
            items={sections.map(({ id, num, title }) => ({ id, num, title }))}
          />
        </div>

        <div className="max-w-[860px]">
          {sections.map((section, i) => (
            <Reveal key={section.id} id={section.id} className="scroll-mt-8">
              <article
                className={
                  i === 0
                    ? "pb-9"
                    : "border-t border-slate-200/80 pb-9 pt-9 lg:pt-10"
                }
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-[15px] font-medium text-gold-dark lg:text-[16px]">
                    {section.num}.
                  </span>
                  <h2 className="font-serif text-[21px] font-medium leading-snug text-navy lg:text-[26px]">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-4 space-y-3.5 lg:mt-5">
                  {section.blocks.map((block, bi) => (
                    <Block key={bi} block={block} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
