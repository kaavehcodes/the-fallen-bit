import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "The Fallen Bit",
  description: "The Fallen Bit Game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ps2p.className}>{children}</body>
    </html>
  );
}
