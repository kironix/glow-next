import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "./theme-provider";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <main>{children}</main>
        <Toaster />
        <NextTopLoader />
      </ThemeProvider>
    </>
  );
}
