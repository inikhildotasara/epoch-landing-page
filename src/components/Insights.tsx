import Link from "next/link";
import { ArrowRight } from "./icons";
import { Reveal } from "./Reveal";

/* Add `slug` once the article exists in src/content/articles — the card then
   links to /articles/<slug> instead of showing as upcoming. */
const articles: { img: string; title: string; slug?: string }[] = [
  {
    img: "/images/article-1.png",
    title: "How Cognitive Intelligence Differs from Academic Intelligence",
    slug: "cognitive-vs-academic-intelligence",
  },
  {
    img: "/images/article-2.png",
    title: "Why Marks Alone Cannot Measure Learning",
    slug: "why-marks-alone-cannot-measure-learning",
  },
  {
    img: "/images/article-3.png",
    title: "The Future of International Assessments",
  },
  {
    img: "/images/article-4.png",
    title: "Balanced Diet for the Brain",
  },
  {
    img: "/images/article-5.png",
    title: "Academic Health Report Explained",
  },
  {
    img: "/images/article-6.png",
    title: "How Kindergarten Cognitive Assessment Works",
  },
];

export function Insights() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-14 lg:py-24 xl:py-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] lg:text-[12px] font-semibold tracking-[0.2em] text-gold-dark">
              THOUGHT LEADERSHIP
            </p>
            <h2 className="mt-2 font-serif text-fluid-1 font-medium text-navy">
              Insights. Research. Impact.
            </h2>
          </div>
          <Link
            href="/articles"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] lg:text-[15px] font-semibold text-navy hover:text-gold-dark transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Six across only from xl. At 1024 the page gutter leaves ~850px, which
            split six ways gave 120px cards — too narrow to read. */}
        <div className="mt-8 lg:mt-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-6">
          {articles.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 80}
              className="group flex h-full flex-col"
            >
              <div className="h-28 lg:h-36 xl:h-44 rounded-lg overflow-hidden bg-slate-100">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-[12.5px] lg:text-[15px] xl:text-[16px] font-semibold text-navy leading-snug">
                {a.title}
              </h3>
              {/* mt-auto pins the link to the card foot so it stays level across
                  a row whether the title runs to one line or three. */}
              {a.slug ? (
                <Link
                  href={`/articles/${a.slug}`}
                  className="mt-auto w-fit pt-2 inline-flex items-center gap-1 text-[11.5px] lg:text-[13px] font-semibold text-gold-dark hover:text-navy transition-colors"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <span className="mt-auto w-fit pt-2 text-[11.5px] lg:text-[13px] font-medium text-slate-400">
                  Coming soon
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
