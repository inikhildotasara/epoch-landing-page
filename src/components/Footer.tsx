import { Logo } from "./Logo";
import { LinkedinIcon, FacebookIcon, YoutubeIcon } from "./icons";

const linkColumns: { label: string; href: string }[][] = [
  [
    { label: "About Foundation", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Our Initiatives", href: "/initiatives" },
    { label: "Academic Health Report", href: "/academic-health-report" },
  ],
  [
    { label: "Advisory Board", href: "/advisory-board" },
    { label: "Resources", href: "#" },
    { label: "Contact", href: "#" },
  ],
];

const socials = [LinkedinIcon, FacebookIcon, YoutubeIcon];

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-12 lg:py-16 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xs">
          <Logo dark />
          <p className="mt-4 text-[13px] lg:text-[14px] leading-relaxed text-slate-400">
            Empowering young minds through research-driven education innovation.
          </p>
        </div>

        <div className="flex gap-12 lg:gap-24">
          {linkColumns.map((col, ci) => (
            <ul key={ci} className="space-y-2.5">
              {col.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] lg:text-[14px] text-slate-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Icon className="h-4 w-4 text-white" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-500">
          <p>© 2026 Epoch Olympiad Foundation. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
          <span className="hidden sm:inline">
            Designed for a better cognitive future.
          </span>
        </div>
      </div>
    </footer>
  );
}
