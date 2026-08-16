import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../Reveal";
import {
  CakeIcon,
  CalendarCheckIcon,
  CalendarIcon,
  CertificateIcon,
  ChatIcon,
  CheckIcon,
  ClipboardIcon,
  DocIcon,
  GroupIcon,
  HelpBubbleIcon,
  StarIcon,
  UserIcon,
} from "../icons";

const trackItems = [
  {
    icon: CertificateIcon,
    color: "#e8862e",
    label: "Daily Performance & Achievements",
  },
  { icon: UserIcon, color: "#1a5fb4", label: "Teacher Performance" },
  { icon: StarIcon, color: "#2f80c9", label: "School Activities" },
  { icon: CalendarIcon, color: "#16a34a", label: "Attendance" },
  { icon: DocIcon, color: "#e8862e", label: "Homework" },
  {
    icon: ChatIcon,
    color: "#dc2626",
    label: "Communication",
    sub: "(Notices, Reminders)",
  },
  { icon: CalendarCheckIcon, color: "#0d9488", label: "Leave & Appointments" },
  { icon: HelpBubbleIcon, color: "#1b3566", label: "Complaints & Queries" },
  { icon: CakeIcon, color: "#e0407f", label: "Birthdays & Engagement" },
  {
    icon: ClipboardIcon,
    color: "#1b3566",
    label: "Lost & Found & Holiday Management",
  },
];

const parentPoints = [
  "Know your child's daily performance and achievements",
  "Stay connected with teachers",
  "Homework and school updates in one place",
  "Understand progress through clear insights",
];

const teacherPoints = [
  "Record and monitor daily activities with ease",
  "Track student progress effortlessly",
  "Communicate instantly with parents",
  "Identify and support students on time",
];

function RoleCard({
  icon: Icon,
  title,
  points,
  accent,
  tint,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  points: string[];
  accent: string;
  tint: string;
}) {
  return (
    <div
      className="flex h-full flex-col rounded-2xl border border-slate-200 p-5 lg:p-5 xl:p-6"
      style={{ backgroundColor: tint }}
    >
      <div className="flex items-center gap-2.5">
        <Icon className="h-6 w-6 shrink-0" style={{ color: accent }} strokeWidth={1.7} />
        <h2
          className="font-serif text-[16px] font-semibold lg:text-[17px]"
          style={{ color: accent }}
        >
          {title}
        </h2>
      </div>
      <ul className="mt-4 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-2.5">
            <CheckIcon
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: accent }}
              strokeWidth={2.4}
            />
            <span className="text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
              {p}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrackAndRoles() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        {/* At 1024 the tracking grid keeps the full width and the two role cards
            share the row beneath it. */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-[minmax(0,2.05fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:col-span-2 lg:p-6 xl:col-span-1">
            <h2 className="text-center font-serif text-[18px] font-semibold text-navy lg:text-[20px]">
              What Can Schools Track?
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-3">
              {trackItems.map((t) => {
                const Icon = t.icon;
                return (
                  <li
                    key={t.label}
                    className="flex flex-col items-center text-center"
                  >
                    <Icon
                      className="h-7 w-7 shrink-0"
                      style={{ color: t.color }}
                      strokeWidth={1.6}
                    />
                    <p className="mt-2.5 text-[11.5px] font-semibold leading-snug text-navy lg:text-[11px] xl:text-[11.5px]">
                      {t.label}
                    </p>
                    {t.sub && (
                      <p className="mt-0.5 text-[10.5px] leading-snug text-slate-500">
                        {t.sub}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <RoleCard
              icon={GroupIcon}
              title="For Parents"
              points={parentPoints}
              accent="#0d9488"
              tint="#f1fbf7"
            />
          </Reveal>

          <Reveal delay={140} className="h-full">
            <RoleCard
              icon={ClipboardIcon}
              title="For Teachers"
              points={teacherPoints}
              accent="#5b3fbf"
              tint="#f6f4fd"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
