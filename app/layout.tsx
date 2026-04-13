import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StickyFooterBar } from "@/components/StickyFooterBar";
import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karakalem Atölye | Özel Portre & Çizim",
  description:
    "Karakalem, kuru fırçalama, kuru pastel ve yağlı boya portre atölyesi. Özel sipariş portreler.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${newsreader.variable} ${workSans.variable} bg-background font-body text-on-surface selection:bg-primary/30`}
      >
        <Navbar />
        <main className="pb-[var(--sticky-bar-offset)] pt-[6rem] lg:pt-[6.75rem]">
          {children}
        </main>
        <Footer />
        <StickyFooterBar />
      </body>
    </html>
  );
}
