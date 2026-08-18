"use client";

import { useEffect, useState } from "react";

export function LegalToc({
  items,
}: {
  items: { id: string; num: string; title: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observed = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    observed.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-0.5">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`flex gap-2.5 rounded-lg px-3 py-2 text-[13px] leading-snug transition-colors ${
                isActive
                  ? "bg-navy text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-navy"
              }`}
            >
              <span
                className={`w-4 shrink-0 text-right text-[11px] font-semibold tabular-nums ${
                  isActive ? "text-gold" : "text-slate-400"
                }`}
              >
                {item.num}
              </span>
              {item.title}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Mobile / tablet: collapsible index */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-semibold text-navy"
        >
          Contents
          <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {open && (
          <nav
            aria-label="Document sections"
            className="mt-2 max-h-[60vh] overflow-y-auto rounded-xl border border-slate-200 bg-white p-2"
          >
            {list}
          </nav>
        )}
      </div>

      {/* Desktop: sticky rail */}
      <nav
        aria-label="Document sections"
        className="hidden lg:sticky lg:top-8 lg:block lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:rounded-2xl lg:border lg:border-slate-200 lg:bg-white lg:p-3"
      >
        <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Contents
        </p>
        {list}
      </nav>
    </>
  );
}
