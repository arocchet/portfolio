import type { Locale } from "./messages"
import type { TechnologyName } from "./technologies"

type ProjectContent = {
  title: string
  category: string
  description: string
  detail: string
}

export type Project = {
  id: string
  /** Path in public/, e.g. /projects/edu-togo.webp. Null keeps the existing preview. */
  image: string | null
  imageAlt?: Record<Locale, string>
  imageFit?: "cover" | "contain"
  preview?: "edu-togo" | "edu-tech" | "nuake" | "portfolio" | "zone01"
  technologies: TechnologyName[]
  url: string | null
  status?: Record<Locale, string>
  content: Record<Locale, ProjectContent>
}

// Add or reorder projects here. Cards, numbering and dialogs update automatically.
export const projects: Project[] = [
  {
    id: "edu-togo",
    image: null,
    preview: "edu-togo",
    status: {
      fr: "En développement · Phase de test",
      en: "In development · Testing phase",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "Zod",
      "REST API",
      "Better Auth",
      "SSO",
    ],
    url: null,
    content: {
      fr: {
        title: "Edu-togo V2",
        category: "APPLICATION WEB · ÉDUCATION",
        description:
          "Une plateforme de gestion de l’éducation que je développe en prestation de service pour Edu-Tech & Services, qui collabore également avec l’ONG Nuaké. Le projet est en développement et en phase de test en accord avec le ministère togolais.",
        detail:
          "Je conçois et développe Edu-togo V2 en prestation de service pour Edu-Tech & Services, qui collabore également avec l’ONG Nuaké. La plateforme est toujours en cours de développement et en phase de test en accord avec le ministère togolais. L’application, disponible en français et en anglais, est structurée autour des formations, des utilisateurs, des plannings et des organisations. Sa base technique associe Next.js, TypeScript, Prisma, PostgreSQL et une API REST, avec Better Auth et du SSO pour l’authentification, TanStack Query pour le cache des données et Zod pour la validation.",
      },
      en: {
        title: "Edu-togo V2",
        category: "WEB APPLICATION · EDUCATION",
        description:
          "An education management platform I am developing as a service provider for Edu-Tech & Services, which also collaborates with the NGO Nuaké. The project is in development and being tested in agreement with the Togolese ministry.",
        detail:
          "I design and develop Edu-togo V2 as a service provider for Edu-Tech & Services, which also collaborates with the NGO Nuaké. The platform is still in development and being tested in agreement with the Togolese ministry. Available in French and English, the application is organized around training, users, schedules and organizations. Its foundation combines Next.js, TypeScript, Prisma, PostgreSQL and a REST API, with Better Auth and SSO for authentication, TanStack Query for data caching and Zod for validation.",
      },
    },
  },
  {
    id: "nuake",
    image: null,
    preview: "nuake",
    status: {
      fr: "En phase de conception",
      en: "Design phase",
    },
    technologies: ["Next.js", "GSAP", "Tailwind CSS"],
    url: null,
    content: {
      fr: {
        title: "Nuaké",
        category: "WEB · SOLIDARITÉ",
        description:
          "Un site en phase de conception pour l’ONG Nuaké au Togo. Une présentation de ses engagements et de ses actions, avec les communautés locales au premier plan.",
        detail:
          "Le site de l’ONG Nuaké est en phase de conception. La hero associe une composition typographique autour de Nuaké, ONG et Togo à son logo et à ses engagements de terrain. Le projet explore une narration au scroll avec Next.js, GSAP et Tailwind CSS. L’aperçu présente uniquement cette hero en cours de conception.",
      },
      en: {
        title: "Nuaké",
        category: "WEB · SOLIDARITY",
        description:
          "A website in the design phase for the NGO Nuaké in Togo. Presenting its commitments and actions, with local communities at the forefront.",
        detail:
          "The Nuaké NGO website is in the design phase. Its hero combines a typographic composition around Nuaké, NGO and Togo with its logo and grassroots commitments. The project explores scroll storytelling using Next.js, GSAP and Tailwind CSS. This preview shows only the hero currently being designed.",
      },
    },
  },
  {
    id: "portfolio",
    image: null,
    preview: "portfolio",
    technologies: ["React", "GSAP", "TypeScript"],
    url: null,
    content: {
      fr: {
        title: "Ce portfolio",
        category: "EXPÉRIENCE WEB · CRÉATIF",
        description:
          "Une exploration du web interactif : animations au scroll, internationalisation et interface personnalisable.",
        detail:
          "Une expérience responsive construite avec Next.js et GSAP. ScrollSmoother, parallaxe et animations liées au scroll. Les préférences de langue, de mode et de couleur sont conservées entre les visites.",
      },
      en: {
        title: "This portfolio",
        category: "WEB EXPERIENCE · CREATIVE",
        description:
          "An exploration of interactive web design: scroll animations, localization and a customizable interface.",
        detail:
          "A responsive experience built with Next.js and GSAP. ScrollSmoother, parallax and scroll-linked animations. Language, appearance and accent preferences are saved between visits.",
      },
    },
  },
  {
    id: "edu-tech-services",
    image: null,
    preview: "edu-tech",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "TanStack Query",
      "Zod",
      "REST API",
      "Better Auth",
      "SSO",
    ],
    url: null,
    status: {
      fr: "En cours de développement",
      en: "In development",
    },
    content: {
      fr: {
        title: "Edu-Tech & Services",
        category: "APPLICATION WEB · GESTION D’ENTREPRISE",
        description:
          "Une application de gestion dédiée aux entrepreneurs : comptabilité, facturation, gestion des stocks et suivi des clients, réunis au même endroit. Le projet est en cours de développement.",
        detail:
          "Edu-Tech & Services est une application de gestion pour les entrepreneurs, en cours de développement. Elle regroupe la comptabilité, la facturation, la gestion des stocks et des clients pour centraliser le suivi de leur activité. Comme Edu-togo V2, sa base technique associe Next.js, TypeScript, Prisma et une API REST, avec Better Auth et du SSO pour l’authentification, TanStack Query pour le cache des données et Zod pour la validation.",
      },
      en: {
        title: "Edu-Tech & Services",
        category: "WEB APPLICATION · BUSINESS MANAGEMENT",
        description:
          "A business management application for entrepreneurs: accounting, invoicing, inventory and customer management, all in one place. The project is in development.",
        detail:
          "Edu-Tech & Services is a business management application for entrepreneurs, currently in development. It brings together accounting, invoicing, inventory and customer management to centralize day-to-day business operations. Like Edu-togo V2, its foundation combines Next.js, TypeScript, Prisma and a REST API, with Better Auth and SSO for authentication, TanStack Query for data caching and Zod for validation.",
      },
    },
  },
  {
    id: "zone01",
    image: null,
    preview: "zone01",
    technologies: [],
    url: null,
    status: {
      fr: "Branche Develop · En cours",
      en: "Develop branch · In progress",
    },
    content: {
      fr: {
        title: "Projets Zone01",
        category: "FORMATION · COLLECTION DE PROJETS",
        description:
          "L’ensemble des projets que j’ai réalisés pendant mon cursus à Zone01 Rouen Normandie : algorithmique, développement et travail entre pairs. Je poursuis actuellement la branche DevOps.",
        detail:
          "Cette collection regroupe les projets réalisés tout au long de mon cursus à Zone01 Rouen Normandie. Des fondamentaux de la programmation au développement d’applications, chaque projet est une occasion de concevoir, expérimenter, collaborer et progresser grâce aux audits entre pairs. La branche Develop est actuellement en cours.",
      },
      en: {
        title: "Zone01 projects",
        category: "EDUCATION · PROJECT COLLECTION",
        description:
          "The projects I have completed during my studies at Zone01 Rouen Normandy: algorithms, development and peer collaboration. I am currently working through the DevOps branch.",
        detail:
          "This collection brings together the projects completed throughout my studies at Zone01 Rouen Normandy. From programming fundamentals to application development, each project is an opportunity to design, experiment, collaborate and improve through peer reviews. The Develop branch is currently in progress.",
      },
    },
  },
]
