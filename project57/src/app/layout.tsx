import type { Metadata } from "next";
import { Cormorant_Infant, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luca Villela | Web Portfolio",
    template: "%s | Luca Villela",
  },
  description:
    "Computer Engineering undergraduate focused on creating innovative software solutions.",
  keywords: [
    "portfolio",
    "full-stack",
    "react",
    "next.js",
    "Luca Villela",
    "software engineer",
    "datascience",
    "software developer",
  ],
  authors: [{ name: "Luca Villela" }],
  creator: "Luca Villela",
  metadataBase: new URL("https://project57.com.br"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://project57.com.br",
    title: "Luca Villela | Web Portfolio",
    description:
      "Computer Engineering undergraduate focused on creating innovative software solutions.",
    siteName: "Luca Villela Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luca Villela Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Villela | Web Developer Portfolio",
    description:
      "Computer Engineering undergraduate focused on creating innovative software solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${sourceSerif.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
