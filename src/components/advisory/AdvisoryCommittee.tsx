import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GroupIcon } from "../icons";
import { Reveal } from "../Reveal";
import { AdvisorySectionHeading, LaurelBranch, OliveSprig } from "./decor";

const jury = [
  {
    name: "Prof. (Dr.) Anil Kumar",
    role: "Retd. Professor, Dept. of Chemical Engineering",
    institution: "IIT Kanpur, Uttar Pradesh",
    photo: "/images/advisors/prof-anil-kumar.webp",
  },
  {
    name: "Prof. (Dr.) Keshav Kant",
    role: "Retd. Professor, Dept. of Mechanical Engineering",
    institution: "IIT Kanpur, Uttar Pradesh",
    photo: "/images/advisors/prof-keshav-kant.webp",
  },
  {
    name: "Prof. (Dr.) Joydip Dhar",
    role: "Ph. D. (IIT Kanpur), Professor, Applied Sciences",
    institution: "IITM Gwalior, M. P.",
    photo: "/images/advisors/Prof. (Dr.) Jaydeep Dhar.png",
  },
  {
    name: "Prof. (Dr.) A. K. Mishra",
    role: "Ph. D. (IIT Kanpur), Sr. Professor, Dept. of Mathematics",
    institution: "B.H.U., Varanasi, U. P.",
    photo: "/images/advisors/Prof. (Dr.) A. K. Mishra.png",
  },
];

function ActionLink({
  children,
  tone = "navy",
  href = "/become-an-advisor",
}: {
  children: ReactNode;
  tone?: "navy" | "gold";
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] font-semibold leading-tight shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-auto sm:text-[11.5px] ${
        tone === "gold"
          ? "bg-gold text-navy hover:bg-gold-dark"
          : "bg-navy text-white hover:bg-navy-700"
      }`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
    </Link>
  );
}

function InterestStrip({
  children,
  tone = "navy",
}: {
  children: ReactNode;
  tone?: "navy" | "gold";
}) {
  return (
    <Link
      href="/become-an-advisor"
      className="group mt-2.5 flex items-center gap-3 rounded-xl border border-[#eee7d8] bg-white px-3.5 py-3 transition-colors hover:bg-[#fffaf0] sm:px-4"
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          tone === "gold" ? "bg-[#fff5d9] text-gold-dark" : "bg-[#edf3ff] text-navy"
        }`}
      >
        <GroupIcon className="h-4.5 w-4.5" />
      </span>
      <p className="min-w-0 flex-1 text-[11px] leading-snug text-slate-600">
        {children}
      </p>
      <ArrowRight
        className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
          tone === "gold" ? "text-gold-dark" : "text-navy"
        }`}
      />
    </Link>
  );
}

function MemberAvatar({
  name,
  role,
  institution,
  photo,
  ring = "navy",
}: {
  name: string;
  role: ReactNode;
  institution?: ReactNode;
  photo: string;
  ring?: "navy" | "gold";
}) {
  return (
    <div className="flex w-[126px] shrink-0 snap-start flex-col items-center text-center sm:w-[148px]">
      <div
        className={`h-20 w-20 overflow-hidden rounded-full bg-white shadow-[0_8px_20px_-10px_rgba(11,28,63,0.4)] ring-[3px] ring-offset-2 ring-offset-white transition-transform duration-300 ease-out hover:-translate-y-1.5 sm:h-24 sm:w-24 ${
          ring === "gold" ? "ring-gold/50" : "ring-navy/15"
        }`}
      >
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <h4 className="mt-3 font-serif text-[12px] font-semibold leading-snug text-navy sm:text-[12.5px]">
        {name}
      </h4>
      <p className="mt-1 text-[9.5px] leading-snug text-gold-dark sm:text-[10px]">
        {role}
      </p>
      {institution ? (
        <p className="mt-0.5 text-[9px] leading-snug text-slate-500 sm:text-[9.5px]">
          {institution}
        </p>
      ) : null}
    </div>
  );
}

function PlaceholderAvatar({
  icon,
  title,
  caption,
  ring = "navy",
}: {
  icon: ReactNode;
  title: string;
  caption: string;
  ring?: "navy" | "gold";
}) {
  return (
    <div className="flex w-[126px] shrink-0 snap-start flex-col items-center text-center sm:w-[148px]">
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed sm:h-24 sm:w-24 ${
          ring === "gold"
            ? "border-gold/50 bg-[#fff8e6] text-gold-dark"
            : "border-navy/25 bg-[#edf3ff] text-navy"
        }`}
      >
        {icon}
      </div>
      <h4
        className={`mt-3 font-serif text-[12px] font-semibold leading-snug sm:text-[12.5px] ${
          ring === "gold" ? "text-gold-dark" : "text-navy"
        }`}
      >
        {title}
      </h4>
      <p className="mt-1 text-[9px] leading-snug text-slate-500 sm:text-[9.5px]">
        {caption}
      </p>
    </div>
  );
}

function ScrollGallery({
  children,
  fadeColor,
}: {
  children: ReactNode;
  fadeColor: string;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 sm:w-10"
        style={{
          backgroundImage: `linear-gradient(to right, ${fadeColor}, transparent)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-10"
        style={{
          backgroundImage: `linear-gradient(to left, ${fadeColor}, transparent)`,
        }}
      />
      <div className="flex snap-x gap-4 overflow-x-auto px-7 pb-2 pt-1 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-navy/15 [&::-webkit-scrollbar-track]:bg-transparent sm:gap-5 sm:px-11">
        {children}
      </div>
    </div>
  );
}

function PatronSeat() {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8">
      <LaurelBranch className="hidden h-32 w-auto shrink-0 -scale-x-100 text-gold/45 sm:block" />
      <div className="flex max-w-[200px] flex-col items-center text-center sm:max-w-[220px]">
        <div className="relative h-[148px] w-[148px] overflow-hidden rounded-full bg-white shadow-[0_12px_28px_-12px_rgba(11,28,63,0.45)] ring-[3px] ring-gold/55 ring-offset-2 ring-offset-white sm:h-[176px] sm:w-[176px]">
          <Image
            src="/images/patron-in-chief.png"
            alt="Patron-in-Chief reserved seat"
            fill
            sizes="176px"
            className="object-contain p-1.5 sm:p-2"
          />
        </div>
        <h4 className="mt-3.5 font-serif text-[13px] font-semibold leading-snug text-navy sm:text-[14px]">
          Awaiting Appointment
        </h4>
        <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-[10.5px]">
          Position open by invitation
        </p>
      </div>
      <LaurelBranch className="hidden h-32 w-auto shrink-0 text-gold/45 sm:block" />
    </div>
  );
}

function CommitteeRow({
  number,
  tone,
  title,
  subtitle,
  cta,
  interest,
  watermark = "olive",
  gallery = true,
  children,
  delay,
}: {
  number: string;
  tone: "navy" | "gold";
  title: ReactNode;
  subtitle: ReactNode;
  cta: ReactNode;
  interest: ReactNode;
  watermark?: "olive" | "laurel";
  gallery?: boolean;
  children: ReactNode;
  delay?: number;
}) {
  const fadeColor = tone === "gold" ? "#fffdf8" : "#f8faff";

  return (
    <Reveal delay={delay} className="flex flex-col">
      <article
        className={`relative overflow-hidden rounded-2xl border p-4.5 shadow-[0_14px_34px_-22px_rgba(11,28,63,0.35)] sm:p-6 lg:p-7 ${
          tone === "gold"
            ? "border-[#eee7d8] bg-[#fffdf8]"
            : "border-[#d9dfeb] bg-[#f8faff]"
        }`}
      >
        {watermark === "laurel" ? (
          <LaurelBranch
            className={`pointer-events-none absolute -right-6 top-1/2 hidden h-[150%] w-auto -translate-y-1/2 lg:block ${
              tone === "gold" ? "text-gold/15" : "text-navy/10"
            }`}
          />
        ) : (
          <OliveSprig
            className={`pointer-events-none absolute -right-4 top-1/2 hidden h-[145%] w-auto -translate-y-1/2 lg:block ${
              tone === "gold" ? "text-gold/15" : "text-navy/10"
            }`}
          />
        )}

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="flex items-start gap-3.5">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-[13.5px] font-semibold sm:h-11 sm:w-11 sm:text-[14.5px] ${
                tone === "gold" ? "bg-gold text-navy" : "bg-navy text-white"
              }`}
            >
              {number}
            </span>
            <div>
              <h3 className="font-serif text-[16.5px] font-semibold uppercase leading-tight tracking-tight text-navy sm:text-[18.5px]">
                {title}
              </h3>
              <p className="mt-1.5 font-serif text-[11.5px] leading-snug text-gold-dark sm:text-[12.5px]">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="sm:shrink-0 sm:pt-1">
            <ActionLink tone={tone === "gold" ? "gold" : "navy"}>{cta}</ActionLink>
          </div>
        </div>

        <div className="relative mt-5 lg:mt-6">
          {gallery ? (
            <ScrollGallery fadeColor={fadeColor}>{children}</ScrollGallery>
          ) : (
            <div className="px-1 pb-1">{children}</div>
          )}
        </div>
      </article>
      <InterestStrip tone={tone}>{interest}</InterestStrip>
    </Reveal>
  );
}

export function AdvisoryCommittee() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 py-6 sm:px-6 md:px-12 lg:px-page lg:py-8">
          <AdvisorySectionHeading label="Our Advisory Committee" />
          <div className="text-center">
            <p className="mx-auto mt-1 max-w-[58ch] text-[10.5px] leading-relaxed text-slate-600 sm:text-[11.5px]">
              Independent voices helping strengthen assessment, academic integrity
              <br className="hidden sm:block" /> and the future of cognitive education.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4 lg:mt-7 lg:gap-5">
            <CommitteeRow
              number="01"
              tone="navy"
              title="Patron-in-Chief"
              subtitle="Reserved for Distinguished Institutional Leadership"
              cta="Position Open by Invitation"
              interest="Know a distinguished leader who could contribute to this vision?"
              gallery={false}
            >
              <PatronSeat />
            </CommitteeRow>

            <CommitteeRow
              number="02"
              tone="gold"
              watermark="laurel"
              title="Honorary Jury Members"
              subtitle="Distinguished Academic & Assessment Leadership"
              cta="Become an Honorary Jury Member"
              interest="Interested in contributing your expertise to academic excellence?"
              delay={100}
            >
              {jury.map((member) => (
                <MemberAvatar
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  institution={member.institution}
                  photo={member.photo}
                  ring="gold"
                />
              ))}
              <PlaceholderAvatar
                icon={<span className="text-2xl font-light leading-none">+</span>}
                title="The Jury is Growing"
                caption="More leaders joining soon"
                ring="gold"
              />
            </CommitteeRow>

            <CommitteeRow
              number="03"
              tone="navy"
              title="Chief Academic Ambassadors"
              subtitle="For School Leaders Shaping the Future"
              cta="Become a Chief Academic Ambassador"
              interest="Are you a school leader passionate about meaningful education?"
              delay={200}
            >
              <MemberAvatar
                name="Dr. Archana Nigam"
                role="Ex. Principal, DPS Kalyanpur"
                institution="Kanpur, Uttar Pradesh"
                photo="/images/advisors/archana-nigam.png"
              />
              <PlaceholderAvatar
                icon={<span className="text-2xl font-light leading-none">+</span>}
                title="The Council is Growing"
                caption="More leaders joining soon"
              />
            </CommitteeRow>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex w-full flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-page lg:py-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/advisory-emblem.png"
              alt=""
              aria-hidden="true"
              width={548}
              height={456}
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            />
            <div>
              <h2 className="font-serif text-[16px] font-medium sm:text-[18px]">
                Built on Expertise. Growing with Purpose.
              </h2>
              <p className="mt-1 max-w-[70ch] text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                Epoch Olympiad Foundation is building its Advisory Committee
                selectively, inviting distinguished academic and school leaders
                whose experience can meaningfully contribute to the quality,
                integrity and future direction of our work.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2.5 border-t border-white/15 pt-3 text-gold md:w-[220px] md:border-l md:border-t-0 md:pl-5 md:pt-0">
            <GroupIcon className="h-8 w-8 shrink-0" />
            <p className="font-serif text-[11px] leading-snug">
              Be a part of a mission to transform assessment, recognise true
              potential and shape the future of education.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
