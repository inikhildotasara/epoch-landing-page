import {
  BarChartArrowIcon,
  GlobeIcon,
  OpenBookIcon,
  ShieldIcon,
} from "../icons";
import { Reveal } from "../Reveal";
import { AdvisorySectionHeading } from "./decor";

const contributions = [
  {
    title: "Academic Integrity",
    body: "Strengthening the intellectual rigor and credibility of our assessment frameworks.",
    Icon: ShieldIcon,
  },
  {
    title: "Assessment Excellence",
    body: "Providing expert perspectives on question design, cognitive assessment and evaluation standards.",
    Icon: BarChartArrowIcon,
  },
  {
    title: "Educational Vision",
    body: "Helping anticipate the changing needs of learners, schools and educators.",
    Icon: OpenBookIcon,
  },
  {
    title: "Global Perspective",
    body: "Encouraging meaningful benchmarking and internationally relevant educational practices.",
    Icon: GlobeIcon,
  },
];

/* Cell separators differ per column count: stacked (1), paired (2) and the
   full four-across row, so each cell gets its own explicit border set. */
const cellBorders = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

export function CouncilContributes() {
  return (
    <section className="bg-cream">
      <div className="mx-auto w-full px-4 py-7 sm:px-6 md:px-12 lg:px-page lg:py-9 2xl:py-11">
        <Reveal className="overflow-hidden rounded-xl border border-[#ece3d2] bg-[#faf8f2]">
          <div className="px-4 pt-6 sm:px-6 lg:pt-7">
            <AdvisorySectionHeading label="What Our Advisory Council Contributes" />
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4">
            {contributions.map(({ title, body, Icon }, i) => (
              <div
                key={title}
                className={`flex flex-col items-center border-[#ece3d2] px-5 py-6 text-center sm:px-4 lg:px-3.5 lg:py-7 xl:px-6 2xl:px-8 ${cellBorders[i]}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy lg:h-12 lg:w-12">
                  <Icon className="h-[21px] w-[21px] text-gold lg:h-[23px] lg:w-[23px]" />
                </span>
                <h3 className="mt-3.5 font-serif text-[14.5px] font-medium text-navy lg:mt-4 lg:text-[15px] xl:text-[16.5px] 2xl:text-[17px]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[34ch] text-[11.5px] leading-relaxed text-slate-600 lg:text-[12.5px]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
