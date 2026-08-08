import { ArrowRight } from "./icons";

const articles = [
  {
    img: "/images/article-1.png",
    title: "How Cognitive Intelligence Differs from Academic Intelligence",
  },
  {
    img: "/images/article-2.png",
    title: "Why Marks Alone Cannot Measure Learning",
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
      <div className="mx-auto max-w-[1200px] px-5 py-14">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark">
              THOUGHT LEADERSHIP
            </p>
            <h2 className="mt-2 font-serif text-[28px] md:text-[32px] font-medium text-navy">
              Insights. Research. Impact.
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy hover:text-gold-dark transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {articles.map((a) => (
            <div key={a.title} className="group">
              <div className="h-28 rounded-lg overflow-hidden bg-slate-100">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-[12.5px] font-semibold text-navy leading-snug min-h-[48px]">
                {a.title}
              </h3>
              <a
                href="#"
                className="mt-1 inline-flex items-center gap-1 text-[11.5px] font-semibold text-gold-dark hover:text-navy transition-colors"
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
