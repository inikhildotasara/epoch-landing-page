import { PlayIcon } from "./icons";

const leftLabels = ["Logical Reasoning", "Mathematics", "Language", "Memory"];
const rightLabels = [
  "Analytical Thinking",
  "Creativity",
  "Problem Solving",
  "Concept Mastery",
];

function Label({ text, side }: { text: string; side: "left" | "right" }) {
  return (
    <div
      className={`flex items-center gap-2 ${
        side === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_2px_rgba(56,189,248,0.6)]" />
      <span className="text-[12px] sm:text-[13px] text-slate-200 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(1200px 500px at 80% 40%, #163463 0%, #0b1c3f 55%, #081631 100%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 py-14 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h1 className="font-serif text-white font-semibold leading-[1.12] text-[34px] sm:text-[42px] md:text-[46px]">
            Transitioning Early
            <br />
            Learners from Rote
            <br />
            Memory to <span className="text-white">True</span>
            <br />
            Intelligence
          </h1>
          <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-slate-300">
            Epoch Olympiad Foundation is an independent education research
            foundation dedicated to transforming how children&apos;s cognitive
            abilities are measured, nurtured, and benchmarked. Through
            research-driven assessments, diagnostic analytics, and innovative
            learning frameworks, we help schools move beyond rote memory toward
            authentic intelligence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-md bg-gold px-5 py-3 text-[13px] font-semibold text-navy hover:bg-gold-dark transition-colors"
            >
              Explore Our Research
            </a>
            <a
              href="#"
              className="rounded-md border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Academic Health Report
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-3 text-[13px] font-semibold text-white hover:text-gold transition-colors"
            >
              <PlayIcon className="h-5 w-5 text-gold" />
              Watch Our Vision
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/hero.png"
              alt="Child exploring cognitive intelligence"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Left labels */}
          <div className="absolute left-2 top-6 flex flex-col gap-7">
            {leftLabels.map((l) => (
              <Label key={l} text={l} side="left" />
            ))}
          </div>
          {/* Right labels */}
          <div className="absolute right-2 top-6 flex flex-col items-end gap-7">
            {rightLabels.map((l) => (
              <Label key={l} text={l} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
