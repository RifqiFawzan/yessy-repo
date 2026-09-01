import type { Metadata, Viewport } from "next";
import { Karla, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const karla = Karla({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Yessy Restaurant",
  description: "Exceptional dining experience at Yessy. Two unique locations, two distinct menus.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", karla.variable, playfair.variable, geistMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col grain-overlay animate-page-load">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
