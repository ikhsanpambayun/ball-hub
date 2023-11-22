import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import MouseBg from "@/components/mouse-bg";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BallHub",
  description: "Football Updates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("overflow-scroll no-scrollbar", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="bola-hub"
        >
          <main>
            <div className="-z-10 fixed top-0 left-0 bg-[url('/assets/bg/diagonal-stripes.svg')] h-screen w-screen opacity-5 flex flex-col justify-between">
              <div className="bg-gradient-to-b from-background to-transparent h-[40%] w-screen" />
              <div className="bg-gradient-to-t from-background to-transparent h-[40%] w-screen" />
            </div>
            <MouseBg />
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
