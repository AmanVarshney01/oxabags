import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  SITE_CATEGORY,
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  category: SITE_CATEGORY,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: SITE_IMAGE,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          fontSans.className,
        )}
      >
        <main className="mx-auto max-w-7xl">
          <Header />
          {children}
          <Footer />
        </main>
        <FloatingBar />
        <Toaster />
      </body>
    </html>
  );
}
