import type { ReactNode } from "react";

/* White card with the centred, gold-ruled heading every partnership band on
   this page shares. */
export function Panel({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200/80 shadow-[0_18px_50px_-42px_rgba(11,28,63,0.5)] sm:p-6 lg:p-7">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gold sm:w-12" />
        <h2 className="text-center font-serif text-[14.5px] font-semibold uppercase tracking-[0.03em] text-navy sm:text-[16px] lg:text-[18px]">
          {title}
        </h2>
        <span className="h-px w-8 bg-gold sm:w-12" />
      </div>

      {intro && (
        <p className="mx-auto mt-2.5 max-w-[62ch] text-center text-[12.5px] leading-relaxed text-slate-500 lg:text-[13px]">
          {intro}
        </p>
      )}

      <div className="mt-5 lg:mt-6">{children}</div>
    </section>
  );
}
