import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Fraunces, } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-name",
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Ahmed Messaad — AM-2026",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
       <head>
        <link rel="icon" href="/ahmed-icon1.png" type="image/png" sizes="120x120" />
        <link rel="shortcut icon" href="/ahmed-icon1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/ahmed-icon1.png" />
        <meta name="theme-color" content="#0b0b0c" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
