import { Reveal } from "../Reveal";
import { ArrowRight, BuildingIcon, UserIcon } from "../icons";
import { type IconType } from "./ui";

const PHONE_NUMBER = "9807714979";
const WHATSAPP_HREF = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
  "Hello, I would like a sample Academic Health Report."
)}`;

const audiences: {
  icon: IconType;
  title: string;
  desc: string;
  cta: string;
  href: string;
  primary?: boolean;
}[] = [
  {
    icon: UserIcon,
    title: "For parents",
    desc: "See a full sample edition for your child's stage and understand exactly what the report will tell you before you register.",
    cta: "Request a sample report",
    href: WHATSAPP_HREF,
    primary: true,
  },
  {
    icon: BuildingIcon,
    title: "For schools",
    desc: "Bring the report to a whole cohort and receive aggregated views of how thinking is distributed across your classrooms.",
    cta: "Register your school",
    href: `tel:+91${PHONE_NUMBER}`,
  },
];

export function ReportCTA() {
  return (
    <section id="request" className="scroll-mt-4 bg-navy-800">
      <div className="mx-auto w-full px-4 py-14 sm:px-6 md:px-12 lg:px-page lg:py-20">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-4xl font-serif text-[26px] font-medium leading-snug text-white lg:text-[38px] xl:text-[44px]">
            See what a report says about your child
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-300 lg:text-[16px]">
            Every edition is a full diagnostic document, not a summary sheet. Ask
            for the sample that matches your child&apos;s stage and read it end to
            end.
          </p>
        </Reveal>

        <div className="mx-auto mt-9 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl border border-white/12 bg-white/5 p-5 lg:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-navy/40">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-serif text-[19px] font-medium text-white lg:text-[22px]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300 lg:text-[13.5px]">
                    {a.desc}
                  </p>
                  <div className="mt-auto pt-6">
                    <a
                      href={a.href}
                      target={a.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        a.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-[12.5px] font-semibold transition-colors lg:text-[14px] ${
                        a.primary
                          ? "bg-gold text-navy hover:bg-gold-dark"
                          : "border border-white/25 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {a.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
