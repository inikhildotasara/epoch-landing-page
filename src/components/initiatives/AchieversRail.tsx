import type { ReactNode } from "react";
import { IconBubble } from "./IconBubble";
import { TrophyIcon, ArrowRight } from "../icons";

function FaqBadge({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" style={{ color }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.6} />
      <path
        d="M9.6 9.3a2.4 2.4 0 0 1 4.7.7c0 1.6-2.3 1.9-2.3 3.4"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function AchieversRail({
  accent,
  gallery,
  className = "",
}: {
  accent: string;
  gallery: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <div>
        <div className="flex items-center gap-2.5">
          <IconBubble>
            <TrophyIcon
              className="h-5 w-5"
              style={{ color: accent }}
              strokeWidth={1.7}
            />
          </IconBubble>
          <h4 className="text-[15px] font-bold text-navy 2xl:text-[16px]">
            Achievers Gallery
          </h4>
        </div>
        {/* Fixed frame so the photo keeps a sane shape whether the rail is a narrow
            column or spans the full card width on small screens */}
        <div className="mt-3 aspect-[16/10] w-full max-w-[300px] overflow-hidden rounded-xl lg:max-w-none">
          {gallery}
        </div>
        <a
          href="#"
          className="mt-3 ml-11 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-80"
          style={{ color: accent }}
        >
          View Gallery <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="border-t border-slate-200 pt-5">
        <div className="flex items-start gap-2.5">
          <IconBubble>
            <FaqBadge color={accent} />
          </IconBubble>
          <div>
            <h4 className="text-[15px] font-bold text-navy 2xl:text-[16px]">
              FAQ
            </h4>
            <a
              href="#"
              className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-80"
              style={{ color: accent }}
            >
              View FAQs <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
