"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./icons";

const navItems: { label: string; href: string }[] = [
  { label: "About Foundation", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Our Initiatives", href: "/initiatives" },
  { label: "Advisory Board", href: "/advisory-board" },
  { label: "School Registration", href: "/register-your-school" },
  { label: "Student's Login", href: "#" },
];

const PHONE_NUMBER = "9807714979";
const WHATSAPP_HREF = `https://wa.me/91${PHONE_NUMBER}`;
const CALL_HREF = `tel:+91${PHONE_NUMBER}`;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 relative z-50">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page h-[74px] lg:h-[84px] flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-3 lg:gap-4">
          <nav className="hidden xl:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12.5px] 2xl:text-[13.5px] font-medium text-slate-700 hover:text-navy transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1faa52] transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon className="h-[32px] w-[32px]" aria-hidden />
            </a>
            <a
              href={CALL_HREF}
              aria-label="Call us"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <PhoneIcon className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-navy"
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
      </div>

      {open && (
        <nav className="xl:hidden absolute top-full inset-x-0 bg-white border-b border-slate-200 shadow-lg">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-2 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] font-medium text-slate-700 hover:text-navy border-b border-slate-100 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 py-3">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-[14px] font-medium text-[#1faa52]"
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
              <a
                href={CALL_HREF}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-2 text-[14px] font-medium text-navy"
              >
                <PhoneIcon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden />
                Call
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
