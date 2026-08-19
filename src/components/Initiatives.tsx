import { ArrowRight } from "./icons";
import { Reveal } from "./Reveal";

const cards: {
  img: string;
  /** Crop anchor, for artwork whose subject sits away from the centre. */
  imgPosition?: string;
  title: string;
  tagline: string;
  audience?: string;
  desc: string;
  cta: string;
  href: string;
}[] = [
  {
    img: "/images/card-brainiac.png",
    title: "Brainiac Global",
    tagline: "Building Thinking Minds from the Earliest Years",
    audience: "For Kindergarten | Ages 2–5",
    desc: "An early-learning initiative designed to nurture curiosity, observation, reasoning, problem-solving and foundational thinking through engaging experiences and brain-boosting assessment.",
    cta: "Learn More",
    href: "/initiatives/brain-booster-olympiad",
  },
  {
    img: "/images/card-olympiad.png",
    title: "Epoch Olympiad",
    tagline: "International Olympiads & Future-Ready Learning Platforms",
    audience: "For Classes 1–10",
    desc: "A research-informed learning and assessment initiative designed to strengthen conceptual understanding, analytical reasoning, critical thinking and future-ready skills through international Olympiads and engaging learning platforms.",
    cta: "Explore",
    href: "/initiatives/epoch-olympiad",
  },
  {
    img: "/images/ccbee-dashboard.webp",
    imgPosition: "object-top",
    title: "MY CCBee",
    tagline: "Performance Tracking & Booster Platform for Schools",
    desc: "A performance tracking and booster platform that connects daily school activities with meaningful student insights, helping parents and schools monitor progress, identify growth areas and take timely action.",
    cta: "Explore Platform",
    href: "/initiatives/my-ccbee",
  },
];

export function Initiatives() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-14 lg:py-24 xl:py-32">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
            <a
              href={c.href}
              className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-[transform,box-shadow] duration-300"
            >
              <div className="relative h-44 lg:h-52 bg-slate-100">
                <img
                  src={c.img}
                  alt={c.title}
                  className={`w-full h-full object-cover ${c.imgPosition ?? ""}`}
                />
              </div>
              {/* Column layout with an auto-margin CTA keeps the three links on
                  one baseline even though the descriptions differ in length. */}
              <div className="flex flex-1 flex-col p-5 lg:p-6">
                <h3 className="font-serif text-[19px] lg:text-[23px] xl:text-[26px] font-medium text-navy">
                  {c.title}
                </h3>
                <p className="mt-1 text-[13px] lg:text-[14.5px] xl:text-[15.5px] font-medium leading-snug text-navy/75">
                  {c.tagline}
                </p>
                {c.audience && (
                  <p className="mt-1 text-[12px] lg:text-[13px] xl:text-[13.5px] font-semibold uppercase tracking-[0.08em] text-gold-dark">
                    {c.audience}
                  </p>
                )}
                <p className="mt-3 text-[13px] lg:text-[15px] xl:text-[16px] leading-relaxed xl:leading-7 text-slate-600">
                  {c.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] lg:text-[15px] xl:text-[16px] xl:pt-5 font-semibold text-navy transition-colors group-hover:text-gold-dark">
                  {c.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
