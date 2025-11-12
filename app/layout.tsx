import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:"portfolio",
  description: "A perfect websites template for the showcase your projects and skills as Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// antialiased is used for the Font smoothness on the websites