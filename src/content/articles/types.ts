/**
 * The article content schema.
 *
 * An article is a list of blocks, not a blob of HTML. A writer only ever picks
 * from the block types below; each one already has a designed component, so no
 * article needs new layout work and no article can end up as a wall of text.
 *
 * Adding a new block type is the only thing that requires code: add a member to
 * the Block union here, then render it in components/article/blocks.tsx.
 */

/** Opening sentence or two, set larger than the body. One per article. */
export type LeadBlock = { kind: "lead"; text: string };

/** Section title. Anchors and the table of contents are generated from these. */
export type HeadingBlock = { kind: "heading"; text: string };

/** Body copy. **bold** and *italic* are supported inline. */
export type ParagraphBlock = { kind: "paragraph"; text: string };

/** A line worth pausing on, set as a large serif pull quote. */
export type QuoteBlock = { kind: "quote"; text: string; attribution?: string };

/** The "if you remember nothing else" box. Best placed near the top or end. */
export type TakeawaysBlock = {
  kind: "takeaways";
  title?: string;
  items: string[];
};

/** Two to four figures shown large. Keep values short: "8", "1–10", "3×". */
export type StatsBlock = {
  kind: "stats";
  title?: string;
  items: { value: string; label: string }[];
};

/** A picture with an optional caption. Always full column width. */
export type FigureBlock = {
  kind: "figure";
  src: string;
  alt: string;
  caption?: string;
};

/** A short list of positives — checked, not bulleted. */
export type ChecklistBlock = {
  kind: "checklist";
  title?: string;
  items: string[];
};

/** A process, numbered. Each step gets a title and a sentence. */
export type StepsBlock = {
  kind: "steps";
  title?: string;
  items: { title: string; text: string }[];
};

/** Side-by-side contrast — the clearest way to explain "A is not B". */
export type CompareBlock = {
  kind: "compare";
  title?: string;
  columns: [string, string];
  rows: { label: string; left: string; right: string }[];
};

/** Horizontal bars for values out of 100. Use `note` to say what the data is. */
export type BarsBlock = {
  kind: "bars";
  title?: string;
  note?: string;
  items: { label: string; value: number; caption?: string }[];
};

/** An aside: context worth flagging, a caution, or a practical tip. */
export type CalloutBlock = {
  kind: "callout";
  tone: "note" | "caution" | "tip";
  title?: string;
  text: string;
};

/** Questions readers actually ask, at the end of the piece. */
export type FaqBlock = {
  kind: "faq";
  title?: string;
  items: { q: string; a: string }[];
};

/** A breather between two major movements of the article. */
export type DividerBlock = { kind: "divider" };

export type Block =
  | LeadBlock
  | HeadingBlock
  | ParagraphBlock
  | QuoteBlock
  | TakeawaysBlock
  | StatsBlock
  | FigureBlock
  | ChecklistBlock
  | StepsBlock
  | CompareBlock
  | BarsBlock
  | CalloutBlock
  | FaqBlock
  | DividerBlock;

export type Article = {
  /** URL segment: /articles/<slug>. Lowercase, hyphenated, never changed once published. */
  slug: string;
  title: string;
  /** One-line deck shown under the title and used as the card excerpt. */
  subtitle: string;
  /** Small uppercase label above the title, e.g. "Cognitive Research". */
  category: string;
  /** Card and hero image, landscape. */
  image: string;
  author: string;
  authorRole?: string;
  /** ISO date, e.g. "2026-04-18". */
  date: string;
  tags?: string[];
  blocks: Block[];
};

/** Card-sized view of an article, used by the index and the related rail. */
export type ArticleSummary = Pick<
  Article,
  "slug" | "title" | "subtitle" | "category" | "image" | "author" | "date"
> & { readMinutes: number };
