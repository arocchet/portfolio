"use client"

import { ProjectSection } from "@/components/project-cards";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Projects() {
  return (
    <div className="relative flex h-full w-full flex-col bg-background dark:bg-black-90 light:bg-white-90">
      <main className="container mx-auto flex flex-col items-center justify-center px-8 py-16 sm:py-24">
        <section className="flex flex-col items-center justify-center gap-8 sm:gap-6">
          <ProjectSection/>
        </section>
      </main>
    </div>
  );
}
