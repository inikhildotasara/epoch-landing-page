import { Reveal } from "../Reveal";
import { ArrowRight, PlayIcon, UserIcon } from "../icons";

const leaders = [
  {
    name: "Dr. Neetu Bali",
    role: "Principal",
    school: "Ryan International School, Delhi",
    quote:
      "MY CCBee is a wonderful initiative. Now parents can see their child's daily performance.",
  },
  {
    name: "Ms. Ritu Kaushal",
    role: "Principal",
    school: "The Vivekanand School",
    quote:
      "Excellent initiative by Epoch. It covers all the areas of brain development.",
  },
  {
    name: "Dr. S. K. Singh",
    role: "Principal",
    school: "DPS, Ghaziabad",
    quote:
      "Now we can focus on execution rather than sorting.",
  },
];

const videos = [
  {
    duration: "01:32",
    name: "Dr. Asha Sharma",
    role: "Principal, Lotus Valley International School",
  },
  {
    duration: "02:16",
    name: "Mr. Rakesh Verma",
    role: "Principal, Modern Public School",
  },
  {
    duration: "01:41",
    name: "Mrs. Poonam Arora",
    role: "Principal, Kundlas International",
  },
];

export function Voices() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-[#e0759f]/70 px-5 py-6 lg:px-7 lg:py-7">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-7">
            <div>
              <h2 className="text-center font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
                Voices That Inspire Us
              </h2>
              <p className="mt-3 text-[12px] font-semibold text-navy lg:text-[12.5px]">
                What School Leaders Say
              </p>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {leaders.map((l) => (
                  <div
                    key={l.name}
                    className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef2fb]">
                      <UserIcon className="h-6 w-6 text-navy" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-3 text-[12.5px] font-bold text-navy lg:text-[13px]">
                      {l.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                      {l.role}
                      <br />
                      {l.school}
                    </p>
                    <p className="mt-3 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
                      &ldquo;{l.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#faq"
                className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-md border border-navy px-5 py-2.5 text-[12.5px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white lg:text-[13px]"
              >
                More Testimonials <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="border-t border-slate-200 pt-7 xl:border-l xl:border-t-0 xl:pl-7 xl:pt-0">
              <h2 className="text-center font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
                Video Testimonials
              </h2>
              <p className="mt-3 text-[12px] font-semibold text-navy lg:text-[12.5px]">
                Hear It From Our Schools
              </p>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {videos.map((v) => (
                  <div key={v.name} className="flex h-full flex-col">
                    <a
                      href="#faq"
                      aria-label={`Play video testimonial by ${v.name}`}
                      className="group relative block overflow-hidden rounded-xl"
                    >
                      <span className="block aspect-[4/3] w-full bg-gradient-to-br from-navy via-navy-600 to-navy-800" />
                      <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform duration-300 group-hover:scale-110">
                        <PlayIcon className="h-4 w-4 text-navy" />
                      </span>
                      <span className="absolute bottom-2 left-2 rounded bg-navy/85 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                        {v.duration}
                      </span>
                    </a>
                    <h3 className="mt-2.5 text-[12.5px] font-bold text-navy lg:text-[13px]">
                      {v.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                      {v.role}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#faq"
                className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[13px]"
              >
                Watch More Videos <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
