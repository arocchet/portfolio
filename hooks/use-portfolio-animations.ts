"use client"

import type { RefObject } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Locale } from "@/lib/messages"
import { useMotion } from "@/components/motion-provider"
import { revealElements, revealHeading } from "@/lib/animations/reveals"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function usePortfolioAnimations(
  root: RefObject<HTMLDivElement | null>,
  locale: Locale
) {
  const { reduced } = useMotion()

  useGSAP(
    () => {
      const container = root.current
      if (!container) return
      const select = <T extends Element = HTMLElement>(selector: string) =>
        Array.from(container.querySelectorAll<T>(selector))

      // Initial entrance. Every other animation is triggered by its own viewport position.
      gsap.fromTo(
        select(".hero-line > span"),
        { opacity: 0, yPercent: reduced ? 0 : 115 },
        {
          opacity: 1,
          yPercent: 0,
          duration: reduced ? 0.6 : 1.15,
          stagger: 0.13,
          ease: "power4.out",
        }
      )
      gsap.fromTo(
        select(".hero-kicker, .hero-profile > *, .hero-location > *"),
        { opacity: 0, y: reduced ? 0 : 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.09,
          ease: "power3.out",
        }
      )

      select("main section:not(.hero) h2").forEach((heading) =>
        revealHeading(heading, reduced)
      )

      select(
        ".section-heading .eyebrow, .section-intro, .about-copy > p, .school-note, .contact-section .eyebrow, .contact-bottom > *"
      ).forEach((element) => revealElements(element, element, reduced))

      select(".project-info").forEach((info) => {
        const items = Array.from(info.children).filter(
          (element) => !element.classList.contains("tags")
        )
        revealElements(items, info, reduced, { distance: 32, stagger: 0.1 })
      })

      select(".skill-group, .timeline-item").forEach((group) => {
        const items = Array.from(group.children).filter(
          (element) =>
            element.tagName !== "UL" &&
            !element.classList.contains("timeline-point")
        )
        revealElements(items, group, reduced, { distance: 26, stagger: 0.1 })
      })

      select(
        ".skill-technologies, .project-info .tags, .technology-ribbon"
      ).forEach((list) => {
        const trigger = list.closest(".skill-group, .project-info") ?? list
        revealElements(Array.from(list.children), trigger, reduced, {
          distance: 20,
          stagger: 0.06,
          duration: 0.65,
        })
      })

      select(".project-visual").forEach((visual) => {
        // Fade the card without moving or cropping its frame or preview.
        revealElements(visual, visual, reduced, { distance: 0 })
      })

      if (!reduced) {
        gsap.fromTo(
          select(".timeline-fill"),
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline",
              start: "top 72%",
              end: "bottom 65%",
              scrub: 0.6,
            },
          }
        )
      }

      // Fonts, screenshots and responsive layouts can change trigger positions after mount.
      let disposed = false
      let frame = 0
      const refresh = () => {
        if (disposed) return
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => ScrollTrigger.refresh())
      }
      refresh()
      document.fonts.ready.then(refresh)
      container.addEventListener("load", refresh, true)
      return () => {
        disposed = true
        cancelAnimationFrame(frame)
        container.removeEventListener("load", refresh, true)
      }
    },
    { scope: root, dependencies: [locale, reduced], revertOnUpdate: true }
  )
}
