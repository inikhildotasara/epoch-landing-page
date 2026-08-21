import type { Article } from "./types";

/**
 * A deliberately shorter piece with a different block mix — proof that the
 * layout holds whether an article runs 1,400 words or 500.
 */
export const marksCannotMeasureLearning: Article = {
  slug: "why-marks-alone-cannot-measure-learning",
  title: "Why Marks Alone Cannot Measure Learning",
  subtitle:
    "A percentage is a summary, and every summary discards something. What a mark discards is usually the part a teacher most needs.",
  category: "Assessment",
  image: "/images/article-2.png",
  author: "Epoch Research Desk",
  authorRole: "Epoch Olympiad Foundation",
  date: "2026-05-02",
  tags: ["assessment", "academic health"],
  blocks: [
    {
      kind: "lead",
      text: "A mark is a compression algorithm. It takes forty questions, several distinct abilities and one afternoon of a child's life, and returns a single number. Compression is useful. The problem is that nobody records what was thrown away.",
    },
    { kind: "heading", text: "What a single number hides" },
    {
      kind: "paragraph",
      text: "Two learners score 72%. The first answered every reasoning question and lost marks on definitions she had not revised. The second recalled every definition and left the reasoning questions blank. Their totals match, their needs are opposites, and the report card cannot tell them apart.",
    },
    {
      kind: "quote",
      text: "Aggregate two very different children into one number and you have not measured them. You have hidden them.",
    },
    {
      kind: "paragraph",
      text: "This is not an argument against examinations. It is an argument against reporting only their total. The information a teacher needs was collected — question by question, ability by ability — and then deliberately discarded at the last step.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "The distinction worth keeping",
      text: "A mark is an outcome measure: it tells you where a learner finished. A diagnostic profile is an explanatory measure: it tells you why they finished there. Schools need both, and usually hold only the first.",
    },
    { kind: "heading", text: "Three things marks systematically miss" },
    {
      kind: "steps",
      items: [
        {
          title: "The shape of the score",
          text: "Which abilities carried the total and which dragged it down. Without this, every intervention is a guess.",
        },
        {
          title: "The direction of travel",
          text: "A learner at 65% and rising needs something quite different from a learner at 65% and falling. One number, taken once, has no direction.",
        },
        {
          title: "The distance from method",
          text: "Whether the learner answered from reasoning or from a rehearsed route. This is the difference between understanding and rehearsal, and marks are blind to it.",
        },
      ],
    },
    {
      kind: "figure",
      src: "/images/article-5.png",
      alt: "An Academic Health Report dashboard resolving a score into dimensions",
      caption:
        "The same afternoon, reported two ways: one number, or a profile of the abilities behind it.",
    },
    { kind: "heading", text: "What better reporting looks like" },
    {
      kind: "checklist",
      items: [
        "Scores resolved by ability, not only by subject.",
        "A benchmark that places the learner against a meaningful comparison group.",
        "Named growth areas a teacher can act on this term.",
        "A record that can be compared to the same learner a year later.",
      ],
    },
    {
      kind: "paragraph",
      text: "None of this requires abandoning examinations or adding to a child's assessment load. It requires keeping the detail that was already collected, and reporting it. That is the whole idea behind the Academic Health Report.",
    },
    {
      kind: "faq",
      items: [
        {
          q: "Are you saying marks should be abolished?",
          a: "No. Marks are a reasonable summary and they serve real purposes. The claim is narrower: a summary should not be the only thing a school keeps.",
        },
        {
          q: "Does this mean more testing for children?",
          a: "It should mean less. Richer reporting from an assessment a school already runs is more informative than repeating shallow tests.",
        },
      ],
    },
  ],
};
