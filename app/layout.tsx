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
  title: "BREVIKO — Apps die sich richtig anfühlen.",
  description:
    "App-Entwicklung & KI-Beratung aus Ostwestfalen. iOS Apps nach Lean-UX-Prinzipien. Schulungen, Beratung, Umsetzung.",
  keywords: [
    "iOS",
    "App Entwicklung",
    "SwiftUI",
    "Lean UX",
    "Ostwestfalen",
    "BREVIKO",
  ],
  openGraph: {
    title: "BREVIKO — Apps die sich richtig anfühlen.",
    description:
      "App-Entwicklung & KI-Beratung aus Ostwestfalen. iOS Apps nach Lean-UX-Prinzipien.",
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
