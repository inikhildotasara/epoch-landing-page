import type { LegalSection } from "./types";

export const termsIntro = {
  eyebrow: "Legal",
  title: "Terms of Use",
  effectiveDate: "27 August 2026",
  lastUpdated: "27 August 2026",
  lead: [
    "Welcome to the website and digital services operated by EPOCH OLYMPIAD FOUNDATION PVT. LTD. including the initiatives and platforms operated under the brands Epoch Olympiad Foundation, Epoch Olympiad, Brainiac Global and MY CCBee.",
    'By accessing, browsing or using this website, our applications, platforms, digital resources, examination services or other related services (collectively, the \u201cServices\u201d), you acknowledge that you have read, understood and agree to be bound by these Terms of Use ("Terms").',
  ],
  scopeTitle: "These Terms cover your use of",
  scopeItems: [
    "this website;",
    "our applications;",
    "our platforms;",
    "our digital resources;",
    "our examination services; and",
    "other related services.",
  ],
  objective:
    "If you do not agree with these Terms, please do not use our Services.",
};

export const termsSections: LegalSection[] = [
  {
    id: "about-our-services",
    num: "1",
    title: "About Our Services",
    blocks: [
      {
        kind: "p",
        text: "Epoch Olympiad Foundation is positioned as an education research foundation working to advance meaningful assessment, cognitive development, academic benchmarking and future-ready learning.",
      },
      { kind: "p", text: "Our initiatives may include:" },
      { kind: "h3", text: "Epoch Olympiad Foundation" },
      {
        kind: "p",
        text: "Education research, assessment research, academic benchmarking and related educational initiatives.",
      },
      { kind: "h3", text: "Epoch Olympiad" },
      {
        kind: "p",
        text: "International Olympiad examinations and learning initiatives for school students, including, as applicable:",
      },
      {
        kind: "ul",
        items: [
          "International Mathematics Olympiad (IMO)",
          "International Test of Science and Technology (ITST)",
          "International Aptitude Olympiad (IAO)",
          "International General Knowledge Olympiad (IGKO)",
          "International Holistic Olympiad for Smart Thinkers (IHOST)",
          "International Future Literacy for Young Leaders (IFLY)",
        ],
      },
      {
        kind: "p",
        text: "The list of programmes may change from time to time.",
      },
      { kind: "h3", text: "Brainiac Global" },
      {
        kind: "p",
        text: "Brain Booster examinations and related learning resources for early learners and kindergarten students.",
      },
      { kind: "h3", text: "MY CCBee" },
      {
        kind: "p",
        text: "A performance tracking and booster platform designed to provide schools and parents with educational activity and performance insights.",
      },
    ],
  },
  {
    id: "eligibility",
    num: "2",
    title: "Eligibility to Use Our Services",
    blocks: [
      {
        kind: "p",
        text: "Certain Services are intended to be accessed by:",
      },
      {
        kind: "ul",
        items: [
          "parents or lawful guardians;",
          "school students through their schools or authorised guardians;",
          "teachers and school representatives;",
          "school administrators;",
          "educational institutions;",
          "educators and academic professionals; and",
          "other authorised users.",
        ],
      },
      {
        kind: "p",
        text: "Where a Service is intended for children, the child should access or use the Service only through a school, parent, lawful guardian or other authorised adult, as applicable.",
      },
      {
        kind: "p",
        text: "We reserve the right to restrict or suspend access where we reasonably believe that a user is not authorised to use a particular Service.",
      },
    ],
  },
  {
    id: "parent-responsibility",
    num: "3",
    title: "Parent and Guardian Responsibility",
    blocks: [
      {
        kind: "p",
        text: "Where a child participates in any examination, learning programme, digital platform or other Service, the parent or lawful guardian is responsible for:",
      },
      {
        kind: "ul",
        items: [
          "reviewing the relevant programme information;",
          "providing accurate information;",
          "providing consent wherever required;",
          "ensuring that the child uses the Service appropriately;",
          "maintaining the confidentiality of login credentials;",
          "supervising the child's use of digital Services where appropriate.",
        ],
      },
      {
        kind: "p",
        text: "Schools may also facilitate participation and provide information on behalf of students and parents in accordance with their applicable responsibilities and arrangements with us.",
      },
    ],
  },
  {
    id: "school-registration",
    num: "4",
    title: "School Registration and Institutional Services",
    blocks: [
      {
        kind: "p",
        text: "Schools may register their interest in one or more of our initiatives through the website or other authorised channels.",
      },
      {
        kind: "highlight",
        text: "Submission of a School Registration Form does not automatically constitute confirmation of enrolment, appointment, partnership or participation.",
      },
      { kind: "p", text: "Our team may contact the school to:" },
      {
        kind: "ul",
        items: [
          "understand its requirements;",
          "verify information;",
          "explain relevant programmes;",
          "provide pricing or participation details;",
          "arrange demonstrations;",
          "discuss implementation;",
          "complete registration or onboarding.",
        ],
      },
      {
        kind: "p",
        text: "Participation becomes effective only after the applicable registration, confirmation and other required procedures have been completed.",
      },
    ],
  },
  {
    id: "examination-services",
    num: "5",
    title: "Examination and Assessment Services",
    blocks: [
      {
        kind: "p",
        text: "Our examinations and assessments may have different:",
      },
      {
        kind: "ul",
        items: [
          "eligibility requirements;",
          "examination formats;",
          "levels;",
          "durations;",
          "syllabi;",
          "question structures;",
          "scoring systems;",
          "qualification criteria;",
          "award structures;",
          "participation procedures.",
        ],
      },
      {
        kind: "p",
        text: "The information published for a particular examination or programme on the relevant page, registration material, examination instructions or official communication will apply to that programme.",
      },
      {
        kind: "p",
        text: "We reserve the right to make reasonable changes to:",
      },
      {
        kind: "ul",
        items: [
          "examination dates;",
          "examination centres;",
          "question formats;",
          "syllabus;",
          "examination procedures;",
          "eligibility criteria;",
          "award structures;",
          "digital resources;",
        ],
      },
      {
        kind: "p",
        text: "where necessary for academic, operational, security, regulatory or other legitimate reasons.",
      },
      {
        kind: "p",
        text: "Where a material change affects a confirmed participant, we will communicate the change through an appropriate channel where reasonably practicable.",
      },
    ],
  },
  {
    id: "results-and-reports",
    num: "6",
    title: "Results and Academic Health Reports",
    blocks: [
      {
        kind: "p",
        text: "Results and Academic Health Reports are generated based on the assessment data and methodology applicable to the relevant examination or programme.",
      },
      {
        kind: "highlight",
        text: "Academic Health Reports are intended to provide educational insights into learning, cognitive and performance-related areas.",
      },
      { kind: "p", text: "They should not be interpreted as:" },
      {
        kind: "ul",
        items: [
          "medical diagnoses;",
          "psychological diagnoses;",
          "psychiatric assessments;",
          "clinical assessments; or",
          "professional medical advice,",
        ],
      },
      { kind: "p", text: "unless expressly stated otherwise by us." },
      {
        kind: "p",
        text: "Parents, schools and educators should use assessment information as one source of educational insight and should consider the child's broader learning environment and development.",
      },
    ],
  },
  {
    id: "no-guarantee",
    num: "7",
    title: "No Guarantee of Academic Outcomes",
    blocks: [
      {
        kind: "p",
        text: "Participation in an examination, learning initiative, Academic Health Report, Genie App or MY CCBee does not guarantee:",
      },
      {
        kind: "ul",
        items: [
          "a particular academic result;",
          "admission to any educational institution;",
          "improvement in academic performance;",
          "selection for an award;",
          "scholarship;",
          "rank;",
          "qualification for a future level; or",
          "any specific educational outcome.",
        ],
      },
      {
        kind: "p",
        text: "Any award, scholarship, ranking or recognition is subject to the criteria and conditions applicable to the relevant programme.",
      },
    ],
  },
  {
    id: "awards",
    num: "8",
    title: "Awards, Scholarships and Recognition",
    blocks: [
      {
        kind: "p",
        text: "Awards, scholarships and recognition may be subject to:",
      },
      {
        kind: "ul",
        items: [
          "eligibility requirements;",
          "participation requirements;",
          "examination performance;",
          "qualification criteria;",
          "verification;",
          "applicable rules;",
          "availability of the relevant award or scholarship.",
        ],
      },
      {
        kind: "p",
        text: "The Foundation may verify information before announcing or issuing an award.",
      },
      {
        kind: "p",
        text: "We reserve the right to correct an award or recognition decision where an administrative error, inaccurate information, eligibility issue or other material discrepancy is identified.",
      },
      {
        kind: "p",
        text: "Detailed award and scholarship information may be provided through the relevant programme page, official communication or Genie App.",
      },
    ],
  },
  {
    id: "genie-app",
    num: "9",
    title: "Genie App and Digital Platforms",
    blocks: [
      {
        kind: "p",
        text: "Access to Genie App and other digital platforms may require:",
      },
      {
        kind: "ul",
        items: [
          "registration;",
          "authentication;",
          "authorised credentials;",
          "a compatible device;",
          "internet connectivity.",
        ],
      },
      { kind: "p", text: "Users must:" },
      {
        kind: "ul",
        items: [
          "keep their login credentials confidential;",
          "not share their account with unauthorised persons;",
          "not attempt to access another user's account;",
          "provide accurate registration information;",
          "notify us promptly of suspected unauthorised access.",
        ],
      },
      {
        kind: "p",
        text: "We may suspend or terminate access where we reasonably believe that an account is being misused or the security of the platform is at risk.",
      },
    ],
  },
  {
    id: "my-ccbee",
    num: "10",
    title: "MY CCBee",
    blocks: [
      {
        kind: "p",
        text: "MY CCBee may provide schools and authorised users with information relating to:",
      },
      {
        kind: "ul",
        items: [
          "school activities;",
          "student participation;",
          "performance indicators;",
          "educational KPIs;",
          "progress insights;",
          "reports and dashboards.",
        ],
      },
      {
        kind: "p",
        text: "The information provided by MY CCBee is intended to support educational decision-making.",
      },
      {
        kind: "p",
        text: "It should not be treated as a substitute for professional educational, medical, psychological or other specialist assessment where such assessment is required.",
      },
      {
        kind: "p",
        text: "Schools and authorised users are responsible for using student information appropriately and limiting access to authorised persons.",
      },
    ],
  },
  {
    id: "educational-content",
    num: "11",
    title: "Educational Content",
    blocks: [
      { kind: "p", text: "Our Services may contain:" },
      {
        kind: "ul",
        items: [
          "examination material;",
          "sample papers;",
          "previous-year papers;",
          "syllabi;",
          "learning resources;",
          "videos;",
          "articles;",
          "illustrations;",
          "reports;",
          "educational frameworks;",
          "assessment methodologies;",
          "presentations;",
          "downloadable resources.",
        ],
      },
      {
        kind: "p",
        text: "Such material is provided for educational and informational purposes and may be updated periodically.",
      },
      {
        kind: "p",
        text: "We do not guarantee that every item of educational content will always be available, error-free or unchanged.",
      },
    ],
  },
  {
    id: "intellectual-property",
    num: "12",
    title: "Intellectual Property",
    blocks: [
      {
        kind: "p",
        text: "Unless otherwise stated, all intellectual property appearing on our Services belongs to or is lawfully licensed to Epoch Olympiad Foundation Pvt. Ltd., Epoch Olympiad Foundation or the relevant rights holder.",
      },
      { kind: "p", text: "This includes, without limitation:" },
      {
        kind: "ul",
        items: [
          "names;",
          "logos;",
          "trademarks;",
          "examination names;",
          "taglines;",
          "graphics;",
          "illustrations;",
          "photographs;",
          "videos;",
          "website design;",
          "written content;",
          "question papers;",
          "assessment frameworks;",
          "Academic Health Report formats;",
          "software;",
          "databases;",
          "interfaces;",
          "educational methodologies;",
          "downloadable resources.",
        ],
      },
      {
        kind: "highlight",
        text: "Nothing in these Terms grants you ownership of our intellectual property.",
      },
    ],
  },
  {
    id: "permitted-use",
    num: "13",
    title: "Permitted Use of Educational Material",
    blocks: [
      {
        kind: "p",
        text: "Unless expressly permitted in writing, you may not:",
      },
      {
        kind: "ul",
        items: [
          "reproduce our examination papers;",
          "commercially distribute our educational material;",
          "upload our content to another platform;",
          "sell our sample papers or resources;",
          "modify or create derivative works from our proprietary material;",
          "remove copyright or ownership notices;",
          "reproduce our assessment frameworks;",
          "reverse engineer our software;",
          "use our content to create a competing commercial service.",
        ],
      },
      {
        kind: "p",
        text: "Limited personal or school-use access may be permitted where expressly stated by us.",
      },
    ],
  },
  {
    id: "examination-integrity",
    num: "14",
    title: "Examination Integrity",
    blocks: [
      {
        kind: "p",
        text: "To protect the fairness and credibility of our assessments, users must not:",
      },
      {
        kind: "ul",
        items: [
          "copy examination questions;",
          "share examination content during a live examination;",
          "impersonate another participant;",
          "use unauthorised assistance;",
          "manipulate examination systems;",
          "obtain or distribute confidential examination material;",
          "interfere with examination software or systems;",
          "assist another participant in violating examination rules.",
        ],
      },
      {
        kind: "p",
        text: "Where examination integrity is compromised, we may take appropriate action, including:",
      },
      {
        kind: "ul",
        items: [
          "cancellation of a result;",
          "disqualification;",
          "withdrawal of an award;",
          "suspension of participation;",
          "restriction of future participation.",
        ],
      },
    ],
  },
  {
    id: "user-submitted-information",
    num: "15",
    title: "User-Submitted Information",
    blocks: [
      { kind: "p", text: "When you submit information through:" },
      {
        kind: "ul",
        items: [
          "School Registration;",
          "Expression of Interest;",
          "Contact Forms;",
          "parent forms;",
          "testimonials;",
          "feedback forms;",
          "other website forms,",
        ],
      },
      {
        kind: "p",
        text: "you confirm that the information provided is accurate and that you have the authority to provide it.",
      },
      {
        kind: "p",
        text: "You must not knowingly submit false, misleading, fraudulent or unauthorised information.",
      },
      {
        kind: "p",
        text: "Our collection and processing of personal data is governed by our Privacy Policy.",
      },
      {
        kind: "links",
        items: [{ label: "Read our Privacy Policy", href: "/privacy-policy" }],
      },
    ],
  },
  {
    id: "testimonials",
    num: "16",
    title: "Testimonials, Photographs and Videos",
    blocks: [
      {
        kind: "p",
        text: "By participating in any programme, examination, assessment or initiative conducted by Epoch Olympiad Foundation, Brainiac Global, Epoch Olympiad, MY CCBee or their associated initiatives, the participant/school acknowledges and agrees to the following, subject to applicable law and the consent provided during registration:",
      },
      { kind: "h3", text: "1. Student Achievements & Recognition" },
      {
        kind: "p",
        text: "Where a student is declared or recognised as a Topper, Achiever, Rank Holder, Award Winner, Scholar or other recognised performer, the organisation may publish and display the student's name, class, school, achievement, rank, award and associated photograph/video for purposes of recognition, educational communication, institutional publications, website content, social media, newsletters, brochures, certificates, annual reports and other official promotional or informational materials.",
      },
      { kind: "h3", text: "2. Consent at Registration" },
      {
        kind: "p",
        text: "Where the participant is a minor, the parent/legal guardian's consent provided through the registration/parent consent process shall constitute consent for the above-mentioned use of the child's information and media, to the extent permitted by applicable law. The consent shall be recorded as part of the registration process, and a separate written permission will ordinarily not be requested for each subsequent publication relating to the same stated purpose.",
      },
      { kind: "h3", text: "3. School Participation" },
      {
        kind: "p",
        text: "The participating school confirms that it has obtained and/or facilitated the necessary permissions and consents from the relevant parent/legal guardian and authorised representatives, wherever required by applicable law, for submission and use of student information and media for the purposes described in this notice.",
      },
      { kind: "h3", text: "4. Principal Testimonials" },
      {
        kind: "p",
        text: "A testimonial, photograph, video message, quotation or statement voluntarily provided by a Principal, Director, Head of Institution or authorised school representative may be published by the organisation on its website, social media platforms, brochures, presentations, promotional materials, reports and other official communication channels. Such publication may include the person's name, designation, school/institution name, photograph, video and testimonial.",
      },
      { kind: "h3", text: "5. No Separate Permission for Each Publication" },
      {
        kind: "p",
        text: "Once valid consent has been provided for the purposes described above, the organisation will not ordinarily seek separate written permission for each individual publication, reposting or appearance of the same approved content. However, the organisation may seek additional consent where required by law or where the proposed use is materially different from the purpose originally communicated.",
      },
      { kind: "h3", text: "6. Recognition, Not Commercial Endorsement" },
      {
        kind: "p",
        text: "Publication of a student's achievement or a principal's testimonial is intended to recognise educational achievement, institutional participation and academic contribution. Unless separately agreed in writing, such publication should not be interpreted as a personal commercial endorsement of any product or service.",
      },
      { kind: "h3", text: "7. Withdrawal of Consent" },
      {
        kind: "p",
        text: "A parent/legal guardian, student where legally applicable, or testimonial provider may contact the organisation through the designated privacy/contact channel to request withdrawal of consent or removal of future use, subject to applicable law, legitimate legal obligations, archival requirements and content that has already been printed, distributed or lawfully published.",
      },
    ],
  },
  {
    id: "advisory-board",
    num: "17",
    title: "Advisory Board and Expression of Interest",
    blocks: [
      { kind: "p", text: "Applications or expressions of interest for:" },
      {
        kind: "ul",
        items: [
          "Honorary Jury Member;",
          "Chief Academic Ambassador; or",
          "other advisory positions",
        ],
      },
      {
        kind: "p",
        text: "All advisory appointments are subject to the Foundation's review, suitability assessment and invitation/confirmation process.",
      },
      {
        kind: "p",
        text: "Advisory positions are honorary in nature unless otherwise expressly agreed in writing.",
      },
      {
        kind: "p",
        text: "Any remuneration, honorarium, professional fee, reimbursement or other payment, where applicable, will be governed by a separate written arrangement.",
      },
    ],
  },
  {
    id: "third-party-links",
    num: "18",
    title: "Links to Third-Party Websites",
    blocks: [
      {
        kind: "p",
        text: "Our Services may contain links to third-party websites, applications or platforms, including educational, payment, video-hosting or social-media services.",
      },
      {
        kind: "p",
        text: "We do not control those third-party services and are not responsible for:",
      },
      {
        kind: "ul",
        items: [
          "their content;",
          "availability;",
          "security;",
          "privacy practices;",
          "terms of use.",
        ],
      },
      {
        kind: "p",
        text: "Your use of third-party services is subject to their respective terms and policies.",
      },
    ],
  },
  {
    id: "availability",
    num: "19",
    title: "Availability of Services",
    blocks: [
      {
        kind: "p",
        text: "We endeavour to maintain reliable Services but do not guarantee uninterrupted availability.",
      },
      {
        kind: "p",
        text: "Our Services may occasionally become unavailable due to:",
      },
      {
        kind: "ul",
        items: [
          "scheduled maintenance;",
          "technical problems;",
          "internet failures;",
          "third-party service failures;",
          "cybersecurity incidents;",
          "force majeure events;",
          "regulatory requirements;",
          "operational circumstances.",
        ],
      },
      {
        kind: "p",
        text: "We may modify, suspend or discontinue any Service or feature where reasonably necessary.",
      },
    ],
  },
  {
    id: "accuracy",
    num: "20",
    title: "Accuracy of Information",
    blocks: [
      {
        kind: "p",
        text: "We make reasonable efforts to keep information on our website accurate and current.",
      },
      { kind: "p", text: "However, information may occasionally contain:" },
      {
        kind: "ul",
        items: [
          "typographical errors;",
          "technical inaccuracies;",
          "outdated information;",
          "inadvertent omissions.",
        ],
      },
      {
        kind: "p",
        text: "We reserve the right to correct or update information without prior notice.",
      },
      {
        kind: "highlight",
        text: "Where a particular programme has specific official rules or instructions, those rules will prevail over general website descriptions in the event of an inconsistency.",
      },
    ],
  },
  {
    id: "prohibited-activities",
    num: "21",
    title: "Prohibited Activities",
    blocks: [
      { kind: "p", text: "You agree not to use our Services to:" },
      {
        kind: "ul",
        items: [
          "violate applicable law;",
          "impersonate another person;",
          "submit fraudulent information;",
          "gain unauthorised access;",
          "interfere with website or platform security;",
          "distribute malware;",
          "scrape or systematically copy protected content;",
          "attempt to reverse engineer proprietary software;",
          "misuse another person's personal information;",
          "harass or threaten our employees, educators, students or other users;",
          "use our Services for unlawful or harmful purposes.",
        ],
      },
    ],
  },
  {
    id: "suspension",
    num: "22",
    title: "Suspension and Termination",
    blocks: [
      {
        kind: "p",
        text: "We may suspend or terminate access to our Services if we reasonably believe that:",
      },
      {
        kind: "ul",
        items: [
          "these Terms have been violated;",
          "examination integrity has been compromised;",
          "an account has been misused;",
          "false information has been provided;",
          "payment obligations have not been fulfilled;",
          "the activity presents a security or legal risk;",
          "continued access may harm other users or our Services.",
        ],
      },
      {
        kind: "p",
        text: "Termination will not affect rights or obligations that accrued before termination.",
      },
    ],
  },
  {
    id: "fees-and-payments",
    num: "23",
    title: "Fees and Payments",
    blocks: [
      { kind: "p", text: "Certain Services may require payment." },
      { kind: "p", text: "Applicable:" },
      {
        kind: "ul",
        items: [
          "examination fees;",
          "subscription fees;",
          "platform fees;",
          "service charges;",
          "other applicable charges",
        ],
      },
      {
        kind: "p",
        text: "will be communicated before payment where required.",
      },
      {
        kind: "p",
        text: "Payment processing may be handled by authorised third-party payment providers.",
      },
      {
        kind: "p",
        text: "Any refund, cancellation or rescheduling will be governed by the applicable Refund & Cancellation Policy and programme-specific terms.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    num: "24",
    title: "Limitation of Liability",
    blocks: [
      {
        kind: "p",
        text: "To the maximum extent permitted by applicable law, EPOCH OLYMPIAD FOUNDATION PVT. LTD. shall not be liable for indirect, incidental, special, consequential or exemplary losses arising from the use or inability to use our Services.",
      },
      { kind: "p", text: "This may include, where legally permissible:" },
      {
        kind: "ul",
        items: [
          "loss of data;",
          "loss of opportunity;",
          "loss of anticipated academic outcome;",
          "interruption of service;",
          "reliance on educational information;",
          "third-party service failures.",
        ],
      },
      {
        kind: "highlight",
        text: "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.",
      },
    ],
  },
  {
    id: "force-majeure",
    num: "25",
    title: "Force Majeure",
    blocks: [
      {
        kind: "p",
        text: "We shall not be responsible for failure or delay in performing our obligations where such failure or delay results from circumstances beyond our reasonable control, including:",
      },
      {
        kind: "ul",
        items: [
          "natural disasters;",
          "pandemics or public-health emergencies;",
          "war;",
          "civil unrest;",
          "government action;",
          "power failures;",
          "internet outages;",
          "cyber incidents;",
          "telecommunications failures;",
          "strikes;",
          "third-party infrastructure failures.",
        ],
      },
    ],
  },
  {
    id: "indemnity",
    num: "26",
    title: "Indemnity",
    blocks: [
      {
        kind: "p",
        text: "To the extent permitted by applicable law, you agree to indemnify and hold harmless EPOCH OLYMPIAD FOUNDATION PVT. LTD., its officers, employees, representatives and authorised service providers from claims, losses, liabilities, damages and expenses arising from:",
      },
      {
        kind: "ul",
        items: [
          "your violation of these Terms;",
          "misuse of our Services;",
          "unauthorised use of our intellectual property;",
          "fraudulent or unlawful activity;",
          "violation of another person's rights;",
          "information submitted by you in violation of applicable law.",
        ],
      },
    ],
  },
  {
    id: "privacy",
    num: "27",
    title: "Privacy",
    blocks: [
      {
        kind: "p",
        text: "Your use of our Services is also governed by our Privacy Policy.",
      },
      {
        kind: "p",
        text: "Our Privacy Policy explains how we collect, use, disclose, retain and protect personal data.",
      },
      {
        kind: "links",
        items: [{ label: "Read our Privacy Policy", href: "/privacy-policy" }],
      },
    ],
  },
  {
    id: "changes",
    num: "28",
    title: "Changes to These Terms",
    blocks: [
      { kind: "p", text: "We may modify these Terms from time to time." },
      {
        kind: "p",
        text: "Updated Terms will be published on this page with the revised Last Updated date.",
      },
      {
        kind: "p",
        text: "Your continued use of the Services after the updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by applicable law.",
      },
      {
        kind: "p",
        text: "Where a change requires specific consent, we will seek such consent where appropriate.",
      },
    ],
  },
  {
    id: "governing-law",
    num: "29",
    title: "Governing Law and Jurisdiction",
    blocks: [
      {
        kind: "p",
        text: "These Terms shall be governed by the laws of India.",
      },
      {
        kind: "p",
        text: "Subject to applicable law, disputes arising in connection with these Terms or our Services shall be subject to the jurisdiction of the courts at:",
      },
      { kind: "highlight", text: "Kanpur, U.P., India" },
    ],
  },
  {
    id: "severability",
    num: "30",
    title: "Severability",
    blocks: [
      {
        kind: "p",
        text: "If any provision of these Terms is found to be invalid, unlawful or unenforceable, that provision shall be interpreted or modified to the minimum extent necessary to make it enforceable, where legally permitted.",
      },
      {
        kind: "p",
        text: "The remaining provisions shall continue in full force and effect.",
      },
    ],
  },
  {
    id: "no-waiver",
    num: "31",
    title: "No Waiver",
    blocks: [
      {
        kind: "p",
        text: "Failure by us to enforce any provision of these Terms shall not constitute a waiver of our right to enforce that provision in the future.",
      },
    ],
  },
  {
    id: "entire-agreement",
    num: "32",
    title: "Entire Agreement",
    blocks: [
      { kind: "p", text: "These Terms, together with the applicable:" },
      {
        kind: "ul",
        items: [
          "Privacy Policy;",
          "Refund & Cancellation Policy;",
          "Cookie Policy;",
          "programme-specific rules;",
          "examination instructions;",
          "school agreements;",
          "other policies expressly incorporated into the Services,",
        ],
      },
      {
        kind: "p",
        text: "constitute the applicable agreement governing your use of the relevant Services, subject to any separate written agreement.",
      },
    ],
  },
  {
    id: "contact-us",
    num: "33",
    title: "Contact Us",
    blocks: [
      { kind: "p", text: "For questions regarding these Terms:" },
      {
        kind: "contact",
        title: "EPOCH OLYMPIAD FOUNDATION PVT. LTD.",
        rows: [
          {
            label: "Address",
            value:
              "Plot No. 666A, Kalyanpur Bithoor Road, Kanpur, U.P., Pincode - 208017",
          },
          {
            label: "Email",
            value: "info@epocholympiad.co.in",
            href: "mailto:info@epocholympiad.co.in",
          },
          { label: "Phone", value: "9807714979", href: "tel:+919807714979" },
          {
            label: "Privacy / Grievance",
            value: "director@epocholympiad.co.in",
            href: "mailto:director@epocholympiad.co.in",
          },
        ],
      },
    ],
  },
];
