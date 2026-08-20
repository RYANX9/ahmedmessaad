import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Amarante } from "next/font/google";
import localFont from "next/font/local";
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

const nameFont = Amarante({
  subsets: ["latin"],
  variable: "--font-name",
  weight: ["400"],
});

/*
const nameFont = localFont({
  src: "./fonts/DXRigraf-SemiBoldExpanded.otf",
  variable: "--font-name",
  weight: "700",
});
*/

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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${nameFont.variable}`}
    >
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
