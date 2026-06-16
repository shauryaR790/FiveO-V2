import type { Metadata } from "next";
import { Anton, Instrument_Serif, Syne } from "next/font/google";
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
      className={`${anton.variable} ${syne.variable} ${instrumentSerif.variable} h-full antialiased`}
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
