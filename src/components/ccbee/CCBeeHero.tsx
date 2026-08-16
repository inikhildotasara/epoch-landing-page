import Link from "next/link";
import { Reveal } from "../Reveal";
import {
  ArrowRight,
  BulbIcon,
  CalendarIcon,
  PlayIcon,
  TargetIcon,
  TrendUpIcon,
} from "../icons";

const CCBEE_BLUE = "#1a5fb4";

const badges = [
  { icon: CalendarIcon, label: "Daily Tracking" },
  { icon: BulbIcon, label: "Smart Insights" },
  { icon: TargetIcon, label: "Timely Action" },
  { icon: TrendUpIcon, label: "Better Growth" },
];

export function CCBeeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pt-4 pb-10 lg:pb-14">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[11.5px] text-slate-500 lg:text-[12px]"
        >
          <Link href="/" className="transition-colors hover:text-navy">
            Home
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <Link href="/initiatives" className="transition-colors hover:text-navy">
            Our Initiatives
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <span className="font-semibold text-navy">MY CCBee</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_42%] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_46%] xl:gap-10">
          <Reveal className="hero-anim">
            <h1 className="flex items-center gap-2 font-serif text-[30px] font-semibold leading-[1.05] text-navy sm:text-[40px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]">
              <span>
                MY <span style={{ color: CCBEE_BLUE }}>CCBee</span>
              </span>
              {/* Bee mark from the MY CCBee lockup; multiply blends its white
                  backdrop into the page */}
              <img
                src="/images/ccbee-bee.png"
                alt=""
                aria-hidden
                className="h-8 w-8 shrink-0 mix-blend-multiply sm:h-10 sm:w-10 xl:h-12 xl:w-12"
              />
            </h1>
            <p
              className="mt-3 text-[14px] font-semibold leading-snug lg:text-[14.5px] xl:text-[15px]"
              style={{ color: CCBEE_BLUE }}
            >
              Performance Tracker &amp; Booster Platform
              <br className="hidden sm:block" /> for Playgroup to Class 2
            </p>
            <p className="mt-4 font-serif text-[24px] font-semibold leading-[1.12] text-navy sm:text-[30px] lg:text-[28px] xl:text-[34px]">
              See. Understand. Act.
              <br />
              &mdash; Every Day.
            </p>
            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
              MY CCBee connects parents, teachers and schools on one smart
              platform to track every activity and performance of a child on
              daily basis, so the right action can happen at the right time.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 lg:gap-x-3 xl:gap-x-6">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <li
                    key={b.label}
                    className="flex items-center gap-2 text-[12px] font-semibold text-navy lg:gap-1.5 lg:text-[11.5px] xl:gap-2 xl:text-[12.5px]"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 lg:h-4 lg:w-4 xl:h-5 xl:w-5"
                      strokeWidth={1.7}
                    />
                    {b.label}
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600 lg:text-[14px]"
              >
                Request For Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-navy lg:text-[13.5px]"
              >
                Watch How It Works
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <PlayIcon className="h-3 w-3" />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative">
            <div className="rounded-2xl bg-[#eef3fb] p-4 sm:p-5 lg:p-4 xl:p-6">
              <div className="overflow-hidden rounded-xl border-[5px] border-[#1b2436] bg-[#1b2436] shadow-lg">
                <img
                  src="/images/card-ccbee.png"
                  alt="MY CCBee dashboard showing daily performance and attendance insights"
                  className="aspect-[16/10] w-full rounded-md object-cover object-top"
                />
              </div>
              {/* Companion phone view, tucked against the dashboard from sm up.
                  The screen is the zoomed top-left of the same dashboard. */}
              <div className="absolute -bottom-4 right-2 hidden w-[64px] overflow-hidden rounded-[10px] border-[4px] border-[#1b2436] bg-[#1b2436] shadow-lg sm:block lg:w-[58px] xl:w-[72px]">
                <div className="aspect-[9/17] w-full overflow-hidden rounded-[5px]">
                  <img
                    src="/images/card-ccbee.png"
                    alt=""
                    aria-hidden
                    className="w-[300%] max-w-none -translate-x-[6%] -translate-y-[3%]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
