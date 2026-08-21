"use client";

import { useEffect, useState } from "react";

/**
 * Thin gold rule under the header showing how far through the piece the reader
 * is. Small thing, but it converts "how long is this?" into a glance.
 */
export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setPct(scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-gold to-gold-dark"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
