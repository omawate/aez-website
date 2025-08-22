import type { Metadata } from "next";
import { inter, merriweather } from "@/lib/fonts";
import { generateMetadata } from "@/lib/metadata";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = generateMetadata({
  title: "Alpha Epsilon Zeta",
  description: "Berkeley's Premier Multidisciplinary Professional Fraternity",
  keywords: ["Alpha Epsilon Zeta", "AEZ", "UC Berkeley", "Professional Fraternity"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} font-inter antialiased`}
      >
        <Header transparent fixed />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
