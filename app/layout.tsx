import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenya Educational Resources For Rural Schools",
  description: "Kenya Educational Resources For Rural Schools, Inc. (KERRS) is a non-profit organization dedicated to promoting academic excellence in rural schools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-background`}
      >
        <div className={'relative min-h-screen max-w-[100vw] overflow-hidden'}>
          <Nav/>
          <main className={'mb-[105px]'}>
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
