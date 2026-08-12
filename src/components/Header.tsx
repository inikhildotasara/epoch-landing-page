"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

// Set to `true` at launch to expose the internal pages in the nav again.
// While `false`, nav links don't navigate anywhere (pages stay live and are
// still reachable by their direct URL, e.g. /about, /research, /initiatives).
const SHOW_PAGE_LINKS = false;

const navItems: { label: string; href: string }[] = [
  { label: "About Foundation", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Our Initiatives", href: "/initiatives" },
  { label: "Advisory Board", href: "#" },
  { label: "School Registration", href: "#" },
  { label: "Student's Login", href: "#" },
].map((item) => ({ ...item, href: SHOW_PAGE_LINKS ? item.href : "#" }));

const PHONE_NUMBER = "9807714979";
const WHATSAPP_HREF = `https://wa.me/91${PHONE_NUMBER}`;
const CALL_HREF = `tel:+91${PHONE_NUMBER}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 6.4A7.6 7.6 0 0 0 12.05 4.2 7.66 7.66 0 0 0 5.4 15.7L4.2 20l4.4-1.15a7.6 7.6 0 0 0 3.44.87h.01a7.66 7.66 0 0 0 5.45-13.32ZM12.06 18.3h-.01a6.35 6.35 0 0 1-3.24-.89l-.23-.14-2.4.63.64-2.34-.15-.24a6.36 6.36 0 1 1 5.4 2.98Zm3.5-4.76c-.19-.1-1.13-.56-1.31-.62-.18-.06-.3-.1-.43.1-.13.19-.5.61-.61.74-.11.13-.22.14-.41.05a5.2 5.2 0 0 1-1.54-.95 5.77 5.77 0 0 1-1.06-1.32c-.11-.19-.01-.29.08-.39.09-.09.19-.22.29-.34.1-.12.13-.2.19-.33.06-.13.03-.25-.02-.34-.05-.1-.43-1.04-.59-1.42-.15-.37-.31-.32-.43-.33h-.36c-.13 0-.34.05-.51.24-.18.19-.67.66-.67 1.6 0 .95.68 1.86.78 1.99.1.13 1.35 2.06 3.28 2.89.46.2.81.32 1.09.4.46.15.87.13 1.2.08.37-.06 1.13-.46 1.29-.91.16-.45.16-.83.11-.91-.05-.08-.17-.13-.36-.23Z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.12.9.34 1.8.64 2.6a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.15a2 2 0 0 1 2.1-.45c.85.3 1.7.52 2.6.64a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

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
              <WhatsAppIcon className="h-[32px] w-[32px]" />
            </a>
            <a
              href={CALL_HREF}
              aria-label="Call us"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <PhoneIcon className="h-[22px] w-[22px]" />
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
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={CALL_HREF}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-2 text-[14px] font-medium text-navy"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                Call
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
