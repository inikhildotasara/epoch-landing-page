import Image from "next/image";
import { Reveal } from "../Reveal";
import { ArrowRight, PlayIcon } from "../icons";

const leaders = [
  {
    name: "Mr. Ganesh Tiwari",
    role: "Principal",
    school: "Seth Anandram Jaipuria School, Cantt Kanpur",
    photo: "/images/leaders/ganesh-tiwari.webp",
    quote:
      "We are deeply thankful to Epoch Olympiad for designing the Mathematics Olympiad with such a refreshing focus on thinking rather than routine calculation. The thoughtfully crafted questions inspired our students to apply concepts, reason logically, and view familiar problems from new perspectives. This approach gave our learners a truly meaningful opportunity to challenge themselves beyond the boundaries of the regular classroom. For this, we extend our heartfelt gratitude to Epoch Olympiad for nurturing curiosity and critical thinking in such a purposeful way.",
  },
  {
    name: "Mrs. Hameeda Kadar",
    role: "Principal",
    school: "M.E.S. Indian School, Qatar",
    photo: "/images/leaders/hameeda-kadar.webp",
    quote:
      "We sincerely thank Epoch Olympiad for conducting the International Test of Science & Technology in such a purposeful way. It gave our students the chance to move beyond simply remembering facts and instead begin applying what they learn. The assessment nurtured curiosity, strengthened conceptual understanding, and encouraged scientific reasoning — qualities that truly matter in education. We deeply value such experiences because they help children grow into more confident and capable learners. For this, we extend our heartfelt gratitude to Epoch Olympiad.",
  },
  {
    name: "Rev. Fr. Santosh",
    role: "Principal",
    school: "Nirmal Vidyalaya, Jagdalpur",
    photo: "/images/leaders/fr-santosh.webp",
    quote:
      "We are truly grateful to Epoch Olympiad for creating an experience that goes far beyond competition. The real gift lies in giving our students a chance to understand concepts deeply, apply their knowledge meaningfully, and recognize areas for growth. Epoch Olympiad provided exactly that platform to our learners. With all four exams designed to nurture learning and critical thinking, the journey has been enriching not only for students but also for us as educators. It is rare to find an Olympiad that values growth over grades, and for this, we extend our heartfelt thanks to Epoch Olympiad.",
  },
  {
    name: "Dr. Deepika Bhambani",
    role: "Principal",
    school: "Amity International School, Gwalior",
    photo: "/images/leaders/deepika-bhambani.webp",
    quote:
      "The Aptitude Olympiad brought attention to an important aspect of learning that is often overlooked—how students think, reason and approach unfamiliar situations. We found the experience valuable because it encouraged children to analyse problems instead of simply looking for a memorised answer. For this, we extend our heartfelt thanks to Epoch Olympiad for nurturing deeper reasoning skills and giving our students a platform to grow as confident problem-solvers.",
  },
  {
    name: "Mr. Radhakrishnan C.",
    role: "Principal",
    school: "United Indian School, Kuwait",
    photo: "/images/leaders/radhakrishnan-c.webp",
    quote:
      "From a school leader's perspective, an assessment becomes truly valuable when it provides insights that can support learning. Epoch Olympiad's approach encourages students to participate, think independently and challenge themselves, while giving schools a broader view of their learners' capabilities.",
  },
  {
    name: "Ms. Jinu Mathew",
    role: "Principal",
    school: "Pragati Vidya Peeth, Gwalior",
    photo: "/images/leaders/jinu-mathew.webp",
    quote:
      "We are sincerely thankful to Epoch Olympiad for organizing the General Knowledge Olympiad, which created a wonderful opportunity for our students to connect classroom learning with the world around them. The assessment encouraged curiosity, awareness, and the habit of exploring beyond textbooks. Such experiences make learning more meaningful and engaging for children, and we deeply appreciate Epoch Olympiad for providing this enriching platform.",
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
          <h2 className="text-center font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
            Voices That Inspire Us
          </h2>
          <p className="mt-3 text-center text-[12px] font-semibold text-navy lg:text-[12.5px]">
            What School Leaders Say
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center gap-3.5">
                  <Image
                    src={l.photo}
                    alt={l.name}
                    width={320}
                    height={320}
                    sizes="(min-width: 1024px) 112px, 96px"
                    className="h-24 w-24 shrink-0 rounded-xl object-cover ring-1 ring-slate-200 lg:h-28 lg:w-28"
                  />
                  <div className="min-w-0">
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

          <div className="mt-8 border-t border-slate-200 pt-7">
            <h2 className="text-center font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
              Video Testimonials
            </h2>
            <p className="mt-3 text-center text-[12px] font-semibold text-navy lg:text-[12.5px]">
              Hear It From Our Schools
            </p>

            <div className="mx-auto mt-3 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
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
        </Reveal>
      </div>
    </section>
  );
}
