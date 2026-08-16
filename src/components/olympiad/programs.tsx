import type { ComponentType, SVGProps } from "react";
import {
  BulbIcon,
  GlobeIcon,
  PuzzleIcon,
  TargetIcon,
  TrendUpIcon,
} from "../icons";

export type Program = {
  code: string;
  color: string;
  name: [string, string];
  copy: string;
  /* IMO is drawn as a √x monogram, every other programme uses a line icon */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  glyph?: string;
  strap?: string[];
  titleColor?: string;
};

export const olympiads: Program[] = [
  {
    code: "IMO",
    color: "#101b64",
    glyph: "\u221Ax",
    name: ["International", "Mathematics Olympiad"],
    copy: "Develop mathematical understanding, logical reasoning and problem-solving ability.",
  },
  {
    code: "ITST",
    color: "#1e9245",
    icon: TargetIcon,
    name: ["International", "Talent Search Test"],
    copy: "Explore aptitude, analytical thinking, reasoning and the ability to approach unfamiliar problems.",
  },
  {
    code: "IAO",
    color: "#7b2fa8",
    icon: BulbIcon,
    name: ["International", "Aptitude Olympiad"],
    copy: "Develop observation, logical reasoning, analytical thinking and problem-solving.",
  },
  {
    code: "IGKO",
    color: "#d27909",
    icon: GlobeIcon,
    name: ["International", "General Knowledge Olympiad"],
    copy: "Expand awareness and encourage students to connect knowledge with the world around them.",
  },
];

export const platforms: Program[] = [
  {
    code: "IHOST",
    color: "#11a6a4",
    icon: PuzzleIcon,
    titleColor: "#0f9c9a",
    name: ["International Holistic", "Olympiad for Smart Thinkers"],
    strap: ["Think • Explore • Discover • Excel"],
    copy: "A holistic learning experience integrating Mathematics, Science, Aptitude and General Knowledge into one balanced learning journey.",
  },
  {
    code: "IFLY",
    color: "#e8a013",
    icon: TrendUpIcon,
    titleColor: "#0b1c3f",
    name: ["International Future", "Literacy for Young Leaders"],
    strap: ["Understand Finance.", "Navigate Digital.", "Lead the Future."],
    copy: "A future-literacy learning platform that helps young learners understand finance, navigate digital and develop leadership for tomorrow.",
  },
];

export function ProgramBadge({
  program,
  className = "h-12 w-12",
  iconClassName = "h-6 w-6",
  glyphClassName = "text-[16px]",
}: {
  program: Program;
  className?: string;
  iconClassName?: string;
  glyphClassName?: string;
}) {
  const Icon = program.icon;
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full text-white ${className}`}
      style={{ backgroundColor: program.color }}
    >
      {Icon ? (
        <Icon className={iconClassName} strokeWidth={1.6} />
      ) : (
        <span className={`font-serif font-semibold leading-none ${glyphClassName}`}>
          {program.glyph}
        </span>
      )}
    </span>
  );
}
