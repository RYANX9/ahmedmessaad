import type { Metadata } from "next";
import "./globals.css";
import { profile, rail } from "./data";

export const metadata: Metadata = {
  title: `${rail.firstName} ${rail.lastName} — Contact Sheet`,
  description: `${rail.firstName} ${rail.lastName} — ${rail.roles.join(", ")}.`,
  authors: [{ name: `${rail.firstName} ${rail.lastName}`, url: profile.linkedin }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
