"use client"

import { RevealWords } from "./reveal-words"

import { useLocale } from "@/components/locale-provider"
import { Code2, Database, PanelsTopLeft, ServerCog } from "lucide-react"
import { skillTools } from "@/lib/portfolio-config"
import { TechnologyList } from "./technology-list"

export default function SkillsSection() {
  const { t } = useLocale()
  return (
    <section id="skills" className="skills-section section-shell">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow mono">02 / {t.skillsLabel}</p>
          <h2>
            <RevealWords text={t.skillsTitle} />
            <br />
            <span>
              <RevealWords text={t.skillsEmphasis} />
            </span>
          </h2>
        </div>
        <p className="section-intro">{t.skillsIntro}</p>
      </div>
      <div className="skills-grid">
        {t.skillGroups.map((group, index) => {
          const Icon = [Code2, Database, ServerCog, PanelsTopLeft][index]
          return (
            <div className="skill-group reveal" key={group}>
              <div className="skill-top">
                <Icon size={25} strokeWidth={1.3} />
                <span className="mono">0{index + 1}</span>
              </div>
              <h3>{group}</h3>
              <p className="skill-description">{t.skillDescriptions[index]}</p>
              <TechnologyList
                items={skillTools[index]}
                className="skill-technologies"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
