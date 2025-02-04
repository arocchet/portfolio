"use client";

import CustomizedTimeline from "@/components/custom-timeline";
import IconCloud from "@/components/ui/cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "go",
  "html5",
  "css3",
  "nextdotjs",
  "python",
  "nodedotjs",
  "mysql",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "gitea",
  "figma",
];

export default function AboutPage() {
  return (
    <div className="relative flex h-full w-full flex-col bg-background dark:bg-black-90 light:bg-white-90">
      <main className="container mx-auto flex flex-col items-center justify-center px-8 py-16 sm:py-24">
        <section className="flex flex-col items-center justify-center gap-8 sm:gap-6">
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight text-default-700">
            Me
          </h1>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            " Passionate computer science student at Zone01 Rouen Normandie. I
            am determined to develop my technical skills and contribute to
            innovative projects. Motivated, curious, and constantly seeking to
            learn. "
          </p>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            I am currently looking for an apprenticeship in development. I am
            motivated and open to all opportunities to strengthen my skills and
            contribute to innovative projects.{" "}
          </p>
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight text-default-700">
            Education
          </h1>
          <CustomizedTimeline />
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            With my good foundation in algorithms, acquired through my
            Mathematics specialization in high school and my first year of a
            Computer Science degree, I'm able to combine my theoretical and
            practical skills at Zone01 to design and develop high-quality
            projects.
          </p>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            I may not have covered everything about my experiences and
            background, but I hope to have the opportunity to share more during
            an interview.{" "}
          </p>
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight text-default-700">
            Skills
          </h1>
          <IconCloud iconSlugs={slugs}></IconCloud>
        </section>
      </main>
    </div>
  );
}
