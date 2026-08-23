import type { ReactNode, SVGProps } from "react";
import {
  ArrowRight,
  ClockIcon,
  CompassIcon,
  CrownIcon,
  EditIcon,
  GradCapIcon,
  GroupIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
  VideoIcon,
} from "../icons";
import { Reveal } from "../Reveal";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactNode;

type ContributeItem = {
  letter: "A" | "B";
  title: string;
  body: ReactNode;
  Icon: IconComponent;
};

type RoleCard = {
  number: string;
  tone: "navy" | "gold";
  Icon: IconComponent;
  crown?: boolean;
  title: string;
  subtitle: string;
  whoWeWelcomeIntro?: string;
  whoWeWelcome: string[];
  note?: string;
  contribute: ContributeItem[];
  timeCommitment: string;
};

const roles: RoleCard[] = [
  {
    number: "01",
    tone: "navy",
    Icon: GroupIcon,
    crown: true,
    title: "Patron-in-Chief",
    subtitle: "Reserved for Distinguished Institutional Leadership",
    whoWeWelcome: [
      "Retired Judges of High Courts / Supreme Court",
      "Serving or retired distinguished Scientists",
      "Vice-Chancellors of reputed universities or institutions",
      "Former Chairpersons / Directors of CBSE, ICSE or NCERT",
      "Other nationally or internationally respected institutional leaders of comparable stature",
    ],
    contribute: [
      {
        letter: "A",
        title: "Strategic Guidance",
        Icon: CompassIcon,
        body: "Provide high-level guidance on how our Olympiads, cognitive assessments and Academic Health Reports can create meaningful value for students, parents and schools\u2014help ensure that assessment encourages learning rather than pressure.",
      },
      {
        letter: "B",
        title: "Inspiring Young Minds",
        Icon: EditIcon,
        body: "Serve as a distinguished signatory on selected student certificates and, where convenient, share a brief message of encouragement for young achievers.",
      },
    ],
    timeCommitment:
      "A few hours across the year, primarily through remote interaction.",
  },
  {
    number: "02",
    tone: "gold",
    Icon: GradCapIcon,
    title: "Honorary Jury Member",
    subtitle: "Reserved for Distinguished Academic & Assessment Leaders",
    whoWeWelcome: [
      "Active or retired IIT / IIM professors",
      "National or Zonal Coordinators associated with CBSE, ICSE or NCERT",
      "Distinguished academic assessors and educational experts",
      "Other senior academic leaders with substantial experience in evaluation, curriculum or educational standards",
    ],
    contribute: [
      {
        letter: "A",
        title: "Independent Academic Judgement",
        Icon: SearchIcon,
        body: (
          <>
            Our internal analytics identify schools whose participating
            students demonstrate consistently strong performance in areas
            such as application, reasoning and critical thinking.
            <br />
            <br />
            A concise, curated dossier of shortlisted schools may be
            presented to you for{" "}
            <span className="underline">independent review</span>.
            <br />
            <br />
            You may use your academic judgement to help select recipients of
            our annual school-level recognition.
          </>
        ),
      },
      {
        letter: "B",
        title: "Inspiring Young Minds",
        Icon: MicrophoneIcon,
        body: "Serve as a distinguished signatory on selected certificates and, where convenient, record a brief message for student achievers. Your voice can help reinforce an important message: True achievement is not only about remembering more\u2014it is about learning to think better.",
      },
    ],
    timeCommitment: "A few hours of remote involvement across the year.",
  },
  {
    number: "03",
    tone: "navy",
    Icon: GroupIcon,
    title: "Chief Academic Ambassador",
    subtitle:
      "Reserved for Distinguished Education Advocates & Influential Leaders",
    whoWeWelcomeIntro:
      "We welcome accomplished leaders from diverse professional backgrounds who have a credible connection with education, young people, learning, future readiness or public awareness, including:",
    whoWeWelcome: [
      "Renowned school principals and school directors",
      "Senior educators and academic coordinators",
      "Educationists and educational entrepreneurs",
      "Chartered Accountants, Company Secretaries and financial professionals with an interest in financial literacy",
      "CEOs and senior corporate leaders committed to education or youth development",
      "Media professionals and communicators who can influence public understanding of education",
      "Social leaders and advocates working meaningfully with children, education or community development",
      "Other distinguished professionals whose experience can contribute to our educational vision",
    ],
    note:
      "Professional diversity is welcome; demonstrated credibility and a meaningful connection with education, young people or future readiness are essential.",
    contribute: [
      {
        letter: "A",
        title: "Thought Leadership & Advocacy",
        Icon: MegaphoneIcon,
        body: "Help parents, educators and school communities understand why high marks alone cannot fully represent a child\u2019s learning potential. Your contribution may take the form of a short message, open letter, recorded video, virtual roundtable or sharing your perspective on future-ready education.",
      },
      {
        letter: "B",
        title: "Inspiring Young Minds",
        Icon: VideoIcon,
        body: "Record a brief message for student achievers celebrating their effort, curiosity, thinking and growth. Your voice can inspire children that achievement is not simply about marks\u2014it is about how they think, learn and grow.",
      },
    ],
    timeCommitment:
      "Occasional participation through the year, primarily through remote engagement.",
  },
];

function SectionLabel({
  Icon,
  children,
}: {
  Icon: IconComponent;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-[15px] w-[15px] shrink-0 text-navy" strokeWidth={1.8} />
      <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy sm:text-[11.5px]">
        {children}
      </h4>
    </div>
  );
}

function RoleCardArticle({ role, delay }: { role: RoleCard; delay: number }) {
  const isGold = role.tone === "gold";
  const cardStyles = isGold
    ? "border-[#eee7d8] bg-[#fffdf8]"
    : "border-[#d9dfeb] bg-[#f8faff]";
  const badgeStyles = isGold ? "bg-gold text-navy" : "bg-navy text-white";
  const iconCircleStyles = isGold
    ? "bg-gold text-navy"
    : "bg-navy text-gold";
  const buttonStyles = isGold
    ? "bg-gold text-navy hover:bg-gold-dark"
    : "bg-navy text-white hover:bg-navy-700";
  const dotColor = isGold ? "bg-gold-dark" : "bg-gold-dark";

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`relative flex h-full flex-col rounded-xl border p-4.5 pt-9 text-center sm:p-6 sm:pt-10 ${cardStyles}`}
      >
        <span
          className={`absolute left-1/2 top-0 flex h-7 w-9 -translate-x-1/2 -translate-y-px items-center justify-center rounded-b font-serif text-[12px] ${badgeStyles}`}
        >
          {role.number}
        </span>

        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full sm:h-[68px] sm:w-[68px]">
          <span
            className={`flex h-full w-full items-center justify-center rounded-full ${iconCircleStyles}`}
          >
            <role.Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} />
          </span>
          {role.crown ? (
            <CrownIcon
              className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 text-navy"
              strokeWidth={1.6}
            />
          ) : null}
        </div>

        <h3 className="mt-3 font-serif text-[16px] font-semibold uppercase leading-tight text-navy sm:text-[17.5px]">
          {role.title}
        </h3>
        <p className="mx-auto mt-2 max-w-[26ch] font-serif text-[13px] leading-snug text-gold-dark sm:text-[13.5px]">
          {role.subtitle}
        </p>

        <span className="mx-auto mt-4 h-px w-full bg-[#e4dcc8]" />

        <div className="mt-4 text-left">
          <SectionLabel Icon={UserIcon}>Who We Welcome</SectionLabel>
          {role.whoWeWelcomeIntro ? (
            <p className="mt-2 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12px]">
              {role.whoWeWelcomeIntro}
            </p>
          ) : null}
          <ul className="mt-2.5 space-y-2">
            {role.whoWeWelcome.map((item) => (
              <li key={item} className="flex gap-2 text-[11.5px] leading-snug text-slate-600 sm:text-[12px]">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {role.note ? (
          <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-gold/50 bg-white px-3 py-3 text-left">
            <StarIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.6} />
            <p className="text-[11px] leading-relaxed text-navy sm:text-[11.5px]">
              {role.note}
            </p>
          </div>
        ) : null}

        <span className="mx-auto mt-4 h-px w-full bg-[#e4dcc8]" />

        <div className="mt-4 text-left">
          <SectionLabel Icon={GroupIcon}>What You May Contribute</SectionLabel>
          <div className="mt-3 space-y-3.5">
            {role.contribute.map((item) => (
              <div key={item.letter} className="flex gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconCircleStyles}`}
                >
                  <item.Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <h5 className="font-serif text-[12.5px] font-semibold text-navy sm:text-[13px]">
                    {item.letter}. {item.title}
                  </h5>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-[11.5px]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="mx-auto mt-4 h-px w-full bg-[#e4dcc8]" />

        <div className="mt-4 text-left">
          <SectionLabel Icon={ClockIcon}>Time Commitment</SectionLabel>
          <p className="mt-2 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12px]">
            {role.timeCommitment}
          </p>
        </div>

        <div className="mt-auto pt-5">
          <a
            href={`mailto:info@epocholympiad.co.in?subject=${encodeURIComponent(
              `Advisory Council \u2013 Express Interest (${role.title})`
            )}`}
            className={`inline-flex w-full items-center justify-center gap-1.5 rounded-md px-3.5 py-2.5 text-center text-[12px] font-semibold leading-tight transition-colors ${buttonStyles}`}
          >
            Express Interest
            <ArrowRight className="h-3.5 w-3.5 shrink-0" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function JoinCouncilRoles() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 py-8 sm:px-6 md:px-12 lg:px-page lg:py-11">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-8 shrink-0 bg-gold sm:w-11" />
            <h2 className="font-serif text-[16px] font-bold uppercase tracking-[0.06em] text-navy sm:text-[19px] lg:text-[21px]">
              Who Can Join Our Advisory Council?
            </h2>
            <span className="h-px w-8 shrink-0 bg-gold sm:w-11" />
          </div>
          <p className="mx-auto mt-3 max-w-[68ch] text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
            We invite distinguished individuals whose experience, credibility
            and perspective can meaningfully contribute to the future of
            learning, assessment and child development.
          </p>
        </div>

        <div className="mt-7 grid items-start gap-4 sm:grid-cols-3 lg:mt-9 lg:gap-5">
          {roles.map((role, i) => (
            <RoleCardArticle key={role.number} role={role} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
