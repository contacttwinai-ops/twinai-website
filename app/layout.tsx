import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import SessionWrapper from "./SessionWrapper";

export const metadata: Metadata = {
  title: "Qynero - AI & SaaS Powered Business Solutions",
  description:
    "Transform your business with Qynero's AI & SaaS-powered solutions including CRM, document intelligence, predictive analytics, and more.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Qynero - AI & SaaS Powered Business Solutions",
    description:
      "AI & SaaS-powered solutions including CRM, document intelligence, predictive analytics, and more.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Qynero",
              url: "https://qynero.vercel.app",
              logo: "https://qynero.vercel.app/android-chrome-512x512.png",
              sameAs: [
                "https://www.linkedin.com/company/qynero",
                "https://twitter.com/qynero",
                "https://github.com/qynero",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
