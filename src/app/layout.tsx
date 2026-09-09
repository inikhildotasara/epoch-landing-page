import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Epoch Olympiad Foundation | Research Foundation",
  description:
    "Epoch Olympiad Foundation is an independent education research foundation transforming how children's cognitive abilities are measured, nurtured, and benchmarked.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
