import type { ReactNode } from "react";

export function IconBubble({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 ${className}`}
    >
      {children}
    </span>
  );
}
