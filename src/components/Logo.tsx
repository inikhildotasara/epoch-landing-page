import Link from "next/link";

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
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <img
        src={dark ? "/images/logo-full-dark.webp" : "/images/EPOCH research final.png"}
        alt=""
        className="h-[54px] w-auto lg:h-[64px]"
      />
    </Link>
  );
}
