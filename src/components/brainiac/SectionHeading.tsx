import type { ReactNode } from "react";

/* Centred heading with gold rules, used by every Brainiac Global band. */
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-gold sm:w-12 lg:w-16" />
      <h2 className="text-center font-serif text-[15px] font-semibold uppercase tracking-[0.03em] text-navy sm:text-[17px] lg:text-[20px]">
        {children}
      </h2>
      <span className="h-px w-8 bg-gold sm:w-12 lg:w-16" />
    </div>
  );
}
