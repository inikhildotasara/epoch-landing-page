"use client";

import { useEffect, useState } from "react";

const HOLD_MS = 1250;
const FADE_MS = 520;

/**
 * Brief trademark reveal played when an initiative landing page opens. It is
 * rendered on the server too, so the logo is on screen from the first paint
 * rather than appearing a beat after the page content.
 */
export function LogoFlash({
  src,
  alt,
  background,
  glow,
  rule,
  width = "min(72vw, 460px)",
}: {
  src: string;
  alt: string;
  /** Page-matched backdrop so the reveal dissolves into the hero beneath it. */
  background: string;
  /** Soft radial bloom behind the mark, in the initiative's own colour. */
  glow: string;
  /** Colour of the thin rule that draws in under the mark. */
  rule: string;
  width?: string;
}) {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPhase("done");
      return;
    }
    const toOut = setTimeout(() => setPhase("out"), HOLD_MS);
    const toDone = setTimeout(() => setPhase("done"), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(toOut);
      clearTimeout(toDone);
    };
  }, []);

  // Hold the page still underneath so the reveal doesn't fight a stray scroll.
  useEffect(() => {
    if (phase === "done") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      onClick={() => setPhase("done")}
      className={`logo-flash fixed inset-0 z-[100] flex items-center justify-center overflow-hidden ${
        phase === "out" ? "logo-flash-out" : ""
      }`}
      style={{ background }}
    >
      <div
        className="logo-flash-glow pointer-events-none absolute h-[70vmin] w-[70vmin] rounded-full"
        style={{
          background: `radial-gradient(circle, ${glow} 0%, transparent 68%)`,
        }}
      />

      <div className="relative flex flex-col items-center px-6">
        <div
          className="logo-flash-mark relative"
          style={{ width, maxWidth: "100%" }}
        >
          <img src={src} alt={alt} className="block h-auto w-full" />
          {/* Light sweep across the mark, clipped to the logo's own box. */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden">
            <span
              className="logo-flash-shine absolute inset-y-0 -left-1/3 w-1/3"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",
              }}
            />
          </span>
        </div>

        <span
          className="logo-flash-rule mt-5 block h-[3px] w-24 origin-left rounded-full sm:w-32"
          style={{ backgroundColor: rule }}
        />
      </div>
    </div>
  );
}
