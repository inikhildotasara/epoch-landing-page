"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckIcon,
  ClipboardListIcon,
  GradCapIcon,
  GroupIcon,
  PhoneRingIcon,
  ShieldIcon,
  StarIcon,
} from "../icons";
import {
  affiliations,
  boards,
  classOptions,
  connectModes,
  connectTimes,
  countries,
  designations,
  indianStates,
  initiativeOptions,
  MESSAGE_LIMIT,
  OTHER_REQUIREMENT,
  requirementOptions,
  strengthRanges,
} from "./data";
import {
  CheckRow,
  Field,
  FormSection,
  RadioBox,
  SelectInput,
  TextArea,
  TextInput,
} from "./fields";
import { WhatWeLookFor } from "./WhatWeLookFor";

type Values = {
  schoolName: string;
  city: string;
  state: string;
  country: string;
  website: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  affiliation: string;
  board: string;
  strength: string;
  classFrom: string;
  classTo: string;
  initiatives: string[];
  requirements: string[];
  otherRequirement: string;
  message: string;
  connectModes: string[];
  connectTime: string;
  consent: boolean;
};

const empty: Values = {
  schoolName: "",
  city: "",
  state: "",
  country: "India",
  website: "",
  contactName: "",
  designation: "",
  email: "",
  phone: "",
  affiliation: "",
  board: "",
  strength: "",
  classFrom: "",
  classTo: "",
  initiatives: [],
  requirements: [],
  otherRequirement: "",
  message: "",
  connectModes: [],
  connectTime: "",
  consent: false,
};

type Errors = Partial<Record<keyof Values, string>>;

/* Checked in this order so the first field the visitor is sent back to is the
   earliest one on the page. */
const errorOrder: (keyof Values)[] = [
  "schoolName",
  "city",
  "state",
  "country",
  "contactName",
  "designation",
  "email",
  "phone",
  "strength",
  "classTo",
  "initiatives",
  "otherRequirement",
];

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.schoolName.trim()) e.schoolName = "Please enter your school name.";
  if (!v.city.trim()) e.city = "Please enter your city or town.";
  if (!v.state) e.state = "Please select a state.";
  if (!v.country) e.country = "Please select a country.";
  if (!v.contactName.trim()) e.contactName = "Please enter your name.";
  if (!v.designation) e.designation = "Please select your designation.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 10)
    e.phone = "Please enter a valid contact number.";
  if (!v.strength) e.strength = "Please select an approximate range.";
  if (
    v.classFrom &&
    v.classTo &&
    classOptions.indexOf(v.classTo as (typeof classOptions)[number]) <
      classOptions.indexOf(v.classFrom as (typeof classOptions)[number])
  )
    e.classTo = "The last class cannot come before the first.";
  if (v.initiatives.length === 0)
    e.initiatives = "Please select at least one initiative.";
  if (v.requirements.includes(OTHER_REQUIREMENT) && !v.otherRequirement.trim())
    e.otherRequirement = "Please tell us what you are looking for.";
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

export function RegistrationForm() {
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
      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement)
        el.focus({ preventScroll: true });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/school-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error(String(res.status));
      setDone(v);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setFailure(
        "We could not send your registration just now. Please try again, or reach us on WhatsApp and we will take it from there."
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
      onSubmit={onSubmit}
      noValidate
      className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_24px_70px_-40px_rgba(11,28,63,0.45)]"
    >
      <div className="space-y-9 px-4 py-7 sm:px-6 sm:py-8 lg:space-y-11 lg:px-9 lg:py-10">
        {/* ------------------------------------------------ 1. school */}
        <FormSection num={1} title="Details About Your School" icon={GradCapIcon}>
          <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-5">
            <Field
              label="School Name"
              htmlFor="schoolName"
              required
              error={errors.schoolName}
              className="lg:col-span-3"
            >
              <TextInput
                id="schoolName"
                name="schoolName"
                autoComplete="organization"
                placeholder="Enter school name"
                value={v.schoolName}
                invalid={!!errors.schoolName}
                onChange={(e) => set("schoolName", e.target.value)}
              />
            </Field>

            <Field
              label="School Location"
              required
              error={errors.city ?? errors.state ?? errors.country}
              className="sm:col-span-2 lg:col-span-6"
            >
              <div className="grid gap-2 sm:grid-cols-3">
                <TextInput
                  id="city"
                  name="city"
                  aria-label="City or town"
                  autoComplete="address-level2"
                  placeholder="City / Town"
                  value={v.city}
                  invalid={!!errors.city}
                  onChange={(e) => set("city", e.target.value)}
                />
                <SelectInput
                  id="state"
                  name="state"
                  aria-label="State"
                  placeholder="State"
                  options={indianStates}
                  value={v.state}
                  invalid={!!errors.state}
                  onChange={(e) => set("state", e.target.value)}
                />
                <SelectInput
                  id="country"
                  name="country"
                  aria-label="Country"
                  placeholder="Country"
                  options={countries}
                  value={v.country}
                  invalid={!!errors.country}
                  onChange={(e) => set("country", e.target.value)}
                />
              </div>
            </Field>

            <Field
              label="School Website"
              htmlFor="website"
              className="sm:col-span-2 lg:col-span-3"
            >
              <TextInput
                id="website"
                name="website"
                type="url"
                inputMode="url"
                autoComplete="url"
                placeholder="www.yourschool.edu (optional)"
                value={v.website}
                onChange={(e) => set("website", e.target.value)}
              />
            </Field>

            <Field
              label="Your Name"
              htmlFor="contactName"
              required
              error={errors.contactName}
              className="lg:col-span-3"
            >
              <TextInput
                id="contactName"
                name="contactName"
                autoComplete="name"
                placeholder="Enter your full name"
                value={v.contactName}
                invalid={!!errors.contactName}
                onChange={(e) => set("contactName", e.target.value)}
              />
            </Field>

            <Field
              label="Your Designation"
              htmlFor="designation"
              required
              error={errors.designation}
              className="lg:col-span-3"
            >
              <SelectInput
                id="designation"
                name="designation"
                placeholder="Select designation"
                options={designations}
                value={v.designation}
                invalid={!!errors.designation}
                onChange={(e) => set("designation", e.target.value)}
              />
            </Field>

            <Field
              label="Official School Email"
              htmlFor="email"
              required
              error={errors.email}
              className="lg:col-span-3"
            >
              <TextInput
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="name@school.edu"
                value={v.email}
                invalid={!!errors.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </Field>

            <Field
              label="Contact Number"
              htmlFor="phone"
              required
              error={errors.phone}
              className="lg:col-span-3"
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
              label="School Affiliation"
              htmlFor="affiliation"
              className="lg:col-span-3"
            >
              <SelectInput
                id="affiliation"
                name="affiliation"
                placeholder="Select affiliation"
                options={affiliations}
                value={v.affiliation}
                onChange={(e) => set("affiliation", e.target.value)}
              />
            </Field>

            <Field label="Board" htmlFor="board" className="lg:col-span-3">
              <SelectInput
                id="board"
                name="board"
                placeholder="Select board"
                options={boards}
                value={v.board}
                onChange={(e) => set("board", e.target.value)}
              />
            </Field>

            <Field
              label="Approx. Student Strength"
              htmlFor="strength"
              required
              error={errors.strength}
              className="lg:col-span-3"
            >
              <SelectInput
                id="strength"
                name="strength"
                placeholder="Select range"
                options={strengthRanges}
                value={v.strength}
                invalid={!!errors.strength}
                onChange={(e) => set("strength", e.target.value)}
              />
            </Field>

            <Field
              label="Classes Offered"
              error={errors.classTo}
              className="lg:col-span-3"
            >
              <div className="grid grid-cols-2 gap-2">
                <SelectInput
                  id="classFrom"
                  name="classFrom"
                  aria-label="Classes offered, from"
                  placeholder="From"
                  options={classOptions}
                  value={v.classFrom}
                  onChange={(e) => set("classFrom", e.target.value)}
                />
                <SelectInput
                  id="classTo"
                  name="classTo"
                  aria-label="Classes offered, to"
                  placeholder="To"
                  options={classOptions}
                  value={v.classTo}
                  invalid={!!errors.classTo}
                  onChange={(e) => set("classTo", e.target.value)}
                />
              </div>
            </Field>
          </div>
        </FormSection>

        {/* ------------------------------------------- 2. initiatives */}
        <FormSection
          num={2}
          title="Which Initiative Are You Interested In?"
          intro="Select one or more initiatives that match your requirements."
          icon={GroupIcon}
        >
          <fieldset id="initiatives">
            <legend className="sr-only">Initiatives you are interested in</legend>
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {initiativeOptions.map((option) => {
                const picked = v.initiatives.includes(option.id);
                return (
                  <label
                    key={option.id}
                    htmlFor={`initiative-${slug(option.id)}`}
                    className="relative flex cursor-pointer flex-col rounded-xl border p-4 pt-5 text-center transition-colors lg:p-5 lg:pt-6"
                    style={{
                      borderColor: picked ? option.accent : "#e2e8f0",
                      backgroundColor: picked ? option.tint : "#ffffff",
                      boxShadow: picked
                        ? `inset 0 0 0 1px ${option.accent}`
                        : undefined,
                    }}
                  >
                    <input
                      id={`initiative-${slug(option.id)}`}
                      type="checkbox"
                      className="peer sr-only"
                      checked={picked}
                      onChange={() =>
                        set("initiatives", toggle(v.initiatives, option.id))
                      }
                    />
                    <span
                      className="absolute right-3 top-3 flex h-[17px] w-[17px] items-center justify-center rounded-[4px] border bg-white text-transparent transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-gold/60 peer-focus-visible:ring-offset-1"
                      style={
                        picked
                          ? {
                              borderColor: option.accent,
                              backgroundColor: option.accent,
                              color: "#ffffff",
                            }
                          : { borderColor: "#cbd5e1" }
                      }
                      aria-hidden
                    >
                      <CheckIcon className="h-2.5 w-2.5" />
                    </span>

                    <span
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-full lg:h-[54px] lg:w-[54px]"
                      style={{ backgroundColor: option.accent }}
                      aria-hidden
                    >
                      <option.Icon className="h-7 w-7 text-white lg:h-8 lg:w-8" />
                    </span>

                    <span
                      className="mt-3 text-[13.5px] font-bold uppercase leading-tight tracking-[0.01em] lg:text-[14.5px]"
                      style={{ color: option.accent }}
                    >
                      {option.title}
                    </span>

                    {option.summary.length > 0 && (
                      <span className="mt-2 text-[11.5px] font-semibold leading-snug text-navy lg:text-[12.5px]">
                        {option.summary.join(" ")}
                      </span>
                    )}

                    {option.bullets.length > 0 && (
                      <span className="mt-3 flex flex-col gap-1.5 text-left">
                        {option.bullets.map((b) => (
                          <span key={b} className="flex items-start gap-1.5">
                            <CheckIcon
                              className="mt-[3px] h-3 w-3 shrink-0"
                              style={{ color: option.accent }}
                              aria-hidden
                            />
                            <span className="text-[11px] leading-snug text-slate-600 lg:text-[12px]">
                              {b}
                            </span>
                          </span>
                        ))}
                      </span>
                    )}

                    {option.note && (
                      <span className="mt-3 text-[11.5px] leading-relaxed text-slate-600 lg:text-[12px]">
                        {option.note}
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
          </fieldset>

          {errors.initiatives && (
            <p className="mt-3 text-[11.5px] font-medium text-red-600">
              {errors.initiatives}
            </p>
          )}

          <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-[#eef3fb] px-4 py-3 lg:items-center">
            <StarIcon
              className="mt-px h-4 w-4 shrink-0 text-navy-600 lg:mt-0"
              aria-hidden
            />
            <p className="text-[11.5px] leading-relaxed text-navy lg:text-[12.5px]">
              Not sure which initiative is right for your school? Select the last
              option and our team will guide you.
            </p>
          </div>
        </FormSection>

        {/* ----------------------------------------- 3. requirements */}
        <FormSection
          num={3}
          title="Tell Us Your Requirements"
          icon={ClipboardListIcon}
        >
          <fieldset>
            <legend className="text-[12.5px] font-semibold text-navy lg:text-[13px]">
              What would you like to know or request?{" "}
              <span className="font-normal text-slate-500">
                (Select all that apply)
              </span>
            </legend>
            {/* Four rows flowing down the columns from lg, so the list reads in
                the same order however many columns are on screen. */}
            <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-4">
              {requirementOptions.map((option) => (
                <CheckRow
                  key={option}
                  id={`req-${slug(option)}`}
                  checked={v.requirements.includes(option)}
                  onChange={() =>
                    set("requirements", toggle(v.requirements, option))
                  }
                >
                  {option}
                </CheckRow>
              ))}
            </div>
          </fieldset>

          {v.requirements.includes(OTHER_REQUIREMENT) && (
            <Field
              label="Please specify"
              htmlFor="otherRequirement"
              required
              error={errors.otherRequirement}
              className="mt-4 max-w-xl"
            >
              <TextInput
                id="otherRequirement"
                name="otherRequirement"
                placeholder="Tell us what you are looking for"
                value={v.otherRequirement}
                invalid={!!errors.otherRequirement}
                onChange={(e) => set("otherRequirement", e.target.value)}
              />
            </Field>
          )}

          <div className="mt-5">
            <label
              htmlFor="message"
              className="block text-[12.5px] font-semibold text-navy lg:text-[13px]"
            >
              Please share your specific requirement or question.
            </label>
            <div className="mt-1.5">
              <TextArea
                id="message"
                name="message"
                rows={4}
                maxLength={MESSAGE_LIMIT}
                placeholder="Your message..."
                value={v.message}
                onChange={(e) => set("message", e.target.value)}
              />
            </div>
            <p className="mt-1 text-right text-[11px] tabular-nums text-slate-400">
              {v.message.length} / {MESSAGE_LIMIT}
            </p>
          </div>
        </FormSection>

        {/* ------------------------------------- 4. what we look for */}
        <FormSection num={4} title="What We Look For" align="center">
          <WhatWeLookFor />
        </FormSection>

        {/* --------------------------------- 5. preferred way to connect */}
        <FormSection
          num={5}
          title="Preferred Way To Connect"
          align="center"
          icon={PhoneRingIcon}
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-8">
            <fieldset>
              <legend className="text-[12.5px] font-semibold text-navy lg:text-[13px]">
                How would you prefer we connect with you?
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {connectModes.map(({ id, Icon }) => {
                  const picked = v.connectModes.includes(id);
                  return (
                    <label
                      key={id}
                      htmlFor={`mode-${slug(id)}`}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-[12.5px] font-medium transition-colors lg:text-[13px] ${
                        picked
                          ? "border-navy bg-navy text-white"
                          : "border-slate-200 bg-white text-navy hover:border-slate-300"
                      }`}
                    >
                      <input
                        id={`mode-${slug(id)}`}
                        type="checkbox"
                        className="peer sr-only"
                        checked={picked}
                        onChange={() =>
                          set("connectModes", toggle(v.connectModes, id))
                        }
                      />
                      <Icon
                        className={`h-[17px] w-[17px] shrink-0 ${
                          picked ? "text-gold" : "text-navy-600"
                        }`}
                        aria-hidden
                      />
                      {id}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-[12.5px] font-semibold text-navy lg:text-[13px]">
                Preferred time to connect
              </legend>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {connectTimes.map(({ id, slot }) => (
                  <RadioBox
                    key={id}
                    id={`time-${slug(id)}`}
                    name="connectTime"
                    checked={v.connectTime === id}
                    onChange={() => set("connectTime", id)}
                  >
                    <span className="block font-medium">{id}</span>
                    <span className="mt-0.5 block whitespace-nowrap text-[11px] text-slate-500">
                      ({slot})
                    </span>
                  </RadioBox>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5">
            <CheckRow
              id="consent"
              checked={v.consent}
              onChange={(next) => set("consent", next)}
            >
              Yes, I would like to receive updates, brochures and important
              information from Epoch Olympiad Foundation.
            </CheckRow>
          </div>
        </FormSection>
      </div>

      {/* ------------------------------------------------ submit band */}
      <div className="bg-navy px-4 py-6 sm:px-6 lg:px-9 lg:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-start gap-3.5">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 lg:h-12 lg:w-12"
              aria-hidden
            >
              <ShieldIcon className="h-6 w-6 text-gold" />
            </span>
            <div className="min-w-0">
              <p className="font-serif text-[15px] font-medium text-white lg:text-[17px]">
                We value your time and trust.
              </p>
              <p className="mt-1 max-w-[52ch] text-[11.5px] leading-relaxed text-slate-300 lg:text-[12.5px]">
                The information you provide is secure with us and will be used
                only to connect and support your school.
              </p>
            </div>
          </div>

          <div className="shrink-0 lg:text-right">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-gold px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-navy transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto lg:px-8 lg:text-[14px]"
            >
              {sending ? "Submitting…" : "Submit Registration"}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <p className="mt-2.5 text-[11.5px] text-slate-400">
              Our team will review your details and get in touch with you
              shortly.
            </p>
          </div>
        </div>

        <div aria-live="polite">
          {invalidCount > 0 && (
            <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-[12px] font-medium text-red-200 lg:text-[12.5px]">
              Please complete the {invalidCount} highlighted{" "}
              {invalidCount === 1 ? "field" : "fields"} above and submit again.
            </p>
          )}
          {failure && (
            <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-[12px] font-medium text-red-200 lg:text-[12.5px]">
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
    <div className="overflow-hidden rounded-2xl bg-white px-5 py-10 text-center ring-1 ring-slate-200/80 shadow-[0_24px_70px_-40px_rgba(11,28,63,0.45)] sm:px-8 lg:px-12 lg:py-14">
      <span
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 lg:h-20 lg:w-20"
        aria-hidden
      >
        <CheckIcon className="h-8 w-8 text-emerald-600 lg:h-10 lg:w-10" />
      </span>

      <h2 className="mt-5 font-serif text-[22px] font-medium text-navy lg:text-[30px]">
        Registration received
      </h2>
      <p className="mx-auto mt-3 max-w-[58ch] text-[13px] leading-relaxed text-slate-600 lg:text-[14.5px]">
        Thank you, {values.contactName.trim() || "team"} — we have your details
        for {values.schoolName.trim() || "your school"}. Our team will review
        them and get in touch
        {values.connectTime ? ` in the ${values.connectTime.toLowerCase()}` : ""}
        {values.connectModes.length
          ? ` over ${values.connectModes.join(" or ")}`
          : ""}
        .
      </p>

      {values.initiatives.length > 0 && (
        <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
          {values.initiatives.map((i) => (
            <li
              key={i}
              className="rounded-full bg-[#eef3fb] px-3.5 py-1.5 text-[11.5px] font-semibold text-navy lg:text-[12.5px]"
            >
              {i}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="/academic-health-report"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-dark sm:w-auto lg:text-[14px]"
        >
          Explore the Academic Health Report
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        <button
          type="button"
          onClick={onAnother}
          className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-[13px] font-semibold text-navy transition-colors hover:bg-slate-50 sm:w-auto lg:text-[14px]"
        >
          Register another school
        </button>
      </div>
    </div>
  );
}
