import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BREVIKO — Systemhaus & Interaktiv-Studio",
  description:
    "Wir bauen iOS Apps die sich richtig anfühlen. Lean-UX Engineering aus Ostwestfalen.",
  keywords: [
    "iOS",
    "App Entwicklung",
    "SwiftUI",
    "Lean UX",
    "Ostwestfalen",
    "BREVIKO",
  ],
  openGraph: {
    title: "BREVIKO — Systemhaus & Interaktiv-Studio",
    description:
      "Wir bauen iOS Apps die sich richtig anfühlen. Lean-UX Engineering aus Ostwestfalen.",
    locale: "de_DE",
    type: "website",
    url: "https://breviko.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
