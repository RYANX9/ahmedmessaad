import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ahmed Messaad — Signal Atlas",
  description:
    "Ahmed Messaad — AI/ML engineer, full-stack developer and researcher.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
