import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${Config.title} - ${Config.slogan}`,
    absolute: `${Config.title} - ${Config.slogan}`,
  },
  description: Config.description,
  keywords: Config.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", jetBrainsMono.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
          <Toaster />
          <NextTopLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
