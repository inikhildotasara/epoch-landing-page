import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";
import { articleSummaries, formatDate } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articles & Research | Epoch Olympiad Foundation",
  description:
    "Research notes and explainers on cognitive intelligence, diagnostic assessment and academic health from the Epoch Olympiad Foundation research desk.",
};

export default function ArticlesIndexPage() {
  const all = articleSummaries();
  const [featured, ...rest] = all;

  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-navy">
          <div className="mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Thought Leadership
            </p>
            <h1 className="mt-3 max-w-[22ch] font-serif text-fluid-2 font-medium leading-[1.15] text-white">
              Insights. Research. Impact.
            </h1>
            <p className="mt-4 max-w-[62ch] text-[14px] leading-relaxed text-white/65 lg:text-[16px]">
              How children think, how learning is actually measured, and what a
              school can do with better evidence.
            </p>
          </div>
        </section>

        {featured && (
          <section className="border-b border-slate-100 bg-cream">
            <div className="mx-auto w-full px-4 py-10 sm:px-6 md:px-12 lg:px-page lg:py-14">
              <Reveal>
                <Link
                  href={`/articles/${featured.slug}`}
                  className="group grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10"
                >
                  <div className="overflow-hidden rounded-xl bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                      Latest &middot; {featured.category}
                    </p>
                    <h2 className="mt-3 font-serif text-[22px] font-medium leading-snug text-navy lg:text-[32px]">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600 lg:text-[15.5px]">
                      {featured.subtitle}
                    </p>
                    <p className="mt-4 text-[12px] text-slate-400">
                      {featured.author}
                      <span className="mx-2" aria-hidden>
                        &bull;
                      </span>
                      {formatDate(featured.date)}
                      <span className="mx-2" aria-hidden>
                        &bull;
                      </span>
                      {featured.readMinutes} min read
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors group-hover:text-gold-dark lg:text-[14px]">
                      Read the article
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </section>
        )}

        <section>
          <div className="mx-auto w-full px-4 py-12 sm:px-6 md:px-12 lg:px-page lg:py-16">
            {rest.length > 0 ? (
              <>
                <h2 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                  More from the research desk
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {rest.map((a, i) => (
                    <Reveal key={a.slug} delay={i * 80} className="h-full">
                      <ArticleCard article={a} />
                    </Reveal>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-[14px] text-slate-500">
                More articles are on the way.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
