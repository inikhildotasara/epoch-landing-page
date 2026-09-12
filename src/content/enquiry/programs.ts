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

const olympiadRecognition = [
  "International Level",
  "National Level",
  "Zonal Level",
  "School Level",
  "Class Level",
  "Scholarships for eligible achievers",
];

const olympiadAfter =
  "Students receive their assessment results along with performance insights designed to help parents and schools understand core strengths and areas for improvement.";

const imoFaqs: FaqItem[] = [
  {
    q: "What is the International Mathematics Olympiad?",
    a: [
      "A mathematics assessment for Classes 1–10 that focuses on conceptual understanding, reasoning, application and problem-solving.",
    ],
  },
  {
    q: "Who can participate in IMO?",
    a: ["Students of Classes 1–10 can participate through participating schools."],
  },
  {
    q: "Is IMO based on the school syllabus?",
    a: [
      "The assessment is aligned with age/class-appropriate mathematical concepts while also testing reasoning and application.",
    ],
  },
  {
    q: "Is there negative marking?",
    a: ["No. IMO has no negative marking."],
  },
  {
    q: "How are students selected for Mains?",
    a: [
      "The top 10% of participating students in the Pre level qualify for Mains.",
    ],
  },
  {
    q: "Does a student need coaching?",
    a: [
      "No intensive coaching is required. Conceptual clarity, regular practice and exposure to different problem types are more important.",
    ],
  },
  {
    q: "Where can I find the complete syllabus and sample papers?",
    a: ["The complete academic resources are available through the Genie App."],
  },
];

const ihostFaqs: FaqItem[] = [
  {
    q: "Is IHOST an examination or Olympiad competition?",
    a: [
      "No. IHOST is not a conventional examination or competitive assessment.",
      "It does not primarily focus on marks, ranks or competition. Instead, it is designed as a continuous learning journey that helps children develop broader thinking and application skills.",
      "The word “Olympiad” is part of the official programme name, but IHOST itself is positioned as a learning platform.",
    ],
  },
  {
    q: "What will children actually do in IHOST?",
    a: [
      "Children will participate in engaging learning experiences, real-life situations, activity challenges and age-appropriate case-based challenges.",
      [
        "Thinking and reasoning",
        "Observation",
        "Problem-solving",
        "Exploring everyday situations",
        "Applying concepts",
        "Creating solutions",
        "Discussing ideas",
        "Reflecting on what they have learned",
      ],
      "The emphasis is on learning by doing and thinking, rather than simply completing worksheets.",
    ],
  },
  {
    q: "Can IHOST be started at any time during the academic year?",
    a: [
      "Yes, subject to the school's implementation schedule.",
      "IHOST is designed to provide flexibility rather than requiring every school to conduct the programme on one fixed date. However, completing the recommended learning journey is important to experience its intended benefits.",
    ],
  },
  {
    q: "Will IHOST follow the school syllabus?",
    a: [
      "IHOST will be designed to remain age-appropriate and compatible with children's existing learning, while going beyond routine textbook learning through application and real-life challenges.",
      "It will complement school learning rather than compete with it.",
    ],
  },
  {
    q: "Where can parents or students see IHOST learning resources and updates?",
    a: [
      "IHOST resources, activity guidance and relevant programme information can be made available through the Genie App and participating school, depending on the specific stage and implementation model.",
    ],
  },
  {
    q: "Do parents need to teach the IHOST curriculum at home?",
    a: [
      "No. Parents are not expected to become teachers.",
      "However, selected IHOST challenges may invite parents to participate as learning partners, especially when an activity connects naturally with everyday life. Research on learning through play similarly recognises parents and caregivers as valuable partners in children's learning.",
    ],
  },
  {
    q: "Will IHOST require a mobile phone or computer?",
    a: [
      "Not necessarily. IHOST should be designed so that core learning experiences can happen through school-based activities and physical interaction, while the Genie App can provide supporting digital resources where appropriate.",
    ],
  },
  {
    q: "What happens after my child completes a stage of IHOST?",
    a: [
      "After completing a defined stage of the learning journey, the child's progress can be reviewed and shared through an IHOST Growth Snapshot.",
      "The snapshot is intended to help parents and schools understand:",
      [
        "Whether the child is doing well",
        "Which abilities are developing",
        "Where further opportunities for growth exist",
        "What the child can explore next",
      ],
      "It is not a marksheet or competitive rank report.",
    ],
  },
  {
    q: "What happens after the Growth Snapshot?",
    a: [
      "The child can move to the next stage of the IHOST journey, with new age-appropriate challenges and learning experiences.",
      "In simple terms:",
      ["Complete → Understand Growth → Continue → Grow"],
      "The purpose is to make IHOST a continuing journey rather than a one-time programme.",
    ],
  },
  {
    q: "Will my child receive a certificate for completing IHOST?",
    a: [
      "Yes. Every child will receive a certificate. Additionally, an appropriate recognition may be provided for meaningful completion of defined IHOST stages, according to the programme's recognition framework.",
    ],
  },
];

const iflyFaqs: FaqItem[] = [
  {
    q: "Is IFLY an examination or competition?",
    a: [
      "No.",
      "IFLY is a learning journey, not an examination. Children learn through real-life situations, activities, challenges, decisions and reflection rather than being evaluated through marks or ranks.",
    ],
  },
  {
    q: 'What does "Young Leaders" mean in IFLY?',
    a: [
      "It does not mean that every child has to become a businessperson or financial expert.",
      "It reflects IFLY's aim to develop children who can think independently, make responsible choices, understand consequences and navigate real-world situations with confidence.",
    ],
  },
  {
    q: "What will my child actually do in IFLY?",
    a: [
      "Children learn through:",
      [
        "Real-life situations",
        "Case-based challenges",
        "Decision-making activities",
        "Stories and scenarios",
        "Interactive experiences",
        "Small missions",
        "Discussions",
        "Reflection",
        "Parent-child conversations",
      ],
      "The framework specifically proposes scenarios where there may not be one “correct” answer; instead, the child's reasoning and decision-making become important.",
    ],
  },
  {
    q: "Can IFLY be started at any time of the year?",
    a: [
      "Yes.",
      "IFLY is not tied to a single examination date.",
      "A school can begin the IFLY journey when it is ready and continue through the appropriate learning experiences.",
    ],
  },
  {
    q: "Does every class follow the same IFLY content?",
    a: [
      "No.",
      "IFLY follows an age-progressive approach. A Kindergarten child may explore simple choices and safe digital habits, while an older child may work through budgeting, financial planning, digital scams, consumer decisions or misinformation.",
      "The framework specifically recommends revisiting broad concepts at increasing levels of complexity rather than creating completely disconnected curricula for every class.",
    ],
  },
  {
    q: "Where can parents or students see IFLY learning resources and updates?",
    a: [
      "IFLY resources, activity guidance and relevant programme information can be made available through the Genie App and participating school, depending on the specific stage and implementation model.",
    ],
  },
  {
    q: "What happens after completing an IFLY stage?",
    a: [
      "After completing a particular IFLY stage, the child's learning journey is reviewed and an IFLY Growth Snapshot is shared.",
      "It helps parents and educators understand the child's current development and identify meaningful next steps.",
    ],
  },
  {
    q: "Do parents need to teach the IFLY curriculum at home?",
    a: [
      "They don't need to.",
      "The best preparation is often simply allowing children to participate in everyday conversations about:",
      [
        "Choices",
        "Spending",
        "Saving",
        "Comparison",
        "Safety",
        "Digital behaviour",
        "Information",
      ],
    ],
  },
  {
    q: "Will IFLY require a mobile phone or computer?",
    a: [
      "Not necessarily.",
      "IFLY is designed so that core learning experiences can happen through school-based activities and physical interaction, while the Genie App can provide supporting digital resources where appropriate.",
    ],
  },
  {
    q: "Will my child receive a certificate for completing IFLY?",
    a: [
      "Yes. Every child will receive a certificate. Additionally, an appropriate recognition may be provided for meaningful completion of defined IFLY stages, according to the programme's recognition framework.",
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
    bannerImage: "/images/enquiry/imo-banner.png",
    bannerAlt: "A student working through a mathematics assessment",
    summary:
      "An international mathematics assessment designed to understand how students apply mathematical concepts, reason logically and solve problems beyond routine textbook learning.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "English" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "30 (1–4) / 35 (5–10)" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Pre + Mains" },
    ],
    whatIsIt:
      "The International Mathematics Olympiad is designed to assess how students understand, apply and reason with mathematical concepts—not simply how well they remember formulas or follow familiar procedures.The assessment encourages students to think mathematically, identify patterns, analyse situations and apply concepts to unfamiliar problems.",
    whyItMatters:
      "Mathematics is more than getting the right answer. It develops the ability to analyse information, recognise patterns, reason logically and solve unfamiliar problems.IMO helps schools and parents understand how students apply mathematical thinking across different levels of complexity and where their strengths and learning gaps may lie.",
    assesses: [
      "Conceptual Understanding",
      "Numerical & Mathematical Reasoning",
      "Logical Thinking",
      "Pattern Recognition",
      "Problem-Solving",
      "Application of Concepts",
      "Analytical Thinking",
    ],
    howItWorks: [
      "Age- and class-appropriate questions",
      "Objective assessment format",
      "Questions designed around concepts, reasoning and application",
      "No negative marking",
      "Conducted through participating schools",
      "Pre level followed by Mains for qualifying students",
    ],
    participate: [
      {
        title: "Register",
        detail:
          "Students of Classes 1–10 can enrol in the International Olympiad through participating schools.",
      },
      {
        title: "Submit",
        detail:
          "Fill the parent consent form and submit it with the applicable fee to your class teacher.",
      },
      {
        title: "Prepare",
        detail:
          "Access the physical workbook (hard copy will be given as opted), syllabus, sample papers and preparation resources through the Genie App.",
      },
      {
        title: "Appear",
        detail: "Take the exam at the designated school/examination centre.",
      },
      {
        title: "Discover",
        detail:
          "Receive your result and performance insights. You may also receive awards, prizes etc as applicable",
      },
    ],
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "Access the Genie App for the complete syllabus, sample papers, preparation resources, previous-year papers and other academic materials.",
    faqs: imoFaqs,
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
    bannerImage: "/images/enquiry/itst-banner.png",
    bannerAlt: "A student working through a science and technology assessment",
    summary:
      "An international subject-focused assessment designed to develop scientific understanding, curiosity, reasoning and the ability to apply science to real-world situations.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "English" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "30 (1–4) / 35 (5–10)" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Pre + Mains" },
    ],
    whatIsIt:
      "The International Test of Science & Technology (ITST) is designed to understand how well students understand, reason with and apply scientific concepts rather than simply recall facts from textbooks. The assessment encourages students to observe, question, connect scientific ideas and use their understanding to solve problems in familiar and unfamiliar situations.",
    whyItMatters:
      "Science is not only about remembering facts, definitions and formulas.\nInternational Test of Science & Technology helps students develop the ability to:\n• Understand scientific concepts\n• Observe and interpret information\n• Connect cause and effect\n• Apply scientific knowledge\n• Reason logically\n• Think about real-world situations scientifically\n\nThe aim is to encourage students to think like young scientists—not simply remember like a textbook.",
    assesses: [
      "Scientific Understanding — Understanding concepts, principles and scientific relationships.",
      "Observation & Interpretation — Observing information, diagrams, situations and patterns and drawing meaningful conclusions.",
      "Scientific Reasoning — Using evidence and logical thinking to explain why something happens.",
      "Application — Applying scientific knowledge to everyday and unfamiliar situations.",
      "Problem Solving — Using scientific understanding to analyse situations and identify appropriate solutions.",
    ],
    howItWorks: [
      "Age- and class-appropriate questions",
      "Objective assessment format",
      "Questions designed around concepts, reasoning and application",
      "No negative marking",
      "Conducted through participating schools",
      "Pre level followed by Mains for qualifying students",
    ],
    participate: [
      {
        title: "Register",
        detail:
          "Students of Classes 1–10 can enrol in the International Olympiad through participating schools.",
      },
      {
        title: "Submit",
        detail:
          "Fill the parent consent form and submit it with the applicable fee to your class teacher.",
      },
      {
        title: "Prepare",
        detail:
          "Access the physical workbook (hard copy will be given as opted), syllabus, sample papers and preparation resources through the Genie App.",
      },
      {
        title: "Appear",
        detail: "Take the exam at the designated school/examination centre.",
      },
      {
        title: "Discover",
        detail:
          "Receive your result and performance insights. You may also receive awards, prizes etc as applicable",
      },
    ],
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "ITST preparation is about understanding scientific concepts, observing carefully, asking questions and applying knowledge to different situations.",
    faqs: [
      {
        q: "What is the International Test of Science & Technology?",
        a: [
          "ITST is an international science and technology assessment designed to evaluate conceptual understanding, scientific reasoning, observation, application and problem-solving.",
        ],
      },
      {
        q: "Who can participate in ITST?",
        a: ["Students from Classes 1–10 can participate through participating schools."],
      },
      {
        q: "Is ITST based on the school syllabus?",
        a: [
          "ITST is aligned with age-appropriate scientific learning while placing greater emphasis on understanding, reasoning and application rather than simple recall.",
        ],
      },
      {
        q: "Is there negative marking?",
        a: ["No. There is no negative marking."],
      },
      {
        q: "What is the difference between Pre and Mains?",
        a: [
          "The Pre level is the qualifying assessment. High-performing students are shortlisted for the Mains level according to the applicable qualification criteria.",
        ],
      },
      {
        q: "Does ITST require special coaching?",
        a: [
          "No special coaching is required. Students should focus on understanding concepts, observing scientific situations and practising application-based questions.",
        ],
      },
      {
        q: "Where can I find the ITST syllabus and sample papers?",
        a: [
          "Detailed syllabus, sample papers, previous-year papers and preparation resources are available through the Genie App.",
        ],
      },
    ],
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
    bannerImage: "/images/enquiry/iao-banner.png",
    bannerAlt: "A student working through an aptitude assessment",
    summary:
      "An international aptitude assessment designed to understand how students reason, analyse information, recognise patterns, solve problems and approach unfamiliar situations.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "English" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "30 (1–4) / 35 (5–10)" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Pre + Mains" },
    ],
    whatIsIt:
      "The International Aptitude Olympiad (IAO) is designed to understand how students think, reason and solve problems, especially when they encounter questions that cannot be answered simply by recalling a memorised formula or fact.",
    whyItMatters:
      "A student may know many facts and still struggle when faced with a new problem.\nAptitude helps reveal how a learner approaches something unfamiliar.\n\nIAO encourages students to develop:\nLogical thinking\nAnalytical reasoning\nPattern recognition\nProblem-solving\nDecision-making\nFlexible thinking\n\nThe goal is not simply to find the right answer, but to understand how a student approaches the problem.",
    assesses: [
      "Logical Reasoning — Identifying relationships and using logical connections to reach conclusions.",
      "Analytical Thinking — Breaking information into meaningful parts and understanding how those parts relate.",
      "Pattern Recognition — Identifying patterns, sequences, relationships and underlying rules.",
      "Problem Solving — Selecting appropriate strategies to approach unfamiliar problems.",
      "Decision Making — Evaluating information and choosing the most appropriate response.",
    ],
    howItWorks: [
      "Age- and class-appropriate questions",
      "Objective assessment format",
      "Questions designed around concepts, reasoning and application",
      "No negative marking",
      "Conducted through participating schools",
      "Pre level followed by Mains for qualifying students",
    ],
    participate: [
      {
        title: "Register",
        detail:
          "Students of Classes 1–10 can enrol in the International Olympiad through participating schools.",
      },
      {
        title: "Submit",
        detail:
          "Fill the parent consent form and submit it with the applicable fee to your class teacher.",
      },
      {
        title: "Prepare",
        detail:
          "Access the physical workbook (hard copy will be given as opted), syllabus, sample papers and preparation resources through the Genie App.",
      },
      {
        title: "Appear",
        detail: "Take the exam at the designated school/examination centre.",
      },
      {
        title: "Discover",
        detail:
          "Receive your result and performance insights. You may also receive awards, prizes etc as applicable",
      },
    ],
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "IAO preparation is less about memorising answers and more about developing the habit of observing carefully, identifying relationships and thinking through unfamiliar problems.",
    faqs: [
      {
        q: "What is the International Aptitude Olympiad?",
        a: [
          "IAO is an international aptitude assessment designed to understand students' reasoning, analytical thinking, pattern recognition, problem-solving and decision-making abilities.",
        ],
      },
      {
        q: "Who can participate in IAO?",
        a: ["Students from Classes 1–10 can participate through participating schools."],
      },
      {
        q: "Is IAO a mathematics examination?",
        a: [
          "No. Although some questions may involve numbers or mathematical relationships, IAO is primarily focused on reasoning, analysis, patterns and problem-solving, rather than the mathematics syllabus.",
        ],
      },
      {
        q: "Is IAO based on the school syllabus?",
        a: [
          "IAO is not limited to a conventional textbook syllabus. It uses age-appropriate problems and situations to explore reasoning, analytical thinking and application.",
        ],
      },
      {
        q: "Is there negative marking?",
        a: ["No. There is no negative marking."],
      },
      {
        q: "What is the difference between Pre and Mains?",
        a: [
          "The Pre level is the qualifying assessment. High-performing students are shortlisted for the Mains level according to the applicable qualification criteria.",
        ],
      },
      {
        q: "Where can students find the IAO syllabus and sample papers?",
        a: [
          "Detailed syllabus, sample papers, previous-year papers and preparation resources are available through the Genie App.",
        ],
      },
    ],
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
    bannerImage: "/images/enquiry/igko-banner.png",
    bannerAlt: "A student working through a general knowledge assessment",
    summary:
      "An international general knowledge assessment designed to develop and assess students' awareness, curiosity, understanding of the world and ability to connect knowledge with everyday life.",
    glance: [
      { icon: "child", label: "For", value: "Classes 1–10" },
      { icon: "mode", label: "Mode", value: "Offline" },
      { icon: "book", label: "Medium", value: "English" },
      { icon: "clock", label: "Duration", value: "60 Minutes" },
      { icon: "help", label: "Questions", value: "35 questions" },
      { icon: "grid", label: "Type", value: "Objective / MCQ" },
      { icon: "levels", label: "Level", value: "Single Level" },
    ],
    whatIsIt:
      "The International General Knowledge Olympiad (IGKO) is designed to explore how well students understand and connect with the world around them.\nIt goes beyond simply remembering facts. Questions encourage students to think about people, places, nature, science, society, culture, current developments and everyday life in an age-appropriate way.",
    whyItMatters:
      "Children encounter a rapidly changing world every day.\nGeneral knowledge helps them become more curious, aware and informed learners.\nIGKO encourages students to:\n• Stay curious about the world\n• Build broad-based awareness\n• Connect knowledge with everyday life\n• Understand people, places and cultures\n• Recognise important developments around them\n• Think beyond the boundaries of a single subject\n\nThe goal is not to know everything. It is to develop the curiosity to understand the world.",
    assesses: [
      "General Awareness — Understanding important facts, events and developments related to the world around us.",
      "World & Society — Awareness of people, places, cultures, communities and society.",
      "Science & Everyday Life — Recognising how science, technology and knowledge influence everyday life.",
      "Environment & Nature — Understanding the natural world, environment and responsible living.",
      "Connecting Knowledge — Using information from different areas to understand situations and answer questions.",
    ],
    howItWorks: [
      "Age- and class-appropriate questions",
      "Objective assessment format",
      "Questions designed around concepts, reasoning and application",
      "No negative marking",
      "Conducted through participating schools",
      "Pre level followed by Mains for qualifying students",
    ],
    participate: [
      {
        title: "Register",
        detail:
          "Students of Classes 1–10 can enrol in the International Olympiad through participating schools.",
      },
      {
        title: "Submit",
        detail:
          "Fill the parent consent form and submit it with the applicable fee to your class teacher.",
      },
      {
        title: "Prepare",
        detail:
          "Access the physical workbook (hard copy will be given as opted), syllabus, sample papers and preparation resources through the Genie App.",
      },
      {
        title: "Appear",
        detail: "Take the exam at the designated school/examination centre.",
      },
      {
        title: "Discover",
        detail:
          "Receive your result and performance insights. You may also receive awards, prizes etc as applicable",
      },
    ],
    afterNote: olympiadAfter,
    recognition: olympiadRecognition,
    prepare:
      "IGKO preparation is not about memorising endless facts. It is about developing curiosity, reading widely, observing the world and connecting what you learn with everyday life.",
    faqs: [
      {
        q: "What is the International General Knowledge Olympiad?",
        a: [
          "IGKO is an international general knowledge assessment designed to develop and assess students' awareness, curiosity, understanding of the world and ability to connect knowledge with everyday life.",
        ],
      },
      {
        q: "Who can participate in IGKO?",
        a: ["Students from Classes 1–10 can participate through participating schools."],
      },
      {
        q: "Is IGKO only about memorising facts?",
        a: [
          "No. IGKO encourages students to understand and connect knowledge related to the world, society, environment, science, culture and everyday life.",
        ],
      },
      {
        q: "Is IGKO based on a school textbook syllabus?",
        a: [
          "IGKO is not limited to one school textbook. It uses age-appropriate questions covering broad areas of general awareness and world understanding.",
        ],
      },
      {
        q: "Does IGKO have a Pre and Mains level?",
        a: ["No. IGKO is conducted as a single-level assessment."],
      },
      {
        q: "Is there negative marking?",
        a: ["No. There is no negative marking."],
      },
      {
        q: "Where can students find the IGKO syllabus and sample papers?",
        a: [
          "Detailed syllabus, sample papers, previous-year papers and preparation resources are available through the Genie App.",
        ],
      },
    ],
  },
  {
    id: "ihost",
    group: "learn",
    code: "IHOST",
    shortName: "IHOST",
    name: "International Holistic Olympiad for Smart Thinkers",
    tag: "Learning Platform",
    audience: "",
    color: "#0f9c9a",
    logo: "/images/exam-icons/IHOST.png",
    bannerImage: "/images/enquiry/ihost-banner.png",
    bannerAlt: "Learners exploring a holistic learning platform",
    // comingSoon: true,
    summary:
      "IHOST is a continuous holistic learning journey designed to develop smart thinkers through Mathematics, Science, Aptitude, General Knowledge and, at the Kindergarten level, Language.Instead of measuring children through marks and ranks, IHOST gives them opportunities to think, explore, solve, create, apply and reflect through real-life challenges and engaging learning experiences.",
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
    faqs: ihostFaqs,
  },
  {
    id: "ifly",
    group: "learn",
    code: "IFLY",
    shortName: "IFLY",
    name: "International Finance & Digital Literacy Olympiad for Young Leaders",
    tag: "Learning Platform",
    audience: "",
    color: "#e8a013",
    logo: "/images/exam-icons/IFLY.png",
    bannerImage: "/images/enquiry/ifly-banner.png",
    bannerAlt: "Learners exploring finance and digital literacy",
    // comingSoon: true,
    summary:
      "A continuous learning journey from Kindergarten to Class 8 designed to help children develop financial understanding, responsible decision-making and digital readiness through real-life experiences.",
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
    faqs: iflyFaqs,
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
