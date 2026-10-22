import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollToPlugin)

let navigation: gsap.core.Tween | null = null

export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return
  const smoother = ScrollSmoother.get()
  const headerHeight =
    document.querySelector(".site-header")?.getBoundingClientRect().height ?? 72
  const offset = headerHeight + 20
  const target = smoother
    ? smoother.offset(element, `top ${offset}px`)
    : element.getBoundingClientRect().top + window.scrollY - offset
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  )
  const reduced = document.documentElement.dataset.motion === "reduced"

  navigation?.kill()
  navigation = gsap.to(window, {
    scrollTo: { y: Math.max(0, Math.min(target, maxScroll)), autoKill: true },
    duration: reduced ? 0.45 : 1.35,
    ease: "power3.inOut",
    onComplete: () => {
      element.setAttribute("tabindex", "-1")
      element.focus({ preventScroll: true })
      navigation = null
    },
  })
  history.replaceState(null, "", `#${id}`)
}
