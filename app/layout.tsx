import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import BasicNavbar from "@/components/navbar";
import { DebuggerButton } from "@/components/debug-button"; 
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "font-sans antialiased",
          fontSans.variable,
          "dark:bg-black-90 light:bg-white-90" // Déplace la classe bg ici
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen overflow-auto">
          <main className="container mx-auto max-w-7xl px-6 pt-2 flex-grow flex flex-col justify-start items-center">
  <BasicNavbar className="dark:bg-gray-90 light:bg-white-90 mb-2" />
  {children}
  <Footer className="mt-auto w-full" />
</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
