import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "4Beauty Med Spa | Miami's #1 Non-Surgical Aesthetic Center",
  description:
    "Board-certified results with zero surgery and zero downtime. Led by Harvard-trained Dr. Mendieta. Serving Miami, Coral Gables, Brickell & Coconut Grove.",
  keywords: [
    "med spa Miami",
    "non-surgical aesthetics",
    "botox Miami",
    "Sculptra Miami",
    "Morpheus8 Miami",
    "non-surgical BBL Miami",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-brand-cream text-brand-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
