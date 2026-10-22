import type { CSSProperties } from "react"
import {
  IterationCcw,
  KeyRound,
  ListTodo,
  Network,
  Presentation,
  Server,
  Workflow,
} from "lucide-react"
import {
  technologyIcons,
  monochromeTechnologies,
  type TechnologyName,
} from "@/lib/technologies"

export type { TechnologyName } from "@/lib/technologies"

type TechnologyIconProps = {
  name: TechnologyName
  size?: number
  decorative?: boolean
}

const conceptIcons = {
  "REST API": Network,
  "CI/CD": Workflow,
  SSO: KeyRound,
  VPS: Server,
  Backlog: ListTodo,
  Sprints: IterationCcw,
  "Sprint review": Presentation,
}

function isConcept(name: TechnologyName): name is keyof typeof conceptIcons {
  return name in conceptIcons
}

export function TechnologyIcon({
  name,
  size = 18,
  decorative = false,
}: TechnologyIconProps) {
  const accessibility = decorative
    ? { "aria-hidden": true as const }
    : { role: "img", "aria-label": name }

  // Concepts use descriptive icons; products use their brand logos.
  if (isConcept(name)) {
    const Icon = conceptIcons[name]
    return (
      <Icon
        {...accessibility}
        className="technology-icon"
        size={size}
        strokeWidth={1.6}
      />
    )
  }

  const icon = technologyIcons[name]
  const style = {
    "--brand-color": monochromeTechnologies.includes(name)
      ? "currentColor"
      : `#${icon.hex}`,
  } as CSSProperties

  return (
    <svg
      {...accessibility}
      className="technology-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      focusable="false"
      style={style}
    >
      <path d={icon.path} />
    </svg>
  )
}
