export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="Epoch Olympiad Foundation logo"
      className={`${className} object-contain`}
    />
  );
}

export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <div className="leading-none">
        <div
          className={`font-serif font-bold tracking-tight text-[17px] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          EPOCH OLYMPIAD
        </div>
        <div
          className={`font-serif font-bold tracking-tight text-[17px] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          FOUNDATION
        </div>
        <div className="text-[10px] font-semibold tracking-wide text-gold mt-0.5">
          Research Foundation
        </div>
      </div>
    </div>
  );
}
