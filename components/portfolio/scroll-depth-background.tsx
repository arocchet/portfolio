"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMotion } from "@/components/motion-provider"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Particle = {
  x: number
  y: number
  depth: number
  radius: number
  opacity: number
  driftX: number
  driftY: number
  phase: number
  speed: number
}

const wrap = (value: number, range: number) => ((value % range) + range) % range

export default function ScrollDepthBackground({
  preview = false,
}: {
  preview?: boolean
}) {
  const container = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const { reduced } = useMotion()

  useGSAP(
    () => {
      const element = container.current
      const surface = canvas.current
      const context = surface?.getContext("2d")
      if (!element || !surface || !context) return

      const still = reduced
      const pointer = { x: 0, y: 0 }
      const offset = { x: 0, y: 0 }
      let width = 0
      let height = 0
      let progress = 0
      let scroll = 0
      let time = 0
      let particles: Particle[] = []
      let color = getComputedStyle(surface).color

      const draw = () => {
        context.clearRect(0, 0, width, height)
        context.fillStyle = color
        const depthProgress = still ? 0 : progress

        for (const particle of particles) {
          const parallax = still ? 0 : scroll * (0.15 + particle.depth * 0.5)
          // A small, bounded wander at rest; scrolling provides the vertical travel.
          const driftX =
            Math.sin(time * particle.speed + particle.phase) * particle.driftX
          const driftY =
            Math.cos(time * particle.speed * 0.83 + particle.phase) *
            particle.driftY
          const x =
            wrap(
              particle.x + driftX + offset.x * particle.depth + 40,
              width + 80
            ) - 40
          const y =
            wrap(
              particle.y - parallax - driftY + offset.y * particle.depth + 40,
              height + 80
            ) - 40
          const edge = Math.max(
            0,
            Math.min(1, x / 40, (width - x) / 40, y / 40, (height - y) / 40)
          )

          context.globalAlpha =
            particle.opacity * edge * (1 - depthProgress * 0.25)
          context.beginPath()
          context.arc(
            x,
            y,
            particle.radius * (1 + depthProgress * particle.depth * 0.2),
            0,
            Math.PI * 2
          )
          context.fill()
        }
        context.globalAlpha = 1
      }

      const resize = () => {
        width = element.clientWidth
        height = element.clientHeight
        // Limit the backing buffer on high-density screens and mobile devices.
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        surface.width = Math.round(width * dpr)
        surface.height = Math.round(height * dpr)
        context.setTransform(dpr, 0, 0, dpr, 0, 0)
        const count = Math.min(
          140,
          Math.max(35, Math.round((width * height) / 14000))
        )
        particles = Array.from({ length: count }, () => {
          const depth = 0.15 + Math.random() * 0.85
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            depth,
            radius: 0.35 + depth * depth * 1.4,
            opacity: 0.12 + depth * 0.4,
            driftX: 6 + Math.random() * 8,
            driftY: 6 + Math.random() * 8,
            phase: Math.random() * Math.PI * 2,
            speed: 0.15 + Math.random() * 0.2,
          }
        })
        draw()
      }

      const updateDepth = (trigger: ScrollTrigger) => {
        progress = trigger.progress
        scroll = trigger.scroll()
        element.style.setProperty("--depth-progress", String(progress))
        if (still) draw()
      }

      resize()
      // ScrollTrigger shares the same scroll coordinates as ScrollSmoother.
      // A miniature represents the top of the page, independent of outer scroll.
      const trigger = preview
        ? null
        : ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: updateDepth,
            onRefresh: updateDepth,
          })
      if (trigger) updateDepth(trigger)

      const tick = (_time: number, delta: number) => {
        if (document.hidden) return
        const elapsed = Math.min(delta, 50) / 1000
        time += elapsed
        const easing = 1 - Math.exp(-elapsed * 3)
        offset.x += (pointer.x - offset.x) * easing
        offset.y += (pointer.y - offset.y) * easing
        draw()
      }
      const movePointer = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return
        pointer.x = (event.clientX / width - 0.5) * 22
        pointer.y = (event.clientY / height - 0.5) * 22
      }
      const resetPointer = () => {
        pointer.x = 0
        pointer.y = 0
      }
      const observer = new ResizeObserver(resize)
      observer.observe(element)
      // Read the new palette after next-themes has actually changed the root class.
      const themeObserver = new MutationObserver(() => {
        color = getComputedStyle(surface).color
        draw()
      })
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })
      if (!still) {
        gsap.ticker.add(tick)
        if (!preview) {
          window.addEventListener("pointermove", movePointer, {
            passive: true,
          })
          document.documentElement.addEventListener(
            "pointerleave",
            resetPointer
          )
          window.addEventListener("blur", resetPointer)
        }
      }

      return () => {
        trigger?.kill()
        observer.disconnect()
        themeObserver.disconnect()
        gsap.ticker.remove(tick)
        window.removeEventListener("pointermove", movePointer)
        document.documentElement.removeEventListener(
          "pointerleave",
          resetPointer
        )
        window.removeEventListener("blur", resetPointer)
        element.style.removeProperty("--depth-progress")
      }
    },
    { dependencies: [reduced, preview], revertOnUpdate: true }
  )

  return (
    <div ref={container} className="scroll-depth-background" aria-hidden="true">
      <div className="scroll-depth-abyss" />
      <canvas ref={canvas} className="scroll-depth-particles" />
    </div>
  )
}
