"use client";

import { DrawerTest } from "@/components/drawer-school";
import React from "react";

export default function SchoolPage() {
  return (
    <div className="relative flex h-full w-full flex-col bg-background dark:bg-black-90 light:bg-white-90">
      <main className="container mx-auto flex flex-col items-center justify-center px-8 py-16 sm:py-24">
        {/* Introduction */}
        <section className="flex flex-col items-center justify-center gap-8 sm:gap-6">
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight ">
            Here is Zone01!
          </h1>
          <p className="text-center text-lg sm:text-xl text-default-500 max-w-3xl">
            I am currently enrolled in a two-year training program to become a software developer, with a focus on solving real-world projects. This program allows me to acquire a comprehensive set of skills in development.
          </p>
          <p className="text-center text-lg sm:text-xl text-default-500 max-w-3xl">
            The goal is to train as a full-stack developer in 2 to 3 years, through work-study. From design to production of a project or application, I work with different programming languages. The approach is agile and collaborative, transforming me from a beginner to a developer of complete software. By completing more than 55 projects, I learn to code in JavaScript, Go, Rust, as well as in C, C++, Java, Python, and many more. This makes me capable of coding in any programming environment.
          </p>
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight ">
            The program consists of:
          </h1>
          <ul className="text-center text-lg sm:text-xl text-default-500 max-w-3xl list-disc pl-6">
            <li><strong>Three years of free training</strong> focused on solving real-world projects, which will allow me to acquire a comprehensive set of software development skills.</li>
            <li><strong>Followed by two years of paid professional experience</strong>, working with one of our partner companies where I will apply the skills I’ve gained.</li>
          </ul>
          <p className="text-center text-lg sm:text-xl text-default-500 max-w-3xl">
            How do we learn without professors or traditional courses? I will learn through the innovative <strong>01Edu platform</strong> – a peer-to-peer and <DrawerTest /> learning platform that has helped thousands of students worldwide become ready-to-work digital talents. By collaborating with other students on group projects, as well as improving my individual skills, I will acquire a complete set of development skills.
          </p>
          <p className="text-center text-lg sm:text-xl text-default-500 max-w-3xl ">
            The 01Edu platform includes detailed instructions, support videos, and built-in features to teach everyone the basics of programming. The 01 community encourages the creation of collective intelligence. Study groups, chats, and collaborative workspaces are provided to foster support and teamwork.
          </p>
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight">
            After that..
          </h1>
          <p className="text-center text-lg sm:text-xl text-default-500 max-w-3xl">
            After completing the first 18 months of the general curriculum, I have the opportunity during the final 6 months to specialize in a specific application domain and acquire specialized skills. I can choose to specialize in fields such as Artificial Intelligence, Video Game Development, Blockchain, Cybersecurity, DevOps, UX/UI, or even Mobile and Web Application Development.
          </p>

          
        </section>

        {/* Add further sections as required */}

      </main>
    </div>
  );
}
