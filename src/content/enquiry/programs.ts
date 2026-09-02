import type { FaqItem } from "@/components/faq/FaqAnswer";

export type ProgramId =
  | "brain-booster"
  | "imo"
  | "itst"
  | "iao"
  | "igko"
  | "ihost"
  | "ifly";

export type ProgramGroup = "assess" | "learn";

export type GlanceIcon =
  | "child"
  | "mode"
  | "book"
  | "clock"
  | "help"
  | "grid"
  | "levels";

export type GlanceFact = {
  icon: GlanceIcon;
  label: string;
  value: string;
};

export type ParticipateStep = {
  title: string;
  detail: string;
};

export type EnquiryProgram = {
  id: ProgramId;
  group: ProgramGroup;
  code: string;
  shortName: string;
  name: string;
  tag: string;
  audience: string;
  color: string;
  logo: string;
  bannerImage: string;
  bannerAlt: string;
  summary: string;
  comingSoon?: boolean;
  glance: GlanceFact[];
  whatIsIt: string;
  whyItMatters: string;
  assesses: string[];
  howItWorks: string[];
  participate: ParticipateStep[];
  afterNote: string;
  recognition: string[];
  prepare: string;
  faqs: FaqItem[];
};

const olympiadParticipate: ParticipateStep[] = [
  { title: "Register", detail: "School registers with Epoch Olympiad Foundation." },
  { title: "Select", detail: "Choose the Olympiad(s) as per eligibility." },
  { title: "Submit", detail: "School completes student registration." },
  { title: "Appear", detail: "Student appears for the Pre Exam / assessment." },
  { title: "Results", detail: "Check results and the Academic Health Report." },
];

const olympiadHowItWorks = [
  "Objective format",
  "No negative marking",
  "Official workbooks and Genie App resources",
  "Results with Academic Health Report",
];

const olympiadRecognition = [
  "International Level",
  "National Level",
  "Zonal Level",
  "School Level",
  "Class Level",
  "Scholarships for eligible achievers",
];

const olympiadAfter =
  "Performance is reviewed and shared as a result, followed by an Academic Health Report with parent- and school-friendly insights.";

const olympiadFaqs: FaqItem[] = [
  {
    q: "Who can participate?",
    a: [
      "These assessments are designed for students of Classes 1–10. A student may appear for any combination of Olympiads they are eligible for.",
    ],
  },
  {
    q: "Is there negative marking?",
    a: [
      "No. There is no negative marking in any Epoch Olympiad, at either the Pre or the Mains level.",
    ],
  },
  {
    q: "What is the difference between Pre Exam and Mains?",
    a: [
      "The Pre Exam assesses conceptual understanding and reasoning for every participant. For IMO, ITST and IAO, the top 10% of participating students in the Pre Exam are eligible for the Mains (Advance Level).",
      "IGKO is a single-level International Olympiad and does not have a separate Mains examination.",
    ],
  },
  {
    q: "How can students prepare?",
    a: [
      "Students can prepare using the workbooks, syllabus, sample papers, previous-year papers, marking schemes and other preparatory resources provided in our Genie App.",
      "Preparation should focus on understanding concepts, practising application and developing thinking skills, rather than relying only on memorisation.",
    ],
  },
  {
    q: "Where can I check results?",
    a: [
      "Results and the Academic Health Report are published in the Genie App, where schools and parents can review performance in detail.",
    ],
  },
];

const comingSoonFaqs: FaqItem[] = [
  {
    q: "When will complete details be available?",
    a: [
      "Detailed information for this learning platform will be published here shortly. Schools can register their interest in the meantime.",
    ],
  },
  {
    q: "How can a school stay updated?",
    a: [
      "Register your school or contact us. We will share programme details, eligibility and participation steps as they are released.",
    ],
  },
];

export const enquiryPrograms: EnquiryProgram[] = [
  {
    id: "brain-booster",
    group: "assess",
    code: "BB",
    shortName: "Brain Booster",
    name: "International Brain Booster Olympiad",
    tag: "Cognitive Assessment",
    audience: "For Kindergarten (Ages 2–6 years)",
    color: "#0b1c3f",
    logo: "/images/exam-icons/BRAIN BOOSTER.png",
    bannerImage: "/images/init-brainiac.png",
    bannerAlt: "A young learner exploring a thinking activity",
    summary:
      "A joyful and engaging cognitive assessment for Kindergarten children to understand how they observe, think, reason and solve.",
    glance: [
      { icon: "child", label: "For", value: "Kindergarten (Ages 2–6 years)" },
      { icon: "mode", label: "Mode", value: "Offline (Paper & Crayon)" },
      { icon: "book", label: "Medium", value: "English" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "20 Picture Based" },
      { icon: "grid", label: "Type", value: "MCQ" },
      { icon: "levels", label: "Level", value: "Two Stages" },
    ],
    whatIsIt:
      "A joyful, age-appropriate cognitive assessment designed to understand how young learners observe, recognise patterns, connect ideas, reason and explore simple problems — not how much they can memorise.",
    whyItMatters:
      "It helps parents and schools identify a child’s thinking strengths, learning style and readiness, so support can begin before learning gaps grow.",
    assesses: [
      "Observation",
      "Pattern Recognition",
      "Connecting Ideas",
      "Reasoning",
      "Early Problem-Solving",
    ],
    howItWorks: [
      "Age-appropriate questions",
      "Objective, picture-based format",
      "No negative marking",
      "Child-friendly school environment",
    ],
    participate: [
      { title: "Register", detail: "Register through your school." },
      { title: "Submit", detail: "Submit the parent consent form and fee." },
      { title: "Receive", detail: "Receive the coloured workbook and Genie App access." },
      { title: "Appear", detail: "Appear for the assessment in a friendly setting." },
      { title: "Results", detail: "Receive results and the Academic Health Report." },
    ],
    afterNote:
      "Each child receives performance-based recognition and an Academic Health Report with parent-friendly insights into thinking abilities and learning readiness.",
    recognition: [
      "International Level",
      "National Level",
      "Zonal Level",
      "School Level",
      "Class Level",
      "Scholarships & surprise gifts",
    ],
    prepare:
      "No intensive coaching is needed. Children prepare naturally through observation games, the coloured workbook, everyday patterns, and sample papers in the Genie App.",
    faqs: [
      {
        q: "What is the International Brain Booster Olympiad?",
        a: [
          "The International Brain Booster Olympiad is a joyful, age-appropriate cognitive assessment for kindergarten and eligible early learners.",
          "It explores how children observe, recognise patterns, connect ideas, reason and approach simple problems.",
        ],
      },
      {
        q: "What skills does it assess?",
        a: [
          "The assessment focuses on foundational thinking abilities such as observation, pattern recognition, connecting ideas, reasoning and early problem-solving.",
        ],
      },
      {
        q: "Is it based on a school textbook syllabus?",
        a: [
          "No. It uses age-appropriate situations involving colours, shapes and familiar everyday objects to understand how young children observe, recognise, connect and reason.",
        ],
      },
      {
        q: "How can my child participate?",
        a: [
          "The Olympiad is conducted through participating schools. Register through the school, complete the parent consent form, submit the fee, receive the workbook and Genie App access, then appear for the assessment.",
        ],
      },
      {
        q: "Does my child need coaching?",
        a: [
          "No. Parents can support their child by encouraging observation, curiosity and “why / how / what if” thinking. Colour workbook and study materials are available in the Genie App.",
        ],
      },
    ],
  },
  {
    id: "imo",
    group: "assess",
    code: "IMO",
    shortName: "IMO",
    name: "International Mathematics Olympiad",
    tag: "Academic Assessment",
    audience: "For Classes 1–10",
    color: "#101b64",
    logo: "/images/exam-icons/IMO.png",
    bannerImage: "/images/init-olympiad.png",
    bannerAlt: "A student working through a mathematics assessment",
    summary:
      "An international mathematics assessment that develops conceptual understanding, logical reasoning and problem-solving beyond rote calculation.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "As prescribed" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "30 (1–4) / 35 (5–10)" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Pre + Mains" },
    ],
    whatIsIt:
      "IMO is Epoch’s international mathematics olympiad for Classes 1–10. It looks at how students understand mathematical ideas and apply them to unfamiliar problems.",
    whyItMatters:
      "It shows whether a student can reason with numbers and patterns, not only recall formulas — giving schools and parents a clearer picture of mathematical thinking.",
    assesses: [
      "Mathematical understanding",
      "Logical reasoning",
      "Problem-solving",
      "Application of concepts",
    ],
    howItWorks: [
      ...olympiadHowItWorks,
      "Top 10% of Pre Exam participants qualify for Mains",
    ],
    participate: olympiadParticipate,
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "Prepare with official workbooks, syllabus, sample papers and previous-year papers in the Genie App. Focus on concepts and application, not memorisation.",
    faqs: olympiadFaqs,
  },
  {
    id: "itst",
    group: "assess",
    code: "ITST",
    shortName: "ITST",
    name: "International Test of Science & Technology",
    tag: "Academic Assessment",
    audience: "For Classes 1–10",
    color: "#1e9245",
    logo: "/images/exam-icons/ITST.png",
    bannerImage: "/images/init-olympiad.png",
    bannerAlt: "A student working through a science and technology assessment",
    summary:
      "An international science and technology assessment that explores analytical thinking, reasoning and the ability to approach unfamiliar problems.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "As prescribed" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "30 (1–4) / 35 (5–10)" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Pre + Mains" },
    ],
    whatIsIt:
      "ITST is an international science and technology assessment for Classes 1–10. It looks at how students analyse information and think through new situations.",
    whyItMatters:
      "It helps identify analytical and reasoning strengths that sit beneath subject marks, so support can be more precise.",
    assesses: [
      "Aptitude",
      "Analytical thinking",
      "Reasoning",
      "Approach to unfamiliar problems",
    ],
    howItWorks: [
      ...olympiadHowItWorks,
      "Top 10% of Pre Exam participants qualify for Mains",
    ],
    participate: olympiadParticipate,
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "Prepare with official workbooks, syllabus, sample papers and previous-year papers in the Genie App. Focus on reasoning through new problems, not memorisation.",
    faqs: olympiadFaqs,
  },
  {
    id: "iao",
    group: "assess",
    code: "IAO",
    shortName: "IAO",
    name: "International Aptitude Olympiad",
    tag: "Academic Assessment",
    audience: "For Classes 1–10",
    color: "#7b2fa8",
    logo: "/images/exam-icons/IAO.png",
    bannerImage: "/images/init-olympiad.png",
    bannerAlt: "A student working through an aptitude assessment",
    summary:
      "An international aptitude olympiad that develops observation, logical reasoning, analytical thinking and problem-solving.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "As prescribed" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "30 (1–4) / 35 (5–10)" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Pre + Mains" },
    ],
    whatIsIt:
      "IAO is Epoch’s international aptitude olympiad for Classes 1–10. It explores how students observe, reason and solve problems that are not tied to a single textbook chapter.",
    whyItMatters:
      "Aptitude insights help schools and parents see how a child thinks, not only what they have recently been taught.",
    assesses: [
      "Observation",
      "Logical reasoning",
      "Analytical thinking",
      "Problem-solving",
    ],
    howItWorks: [
      ...olympiadHowItWorks,
      "Top 10% of Pre Exam participants qualify for Mains",
    ],
    participate: olympiadParticipate,
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "Prepare with official workbooks, syllabus, sample papers and previous-year papers in the Genie App. Practise observation and reasoning with unfamiliar questions.",
    faqs: olympiadFaqs,
  },
  {
    id: "igko",
    group: "assess",
    code: "IGKO",
    shortName: "IGKO",
    name: "International General Knowledge Olympiad",
    tag: "Academic Assessment",
    audience: "For Classes 1–10",
    color: "#d27909",
    logo: "/images/exam-icons/IGKO.png",
    bannerImage: "/images/init-olympiad.png",
    bannerAlt: "A student working through a general knowledge assessment",
    summary:
      "An international general-knowledge olympiad that expands awareness and encourages students to connect knowledge with the world around them.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "As prescribed" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "35 questions" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Single Level" },
    ],
    whatIsIt:
      "IGKO is a single-level international olympiad for Classes 1–10. It looks at how widely students notice, remember and connect knowledge about the world.",
    whyItMatters:
      "It encourages curiosity beyond the textbook and shows how comfortably a student connects classroom learning with everyday awareness.",
    assesses: [
      "General awareness",
      "Connecting knowledge",
      "Observation of the world",
      "Curious, informed thinking",
    ],
    howItWorks: [
      "Objective format",
      "No negative marking",
      "Single-level assessment — no separate Mains",
      "Official workbooks and Genie App resources",
    ],
    participate: [
      { title: "Register", detail: "School registers with Epoch Olympiad Foundation." },
      { title: "Select", detail: "Choose IGKO as per eligibility." },
      { title: "Submit", detail: "School completes student registration." },
      { title: "Appear", detail: "Student appears for the single-level assessment." },
      { title: "Results", detail: "Check results and the Academic Health Report." },
    ],
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "Prepare with official workbooks, syllabus, sample papers and previous-year papers in the Genie App. Read widely and connect facts with everyday life.",
    faqs: olympiadFaqs,
  },
  {
    id: "ihost",
    group: "learn",
    code: "IHOST",
    shortName: "IHOST",
    name: "International Holistic Olympiad for Smart Thinkers",
    tag: "Learning Platform",
    audience: "Coming soon",
    color: "#0f9c9a",
    logo: "/images/exam-icons/IHOST.png",
    bannerImage: "/images/card-olympiad.png",
    bannerAlt: "Learners exploring a holistic learning platform",
    comingSoon: true,
    summary:
      "A holistic learning platform that builds curiosity, reasoning and problem-solving by connecting Mathematics, Science, Language, Aptitude and General Knowledge.",
    glance: [
      { icon: "child", label: "For", value: "Details coming soon" },
      { icon: "mode", label: "Mode", value: "Details coming soon" },
      { icon: "book", label: "Focus", value: "Holistic learning" },
      { icon: "levels", label: "Status", value: "Coming soon" },
    ],
    whatIsIt:
      "IHOST is a future-focused learning platform built around a balanced learning journey — Think, Explore, Discover, Excel — rather than a single subject exam.",
    whyItMatters:
      "It is designed to build balanced intelligence: curiosity, reasoning and problem-solving across subjects, instead of preparing for one paper at a time.",
    assesses: [
      "Curiosity and exploration",
      "Reasoning and problem-solving",
      "Connecting Mathematics, Science, Language, Aptitude and GK",
    ],
    howItWorks: ["Complete participation details will be published here shortly."],
    participate: [
      { title: "Register", detail: "Register your school to stay informed." },
      { title: "Coming soon", detail: "Full participation steps will be shared here." },
    ],
    afterNote:
      "Learning outcomes, reports and recognition for IHOST will be published with the full programme details.",
    recognition: ["Recognition details coming soon"],
    prepare:
      "Preparation resources for IHOST will be added here. Schools can register now to receive updates.",
    faqs: comingSoonFaqs,
  },
  {
    id: "ifly",
    group: "learn",
    code: "IFLY",
    shortName: "IFLY",
    name: "International Future Literacy for Young Leaders",
    tag: "Learning Platform",
    audience: "Coming soon",
    color: "#e8a013",
    logo: "/images/exam-icons/IFLY.png",
    bannerImage: "/images/card-olympiad.png",
    bannerAlt: "Learners exploring finance and digital literacy",
    comingSoon: true,
    summary:
      "A future-focused learning platform that helps children understand money, make responsible choices and navigate the digital world with awareness and safety.",
    glance: [
      { icon: "child", label: "For", value: "Details coming soon" },
      { icon: "mode", label: "Mode", value: "Details coming soon" },
      { icon: "book", label: "Focus", value: "Finance & digital literacy" },
      { icon: "levels", label: "Status", value: "Coming soon" },
    ],
    whatIsIt:
      "IFLY is a future-literacy learning platform that helps young learners understand finance, navigate the digital world and develop leadership for tomorrow.",
    whyItMatters:
      "Money sense and digital awareness are everyday skills. IFLY is designed to build them with confidence and safety, not as an afterthought.",
    assesses: [
      "Understanding money",
      "Responsible choices",
      "Digital awareness and safety",
      "Future-ready leadership",
    ],
    howItWorks: ["Complete participation details will be published here shortly."],
    participate: [
      { title: "Register", detail: "Register your school to stay informed." },
      { title: "Coming soon", detail: "Full participation steps will be shared here." },
    ],
    afterNote:
      "Learning outcomes, reports and recognition for IFLY will be published with the full programme details.",
    recognition: ["Recognition details coming soon"],
    prepare:
      "Preparation resources for IFLY will be added here. Schools can register now to receive updates.",
    faqs: comingSoonFaqs,
  },
];

export const DEFAULT_PROGRAM_ID: ProgramId = "brain-booster";

export function getEnquiryProgram(id: string | null | undefined) {
  return (
    enquiryPrograms.find((p) => p.id === id) ??
    enquiryPrograms.find((p) => p.id === DEFAULT_PROGRAM_ID)!
  );
}

export function isProgramId(value: string | null): value is ProgramId {
  return enquiryPrograms.some((p) => p.id === value);
}
