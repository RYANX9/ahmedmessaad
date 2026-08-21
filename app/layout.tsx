import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmed Messaad — Applied AI & Product Systems",
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
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/ahmed-icon1.png" type="image/png" sizes="120x120" />
        <link rel="shortcut icon" href="/ahmed-icon1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/ahmed-icon1.png" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
