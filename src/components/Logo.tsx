import Link from "next/link";

/* The wordmark is part of the artwork, so navy backgrounds need the variant with
   white lettering — the brand purple is unreadable there. */
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
        src={dark ? "/images/logo-full-dark.webp" : "/images/logo-full.webp"}
        alt=""
        className="h-[54px] w-auto lg:h-[64px]"
      />
    </Link>
  );
}
