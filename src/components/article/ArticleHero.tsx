import Link from "next/link";
import type { Article } from "../../content/articles/types";
import { formatDate } from "../../content/articles";

export function ArticleHero({
  article,
  readMinutes,
}: {
  article: Article;
  readMinutes: number;
}) {
  const initials = article.author
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <header className="relative">
      <div className="relative overflow-hidden bg-navy">
        {/* Soft gold wash so the navy block does not read as a flat slab. */}
        <div
          className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-gold/12 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto w-full px-4 pb-20 pt-9 sm:px-6 md:px-12 lg:px-page lg:pb-28 lg:pt-12">
          <div className="max-w-[820px]">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[11px] font-medium text-white/45 lg:text-[12px]"
            >
              <Link href="/articles" className="transition-colors hover:text-gold">
                Articles
              </Link>
              <span aria-hidden>/</span>
              <span className="text-gold">{article.category}</span>
            </nav>

            <h1 className="mt-4 font-serif text-fluid-2 font-medium leading-[1.15] text-white">
              {article.title}
            </h1>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/70 lg:text-[17px]">
              {article.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/12 font-serif text-[13px] font-medium text-gold">
                  {initials}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-white lg:text-[13.5px]">
                    {article.author}
                  </p>
                  {article.authorRole && (
                    <p className="text-[11.5px] text-white/50">
                      {article.authorRole}
                    </p>
                  )}
                </div>
              </div>
              <span
                className="hidden h-8 w-px bg-white/15 sm:block"
                aria-hidden
              />
              <p className="text-[12px] text-white/55 lg:text-[12.5px]">
                {formatDate(article.date)}
                <span className="mx-2 text-white/25" aria-hidden>
                  &bull;
                </span>
                {readMinutes} min read
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lifts the lead image out of the navy and into the body below it. */}
      <div className="relative mx-auto -mt-12 w-full px-4 sm:px-6 md:px-12 lg:-mt-20 lg:px-page">
        <div className="overflow-hidden rounded-xl bg-slate-100 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[3/2] w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
