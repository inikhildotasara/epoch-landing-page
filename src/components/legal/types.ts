export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "pills"; items: string[] }
  /* Statutory / regulatory context set apart from the Foundation's own commitments. */
  | { kind: "note"; text: string }
  | { kind: "highlight"; text: string }
  | { kind: "links"; items: { label: string; href: string }[] }
  | {
      kind: "contact";
      title?: string;
      rows: { label: string; value: string; href?: string }[];
    };

export type LegalSection = {
  id: string;
  num: string;
  title: string;
  blocks: LegalBlock[];
};
