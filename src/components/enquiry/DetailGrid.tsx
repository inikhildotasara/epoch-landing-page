import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  BarChartArrowIcon,
  BookIcon,
  BrainIcon,
  CheckIcon,
  ChildFaceIcon,
  ClockIcon,
  EditIcon,
  GearIcon,
  GridIcon,
  HelpBubbleIcon,
  InfoIcon,
  TargetIcon,
  TrophyIcon,
  ClipboardIcon,
} from "../icons";
import type {
  EnquiryProgram,
  GlanceIcon,
} from "@/content/enquiry/programs";

type IconComp = ComponentType<SVGProps<SVGSVGElement>>;

const glanceIcons: Record<GlanceIcon, IconComp> = {
  child: ChildFaceIcon,
  mode: EditIcon,
  book: BookIcon,
  clock: ClockIcon,
  help: HelpBubbleIcon,
  grid: GridIcon,
  levels: BarChartArrowIcon,
};

const glanceColors = [
  "#1e6fb8",
  "#16a34a",
  "#7b2fa8",
  "#d27909",
  "#e0407f",
  "#0f9c9a",
  "#1b3566",
];

function Card({
  index,
  title,
  tone,
  children,
}: {
  index: string;
  title: string;
  tone: string;
  children: ReactNode;
}) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl border border-black/5 p-4 lg:p-5"
      style={{ backgroundColor: tone }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-[15px] font-semibold text-navy lg:text-[16px]">
          {title}
        </h3>
        <span className="font-serif text-[18px] font-semibold leading-none text-navy/25">
          {index}
        </span>
      </div>
      <div className="mt-3 flex-1">{children}</div>
    </article>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-0.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#16a34a]">
            <CheckIcon className="h-[9px] w-[9px] text-white" />
          </span>
          <span className="text-[12px] leading-snug text-slate-600 lg:text-[12.5px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function DetailGrid({ program }: { program: EnquiryProgram }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <Card index="01" title="At a Glance" tone="#e8f1fb">
        <ul className="grid grid-cols-1 gap-2.5">
          {program.glance.map((fact, i) => {
            const Icon = glanceIcons[fact.icon];
            const color = glanceColors[i % glanceColors.length];
            return (
              <li key={fact.label} className="flex items-start gap-2.5">
                <Icon
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color }}
                  strokeWidth={1.7}
                />
                <p className="text-[12px] leading-snug lg:text-[12.5px]">
                  <span className="font-semibold text-navy">{fact.label}: </span>
                  <span className="text-slate-600">{fact.value}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </Card>

      <Card index="02" title="What is it?" tone="#e8f6ee">
        <div className="flex h-full flex-col justify-between gap-4">
          <p className="text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
            {program.whatIsIt}
          </p>
          <InfoIcon className="h-10 w-10 self-end text-[#16a34a]/35" />
        </div>
      </Card>

      <Card index="03" title="Why does it matter?" tone="#fbf3d9">
        <div className="flex h-full flex-col justify-between gap-4">
          <p className="text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
            {program.whyItMatters}
          </p>
          <TargetIcon className="h-10 w-10 self-end text-[#d27909]/40" />
        </div>
      </Card>

      <Card index="04" title="What does it assess?" tone="#efe8fb">
        <div className="flex h-full flex-col justify-between gap-4">
          <CheckList items={program.assesses} />
          <BrainIcon className="h-10 w-10 self-end text-[#7b2fa8]/35" />
        </div>
      </Card>

      <Card index="05" title="How does it work?" tone="#fde8ef">
        <div className="flex h-full flex-col justify-between gap-4">
          <CheckList items={program.howItWorks} />
          <GearIcon className="h-10 w-10 self-end text-[#e0407f]/35" />
        </div>
      </Card>

      <Card index="06" title="How to Participate?" tone="#e6f7f4">
        <div className="flex h-full flex-col justify-between gap-4">
          <ol className="space-y-2">
            {program.participate.map((step, i) => (
              <li key={step.title} className="flex gap-2.5">
                <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[10px] font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-[12px] leading-snug text-slate-600 lg:text-[12.5px]">
                  <span className="font-semibold text-navy">{step.title}. </span>
                  {step.detail}
                </span>
              </li>
            ))}
          </ol>
          <ClipboardIcon className="h-10 w-10 self-end text-[#0f9c9a]/35" />
        </div>
      </Card>

      <Card index="07" title="What happens after the assessment?" tone="#fbf3d9">
        <div className="flex h-full flex-col justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-navy lg:text-[11.5px]">
              {["Assessment", "Result", "Academic Health Report"].map(
                (label, i, arr) => (
                  <span key={label} className="flex items-center gap-1.5">
                    <span className="rounded-md bg-white px-2 py-1 shadow-sm">
                      {label}
                    </span>
                    {i < arr.length - 1 ? (
                      <span className="text-gold-dark" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </span>
                )
              )}
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
              {program.afterNote}
            </p>
          </div>
          <BarChartArrowIcon className="h-10 w-10 self-end text-[#d27909]/40" />
        </div>
      </Card>

      <Card index="08" title="Recognition & Opportunities" tone="#fff4dc">
        <div className="flex h-full flex-col justify-between gap-4">
          <CheckList items={program.recognition} />
          <TrophyIcon className="h-10 w-10 self-end text-[#d27909]/45" />
        </div>
      </Card>
    </div>
  );
}
