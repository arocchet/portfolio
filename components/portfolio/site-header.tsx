"use client"

import { Globe2, Menu, Moon, Sun, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"
import { useActiveSection } from "@/hooks/use-active-section"
import { sectionIds as ids } from "@/lib/portfolio-config"
import { useLocale } from "@/components/locale-provider"
import { scrollToSection as navigate } from "@/lib/portfolio-navigation"
import MotionToggle from "./motion-toggle"

export default function SiteHeader() {
  const { locale, setLocale, t } = useLocale()
  const { resolvedTheme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection()
  return (
    <header className="site-header">
      <a
        href="#home"
        className="wordmark"
        onClick={(e) => {
          e.preventDefault()
          navigate("home")
        }}
      >
        Adrien Rocchetti
      </a>
      <nav
        className={mobileOpen ? "main-nav is-open" : "main-nav"}
        aria-label={
          locale === "fr" ? "Navigation principale" : "Main navigation"
        }
      >
        {t.nav.map((label, index) => (
          <a
            key={ids[index]}
            href={`#${ids[index]}`}
            aria-current={active === ids[index] ? "location" : undefined}
            onClick={(e) => {
              e.preventDefault()
              setMobileOpen(false)
              navigate(ids[index])
            }}
          >
            <span className="nav-number">0{index + 1}</span>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-controls">
        <MotionToggle />
        <button
          className="language-button"
          onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
          aria-label={`${t.language}: ${locale === "fr" ? "English" : "Français"}`}
        >
          <Globe2 size={14} />
          {locale.toUpperCase()}
        </button>
        <button
          className="icon-button theme-toggle"
          aria-label={t.theme}
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <Sun size={16} className="sun-icon" />
          <Moon size={16} className="moon-icon" />
        </button>
        <button
          className="icon-button mobile-toggle"
          aria-label={mobileOpen ? t.close : "Menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}
