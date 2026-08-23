"use client";

import { useEffect, useRef, useState } from "react";
import { StarIcon } from "../icons";

function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const frame = requestAnimationFrame(() => setInView(true));
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return () => cancelAnimationFrame(frame);
    }
    cancelAnimationFrame(frame);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function AnimatedNumber({
  value,
  suffix = "",
  className = "",
  active,
  asSvg = false,
}: {
  value: number;
  suffix?: string;
  className?: string;
  active?: boolean;
  asSvg?: boolean;
}) {
  const { ref, inView } = useInView();
  const [displayValue, setDisplayValue] = useState(0);
  const isActive = active ?? inView;

  useEffect(() => {
    if (!isActive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setDisplayValue(value));
      return () => cancelAnimationFrame(frame);
    }

    const start = performance.now();
    const duration = 850;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isActive, value]);

  if (asSvg) return <tspan>{displayValue}{suffix}</tspan>;
  return <span ref={ref} className={className}>{displayValue}{suffix}</span>;
}

export function AnimatedDonut({
  value,
  label,
  color,
  suffix = "",
}: {
  value: number;
  label: string;
  color: string;
  suffix?: string;
}) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const filled = (Math.min(value, 100) / 100) * circumference;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <svg viewBox="0 0 72 72" className="h-[58px] w-[58px] shrink-0 sm:h-[64px] sm:w-[64px] lg:h-[70px] lg:w-[70px]" role="img" aria-label={`${label}: ${value}${suffix}`}>
        <circle cx="36" cy="36" r={radius} fill="none" stroke="#eef1f6" strokeWidth="7" />
        <circle
          cx="36" cy="36" r={radius} fill="none" stroke={color} strokeWidth="7"
          strokeLinecap="round" strokeDasharray={`${inView ? filled : 0} ${circumference}`}
          transform="rotate(-90 36 36)" className="report-donut-progress"
        />
        <text x="36" y="37" textAnchor="middle" dominantBaseline="middle" fontSize="21" fontWeight="600" fill="#0b1c3f">
          <AnimatedNumber value={value} suffix={suffix} active={inView} asSvg />
        </text>
      </svg>
      <span className="mt-2 text-[10.5px] font-medium leading-tight text-slate-600 lg:text-[11.5px]">{label}</span>
    </div>
  );
}

export function AnimatedMeter({
  label,
  value,
  color,
  caption,
}: {
  label: string;
  value: number;
  color: string;
  caption?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[11.5px] font-medium text-slate-700 lg:text-[12.5px]">{label}</span>
        <span className="text-[12px] font-bold tabular-nums text-navy lg:text-[13px]"><AnimatedNumber value={value} suffix="%" active={inView} /></span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100 lg:h-2.5">
        <div className="report-meter-progress h-full rounded-full" style={{ width: inView ? `${value}%` : "0%", backgroundColor: color }} />
      </div>
      {caption && <p className="mt-1 text-[10.5px] text-slate-400 lg:text-[11px]">{caption}</p>}
    </div>
  );
}

export function AnimatedStars({ value, max, color }: { value: number; max: number; color: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  return (
    <span ref={ref} className="flex shrink-0 gap-0.5" role="img" aria-label={`${value} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <StarIcon
          key={i} className="h-3.5 w-3.5 lg:h-4 lg:w-4" fill={i < value && inView ? color : "#e8ecf2"} stroke="none"
          style={{ color: i < value && inView ? color : "#e8ecf2", animationDelay: `${i * 90}ms` }}
          data-animated-star={inView && i < value ? "true" : undefined}
        />
      ))}
    </span>
  );
}
