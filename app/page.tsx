"use client";

import React from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col bg-background dark:bg-black-90 light:bg-white-90">
      <main className="container mx-auto flex flex-col items-center justify-center px-8 py-16 sm:py-24">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-9 overflow-hidden border-1 border-default-50 dark:bg-yellow-55
             light:bg-gray-90 text-white shadow-[0_4px_15px_0_rgba(0,0,0,0.25)] px-[18px] py-2 text-small font-normal leading-5 "
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2] "
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            <Link
              className="text-medium text-default-700 w-full py-2"
              href="/school"
              size="md"
            >
              My school
            </Link>
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
          </div>
        </section>
      </main>
    </div>
  );
}
