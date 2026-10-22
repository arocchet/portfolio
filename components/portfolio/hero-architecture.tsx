"use client"

import { useId, useRef } from "react"
import { useLocale } from "@/components/locale-provider"
import { useArchitectureAnimation } from "@/hooks/use-architecture-animation"

function ApplicationNode({
  x,
  y,
  width,
  title,
  stack,
  accent = false,
}: {
  x: number
  y: number
  width: number
  title: string
  stack: string
  accent?: boolean
}) {
  return (
    <g className={accent ? "app-node app-node-accent" : "app-node"}>
      <rect x={x} y={y} width={width} height={58} rx={8} />
      <circle cx={x + 15} cy={y + 19} r={3} />
      <text className="app-node-title" x={x + 27} y={y + 23}>
        {title}
      </text>
      <text className="app-node-stack" x={x + 15} y={y + 43}>
        {stack}
      </text>
    </g>
  )
}

export default function HeroArchitecture() {
  const { locale } = useLocale()
  const diagram = useRef<HTMLDivElement>(null)
  useArchitectureAnimation(diagram, locale)
  const fr = locale === "fr"
  const arrow = `application-${useId().replace(/[^a-zA-Z0-9]/g, "")}`
  return (
    <div
      ref={diagram}
      className="hero-art architecture"
      role="img"
      aria-label={
        fr
          ? "Architecture d’application : interface Next.js et cache TanStack Query, puis authentification Better Auth et SSO, puis API REST avec validation Zod, puis données Prisma et PostgreSQL. Déploiement Docker sur VPS avec Nginx."
          : "Application architecture: Next.js interface with TanStack Query caching, then Better Auth and SSO authentication, then REST API with Zod validation, then Prisma and PostgreSQL data. Docker deployment on a VPS with Nginx."
      }
    >
      <svg
        className="application-diagram"
        viewBox="0 0 420 400"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <marker
            id={arrow}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path
              d="M1 1 L9 5 L1 9"
              stroke="context-stroke"
              strokeWidth="1.5"
            />
          </marker>
        </defs>
        <text className="application-caption" x="16" y="17">
          01 / {fr ? "ARCHITECTURE D’APPLICATION" : "APPLICATION ARCHITECTURE"}
        </text>
        <g className="application-links" markerEnd={`url(#${arrow})`}>
          <path d="M210 96 V120" />
          <path d="M210 178 V202" />
          <path d="M210 260 V284" />
        </g>
        <g className="application-traffic">
          <path d="M210 96 V120" />
          <path d="M210 178 V202" />
          <path d="M210 260 V284" />
        </g>
        <ApplicationNode
          x={66}
          y={38}
          width={288}
          title={fr ? "Interface web" : "Web interface"}
          stack="Next.js · TanStack Query / Cache"
          accent
        />
        <ApplicationNode
          x={66}
          y={120}
          width={288}
          title={fr ? "Authentification" : "Authentication"}
          stack="Better Auth · SSO"
        />
        <ApplicationNode
          x={66}
          y={202}
          width={288}
          title="API REST"
          stack="Zod · Validation"
        />
        <ApplicationNode
          x={66}
          y={284}
          width={288}
          title={fr ? "Données" : "Data"}
          stack="Prisma · PostgreSQL"
        />
        <line
          className="application-divider"
          x1="16"
          y1="365"
          x2="404"
          y2="365"
        />
        <text className="application-caption" x="16" y="390">
          {fr ? "DÉPLOIEMENT" : "DEPLOYMENT"}
        </text>
        <text
          className="application-deployment"
          x="404"
          y="390"
          textAnchor="end"
        >
          Docker · VPS · Nginx
        </text>
      </svg>
    </div>
  )
}
