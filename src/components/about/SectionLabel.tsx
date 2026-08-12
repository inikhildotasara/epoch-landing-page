export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 lg:w-16 bg-gold/60" />
      <span className="text-[13px] lg:text-[15px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
        {text}
      </span>
      <span className="h-px w-10 lg:w-16 bg-gold/60" />
    </div>
  );
}
