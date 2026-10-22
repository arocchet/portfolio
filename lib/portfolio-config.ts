import type { TechnologyName } from "@/lib/technologies"
export const sectionIds = ["home", "projects", "skills", "about"] as const
export const skillTools: TechnologyName[][] = [
  ["React", "Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "GSAP"],
  ["Node.js", "PostgreSQL", "Prisma", "REST API", "Zod", "Better Auth", "SSO"],
  [
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "Ansible",
    "Linux",
    "Nginx",
    "VPS",
    "CI/CD",
    "OpenBao",
    "Tailscale",
  ],
  ["Backlog", "Sprints", "Sprint review", "Figma", "Jira", "GitHub Kanban"],
]
export const ribbonTechnologies: TechnologyName[] = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "GSAP",
  "React",
  "Docker",
]
