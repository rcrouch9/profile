import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiko } from "next/font/google";
import Grid from "../components/backgroundGrid";
import Nav from "../components/nav";
import Menu from "../components/menu";
import "../styles/globals.css";

const amiko = Amiko({
  variable: "--font-amiko",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Personal Website",
  description: "My personal website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amiko.variable} antialiased`}
      >
        <header className="fixed z-10">
          <Nav />
        </header>
        <Grid/>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
