"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

type ScrollTextProps = {
  text: string
  className?: string
}

export default function ScrollText({ text, className }: ScrollTextProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      if (!headlineRef.current) return

      const split = SplitText.create(headlineRef.current, {
        type: "chars",
        mask: "chars",
      })

      gsap.from(split.chars, {
        yPercent: 100,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      })

      ScrollTrigger.refresh()

      return () => split.revert()
    },
    { scope: headlineRef, dependencies: [text] }
  )

  return (
    <h1
      ref={headlineRef}
      className={className ?? "max-w-[13ch] text-4xl uppercase md:text-8xl"}
    >
      {text}
    </h1>
  )
}