import { Reveal } from "../Reveal";
import { ArrowRight, PlayIcon, UserIcon } from "../icons";

const leaders = [
  {
    name: "Dr. Neetu Bali",
    role: "Principal",
    school: "Ryan International School, Karnal",
    quote:
      "MY CCBee is a wonderful initiative. Now parents can see their child's daily performance.",
  },
  {
    name: "Ms. Ritu Kaushal",
    role: "Principal",
    school: "Cambridge School, Noida",
    quote:
      "Excellent initiative by Epoch. It covers all the areas of brain development.",
  },
  {
    name: "Dr. S. K. Singh",
    role: "Principal",
    school: "DPS, Ghaziabad",
    quote: "Now we can focus on execution rather than sorting.",
  },
];

function RailLabel({ children }: { children: string }) {
  return (
    <div>
      <p className="text-[12.5px] font-semibold text-navy lg:text-[13px]">
        {children}
      </p>
      <span className="mt-1.5 block h-px w-12 bg-gold/70" />
    </div>
  );
}

export function CCBeeVoices() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-10 lg:pb-14">
        <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8">
          <h2 className="text-center font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
            Voices That Inspire Us
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:gap-8">
            <div className="flex flex-col">
              <RailLabel>What School Leaders Say</RailLabel>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {leaders.map((l) => (
                  <div
                    key={l.name}
                    className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef2fb]">
                        <UserIcon
                          className="h-6 w-6 text-navy"
                          strokeWidth={1.6}
                        />
                      </span>
                      <div>
                        <h3 className="text-[12.5px] font-bold leading-snug text-navy lg:text-[13px]">
                          {l.name}
                        </h3>
                        <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                          {l.role}
                          <br />
                          {l.school}
                        </p>
                      </div>
                    </div>
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
                View More Testimonials <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="flex flex-col border-t border-slate-200 pt-7 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
              <RailLabel>Video Testimonials</RailLabel>

              <a
                href="#faq"
                aria-label="Play the MY CCBee school testimonial video"
                className="group relative mt-4 block overflow-hidden rounded-xl"
              >
                <span className="block aspect-video w-full bg-gradient-to-br from-navy via-navy-600 to-navy-800" />
                <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon className="h-5 w-5 text-navy" />
                </span>
                <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-navy/85 px-3 py-2 text-[10.5px] font-semibold text-white">
                  <PlayIcon className="h-3 w-3" />
                  0:00 / 1:32
                </span>
              </a>

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
