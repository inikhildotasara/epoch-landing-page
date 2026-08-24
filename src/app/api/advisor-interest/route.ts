import { NextResponse } from "next/server";

/**
 * Receives an Advisory Council expression of interest.
 *
 * Delivery is deliberately kept behind one environment variable: set
 * ADVISOR_INTEREST_WEBHOOK_URL to a Google Apps Script / CRM / Zapier
 * endpoint and every submission is forwarded there as JSON. Until that is
 * configured the submission is recorded in the server log so nothing is
 * silently lost.
 */

type Payload = Record<string, unknown>;

const required = [
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
] as const;

function problem(body: Payload): string | null {
  for (const key of required) {
    if (typeof body[key] !== "string" || !(body[key] as string).trim())
      return `Missing ${key}.`;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(body.email).trim()))
    return "Invalid email address.";
  if (String(body.phone).replace(/\D/g, "").length < 10)
    return "Invalid contact number.";
  if (body.consent !== true) return "Confirmation is required.";
  return null;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const invalid = problem(body);
  if (invalid) return NextResponse.json({ error: invalid }, { status: 400 });

  const submission = { ...body, receivedAt: new Date().toISOString() };
  const webhook = process.env.ADVISOR_INTEREST_WEBHOOK_URL;

  if (webhook) {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });
    if (!forwarded.ok)
      return NextResponse.json(
        { error: "Could not record the expression of interest." },
        { status: 502 }
      );
  } else {
    console.info("[advisor-interest]", JSON.stringify(submission));
  }

  return NextResponse.json({ ok: true });
}
