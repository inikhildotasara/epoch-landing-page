import type { SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  CheckIcon,
  ArrowRight,
  DocIcon,
  ChildFaceIcon,
  BulbIcon,
  ScaleIcon,
} from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const studyAreas = [
  "Logical Reasoning",
  "Pattern Recognition",
  "Conceptual Understanding",
  "Knowledge Application",
  "Analytical Thinking",
  "Learning Progression",
  "Problem Solving",
  "Academic Development",
];

const commitments: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: DocIcon,
    title: "Evidence-Based",
    desc: "Frameworks grounded in educational research and systematic analysis.",
  },
  {
    icon: ChildFaceIcon,
    title: "Age-Appropriate",
    desc: "Assessment designed around the developmental stage of the learner.",
  },
  {
    icon: BulbIcon,
    title: "Diagnostic",
    desc: "Results intended to reveal meaningful patterns, not merely rank students.",
  },
  {
    icon: ScaleIcon,
    title: "Responsible Innovation",
    desc: "Technology used to enhance educational understanding—not replace human judgment.",
  },
];

const insights = [
  "Why Marks Alone Cannot Measure Learning",
  "Understanding Cognitive Intelligence in Early Learners",
  "The Future of International Assessment",
  "Why Diagnostic Assessment Matters",
  "How Children Learn Beyond Rote Memory",
  "Academic Health: A New Perspective on Student Performance",
];

export function StudyIntegrityInsights() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full grid-cols-1 gap-10 border-t border-slate-100 px-4 py-12 sm:px-6 md:px-12 lg:grid-cols-3 lg:gap-12 lg:px-page lg:py-16">
        {/* What We Study */}
        <Reveal>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-navy lg:text-[14px]">
            What We Study
          </h3>
          <p className="mt-4 text-[13px] leading-relaxed text-slate-500 lg:text-[13.5px]">
            Epoch Olympiad Foundation researches how children develop and
            demonstrate cognitive abilities through learning and assessment. Our
            areas of interest include:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-4">
            {studyAreas.map((a) => (
              <div key={a} className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold">
                  <CheckIcon className="h-2.5 w-2.5 text-navy" />
                </span>
                <span className="text-[12.5px] text-slate-600 lg:text-[13px]">{a}</span>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors hover:text-gold-dark"
          >
            Explore More
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        {/* Commitment to Integrity */}
        <Reveal delay={100}>
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-navy lg:text-[14px]">
            Our Commitment to Academic Integrity
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/12">
                    <Icon className="h-6 w-6 text-gold-dark" strokeWidth={1.6} />
                  </div>
                  <h4 className="mt-3 text-[13px] font-bold text-navy">{c.title}</h4>
                  <p className="mt-1.5 text-[11.5px] leading-snug text-slate-500">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Research & Insights */}
        <Reveal delay={200}>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-navy lg:text-[14px]">
            Research &amp; Insights
          </h3>
          <ul className="mt-4 divide-y divide-slate-100">
            {insights.map((t) => (
              <li key={t}>
                <a
                  href="#"
                  className="flex items-center justify-between gap-3 py-2.5 text-[12.5px] text-navy transition-colors hover:text-gold-dark lg:text-[13px]"
                >
                  <span>{t}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold-dark" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors hover:text-gold-dark"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
