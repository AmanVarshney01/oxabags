import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";


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
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
  );
}
