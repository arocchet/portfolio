"use client"
import { useEffect, useState } from "react"
export function useAccent() {
  const [accent, setAccent] = useState("blue")
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-accent")
      const value = saved === "lime" ? "yellow" : saved
      if (value && ["blue", "purple", "yellow"].includes(value)) {
        if (saved === "lime") localStorage.setItem("portfolio-accent", value)
        document.documentElement.dataset.accent = value
        queueMicrotask(() => setAccent(value))
      }
    } catch {
      /* Preferences are optional in private browsing. */
    }
  }, [])

  function changeAccent(value: string) {
    setAccent(value)
    document.documentElement.dataset.accent = value
    try {
      localStorage.setItem("portfolio-accent", value)
    } catch {
      /* Keep the session preference. */
    }
  }

  return { accent, changeAccent }
}
