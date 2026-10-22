"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/** Keep the application layout intact while fitting its rendered DOM into a project card. */
export default function ScaledPreview({
  children,
  width,
  height,
}: {
  children: ReactNode
  width: number
  height: number
}) {
  const container = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)

  useEffect(() => {
    if (!container.current) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(
        Math.min(
          entry.contentRect.width / width,
          entry.contentRect.height / height
        )
      )
    })
    observer.observe(container.current)
    return () => observer.disconnect()
  }, [width, height])

  return (
    <div className="scaled-preview" ref={container}>
      <div
        className="scaled-preview-stage"
        style={{
          width,
          height,
          transform: `translate(-50%, -50%) scale(${scale ?? 0})`,
          visibility: scale === null ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </div>
  )
}
