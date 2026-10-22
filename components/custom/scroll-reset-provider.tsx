"use client"

import { type ReactNode, useEffect } from "react"

type ScrollResetProviderProps = {
  children: ReactNode
}

export default function ScrollResetProvider({
  children,
}: ScrollResetProviderProps) {
  useEffect(() => {
    const previousScrollRestoration = history.scrollRestoration

    history.scrollRestoration = "manual"
    window.scrollTo(0, 0)

    return () => {
      history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  return children
}
