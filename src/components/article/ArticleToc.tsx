"use client";

import { useEffect, useState } from "react";

/**
 * Sticky contents rail, built from the article's heading blocks. The active item
 * follows the reader: whichever heading last crossed the top of the viewport
 * wins, which behaves better than an intersection-only rule on short sections.
 */
/** Below lg there is no room for a rail, so the same list collapses inline. */
export function ArticleTocInline({
  items,
}: {
  items: { id: string; text: string }[];
}) {
  if (items.length < 2) return null;
  return (
    <details className="group mb-8 rounded-xl border border-slate-200 bg-cream lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[12.5px] font-semibold text-navy">
        In this article
        <span className="text-[11px] font-normal text-slate-400 group-open:hidden">
          {items.length} sections
        </span>
      </summary>
      <ol className="border-t border-slate-200 px-4 py-3">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-2.5 py-1">
            <span className="text-[11.5px] font-semibold text-gold-dark">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              className="text-[13px] leading-snug text-slate-600"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}

export function ArticleToc({
  items,
}: {
  items: { id: string; text: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;
    const onScroll = () => {
      let current = items[0].id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-28">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
        On this page
      </p>
      <ul className="mt-3 space-y-1 border-l border-slate-200">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`-ml-px block border-l-2 py-1.5 pl-3 text-[12.5px] leading-snug transition-colors ${
                  isActive
                    ? "border-gold font-semibold text-navy"
                    : "border-transparent text-slate-500 hover:border-slate-300 hover:text-navy"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
