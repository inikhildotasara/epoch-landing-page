import { filledMailRows, type MailField } from "@/lib/mailto";

export function MailPreview({ fields }: { fields: MailField[] }) {
  const rows = filledMailRows(fields);
  if (rows.length === 0) return null;

  return (
    <dl className="mx-auto mt-7 max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-[#f7faff] text-left">
      {rows.map((row, i) => (
        <div
          key={`${row.label}-${i}`}
          className={`grid grid-cols-1 gap-0.5 px-4 py-2.5 sm:grid-cols-[11.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-4 ${
            i ? "border-t border-slate-200/80" : ""
          }`}
        >
          <dt className="text-[12px] font-bold text-navy lg:text-[13px]">
            {row.label}
          </dt>
          <dd className="whitespace-pre-wrap text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px]">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
