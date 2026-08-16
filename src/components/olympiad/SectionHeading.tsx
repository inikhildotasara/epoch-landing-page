import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-gold/70 lg:w-16" />
      <h2 className="text-center font-serif text-[18px] font-semibold text-navy lg:text-[22px]">
        {children}
      </h2>
      <span className="h-px w-10 bg-gold/70 lg:w-16" />
    </div>
  );
}
