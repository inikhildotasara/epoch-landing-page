import type { LegalSection } from "./types";

export const privacyIntro = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  effectiveDate: "27 August 2026",
  lastUpdated: "27 August 2026",
  lead: 'Epoch Olympiad Foundation Pvt. Ltd. and its associated initiatives, including Epoch Olympiad, Brainiac Global and MY CCBee ("we", "us", "our" or "Foundation") respect your privacy and are committed to protecting personal information entrusted to us.',
  scopeIntro:
    "This Privacy Policy explains how we collect, use, disclose, store, protect and otherwise process personal data when you:",
  scopeItems: [
    "visit our website;",
    "register a school;",
    "participate in our Olympiads or Brain Booster examinations;",
    "access the Genie App or other digital platforms;",
    "use MY CCBee;",
    "request information or support;",
    "communicate with us;",
    "participate in our programmes, surveys, events or initiatives; or",
    "otherwise interact with our services.",
  ],
  objective:
    "Our objective is to process personal data responsibly, transparently and only for legitimate educational, administrative, operational and related purposes.",
};

export const privacySections: LegalSection[] = [
  {
    id: "about-us",
    num: "1",
    title: "About Us",
    blocks: [
      {
        kind: "contact",
        rows: [
          {
            label: "Data Fiduciary / Organisation",
            value: "EPOCH OLYMPIAD FOUNDATION PVT. LTD.",
          },
          {
            label: "Brand / Initiative",
            value: "Epoch Olympiad Foundation and its initiatives",
          },
          {
            label: "Registered Office",
            value: "Plot No. 666 A Kalyanpur Bithoor Road, Kanpur (U.P.)",
          },
          {
            label: "Email",
            value: "info@epocholympiad.co.in",
            href: "mailto:info@epocholympiad.co.in",
          },
          { label: "Phone", value: "9807714979", href: "tel:+919807714979" },
          {
            label: "Website",
            value: "epocholympiad.in",
            href: "https://epocholympiad.in",
          },
        ],
      },
      { kind: "p", text: "For privacy-related requests, please contact:" },
      {
        kind: "contact",
        title: "Privacy Contact / Grievance Contact",
        rows: [
          { label: "Name", value: "Mrs. Deepmala Gupto" },
          {
            label: "Email",
            value: "director@epocholympiad.co.in",
            href: "mailto:director@epocholympiad.co.in",
          },
          {
            label: "Postal Address",
            value:
              "Plot No. 666 A Kalyanpur Bithoor Road, Kanpur (U.P.), Pincode - 208017",
          },
        ],
      },
    ],
  },
  {
    id: "our-commitment",
    num: "2",
    title: "Our Commitment to Privacy",
    blocks: [
      {
        kind: "p",
        text: "We believe that educational technology should strengthen learning without compromising privacy.",
      },
      { kind: "p", text: "We therefore follow the principles of:" },
      {
        kind: "pills",
        items: [
          "Purpose Limitation",
          "Data Minimisation",
          "Transparency",
          "Security",
          "Accuracy",
          "Accountability",
          "Responsible Retention",
        ],
      },
      {
        kind: "p",
        text: "We collect only information reasonably required for the purposes explained in this Policy and seek appropriate consent wherever required by applicable law.",
      },
    ],
  },
  {
    id: "whose-data",
    num: "3",
    title: "Whose Personal Data May We Collect?",
    blocks: [
      {
        kind: "p",
        text: "Depending on the service being used, we may process information relating to:",
      },
      { kind: "h3", text: "A. Parents / Guardians" },
      { kind: "p", text: "For example:" },
      {
        kind: "ul",
        items: [
          "name;",
          "mobile number;",
          "email address;",
          "relationship with the child;",
          "communication preferences;",
          "consent records.",
        ],
      },
      { kind: "h3", text: "B. Students / Children" },
      {
        kind: "p",
        text: "Where required for educational participation or reporting:",
      },
      {
        kind: "ul",
        items: [
          "student's name;",
          "class / grade;",
          "age or date of birth;",
          "school;",
          "academic identifiers;",
          "examination details;",
          "responses and assessment results;",
          "performance indicators;",
          "Academic Health Report information;",
          "participation and award information.",
        ],
      },
      { kind: "h3", text: "C. School Representatives" },
      { kind: "p", text: "For example:" },
      {
        kind: "ul",
        items: [
          "principal's name;",
          "teacher's name;",
          "coordinator's name;",
          "designation;",
          "school name;",
          "official contact details;",
          "school address;",
          "communication records.",
        ],
      },
      { kind: "h3", text: "D. Advisors, Educators and Professionals" },
      { kind: "p", text: "We may collect:" },
      {
        kind: "ul",
        items: [
          "name;",
          "designation;",
          "organisation;",
          "professional biography;",
          "professional photograph;",
          "contact information;",
          "LinkedIn or other professional profile;",
          "information supplied in an Expression of Interest.",
        ],
      },
      { kind: "h3", text: "E. Website Visitors" },
      {
        kind: "p",
        text: "We may automatically receive limited technical information such as:",
      },
      {
        kind: "ul",
        items: [
          "IP address;",
          "browser type;",
          "device information;",
          "operating system;",
          "approximate location derived from technical information;",
          "pages visited;",
          "referring page;",
          "access times;",
          "cookies and similar technologies.",
        ],
      },
    ],
  },
  {
    id: "childrens-data",
    num: "4",
    title: "Children's Personal Data",
    blocks: [
      {
        kind: "p",
        text: "We recognise that children's data requires enhanced protection.",
      },
      { kind: "p", text: "Where applicable, we will:" },
      {
        kind: "ul",
        items: [
          "obtain appropriate consent from a parent or lawful guardian;",
          "use children's information only for specified and legitimate educational or service-related purposes;",
          "avoid unnecessary collection of children's information;",
          "implement appropriate security safeguards;",
          "avoid using children's personal data for unrelated commercial purposes;",
          "restrict access to authorised personnel and service providers;",
          "maintain appropriate records of consent where required.",
        ],
      },
      {
        kind: "highlight",
        text: "We will not knowingly permit children's personal data to be used for targeted advertising or behavioural profiling for advertising purposes.",
      },
      {
        kind: "p",
        text: "Where applicable law requires additional safeguards for children's data, we will follow those requirements.",
      },
      {
        kind: "note",
        text: "The DPDP framework contains specific protections for children, including requirements relating to parental consent and restrictions on certain processing involving children.",
      },
    ],
  },
  {
    id: "information-we-collect",
    num: "5",
    title: "Information We Collect",
    blocks: [
      { kind: "p", text: "We may collect information through:" },
      { kind: "h3", text: "Information You Provide Directly" },
      { kind: "p", text: "For example, when you:" },
      {
        kind: "ul",
        items: [
          "submit a School Registration Form;",
          "register for an examination;",
          "complete a parent consent form;",
          "request a demo;",
          "contact us;",
          "submit an Expression of Interest for the Advisory Board;",
          "participate in surveys;",
          "communicate through email, telephone or other channels.",
        ],
      },
      { kind: "h3", text: "Information Provided by Schools" },
      {
        kind: "p",
        text: "A school may provide student, teacher or parent information to us for purposes such as:",
      },
      {
        kind: "ul",
        items: [
          "examination registration;",
          "assessment administration;",
          "results;",
          "Academic Health Reports;",
          "school-level analytics;",
          "awards and recognition;",
          "platform services.",
        ],
      },
      {
        kind: "p",
        text: "Where a school provides personal data on behalf of parents/guardians, the school is responsible for obtaining any consent or authorisation required from the relevant individuals, unless otherwise agreed or required by law.",
      },
    ],
  },
  {
    id: "how-we-use-data",
    num: "6",
    title: "How We Use Personal Data",
    blocks: [
      {
        kind: "p",
        text: "We may process personal data for the following purposes:",
      },
      { kind: "h3", text: "Educational Services" },
      {
        kind: "ul",
        items: [
          "registering students;",
          "conducting examinations;",
          "evaluating responses;",
          "generating results;",
          "generating Academic Health Reports;",
          "providing learning resources;",
          "providing performance insights;",
          "administering awards and recognition.",
        ],
      },
      { kind: "h3", text: "School Services" },
      {
        kind: "ul",
        items: [
          "registering schools;",
          "communicating with school representatives;",
          "coordinating examinations;",
          "providing school-level reports;",
          "providing MY CCBee services;",
          "providing technical and administrative support.",
        ],
      },
      { kind: "h3", text: "Genie App" },
      { kind: "p", text: "Information may be processed to:" },
      {
        kind: "ul",
        items: [
          "authenticate users;",
          "provide access to educational resources;",
          "display results;",
          "provide Academic Health Reports;",
          "provide sample papers and previous-year papers;",
          "provide syllabus and marking information;",
          "provide awards and scholarship information;",
          "improve the functionality of the platform.",
        ],
      },
      { kind: "h3", text: "MY CCBee" },
      { kind: "p", text: "Where applicable, data may be used to:" },
      {
        kind: "ul",
        items: [
          "record school activities;",
          "monitor learner participation;",
          "provide performance insights;",
          "track relevant educational KPIs;",
          "generate reports;",
          "support timely intervention and communication between school and parents.",
        ],
      },
      { kind: "h3", text: "Communication" },
      { kind: "p", text: "We may use contact information to:" },
      {
        kind: "ul",
        items: [
          "respond to enquiries;",
          "provide service-related communications;",
          "send examination updates;",
          "provide important account information;",
          "provide support;",
          "communicate programme-related information.",
        ],
      },
      {
        kind: "p",
        text: "Marketing communications will be sent in accordance with applicable law and applicable consent/preferences.",
      },
    ],
  },
  {
    id: "assessment-data",
    num: "7",
    title: "Assessment and Academic Data",
    blocks: [
      {
        kind: "p",
        text: "Our educational assessments may generate information about a student's:",
      },
      {
        kind: "ul",
        items: [
          "reasoning;",
          "problem-solving;",
          "conceptual understanding;",
          "analytical abilities;",
          "learning patterns;",
          "performance across assessment areas;",
          "strengths and areas requiring development.",
        ],
      },
      {
        kind: "p",
        text: "Such information is used primarily to provide educational assessment, benchmarking, reporting and improvement insights.",
      },
      {
        kind: "highlight",
        text: "Academic Health Reports are intended to provide educational insights and should not be interpreted as medical, psychological, psychiatric or clinical diagnoses unless expressly stated otherwise.",
      },
    ],
  },
  {
    id: "legal-basis",
    num: "8",
    title: "Legal Basis / Permitted Grounds for Processing",
    blocks: [
      {
        kind: "p",
        text: "Depending on the circumstances and applicable law, we may process personal data based on:",
      },
      {
        kind: "ul",
        items: [
          "consent;",
          "performance of a requested service;",
          "legitimate or permitted business/educational purposes where legally applicable;",
          "compliance with legal obligations;",
          "protection of rights, safety or security;",
          "other grounds permitted by applicable law.",
        ],
      },
      {
        kind: "p",
        text: "Where consent is relied upon, we will seek consent in a manner that is appropriately informed, specific and capable of being withdrawn where applicable.",
      },
    ],
  },
  {
    id: "consent",
    num: "9",
    title: "Consent",
    blocks: [
      {
        kind: "p",
        text: "Where consent is required, we will provide information about:",
      },
      {
        kind: "ul",
        items: [
          "what information is being collected;",
          "why it is being collected;",
          "how it will be used;",
          "relevant third parties or categories of recipients;",
          "how consent may be withdrawn;",
          "how privacy rights may be exercised.",
        ],
      },
      {
        kind: "p",
        text: "Withdrawal of consent will not affect processing already lawfully undertaken before withdrawal.",
      },
      {
        kind: "p",
        text: "However, withdrawal may affect our ability to provide a service where the relevant information is necessary to provide that service.",
      },
    ],
  },
  {
    id: "sharing",
    num: "10",
    title: "Sharing of Personal Data",
    blocks: [
      { kind: "highlight", text: "We do not sell personal data." },
      {
        kind: "p",
        text: "We may share personal data only where reasonably necessary for legitimate purposes, including with:",
      },
      { kind: "h3", text: "Schools" },
      {
        kind: "p",
        text: "Relevant student or assessment information may be shared with the participating school for educational administration, assessment and reporting.",
      },
      { kind: "h3", text: "Parents / Guardians" },
      {
        kind: "p",
        text: "Relevant information about a child may be made available to an authorised parent or guardian through appropriate channels.",
      },
      { kind: "h3", text: "Technology and Service Providers" },
      {
        kind: "p",
        text: "We may use trusted third-party service providers for:",
      },
      {
        kind: "ul",
        items: [
          "hosting;",
          "cloud storage;",
          "database management;",
          "authentication;",
          "communications;",
          "payment processing;",
          "analytics;",
          "technical support;",
          "application infrastructure.",
        ],
      },
      {
        kind: "p",
        text: "Such providers may process data only for authorised purposes and subject to appropriate contractual or security safeguards.",
      },
      { kind: "h3", text: "Legal / Regulatory Authorities" },
      { kind: "p", text: "We may disclose information where required by:" },
      {
        kind: "ul",
        items: [
          "applicable law;",
          "court order;",
          "governmental authority;",
          "regulatory requirement;",
          "lawful investigation.",
        ],
      },
      { kind: "h3", text: "Professional Advisors" },
      {
        kind: "p",
        text: "Information may be disclosed where reasonably necessary to legal, accounting, auditing, insurance or professional advisors subject to appropriate confidentiality obligations.",
      },
    ],
  },
  {
    id: "third-party-platforms",
    num: "11",
    title: "Third-Party Platforms",
    blocks: [
      {
        kind: "p",
        text: "Our services may use third-party platforms or services, including, depending on the particular service:",
      },
      {
        kind: "ul",
        items: [
          "Google Forms;",
          "Google Analytics or similar analytics services;",
          "payment gateways;",
          "cloud hosting providers;",
          "email/SMS/WhatsApp communication providers;",
          "YouTube or other video-hosting platforms;",
          "app stores;",
          "authentication providers.",
        ],
      },
      {
        kind: "p",
        text: "Their processing may be governed by their respective privacy policies.",
      },
      {
        kind: "p",
        text: "We recommend that users review the privacy practices of third-party services before using them.",
      },
    ],
  },
  {
    id: "cookies",
    num: "12",
    title: "Cookies and Similar Technologies",
    blocks: [
      {
        kind: "p",
        text: "Our website may use cookies and similar technologies to:",
      },
      {
        kind: "ul",
        items: [
          "operate essential website functions;",
          "remember preferences;",
          "understand website usage;",
          "improve performance;",
          "maintain security;",
          "measure website traffic.",
        ],
      },
      {
        kind: "p",
        text: "Where required, non-essential cookies will be used only after obtaining appropriate consent.",
      },
      {
        kind: "p",
        text: "Users may control cookies through their browser settings, although disabling certain cookies may affect website functionality.",
      },
    ],
  },
  {
    id: "data-security",
    num: "13",
    title: "Data Security",
    blocks: [
      {
        kind: "p",
        text: "We take reasonable technical and organisational measures designed to protect personal data against:",
      },
      {
        kind: "ul",
        items: [
          "unauthorised access;",
          "accidental loss;",
          "destruction;",
          "alteration;",
          "unauthorised disclosure;",
          "misuse;",
          "other unlawful processing.",
        ],
      },
      { kind: "p", text: "Security measures may include, where appropriate:" },
      {
        kind: "ul",
        items: [
          "access controls;",
          "authentication;",
          "encryption;",
          "secure transmission;",
          "backups;",
          "logging and monitoring;",
          "role-based access;",
          "vendor security controls;",
          "employee confidentiality obligations;",
          "incident-response procedures.",
        ],
      },
      {
        kind: "note",
        text: "The 2025 DPDP Rules specifically contemplate reasonable security safeguards including measures such as encryption, access controls, monitoring, backups and breach detection/response.",
      },
      {
        kind: "highlight",
        text: "No electronic system can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security of information transmitted over the internet.",
      },
    ],
  },
  {
    id: "data-breach",
    num: "14",
    title: "Data Breach",
    blocks: [
      {
        kind: "p",
        text: "If we become aware of a personal data breach, we will assess and respond to it in accordance with applicable law.",
      },
      {
        kind: "p",
        text: "Depending on the nature and severity of the incident, this may include:",
      },
      {
        kind: "ul",
        items: [
          "containing the incident;",
          "investigating its cause;",
          "restoring affected systems;",
          "notifying relevant authorities where legally required;",
          "notifying affected individuals where legally required;",
          "taking measures to reduce potential harm;",
          "implementing corrective measures.",
        ],
      },
      {
        kind: "note",
        text: "The notified DPDP Rules provide for breach notifications to affected Data Principals and the Data Protection Board, including detailed reporting requirements within the prescribed timeframe.",
      },
    ],
  },
  {
    id: "data-retention",
    num: "15",
    title: "Data Retention",
    blocks: [
      {
        kind: "p",
        text: "We retain personal data only for as long as reasonably necessary for:",
      },
      {
        kind: "ul",
        items: [
          "providing the relevant service;",
          "fulfilling the purpose for which it was collected;",
          "maintaining educational and assessment records;",
          "responding to disputes;",
          "complying with legal, accounting or regulatory obligations;",
          "protecting our legal rights;",
          "maintaining legitimate business records.",
        ],
      },
      {
        kind: "p",
        text: "When personal data is no longer required, we will securely delete, anonymise or otherwise dispose of it, subject to applicable legal or contractual retention requirements.",
      },
      { kind: "p", text: "We will periodically review retention periods." },
    ],
  },
  {
    id: "accuracy",
    num: "16",
    title: "Accuracy of Personal Data",
    blocks: [
      {
        kind: "p",
        text: "We seek to maintain accurate and reasonably up-to-date information.",
      },
      {
        kind: "p",
        text: "Users, parents/guardians and schools should notify us if information is inaccurate, incomplete or outdated.",
      },
      {
        kind: "p",
        text: "Where appropriate, we will take reasonable steps to correct or update the information.",
      },
    ],
  },
  {
    id: "your-rights",
    num: "17",
    title: "Your Privacy Rights",
    blocks: [
      {
        kind: "p",
        text: "Subject to applicable law, individuals may have rights relating to their personal data, including rights to:",
      },
      {
        kind: "ul",
        items: [
          "access information about processing;",
          "request correction of inaccurate information;",
          "request deletion/erasure where applicable;",
          "withdraw consent where consent is the basis for processing;",
          "raise a grievance;",
          "exercise other rights available under applicable law.",
        ],
      },
      {
        kind: "note",
        text: "The DPDP framework expressly establishes rights for Data Principals, subject to its provisions and applicable commencement dates.",
      },
    ],
  },
  {
    id: "children-rights",
    num: "18",
    title: "Children's Rights and Parent/Guardian Requests",
    blocks: [
      {
        kind: "p",
        text: "A parent or lawful guardian may contact us regarding personal data relating to their child.",
      },
      {
        kind: "p",
        text: "To protect the child and prevent unauthorised disclosure, we may require reasonable verification of the identity and authority of the person making the request.",
      },
      {
        kind: "p",
        text: "We may refuse or limit a request where permitted or required by applicable law.",
      },
    ],
  },
  {
    id: "school-responsibilities",
    num: "19",
    title: "School Responsibilities",
    blocks: [
      {
        kind: "p",
        text: "Where a school provides us with personal data relating to students, parents, teachers or other individuals, the school should ensure that:",
      },
      {
        kind: "ul",
        items: [
          "the information provided is accurate;",
          "the school has appropriate authority to provide the information;",
          "required parent/guardian consent has been obtained where applicable;",
          "individuals have been appropriately informed;",
          "information is not provided beyond what is reasonably necessary.",
        ],
      },
      {
        kind: "p",
        text: "Where our agreement with a school allocates particular privacy responsibilities, those contractual arrangements will also apply.",
      },
    ],
  },
  {
    id: "international-transfers",
    num: "20",
    title: "International Data Transfers",
    blocks: [
      {
        kind: "p",
        text: "Some of our technology providers may store or process information outside India.",
      },
      {
        kind: "p",
        text: "Where personal data is transferred outside India, we will do so in accordance with applicable law and any restrictions or requirements prescribed by the Government of India or other applicable jurisdiction.",
      },
      {
        kind: "p",
        text: "We will take reasonable steps to ensure that appropriate contractual, organisational and technical safeguards are in place.",
      },
    ],
  },
  {
    id: "international-users",
    num: "21",
    title: "International Users",
    blocks: [
      { kind: "p", text: "Our primary operations are based in India." },
      {
        kind: "p",
        text: "If you access our services from another country or jurisdiction, additional privacy laws may apply depending on the circumstances.",
      },
      {
        kind: "p",
        text: "Where laws such as the EU/EEA GDPR, UK GDPR, or other applicable data-protection laws apply to our processing, we will comply with the obligations applicable to us.",
      },
      {
        kind: "p",
        text: "This Policy does not by itself create rights under a law that does not otherwise apply to our activities.",
      },
    ],
  },
  {
    id: "research-analytics",
    num: "22",
    title: "Educational Research and Analytics",
    blocks: [
      {
        kind: "p",
        text: "As an education research foundation, we may conduct research and statistical analysis using assessment and educational data.",
      },
      {
        kind: "p",
        text: "Where research requires identifiable personal data, we will process such data only where legally permitted and for an appropriate purpose.",
      },
      {
        kind: "p",
        text: "Where reasonably possible, research and statistical outputs will use:",
      },
      {
        kind: "ul",
        items: ["aggregated data;", "anonymised data; or", "de-identified data."],
      },
      {
        kind: "p",
        text: "We will not publicly identify individual students in research publications or public performance analyses without appropriate authority or consent where required.",
      },
    ],
  },
  {
    id: "awards-publicity",
    num: "23",
    title: "Awards, Recognition and Publicity",
    blocks: [
      {
        kind: "p",
        text: "We may publish information relating to award recipients, participating schools or educational achievements where appropriate and lawfully permitted.",
      },
      {
        kind: "p",
        text: "For children, we will obtain appropriate consent/authorisation before publicly displaying identifiable information such as:",
      },
      {
        kind: "ul",
        items: [
          "photograph;",
          "full name;",
          "school;",
          "achievement;",
          "video;",
          "testimonial.",
        ],
      },
      {
        kind: "p",
        text: "Parents/guardians may contact us regarding applicable publicity permissions.",
      },
    ],
  },
  {
    id: "testimonials",
    num: "24",
    title: "Testimonials and Photographs",
    blocks: [
      {
        kind: "p",
        text: "Where a principal, teacher, parent, student or other individual voluntarily provides a testimonial, photograph or video for publication, we will use such material for the purposes for which permission was granted.",
      },
      {
        kind: "p",
        text: "We will not imply an endorsement beyond the scope of the permission provided.",
      },
    ],
  },
  {
    id: "payments",
    num: "25",
    title: "Payments",
    blocks: [
      {
        kind: "p",
        text: "Where payments are made through our website or services, payment information may be processed by authorised payment service providers.",
      },
      {
        kind: "p",
        text: "We generally do not need to store complete debit-card, credit-card or banking credentials ourselves.",
      },
      {
        kind: "p",
        text: "Payment service providers may process payment information according to their own privacy and security policies and applicable financial regulations.",
      },
    ],
  },
  {
    id: "external-links",
    num: "26",
    title: "Links to Other Websites",
    blocks: [
      {
        kind: "p",
        text: "Our website may contain links to third-party websites.",
      },
      {
        kind: "p",
        text: "We are not responsible for the privacy practices, security or content of external websites.",
      },
      {
        kind: "p",
        text: "Users should review the privacy policy of each third-party website they visit.",
      },
    ],
  },
  {
    id: "changes",
    num: "27",
    title: "Changes to This Privacy Policy",
    blocks: [
      {
        kind: "p",
        text: "We may update this Privacy Policy from time to time to reflect:",
      },
      {
        kind: "ul",
        items: [
          "changes in our services;",
          "changes in technology;",
          "changes in applicable law;",
          "regulatory requirements;",
          "changes in our data-processing practices.",
        ],
      },
      {
        kind: "p",
        text: "The updated version will be published on this page with a revised \u201cLast Updated\u201d date.",
      },
      {
        kind: "p",
        text: "Where required by law, we will provide additional notice or obtain consent for material changes.",
      },
    ],
  },
  {
    id: "grievance",
    num: "28",
    title: "Grievance Redressal",
    blocks: [
      {
        kind: "p",
        text: "If you have a privacy concern, complaint or request, please contact:",
      },
      {
        kind: "contact",
        title: "Privacy & Grievance Contact",
        rows: [
          { label: "Name", value: "Mrs. Deepmala Gupto" },
          { label: "Designation", value: "Director" },
          {
            label: "Email",
            value: "director@epocholympiad.co.in",
            href: "mailto:director@epocholympiad.co.in",
          },
          { label: "Phone", value: "9807714979", href: "tel:+919807714979" },
          {
            label: "Postal Address",
            value:
              "Plot No. 666 A Kalyanpur Bithoor Road, Kanpur (U.P.), Pincode - 208017",
          },
        ],
      },
      { kind: "h3", text: "How to Raise a Request" },
      { kind: "p", text: "Please include:" },
      {
        kind: "ol",
        items: [
          "Your full name;",
          "Registered email/mobile number;",
          "Nature of your request or complaint;",
          "Relevant student/school/account reference, where applicable;",
          "Supporting information, if necessary.",
        ],
      },
      {
        kind: "p",
        text: "We may request reasonable information to verify your identity before processing the request.",
      },
      {
        kind: "p",
        text: "We will address privacy requests and grievances within the time periods prescribed by applicable law.",
      },
    ],
  },
  {
    id: "contact-us",
    num: "29",
    title: "Contact Us",
    blocks: [
      {
        kind: "p",
        text: "For general questions regarding this Privacy Policy:",
      },
      {
        kind: "contact",
        title: "Epoch Olympiad Foundation Pvt. Ltd.",
        rows: [
          {
            label: "Address",
            value:
              "Plot No. 666 A Kalyanpur Bithoor Road, Kanpur (U.P.), Pincode - 208017",
          },
          {
            label: "Email",
            value: "info@epocholympiad.co.in",
            href: "mailto:info@epocholympiad.co.in",
          },
          { label: "Phone", value: "9807714979", href: "tel:+919807714979" },
          {
            label: "Website",
            value: "epocholympiad.in",
            href: "https://epocholympiad.in",
          },
        ],
      },
    ],
  },
  {
    id: "governing-law",
    num: "30",
    title: "Governing Law",
    blocks: [
      {
        kind: "p",
        text: "This Privacy Policy shall be interpreted in accordance with the laws applicable to the processing of personal data and the services provided by us.",
      },
      {
        kind: "p",
        text: "For matters governed by Indian law, applicable laws of India shall apply, subject to mandatory rights and remedies available to individuals under applicable law.",
      },
    ],
  },
];
