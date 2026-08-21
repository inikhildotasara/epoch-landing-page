import type { Article } from "./types";

/**
 * Reference article: uses almost every block type, so it doubles as a live
 * example of the authoring vocabulary described in README.md.
 */
export const cognitiveVsAcademic: Article = {
  slug: "cognitive-vs-academic-intelligence",
  title: "How Cognitive Intelligence Differs from Academic Intelligence",
  subtitle:
    "A child can score well and still struggle to think. Understanding the difference changes what a school chooses to measure.",
  category: "Cognitive Research",
  image: "/images/article-1.png",
  author: "Epoch Research Desk",
  authorRole: "Epoch Olympiad Foundation",
  date: "2026-06-14",
  tags: ["cognitive intelligence", "assessment", "academic health"],
  blocks: [
    {
      kind: "lead",
      text: "Two children sit the same paper and both score 88. One arrived there by recalling a method she had practised forty times. The other met a question she had never seen before and reasoned her way to the answer. The mark sheet records them as identical learners. They are not.",
    },
    {
      kind: "takeaways",
      title: "In short",
      items: [
        "Academic intelligence describes what a learner has acquired; cognitive intelligence describes how a learner processes.",
        "Marks measure the first well and the second barely at all.",
        "The gap between the two is where most unexplained underperformance hides.",
        "Both can be measured — but only if the assessment is designed to separate them.",
      ],
    },
    { kind: "heading", text: "Two different questions" },
    {
      kind: "paragraph",
      text: "Academic intelligence answers the question *what does this child know?* It is built from syllabus, instruction and practice, and it is properly measured by an examination. When a school reports that a learner is strong in mathematics, this is almost always what is meant.",
    },
    {
      kind: "paragraph",
      text: "Cognitive intelligence answers a different question: *how does this child arrive at an answer?* It covers reasoning, pattern recognition, memory, attention, analytical thinking and the willingness to attempt an unfamiliar problem. It is comparatively stable, it develops with the right stimulation, and it is largely invisible on a conventional mark sheet.",
    },
    {
      kind: "compare",
      title: "The same learner, seen two ways",
      columns: ["Academic intelligence", "Cognitive intelligence"],
      rows: [
        {
          label: "The question it answers",
          left: "What has been learnt?",
          right: "How is thinking done?",
        },
        {
          label: "Built from",
          left: "Syllabus, teaching, practice",
          right: "Reasoning habits, exposure, development",
        },
        {
          label: "Moves",
          left: "Term to term, with revision",
          right: "Slowly, with sustained stimulation",
        },
        {
          label: "Measured by",
          left: "Examinations on taught content",
          right: "Unfamiliar problems with no rehearsed method",
        },
        {
          label: "Fails when",
          left: "Content was not covered",
          right: "The question does not resemble the practice",
        },
      ],
    },
    {
      kind: "quote",
      text: "A rehearsed answer and a reasoned answer look the same on paper. Only one of them survives an unfamiliar question.",
    },
    { kind: "heading", text: "Why the distinction matters in a real classroom" },
    {
      kind: "paragraph",
      text: "Consider the learner every teacher recognises: attentive, diligent, consistently around 80%, and yet visibly lost the moment a question is phrased in an unfamiliar way. Nothing in her report card explains this. Her marks are good, so no intervention is triggered, and the difficulty is quietly re-labelled as carelessness or exam pressure.",
    },
    {
      kind: "paragraph",
      text: "Now consider her opposite: a learner who reasons quickly and enjoys puzzles, but whose marks sit at 60% because he never consolidated the basics of a topic taught two years ago. He is often described as bright but lazy. Neither description is diagnostic, and neither tells a teacher what to do on Monday morning.",
    },
    {
      kind: "bars",
      title: "An illustrative profile",
      note: "A sample learner profile from an Academic Health Report, shown to demonstrate the shape of the data — not aggregate research findings.",
      items: [
        {
          label: "Conceptual understanding",
          value: 82,
          caption: "Strong grasp of taught material",
        },
        {
          label: "Knowledge application",
          value: 79,
          caption: "Applies method reliably when the format is familiar",
        },
        {
          label: "Logical reasoning",
          value: 54,
          caption: "Struggles once no rehearsed route exists",
        },
        {
          label: "Problem solving",
          value: 48,
          caption: "Abandons unfamiliar problems early",
        },
      ],
    },
    {
      kind: "paragraph",
      text: "Read as a single mark, this learner is a 70% student. Read as a profile, she is something far more specific: a learner whose acquisition is ahead of her reasoning. That is a teachable problem with a known remedy — and it is completely invisible until the two things are measured apart.",
    },
    { kind: "divider" },
    { kind: "heading", text: "What it takes to measure the difference" },
    {
      kind: "paragraph",
      text: "An assessment can only separate acquisition from reasoning if it is built to. That means questions a learner cannot have rehearsed, scoring that records the dimension being tested rather than only the total, and reporting that resolves into parts instead of collapsing into one number.",
    },
    {
      kind: "steps",
      title: "How our assessments approach it",
      items: [
        {
          title: "Map the dimension, not just the topic",
          text: "Every question is tagged to the cognitive dimension it draws on, so the score can later be read by dimension rather than only by subject.",
        },
        {
          title: "Include the unrehearsed",
          text: "A portion of each paper presents problems in forms the learner has not practised, which is the only reliable way to observe reasoning rather than recall.",
        },
        {
          title: "Keep it age-appropriate",
          text: "What counts as evidence of reasoning at Kindergarten is not what counts at Class 9, so the instrument changes with the developmental stage.",
        },
        {
          title: "Report the parts",
          text: "Results are returned as a profile across dimensions with school, national and international benchmarks, so a strength and a gap can be seen side by side.",
        },
      ],
    },
    {
      kind: "stats",
      title: "Our framework at a glance",
      items: [
        { value: "8", label: "Cognitive dimensions assessed" },
        { value: "KG–10", label: "Stages covered, age-appropriately" },
        { value: "3", label: "Benchmark levels: school, national, global" },
      ],
    },
    {
      kind: "figure",
      src: "/images/article-6.png",
      alt: "A young child arranging coloured shapes into a pattern",
      caption:
        "Reasoning becomes observable at precisely the moment a learner meets a problem no method covers.",
    },
    {
      kind: "callout",
      tone: "caution",
      title: "One caution",
      text: "Cognitive profiling is diagnostic, not a label. A low score on a dimension describes where a learner is today under one set of conditions — it is a starting point for teaching, never a ceiling on a child.",
    },
    { kind: "heading", text: "What a school can do with this" },
    {
      kind: "checklist",
      title: "Practical next steps",
      items: [
        "Read cohort results by dimension, not only by subject average.",
        "Look for learners whose acquisition and reasoning scores diverge sharply in either direction.",
        "Give reasoning its own place on the timetable rather than leaving it to incidental practice.",
        "Re-measure after two terms — reasoning moves slowly, so short cycles will mislead you.",
        "Share the profile, not the rank, with parents.",
      ],
    },
    {
      kind: "faq",
      title: "Questions we are asked",
      items: [
        {
          q: "Is cognitive intelligence fixed?",
          a: "No. It is more stable than acquired knowledge, which is exactly why it is diagnostically useful, but it develops with sustained stimulation. That development is slow enough that it should be measured over years, not weeks.",
        },
        {
          q: "Does this replace examinations?",
          a: "Not at all. Examinations measure acquisition well, and acquisition matters. The argument here is that a school which measures only acquisition is working with half the picture.",
        },
        {
          q: "Can this be assessed at Kindergarten?",
          a: "Yes, but not with a paper. At that stage reasoning is observed through play-based and pattern-based tasks, which is the basis of our Brainiac Global assessment for early years.",
        },
        {
          q: "What does a school receive?",
          a: "An Academic Health Report for each learner — a profile across the cognitive and academic dimensions with benchmarks and identified growth areas — plus aggregated cohort insights for the school.",
        },
      ],
    },
  ],
};
