"use client"
import { Globe2, Moon, Sun, Sparkles } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import HeroSection from "../hero-section"
import ScaledPreview from "./scaled-preview"
import { TechnologyIcon } from "../technology-icon"
import { ribbonTechnologies } from "@/lib/portfolio-config"

export default function PortfolioPreview() {
  const { t, locale } = useLocale()
  return (
    <div className="visual-inner portfolio-preview" aria-hidden="true">
      <ScaledPreview width={1440} height={920}>
        <div className="portfolio-render" inert>
          <div className="portfolio-render-header">
            <span className="wordmark">Adrien Rocchetti</span>
            <div className="portfolio-render-nav">
              {t.nav.map((label, index) => (
                <span key={label}>
                  <small>0{index + 1}</small>
                  {label}
                </span>
              ))}
            </div>
            <div className="portfolio-render-controls">
              <Sparkles size={19} />
              <Globe2 size={16} />
              <span>{locale.toUpperCase()}</span>
              <Moon size={18} className="portfolio-preview-moon" />
              <Sun size={18} className="portfolio-preview-sun" />
            </div>
          </div>
          <HeroSection preview />
          <div className="portfolio-render-ribbon">
            {ribbonTechnologies.map((name) => (
              <TechnologyIcon name={name} size={27} decorative key={name} />
            ))}
          </div>
        </div>
      </ScaledPreview>
    </div>
  )
}
