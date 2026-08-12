import type { SVGProps } from "react";

/* A single laurel branch curving upward. Mirror it with `scale-x-[-1]` to form
   a wreath. Leaves are filled with `currentColor`. */
export function LaurelBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 250" fill="currentColor" aria-hidden {...props}>
      <path
        d="M80 238 C20 208, 4 112, 58 12"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.2}
        strokeLinecap="round"
      />
      <ellipse rx="16.5" ry="5.9" transform="translate(63.3 227.1) rotate(-173.1) translate(14.9 0)" />
      <ellipse rx="16.5" ry="5.9" transform="translate(63.3 227.1) rotate(-107.1) translate(14.9 0)" />
      <ellipse rx="17.4" ry="6.2" transform="translate(46.7 208.8) rotate(-157.8) translate(15.6 0)" />
      <ellipse rx="17.4" ry="6.2" transform="translate(46.7 208.8) rotate(-91.8) translate(15.6 0)" />
      <ellipse rx="17.5" ry="6.3" transform="translate(34.6 185.8) rotate(-144.2) translate(15.8 0)" />
      <ellipse rx="17.5" ry="6.3" transform="translate(34.6 185.8) rotate(-78.2) translate(15.8 0)" />
      <ellipse rx="17.0" ry="6.1" transform="translate(27.3 158.7) rotate(-132.5) translate(15.3 0)" />
      <ellipse rx="17.0" ry="6.1" transform="translate(27.3 158.7) rotate(-66.5) translate(15.3 0)" />
      <ellipse rx="15.8" ry="5.7" transform="translate(25.1 128.3) rotate(-122.2) translate(14.2 0)" />
      <ellipse rx="15.8" ry="5.7" transform="translate(25.1 128.3) rotate(-56.2) translate(14.2 0)" />
      <ellipse rx="14.0" ry="5.0" transform="translate(28.3 95.3) rotate(-113.1) translate(12.6 0)" />
      <ellipse rx="14.0" ry="5.0" transform="translate(28.3 95.3) rotate(-47.1) translate(12.6 0)" />
      <ellipse rx="11.9" ry="4.3" transform="translate(37.1 60.3) rotate(-104.8) translate(10.7 0)" />
      <ellipse rx="11.9" ry="4.3" transform="translate(37.1 60.3) rotate(-38.8) translate(10.7 0)" />
      <ellipse rx="9.8" ry="3.5" transform="translate(51.9 24.0) rotate(-97.1) translate(8.8 0)" />
      <ellipse rx="9.8" ry="3.5" transform="translate(51.9 24.0) rotate(-31.1) translate(8.8 0)" />
    </svg>
  );
}

/* Slender olive sprig used as a watermark inside light cards. */
export function OliveSprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 260" fill="currentColor" aria-hidden {...props}>
      <path
        d="M96 254 C70 200, 52 132, 62 8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      {[
        [90, 232, -142, 1],
        [90, 232, -34, 1],
        [82, 206, -136, 0.96],
        [82, 206, -28, 0.96],
        [74, 180, -128, 0.92],
        [74, 180, -22, 0.92],
        [68, 152, -120, 0.86],
        [68, 152, -16, 0.86],
        [64, 122, -112, 0.78],
        [64, 122, -10, 0.78],
        [62, 92, -106, 0.68],
        [62, 92, -6, 0.68],
        [62, 62, -100, 0.56],
        [62, 62, -2, 0.56],
        [62, 34, -96, 0.44],
      ].map(([x, y, a, k], i) => (
        <ellipse
          key={i}
          rx={19 * (k as number)}
          ry={6.6 * (k as number)}
          transform={`translate(${x} ${y}) rotate(${a}) translate(${17 * (k as number)} 0)`}
        />
      ))}
    </svg>
  );
}

/* Neoclassical colonnade line-art, used as a faint background motif. */
export function ColonnadeMotif(props: SVGProps<SVGSVGElement>) {
  const columns = [18, 58, 98, 138, 178];
  return (
    <svg viewBox="0 0 220 150" fill="currentColor" aria-hidden {...props}>
      <path d="M6 40 L110 6 L214 40 Z" />
      <rect x="2" y="42" width="216" height="9" />
      <rect x="6" y="53" width="208" height="5" opacity="0.7" />
      {columns.map((x) => (
        <g key={x}>
          <rect x={x - 3} y="60" width="30" height="7" />
          <rect x={x} y="67" width="24" height="66" />
          <rect x={x - 4} y="133" width="32" height="8" />
        </g>
      ))}
      <rect x="0" y="141" width="220" height="9" />
    </svg>
  );
}

/* Fountain pen resting horizontally, drawn to sit beneath the hero book. */
export function FountainPen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 44" fill="none" aria-hidden {...props}>
      <defs>
        <linearGradient id="advPenBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b3243" />
          <stop offset="0.35" stopColor="#0d1220" />
          <stop offset="0.7" stopColor="#05070d" />
          <stop offset="1" stopColor="#1a2030" />
        </linearGradient>
        <linearGradient id="advPenGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7dd8f" />
          <stop offset="0.45" stopColor="#d9a938" />
          <stop offset="1" stopColor="#9c7418" />
        </linearGradient>
      </defs>
      <rect x="18" y="15" width="212" height="15" rx="7.5" fill="url(#advPenBody)" />
      <rect x="18" y="17" width="212" height="3" rx="1.5" fill="#ffffff" opacity="0.14" />
      <rect x="46" y="11" width="42" height="5" rx="2.5" fill="url(#advPenGold)" />
      <rect x="196" y="15" width="17" height="15" fill="url(#advPenGold)" />
      <rect x="216" y="15" width="4" height="15" fill="url(#advPenGold)" opacity="0.8" />
      <path
        d="M228 16 L296 20.5 Q306 22.5 296 24 L228 29 Z"
        fill="url(#advPenGold)"
      />
      <path d="M244 22.4 L292 22.4" stroke="#5c4410" strokeWidth="1" opacity="0.75" />
      <circle cx="279" cy="22.4" r="2" fill="#0b1020" />
    </svg>
  );
}

/* Curved gold bracket that frames the closing honorary-capacity note. */
export function NoteFlourish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M16 3 C4 16, 4 48, 16 61" />
    </svg>
  );
}

/* Group-of-people icon for the closing call-to-action. */
export function CouncilIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="24" cy="15.5" r="5.5" />
      <path d="M13.5 35c0-5.8 4.7-10.5 10.5-10.5S34.5 29.2 34.5 35" />
      <circle cx="9.5" cy="20" r="4" />
      <path d="M3 33.5c0-3.9 2.9-6.8 6.5-6.8" />
      <circle cx="38.5" cy="20" r="4" />
      <path d="M45 33.5c0-3.9-2.9-6.8-6.5-6.8" />
    </svg>
  );
}

/* Centred section heading: gold rules flanking a navy small-caps label. */
export function AdvisorySectionHeading({
  label,
  subtitle,
  className = "",
}: {
  label: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <span className="h-px w-7 sm:w-10 lg:w-12 shrink-0 bg-gold" />
        <h2 className="text-[11.5px] sm:text-[13px] lg:text-[14px] xl:text-[15px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-navy">
          {label}
        </h2>
        <span className="h-px w-7 sm:w-10 lg:w-12 shrink-0 bg-gold" />
      </div>
      {subtitle ? (
        <p className="mt-1.5 lg:mt-2 font-serif text-[14px] sm:text-[16px] lg:text-[18px] text-navy/85">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function ByInvitationBadge({
  variant = "solid",
  className = "",
}: {
  variant?: "solid" | "outline";
  className?: string;
}) {
  const styles =
    variant === "outline"
      ? "border border-gold/70 text-gold bg-navy/40"
      : "bg-gold text-navy border border-gold";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 lg:px-3.5 lg:py-1.5 text-[10px] lg:text-[11px] font-semibold tracking-[0.06em] whitespace-nowrap ${styles} ${className}`}
    >
      By Invitation
    </span>
  );
}
