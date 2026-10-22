"use client"

import { useRef } from "react"
import { Sparkle, Sparkles } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useMotion } from "@/components/motion-provider"
import { useLocale } from "@/components/locale-provider"

gsap.registerPlugin(useGSAP)

const bursts = [
  { x: -14, y: -12 },
  { x: 14, y: -9 },
  { x: 10, y: 14 },
]

export default function MotionToggle() {
  const button = useRef<HTMLButtonElement>(null)
  const { reduced, toggleMotion } = useMotion()
  const { t } = useLocale()
  const label = reduced ? t.enableMotion : t.reduceMotion

  useGSAP(
    () => {
      const timeline = gsap.timeline()
      timeline
        .fromTo(
          ".motion-toggle-icon",
          { scale: 0.7, rotation: reduced ? 16 : -16, opacity: 0.55 },
          {
            scale: 1.2,
            rotation: reduced ? -5 : 5,
            opacity: 1,
            duration: 0.22,
            ease: "power2.out",
          }
        )
        .to(
          ".motion-toggle-icon",
          {
            scale: 1,
            rotation: 0,
            opacity: reduced ? 0.55 : 1,
            duration: 0.45,
            ease: "back.out(2)",
          },
          0.22
        )
        .fromTo(
          ".motion-toggle-glow",
          { scale: 0.25, opacity: 0 },
          { scale: 1, opacity: 0.45, duration: 0.2 },
          0
        )
        .to(
          ".motion-toggle-glow",
          { scale: 1.6, opacity: 0, duration: 0.5, ease: "power2.out" },
          0.2
        )
        .fromTo(
          ".motion-toggle-spark",
          { x: 0, y: 0, scale: 0, opacity: 0 },
          {
            x: (index) => bursts[index].x,
            y: (index) => bursts[index].y,
            scale: 1,
            opacity: 1,
            stagger: 0.035,
            duration: 0.3,
            ease: "power2.out",
          },
          0.05
        )
        .to(
          ".motion-toggle-spark",
          {
            scale: 0.2,
            opacity: 0,
            duration: 0.3,
            stagger: 0.035,
            ease: "power2.in",
          },
          0.35
        )
    },
    { scope: button, dependencies: [reduced], revertOnUpdate: true }
  )

  return (
    <button
      ref={button}
      type="button"
      className="icon-button motion-toggle"
      onClick={toggleMotion}
      aria-label={label}
      title={label}
      aria-pressed={!reduced}
    >
      <span className="motion-toggle-glow" aria-hidden="true" />
      <span className="motion-toggle-icon" aria-hidden="true">
        <Sparkles size={16} />
      </span>
      {bursts.map((_, index) => (
        <span key={index} className="motion-toggle-spark" aria-hidden="true">
          <Sparkle size={8} />
        </span>
      ))}
    </button>
  )
}
