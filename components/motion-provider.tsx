"use client"

import {
  createContext,
  useContext,
  useEffect,
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
  const reduced = mode === "reduced"

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-motion")
      if (saved === "full" || saved === "reduced")
        queueMicrotask(() => setMode(saved))
    } catch {
      /* Animations stay enabled by default when storage is unavailable. */
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? "reduced" : "full"
  }, [reduced])

  function toggleMotion() {
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
