import React from "react";
import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { ScrollBackground } from "../components/ScrollBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "AI-Augmented | Command Intelligence",
  description: "A premium 3D immersive experience for an AI advisory platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} bg-[#050505] text-white antialiased selection:bg-[#00f0ff] selection:text-black`}>
        <Navigation />
        <ScrollBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}