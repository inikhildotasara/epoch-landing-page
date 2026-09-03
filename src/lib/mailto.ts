export const FORM_MAIL = "dotasaranikhilcse@gmail.com";

export type MailField = {
  label: string;
  value: unknown;
};

export type MailRow = {
  label: string;
  value: string;
};

function display(value: unknown): string | null {
  if (value === true) return "Yes";
  if (value === false) return "No";
  if (Array.isArray(value)) {
    const items = value.map((item) => String(item).trim()).filter(Boolean);
    return items.length ? items.join(", ") : null;
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed || null;
  }
  if (value == null) return null;
  const trimmed = String(value).trim();
  return trimmed || null;
}

/* mailto bodies are plain text, so labels are converted to Unicode bold
   letters — they stay bold in Gmail, Outlook and Apple Mail. */
function toBold(text: string): string {
  return Array.from(text, (ch) => {
    const code = ch.codePointAt(0);
    if (code == null) return ch;
    if (code >= 0x41 && code <= 0x5a)
      return String.fromCodePoint(0x1d5d4 + (code - 0x41));
    if (code >= 0x61 && code <= 0x7a)
      return String.fromCodePoint(0x1d5ee + (code - 0x61));
    if (code >= 0x30 && code <= 0x39)
      return String.fromCodePoint(0x1d7ec + (code - 0x30));
    return ch;
  }).join("");
}

export function filledMailRows(fields: MailField[]): MailRow[] {
  return fields.flatMap(({ label, value }) => {
    const shown = display(value);
    return shown ? [{ label, value: shown }] : [];
  });
}

export function formatMailBody(fields: MailField[], subject?: string): string {
  const rows = filledMailRows(fields).map(({ label, value }) =>
    value.includes("\n")
      ? `${toBold(label)}\n${value}`
      : `${toBold(label)}  :  ${value}`
  );

  if (!subject) return rows.join("\n\n");
  return `${toBold(subject)}\n${"─".repeat(28)}\n\n${rows.join("\n\n")}`;
}

export function formMailtoHref({
  subject,
  fields,
}: {
  subject: string;
  fields: MailField[];
}): string {
  const body = formatMailBody(fields, subject);
  return `mailto:${FORM_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openFormMailto(opts: {
  subject: string;
  fields: MailField[];
}): void {
  window.location.href = formMailtoHref(opts);
}
