import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const BrainIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9.5 4.5A2.5 2.5 0 0 0 7 7v.2A2.8 2.8 0 0 0 5 10a2.8 2.8 0 0 0 1 2.1A2.8 2.8 0 0 0 5 14.5 2.7 2.7 0 0 0 7.6 17 2.5 2.5 0 0 0 12 18V6a2.5 2.5 0 0 0-2.5-1.5Z" />
    <path d="M14.5 4.5A2.5 2.5 0 0 1 17 7v.2A2.8 2.8 0 0 1 19 10a2.8 2.8 0 0 1-1 2.1 2.8 2.8 0 0 1 1 2.4 2.7 2.7 0 0 1-2.6 2.5A2.5 2.5 0 0 1 12 18" />
  </svg>
);

export const AnalyticsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V10M9 20V4M14 20v-7M19 20V8" />
    <path d="M3 20h18" />
  </svg>
);

export const GlobeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export const HeartPulseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 1.6-.6 3-1.5 4.3" />
    <path d="M8 13h2l1.5-3 2 5 1.5-2h3" />
  </svg>
);

export const MapIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
    <path d="M9 4v14M15 6v14" />
  </svg>
);

export const ChipIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M10 10h4v4h-4z" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.2l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
  </svg>
);

export const RankingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 20V11M12 20V6M18 20v-6" />
    <path d="M4 20h16" />
  </svg>
);

export const CertificateIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="16" height="12" rx="1.5" />
    <path d="M9 20l3-2 3 2v-4" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

export const BulbIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" />
  </svg>
);

export const PuzzleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10 4a2 2 0 0 1 4 0c0 .5.5 1 1 1h3v3c0 .5.5 1 1 1a2 2 0 0 1 0 4c-.5 0-1 .5-1 1v3h-3c-.5 0-1 .5-1 1a2 2 0 0 1-4 0c0-.5-.5-1-1-1H5v-3c0-.5-.5-1-1-1a2 2 0 0 1 0-4c.5 0 1-.5 1-1V5h3c.5 0 1-.5 1-1Z" />
  </svg>
);

export const GrowthIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 17l5-5 3 3 7-7" />
    <path d="M15 8h5v5" />
  </svg>
);

export const TrendUpIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V13M9 20v-5M14 20v-9M19 20V9" />
    <path d="M3 20h18" />
    <path d="M14 6h5v5" />
    <path d="M19 6l-8 8" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18M5 21V8l7-4 7 4v13" />
    <path d="M9 12h1.5M13.5 12H15M9 16h1.5M13.5 16H15" />
  </svg>
);

export const DocIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 12h6M9 16h6M9 8h2" />
  </svg>
);

export const GradCapIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5M22 9v5" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.4}>
    <path d="M4 12l5 5 11-11" />
  </svg>
);

export const LinkedinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13H10.3v8z" />
  </svg>
);

export const XIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 3h3l-6.6 7.6L21.8 21h-6l-4.7-6.1L5.7 21H2.6l7-8.1L2.3 3h6.1l4.3 5.6L17.5 3Zm-1 16h1.7L7.6 4.8H5.8L16.5 19Z" />
  </svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12ZM9.8 15.3V8.7l6 3.3-6 3.3Z" />
  </svg>
);
