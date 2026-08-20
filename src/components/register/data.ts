import type { SVGProps } from "react";
import {
  BarChartArrowIcon,
  BrainIcon,
  BuildingIcon,
  ChildFaceIcon,
  CompassIcon,
  HelpBubbleIcon,
  MailIcon,
  MedalIcon,
  NetworkIcon,
  PhoneIcon,
  RocketIcon,
  ScaleIcon,
  ShieldIcon,
  TrendUpIcon,
  TrophyIcon,
  TrophyPinIcon,
  VideoIcon,
  WhatsAppIcon,
} from "../icons";

export type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

export const heroBadges: { label: string; Icon: IconType }[] = [
  { label: "Trusted Assessments", Icon: ShieldIcon },
  { label: "Future-Ready Learning", Icon: RocketIcon },
  { label: "Actionable Insights", Icon: TrendUpIcon },
  { label: "Meaningful Recognition", Icon: TrophyPinIcon },
];

/* -------------------------------------------------- 1. school details */

export const designations = [
  "Principal",
  "Vice Principal",
  "Director",
  "Correspondent / Trustee",
  "Head of School",
  "Academic Coordinator",
  "Exam Coordinator / In-charge",
  "Teacher",
  "Administrative Officer",
  "Other",
] as const;

export const affiliations = [
  "Private Unaided",
  "Government",
  "Government Aided",
  "International School",
  "Pre-school / Playgroup Chain",
  "Trust / Society Run",
  "Other",
] as const;

export const boards = [
  "CBSE",
  "ICSE / CISCE",
  "State Board",
  "IB",
  "Cambridge (CAIE) / IGCSE",
  "NIOS",
  "Other",
] as const;

export const strengthRanges = [
  "Under 250 students",
  "250 – 500 students",
  "500 – 1,000 students",
  "1,000 – 2,000 students",
  "2,000 – 5,000 students",
  "Above 5,000 students",
] as const;

export const classOptions = [
  "Playgroup",
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
] as const;

export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
  "Outside India",
] as const;

/* India first — the Foundation's schools are largely Indian, with Olympiad
   partners across South Asia, the Gulf and beyond. */
export const countries = [
  "India",
  "Nepal",
  "Bhutan",
  "Bangladesh",
  "Sri Lanka",
  "Maldives",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Australia",
  "New Zealand",
  "United Kingdom",
  "United States",
  "Canada",
  "South Africa",
  "Kenya",
  "Tanzania",
  "Nigeria",
  "Mauritius",
  "Other",
] as const;

/* -------------------------------------------------- 2. initiatives */

export type Initiative = {
  id: string;
  title: string;
  summary: string[];
  bullets: string[];
  note?: string;
  accent: string;
  tint: string;
  Icon: IconType;
};

export const initiativeOptions: Initiative[] = [
  {
    id: "Brainiac Global",
    title: "Brainiac Global",
    summary: ["International Brain Booster", "Exam for Kindergarten"],
    bullets: [
      "For Kindergarten learners",
      "Fun & engaging assessment",
      "Builds observation, thinking & reasoning skills",
    ],
    accent: "#1f9254",
    tint: "#f3fbf6",
    Icon: BrainIcon,
  },
  {
    id: "Epoch Olympiad",
    title: "Epoch Olympiad",
    summary: [
      "International Olympiads &",
      "Future-Learning Initiatives",
      "for Classes 1-10",
    ],
    bullets: [
      "IAO, ITST, IMO, IGKO",
      "IHOST – Holistic Learning",
      "IFLY – Future Literacy",
      "Awards & Recognition",
    ],
    accent: "#1b3566",
    tint: "#f3f6fc",
    Icon: TrophyIcon,
  },
  {
    id: "MY CCBee",
    title: "MY CCBee",
    summary: ["Performance Tracker &", "Booster Platform"],
    bullets: [
      "For Playgroup to Class 2",
      "Daily activity & performance tracking",
      "Insights for parents, teachers & schools",
    ],
    accent: "#8e2fae",
    tint: "#fbf4fd",
    Icon: BarChartArrowIcon,
  },
  {
    id: "All three initiatives",
    title: "I would like to understand all three initiatives",
    summary: [],
    bullets: [],
    note: "Help us understand the best way to support your school.",
    accent: "#c98a05",
    tint: "#fffaef",
    Icon: HelpBubbleIcon,
  },
];

/* -------------------------------------------------- 3. requirements */

export const OTHER_REQUIREMENT = "Other (Please specify)";

/* Ordered so the four-row, column-flowing grid on large screens reads the way
   the printed layout does, while a single column keeps the same logic. */
export const requirementOptions = [
  "Program / Product Information",
  "Eligibility & Classes",
  "Exam / Program Structure",
  "Syllabus & Sample Papers",
  "How the Program Works",
  "Implementation in School",
  "Academic Health Report",
  "Demo / Presentation",
  "Registration / Participation Process",
  "Awards & Recognition",
  OTHER_REQUIREMENT,
] as const;

export const MESSAGE_LIMIT = 500;

/* -------------------------------------------------- 4. what we look for */

export const lookFor: { title: string; desc: string; Icon: IconType }[] = [
  {
    title: "Commitment to Excellence",
    desc: "Schools that strive for overall development and academic excellence.",
    Icon: MedalIcon,
  },
  {
    title: "Learner-Centric Approach",
    desc: "Institutions focused on holistic growth and future-ready education.",
    Icon: ChildFaceIcon,
  },
  {
    title: "Collaborative Mindset",
    desc: "Schools open to partnerships that create meaningful impact for students.",
    Icon: NetworkIcon,
  },
  {
    title: "Vision for the Future",
    desc: "Leaders who believe in building strong foundations for young minds.",
    Icon: CompassIcon,
  },
  {
    title: "Integrity & Values",
    desc: "Upholding transparency, ethics and the highest standards.",
    Icon: ScaleIcon,
  },
];

/* -------------------------------------------------- 5. preferred contact */

export const connectModes: { id: string; Icon: IconType }[] = [
  { id: "Phone Call", Icon: PhoneIcon },
  { id: "WhatsApp", Icon: WhatsAppIcon },
  { id: "Email", Icon: MailIcon },
  { id: "Online Meeting", Icon: VideoIcon },
  { id: "School Visit", Icon: BuildingIcon },
];

export const connectTimes = [
  { id: "Morning", slot: "9 AM – 12 PM" },
  { id: "Afternoon", slot: "12 PM – 4 PM" },
  { id: "Evening", slot: "4 PM – 7 PM" },
] as const;
