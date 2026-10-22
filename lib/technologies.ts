import {
  siNextdotjs,
  siTypescript,
  siPostgresql,
  siGsap,
  siReact,
  siPrisma,
  siTailwindcss,
  siNodedotjs,
  siGo,
  siPython,
  siGit,
  siGithub,
  siDocker,
  siLinux,
  siBetterauth,
  siKubernetes,
  siAnsible,
  siNginx,
  siOpenbao,
  siTailscale,
  siFigma,
  siJira,
  siTanstack,
  siZod,
} from "simple-icons"

export const technologyIcons = {
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  PostgreSQL: siPostgresql,
  GSAP: siGsap,
  React: siReact,
  Prisma: siPrisma,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  Go: siGo,
  Python: siPython,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Linux: siLinux,
  "Better Auth": siBetterauth,
  Kubernetes: siKubernetes,
  Ansible: siAnsible,
  Nginx: siNginx,
  OpenBao: siOpenbao,
  Tailscale: siTailscale,
  Figma: siFigma,
  Jira: siJira,
  "TanStack Query": siTanstack,
  Zod: siZod,
  "GitHub Kanban": siGithub,
}

export type TechnologyName =
  | keyof typeof technologyIcons
  | "REST API"
  | "CI/CD"
  | "SSO"
  | "VPS"
  | "Backlog"
  | "Sprints"
  | "Sprint review"

// These brands use the surrounding text color to stay visible in both themes.
export const monochromeTechnologies: readonly TechnologyName[] = [
  "Next.js",
  "Prisma",
  "GitHub",
  "GitHub Kanban",
  "Linux",
  "Better Auth",
  "Ansible",
  "OpenBao",
  "Tailscale",
]
