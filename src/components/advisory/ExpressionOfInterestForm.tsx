"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckIcon, EditIcon, InfoIcon, ShieldIcon } from "../icons";
import {
  CheckRow,
  Field,
  SelectInput,
  TextArea,
  TextInput,
} from "../form/fields";
import { Reveal } from "../Reveal";
import { involvementOptions, MESSAGE_LIMIT, roleOptions } from "./interestData";
import { MailPreview } from "../form/MailPreview";
import { formMailtoHref, openFormMailto } from "@/lib/mailto";

type Values = {
  role: string;
  fullName: string;
  designation: string;
  organisation: string;
  location: string;
  email: string;
  phone: string;
  background: string;
  motivation: string;
  involvement: string;
  consent: boolean;
};

const empty: Values = {
  role: "",
  fullName: "",
  designation: "",
  organisation: "",
  location: "",
  email: "",
  phone: "",
  background: "",
  motivation: "",
  involvement: "",
  consent: false,
};

type Errors = Partial<Record<keyof Values, string>>;

/* Checked in this order so the first field the visitor is sent back to is the
   earliest one in the form. */
const errorOrder: (keyof Values)[] = [
  "role",
  "fullName",
  "designation",
  "organisation",
  "location",
  "email",
  "phone",
  "background",
  "motivation",
  "involvement",
  "consent",
];

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.role) e.role = "Please select the role you would like to be considered for.";
  if (!v.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!v.designation.trim())
    e.designation = "Please enter your current or most recent designation.";
  if (!v.organisation.trim())
    e.organisation = "Please enter your organisation or institution.";
  if (!v.location.trim()) e.location = "Please enter your city and country.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 10)
    e.phone = "Please enter a valid mobile / WhatsApp number.";
  if (!v.background.trim())
    e.background = "Please briefly describe your role, institution and expertise.";
  if (!v.motivation.trim())
    e.motivation = "Please tell us what motivates you to contribute.";
  if (!v.involvement)
    e.involvement = "Please select your preferred level of involvement.";
  if (!v.consent) e.consent = "Please confirm before submitting.";
  return e;
}

function mailFor(v: Values) {
  return {
    subject: "Advisor Expression of Interest",
    fields: [
      { label: "Role", value: v.role },
      { label: "Full Name", value: v.fullName },
      { label: "Designation", value: v.designation },
      { label: "Organisation / Institution", value: v.organisation },
      { label: "City / Country", value: v.location },
      { label: "Email", value: v.email },
      { label: "Mobile / WhatsApp", value: v.phone },
      { label: "Background", value: v.background },
      { label: "Motivation", value: v.motivation },
      { label: "Expected Involvement", value: v.involvement },
      { label: "Confirmation", value: v.consent },
    ],
  };
}

export function ExpressionOfInterestForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<Values | null>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setV((prev) => ({ ...prev, [key]: value }));
    /* Clear the message as soon as the visitor starts fixing the field rather
       than making them submit again to find out. */
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(v);
    setErrors(found);

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

    openFormMailto(mailFor(v));
    setDone(v);
    requestAnimationFrame(() =>
      document
        .getElementById("expression-of-interest")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    );
  }

  const invalidCount = Object.values(errors).filter(Boolean).length;

  return (
    <section id="expression-of-interest" className="bg-cream">
      <div className="mx-auto w-full px-4 pb-10 sm:px-6 md:px-12 lg:px-page lg:pb-14">
        <Reveal>
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-gold/40 bg-[#fef6e3] px-4 py-3.5 lg:mb-8 lg:items-center lg:px-5">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark lg:mt-0" />
            <p className="text-[12px] leading-relaxed text-navy sm:text-[12.5px]">
              Please review the eligibility and expected contribution above
              before submitting your Expression of Interest.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          {done ? (
            <Submitted
              values={done}
              onAnother={() => {
                setDone(null);
                setV(empty);
                setErrors({});
              }}
            />
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_24px_70px_-45px_rgba(11,28,63,0.5)]"
            >
              <div className="flex items-center justify-center gap-2.5 bg-navy px-4 py-3.5 lg:py-4">
                <EditIcon className="h-[19px] w-[19px] text-gold" aria-hidden />
                <h2 className="text-center font-serif text-[14px] font-semibold uppercase tracking-[0.04em] text-white sm:text-[15.5px] lg:text-[17px]">
                  Expression of Interest
                </h2>
              </div>

              <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                <p className="text-center text-[12px] leading-relaxed text-slate-500 sm:text-[12.5px]">
                  Tell us a little about yourself and how you would like to
                  contribute to the Foundation&rsquo;s vision.
                </p>

                <div className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:mt-7 lg:grid-cols-12 lg:gap-x-6">
                  <Field
                    label="Which role would you like to be considered for?"
                    htmlFor="role"
                    required
                    error={errors.role}
                    className="sm:col-span-2 lg:col-span-12"
                  >
                    <SelectInput
                      id="role"
                      name="role"
                      placeholder="Select a role"
                      options={roleOptions}
                      value={v.role}
                      invalid={!!errors.role}
                      onChange={(e) => set("role", e.target.value)}
                    />
                  </Field>

                  <Field
                    label="Full Name"
                    htmlFor="fullName"
                    required
                    error={errors.fullName}
                    className="lg:col-span-6"
                  >
                    <TextInput
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={v.fullName}
                      invalid={!!errors.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                    />
                  </Field>

                  <Field
                    label="Current / Most Recent Designation"
                    htmlFor="designation"
                    required
                    error={errors.designation}
                    className="lg:col-span-6"
                  >
                    <TextInput
                      id="designation"
                      name="designation"
                      autoComplete="organization-title"
                      placeholder="Enter your designation"
                      value={v.designation}
                      invalid={!!errors.designation}
                      onChange={(e) => set("designation", e.target.value)}
                    />
                  </Field>

                  <Field
                    label="Organisation / Institution"
                    htmlFor="organisation"
                    required
                    error={errors.organisation}
                    className="lg:col-span-6"
                  >
                    <TextInput
                      id="organisation"
                      name="organisation"
                      autoComplete="organization"
                      placeholder="Enter your organisation / institution"
                      value={v.organisation}
                      invalid={!!errors.organisation}
                      onChange={(e) => set("organisation", e.target.value)}
                    />
                  </Field>

                  <Field
                    label="City / Country"
                    htmlFor="location"
                    required
                    error={errors.location}
                    className="lg:col-span-6"
                  >
                    <TextInput
                      id="location"
                      name="location"
                      autoComplete="address-level2"
                      placeholder="Enter your city / country"
                      value={v.location}
                      invalid={!!errors.location}
                      onChange={(e) => set("location", e.target.value)}
                    />
                  </Field>

                  <Field
                    label="Email Address"
                    htmlFor="email"
                    required
                    error={errors.email}
                    className="lg:col-span-6"
                  >
                    <TextInput
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="Enter your email address"
                      value={v.email}
                      invalid={!!errors.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </Field>

                  <Field
                    label="Mobile / WhatsApp Number"
                    htmlFor="phone"
                    required
                    error={errors.phone}
                    className="lg:col-span-6"
                  >
                    <TextInput
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="Enter your mobile number"
                      value={v.phone}
                      invalid={!!errors.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </Field>

                  <Field
                    label="Please briefly describe your current or previous role, institution, experience and areas of expertise."
                    htmlFor="background"
                    required
                    error={errors.background}
                    className="sm:col-span-2 lg:col-span-12"
                  >
                    <TextArea
                      id="background"
                      name="background"
                      rows={3}
                      maxLength={MESSAGE_LIMIT}
                      placeholder="Share your key experience and expertise (max. 500 characters)"
                      value={v.background}
                      invalid={!!errors.background}
                      onChange={(e) => set("background", e.target.value)}
                    />
                    <p className="mt-1 text-right text-[11px] tabular-nums text-slate-400">
                      {v.background.length} / {MESSAGE_LIMIT}
                    </p>
                  </Field>

                  <Field
                    label="What motivates you to contribute to the Foundation’s vision?"
                    htmlFor="motivation"
                    required
                    error={errors.motivation}
                    className="sm:col-span-2 lg:col-span-12"
                  >
                    <TextArea
                      id="motivation"
                      name="motivation"
                      rows={3}
                      maxLength={MESSAGE_LIMIT}
                      placeholder="Tell us what connects you with our vision (max. 500 characters)"
                      value={v.motivation}
                      invalid={!!errors.motivation}
                      onChange={(e) => set("motivation", e.target.value)}
                    />
                    <p className="mt-1 text-right text-[11px] tabular-nums text-slate-400">
                      {v.motivation.length} / {MESSAGE_LIMIT}
                    </p>
                  </Field>

                  <Field
                    label="Expected involvement"
                    htmlFor="involvement"
                    required
                    error={errors.involvement}
                    className="sm:col-span-2 lg:col-span-12"
                  >
                    <SelectInput
                      id="involvement"
                      name="involvement"
                      placeholder="Select your preferred level of involvement"
                      options={involvementOptions}
                      value={v.involvement}
                      invalid={!!errors.involvement}
                      onChange={(e) => set("involvement", e.target.value)}
                    />
                  </Field>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <CheckRow
                    id="consent"
                    checked={v.consent}
                    onChange={(next) => set("consent", next)}
                  >
                    I confirm that the information provided above is accurate
                    and that I understand that submitting this Expression of
                    Interest does not guarantee appointment to the Advisory
                    Council.
                  </CheckRow>
                  {errors.consent && (
                    <p className="mt-2 text-[11.5px] font-medium text-red-600">
                      {errors.consent}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-slate-100 bg-[#f7faff] px-4 py-6 sm:px-6 lg:px-8">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-navy px-6 py-3.5 text-center text-[12.5px] font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-navy-700 lg:text-[13.5px]"
                >
                  Submit Expression of Interest
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </button>

                <p className="mt-3 flex items-start justify-center gap-2 text-center text-[11px] leading-relaxed text-slate-500 lg:text-[11.5px]">
                  <ShieldIcon
                    className="mt-px h-3.5 w-3.5 shrink-0 text-navy-600"
                    aria-hidden
                  />
                  All appointments are subject to review and invitation by
                  Epoch Olympiad Foundation.
                </p>

                <div aria-live="polite">
                  {invalidCount > 0 && (
                    <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[12px] font-medium text-red-700 ring-1 ring-red-200">
                      Please complete the {invalidCount} highlighted{" "}
                      {invalidCount === 1 ? "field" : "fields"} above and
                      submit again.
                    </p>
                  )}
                </div>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
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
    <div className="overflow-hidden rounded-2xl bg-white px-5 py-10 text-center ring-1 ring-slate-200/80 shadow-[0_24px_70px_-45px_rgba(11,28,63,0.5)] sm:px-8 lg:px-10 lg:py-12">
      <span
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 lg:h-[72px] lg:w-[72px]"
        aria-hidden
      >
        <CheckIcon className="h-8 w-8 text-emerald-600 lg:h-9 lg:w-9" />
      </span>

      <h2 className="mt-5 font-serif text-[21px] font-medium text-navy lg:text-[26px]">
        Your email is ready to send
      </h2>
      <p className="mx-auto mt-3 max-w-[56ch] text-[12.5px] leading-relaxed text-slate-600 lg:text-[13.5px]">
        Thank you, {values.fullName.trim() || "there"}. Please send the message
        that just opened — it already has your Expression of Interest for the{" "}
        {values.role || "role you selected"}.
      </p>

      <MailPreview fields={mailFor(values).fields} />

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={formMailtoHref(mailFor(values))}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-[12.5px] font-semibold text-navy transition-colors hover:bg-gold-dark sm:w-auto lg:text-[13.5px]"
        >
          Open email again
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        <button
          type="button"
          onClick={onAnother}
          className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-[12.5px] font-semibold text-navy transition-colors hover:bg-slate-50 sm:w-auto lg:text-[13.5px]"
        >
          Submit another interest
        </button>
      </div>
    </div>
  );
}
