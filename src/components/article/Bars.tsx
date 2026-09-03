"use client";

import { useEffect, useRef, useState } from "react";
import type { BarsBlock } from "../../content/articles/types";

/**
 * Bars grow from zero the first time the block enters the viewport, which turns
 * a table of numbers into something a reader actually looks at.
 */
export function Bars({ block }: { block: BarsBlock }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const fallback = setTimeout(() => setGrown(true), 0);
      return () => clearTimeout(fallback);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setGrown(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="my-8 rounded-xl border border-slate-200 bg-cream p-5 sm:p-6 lg:p-7"
    >
      {block.title && (
        <h3 className="font-serif text-[18px] font-medium text-navy lg:text-[21px]">
          {block.title}
        </h3>
      )}
      <div className="mt-5 space-y-4">
        {block.items.map((item, i) => (
          <div key={item.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] font-semibold text-navy lg:text-[14px]">
                {item.label}
              </span>
              <span className="shrink-0 font-serif text-[15px] font-medium text-gold-dark lg:text-[17px]">
                {item.value}
              </span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-gold-dark transition-[width] duration-1000 ease-out"
                style={{
                  width: grown ? `${Math.min(100, Math.max(0, item.value))}%` : "0%",
                  transitionDelay: `${i * 120}ms`,
                }}
              />
            </div>
            {item.caption && (
              <p className="mt-1.5 text-[12px] leading-snug text-slate-500 lg:text-[12.5px]">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>
      {block.note && (
        <p className="mt-5 border-t border-slate-200 pt-3 text-[11.5px] italic leading-snug text-slate-400">
          {block.note}
        </p>
      )}
    </div>
  );
}
