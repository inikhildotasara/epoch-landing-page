import { Reveal } from "../Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, PlayIcon, UserIcon, YoutubeIcon } from "../icons";
import { siteBrands } from "@/content/site";

const principals = [
  {
    quote:
      "Brainiac Global is a wonderful initiative that strengthens the thinking abilities of young learners in a joyful way.",
    name: "Mr. Rakesh Sharma",
    role: "Principal",
    school: "Spring Dale School, Lucknow",
  },
  {
    quote:
      "The assessments are child-friendly and the insights help us support each child better in early learning.",
    name: "Ms. Neha Verma",
    role: "Principal",
    school: "Excelsior Kids, Indore",
  },
  {
    quote:
      "A unique and much needed cognitive assessment for kindergarten students. Highly recommended!",
    name: "Mr. Anil Mehta",
    role: "Principal",
    school: "Bright Future School, Jaipur",
  },
];

const videos = [
  { duration: "0:40", school: ["Delhi Public School,", "Gurugram"] },
  { duration: "0:40", school: ["Podar International", "School, Mumbai"] },
  { duration: "1:10", school: ["Ryan International", "School, Bengaluru"] },
];

function ColumnLabel({ children }: { children: string }) {
  return (
    <h3 className="text-[11.5px] font-bold uppercase tracking-[0.06em] text-navy lg:text-[12px]">
      {children}
    </h3>
  );
}

export function BrainiacVoices() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <SectionHeading>Voices That Inspire Us</SectionHeading>

          {/* The halves only split at 2xl: three quote cards beside three video
              thumbnails leaves the quotes too narrow to read on mid-size
              desktops. The testimonial half also takes the extra width. */}
          <div className="mt-7 grid grid-cols-1 gap-8 lg:mt-8 2xl:grid-cols-[1.45fr_1fr] 2xl:gap-8">
            <div className="flex flex-col">
              <ColumnLabel>Principal Testimonials</ColumnLabel>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {principals.map((p, i) => (
                  <Reveal
                    key={p.name}
                    delay={i * 70}
                    className="flex h-full flex-col"
                  >
                    <div className="flex gap-2.5">
                      <span className="flex h-12 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eef2fb]">
                        <UserIcon
                          className="h-5 w-5 text-navy"
                          strokeWidth={1.6}
                        />
                      </span>
                      <p className="text-[11.5px] leading-snug text-slate-600 lg:text-[12px]">
                        &ldquo;{p.quote}&rdquo;
                      </p>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-[12px] font-bold text-navy lg:text-[12.5px]">
                        {p.name}
                      </h4>
                      <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                        {p.role}
                        <br />
                        {p.school}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <a
                href="#"
                className="mx-auto mt-6 flex w-fit items-center gap-2 text-[12.5px] font-semibold text-navy transition-colors hover:text-gold-dark lg:text-[13px]"
              >
                View More Testimonials{" "}
                <ArrowRight className="h-3.5 w-3.5 text-gold-dark" />
              </a>
            </div>

            <div className="flex flex-col border-t border-slate-200 pt-7 2xl:border-l 2xl:border-t-0 2xl:pl-8 2xl:pt-0">
              <ColumnLabel>Video Testimonials</ColumnLabel>

              {/* Capped while the column runs full width, so the thumbnails do
                  not blow up to twice their intended size. */}
              <div className="mt-4 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 2xl:max-w-none">
                {videos.map((v, i) => (
                  <Reveal
                    key={v.school.join(" ")}
                    delay={i * 70}
                    className="flex h-full flex-col"
                  >
                    <a
                      href="#"
                      aria-label={`Play video testimonial from ${v.school.join(" ")}`}
                      className="group relative block overflow-hidden rounded-xl"
                    >
                      <span className="block aspect-[4/3] w-full bg-gradient-to-br from-navy via-navy-600 to-navy-800" />
                      <span className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-md bg-[#6d4aa7] transition-transform duration-300 group-hover:scale-110">
                        <PlayIcon className="h-3.5 w-3.5 text-white" />
                      </span>
                      <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                        {v.duration}
                      </span>
                    </a>
                    <p className="mt-2.5 text-center text-[11px] leading-snug text-navy lg:text-[11.5px]">
                      {v.school[0]}
                      <br />
                      {v.school[1]}
                    </p>
                  </Reveal>
                ))}
              </div>

              <a
                href={siteBrands.brainiac.youtubeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-6 flex w-fit items-center gap-2 text-[12.5px] font-semibold text-navy transition-colors hover:text-gold-dark lg:text-[13px]"
              >
                Watch More on YouTube{" "}
                <ArrowRight className="h-3.5 w-3.5 text-gold-dark" />
                <YoutubeIcon className="h-4 w-4 text-[#ff0000]" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
