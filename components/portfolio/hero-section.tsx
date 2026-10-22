"use client"

import { ArrowDown, ArrowUpRight } from "lucide-react"
import HeroArchitecture from "./hero-architecture"
import { useLocale } from "@/components/locale-provider"
import { scrollToSection as navigate } from "@/lib/portfolio-navigation"

export default function HeroSection({
  preview = false,
}: {
  preview?: boolean
}) {
  const { t } = useLocale()
  const Link = preview ? "span" : "a"
  return (
    <section className="hero section-shell" id={preview ? undefined : "home"}>
      <div className="hero-kicker mono">
        <span className="status-dot" />
        {t.heroTop}
        <span className="hero-edition">© 2026</span>
      </div>
      <div className="hero-main">
        <h1>
          <span className="hero-line">
            <span>{t.heroFirst}</span>
          </span>
          <span className="hero-line">
            <span>{t.heroSecond}</span>
          </span>
          <span className="hero-line accent-line">
            <span>{t.heroThird}</span>
          </span>
        </h1>
        <HeroArchitecture />
      </div>
      <div className="hero-bottom">
        <div className="hero-profile">
          <span className="mono small-label">{t.role}</span>
          <p>{t.intro}</p>
          <Link
            {...(preview ? {} : { href: "#projects" })}
            className="primary-link"
            onClick={(e) => {
              e.preventDefault()
              navigate("projects")
            }}
          >
            {t.explore}
            <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="hero-location">
          <span className="mono">{t.location}</span>
          <Link
            {...(preview ? {} : { href: "#projects" })}
            className="scroll-cue mono"
            onClick={(e) => {
              e.preventDefault()
              navigate("projects")
            }}
          >
            <ArrowDown size={17} />
            {t.scroll}
          </Link>
        </div>
      </div>
    </section>
  )
}
