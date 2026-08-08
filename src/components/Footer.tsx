import { Logo } from "./Logo";
import { LinkedinIcon, FacebookIcon, XIcon } from "./icons";

const columns = [
  {
    heading: "About Foundation",
    links: ["Research", "Our Initiatives", "Advisory Board"],
  },
  {
    heading: "Resources",
    links: ["Academic Health Report", "Insights", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-[1200px] px-5 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-slate-400">
            Empowering young minds through research-driven education innovation.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[LinkedinIcon, FacebookIcon, XIcon].map((Icon, i) => (
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

        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-[14px] font-semibold text-white">
              {col.heading}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[13px] text-slate-400 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-500">
            © 2024 Epoch Olympiad Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <span className="hidden sm:inline">
              Designed for a better cognitive future
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
