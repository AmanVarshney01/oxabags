import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oxabags.com/"),
  title: {
    template: "%s | oxabags",
    default: "oxabags",
  },
  description:
    "Manufacturer, Wholesaler & Exporter of Jute bags, Cotton Bag for Corporate Events & Exhibitions",
  keywords:
    "Jute bags, Cotton Bag, Canvas Bags, File Folders, Denim Bags, Pouches",
  alternates: {
    canonical: "/",
  },
  category: "Shopping",
  openGraph: {
    title: "oxabags",
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
          fontSans.variable,
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
