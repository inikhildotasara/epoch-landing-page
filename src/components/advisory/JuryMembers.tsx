import { Reveal } from "../Reveal";
import { AdvisorySectionHeading } from "./decor";

const juryMembers = [
  {
    name: "Prof. (Dr.) Anil Kumar",
    role: "Retd. Professor, Department of Chemical Engineering",
    institution:
      "Indian Institute of Technology (IIT) Kanpur, Uttar Pradesh, India",
    photo: "/images/advisors/prof-anil-kumar.webp",
  },
  {
    name: "Prof. (Dr.) Keshav Kant",
    role: "Retd. Professor, Department of Mechanical Engineering",
    institution:
      "Indian Institute of Technology (IIT) Kanpur, Uttar Pradesh, India",
    photo: "/images/advisors/prof-keshav-kant.webp",
  },
  {
    name: "Prof. (Dr.) Joydip Dhar",
    role: "Ph. D., IIT Kanpur · Professor, Applied Sciences Department",
    institution: "IITM Gwalior, M. P.",
    photo: "/images/advisors/Prof. (Dr.) Jaydeep Dhar.png",
  },
  {
    name: "Prof. (Dr.) A. K. Mishra",
    role: "Ph. D., IIT Kanpur · Sr. Professor, Dept. of Mathematics",
    institution: "B.H.U., Varanasi (U. P.)",
    photo: "/images/advisors/Prof. (Dr.) A. K. Mishra.png",
  },
];

export function JuryMembers() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 py-7 sm:px-6 md:px-12 lg:px-page lg:py-10 2xl:py-12">
        <AdvisorySectionHeading
          label="Jury Members"
          subtitle="Distinguished Academic & Assessment Leaders"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {juryMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#eee7d8] bg-white p-4 text-center shadow-[0_2px_18px_-8px_rgba(11,28,63,0.12)] sm:p-5">
                <div className="flex min-h-[220px] items-center justify-center rounded-lg bg-slate-100 px-3 py-3 ring-1 ring-black/5 sm:min-h-[240px] lg:min-h-[230px] xl:min-h-[260px]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-[260px] w-full object-contain sm:max-h-[280px] lg:max-h-[270px] xl:max-h-[300px]"
                  />
                </div>
                <h3 className="mt-4 font-serif text-[16px] font-semibold leading-snug text-navy sm:text-[17px]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[11.5px] leading-relaxed text-gold-dark sm:text-[12px]">
                  {member.role}
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:text-[11.5px]">
                  {member.institution}
                </p>
                <div className="mt-auto pt-4">
                  <span className="mx-auto block h-px w-8 bg-gold/70" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
