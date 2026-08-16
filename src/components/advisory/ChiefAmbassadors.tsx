import { Reveal } from "../Reveal";
import { AdvisorySectionHeading, ByInvitationBadge } from "./decor";

/* Every member photo intentionally points at the same asset — swap in the
   individual portraits here when they are supplied. */
const PORTRAIT = "/images/advisors/prof-ajai-shukla.webp";

const ambassadors = [
  {
    name: "Dr. Arvind Malhotra",
    role: "Principal",
    school: "Sunrise International School, Bengaluru",
    body: "Passionate about innovation in learning and building future-ready schools.",
  },
  {
    name: "Ms. Kavita Sharma",
    role: "Director",
    school: "Greenfield World School, Pune",
    body: "Champion of holistic education and student well-being.",
  },
  {
    name: "Dr. Rajiv Menon",
    role: "Principal",
    school: "Oxford Global School, Hyderabad",
    body: "Focused on academic excellence and leadership development.",
  },
  {
    name: "Ms. Neha Bhatia",
    role: "Principal",
    school: "The Heritage School, Chandigarh",
    body: "Committed to building innovative and inclusive learning communities.",
  },
];

export function ChiefAmbassadors() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 py-7 sm:px-6 md:px-12 lg:px-page lg:py-9 2xl:py-11">
        <AdvisorySectionHeading label="Chief Academic Ambassadors" />

        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:mt-3">
          <p className="font-serif text-[14px] text-navy/85 sm:text-[16px] lg:text-[18px]">
            Distinguished School Leadership
          </p>
          <ByInvitationBadge />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-7 lg:gap-5 xl:grid-cols-4">
          {ambassadors.map(({ name, role, school, body }, i) => (
            <Reveal key={name} delay={i * 90}>
              <article className="flex h-full gap-3.5 rounded-xl border border-[#eee7d8] bg-white p-3.5 shadow-[0_2px_14px_-10px_rgba(11,28,63,0.18)] sm:gap-4 sm:p-4 lg:p-4.5">
                <div className="w-[34%] max-w-[140px] shrink-0">
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={PORTRAIT}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-[14px] font-medium leading-snug text-navy sm:text-[15.5px] xl:text-[14px] 2xl:text-[16px]">
                    {name}
                  </h3>
                  <p className="mt-1 text-[10.5px] leading-snug text-gold-dark sm:text-[11.5px] xl:text-[10.5px] 2xl:text-[12px]">
                    Chief Academic Ambassador
                  </p>
                  <p className="mt-2 text-[10.5px] leading-snug text-slate-600 sm:text-[11.5px] xl:text-[10.5px] 2xl:text-[12px]">
                    {role}
                    <br />
                    {school}
                  </p>
                  <p className="mt-2 text-[10.5px] leading-relaxed text-slate-500 sm:text-[11.5px] xl:text-[10.5px] 2xl:text-[12px]">
                    {body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
