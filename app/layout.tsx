import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Instrument_Serif, DM_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { profile, rail } from "./data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

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
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable} ${instrumentSerif.variable} ${dmMono.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
