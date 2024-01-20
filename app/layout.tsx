import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import Image from "next/image";
import whatsapp from "../public/WhatsAppButtonGreenSmall.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Amanasia",
    default: "Amanasia",
  },
  description:
    "Manufacturer, Wholesaler & Exporter of Jute bags, Cotton Bag for Corporate Events & Exhibitions",
  keywords:
    "Jute bags, Cotton Bag, Canvas Bags, File Folders, Denim Bags, Pouches",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="mx-auto min-h-svh max-w-7xl">
              <Header />
              {children}
              <Footer />
            </main>
            <Link href={"https://wa.me/9868151526"} target="_blank" rel="noopener noreferrer" >
              <Image
                className="fixed bottom-2 left-2 rounded-lg border border-black/20"
                width={140}
                // height={50}
                src={whatsapp}
                alt="whatsapp"
              />
            </Link>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
