export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  const petals = [
    { c: "#2b6cb0", r: 0 },
    { c: "#6b46c1", r: 60 },
    { c: "#d53f8c", r: 120 },
    { c: "#dd6b20", r: 180 },
    { c: "#38a169", r: 240 },
    { c: "#319795", r: 300 },
  ];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g transform="translate(50 50)">
        {petals.map((p, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-24"
            rx="12"
            ry="24"
            fill={p.c}
            opacity="0.85"
            transform={`rotate(${p.r})`}
          />
        ))}
        <circle cx="0" cy="0" r="9" fill="#fff" />
      </g>
    </svg>
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
