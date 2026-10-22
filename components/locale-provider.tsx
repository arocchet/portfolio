"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { messages, type Locale } from "@/lib/messages"

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof messages.fr
} | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr")
  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1]
    if (saved === "fr" || saved === "en")
      queueMicrotask(() => setLocaleState(saved))
  }, [])
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  function setLocale(value: Locale) {
    setLocaleState(value)
    document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=31536000; SameSite=Lax`
  }
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error("useLocale requires LocaleProvider")
  return context
}
