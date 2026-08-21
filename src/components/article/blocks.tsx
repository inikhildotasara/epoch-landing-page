import type {
  Block,
  CalloutBlock,
  CompareBlock,
  FaqBlock,
} from "../../content/articles/types";
import { headingId } from "../../content/articles";
import {
  BulbIcon,
  CheckIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  ShieldIcon,
  StarIcon,
} from "../icons";
import { RichText } from "./RichText";
import { Bars } from "./Bars";

/* Body copy sizing lives here so every text block stays in the same rhythm. */
const bodyText =
  "text-[15.5px] leading-[1.75] text-slate-700 lg:text-[16.5px] lg:leading-[1.8]";

function Compare({ block }: { block: CompareBlock }) {
  return (
    <div className="my-8">
      {block.title && (
        <h3 className="mb-4 font-serif text-[18px] font-medium text-navy lg:text-[21px]">
          {block.title}
        </h3>
      )}

      {/* A real table from sm up; stacked cards below, where five columns of
          text would be unreadable. */}
      <div className="hidden overflow-hidden rounded-xl border border-slate-200 sm:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-navy text-white">
              <th className="w-[26%] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60 lg:text-[12.5px]">
                &nbsp;
              </th>
              {block.columns.map((c) => (
                <th
                  key={c}
                  className="px-4 py-3 text-[12.5px] font-semibold lg:text-[13.5px]"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((r, i) => (
              <tr
                key={r.label}
                className={i % 2 ? "bg-cream" : "bg-white"}
              >
                <th className="border-t border-slate-200 px-4 py-3 text-left align-top text-[12.5px] font-semibold text-navy lg:text-[13.5px]">
                  {r.label}
                </th>
                <td className="border-t border-slate-200 px-4 py-3 align-top text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                  {r.left}
                </td>
                <td className="border-t border-l border-slate-200 px-4 py-3 align-top text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                  {r.right}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 sm:hidden">
        {block.rows.map((r) => (
          <div
            key={r.label}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <p className="text-[12.5px] font-semibold text-navy">{r.label}</p>
            <div className="mt-3 space-y-2.5">
              {([
                [block.columns[0], r.left],
                [block.columns[1], r.right],
              ] as const).map(([col, val]) => (
                <div key={col}>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-gold-dark">
                    {col}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-slate-600">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const calloutTones = {
  note: {
    icon: ClipboardListIcon,
    ring: "border-navy/15 bg-navy/[0.04]",
    accent: "text-navy",
  },
  caution: {
    icon: ShieldIcon,
    ring: "border-amber-300/70 bg-amber-50",
    accent: "text-amber-700",
  },
  tip: {
    icon: BulbIcon,
    ring: "border-gold/50 bg-gold/[0.07]",
    accent: "text-gold-dark",
  },
} as const;

function Callout({ block }: { block: CalloutBlock }) {
  const tone = calloutTones[block.tone];
  const Icon = tone.icon;
  return (
    <div
      className={`my-8 flex gap-3.5 rounded-xl border p-4 sm:gap-4 sm:p-5 ${tone.ring}`}
    >
      <Icon
        className={`mt-0.5 h-5 w-5 shrink-0 ${tone.accent}`}
        strokeWidth={1.7}
        aria-hidden
      />
      <div>
        {block.title && (
          <p className={`text-[13.5px] font-bold lg:text-[14.5px] ${tone.accent}`}>
            {block.title}
          </p>
        )}
        <p className="mt-1 text-[14px] leading-relaxed text-slate-600 lg:text-[15px]">
          <RichText text={block.text} />
        </p>
      </div>
    </div>
  );
}

function Faq({ block }: { block: FaqBlock }) {
  return (
    <div className="my-9">
      <h3 className="font-serif text-[20px] font-medium text-navy lg:text-[24px]">
        {block.title ?? "Frequently asked"}
      </h3>
      {/* Native details/summary: keyboard accessible and works before hydration. */}
      <div className="mt-4 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200">
        {block.items.map((item) => (
          <details key={item.q} className="group bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-[14px] font-semibold text-navy transition-colors hover:bg-cream lg:px-5 lg:text-[15px]">
              <span>{item.q}</span>
              <ChevronDownIcon
                className="h-4 w-4 shrink-0 text-gold-dark transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="border-t border-slate-100 bg-cream px-4 pb-4 pt-3 text-[13.5px] leading-relaxed text-slate-600 lg:px-5 lg:text-[14.5px]">
              <RichText text={item.a} />
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

/** Renders one content block. The article body is just a map over these. */
export function ArticleBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "lead":
      return (
        <p className="mb-7 font-serif text-[18px] leading-[1.65] text-navy lg:text-[22px] lg:leading-[1.6]">
          <RichText text={block.text} />
        </p>
      );

    case "heading":
      return (
        <h2
          id={headingId(block.text)}
          className="mt-11 mb-4 scroll-mt-28 font-serif text-[22px] font-medium leading-snug text-navy lg:mt-14 lg:text-[28px]"
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p className={`mb-5 ${bodyText}`}>
          <RichText text={block.text} />
        </p>
      );

    case "quote":
      return (
        <blockquote className="my-9 border-l-[3px] border-gold pl-5 sm:pl-7">
          <p className="font-serif text-[19px] italic leading-[1.55] text-navy lg:text-[25px]">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <footer className="mt-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-gold-dark">
              {block.attribution}
            </footer>
          )}
        </blockquote>
      );

    case "takeaways":
      return (
        <div className="my-8 rounded-xl border border-navy/10 bg-navy p-5 sm:p-6 lg:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            {block.title ?? "Key takeaways"}
          </p>
          <ul className="mt-4 space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold">
                  <CheckIcon className="h-2.5 w-2.5 text-navy" aria-hidden />
                </span>
                <span className="text-[13.5px] leading-relaxed text-white/85 lg:text-[15px]">
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "stats":
      return (
        <div className="my-8">
          {block.title && (
            <h3 className="mb-4 font-serif text-[18px] font-medium text-navy lg:text-[21px]">
              {block.title}
            </h3>
          )}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {block.items.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-cream px-4 py-5 text-center"
              >
                <p className="font-serif text-[26px] font-medium leading-none text-gold-dark lg:text-[34px]">
                  {s.value}
                </p>
                <p className="mt-2 text-[11.5px] font-medium leading-snug text-slate-600 lg:text-[12.5px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case "figure":
      return (
        <figure className="my-9">
          <div className="overflow-hidden rounded-xl bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2.5 border-l-2 border-gold/60 pl-3 text-[12px] leading-snug text-slate-500 lg:text-[13px]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "checklist":
      return (
        <div className="my-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          {block.title && (
            <h3 className="mb-4 font-serif text-[18px] font-medium text-navy lg:text-[21px]">
              {block.title}
            </h3>
          )}
          <ul className="grid gap-3 sm:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <CheckIcon className="h-2.5 w-2.5 text-gold-dark" aria-hidden />
                </span>
                <span className="text-[13.5px] leading-relaxed text-slate-600 lg:text-[14.5px]">
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "steps":
      return (
        <div className="my-8">
          {block.title && (
            <h3 className="mb-5 font-serif text-[18px] font-medium text-navy lg:text-[21px]">
              {block.title}
            </h3>
          )}
          <ol className="space-y-5">
            {block.items.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-serif text-[14px] font-medium text-gold-dark">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <p className="text-[14.5px] font-bold text-navy lg:text-[15.5px]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-slate-600 lg:text-[15px]">
                    <RichText text={step.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case "compare":
      return <Compare block={block} />;

    case "bars":
      return <Bars block={block} />;

    case "callout":
      return <Callout block={block} />;

    case "faq":
      return <Faq block={block} />;

    case "divider":
      return (
        <div className="my-11 flex items-center justify-center gap-2" aria-hidden>
          <span className="h-px w-10 bg-slate-200" />
          <StarIcon className="h-3.5 w-3.5 text-gold" fill="currentColor" />
          <span className="h-px w-10 bg-slate-200" />
        </div>
      );
  }
}
