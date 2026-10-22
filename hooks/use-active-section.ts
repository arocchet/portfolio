"use client"
import { useEffect, useState } from "react"
import { sectionIds as ids } from "@/lib/portfolio-config"
export function useActiveSection() {
  const [active, setActive] = useState<string>("home")
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 }
    )
    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return active
}
