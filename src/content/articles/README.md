# Writing an article

There is one article page in this codebase, not one page per article. It lives at
`src/app/articles/[slug]/page.tsx` and serves every article we publish. Adding an
article is therefore a content job, not an engineering job.

## Publishing checklist

1. Create `src/content/articles/<slug>.ts` and export one `Article` object.
2. Import it in `src/content/articles/index.ts` and add it to the `articles` array.
3. If a card for it already exists on the home page or the research page, add the
   `slug` to that entry (`src/components/Insights.tsx`,
   `src/components/research/StudyIntegrityInsights.tsx`) so it stops showing as
   "Coming soon".

That is all. The URL, the table of contents, the reading time, the metadata, the
social preview and the "Continue reading" rail are all derived from the content.

## Header fields

```ts
export const myArticle: Article = {
  slug: "why-marks-alone-cannot-measure-learning", // becomes /articles/<slug>; never change after publishing
  title: "Why Marks Alone Cannot Measure Learning",
  subtitle: "One line that earns the click. Also used as the card excerpt.",
  category: "Assessment",            // small gold label above the title
  image: "/images/article-2.png",    // landscape, 3:2 or wider, in /public/images
  author: "Epoch Research Desk",
  authorRole: "Epoch Olympiad Foundation",
  date: "2026-05-02",                // ISO. Controls ordering; newest is featured
  tags: ["assessment", "academic health"], // drives the related-articles rail
  blocks: [ /* see below */ ],
};
```

## The block menu

Everything in the body is a block. There is no free-form HTML, which is what
guarantees no article can turn into a wall of text or break the design.

Inside any text you may use `**bold**` and `*italic*`. Nothing else.

### Rules of thumb

- Open with `lead`, then put `takeaways` high up so a skimmer gets value in 10 seconds.
- **Never place more than two `paragraph` blocks in a row.** Break the run with a
  quote, figure, callout, compare, bars, steps or checklist. This is the single
  rule that decides whether the article feels alive.
- Aim for a visual block every 150–200 words.
- Use `heading` every 200–300 words. Two or more headings turn on the contents rail.
- Close with `faq`. It is the most-read part of most explainers.

### Reference

```ts
// Opening lines, set large. One per article, always first.
{ kind: "lead", text: "Two children sit the same paper and both score 88." }

// Section title. The anchor and contents entry are generated from the text.
{ kind: "heading", text: "Two different questions" }

// Body copy.
{ kind: "paragraph", text: "Academic intelligence answers *what does this child know?*" }

// A line worth pausing on. Rendered large, serif, gold rule.
{ kind: "quote", text: "A rehearsed answer and a reasoned answer look the same on paper.",
  attribution: "Optional" }

// Navy "if you remember nothing else" box. 3–5 items.
{ kind: "takeaways", title: "In short", items: ["…", "…", "…"] }

// Two or three big figures. Keep values to a few characters.
{ kind: "stats", title: "Our framework at a glance",
  items: [{ value: "8", label: "Cognitive dimensions assessed" }] }

// Picture with an optional caption. Always full column width.
{ kind: "figure", src: "/images/article-1.png", alt: "Describe it for screen readers",
  caption: "Optional. Use it to add a thought, not to repeat the alt text." }

// Positives, checked rather than bulleted. Lays out in two columns from sm up.
{ kind: "checklist", title: "Practical next steps", items: ["…", "…"] }

// A process. Numbered automatically.
{ kind: "steps", title: "How our assessments approach it",
  items: [{ title: "Map the dimension", text: "One sentence of detail." }] }

// Side-by-side contrast. Becomes stacked cards on phones.
{ kind: "compare", title: "The same learner, seen two ways",
  columns: ["Academic intelligence", "Cognitive intelligence"],
  rows: [{ label: "The question it answers", left: "What has been learnt?",
           right: "How is thinking done?" }] }

// Bars out of 100, animated as they scroll into view.
// `note` is mandatory in spirit: always say what the data is.
{ kind: "bars", title: "An illustrative profile",
  note: "A sample learner profile — not aggregate research findings.",
  items: [{ label: "Logical reasoning", value: 54, caption: "Optional one-liner" }] }

// An aside. tone: "note" | "caution" | "tip".
{ kind: "callout", tone: "caution", title: "One caution", text: "…" }

// Accordion of real questions. Put it last.
{ kind: "faq", title: "Questions we are asked", items: [{ q: "…", a: "…" }] }

// A breather between two major movements of the piece.
{ kind: "divider" }
```

## Honesty rules

- Numbers in a `stats` or `bars` block must either describe our own framework or
  be labelled as illustrative in `note`. Never present an invented figure as a
  research finding.
- Do not attribute a `quote` to a person who did not say it. Leave `attribution`
  off if the line is ours.

## Adding a new block type

Only needed when a piece genuinely cannot be expressed with the menu above:

1. Add the type to the `Block` union in `types.ts`.
2. Add a `case` for it in `src/components/article/blocks.tsx`.
3. Count its words in `blockWords` in `index.ts` so reading time stays accurate.
4. Document it here.
