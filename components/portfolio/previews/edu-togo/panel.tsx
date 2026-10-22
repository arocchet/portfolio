import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

export function EduPanel({
  title,
  icon: Icon,
  children,
  className = "",
}: {
  title: string
  icon: LucideIcon
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`edu-admin-panel ${className}`}>
      <div className="edu-admin-panel-title">
        <Icon size={15} />
        <strong>{title}</strong>
      </div>
      <div className="edu-admin-panel-content">{children}</div>
    </section>
  )
}
