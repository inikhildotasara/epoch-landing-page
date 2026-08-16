import { Reveal } from "../Reveal";
import {
  BarChartArrowIcon,
  BuildingIcon,
  CertificateIcon,
  ClipboardIcon,
  DocIcon,
  EditIcon,
  OpenBookIcon,
} from "../icons";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: BuildingIcon,
    title: "Register\nThrough School",
    desc: "Schools register with Epoch Olympiad Foundation.",
  },
  {
    icon: ClipboardIcon,
    title: "Select the Program",
    desc: "Choose Olympiad(s) or Learning Platform(s) as per eligibility.",
  },
  {
    icon: EditIcon,
    title: "Complete Student Registration",
    desc: "School submits student information and completes registration.",
  },
  {
    icon: OpenBookIcon,
    title: "Prepare & Learn",
    desc: "Access official syllabus, resources, school workbooks and Genie App.",
  },
  {
    icon: DocIcon,
    title: "Appear for\nPre Exam / Participation",
    desc: "Students participate in the exam or learning activities.",
  },
  {
    icon: BarChartArrowIcon,
    title: "Progress /\nRecognition",
    desc: "Top 10% qualify for Mains (IMO, ITST, IAO). IGKO is single level.",
  },
  {
    icon: CertificateIcon,
    title: "Results &\nAcademic Health Report",
    desc: "Check results and Academic Health Report in Genie App.",
  },
];

export function HowToParticipate() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal>
          <SectionHeading>How to Participate</SectionHeading>
        </Reveal>

        {/* Seven steps only fit one row on wide desktops; the connectors appear
            with that layout and stay hidden while the cards wrap. */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-10 lg:grid-cols-4 xl:grid-cols-7 xl:gap-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={i * 60}
                className="relative flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white px-3 pb-4 pt-7 text-center transition-shadow duration-300 hover:shadow-md"
              >
                <span className="absolute -top-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
                <Icon className="h-7 w-7 text-navy" strokeWidth={1.6} />
                <h3 className="mt-2 whitespace-pre-line font-serif text-[12.5px] font-semibold leading-snug text-navy lg:text-[13px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500 lg:text-[11.5px]">
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <span
                    className="absolute -right-[11px] top-1/2 hidden -translate-y-1/2 text-[16px] leading-none text-gold xl:block"
                    aria-hidden
                  >
                    &rsaquo;
                  </span>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
