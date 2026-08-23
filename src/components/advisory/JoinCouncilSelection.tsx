import {
  BarChartArrowIcon,
  ClipboardListIcon,
  GlobeIcon,
  HandshakeIcon,
  OpenBookIcon,
  ShieldIcon,
} from "../icons";
import { Reveal } from "../Reveal";
import { CouncilIcon } from "./decor";

const pillars = [
  { label: "Academic Integrity", Icon: ShieldIcon },
  { label: "Assessment Excellence", Icon: BarChartArrowIcon },
  { label: "Educational Vision", Icon: OpenBookIcon },
  { label: "Global Perspective", Icon: GlobeIcon },
];

export function JoinCouncilSelection() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 pb-7 sm:px-6 md:px-12 lg:px-page lg:pb-9">
          <Reveal>
            <div className="grid overflow-hidden rounded-xl border border-[#eee7d8] bg-[#fffdf8] sm:grid-cols-2">
              <div className="flex items-start gap-3.5 p-5 sm:border-r sm:border-[#eee7d8] lg:p-6">
                <ClipboardListIcon className="mt-0.5 h-8 w-8 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <h3 className="text-[13px] font-bold text-navy sm:text-[13.5px]">
                    How We Select Advisory Members
                  </h3>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12px]">
                    Advisory Council membership is selective and based on
                    professional standing, relevant experience, credibility,
                    alignment with our educational vision and the potential to
                    make a meaningful contribution to the Foundation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 border-t border-[#eee7d8] p-5 sm:border-t-0 lg:p-6">
                <HandshakeIcon className="mt-0.5 h-8 w-8 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <h3 className="text-[13px] font-bold text-navy sm:text-[13.5px]">
                    These are honorary advisory positions.
                  </h3>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12px]">
                    There is no fixed monthly salary associated with
                    membership. Members contribute their experience,
                    perspective and time in a manner appropriate to their
                    role. Any engagement, honorarium or other approved
                    support, where applicable, will be communicated
                    separately and in accordance with the Foundation&apos;s
                    policies.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex w-full flex-col gap-5 px-4 py-6 sm:px-6 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-page lg:py-7">
          <div className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/60 sm:h-14 sm:w-14">
              <CouncilIcon className="h-6 w-6 text-gold sm:h-7 sm:w-7" />
            </span>
            <div>
              <h2 className="font-serif text-[16px] font-medium leading-snug sm:text-[18px]">
                Built on Expertise. Guided by Integrity. Inspired by Impact.
              </h2>
              <p className="mt-1 max-w-[62ch] text-[11px] leading-relaxed text-slate-300 sm:text-[11.5px]">
                Together, let us shape an education system that recognises
                true potential, nurtures young minds and prepares them for a
                meaningful future.
              </p>
            </div>
          </div>

          <div className="grid shrink-0 grid-cols-4 gap-3 border-t border-white/15 pt-4 sm:gap-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            {pillars.map(({ label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <Icon className="h-5 w-5 text-gold sm:h-6 sm:w-6" strokeWidth={1.5} />
                <span className="text-[9.5px] font-semibold leading-tight text-slate-200 sm:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
