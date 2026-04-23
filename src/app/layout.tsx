import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import InactivityProvider from "@/components/InactivityProvider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solora Fresh — Fresh Produce Packaging Solutions",
  description:
    "From greenhouse to grocery with confidence. Smart, sustainable packaging solutions for the fresh produce industry. Since 1952.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden">
        <InactivityProvider>{children}</InactivityProvider>
      </body>
    </html>
  );
}
