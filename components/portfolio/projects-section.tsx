"use client"

import { RevealWords } from "./reveal-words"

import { useLocale } from "@/components/locale-provider"
import { useState, useCallback } from "react"
import ProjectCard from "./project-card"
import ProjectDialog from "./project-dialog"
import { projects, type Project } from "@/lib/projects"

export default function ProjectsSection() {
  const { t } = useLocale()
  const [selected, setSelected] = useState<Project | null>(null)
  const closeProject = useCallback(() => setSelected(null), [])
  return (
    <>
      <div className="section-shell projects-section">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow mono">01 / {t.projects}</p>
            <h2 id="projects-title">
              <RevealWords text={t.projectTitle} />
              <br />
              <span>
                <RevealWords text={t.projectEmphasis} />
              </span>
            </h2>
          </div>
          <p className="section-intro">{t.projectIntro}</p>
        </div>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            onSelect={setSelected}
          />
        ))}
      </div>
      <ProjectDialog selected={selected} onClose={closeProject} />
    </>
  )
}
