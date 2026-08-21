import Link from "next/link";
import type { ArticleSummary } from "../../content/articles/types";
import { formatDate } from "../../content/articles";
import { ArrowRight } from "../icons";

/** Shared card for the index grid and the related rail. */
export function ArticleCard({
  article,
  className = "",
}: {
  article: ArticleSummary;
  className?: string;
}) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(11,28,63,0.28)] ${className}`}
    >
      <div className="aspect-[3/2] overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
          {article.category}
        </p>
        <h3 className="mt-2 font-serif text-[16px] font-medium leading-snug text-navy lg:text-[18px]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate-500 lg:text-[13.5px]">
          {article.subtitle}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="text-[11.5px] text-slate-400">
            {formatDate(article.date)} &middot; {article.readMinutes} min read
          </span>
          <ArrowRight
            className="h-4 w-4 shrink-0 text-gold-dark transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
