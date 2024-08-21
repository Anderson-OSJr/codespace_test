import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavBar from "@/components/MainNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SBEV Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavBar />
        {children}
      </body>
    </html>
  );
}
