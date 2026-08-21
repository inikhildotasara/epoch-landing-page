import { Reveal } from "../Reveal";
import {
  AdvisorySectionHeading,
  ByInvitationBadge,
  LaurelBranch,
} from "./decor";

/* Members fall back to this stand-in until their own portrait is supplied. */
const PORTRAIT = "/images/advisors/prof-ajai-shukla.webp";

type JuryMember = { name: string; photo?: string; body: string };

const juryMembers: JuryMember[] = [
  {
    name: "Prof. (Dr.) Anil Kumar",
    photo: "/images/advisors/prof-anil-kumar.webp",
    body: "Accomplished academic leader with extensive experience in higher education and academic assessment.",
  },
  {
    name: "Prof. Keshav Kant",
    photo: "/images/advisors/prof-keshav-kant.webp",
    body: "Distinguished academic with extensive experience in teaching, evaluation and academic assessment.",
  },
  {
    name: "Prof. (Dr.) Joydip Dhar",
    photo: "/images/advisors/Prof. (Dr.) Jaydeep Dhar.png",
    body: "Ph. D., IIT Kanpur. Professor, Applied Sciences Department, IITM Gwalior, M. P.",
  },
  {
    name: "Prof. (Dr.) A. K. Mishra",
    photo: "/images/advisors/Prof. (Dr.) A. K. Mishra.png",
    body: "Ph. D., IIT Kanpur. Sr. Professor, Dept. of Mathematics, B.H.U., Varanasi (U. P.).",
  },
  {
    name: "Dr. Meena Kapoor",
    body: "Former National Academic Coordinator, CBSE. Specialist in school assessment and academic standards.",
  },
];

function PatronCard() {
  return (
    <Reveal className="h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-xl bg-navy p-5 text-white ring-1 ring-white/10 sm:p-6 lg:p-7">
        <LaurelBranch className="pointer-events-none absolute -right-8 top-1/2 hidden h-[58%] w-auto -translate-y-1/2 text-gold/22 sm:block" />

        <header className="relative text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white lg:text-[12.5px]">
            Patron-in-Chief
          </p>
          <p className="mt-1.5 font-serif text-[14px] text-slate-200 sm:text-[15px] lg:text-[17px]">
            Distinguished Institutional Leadership
          </p>
          <ByInvitationBadge variant="outline" className="mt-3" />
        </header>

        <div className="relative mt-5 flex flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 lg:mt-6">
          <div className="w-full shrink-0 sm:w-[42%] sm:max-w-[240px]">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-navy-700 ring-1 ring-white/10">
              <img
                src={PORTRAIT}
                alt="Prof. R. K. Mehra"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="font-serif text-[21px] font-medium leading-tight text-white sm:text-[22px] lg:text-[26px] 2xl:text-[29px]">
              Prof. R. K. Mehra
            </h3>
            <p className="mt-2 font-serif text-[13px] leading-snug text-gold lg:text-[14.5px] 2xl:text-[15.5px]">
              Former Director, Indian Institute of Technology, Delhi
            </p>
            <p className="mt-3.5 text-[12px] leading-relaxed text-slate-300 lg:mt-4 lg:text-[13px]">
              Distinguished academician and institutional leader with decades of
              contribution to higher education and nation building.
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function JuryPanel() {
  return (
    <Reveal delay={120} className="h-full">
      <section className="flex h-full flex-col rounded-xl border border-[#ece3d2] bg-[#faf8f2] p-4 sm:p-5 lg:p-6">
        <AdvisorySectionHeading
          label="Honorary Jury Members"
          subtitle="Distinguished Academic & Assessment Leaders"
        />
        <div className="mt-3 flex justify-center">
          <ByInvitationBadge />
        </div>

        <div className="mt-5 grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-3 lg:mt-6 lg:gap-4">
          {juryMembers.map(({ name, photo, body }) => (
            <article
              key={name}
              className="flex flex-col rounded-lg border border-[#eee7d8] bg-white p-3 text-center lg:p-3.5"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-slate-100">
                <img
                  src={photo ?? PORTRAIT}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Type dips at sm and again at xl: those are the widths where the
                  cards first sit three-across and where the panel drops to half
                  the page, so each card is narrower than at the step before. */}
              <h3 className="mt-3 font-serif text-[13.5px] font-medium leading-snug text-navy sm:text-[12.5px] lg:text-[15px] xl:text-[13.5px] 2xl:text-[15.5px]">
                {name}
              </h3>
              <p className="mt-1 text-[10.5px] text-gold-dark lg:text-[11.5px] xl:text-[10.5px] 2xl:text-[12px]">
                Honorary Jury Member
              </p>
              <p className="mt-2 text-[10.5px] leading-relaxed text-slate-600 lg:text-[11.5px] xl:text-[10.5px] 2xl:text-[12px]">
                {body}
              </p>
              <div className="mt-auto pt-3.5">
                <span className="mx-auto block h-px w-8 bg-gold/70" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export function PatronAndJury() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full gap-5 px-4 py-7 sm:px-6 md:px-12 lg:gap-6 lg:px-page lg:py-9 xl:grid-cols-2 2xl:py-11">
        <PatronCard />
        <JuryPanel />
      </div>
    </section>
  );
}
