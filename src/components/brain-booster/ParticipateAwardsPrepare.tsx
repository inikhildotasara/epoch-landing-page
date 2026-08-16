import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  ArrowRight,
  CertificateIcon,
  ClipboardIcon,
  MedalIcon,
  OpenBookIcon,
  TrophyIcon,
} from "../icons";

const participateSteps = [
  "Register through your school.",
  "Fill the parent consent form available in your school.",
  "Submit the exam fee and parent consent form to your class teacher.",
  "You will get a coloured workbook and access to use our Genie App.",
  "Child appears for the assessment in a friendly environment.",
];

const prepareSteps = [
  "Play observation games daily.",
  "From our engaging colour workbook.",
  "Explore patterns using colours, shapes and everyday objects.",
  "Sample papers, previous year papers and other important preparatory materials are available in our Genie App.",
  "Encourage why, how and what if questions.",
];

const awards = [
  {
    icon: TrophyIcon,
    color: "#e8862e",
    title: "Olympiad Awards",
    desc: "Recognition for outstanding performance at international, national and school levels.",
  },
  {
    icon: MedalIcon,
    color: "#16a34a",
    title: "Scholarships",
    desc: "Scholarship opportunities for eligible high-performing learners as per published criteria.",
  },
  {
    icon: CertificateIcon,
    color: "#e0407f",
    title: "Special Recognition",
    desc: "Recognition for notable achievements and exceptional performance in different categories.",
  },
];

function ColumnHeading({
  icon: Icon,
  color,
  children,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  children: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon
        className="h-6 w-6 shrink-0"
        style={{ color }}
        strokeWidth={1.7}
      />
      <h2 className="font-serif text-[16px] font-semibold text-navy lg:text-[17px]">
        {children}
      </h2>
    </div>
  );
}

function NumberedList({ steps, color }: { steps: string[]; color: string }) {
  return (
    <ol className="mt-4 space-y-2.5">
      {steps.map((s, i) => (
        <li key={s} className="flex gap-3">
          <span
            className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10.5px] font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            {i + 1}
          </span>
          <span className="text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
            {s}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function ParticipateAwardsPrepare() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8">
          {/* Hairline dividers only appear once the three columns share a row. */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-x-8 xl:grid-cols-3">
            <div className="flex flex-col">
              <ColumnHeading icon={ClipboardIcon} color="#1b3566">
                How to Participate
              </ColumnHeading>
              <NumberedList steps={participateSteps} color="#0b1c3f" />
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[13px]"
              >
                For Schools: Register Now <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="border-t border-slate-200 pt-7 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <ColumnHeading icon={TrophyIcon} color="#e8862e">
                Awards, Scholarships &amp; Recognition
              </ColumnHeading>
              <div className="mt-4 flex flex-col gap-4">
                {awards.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.title} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                        <Icon
                          className="h-5 w-5"
                          style={{ color: a.color }}
                          strokeWidth={1.7}
                        />
                      </span>
                      <div>
                        <h3 className="text-[12.5px] font-bold text-navy lg:text-[13px]">
                          {a.title}
                        </h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
                          {a.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-7 md:col-span-2 xl:col-span-1 xl:border-t-0 xl:border-l xl:pl-8 xl:pt-0">
              <ColumnHeading icon={OpenBookIcon} color="#16a34a">
                How to Prepare
              </ColumnHeading>
              <NumberedList steps={prepareSteps} color="#16a34a" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
