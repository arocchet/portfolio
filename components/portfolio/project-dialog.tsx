"use client"

import { useEffect, useRef } from "react"
import { X, ArrowUpRight } from "lucide-react"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useLocale } from "@/components/locale-provider"
import type { Project } from "@/lib/projects"
import { TechnologyList } from "./technology-list"
import EduTogoAdminPreview from "./previews/edu-togo/admin-preview"
import ProjectPreview from "./project-preview"

type ProjectDialogProps = {
  selected: Project | null
  onClose: () => void
}

export default function ProjectDialog({
  selected,
  onClose,
}: ProjectDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const { t, locale } = useLocale()

  useEffect(() => {
    if (selected === null) return
    const element = dialog.current
    const smoother = ScrollSmoother.get()
    const previousOverflow = document.documentElement.style.overflow

    element?.showModal()
    smoother?.paused(true)
    document.documentElement.style.overflow = "hidden"

    return () => {
      element?.close()
      smoother?.paused(false)
      document.documentElement.style.overflow = previousOverflow
    }
  }, [selected])

  const content = selected?.content[locale]

  return (
    <dialog
      ref={dialog}
      className={
        selected?.preview
          ? "project-dialog project-dialog-wide"
          : "project-dialog"
      }
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close()
      }}
    >
      {content && selected && (
        <>
          <header className="dialog-header">
            <span className="eyebrow mono">{t.projectNote}</span>
            <div className="dialog-top">
              <h2 id="project-dialog-title">{content.title}</h2>
              <button
                className="icon-button"
                autoFocus
                aria-label={t.close}
                onClick={() => dialog.current?.close()}
              >
                <X size={22} />
              </button>
            </div>
          </header>
          {selected.preview && (
            <div className="project-render-expanded">
              {selected.preview === "edu-togo" ? (
                <EduTogoAdminPreview />
              ) : (
                <ProjectPreview project={selected} />
              )}
            </div>
          )}
          {selected.status && (
            <span className="project-status mono">
              {selected.status[locale]}
            </span>
          )}
          <p>{content.detail}</p>
          {selected.technologies.length > 0 && (
            <>
              <h3>{t.stack}</h3>
              <TechnologyList items={selected.technologies} />
            </>
          )}
          {selected.url && (
            <a
              className="text-link"
              href={selected.url}
              target="_blank"
              rel="noreferrer"
            >
              {t.visitProject}
              <ArrowUpRight size={17} />
            </a>
          )}
        </>
      )}
    </dialog>
  )
}
