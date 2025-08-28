import type { Metadata } from "next";
import "./globals.css";
import Navbar from './Navbar';
import { SessionProvider } from "next-auth/react";
import SessionWrapper from './SessionWrapper';

export const metadata: Metadata = {
  title: "Qynero - AI & SaaS Powered Business Solutions",
  description: "Transform your business with Qynero's AI & SaaS-powered solutions including CRM, document intelligence, predictive analytics, and more.",
  // verification wala part hata den
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}