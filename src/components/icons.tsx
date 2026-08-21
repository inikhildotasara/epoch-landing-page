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

export const HandshakeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.5 12.5 6 9l3.3 1.2L12 8.6l2.7 1.6L18 9l3.5 3.5" />
    <path d="M6 9V7.2l3.4-1.4L12 7l2.6-1.2L18 7.2V9" />
    <path d="m9.4 13.2 2 1.9a1.4 1.4 0 0 0 2-2l-1.9-1.8" />
    <path d="M2.5 12.5 6 16l3 2.4 3-2.2 3 2.2 3-2.4 3.5-3.5" />
  </svg>
);

export const HandHeartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 9.6 10.8 8.4a2 2 0 0 0-2.8 2.8L12 15l4-3.8a2 2 0 0 0-2.8-2.8L12 9.6Z" />
    <path d="M3 14.5v6M3 15.5h4l4.5 2.8a2 2 0 0 0 2.2 0L21 14" />
  </svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="7.5" width="18" height="12" rx="2" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
    <path d="M3 12.5h18M11 12.5h2" />
  </svg>
);

export const MegaphoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 10.5 17 6v10L4 13.5a1.6 1.6 0 0 1 0-3Z" />
    <path d="M17 8.5a2.5 2.5 0 0 1 0 5" />
    <path d="M7.5 13v5a1.6 1.6 0 0 0 3 .5l.6-4" />
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

export const EyeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const MicroscopeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 21h12" />
    <path d="M10 21a6 6 0 0 0 6-6" />
    <path d="M8.5 13.5 12 15.2" />
    <rect x="10" y="3.5" width="3.2" height="7.5" rx="1.4" transform="rotate(24 11.6 7.2)" />
  </svg>
);

export const ClipboardIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
    <rect x="9" y="2.6" width="6" height="3.2" rx="1.2" />
    <path d="M8.6 13l2.2 2.2 4.2-4.2" />
  </svg>
);

export const FlaskIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 3h6" />
    <path d="M10 3v6l-4.6 8.2A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.8-2.8L14 9V3" />
    <path d="M7.4 15h9.2" />
  </svg>
);

export const TrophyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
    <path d="M8 5H5v1.5a3 3 0 0 0 3 3" />
    <path d="M16 5h3v1.5a3 3 0 0 1-3 3" />
    <path d="M12 12v4" />
    <path d="M9.5 20h5" />
    <path d="M10 20a2 2 0 0 1 4 0" />
  </svg>
);

export const LaurelGlobeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="11.5" r="4.6" />
    <path d="M7.4 11.5h9.2M12 6.9a11 11 0 0 1 0 9.2M12 6.9a11 11 0 0 0 0 9.2" />
    <path d="M6.6 19c-2.6-1.7-3.7-4.6-3.2-7.9" />
    <path d="M3.6 12.4c1 .3 1.9 0 2.5-.8M3.9 14.7c1 .3 1.9.1 2.6-.6M4.8 16.9c1 .4 1.9.3 2.7-.4" />
    <path d="M17.4 19c2.6-1.7 3.7-4.6 3.2-7.9" />
    <path d="M20.4 12.4c-1 .3-1.9 0-2.5-.8M20.1 14.7c-1 .3-1.9.1-2.6-.6M19.2 16.9c-1 .4-1.9.3-2.7-.4" />
  </svg>
);

export const TrophyPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7.5 4.2h9v3.4a4.5 4.5 0 0 1-9 0V4.2Z" />
    <path d="M7.5 5.2h-3v1.4a3 3 0 0 0 3 3M16.5 5.2h3v1.4a3 3 0 0 1-3 3" />
    <path d="M12 12.4v3.4M9.6 20h4.8M10 20a2 2 0 0 1 4 0" />
    <path d="M12 5.1a1.9 1.9 0 0 0-1.9 1.9c0 1.4 1.9 3.1 1.9 3.1s1.9-1.7 1.9-3.1A1.9 1.9 0 0 0 12 5.1Z" />
    <circle cx="12" cy="7" r=".55" fill="currentColor" stroke="none" />
  </svg>
);

export const BarChartArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="14.5" width="3.4" height="5.5" rx="0.7" />
    <rect x="10.3" y="10.5" width="3.4" height="9.5" rx="0.7" />
    <rect x="16.6" y="6.5" width="3.4" height="13.5" rx="0.7" />
    <path d="M4.2 11l4.6-3.4 3.4 2.1L20 3.2" />
    <path d="M16.6 3.2H20v3.2" />
  </svg>
);

export const SeedlingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20v-7" />
    <path d="M12 15c0-3.2-2.2-5.2-5.2-5.2C6.8 13 9 15 12 15Z" />
    <path d="M12 13c0-3.2 2.2-5.2 5.2-5.2C17.2 11 15 13 12 13Z" />
  </svg>
);

export const TargetIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const BookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 6c-1.6-1-4.2-1.6-6.2-1.6V19c2 0 4.6.6 6.2 1.6 1.6-1 4.2-1.6 6.2-1.6V4.4C16.2 4.4 13.6 5 12 6Z" />
    <path d="M12 6v14.6" />
  </svg>
);

export const NetworkIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="5" r="2.4" />
    <circle cx="5.5" cy="18.5" r="2.4" />
    <circle cx="18.5" cy="18.5" r="2.4" />
    <path d="M12 7.4v3.1M12 10.5 6.6 16.3M12 10.5l5.4 5.8" />
  </svg>
);

export const HeadIdeaIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M15.5 20v-2.2a6 6 0 1 0-7 0V20" />
    <path d="M9.5 20h5" />
    <path d="M12 11.5v2M10.6 8.6a1.6 1.6 0 0 1 2.8 0c.3.6 0 1.2-.5 1.7-.4.4-.6.7-.6 1.2" />
  </svg>
);

export const SproutIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21v-8" />
    <path d="M12 14c0-3-2-5-5-5-.2 3 1.8 5 5 5Z" />
    <path d="M12 12c0-2.6 2-4.6 4.8-4.6C17 10 15 12 12 12Z" />
    <path d="M8 21h8" />
  </svg>
);

export const HeadBulbIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7.8 17.6A7 7 0 1 1 16.2 17.6" />
    <path d="M7.8 17.6V19.4h8.4V17.6" />
    <path d="M9.9 21h4.2" />
    <path d="M12 7.6a3 3 0 0 0-1.85 5.36c.36.28.55.7.55 1.16v.28h2.6v-.28c0-.46.19-.88.55-1.16A3 3 0 0 0 12 7.6Z" />
    <path d="M10.9 15.1h2.2" />
    <path d="M12 9.7v2.4M11.2 10.7l.8.8.8-.8" />
  </svg>
);

export const MicroscopeDetailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 21h12" />
    <path d="M9 21a6 6 0 0 0 6-6" />
    <path d="M8.6 18h4" />
    <path d="M14.9 8.1l-4 4-2-2 4-4z" />
    <path d="M12.9 6.1l2 2" />
    <path d="M10.9 12.1 12.2 13.4" />
  </svg>
);

export const ChildFaceIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="7.3" />
    <path d="M5.7 10.4c1.2-2.2 3.4-3.6 6.3-3.6s5.1 1.4 6.3 3.6" />
    <circle cx="9.7" cy="12.2" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="14.3" cy="12.2" r="0.75" fill="currentColor" stroke="none" />
    <path d="M10.1 14.6c.9.8 2.9.8 3.8 0" />
  </svg>
);

export const TargetDartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="13" r="7.4" />
    <circle cx="11" cy="13" r="4.4" />
    <circle cx="11" cy="13" r="1.4" fill="currentColor" stroke="none" />
    <path d="M11 13 20.5 3.5" />
    <path d="M16.6 3.5h3.9v3.9" />
  </svg>
);

export const OpenBookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 6.6C10.2 5.4 7.7 4.9 4.6 4.9v12.5c3.1 0 5.6.5 7.4 1.7" />
    <path d="M12 6.6c1.8-1.2 4.3-1.7 7.4-1.7v12.5c-3.1 0-5.6.5-7.4 1.7" />
    <path d="M12 6.6v12.5" />
    <path d="M6.7 8.6h3M6.7 11h3M6.7 13.4h3" />
    <path d="M14.3 8.6h3M14.3 11h3M14.3 13.4h3" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M20 20l-4.7-4.7" />
  </svg>
);

export const EditIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20h4L18.5 9.5a2 2 0 0 0-2.83-2.83L5 17.2z" />
    <path d="M14.5 6.5l3 3" />
  </svg>
);

export const UserIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
);

export const DatabaseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.6" />
    <path d="M5 5.5v13c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-13" />
    <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
  </svg>
);

export const ScaleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v18M7 21h10" />
    <path d="M5 7h14M5 7 3 13a3 3 0 0 0 6 0L7 7M19 7l-2 6a3 3 0 0 0 6 0l-2-6" />
    <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" stroke="none" />
  </svg>
);

export const GroupIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8.4" r="2.6" />
    <path d="M7.6 16.6a4.5 4.5 0 0 1 8.8 0" />
    <circle cx="4.9" cy="10.8" r="1.9" />
    <path d="M1.8 17a3.3 3.3 0 0 1 4.3-2.6" />
    <circle cx="19.1" cy="10.8" r="1.9" />
    <path d="M22.2 17a3.3 3.3 0 0 0-4.3-2.6" />
  </svg>
);

export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.4" y="5.4" width="17.2" height="15.2" rx="2.2" />
    <path d="M3.4 10h17.2M8.4 3.6v3.4M15.6 3.6v3.4" />
    <path d="M7.4 13.4h2M11 13.4h2M14.6 13.4h2M7.4 16.8h2M11 16.8h2" />
  </svg>
);

export const CalendarCheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.4" y="5.4" width="17.2" height="15.2" rx="2.2" />
    <path d="M3.4 10h17.2M8.4 3.6v3.4M15.6 3.6v3.4" />
    <path d="m8.6 15.2 2.3 2.3 4.5-4.5" />
  </svg>
);

export const ChatIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.4 12.4c0 3.7-3.8 6.6-8.4 6.6a10 10 0 0 1-2.6-.3L5 20.4l1.2-3.1a6.3 6.3 0 0 1-2.6-4.9C3.6 8.7 7.4 5.8 12 5.8s8.4 2.9 8.4 6.6Z" />
    <path d="M9 11.6h6M9 14.4h3.6" />
  </svg>
);

export const HelpBubbleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.4 12.4c0 3.7-3.8 6.6-8.4 6.6a10 10 0 0 1-2.6-.3L5 20.4l1.2-3.1a6.3 6.3 0 0 1-2.6-4.9C3.6 8.7 7.4 5.8 12 5.8s8.4 2.9 8.4 6.6Z" />
    <path d="M10.3 10.6a1.9 1.9 0 0 1 3.7.5c0 1.2-1.8 1.4-1.8 2.6" />
    <circle cx="12.2" cy="15.9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const CakeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.4 20.4h15.2v-4a2.4 2.4 0 0 0-2.4-2.4H6.8a2.4 2.4 0 0 0-2.4 2.4v4Z" />
    <path d="M4.4 17.4c1.9 1.3 3.8 1.3 5.7 0 1.9 1.3 3.8 1.3 5.7 0M8.4 11.4V9.2M12 11.4V8.6M15.6 11.4V9.2" />
    <path d="M8.4 6.6a.9.9 0 1 1 0 1.3M12 5.8a.9.9 0 1 1 0 1.4M15.6 6.6a.9.9 0 1 1 0 1.3" />
  </svg>
);

export const GridIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="6.6" height="6.6" rx="1.6" />
    <rect x="13.4" y="4" width="6.6" height="6.6" rx="1.6" />
    <rect x="4" y="13.4" width="6.6" height="6.6" rx="1.6" />
    <rect x="13.4" y="13.4" width="6.6" height="6.6" rx="1.6" />
  </svg>
);

export const RocketIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13.6 4.2c2.6-1.3 5.2-1.4 6.2-1.3.1 1-.1 3.6-1.4 6.2a14 14 0 0 1-4 5l-3.4 1.1L9.4 12a14 14 0 0 1 4.2-7.8Z" />
    <circle cx="15.4" cy="8.6" r="1.5" />
    <path d="M9.4 12 6 12.8l-.9 3.4 3.3-.7M11 15.2l.8 3.4 3.3-1v-3.3" />
    <path d="M7.4 16.6c-1 1-1.4 3.4-1.4 3.4s2.4-.4 3.4-1.4" />
  </svg>
);

export const FlagIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.6 21V3.8" />
    <path d="M6.6 4.6h10.6l-2 3.8 2 3.8H6.6z" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20.8c4.1-5 6.2-8.4 6.2-10.9a6.2 6.2 0 1 0-12.4 0c0 2.5 2.1 5.9 6.2 10.9Z" />
    <circle cx="12" cy="9.9" r="2.2" />
  </svg>
);

export const MedalIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9.6" r="5.2" />
    <path d="m12 7.2 1 2 2.2.3-1.6 1.5.4 2.2-2-1.1-2 1.1.4-2.2-1.6-1.5 2.2-.3z" />
    <path d="M8.6 14.6 6.9 21l3.3-1.7L12 21l1.8-1.7L17.1 21l-1.7-6.4" />
  </svg>
);

export const LinkIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10.2 13.8a3.4 3.4 0 0 0 4.8 0l3-3a3.4 3.4 0 0 0-4.8-4.8l-1.2 1.2" />
    <path d="M13.8 10.2a3.4 3.4 0 0 0-4.8 0l-3 3a3.4 3.4 0 0 0 4.8 4.8l1.2-1.2" />
  </svg>
);

export const CoinsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="6.4" rx="6.4" ry="2.6" />
    <path d="M5.6 6.4v4.3c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6V6.4" />
    <path d="M5.6 10.7v4.3c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6v-4.3" />
  </svg>
);

export const CursorClickIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 4.5 15.5 19l1.9-4.6 4.6-1.9L9 4.5Z" />
    <path d="M4.5 9H2.8M6.4 6.4 5.2 5.2M9 4.5V2.8" />
  </svg>
);

export const CompassIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.4 8.6-2 4.8-4.8 2 2-4.8 4.8-2Z" />
  </svg>
);

export const ClipboardListIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
    <rect x="9" y="2.6" width="6" height="3.2" rx="1.2" />
    <path d="M8.8 10.4h6.4M8.8 13.8h6.4M8.8 17.2h3.6" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5.4" width="18" height="13.2" rx="2" />
    <path d="m3.9 6.7 8.1 6 8.1-6" />
  </svg>
);

export const VideoIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="6.8" width="12.2" height="10.4" rx="2" />
    <path d="M15.2 10.6 20.8 7.6v8.8l-5.6-3z" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.12.9.34 1.8.64 2.6a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.15a2 2 0 0 1 2.1-.45c.85.3 1.7.52 2.6.64a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const PhoneRingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.4 21a1.9 1.9 0 0 0 1.9-1.9v-2a1.9 1.9 0 0 0-1.6-1.9 10 10 0 0 1-1.9-.5 1.9 1.9 0 0 0-1.9.5l-.8.8a14 14 0 0 1-4.2-4.2l.8-.8a1.9 1.9 0 0 0 .5-1.9 10 10 0 0 1-.5-1.9A1.9 1.9 0 0 0 4.9 5.4H2.8A1.9 1.9 0 0 0 .9 7.4 15.6 15.6 0 0 0 14.4 21Z" />
    <path d="M16.4 3.2a6.6 6.6 0 0 1 4.4 4.4M15.7 6.9a3.1 3.1 0 0 1 2 2" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="m6 9.5 6 6 6-6" />
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

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 6.4A7.6 7.6 0 0 0 12.05 4.2 7.66 7.66 0 0 0 5.4 15.7L4.2 20l4.4-1.15a7.6 7.6 0 0 0 3.44.87h.01a7.66 7.66 0 0 0 5.45-13.32ZM12.06 18.3h-.01a6.35 6.35 0 0 1-3.24-.89l-.23-.14-2.4.63.64-2.34-.15-.24a6.36 6.36 0 1 1 5.4 2.98Zm3.5-4.76c-.19-.1-1.13-.56-1.31-.62-.18-.06-.3-.1-.43.1-.13.19-.5.61-.61.74-.11.13-.22.14-.41.05a5.2 5.2 0 0 1-1.54-.95 5.77 5.77 0 0 1-1.06-1.32c-.11-.19-.01-.29.08-.39.09-.09.19-.22.29-.34.1-.12.13-.2.19-.33.06-.13.03-.25-.02-.34-.05-.1-.43-1.04-.59-1.42-.15-.37-.31-.32-.43-.33h-.36c-.13 0-.34.05-.51.24-.18.19-.67.66-.67 1.6 0 .95.68 1.86.78 1.99.1.13 1.35 2.06 3.28 2.89.46.2.81.32 1.09.4.46.15.87.13 1.2.08.37-.06 1.13-.46 1.29-.91.16-.45.16-.83.11-.91-.05-.08-.17-.13-.36-.23Z" />
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
