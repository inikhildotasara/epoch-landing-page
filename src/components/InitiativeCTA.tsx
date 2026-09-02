import { Reveal } from "./Reveal";
import { ArrowRight, BulbIcon } from "./icons";
import { siteBrands, type SiteBrand } from "@/content/site";

/* Closing band shared by the initiative detail pages. */
export function InitiativeCTA({ brand = "epoch" }: { brand?: SiteBrand }) {
  const { callHref } = siteBrands[brand];
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page pb-12 lg:pb-16">
        <Reveal className="flex flex-col items-center gap-5 rounded-2xl bg-navy px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-9">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
              <BulbIcon className="h-6 w-6 text-gold" strokeWidth={1.7} />
            </span>
            <div>
              <p className="font-serif text-[15px] font-semibold text-white lg:text-[17px]">
                Nurturing Curiosity. Building Thinking. Inspiring Futures.
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-300 lg:text-[12.5px]">
                Because every child is a brilliant thinker in the making.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <a
              href={callHref}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/10 lg:text-[14px]"
            >
              Contact Us
            </a>
            <a
              href="/register-your-school"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark lg:text-[14px]"
            >
              Register Your School <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
