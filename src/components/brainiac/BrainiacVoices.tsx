import Image from "next/image";
import { Reveal } from "../Reveal";
import { ArrowRight, YoutubeIcon } from "../icons";
import { siteBrands } from "@/content/site";

const principals = [
  {
    heading: "Unlocking Hidden Potential",
    quote:
      "It’s the first time, we conducted Brainiac Brain Booster Olympiad in my school. Their Hand picked-picture based questions were very unique, interesting and innovative. Our teachers and parents really liked it.",
    name: "Mr. D. N. Rao",
    role: "Principal",
    school: "Indian School, Al Wadi Al Kabir, Oman",
    photo: "/images/brainiac-principals/Mr. D. N. Rao.png",
  },
  {
    heading: "Full Marks to Brainiac Team",
    quote:
      "Witnessing our students excel & showcase their talents on an international stage fills me with immense pride. I highly commend the organizers for providing such an enriching experience.",
    name: "Mrs. Monika Datt",
    role: "Principal",
    school: "GD Goenka Public School, Lucknow",
    photo: "/images/brainiac-principals/Mrs. Monika Datt.jpeg",
  },
  {
    heading: "First Ever Cognitive Based Assessment",
    quote:
      "Excellent platform for kindergarten to get into the International Level Competitions. My Children are very much motivated now.",
    name: "Mr. Rajan Sethi",
    role: "Principal",
    school: "Delhi Public School, Abu Road Rajasthan",
    photo: "/images/brainiac-principals/Mr. Rajan Sethi.jpeg",
  },
  {
    heading: "Enhancing I.Q. of Kids",
    quote:
      "The questions of Brainiac are very interesting and really helpful for brain development of kids. I really appreciate the hard work of entire Brainiac team.",
    name: "Mrs. Mary Litty",
    role: "Vice Principal",
    school: "United Indian School, Kuwait",
    photo: "/images/brainiac-principals/Mrs. Marry Litty.png",
  },
  {
    heading: "Innovative & Unique",
    quote:
      "As an educator, I recommend Brainiac Brain Booster exam to other schools. It not only boosts the confidence of children but also develop problem solving skills in a fun and engaging way.",
    name: "Mrs. Madhushree Bhaumik",
    role: "Vice Principal",
    school: "Seth Anandram Jaipuria School, Kanpur",
    photo: "/images/brainiac-principals/Madhushree Bhowmik.png",
  },
  {
    heading: "Fantastic Experience",
    quote:
      "Participating in the Brainiac International Brain Booster exam was a fantastic experience for our children. It instilled a sense of competition and achievement at a young age.",
    name: "Ms. Vrinda Bhattar",
    role: "Principal",
    school: "Kidzee Pre School, Bhatapara",
    photo: "/images/brainiac-principals/Ms. Vrinda Bhattar.jpeg",
  },
];

const videos = [
  {
    title: "Parents Testimonials 1",
    videoId: "rfGLPHyvOTw",
  },
  {
    title: "Parents Testimonials 2",
    videoId: "8r-rGZEGmeE",
  },
  {
    title: "School Leader Testimonials 1",
    videoId: "sEFpIqD12B4",
  },
];

export function BrainiacVoices() {
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
            {principals.map((p) => (
              <div
                key={p.name}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center gap-3.5">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    width={320}
                    height={320}
                    sizes="(min-width: 1024px) 112px, 96px"
                    className="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-slate-200 lg:h-28 lg:w-28"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[12.5px] font-bold leading-snug text-navy lg:text-[13px]">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                      {p.role}
                      <br />
                      {p.school}
                    </p>
                  </div>
                </div>
                <h4 className="mt-3 text-[12px] font-bold text-navy lg:text-[12.5px]">
                  {p.heading}
                </h4>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
                  &ldquo;{p.quote}&rdquo;
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

            <div className="mx-auto mt-3 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {videos.map((v) => (
                <div key={v.title} className="flex h-full flex-col">
                  <div className="overflow-hidden rounded-xl bg-navy">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.videoId}`}
                      title={v.title}
                      className="aspect-video w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="mt-2.5 text-[12.5px] font-bold text-navy lg:text-[13px]">
                    {v.title}
                  </h3>
                </div>
              ))}
            </div>

            <a
              href={siteBrands.brainiac.youtubeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[13px]"
            >
              Watch More Videos <ArrowRight className="h-3.5 w-3.5" />
              <YoutubeIcon className="h-4 w-4 text-[#ff0000]" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
