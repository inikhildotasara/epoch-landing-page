import type { Article, ArticleSummary, Block } from "./types";
import { cognitiveVsAcademic } from "./cognitive-vs-academic-intelligence";
import { marksCannotMeasureLearning } from "./why-marks-alone-cannot-measure-learning";
import { newArticles } from "./new-articles";

/**
 * Every published article. Adding one is the whole job: write the content file,
 * import it, add it here. The route, the index page, the table of contents, the
 * reading time and the related rail all follow automatically.
 */
export const articles: Article[] = [
  cognitiveVsAcademic,
  marksCannotMeasureLearning,
  ...newArticles,
];

/** Section anchors and table-of-contents links are derived, never hand-written. */
export function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Table-of-contents entries, derived from the article's heading blocks. */
export function tocItems(article: Article) {
  return article.blocks
    .filter((b): b is Extract<Block, { kind: "heading" }> => b.kind === "heading")
    .map((b) => ({ id: headingId(b.text), text: b.text }));
}

function blockWords(block: Block): number {
  const count = (s?: string) => (s ? s.trim().split(/\s+/).length : 0);
  switch (block.kind) {
    case "lead":
    case "heading":
    case "paragraph":
      return count(block.text);
    case "quote":
      return count(block.text) + count(block.attribution);
    case "takeaways":
    case "checklist":
      return count(block.title) + block.items.reduce((n, i) => n + count(i), 0);
    case "stats":
      return (
        count(block.title) +
        block.items.reduce((n, i) => n + count(i.label) + count(i.value), 0)
      );
    case "figure":
      return count(block.caption);
    case "steps":
      return (
        count(block.title) +
        block.items.reduce((n, i) => n + count(i.title) + count(i.text), 0)
      );
    case "compare":
      return (
        count(block.title) +
        block.rows.reduce(
          (n, r) => n + count(r.label) + count(r.left) + count(r.right),
          0
        )
      );
    case "bars":
      return (
        count(block.title) +
        count(block.note) +
        block.items.reduce((n, i) => n + count(i.label) + count(i.caption), 0)
      );
    case "callout":
      return count(block.title) + count(block.text);
    case "faq":
      return (
        count(block.title) +
        block.items.reduce((n, i) => n + count(i.q) + count(i.a), 0)
      );
    case "divider":
      return 0;
  }
}

/** Rounded up from 200 words a minute, the usual pace for considered reading. */
export function readMinutes(article: Article) {
  const words = article.blocks.reduce((n, b) => n + blockWords(b), 0);
  return Math.max(1, Math.round(words / 200));
}

export function toSummary(article: Article): ArticleSummary {
  return {
    slug: article.slug,
    title: article.title,
    subtitle: article.subtitle,
    category: article.category,
    image: article.image,
    author: article.author,
    date: article.date,
    readMinutes: readMinutes(article),
  };
}

/** Newest first. */
export function articleSummaries(): ArticleSummary[] {
  return [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(toSummary);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/** Prefers articles sharing a tag, then falls back to filling with the newest. */
export function relatedArticles(slug: string, limit = 3): ArticleSummary[] {
  const current = getArticle(slug);
  if (!current) return articleSummaries().slice(0, limit);

  const tags = new Set(current.tags ?? []);
  const others = articles.filter((a) => a.slug !== slug);
  const scored = others
    .map((a) => ({
      article: a,
      shared: (a.tags ?? []).filter((t) => tags.has(t)).length,
    }))
    .sort(
      (x, y) =>
        y.shared - x.shared || y.article.date.localeCompare(x.article.date)
    );

  return scored.slice(0, limit).map((s) => toSummary(s.article));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
