"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  "About Foundation",
  "Research",
  "Our Initiatives",
  "Advisory Board",
  "Contact",
  "School Registration",
  "Student's Login",
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 relative z-50">
      <div className="mx-auto max-w-[1200px] px-5 h-[74px] flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] font-medium text-slate-700 hover:text-navy transition-colors whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-navy"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-slate-200 shadow-lg">
          <div className="mx-auto max-w-[1200px] px-5 py-2 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] font-medium text-slate-700 hover:text-navy border-b border-slate-100 last:border-0"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
