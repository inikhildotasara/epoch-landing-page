export type Program = {
  code: string;
  color: string;
  name: [string, string];
  copy: string;
  logo: string;
  strap?: string[];
  titleColor?: string;
};

export const olympiads: Program[] = [
  {
    code: "IMO",
    color: "#101b64",
    logo: "/images/exam-icons/IMO.png",
    name: ["International", "Mathematics Olympiad"],
    copy: "Develop mathematical understanding, logical reasoning and problem-solving ability.",
  },
  {
    code: "ITST",
    color: "#1e9245",
    logo: "/images/exam-icons/ITST.png",
    name: ["International", "Talent Search Test"],
    copy: "Explore aptitude, analytical thinking, reasoning and the ability to approach unfamiliar problems.",
  },
  {
    code: "IAO",
    color: "#7b2fa8",
    logo: "/images/exam-icons/IAO.png",
    name: ["International", "Aptitude Olympiad"],
    copy: "Develop observation, logical reasoning, analytical thinking and problem-solving.",
  },
  {
    code: "IGKO",
    color: "#d27909",
    logo: "/images/exam-icons/IGKO.png",
    name: ["International", "General Knowledge Olympiad"],
    copy: "Expand awareness and encourage students to connect knowledge with the world around them.",
  },
];

export const platforms: Program[] = [
  {
    code: "IHOST",
    color: "#11a6a4",
    titleColor: "#0f9c9a",
    logo: "/images/exam-icons/IHOST.png",
    name: ["International Holistic", "Olympiad for Smart Thinkers"],
    strap: ["Think • Explore • Discover • Excel"],
    copy: "A holistic learning experience integrating Mathematics, Science, Aptitude and General Knowledge into one balanced learning journey.",
  },
  {
    code: "IFLY",
    color: "#e8a013",
    titleColor: "#0b1c3f",
    logo: "/images/exam-icons/IFLY.png",
    name: ["International Future", "Literacy for Young Leaders"],
    strap: ["Understand Finance.", "Navigate Digital.", "Lead the Future."],
    copy: "A future-literacy learning platform that helps young learners understand finance, navigate digital and develop leadership for tomorrow.",
  },
];

export function ProgramBadge({
  program,
  className = "h-20 w-20",
}: {
  program: Program;
  className?: string;
}) {
  return (
    <img
      src={program.logo}
      alt={`${program.code} logo`}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
