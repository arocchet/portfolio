"use client";

import { FaArrowRight } from "react-icons/fa6";

import React from "react";
import { Alert, Button, Link } from "@heroui/react";
import { IoSchoolOutline } from "react-icons/io5";

const btnRedirect = (href: string) => {
  if (window !== undefined) {
    window.location.href = href;
  }
};

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <main className="container mx-auto flex flex-col items-center justify-center px-8 py-16 sm:py-24">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="bg-default-100 h-9 overflow-hidden shadow-[0_4px_15px_0_rgba(0,0,0,0.25)] py-2 text-small font-normal leading-5 max-w-min  border-1 border-default-200"
            radius="full"
            startContent={<IoSchoolOutline className="text-purple-30 -mr-1" />}
            onClick={() => btnRedirect("/school")}
          >
            <div className="text-default-600 inline-flex items-center justify-center px-2 py-1 transition ease-out hover:duration-300">
              My School
              <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </Button>

          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text text-default-800">
              Welcome to my <br /> Fullstack dev portfolio.
            </div>
          </div>
          <p className="text-center font-normal leading-7 sm:w-[466px] sm:text-[18px] text-default-500">
            Here is a presentation of my different skills, projects and
            information about me, enjoy reading!
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Alert
              color={"secondary"}
              variant="faded"
              title={`Website in development...`}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
