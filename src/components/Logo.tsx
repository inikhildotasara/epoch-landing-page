import Link from "next/link";

export function LogoMark({ className = "h-14 w-14" }: { className?: string }) {
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
    <Link
      href="/"
      aria-label="Epoch Olympiad Foundation — home"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <LogoMark />
      <div
        className={`font-serif leading-[1.05] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        <div className="font-bold tracking-tight text-[20px]">EPOCH</div>
        <div className="font-semibold tracking-tight text-[14px]">OLYMPIAD</div>
        <div className="font-semibold tracking-tight text-[12.5px]">
          FOUNDATION
        </div>
        <div className="font-sans text-[9px] font-semibold tracking-wide text-gold mt-0.5">
          Research Foundation
        </div>
      </div>
    </Link>
  );
}
