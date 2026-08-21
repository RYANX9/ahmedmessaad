import type { Metadata } from "next";
import { Big_Shoulders_Display, Fraunces, JetBrains_Mono } from "next/font/google";
import { GrainOverlay } from "./components/illustrations";
import "./globals.css";

const bigShoulders = Big_Shoulders_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmed Messaad — Portfolio",
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
      className={`${bigShoulders.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/ahmed-icon1.png" type="image/png" sizes="120x120" />
        <link rel="shortcut icon" href="/ahmed-icon1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/ahmed-icon1.png" />
        <meta name="theme-color" content="#e9e8e3" />
      </head>
      <body className="antialiased">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
