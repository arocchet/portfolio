"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

type MotionMode = "full" | "reduced"
const MotionContext = createContext<{
  reduced: boolean
  toggleMotion: () => void
} | null>(null)

export function MotionProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<MotionMode>("full")
  const hasPreference = useRef(false)
  const reduced = mode === "reduced"

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let initialMode: MotionMode = media.matches ? "reduced" : "full"
    try {
      const saved = localStorage.getItem("portfolio-motion")
      if (saved === "full" || saved === "reduced") {
        hasPreference.current = true
        initialMode = saved
      }
    } catch {
      /* Use the system preference when storage is unavailable. */
    }
    queueMicrotask(() => setMode(initialMode))
    const updateSystemPreference = () => {
      if (!hasPreference.current) setMode(media.matches ? "reduced" : "full")
    }
    media.addEventListener("change", updateSystemPreference)
    return () => media.removeEventListener("change", updateSystemPreference)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? "reduced" : "full"
  }, [reduced])

  function toggleMotion() {
    hasPreference.current = true
    const next = reduced ? "full" : "reduced"
    setMode(next)
    try {
      localStorage.setItem("portfolio-motion", next)
    } catch {
      /* Keep the session preference. */
    }
  }

  return (
    <MotionContext.Provider value={{ reduced, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotion() {
  const context = useContext(MotionContext)
  if (!context) throw new Error("useMotion requires MotionProvider")
  return context
}
