import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Preloader } from "@/components/ui/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Drift | Premium Ice Tea",
  description: "Experience the ultimate refreshment with Pure Drift Ice Tea. Crafted for those who appreciate premium quality and taste.",
  openGraph: {
    title: "Pure Drift | Premium Ice Tea",
    description: "Experience the ultimate refreshment with Pure Drift Ice Tea.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh] flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          <Navbar />
          <main className="flex-1 mt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
