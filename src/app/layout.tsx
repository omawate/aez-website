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
        <link rel="icon" href="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/63741e15608f0b87b4561559_final_logo-2.png" />
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
