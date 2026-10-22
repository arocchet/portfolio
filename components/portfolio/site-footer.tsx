"use client"

import { ArrowUp, Check } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { scrollToSection as navigate } from "@/lib/portfolio-navigation"
import { useAccent } from "@/hooks/use-accent"

export default function SiteFooter() {
  const { t } = useLocale()
  const { accent, changeAccent } = useAccent()
  return (
    <footer className="site-footer section-shell">
      <a
        className="wordmark"
        href="#home"
        onClick={(e) => {
          e.preventDefault()
          navigate("home")
        }}
      >
        Adrien Rocchetti
      </a>
      <p>© 2026 · {t.footer}</p>
      <div className="accent-controls" role="group" aria-label={t.accent}>
        {["blue", "purple", "yellow"].map((value, index) => (
          <button
            key={value}
            className={`accent-swatch swatch-${value}`}
            aria-label={[t.colors[2], t.colors[1], t.colors[0]][index]}
            aria-pressed={accent === value}
            onClick={() => changeAccent(value)}
          >
            {accent === value && <Check size={12} />}
          </button>
        ))}
      </div>
      <a
        href="#home"
        className="back-top"
        onClick={(e) => {
          e.preventDefault()
          navigate("home")
        }}
        aria-label={t.back}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}
