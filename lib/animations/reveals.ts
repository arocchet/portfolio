import gsap from "gsap"

/** A staggered entrance that also works when system motion reduction is enabled. */
export function revealElements(
  targets: Element | Element[],
  trigger: Element,
  reduced: boolean,
  { distance = 26, stagger = 0.07, duration = 0.85 } = {}
) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: reduced ? 0 : distance },
    {
      opacity: 1,
      y: 0,
      duration: reduced ? 0.55 : duration,
      stagger: reduced ? 0.035 : stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    }
  )
}

export function revealHeading(heading: Element, reduced: boolean) {
  const words = Array.from(heading.querySelectorAll("[data-reveal-word]"))
  if (!words.length) return

  return gsap.fromTo(
    words,
    { opacity: 0, yPercent: reduced ? 0 : 115, rotate: reduced ? 0 : 2 },
    {
      opacity: 1,
      yPercent: 0,
      rotate: 0,
      duration: reduced ? 0.65 : 1.05,
      stagger: reduced ? 0.035 : 0.09,
      ease: "power4.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 86%",
        toggleActions: "play none none reverse",
      },
    }
  )
}
