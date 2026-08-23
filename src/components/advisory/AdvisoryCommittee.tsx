import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, GroupIcon, TrophyPinIcon } from "../icons";
import { Reveal } from "../Reveal";

const portraits = {
  meena: "/images/advisors/Dr. Archana Nigam.png",
  arvind: "/images/advisors/prof-anil-kumar.webp",
  kavita: "/images/advisors/Prof. (Dr.) Leena Rani.png",
};

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
      className={`mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-md px-3.5 py-2.5 text-center text-[11px] font-semibold leading-tight transition-colors sm:text-[11.5px] ${
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
      className="mt-3 flex items-center gap-2.5 rounded-lg border border-[#eee7d8] bg-white px-3 py-3 transition-colors hover:bg-[#fffaf0] sm:px-3.5"
    >
      <GroupIcon
        className={`h-7 w-7 shrink-0 ${
          tone === "gold" ? "text-gold-dark" : "text-navy"
        }`}
      />
      <p className="min-w-0 flex-1 text-[11px] leading-snug text-slate-600">
        {children}
      </p>
      <ArrowRight
        className={`h-4 w-4 shrink-0 ${
          tone === "gold" ? "text-gold-dark" : "text-navy"
        }`}
      />
    </Link>
  );
}

function PatronAwardIcon() {
  return (
    <div className="relative h-[7rem] w-[8.5rem]">
      <img
        src="/images/patron-laurel-wreath.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain mix-blend-multiply"
      />
      <svg
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-full text-navy"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.5 10.7 5 8 5.6l2 1.9-.5 2.7L12 8.9l2.5 1.3-.5-2.7 2-1.9-2.7-.6L12 2.5Z" fill="#d99b19" />
        <circle cx="12" cy="13" r="3.2" />
        <path d="M5.5 22c.5-4.4 2.7-6.4 6.5-6.4s6 2 6.5 6.4h-13Z" />
      </svg>
    </div>
  );
}

function PatronColumn() {
  return (
    <Reveal className="flex h-full flex-col">
      <article className="relative flex h-full flex-col rounded-xl border border-[#d9dfeb] bg-[#f8faff] p-4.5 pt-8 text-center sm:p-6 sm:pt-9">
        <span className="absolute left-1/2 top-0 flex h-7 w-9 -translate-x-1/2 -translate-y-px items-center justify-center rounded-b bg-navy font-serif text-[12px] text-white">
          01
        </span>
        <div className="mx-auto flex h-[7rem] -translate-y-2 items-center justify-center">
          <PatronAwardIcon />
        </div>
        <h3 className="mt-2 font-serif text-[16px] font-semibold uppercase leading-tight text-navy sm:text-[17px]">
          Patron-in-Chief
        </h3>
        <span className="mx-auto mt-2 h-px w-12 bg-gold" />
        <p className="mt-3 font-serif text-[15px] font-medium leading-snug text-navy sm:text-[16px]">
          Reserved for
          <br />
          Distinguished Institutional
          <br />
          Leadership
        </p>
        <p className="mt-4 text-[12px] leading-relaxed text-slate-600 sm:text-[12.5px]">
          This position is reserved for an eminent institutional leader whose
          experience and stature can provide exceptional guidance to the
          Foundation&apos;s long-term educational vision and national or
          international academic impact.
        </p>
        <div className="mt-auto pt-5">
          <ActionLink tone="gold">Position Open by Invitation</ActionLink>
        </div>
      </article>
      <InterestStrip>
        Know a distinguished leader who could contribute to this vision?
      </InterestStrip>
    </Reveal>
  );
}

function JuryColumn() {
  return (
    <Reveal delay={100} className="flex h-full flex-col">
      <article className="relative flex h-full flex-col rounded-xl border border-[#eee7d8] bg-[#fffdf8] p-4.5 pt-8 sm:p-6 sm:pt-9">
        <span className="absolute left-1/2 top-0 flex h-7 w-9 -translate-x-1/2 -translate-y-px items-center justify-center rounded-b bg-gold font-serif text-[12px] text-navy">
          02
        </span>
        <h3 className="mt-2 text-center font-serif text-[16px] font-semibold uppercase leading-tight text-navy sm:text-[17px]">
          Honorary Jury Members
        </h3>
        <p className="mt-2 text-center font-serif text-[13px] text-gold-dark">
          Distinguished Academic &amp;
          <br />
          Assessment Leadership
        </p>
        <div className="mt-4 divide-y divide-[#eee7d8]">
          {[
            ["Meena Kapoor", "Former Professor & Head, Department of Education", portraits.meena],
            ["Arvind Malhotra", "Former Dean (Academics), Expert in Educational Research & Analytics", portraits.arvind],
          ].map(([name, role, photo]) => (
            <div key={name} className="flex gap-2.5 py-2 first:pt-0 last:pb-1">
              <img
                src={photo}
                alt={`Prof. (Dr.) ${name}`}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-md bg-white object-contain"
              />
              <div className="text-left">
                <h4 className="font-serif text-[12px] font-semibold text-navy">
                  Prof. (Dr.) {name}
                </h4>
                <p className="mt-1 text-[10.5px] leading-snug text-slate-600">{role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-lg bg-[#fff5d9] px-3 py-2.5 text-center">
          <p className="font-serif text-[12px] font-semibold text-gold-dark">The Jury is Growing</p>
          <p className="mt-1 text-[10.5px] leading-snug text-slate-600">
            Additional distinguished academic leaders will be invited as the
            Foundation expands its academic council.
          </p>
        </div>
        <div className="pt-3">
          <ActionLink tone="gold">Become an Honorary Jury Member</ActionLink>
        </div>
      </article>
      <InterestStrip tone="gold">
        Interested in contributing your expertise to academic excellence?
      </InterestStrip>
    </Reveal>
  );
}

function AmbassadorColumn() {
  return (
    <Reveal delay={180} className="flex h-full flex-col">
      <article className="relative flex h-full flex-col rounded-xl border border-[#d9dfeb] bg-[#f8faff] p-4.5 pt-8 text-center sm:p-6 sm:pt-9">
        <span className="absolute left-1/2 top-0 flex h-7 w-9 -translate-x-1/2 -translate-y-px items-center justify-center rounded-b bg-navy font-serif text-[12px] text-white">
          03
        </span>
        <h3 className="mt-2 text-center font-serif text-[16px] font-semibold uppercase leading-tight text-navy sm:text-[17px]">
          Chief Academic
          <br />
          Ambassadors
        </h3>
        <p className="mt-2 text-center font-serif text-[13px] text-gold-dark">
          Distinguished School Leadership
        </p>
        <div className="mt-4 flex gap-3 border-b border-[#dfe4ed] pb-3">
          <img
            src={portraits.kavita}
            alt="Dr. Kavita Sharma"
            loading="lazy"
            className="h-16 w-16 shrink-0 rounded-md bg-white object-contain"
          />
          <div className="text-left">
            <h4 className="font-serif text-[12px] font-semibold text-navy">Dr. Kavita Sharma</h4>
            <p className="mt-1 text-[10.5px] leading-snug text-slate-600">
              Principal
              <br />
              Delhi Public School
              <br />
              Ghaziabad
            </p>
          </div>
        </div>
        <div className="mt-auto rounded-lg bg-[#edf3ff] px-3 py-2.5 text-center">
          <p className="font-serif text-[12px] font-semibold text-navy">The Council is Growing</p>
          <p className="mt-1 text-[10.5px] leading-snug text-slate-600">
            We are inviting a select group of renowned school leaders who share
            our commitment to advancing thinking, application and future readiness.
          </p>
        </div>
        <div className="pt-3">
          <ActionLink>Become a Chief Academic Ambassador</ActionLink>
        </div>
      </article>
      <InterestStrip>
        Are you a school leader passionate about meaningful education?
      </InterestStrip>
    </Reveal>
  );
}

export function AdvisoryCommittee() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 py-6 sm:px-6 md:px-12 lg:px-page lg:py-8">
          <div className="text-center">
            <h2 className="font-serif text-[20px] font-medium leading-tight text-navy sm:text-[22px] lg:text-[25px]">
              Our Advisory Committee
            </h2>
            <p className="mx-auto mt-1 max-w-[58ch] text-[10.5px] leading-relaxed text-slate-600 sm:text-[11.5px]">
              Independent voices helping strengthen assessment, academic integrity
              <br className="hidden sm:block" /> and the future of cognitive education.
            </p>
          </div>
          <div className="mt-5 grid items-stretch gap-3.5 sm:grid-cols-3 lg:mt-6 lg:gap-4">
            <PatronColumn />
            <JuryColumn />
            <AmbassadorColumn />
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex w-full flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-page lg:py-6">
          <div className="flex items-center gap-3">
            {/* <TrophyPinIcon className="h-10 w-10 shrink-0 text-gold sm:h-12 sm:w-12" /> */}
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
