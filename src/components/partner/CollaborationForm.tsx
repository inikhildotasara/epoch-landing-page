"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckIcon, HandshakeIcon, ShieldIcon } from "../icons";
import {
  CheckRow,
  ChoiceTile,
  Field,
  RadioRow,
  SelectInput,
  StepHeading,
  TextArea,
  TextInput,
} from "../form/fields";
import {
  broaderChoices,
  collaborationAreas,
  connectModes,
  contributions,
  initiativeChoices,
  MESSAGE_LIMIT,
  organisationTypes,
  scales,
  timeframes,
} from "./data";

type Values = {
  name: string;
  designation: string;
  orgType: string;
  areas: string[];
  initiatives: string[];
  contributions: string[];
  message: string;
  scale: string;
  timeframe: string;
  connectMode: string;
  phone: string;
  email: string;
  website: string;
};

const empty: Values = {
  name: "",
  designation: "",
  orgType: "",
  areas: [],
  initiatives: [],
  contributions: [],
  message: "",
  scale: "",
  timeframe: "",
  connectMode: "",
  phone: "",
  email: "",
  website: "",
};

type Errors = Partial<Record<keyof Values, string>>;

/* Checked in this order so the first field the visitor is sent back to is the
   earliest one in the form. */
const errorOrder: (keyof Values)[] = [
  "name",
  "designation",
  "orgType",
  "areas",
  "message",
  "phone",
  "email",
];

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name or organisation name.";
  if (!v.designation.trim())
    e.designation = "Please tell us your designation or role.";
  if (!v.orgType) e.orgType = "Please select an organisation type.";
  if (v.areas.length === 0)
    e.areas = "Please select at least one area to explore.";
  if (!v.message.trim())
    e.message = "Please tell us briefly what you would like to explore.";
  if (v.phone.replace(/\D/g, "").length < 10)
    e.phone = "Please enter a valid contact number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  return e;
}

function toggle(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

/* Option labels carry spaces and slashes, which are not valid in an id the
   label element has to point at. */
const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function CollaborationForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [failure, setFailure] = useState<string | null>(null);
  const [done, setDone] = useState<Values | null>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setV((prev) => ({ ...prev, [key]: value }));
    /* Clear the message as soon as the visitor starts fixing the field rather
       than making them submit again to find out. */
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(v);
    setErrors(found);
    setFailure(null);

    const first = errorOrder.find((k) => found[k]);
    if (first) {
      const el = document.getElementById(first);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLSelectElement ||
        el instanceof HTMLTextAreaElement
      )
        el.focus({ preventScroll: true });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/partnership-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error(String(res.status));
      setDone(v);
      /* The confirmation is much shorter than the form it replaces, so bring it
         back into view rather than leaving the visitor below the page. */
      requestAnimationFrame(() =>
        document
          .getElementById("collaborate")
          ?.scrollIntoView({ behavior: "smooth", block: "center" })
      );
    } catch {
      setFailure(
        "We could not send your proposal just now. Please try again, or write to us and we will take it from there."
      );
    } finally {
      setSending(false);
    }
  }

  if (done)
    return (
      <Submitted
        values={done}
        onAnother={() => {
          setDone(null);
          setV(empty);
          setErrors({});
        }}
      />
    );

  const invalidCount = Object.values(errors).filter(Boolean).length;

  return (
    <form
      id="collaborate"
      onSubmit={onSubmit}
      noValidate
      className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_24px_70px_-45px_rgba(11,28,63,0.5)]"
    >
      <div className="flex items-center justify-center gap-2.5 bg-navy px-4 py-3.5 lg:py-4">
        <HandshakeIcon className="h-[19px] w-[19px] text-gold" aria-hidden />
        <h2 className="text-center font-serif text-[14px] font-semibold uppercase tracking-[0.04em] text-white sm:text-[15.5px] lg:text-[17px]">
          Tell Us How We Can Collaborate
        </h2>
      </div>

      <div className="space-y-7 px-4 py-6 sm:px-6 lg:px-7 lg:py-7">
        {/* -------------------------------------------------- 1. about you */}
        <StepHeading num={1} title="About You">
          <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
            <Field
              label="Name / Organisation Name"
              htmlFor="name"
              required
              error={errors.name}
            >
              <TextInput
                id="name"
                name="name"
                autoComplete="organization"
                placeholder="Enter your name or organisation"
                value={v.name}
                invalid={!!errors.name}
                onChange={(e) => set("name", e.target.value)}
              />
            </Field>

            <Field
              label="Your Designation / Role"
              htmlFor="designation"
              required
              error={errors.designation}
            >
              <TextInput
                id="designation"
                name="designation"
                autoComplete="organization-title"
                placeholder="e.g. Director, CSR Head, Professor"
                value={v.designation}
                invalid={!!errors.designation}
                onChange={(e) => set("designation", e.target.value)}
              />
            </Field>

            <Field
              label="Organisation Type"
              htmlFor="orgType"
              required
              error={errors.orgType}
              className="sm:col-span-2"
            >
              <SelectInput
                id="orgType"
                name="orgType"
                placeholder="Select organisation type"
                options={organisationTypes}
                value={v.orgType}
                invalid={!!errors.orgType}
                onChange={(e) => set("orgType", e.target.value)}
              />
            </Field>
          </div>
        </StepHeading>

        {/* -------------------------------------------- 2. areas to explore */}
        <StepHeading
          num={2}
          title="Which area(s) would you like to explore?"
          hint="You may select multiple"
        >
          <fieldset id="areas">
            <legend className="sr-only">Areas you would like to explore</legend>
            <div className="grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
              {collaborationAreas.map((option) => (
                <CheckRow
                  key={option}
                  id={`area-${slug(option)}`}
                  checked={v.areas.includes(option)}
                  onChange={() => set("areas", toggle(v.areas, option))}
                >
                  {option}
                </CheckRow>
              ))}
            </div>
          </fieldset>
          {errors.areas && (
            <p className="mt-2.5 text-[11.5px] font-medium text-red-600">
              {errors.areas}
            </p>
          )}
        </StepHeading>

        {/* ----------------------------------------------- 3. initiatives */}
        <StepHeading
          num={3}
          title="Which initiative(s) would you like to explore?"
          hint="You may select multiple"
        >
          <fieldset>
            <legend className="sr-only">
              Initiatives you would like to explore
            </legend>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {initiativeChoices.map(({ id, desc, accent, tint, Icon }) => {
                const picked = v.initiatives.includes(id);
                return (
                  <label
                    key={id}
                    htmlFor={`initiative-${slug(id)}`}
                    className="flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold/60"
                    style={{
                      borderColor: picked ? accent : "#e2e8f0",
                      backgroundColor: picked ? tint : "#ffffff",
                    }}
                  >
                    <input
                      id={`initiative-${slug(id)}`}
                      type="checkbox"
                      className="sr-only"
                      checked={picked}
                      onChange={() =>
                        set("initiatives", toggle(v.initiatives, id))
                      }
                    />
                    <span
                      className="mt-px flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-md text-white"
                      style={{ backgroundColor: accent }}
                      aria-hidden
                    >
                      {/* The brand icon becomes the checkmark once the tile is
                          picked, so one square carries both states. */}
                      {picked ? (
                        <CheckIcon className="h-3.5 w-3.5" />
                      ) : (
                        Icon && <Icon className="h-4 w-4" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span
                        className="block text-[12px] font-bold leading-snug lg:text-[12.5px]"
                        style={{ color: accent }}
                      >
                        {id}
                      </span>
                      {desc && (
                        <span className="mt-0.5 block text-[11px] leading-snug text-slate-500 lg:text-[11.5px]">
                          {desc}
                        </span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-3 grid gap-2.5">
              {broaderChoices.map((option) => (
                <CheckRow
                  key={option}
                  id={`initiative-${slug(option)}`}
                  checked={v.initiatives.includes(option)}
                  onChange={() =>
                    set("initiatives", toggle(v.initiatives, option))
                  }
                >
                  {option}
                </CheckRow>
              ))}
            </div>
          </fieldset>
        </StepHeading>

        {/* --------------------------------------------- 4. contribution */}
        <StepHeading
          num={4}
          title="How would you like to contribute?"
          hint="You may select multiple"
        >
          <fieldset>
            <legend className="sr-only">How you would like to contribute</legend>
            <div className="grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
              {contributions.map((option) => (
                <CheckRow
                  key={option}
                  id={`contribute-${slug(option)}`}
                  checked={v.contributions.includes(option)}
                  onChange={() =>
                    set("contributions", toggle(v.contributions, option))
                  }
                >
                  {option}
                </CheckRow>
              ))}
            </div>
          </fieldset>
        </StepHeading>

        {/* -------------------------------------------------- 5. proposal */}
        <StepHeading
          num={5}
          title="Tell us briefly about your proposed collaboration."
          hint="Please tell us what you would like to explore, the problem or opportunity you see, and how you believe we could work together."
        >
          <TextArea
            id="message"
            name="message"
            rows={5}
            maxLength={MESSAGE_LIMIT}
            placeholder="Type your message here…"
            value={v.message}
            invalid={!!errors.message}
            onChange={(e) => set("message", e.target.value)}
          />
          <div className="mt-1 flex items-start justify-between gap-4">
            <p className="text-[11.5px] font-medium text-red-600">
              {errors.message}
            </p>
            <p className="shrink-0 text-[11px] tabular-nums text-slate-400">
              {v.message.length} / {MESSAGE_LIMIT}
            </p>
          </div>
        </StepHeading>

        {/* --------------------------------------- 6. scale and timeframe */}
        <StepHeading num={6} title="Scale of Collaboration">
          <div className="grid gap-5 sm:grid-cols-2">
            <fieldset>
              <legend className="text-[12px] font-semibold text-navy lg:text-[12.5px]">
                What scale are you considering?
              </legend>
              <div className="mt-2.5 grid gap-2.5">
                {scales.map((option) => (
                  <RadioRow
                    key={option}
                    id={`scale-${slug(option)}`}
                    name="scale"
                    checked={v.scale === option}
                    onChange={() => set("scale", option)}
                  >
                    {option}
                  </RadioRow>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-[12px] font-semibold text-navy lg:text-[12.5px]">
                Preferred timeframe
              </legend>
              <div className="mt-2.5 grid gap-2.5">
                {timeframes.map((option) => (
                  <RadioRow
                    key={option}
                    id={`timeframe-${slug(option)}`}
                    name="timeframe"
                    checked={v.timeframe === option}
                    onChange={() => set("timeframe", option)}
                  >
                    {option}
                  </RadioRow>
                ))}
              </div>
            </fieldset>
          </div>
        </StepHeading>

        {/* ------------------------------------------ 7. how to connect */}
        <StepHeading num={7} title="Preferred Way to Connect">
          <fieldset>
            <legend className="sr-only">Preferred way to connect</legend>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
              {connectModes.map(({ id, Icon }) => (
                <ChoiceTile
                  key={id}
                  id={`connect-${slug(id)}`}
                  name="connectMode"
                  type="radio"
                  icon={Icon}
                  checked={v.connectMode === id}
                  onChange={() => set("connectMode", id)}
                >
                  {id}
                </ChoiceTile>
              ))}
            </div>
          </fieldset>

          <div className="mt-4 grid gap-x-4 gap-y-4 sm:grid-cols-2">
            <Field
              label="Contact Number"
              htmlFor="phone"
              required
              error={errors.phone}
            >
              <TextInput
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={v.phone}
                invalid={!!errors.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </Field>

            <Field
              label="Email Address"
              htmlFor="email"
              required
              error={errors.email}
            >
              <TextInput
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="name@organisation.com"
                value={v.email}
                invalid={!!errors.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </Field>

            <Field
              label="Organisation Website (Optional)"
              htmlFor="website"
              className="sm:col-span-2"
            >
              <TextInput
                id="website"
                name="website"
                type="url"
                inputMode="url"
                autoComplete="url"
                placeholder="www.yourorganisation.com"
                value={v.website}
                onChange={(e) => set("website", e.target.value)}
              />
            </Field>
          </div>
        </StepHeading>
      </div>

      {/* ---------------------------------------------------- submit band */}
      <div className="border-t border-slate-100 bg-[#f7faff] px-4 py-6 sm:px-6 lg:px-7">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-gold px-6 py-3.5 text-center text-[12.5px] font-bold uppercase tracking-[0.05em] text-navy transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70 lg:text-[13.5px]"
        >
          {sending ? "Sending…" : "Let's Build the Future of Learning Together"}
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </button>

        <p className="mt-3 text-center text-[11.5px] leading-relaxed text-slate-500 lg:text-[12px]">
          Submit your partnership idea and our team will review it for a
          potential collaboration.
        </p>

        <p className="mt-3 flex items-start justify-center gap-2 text-[11px] leading-relaxed text-slate-500 lg:text-[11.5px]">
          <ShieldIcon className="mt-px h-3.5 w-3.5 shrink-0 text-navy-600" aria-hidden />
          Your information is safe with us and will only be used for partnership
          communication.
        </p>

        <div aria-live="polite">
          {invalidCount > 0 && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[12px] font-medium text-red-700 ring-1 ring-red-200">
              Please complete the {invalidCount} highlighted{" "}
              {invalidCount === 1 ? "field" : "fields"} above and submit again.
            </p>
          )}
          {failure && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[12px] font-medium text-red-700 ring-1 ring-red-200">
              {failure}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function Submitted({
  values,
  onAnother,
}: {
  values: Values;
  onAnother: () => void;
}) {
  return (
    <div
      id="collaborate"
      className="overflow-hidden rounded-2xl bg-white px-5 py-10 text-center ring-1 ring-slate-200/80 shadow-[0_24px_70px_-45px_rgba(11,28,63,0.5)] sm:px-8 lg:px-10 lg:py-12"
    >
      <span
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 lg:h-[72px] lg:w-[72px]"
        aria-hidden
      >
        <CheckIcon className="h-8 w-8 text-emerald-600 lg:h-9 lg:w-9" />
      </span>

      <h2 className="mt-5 font-serif text-[21px] font-medium text-navy lg:text-[26px]">
        Thank you — your proposal is with us
      </h2>
      <p className="mx-auto mt-3 max-w-[52ch] text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px]">
        We have your note, {values.name.trim() || "team"}. Our team will review
        it for a potential collaboration and get in touch
        {values.connectMode ? ` over ${values.connectMode.toLowerCase()}` : ""}.
      </p>

      {values.areas.length > 0 && (
        <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2">
          {values.areas.map((a) => (
            <li
              key={a}
              className="rounded-full bg-[#eef3fb] px-3.5 py-1.5 text-[11.5px] font-semibold text-navy lg:text-[12px]"
            >
              {a}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="/about"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-[12.5px] font-semibold text-navy transition-colors hover:bg-gold-dark sm:w-auto lg:text-[13.5px]"
        >
          Learn more about the Foundation
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        <button
          type="button"
          onClick={onAnother}
          className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-[12.5px] font-semibold text-navy transition-colors hover:bg-slate-50 sm:w-auto lg:text-[13.5px]"
        >
          Share another idea
        </button>
      </div>
    </div>
  );
}
