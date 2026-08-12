import { Reveal } from "../Reveal";
import { AchieversRail } from "./AchieversRail";
import {
  BrainIcon,
  NetworkIcon,
  ChipIcon,
  TargetIcon,
  CertificateIcon,
  ArrowRight,
} from "../icons";

const PURPLE = "#6d4aa7";

const features = [
  {
    icon: NetworkIcon,
    title: "Who Can Participate",
    desc: "Kindergarten learners",
  },
  {
    icon: ChipIcon,
    title: "What It Assesses",
    desc: "Foundational cognitive abilities and learning readiness",
  },
  {
    icon: TargetIcon,
    title: "Purpose",
    desc: "Build thinking skills before relying on memorisation",
  },
  {
    icon: CertificateIcon,
    title: "Outcome",
    desc: "Academic Health Report with parent-friendly insights",
  },
];

export function InitiativeBrainiac() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-page py-6 lg:py-8">
        <Reveal className="rounded-2xl border border-slate-200 bg-[#faf8fe] p-5 sm:p-7 lg:p-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[230px_minmax(0,1fr)_200px] lg:gap-8 xl:grid-cols-[250px_minmax(0,1fr)_210px_180px]">
            {/* Photo + number */}
            <div className="relative">
              <span
                className="pointer-events-none absolute -top-2 left-1 font-serif text-[54px] font-bold leading-none lg:text-[64px]"
                style={{ color: PURPLE, opacity: 0.28 }}
              >
                01
              </span>
              <div
                className="mt-6 overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#efe8fb" }}
              >
                <img
                  src="/images/init-brainiac.png"
                  alt="Young learner stacking blocks"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Main content */}
            <div>
              <h3
                className="font-serif text-[26px] font-semibold lg:text-[30px]"
                style={{ color: PURPLE }}
              >
                Brainiac Global
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-navy lg:text-[16px]">
                Building Thinking Before Memorisation
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600 lg:text-[14px]">
                Brainiac Global is our early-years cognitive assessment initiative
                that helps understand how young learners observe, explore, connect
                ideas and solve simple problems.
              </p>

              <div
                className="mt-5 rounded-xl p-4 lg:p-5"
                style={{ backgroundColor: "#f2ecfb" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                    <BrainIcon
                      className="h-6 w-6"
                      style={{ color: PURPLE }}
                      strokeWidth={1.7}
                    />
                  </span>
                  <h4 className="font-serif text-[17px] font-semibold text-navy lg:text-[18px]">
                    Brain Booster Olympiad Exam
                  </h4>
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-slate-600 lg:text-[13px]">
                  A fun and engaging assessment that nurtures observation, logic,
                  patterns, spatial skills and early problem-solving abilities.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-600"
                >
                  Explore Exam Details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-3">
                    <Icon
                      className="h-7 w-7 shrink-0"
                      style={{ color: PURPLE }}
                      strokeWidth={1.6}
                    />
                    <div>
                      <h5 className="text-[13.5px] font-bold text-navy lg:text-[14px]">
                        {f.title}
                      </h5>
                      <p className="mt-0.5 text-[12px] leading-snug text-slate-500 lg:text-[12.5px]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Achievers + FAQ rail */}
            <AchieversRail
              accent={PURPLE}
              gallery={
                <img
                  src="/images/achievers-brainiac.png"
                  alt="A young achiever with a certificate"
                  className="h-28 w-full object-cover"
                />
              }
            />
          </div>
        </Reveal>

        {/* More assessments bar */}
        <Reveal delay={80}>
          <div className="mt-5 flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-4 lg:px-7 lg:py-5">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[22px] font-light"
              style={{ backgroundColor: "#f2ecfb", color: PURPLE }}
            >
              +
            </span>
            <div>
              <h4 className="text-[15px] font-bold text-navy lg:text-[16px]">
                More Assessments Coming Soon
              </h4>
              <p className="mt-0.5 text-[12.5px] text-slate-500 lg:text-[13px]">
                New early-years assessments will be introduced as our research
                expands.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
