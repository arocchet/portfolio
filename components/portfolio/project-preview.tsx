"use client"

import Image from "next/image"
import { Code2 } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useLocale } from "@/components/locale-provider"
import EduTogoPreview from "./previews/edu-togo-preview"
import NuakePreview from "./previews/nuake-preview"
import PortfolioPreview from "./previews/portfolio-preview"

const previews = {
  "edu-togo": EduTogoPreview,
  nuake: NuakePreview,
  portfolio: PortfolioPreview,
}

export default function ProjectPreview({ project }: { project: Project }) {
  const { locale } = useLocale()
  const content = project.content[locale]

  if (project.image) {
    return (
      <div className="visual-inner project-image">
        <Image
          src={project.image}
          alt={project.imageAlt?.[locale] ?? content.title}
          fill
          sizes="(max-width: 700px) 100vw, 60vw"
          style={{ objectFit: project.imageFit ?? "cover" }}
        />
      </div>
    )
  }

  const Preview = project.preview ? previews[project.preview] : null
  if (Preview) return <Preview />

  return (
    <div className="visual-inner project-placeholder" aria-hidden="true">
      <Code2 size={42} strokeWidth={1} />
      <span>{content.title}</span>
      {project.status && (
        <small className="mono">{project.status[locale]}</small>
      )}
    </div>
  )
}
