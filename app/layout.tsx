import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import "./scrollbars.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollResetProvider from "@/components/custom/scroll-reset-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { LocaleProvider } from "@/components/locale-provider"
import { MotionProvider } from "@/components/motion-provider"

export const metadata: Metadata = {
  title: "Adrien Rocchetti. — Développeur full-stack",
  description:
    "Le portfolio d’Adrien Rocchetti. : développement full-stack, projets et parcours à Zone01 Rouen Normandie. Une expérience interactive au fil du scroll.",
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, geistMono.variable)}
    >
      {/* Browser extensions can inject body attributes before React hydrates. */}
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          <LocaleProvider>
            <MotionProvider>
              <ScrollResetProvider>{children}</ScrollResetProvider>
            </MotionProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
