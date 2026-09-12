import Image from "next/image";
import { Reveal } from "../Reveal";

const principals = [
  {
    heading: "Better Visibility of Every Child",
    name: "Sr. Maria Sabs",
    role: "Principal",
    school: "Aradhana Convent, Pakhanjore",
    quote:
      "MY CCBee has helped us move beyond simply recording a child’s performance. It gives us a clearer view of each child’s progress and helps our teachers identify where individual attention is needed.",
    photo: "/images/ccbee-principals/Sr. Maria Sabs.jpg",
  },
  {
    heading: "Early Identification & Intervention",
    name: "Dr. Veena Silas",
    role: "Principal",
    school: "Mother Teresa Mission H.S. School, Kanpur",
    quote:
      "The biggest value of MY CCBee is timely insight. It helps our teachers notice areas where a child may need support and take action before a small learning gap becomes a bigger concern.",
    photo: "/images/ccbee-principals/Dr. Veena Silas.png",
  },
  {
    heading: "Stronger Parent–School Partnership",
    name: "Sr. Cicillia",
    role: "Principal",
    school: "Chavara H.S. School, Kondagaon",
    quote:
      "MY CCBee has strengthened communication between our school and parents. Parents get a better understanding of their child’s everyday progress, making the conversation about development more meaningful.",
    photo: "/images/ccbee-principals/Sr. Cicilia.jpg",
  },
  {
    heading: "Making Teacher Observations More Meaningful",
    name: "Mrs. Amita Tiwari",
    role: "Principal",
    school: "Gulmohar School, Kanpur",
    quote:
      "MY CCBee has brought greater structure to the way we observe and track children. Our teachers can document progress more effectively and use those insights to support each child better.",
    photo: "/images/ccbee-principals/Mrs. Amita Tiwati.jpg",
  },
  {
    heading: "From Records to Action",
    name: "Mrs. Jolly Murty",
    role: "Principal",
    school: "Moonstone International School, Jagdalpur",
    quote:
      "What makes MY CCBee different for us is that it turns day-to-day observations into useful information. It helps our school understand what is happening with each child and where we need to focus.",
    photo: "/images/ccbee-principals/Mrs. Jolly Murty.png",
  },
  {
    heading: "A More Holistic View of the Child",
    name: "Mrs. Anjali Bajpai",
    role: "Principal",
    school: "Dr. Virendra Swarup Public School, Kanpur",
    quote:
      "MY CCBee has helped us look at children beyond marks and academic performance. By tracking their everyday school activities and development, we get a more complete picture of the child.",
    photo: "/images/ccbee-principals/Mrs. Anjali Bajpai.jpg",
  },
];

export function CCBeeVoices() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full px-4 pb-10 sm:px-6 md:px-12 lg:px-page lg:pb-14">
        <Reveal className="rounded-2xl border border-[#e0759f]/70 px-5 py-6 lg:px-7 lg:py-7">
          <h2 className="text-center font-serif text-[17px] font-semibold text-navy lg:text-[19px]">
            Voices That Inspire Us
          </h2>
          <p className="mt-3 text-center text-[12px] font-semibold text-navy lg:text-[12.5px]">
            What School Leaders Say
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {principals.map((p) => (
              <div
                key={p.name}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center gap-3.5">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    width={320}
                    height={320}
                    sizes="(min-width: 1024px) 112px, 96px"
                    className="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-slate-200 lg:h-28 lg:w-28"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[12.5px] font-bold leading-snug text-navy lg:text-[13px]">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                      {p.role}
                      <br />
                      {p.school}
                    </p>
                  </div>
                </div>
                <h4 className="mt-3 text-[12px] font-bold text-navy lg:text-[12.5px]">
                  {p.heading}
                </h4>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-600 lg:text-[12.5px]">
                  &ldquo;{p.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
