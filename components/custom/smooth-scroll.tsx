"use client"

import { type ReactNode, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useMotion } from "@/components/motion-provider"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

type SmoothScrollProps = {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapper = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const { reduced } = useMotion()

  useGSAP(
    () => {
      if (!wrapper.current || !content.current || reduced) {
        return
      }

      const media = gsap.matchMedia()
      media.add("(min-width: 901px)", () => {
        const smoother = ScrollSmoother.create({
          wrapper: wrapper.current,
          content: content.current,
          smooth: 0.8,
          effects: true,
          smoothTouch: false,
        })

        ScrollTrigger.refresh()
        return () => smoother.kill()
      })

      return () => {
        media.revert()
      }
    },
    { dependencies: [reduced], revertOnUpdate: true }
  )

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  )
}
