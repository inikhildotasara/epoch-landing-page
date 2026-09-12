import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import { SectionHeading } from "./SectionHeading";
import { ProgramBadge, olympiads, platforms } from "./programs";
import Link from "next/link";

const EXAM_HREF =
  "/initiatives/brain-booster-olympiad/international-brain-booster-olympiad";

export function Ecosystem() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal>
          <SectionHeading>Explore the Epoch Ecosystem</SectionHeading>
        </Reveal>

        {/* The two groups sit side by side only at xl; below that they stack so the
            learning-platform cards keep enough width for their strap lines. */}
        <div className="mt-7 grid grid-cols-1 gap-7 lg:mt-9 xl:grid-cols-[4.1fr_2.7fr] xl:gap-5">
          <div>
            <p className="mx-auto w-fit rounded-full bg-navy px-5 py-1.5 text-center text-[10.5px] font-semibold uppercase tracking-[0.06em] text-white lg:text-[11px]">
              A. International Olympiads (Assessment)
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-5 lg:grid-cols-4">
              {olympiads.map((p, i) => (
                <Reveal
                  key={p.code}
                  delay={i * 70}
                  className="flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center transition-shadow duration-300 hover:shadow-md"
                >
                  <ProgramBadge program={p} />
                  <h3
                    className="mt-3 font-serif text-[19px] font-semibold lg:text-[20px]"
                    style={{ color: p.titleColor ?? p.color }}
                  >
                    {p.code}
                  </h3>
                  <p className="mt-1 font-serif text-[11.5px] font-semibold leading-snug text-navy lg:text-[12px]">
                    {p.name[0]}
                    <br />
                    {p.name[1]}
                  </p>
                  <p className="mt-3 w-full text-left text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
                    {p.copy}
                  </p>
                  <Link
                    href={`${EXAM_HREF}?exam=${p.code.toLowerCase()}`}
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border px-4 py-2 text-[12px] font-semibold transition-colors hover:bg-slate-50"
                    style={{ color: p.color, borderColor: p.color }}
                  >
                    Explore More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="mx-auto w-fit rounded-full bg-gold-dark px-5 py-1.5 text-center text-[10.5px] font-semibold uppercase tracking-[0.06em] text-white lg:text-[11px]">
              B. Future-Focused Platforms (Learning)
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-5">
              {platforms.map((p, i) => (
                <Reveal
                  key={p.code}
                  delay={i * 70}
                  className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-5 py-5 transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="flex h-36 items-center justify-center sm:h-40">
                    <ProgramBadge
                      program={p}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="mt-3 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
                    {p.copy}
                  </p>
                  <Link
                    href={`${EXAM_HREF}?exam=${p.code.toLowerCase()}`}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border px-4 py-2 text-[12px] font-semibold transition-colors hover:bg-slate-50"
                    style={{ color: p.color, borderColor: p.color }}
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
