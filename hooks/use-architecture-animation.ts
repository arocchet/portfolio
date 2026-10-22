"use client"

import type { RefObject } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMotion } from "@/components/motion-provider"
import type { Locale } from "@/lib/messages"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function useArchitectureAnimation(
  root: RefObject<HTMLDivElement | null>,
  locale: Locale
) {
  const { reduced } = useMotion()
  useGSAP(
    () => {
      const element = root.current
      if (!element) return
      const nodes = Array.from(element.querySelectorAll(".app-node"))
      const links = Array.from(
        element.querySelectorAll(".application-links path")
      )
      const traffic = Array.from(
        element.querySelectorAll(".application-traffic path")
      )
      const footer = element.querySelectorAll(
        ".application-divider, .application-deployment, .application-caption"
      )

      gsap.set(traffic, { opacity: 0 })
      if (reduced) return

      gsap.set(nodes, { opacity: 0, y: 10 })
      gsap.set(links, { opacity: 0, strokeDasharray: 24, strokeDashoffset: 24 })
      gsap.set(footer, { opacity: 0 })

      // One packet crosses each connection in order, rather than all three at once.
      const flow = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.7 })
      traffic.forEach((path) => {
        flow
          .fromTo(
            path,
            { opacity: 0, strokeDashoffset: 6 },
            { opacity: 1, strokeDashoffset: -24, duration: 0.65, ease: "none" }
          )
          .set(path, { opacity: 0 })
      })

      const entrance = gsap.timeline({
        scrollTrigger: { trigger: element, start: "top 85%", once: true },
        delay: 0.45,
        onComplete: () => {
          flow.play()
        },
      })
      entrance.to(footer, { opacity: 1, duration: 0.35 })
      nodes.forEach((node, index) => {
        if (index > 0)
          entrance.to(links[index - 1], {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.25,
            ease: "none",
          })
        entrance.to(node, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        })
      })
    },
    { scope: root, dependencies: [reduced, locale], revertOnUpdate: true }
  )
}
