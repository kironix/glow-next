import NextTopLoader from "nextjs-toploader"

import { Toaster } from "@/components/ui/toaster"

import { ThemeProvider } from "./theme-provider"

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <main>{children}</main>
      <Toaster />
      <NextTopLoader showForHashAnchor={false} />
    </ThemeProvider>
  )
}
