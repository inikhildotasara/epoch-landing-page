import type { ReactNode, SVGProps } from "react";
import { BrainIcon } from "../icons";
import { Reveal } from "../Reveal";
import { AnimatedDonut, AnimatedMeter, AnimatedNumber, AnimatedStars } from "./AnimatedPrimitives";
export { AnimatedNumber } from "./AnimatedPrimitives";

export type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

export type Status =
  | "EXCEPTIONAL"
  | "STRENGTH"
  | "STRONG"
  | "DEVELOPING"
  | "GROWTH AREA";

const statusStyles: Record<Status, string> = {
  EXCEPTIONAL: "bg-violet-50 text-violet-700 ring-violet-200",
  STRENGTH: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  STRONG: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  DEVELOPING: "bg-amber-50 text-amber-700 ring-amber-200",
  "GROWTH AREA": "bg-orange-50 text-orange-700 ring-orange-200",
};

export function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2 py-1 text-[9.5px] font-semibold uppercase tracking-[0.08em] ring-1 lg:text-[10px] ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

/* ---------------------------------------------------------------- headings */

export function SectionHead({
  eyebrow,
  title,
  intro,
  accent = "#e0a300",
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  accent?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.2em] lg:text-[12.5px]"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-serif text-[24px] font-medium leading-snug lg:text-[32px] xl:text-[36px] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-3 text-[13.5px] leading-relaxed lg:text-[15px] ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          } ${dark ? "text-slate-300" : "text-slate-600"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/** Small uppercase caption used as the header of every data block. */
export function Panel({
  title,
  note,
  accent,
  children,
  className = "",
}: {
  title?: string;
  note?: string;
  accent: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border bg-white ${className}`}
      style={{ borderColor: `${accent}33` }}
    >
      {title && (
        // Centred caption on a tint of the section's own colour, matching the
        // printed report's block headers.
        <div
          className="px-4 py-2.5 text-center lg:px-5"
          style={{ backgroundColor: `${accent}12` }}
        >
          <h3
            className="text-[10.5px] font-bold uppercase tracking-[0.12em] lg:text-[11.5px]"
            style={{ color: accent }}
          >
            {title}
          </h3>
          {note && (
            <p className="mt-0.5 text-[9.5px] text-slate-500 lg:text-[10.5px]">
              {note}
            </p>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-4 lg:p-5">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------ data visuals */

export function ScoreDonut({
  value,
  label,
  color,
  suffix = "",
}: {
  value: number;
  label: string;
  color: string;
  suffix?: string;
}) {
  return <AnimatedDonut value={value} label={label} color={color} suffix={suffix} />;
}

export function MeterBar({
  label,
  value,
  color,
  caption,
}: {
  label: string;
  value: number;
  color: string;
  caption?: string;
}) {
  return <AnimatedMeter label={label} value={value} color={color} caption={caption} />;
}

export function StarRating({
  value,
  max = 5,
  color,
}: {
  value: number;
  max?: number;
  color: string;
}) {
  return <AnimatedStars value={value} max={max} color={color} />;
}

/** A score tile: big number + label, tinted with the dimension's own colour. */
export function ScoreTile({
  label,
  value,
  color,
  icon: Icon,
}: {
  label: string;
  value: number;
  color: string;
  icon?: IconType;
}) {
  return (
    <div
      className="flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3.5 text-center lg:px-3 lg:py-4"
      style={{ borderColor: `${color}33`, backgroundColor: `${color}0d` }}
    >
      {Icon && (
        <Icon
          className="h-5 w-5 lg:h-6 lg:w-6"
          style={{ color }}
          strokeWidth={1.6}
        />
      )}
      <span className="text-[10.5px] font-medium leading-tight text-slate-600 lg:text-[11.5px]">
        {label}
      </span>
      <span
        className="text-[22px] font-bold leading-none tabular-nums lg:text-[26px]"
        style={{ color }}
      >
        <AnimatedNumber value={value} />
      </span>
    </div>
  );
}

/* ------------------------------------------------------- benchmark matrix */

export type BenchRow = {
  dimension: string;
  score: number;
  school: number;
  national: number;
  international: number;
  status: Status;
};

function HeadCell({
  top,
  bottom,
  className = "",
}: {
  top: string;
  bottom?: string;
  className?: string;
}) {
  return (
    <th
      scope="col"
      className={`px-2 py-3 text-[9.5px] font-semibold uppercase leading-tight tracking-[0.08em] text-slate-500 lg:text-[10.5px] ${className}`}
    >
      {top}
      {bottom && (
        <>
          <br />
          <span className="font-medium text-slate-400">{bottom}</span>
        </>
      )}
    </th>
  );
}

export function BenchmarkTable({
  rows,
  accent,
}: {
  rows: BenchRow[];
  accent: string;
}) {
  return (
    <>
      {/* Table layout from md up, where six columns still breathe */}
      <div className="hidden overflow-hidden rounded-xl border border-slate-200 md:block">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <HeadCell top="Dimension" className="w-[27%] px-3 text-left lg:px-4" />
              <HeadCell top="Your" bottom="score" className="w-[13%]" />
              <HeadCell top="Benchmark" bottom="School" />
              <HeadCell top="Benchmark" bottom="National" />
              <HeadCell top="Benchmark" bottom="Global" />
              <HeadCell top="Status" className="w-[16%]" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.dimension} className="border-t border-slate-100">
                <th
                  scope="row"
                  className="px-3 py-3 text-left text-[11.5px] font-medium text-navy lg:px-4 lg:text-[12.5px]"
                >
                  {r.dimension}
                </th>
                <td
                  className="px-2 py-3 text-center text-[14px] font-bold tabular-nums lg:text-[15.5px]"
                  style={{ color: accent }}
                >
                  <AnimatedNumber value={r.score} />
                </td>
                <td className="px-2 py-3 text-center text-[12px] tabular-nums text-slate-500 lg:text-[13px]">
                  <AnimatedNumber value={r.school} />
                </td>
                <td className="px-2 py-3 text-center text-[12px] tabular-nums text-slate-500 lg:text-[13px]">
                  <AnimatedNumber value={r.national} />
                </td>
                <td className="px-2 py-3 text-center text-[12px] tabular-nums text-slate-500 lg:text-[13px]">
                  <AnimatedNumber value={r.international} />
                </td>
                <td className="px-2 py-3 text-center">
                  <StatusPill status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout below md, so nothing ever scrolls sideways */}
      <div className="grid gap-3 md:hidden">
        {rows.map((r) => (
          <div
            key={r.dimension}
            className="rounded-xl border border-slate-200 bg-white p-3.5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-snug text-navy">
                  {r.dimension}
                </p>
                <p className="mt-0.5 text-[10.5px] uppercase tracking-[0.1em] text-slate-400">
                  Your score
                </p>
              </div>
              <span
                className="shrink-0 text-[24px] font-bold leading-none tabular-nums"
                style={{ color: accent }}
              >
                <AnimatedNumber value={r.score} />
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 divide-x divide-slate-200 rounded-lg bg-slate-50 py-2 text-center">
              {[
                ["School", r.school],
                ["National", r.national],
                ["Global", r.international],
              ].map(([l, v]) => (
                <div key={l as string}>
                  <p className="text-[9.5px] uppercase tracking-[0.08em] text-slate-400">
                    {l}
                  </p>
                  <p className="text-[13px] font-semibold tabular-nums text-slate-600">
                  <AnimatedNumber value={v as number} />
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <StatusPill status={r.status} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* -------------------------------------------------------------- list cards */

export function InsightList({
  title,
  items,
  accent,
  marker = "check",
  className = "",
}: {
  title: string;
  items: string[];
  accent: string;
  marker?: "check" | "arrow" | "star";
  className?: string;
}) {
  return (
    <Panel title={title} accent={accent} className={className}>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white lg:h-[18px] lg:w-[18px] lg:text-[10px]"
              style={{ backgroundColor: accent }}
              aria-hidden
            >
              {marker === "check" ? "✓" : marker === "arrow" ? "›" : "★"}
            </span>
            <span className="text-[12px] leading-relaxed text-slate-600 lg:text-[13px]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/* ------------------------------------------------------------ report sheet */

export function StudentCard({
  fields,
  accent,
  mascotSrc,
}: {
  fields: { label: string; value: string }[];
  accent: string;
  mascotSrc?: string;
}) {
  return (
    <div
      className="relative flex items-center gap-3 rounded-xl border bg-white p-3 sm:gap-5 lg:p-4"
      style={{ borderColor: `${accent}33` }}
    >
      {mascotSrc && (
        <img
          src={mascotSrc}
          alt=""
          aria-hidden
          className="w-[86px] shrink-0 self-end sm:w-[110px] lg:w-[132px] xl:w-[148px]"
        />
      )}
      {/* Colon-separated rows rather than a right-aligned table, so the block
          reads the way it does on the printed report. */}
      <dl className="min-w-0 flex-1 space-y-1 lg:space-y-1.5">
        {fields.map((f) => (
          <div key={f.label} className="flex items-baseline gap-2 sm:gap-3">
            <dt className="w-[74px] shrink-0 text-[10.5px] font-medium text-slate-500 sm:w-[104px] lg:w-[124px] lg:text-[12px]">
              {f.label}
            </dt>
            <span className="shrink-0 text-[10.5px] text-slate-300 lg:text-[12px]">
              :
            </span>
            <dd className="min-w-0 text-[10.5px] font-semibold text-navy lg:text-[12.5px]">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
      <span className="absolute right-2 top-2 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500 lg:text-[9.5px]">
        Sample
      </span>
    </div>
  );
}

/**
 * The printed report's outer frame: brand strip, body, then the navy promise
 * band. Used to present the on-page data blocks as the document they come from.
 */
export function ReportSheet({
  accent,
  tagline,
  footerTagline,
  children,
}: {
  accent: string;
  tagline: string;
  footerTagline: string;
  children: ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl border-2 bg-white p-3 shadow-[0_10px_40px_-20px_rgba(11,28,63,0.35)] sm:p-4 lg:p-5"
      style={{ borderColor: `${accent}2e` }}
    >
      <div className="flex items-center justify-between gap-3 border-b-2 border-slate-100 pb-3 lg:pb-4">
        <img
          src="/images/epoch-research-foundation.png"
          alt="Epoch Olympiad Foundation"
          className="h-7 w-auto shrink-0 sm:h-9 lg:h-11"
        />
        <div className="min-w-0 text-right">
          <p className="text-[11px] font-bold uppercase leading-tight tracking-[0.06em] text-[#1a7a4c] sm:text-[13px] lg:text-[16px]">
            Academic Health Report
          </p>
          <p className="mt-0.5 text-[9px] leading-tight text-navy sm:text-[10.5px] lg:text-[12px]">
            {tagline}
          </p>
        </div>
      </div>

      <div className="mt-3 space-y-3 lg:mt-4 lg:space-y-4">{children}</div>

      <div className="mt-3 flex items-center justify-center gap-3 rounded-xl bg-navy px-4 py-3 lg:mt-4 lg:py-3.5">
        <BrainIcon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.7} />
        <p className="text-center text-[12px] font-medium text-white lg:text-[15px]">
          {footerTagline}
        </p>
        <span
          className="hidden h-7 w-7 shrink-0 rounded-full sm:block lg:h-8 lg:w-8"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #ffd766, #e0a300 60%, #b07f00)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

/**
 * Report artwork. The image always renders at its natural aspect ratio and is
 * never cropped or stretched — it only scales down inside its max width, so
 * the full page of the report stays readable end-to-end at every breakpoint.
 */
export function ReportPreview({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`mx-auto w-full ${className}`}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-shadow duration-300 hover:shadow-xl lg:p-2.5"
      >
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full rounded-xl"
          loading="lazy"
        />
      </a>
      <figcaption className="mt-3 text-center text-[11px] text-slate-400 lg:text-[11.5px]">
        Open the full report page
      </figcaption>
    </figure>
  );
}

/**
 * Common frame for each of the three vertical edition deep-dives: a tinted
 * stage banner, the full report artwork beside the narrative, then the data
 * blocks stacked underneath at full width.
 */
export function StageShell({
  id,
  accent,
  background,
  stage,
  brand,
  tagline,
  audience,
  heading,
  paragraphs,
  previewSrc,
  previewAlt,
  fields,
  mascotSrc,
  footerTagline,
  children,
}: {
  id: string;
  accent: string;
  background: string;
  stage: string;
  brand: string;
  tagline: string;
  audience: string;
  heading: string;
  paragraphs: string[];
  previewSrc: string;
  previewAlt: string;
  fields: { label: string; value: string }[];
  mascotSrc?: string;
  footerTagline: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-4 border-t border-slate-100"
      style={{ backgroundColor: background }}
    >
      <div className="mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
        <Reveal>
          <div
            className="flex flex-col gap-3 rounded-2xl px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:px-8 lg:py-6"
            style={{ backgroundColor: `${accent}12` }}
          >
            <div className="min-w-0">
              <p
                className="text-[10.5px] font-semibold uppercase tracking-[0.2em] lg:text-[11.5px]"
                style={{ color: accent }}
              >
                {stage}
              </p>
              <h2 className="mt-1.5 font-serif text-[22px] font-medium text-navy lg:text-[28px] xl:text-[32px]">
                {brand}
              </h2>
              <p
                className="mt-1 font-serif text-[13.5px] italic lg:text-[16px]"
                style={{ color: accent }}
              >
                {tagline}
              </p>
            </div>
            <span
              className="shrink-0 self-start rounded-full bg-white px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] shadow-sm sm:self-center lg:text-[11.5px]"
              style={{ color: accent }}
            >
              {audience}
            </span>
          </div>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-8 lg:mt-9 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,340px)_minmax(0,1fr)] xl:gap-14">
          <Reveal>
            {/* Max widths step up rather than down as the viewport grows, so the
                artwork never appears to shrink on a larger screen. */}
            <ReportPreview
              src={previewSrc}
              alt={previewAlt}
              className="max-w-[300px] sm:max-w-[320px] lg:max-w-none"
            />
          </Reveal>

          <Reveal delay={110} className="flex flex-col">
            <h3 className="font-serif text-[19px] font-medium leading-snug text-navy lg:text-[24px] xl:text-[26px]">
              {heading}
            </h3>
            <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-slate-600 lg:text-[14.5px]">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Not wrapped in Reveal — the blocks inside bring their own, and
            nesting them double-animates the sheet. */}
        <div className="mt-7 lg:mt-10">
          <ReportSheet
            accent={accent}
            tagline={tagline}
            footerTagline={footerTagline}
          >
            <StudentCard
              fields={fields}
              accent={accent}
              mascotSrc={mascotSrc}
            />
            {children}
          </ReportSheet>
        </div>
      </div>
    </section>
  );
}
