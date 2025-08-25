import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './Navbar';
import { SessionProvider } from "next-auth/react";
import SessionWrapper from './SessionWrapper';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Qynero - AI-Powered Business Solutions",
  description: "Transform your business with Qynero's AI-powered solutions including CRM, document intelligence, predictive analytics, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
