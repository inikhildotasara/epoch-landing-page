import type { ReactNode } from "react";
import { TrophyIcon, ArrowRight } from "../icons";

function FaqBadge({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" style={{ color }}>
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
}: {
  accent: string;
  gallery: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2">
          <TrophyIcon
            className="h-6 w-6"
            style={{ color: accent }}
            strokeWidth={1.7}
          />
          <h4 className="text-[15px] font-bold text-navy lg:text-[16px]">
            Achievers Gallery
          </h4>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl">{gallery}</div>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-80"
          style={{ color: accent }}
        >
          View Gallery <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <FaqBadge color={accent} />
          <h4 className="text-[15px] font-bold text-navy lg:text-[16px]">FAQ</h4>
        </div>
        <a
          href="#"
          className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-80"
          style={{ color: accent }}
        >
          View FAQs <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
