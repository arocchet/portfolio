import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { v4 as uuidv4 } from "uuid";

// Project type definition
type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  details: boolean;
};

// Projects data
const projects: Project[] = [
  {
    id: "nextjs-capacitor",
    title: "NextJS + Express",
    subtitle: "Hybrid Mobile Application",
    description:
      "NextJS application built with Capacitor to create a native mobile experience from a web application.",
    imageSrc: "/78C7F679-A1DC-49F8-9756-AB69F1511718.png",
    technologies: ["React", "NextJS", "Express", "Capacitor", "TypeScript", "Tailwind CSS", ],
    featured: true,
    details: false,
  },
  {
    id: "graphql-api",
    title: "GraphQL API",
    subtitle: "School API",
    description:
      "My school's GraphQL API, enabling efficient data management and optimized queries.",
    imageSrc: "/73B2F88B-C0DC-495A-A00D-5E1EFEEDFB45.png",
    technologies: ["React", "NextJS", "GraphQL", "TypeScript", "Tailwind CSS", "Vercel"],
    demoUrl: "https://graphql-git-main-adridri7s-projects.vercel.app/",
    githubUrl: "https://github.com/arocchet/graphql",
    featured: false,
    details: false,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    subtitle: "Showcase Website",
    description:
      "My personal portfolio showcasing projects and skills, developed with modern web technologies.",
    imageSrc: "/D1E49571-FD10-4C53-B8B5-BFF75513632A.png",
    technologies: ["React", "NextJS", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://arocchet.me",
    githubUrl: "https://github.com/arocchet/portfolio",
    featured: false,
    details: false,
  },
  {
    id: "/",
    title: "Coming soon...",
    subtitle: "...",
    description: "...",
    imageSrc: "/placeholder.svg?height=400&width=600",
    technologies: ["...", "...", "..."],
    featured: false,
    details: false,
  },
];

export function ProjectSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.featured);

  return (
    <section className="w-full py-12 space-y-8">
      <div className="container">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <p className="text-muted-foreground mt-2">
              Discover a selection of my recent and significant projects
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              size="sm"
            >
              Featured
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageSrc || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover border-b"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription>{project.subtitle}</CardDescription>
          </div>
          {project.featured && (
            <Badge variant="secondary" className="ml-2">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <Badge key={uuidv4()} variant="outline" className="bg-primary/5">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 border-t h-[64px]">
        <div className="flex gap-2 mt-3">
          {project.githubUrl && (
            <Button variant="outline" size="icon" asChild>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="outline" size="icon" asChild>
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Demo</span>
              </Link>
            </Button>
          )}
        </div>

        <div className="flex items-center mt-3">
          {project.details ? (
            <Button variant="ghost" size="sm" className="gap-1" asChild>
              <Link href={`/projects/${project.id}`}>
                View details
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          ) : (
            <div className="h-8 w-1"></div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}