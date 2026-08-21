import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/article/ArticleHero";
import { ArticleBlock } from "@/components/article/blocks";
import { ArticleToc, ArticleTocInline } from "@/components/article/ArticleToc";
import { ReadingProgress } from "@/components/article/ReadingProgress";
import { ArticleCard } from "@/components/article/ArticleCard";
import { ArrowRight } from "@/components/icons";
import {
  articles,
  getArticle,
  readMinutes,
  relatedArticles,
  tocItems,
} from "@/content/articles";

/**
 * One route for every article. Next pre-renders a static HTML file per slug at
 * build time, so publishing an article costs a content file and nothing else.
 */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article | Epoch Olympiad Foundation" };
  return {
    title: `${article.title} | Epoch Olympiad Foundation`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: "article",
      images: [article.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const toc = tocItems(article);
  const related = relatedArticles(article.slug);

  return (
    <>
      <ReadingProgress />
      <Header />
      <main className="bg-white">
        <ArticleHero article={article} readMinutes={readMinutes(article)} />

        <div className="mx-auto w-full px-4 pb-4 pt-10 sm:px-6 md:px-12 lg:px-page lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_240px] xl:gap-16">
            {/* Measure capped near 70 characters — the body stays readable even
                on a 1920 screen, where the column would otherwise run wide. */}
            <article className="min-w-0 max-w-[760px]">
              <ArticleTocInline items={toc} />
              {article.blocks.map((block, i) => (
                <ArticleBlock key={i} block={block} />
              ))}

              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Filed under
                  </span>
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-cream px-2.5 py-1 text-[11.5px] font-medium text-navy ring-1 ring-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 overflow-hidden rounded-xl bg-navy p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  For schools
                </p>
                <h2 className="mt-2 font-serif text-[21px] font-medium leading-snug text-white lg:text-[26px]">
                  See what an Academic Health Report reveals about your cohort.
                </h2>
                <p className="mt-3 max-w-[52ch] text-[13.5px] leading-relaxed text-white/65 lg:text-[14.5px]">
                  Register your school to receive dimension-level insights for
                  every learner, benchmarked at school, national and
                  international level.
                </p>
                <Link
                  href="/register-your-school"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:bg-white lg:text-[14px]"
                >
                  Register your school
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>

            <aside className="hidden lg:block">
              <ArticleToc items={toc} />
            </aside>
          </div>
        </div>

        {related.length > 0 && (
          <section className="bg-cream">
            <div className="mx-auto w-full px-4 py-14 sm:px-6 md:px-12 lg:px-page lg:py-20">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-serif text-[22px] font-medium text-navy lg:text-[30px]">
                  Continue reading
                </h2>
                <Link
                  href="/articles"
                  className="inline-flex shrink-0 items-center gap-1.5 text-[12.5px] font-semibold text-navy transition-colors hover:text-gold-dark lg:text-[14px]"
                >
                  All articles
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {related.map((r) => (
                  <ArticleCard key={r.slug} article={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
