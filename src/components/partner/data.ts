import type { SVGProps } from "react";
import {
  AnalyticsIcon,
  BriefcaseIcon,
  BuildingIcon,
  BulbIcon,
  ChipIcon,
  CoinsIcon,
  CompassIcon,
  GlobeIcon,
  GradCapIcon,
  GroupIcon,
  HandHeartIcon,
  HandshakeIcon,
  HeartPulseIcon,
  MailIcon,
  MapIcon,
  MegaphoneIcon,
  MicroscopeIcon,
  NetworkIcon,
  OpenBookIcon,
  PhoneIcon,
  RocketIcon,
  ScaleIcon,
  TargetIcon,
  TrophyIcon,
  UserIcon,
  VideoIcon,
  WhatsAppIcon,
} from "../icons";

export type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

/* -------------------------------------------------- 1. why partner with us */

export const whyPartner: { title: string; desc: string; Icon: IconType }[] = [
  {
    title: "Research & Evidence",
    desc: "Collaborate on research, cognitive assessment, learning studies and evidence-based educational practices.",
    Icon: MicroscopeIcon,
  },
  {
    title: "Reach & Access",
    desc: "Help take meaningful learning and assessment opportunities to more children, schools and communities.",
    Icon: GroupIcon,
  },
  {
    title: "Innovation & Technology",
    desc: "Build or integrate technology, analytics, digital learning and assessment solutions.",
    Icon: BulbIcon,
  },
  {
    title: "Social Impact",
    desc: "Support initiatives that improve access to quality learning, cognitive development and educational opportunity.",
    Icon: HandHeartIcon,
  },
  {
    title: "Knowledge & Expertise",
    desc: "Bring academic, professional or domain expertise to strengthen our programmes, research and thought leadership.",
    Icon: GradCapIcon,
  },
];

/* -------------------------------------------------- 2. who can partner */

export const whoCanPartner: { title: string; desc: string; Icon: IconType }[] = [
  {
    title: "Government & Public Institutions",
    desc: "Ministries, departments, government bodies, public institutions and education authorities.",
    Icon: BuildingIcon,
  },
  {
    title: "Corporates & CSR Partners",
    desc: "Companies and CSR teams interested in supporting education, children, cognitive development and measurable social impact.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Academic & Research Institutions",
    desc: "Universities, colleges, research centres, laboratories and educational institutions.",
    Icon: GradCapIcon,
  },
  {
    title: "Schools & Education Networks",
    desc: "Schools, school groups, education networks and institutions seeking meaningful assessment and learning partnerships.",
    Icon: OpenBookIcon,
  },
  {
    title: "Foundations, NGOs & Social Organisations",
    desc: "Organisations working in education, child development, community development and social impact.",
    Icon: HeartPulseIcon,
  },
  {
    title: "Technology & Innovation Partners",
    desc: "EdTech, AI, analytics, assessment technology, digital learning and technology organisations.",
    Icon: ChipIcon,
  },
  {
    title: "Professional & Industry Bodies",
    desc: "Associations, chambers, professional organisations and domain experts who can contribute knowledge, networks or opportunities.",
    Icon: ScaleIcon,
  },
  {
    title: "Media, Knowledge & Content Partners",
    desc: "Organisations interested in education awareness, knowledge dissemination and thought leadership.",
    Icon: MegaphoneIcon,
  },
  {
    title: "International Organisations & Institutions",
    desc: "Global education, research, assessment and knowledge organisations interested in collaborative initiatives.",
    Icon: GlobeIcon,
  },
];

/* -------------------------------------------------- 3. areas to explore */

export const exploreAreas: { area: string; desc: string }[] = [
  {
    area: "Research & Assessment",
    desc: "Cognitive research, assessment studies, validation, benchmarking and educational research.",
  },
  {
    area: "CSR & Social Impact",
    desc: "Sponsor assessments, learning programmes, scholarships or educational access initiatives.",
  },
  {
    area: "Government Collaboration",
    desc: "Education projects, pilots, research initiatives and large-scale learning interventions.",
  },
  {
    area: "Academic Partnership",
    desc: "Research collaboration, expert review, academic advisory and knowledge exchange.",
  },
  {
    area: "Technology Partnership",
    desc: "AI, analytics, digital platforms, assessment technology and integrations.",
  },
  {
    area: "Programme Partnership",
    desc: "Jointly develop or scale educational programmes and learning initiatives.",
  },
  {
    area: "Scholarships & Recognition",
    desc: "Support scholarships, awards, prizes and recognition programmes.",
  },
  {
    area: "Knowledge Partnership",
    desc: "Content, publications, conferences, webinars and thought leadership.",
  },
  {
    area: "Distribution & Outreach",
    desc: "Expand access through suitable education and institutional networks.",
  },
  {
    area: "International Collaboration",
    desc: "Cross-border research, assessments, learning programmes and academic exchange.",
  },
];

/* -------------------------------------------------- 4. areas of impact */

export const impactAreas: {
  name: string;
  tagline: string;
  desc: string;
  img: string;
  /** Crop anchor, for artwork whose subject sits away from the centre. */
  imgPosition?: string;
  accent: string;
  Icon: IconType;
}[] = [
  {
    name: "Epoch Olympiad Foundation",
    tagline: "Research • Assessment • Cognitive Development",
    desc: "Exploring how children learn, think, reason and apply knowledge beyond rote memorisation.",
    img: "/images/research-hero.png",
    accent: "#14294d",
    Icon: MicroscopeIcon,
  },
  {
    name: "Epoch Olympiad",
    tagline: "International Assessments • Future-Ready Learning",
    desc: "International Olympiads and learning platforms designed to develop conceptual understanding, reasoning and future readiness.",
    img: "/images/card-olympiad.png",
    accent: "#b0790f",
    Icon: TrophyIcon,
  },
  {
    name: "Brainiac Global",
    tagline: "Early Thinking • Curiosity • Learning Readiness",
    desc: "Nurturing foundational thinking in young learners through observation, curiosity, reasoning and age-appropriate experiences.",
    img: "/images/card-brainiac.png",
    accent: "#1f9254",
    Icon: BulbIcon,
  },
  {
    name: "MY CCBee",
    tagline: "Performance Tracking • Insights • Improvement",
    desc: "Helping parents and schools understand everyday learning and performance through continuous tracking and actionable insights.",
    img: "/images/ccbee-dashboard.webp",
    imgPosition: "object-top",
    accent: "#8e2fae",
    Icon: AnalyticsIcon,
  },
];

/* -------------------------------------------------- 5. what we look for */

export const lookFor: { label: string; Icon: IconType }[] = [
  { label: "Shared commitment to improving education", Icon: HandshakeIcon },
  { label: "Relevant expertise or domain knowledge", Icon: GradCapIcon },
  { label: "Technology or innovation capabilities", Icon: ChipIcon },
  { label: "Research or academic strength", Icon: MicroscopeIcon },
  { label: "Financial or CSR support", Icon: CoinsIcon },
  { label: "Institutional or community reach", Icon: NetworkIcon },
  { label: "Access to new geographies or learner communities", Icon: MapIcon },
  { label: "Ability to create measurable educational impact", Icon: TargetIcon },
  { label: "Long-term commitment to meaningful collaboration", Icon: CompassIcon },
];

/* -------------------------------------------------- 6. the form */

export const organisationTypes = [
  "Government / Public Institution",
  "Corporate / CSR",
  "Academic / Research Institution",
  "School / Education Institution",
  "NGO / Foundation",
  "Technology / EdTech Company",
  "Professional / Industry Body",
  "Media / Knowledge Organisation",
  "International Organisation",
  "Individual Professional / Expert",
  "Other",
] as const;

export const collaborationAreas = [
  "Research & Assessment",
  "CSR / Social Impact",
  "Government / Public Education Collaboration",
  "Academic / Research Collaboration",
  "Technology / Digital / AI",
  "Educational Programme Development",
  "Scholarships / Awards / Sponsorship",
  "Knowledge / Content / Thought Leadership",
  "Institutional Outreach",
  "International Collaboration",
  "Distribution / Outreach",
  "Other",
] as const;

export const initiativeChoices: {
  id: string;
  desc?: string;
  accent?: string;
  tint?: string;
  Icon?: IconType;
}[] = [
  {
    id: "Epoch Olympiad Foundation",
    desc: "Research & cognitive assessment",
    accent: "#14294d",
    tint: "#f3f6fc",
    Icon: MicroscopeIcon,
  },
  {
    id: "Epoch Olympiad",
    desc: "International Olympiads & future-ready learning platforms",
    accent: "#b0790f",
    tint: "#fffaef",
    Icon: TrophyIcon,
  },
  {
    id: "Brainiac Global",
    desc: "Early learning & foundational thinking",
    accent: "#1f9254",
    tint: "#f3fbf6",
    Icon: BulbIcon,
  },
  {
    id: "MY CCBee",
    desc: "Performance tracking & educational analytics",
    accent: "#8e2fae",
    tint: "#fbf4fd",
    Icon: AnalyticsIcon,
  },
];

/* Kept apart from the four initiatives because they are plain rows under the
   tiles rather than choices between initiatives. */
export const broaderChoices = [
  "More than one initiative",
  "I am interested in a broader strategic collaboration",
] as const;

export const contributions = [
  "Funding / CSR Support",
  "Research Expertise",
  "Academic Expertise",
  "Technology / Platform",
  "Infrastructure / Resources",
  "Institutional Network / Outreach",
  "Government / Public-Sector Access",
  "School / Education Network",
  "Content / Knowledge",
  "Mentorship / Advisory Support",
  "Scholarships / Awards",
  "International Reach",
  "Other",
] as const;

export const scales = [
  "Local",
  "Regional",
  "State",
  "National",
  "International",
  "Not yet decided",
] as const;

export const timeframes = [
  "Exploring possibilities",
  "Within 3 months",
  "Within 6 months",
  "Within 12 months",
  "Long-term / strategic",
] as const;

export const connectModes: { id: string; Icon: IconType }[] = [
  { id: "Email", Icon: MailIcon },
  { id: "Phone Call", Icon: PhoneIcon },
  { id: "WhatsApp", Icon: WhatsAppIcon },
  { id: "Video Meeting", Icon: VideoIcon },
  { id: "Face-to-Face Meeting", Icon: UserIcon },
];

export const MESSAGE_LIMIT = 1200;

/* -------------------------------------------------- closing band */

export const closingStats: { big: string; label: string; Icon: IconType }[] = [
  { big: "500+", label: "Schools", Icon: BuildingIcon },
  { big: "5+", label: "Countries", Icon: GlobeIcon },
  { big: "10L+", label: "Students Impacted", Icon: RocketIcon },
];
