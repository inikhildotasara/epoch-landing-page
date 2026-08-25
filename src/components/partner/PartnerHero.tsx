import {
  ArrowRight,
  BuildingIcon,
  BulbIcon,
  GlobeIcon,
  GroupIcon,
  MicroscopeIcon,
} from "../icons";
import type { IconType } from "./data";

/* Five collaborators around one handshake. Each node carries the centre of its
   circle as a percentage of the square, taken at equal steps around a radius
   of 44%, so the ring holds its shape at every width. */
const ring: { Icon: IconType; left: string; top: string }[] = [
  { Icon: BuildingIcon, left: "50%", top: "6%" },
  { Icon: BulbIcon, left: "91.8%", top: "36.4%" },
  { Icon: GroupIcon, left: "75.9%", top: "85.6%" },
  { Icon: MicroscopeIcon, left: "24.1%", top: "85.6%" },
  { Icon: GlobeIcon, left: "8.2%", top: "36.4%" },
];

export function PartnerHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 82% 0%, #fdf6e7 0%, rgba(253,246,231,0) 62%), radial-gradient(70% 70% at 0% 100%, #eff4fb 0%, rgba(239,244,251,0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full gap-9 px-4 pb-10 pt-9 sm:px-6 md:px-12 lg:px-page lg:pb-12 lg:pt-11 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] xl:gap-10">
        <div className="hero-anim">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-gold-dark lg:text-[12.5px]">
            Partner With Us
          </p>

          <h1 className="mt-3 font-serif leading-[1.08] text-navy">
            <span className="block text-[26px] font-medium sm:text-[32px] lg:text-[38px]">
              Let&rsquo;s Build
            </span>
            <span className="block text-[30px] font-semibold sm:text-[38px] lg:text-[46px]">
              the Future of
            </span>
            <span className="block text-[30px] font-semibold text-gold-dark sm:text-[38px] lg:text-[46px]">
              Learning Together
            </span>
          </h1>

          <span className="mt-4 flex items-center gap-2 lg:mt-5" aria-hidden>
            <span className="h-px w-8 bg-gold" />
            <span className="h-[7px] w-[7px] rotate-45 bg-gold" />
            <span className="h-px w-16 bg-gold/40" />
          </span>

          {/* Held to a readable measure for the widths where this column runs
              the full page. */}
          <div className="mt-5 max-w-[68ch] space-y-3 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px]">
            <p>
              Epoch Olympiad Foundation is building a research-led ecosystem to
              understand how children learn, think and grow beyond rote
              memorisation.
            </p>
            <p>
              We welcome meaningful collaborations with organisations,
              institutions, professionals and public bodies that share our
              commitment to better learning, stronger thinking and future-ready
              children.
            </p>
            <p>
              Whether you bring expertise, technology, resources, reach,
              research capability or a shared vision, there may be an
              opportunity to build something meaningful together.
            </p>
            <p className="font-serif text-[14px] font-medium text-navy lg:text-[16px]">
              Let&rsquo;s explore what we can create together.
            </p>
          </div>

          <a
            href="#collaborate"
            className="mt-6 inline-flex items-center gap-2.5 rounded-md bg-navy px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600 lg:mt-7 lg:text-[14px]"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="hero-fade grid gap-6 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] sm:items-center sm:gap-5">
          <div
            className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-none lg:max-w-[330px]"
            aria-hidden
          >
            <span className="absolute inset-0 rounded-full border border-dashed border-navy/20" />
            <span className="absolute inset-[13%] rounded-full bg-[#eef3fb]" />
            <span className="absolute inset-[13%] rounded-full ring-1 ring-navy/5" />

            <span className="absolute left-1/2 top-1/2 flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy shadow-[0_16px_36px_-18px_rgba(11,28,63,0.7)]">
              <img
                src="/images/partner-handshake.png"
                alt="Handshake representing partnership"
                className="h-full w-full rounded-full object-cover"
              />
            </span>

            {ring.map(({ Icon, left, top }, i) => (
              <span
                key={i}
                style={{ left, top }}
                className="absolute flex h-[17%] w-[17%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white ring-1 ring-navy/10 shadow-[0_10px_24px_-16px_rgba(11,28,63,0.6)]"
              >
                <Icon className="h-1/2 w-1/2 text-navy-600" />
              </span>
            ))}
          </div>

          <figure className="rounded-2xl bg-[#fdf6e7] px-5 py-6 ring-1 ring-gold/25 lg:px-6 lg:py-7">
            <span
              className="font-serif text-[34px] leading-none text-gold"
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="mt-1 font-serif text-[16px] font-medium leading-snug text-navy lg:text-[19px]">
              When purpose meets partnership, possibilities become progress.
            </blockquote>
            <span className="mt-4 block h-px w-12 bg-gold" aria-hidden />
            <figcaption className="mt-4 flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-gold/30"
                aria-hidden
              >
                <img
                  src="/images/LOGO - EPOCH.png"
                  alt=""
                  className="h-[22px] w-[22px] object-contain"
                />
              </span>
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-navy-600">
                Epoch Olympiad Foundation
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
