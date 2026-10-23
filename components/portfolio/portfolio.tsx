"use client"
import { useRef } from "react"
import { useLocale } from "@/components/locale-provider"
import { usePortfolioAnimations } from "@/hooks/use-portfolio-animations"
import SmoothScroll from "@/components/custom/smooth-scroll"
import ScrollProgress from "@/components/custom/scroll-progress"
import ScrollDepthBackground from "./scroll-depth-background"
import SiteHeader from "./site-header"
import HeroSection from "./hero-section"
import TechnologyRibbon from "./technology-ribbon"
import ProjectsSection from "./projects-section"
import SkillsSection from "./skills-section"
import AboutSection from "./about-section"
import ContactSection from "./contact-section"
import SiteFooter from "./site-footer"

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null)
  const { locale, t } = useLocale()
  usePortfolioAnimations(root, locale)
  return (
    <div ref={root} className="portfolio">
      <ScrollDepthBackground />
      <a className="skip-link" href="#home">
        {t.skip}
      </a>
      <ScrollProgress />
      <SiteHeader />
      <SmoothScroll>
        <main>
          <HeroSection />
          <section id="projects" aria-labelledby="projects-title">
            <TechnologyRibbon />
            <ProjectsSection />
          </section>
          <SkillsSection />
          <AboutSection />
          <ContactSection />
          <SiteFooter />
        </main>
      </SmoothScroll>
    </div>
  )
}
