import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  SVGProps,
  TextareaHTMLAttributes,
} from "react";
import { CheckIcon, ChevronDownIcon } from "../icons";

type IconType = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

/* Every control shares one silhouette so a row of inputs and selects lines up
   even though the browser renders them differently. */
const control =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-[13px] text-navy transition-colors placeholder:text-slate-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-gold/40 lg:text-[13.5px]";

const edge = (invalid?: boolean) =>
  invalid ? "border-red-400 bg-red-50/40" : "border-slate-200 hover:border-slate-300";

const labelText =
  "text-[12.5px] font-semibold leading-snug text-navy lg:text-[13px]";

/* ------------------------------------------------------------ section frame */

export function FormSection({
  num,
  title,
  intro,
  icon: Icon,
  align = "left",
  children,
}: {
  num: number;
  title: string;
  intro?: string;
  icon?: IconType;
  align?: "left" | "center";
  children: ReactNode;
}) {
  const heading = (
    <>
      <span className="text-[15px] font-semibold text-gold-dark lg:text-[17px]">
        {num}.
      </span>
      <h2 className="font-serif text-[15px] font-semibold uppercase leading-tight tracking-[0.02em] text-navy sm:text-[16.5px] lg:text-[19px]">
        {title}
      </h2>
    </>
  );

  return (
    <section>
      {align === "left" ? (
        <>
          <div className="flex items-center gap-3">
            {Icon && (
              <Icon
                className="hidden h-[26px] w-[26px] shrink-0 text-navy-600 sm:block lg:h-7 lg:w-7"
                aria-hidden
              />
            )}
            <div className="flex min-w-0 items-baseline gap-2">{heading}</div>
            <span className="hidden h-px flex-1 bg-slate-200 sm:block" />
          </div>
          {intro && (
            <p className="mt-2 text-[12px] text-slate-500 sm:pl-10 lg:text-[13px]">
              {intro}
            </p>
          )}
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden h-px flex-1 bg-slate-200 sm:block" />
            {Icon && (
              <Icon
                className="h-[26px] w-[26px] shrink-0 text-navy-600 lg:h-7 lg:w-7"
                aria-hidden
              />
            )}
            <div className="flex items-baseline gap-2">{heading}</div>
            <span className="hidden h-px flex-1 bg-slate-200 sm:block" />
          </div>
          {intro && (
            <p className="mt-2 text-center text-[12px] text-slate-500 lg:text-[13px]">
              {intro}
            </p>
          )}
        </>
      )}

      <div className="mt-5 lg:mt-6">{children}</div>
    </section>
  );
}

/**
 * A numbered step used where the form runs in a narrow column and the ruled
 * heading above would wrap awkwardly.
 */
export function StepHeading({
  num,
  title,
  hint,
  children,
}: {
  num: number;
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="flex items-start gap-2.5">
        <span
          className="mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-navy text-[11.5px] font-bold text-white"
          aria-hidden
        >
          {num}
        </span>
        <div className="min-w-0">
          <h3 className="text-[13px] font-semibold leading-snug text-navy lg:text-[13.5px]">
            {title}
          </h3>
          {hint && (
            <p className="mt-0.5 text-[11.5px] text-slate-500 lg:text-[12px]">
              {hint}
            </p>
          )}
        </div>
      </div>
      <div className="mt-3.5">{children}</div>
    </section>
  );
}

/* ----------------------------------------------------------------- controls */

export function Field({
  label,
  htmlFor,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  /* Omitted when the field is a group of controls rather than one input, in
     which case each control carries its own aria-label. */
  htmlFor?: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  const text = (
    <>
      {label}
      {required && (
        <span className="ml-0.5 text-red-500" aria-hidden>
          *
        </span>
      )}
    </>
  );

  return (
    <div className={className}>
      {htmlFor ? (
        <label htmlFor={htmlFor} className={`block ${labelText}`}>
          {text}
        </label>
      ) : (
        <span className={`block ${labelText}`}>{text}</span>
      )}
      <div className="mt-1.5">{children}</div>
      {error && (
        <p className="mt-1.5 text-[11.5px] font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

export function TextInput({
  invalid,
  className = "",
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      {...rest}
      aria-invalid={invalid || undefined}
      className={`${control} ${edge(invalid)} ${className}`}
    />
  );
}

export function SelectInput({
  invalid,
  placeholder,
  options,
  className = "",
  ...rest
}: SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <div className="relative">
      <select
        {...rest}
        aria-invalid={invalid || undefined}
        className={`${control} ${edge(invalid)} appearance-none pr-9 ${
          rest.value === "" ? "text-slate-400" : ""
        } ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-navy">
            {o}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
        aria-hidden
      />
    </div>
  );
}

export function TextArea({
  invalid,
  className = "",
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      {...rest}
      aria-invalid={invalid || undefined}
      className={`${control} ${edge(invalid)} resize-y leading-relaxed ${className}`}
    />
  );
}

/**
 * The native control stays in the DOM for keyboard and screen-reader support
 * and only its box is redrawn, which is why the mark is coloured through the
 * sibling span rather than nested inside it.
 */
function Box() {
  return (
    <span
      className="mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[4px] border border-slate-300 bg-white text-transparent transition-colors peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-gold/60 peer-focus-visible:ring-offset-1"
      aria-hidden
    >
      <CheckIcon className="h-2.5 w-2.5" />
    </span>
  );
}

export function CheckRow({
  id,
  checked,
  onChange,
  name,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  name?: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-snug text-navy lg:text-[13px]"
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <Box />
      <span className="pt-px transition-colors group-hover:text-navy-600">
        {children}
      </span>
    </label>
  );
}

/** The single-choice counterpart of CheckRow. */
export function RadioRow({
  id,
  name,
  checked,
  onChange,
  children,
}: {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-snug text-navy lg:text-[13px]"
    >
      <input
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span
        className="mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white transition-colors peer-checked:border-navy peer-focus-visible:ring-2 peer-focus-visible:ring-gold/60 peer-focus-visible:ring-offset-1"
        aria-hidden
      >
        <span
          className={`h-[7px] w-[7px] rounded-full transition-colors ${
            checked ? "bg-navy" : "bg-transparent"
          }`}
        />
      </span>
      <span className="pt-px transition-colors group-hover:text-navy-600">
        {children}
      </span>
    </label>
  );
}

/**
 * A time slot reads as a plain bordered tile, the way the printed layout shows
 * it — the selected state is carried by the tile itself rather than by a radio
 * dot, while the native radio underneath keeps it operable and announced.
 */
export function RadioBox({
  id,
  name,
  checked,
  onChange,
  children,
}: {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className={`relative flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-center transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold/60 ${
        checked
          ? "border-navy bg-navy/[0.05]"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <input
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-[12.5px] leading-tight text-navy lg:text-[13px]">
        {children}
      </span>
      {checked && (
        <span
          className="absolute right-2 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-navy text-white"
          aria-hidden
        >
          <CheckIcon className="h-2 w-2" />
        </span>
      )}
    </label>
  );
}

/** Option tile with an icon, used for short single- or multi-select rows. */
export function ChoiceTile({
  id,
  name,
  type,
  checked,
  onChange,
  icon: Icon,
  children,
}: {
  id: string;
  name?: string;
  type: "radio" | "checkbox";
  checked: boolean;
  onChange: () => void;
  icon?: IconType;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer flex-col items-center gap-1.5 rounded-lg border px-2 py-2.5 text-center transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold/60 ${
        checked
          ? "border-navy bg-navy text-white"
          : "border-slate-200 bg-white text-navy hover:border-slate-300"
      }`}
    >
      <input
        id={id}
        name={name}
        type={type}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {Icon && (
        <Icon
          className={`h-[18px] w-[18px] shrink-0 ${
            checked ? "text-gold" : "text-navy-600"
          }`}
          aria-hidden
        />
      )}
      <span className="text-[11.5px] font-medium leading-tight lg:text-[12px]">
        {children}
      </span>
    </label>
  );
}
