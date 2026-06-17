import type { Metadata } from "next";
import {
  Anton,
  EB_Garamond,
  Instrument_Serif,
  Oswald,
  Space_Mono,
  Syne,
  VT323,
} from "next/font/google";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600"],
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FiveO — Web, apps & AI engineering for product teams",
  description:
    "FiveO ships production websites, web & mobile apps, cloud APIs, and LLM-powered features—discovery through launch, one senior team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${syne.variable} ${instrumentSerif.variable} ${ebGaramond.variable} ${oswald.variable} ${vt323.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-black font-sans text-cream"
        suppressHydrationWarning
      >
        <SmoothScroll>
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
