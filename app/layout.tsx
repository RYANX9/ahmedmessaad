import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { GrainOverlay } from "./components/illustrations";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmed Messaad — Signal & System",
  description:
    "AI/ML Engineer & Full-Stack Developer — medical imaging and deep learning research, plus the Next.js, Postgres, and API engineering that ships it.",
  icons: {
    icon: [{ url: "/ahmed-icon1.png", type: "image/png", sizes: "120x120" }],
    apple: "/ahmed-icon1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <link rel="icon" href="/ahmed-icon1.png" type="image/png" sizes="120x120" />
        <link rel="shortcut icon" href="/ahmed-icon1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/ahmed-icon1.png" />
        <meta name="theme-color" content="#efede6" />
      </head>
      <body className="antialiased">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
