import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "libzeno - Custom Apps for Businesses ",
  description: "libzeno creates powerful custom applications tailored for Businesses . Transform your business operations with specialized software solutions designed to meet your unique needs.",
  keywords: [
    "custom apps for small business",
    "business software solutions",
    "custom business applications",
    "small business software",
    "tailored software development",
    "business automation",
    "enterprise software for SMB",
    "libzeno",
  ],
  authors: [{ name: "libzeno" }],
  creator: "libzeno",
  publisher: "libzeno",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://libzeno.com",
    title: "libzeno - Custom Apps for Businesses ",
    description: "libzeno creates powerful custom applications tailored for Businesses . Transform your business operations with specialized software solutions designed to meet your unique needs.",
    siteName: "libzeno",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "libzeno - Custom Apps for Businesses ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "libzeno - Custom Apps for Businesses ",
    description: "libzeno creates powerful custom applications tailored for Businesses . Transform your business operations with specialized software solutions designed to meet your unique needs.",
    images: ["/logo.png"],
    creator: "@libzeno",
  },
  alternates: {
    canonical: "https://libzeno.com",
  },
  metadataBase: new URL("https://libzeno.com"),
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
        {children}
      </body>
    </html>
  );
}
