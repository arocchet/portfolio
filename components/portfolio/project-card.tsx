"use client"

import { ArrowUpRight } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import type { Project } from "@/lib/projects"
import ProjectPreview from "./project-preview"
import { TechnologyList } from "./technology-list"

export default function ProjectCard({
  project,
  index,
  total,
  onSelect,
}: {
  project: Project
  index: number
  total: number
  onSelect: (project: Project) => void
}) {
  const { t, locale } = useLocale()
  const content = project.content[locale]
  return (
    <article className="project reveal">
      <button
        className="project-visual"
        onClick={() => onSelect(project)}
        aria-label={`${t.details} — ${content.title}`}
      >
        <ProjectPreview project={project} />
        <span className="project-open">
          <ArrowUpRight size={24} />
        </span>
      </button>
      <div className="project-info">
        <span className="mono project-index">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <p className="eyebrow mono">{content.category}</p>
        <h3>{content.title}</h3>
        {project.status && (
          <span className="project-status mono">{project.status[locale]}</span>
        )}
        <p>{content.description}</p>
        {project.technologies.length > 0 && (
          <TechnologyList items={project.technologies} />
        )}
        <button className="text-link" onClick={() => onSelect(project)}>
          {t.details}
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  )
}
