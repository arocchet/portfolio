"use client";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, DiscordIcon, SearchIcon, Logo } from "@/components/icons";
import type { NavbarProps } from "@heroui/react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
  cn,
} from "@heroui/react";

const BasicNavbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ classNames = {}, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <Navbar
        ref={ref}
        {...props}
        classNames={{
          base: cn("border-default-100 bg-transparent", {
            "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
          }),
          wrapper: "w-full justify-center",
          item: "hidden md:flex",
          ...classNames,
        }}
        height="80px"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Left Content */}
        <NavbarBrand className="">
          <div className="rounded-full">
            <Logo />
          </div>
          <span className="ml-2 text-small font-medium text-default-foreground">
            Adrien Rocchetti
          </span>
        </NavbarBrand>

        {/* Center Content */}
        <NavbarContent justify="center">
          <NavbarItem
          >
            <Link

              className="text-default-500 x"
              href="/"
              size="sm"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="/school" size="sm">
              My School
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              About me
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right Content */}
        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem className="ml-2 !flex gap-2">
            <Link
              isExternal
              aria-label="Discord"
              href={siteConfig.links.discord}
            >
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle className="text-default-400 md:hidden" />

        <NavbarMenu
          className="top-[calc(var(--navbar-height)_-_1px)] min-h-fit bg-default-200/50 pb-6 pt-10 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
          motionProps={{
            initial: { opacity: 0, y: -30 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: {
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
        >
          <Divider className="opacity-50 " />
          <NavbarMenuItem className="ml-2 !flex gap-2 justify-center">
            <Link
              isExternal
              aria-label="Discord"
              href={siteConfig.links.discord}
              size="md"
            >
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="Github"
              href={siteConfig.links.github}
              size="md"
            >
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarMenuItem>
          <Divider className="opacity-50" />
          <NavbarMenuItem
           
          >
            <Link
              aria-current="page"
              className="text-default-500 justify-center flex"
              href="/"
              size="md"
            >
              Home
            </Link>
          </NavbarMenuItem>
          <Divider className="opacity-50 " />

          <NavbarMenuItem>
            
            <Link
              className="mb-2 w-full text-default-500 justify-center"
               aria-current="page"
              href="/school"
              size="md"
            >
              My School
            </Link>

            <Divider className="opacity-50" />
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              className="mb-2 w-full text-default-500 justify-center"
              href="#"
              size="md"
            >
              Projects
            </Link>

            <Divider className="opacity-50" />
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              className="mb-2 w-full text-default-500 justify-center"
              href="#"
              size="md"
            >
              About me
            </Link>
            <Divider className="opacity-50 " />
          </NavbarMenuItem>
        </NavbarMenu>
        
      </Navbar>
    );
  }
);

BasicNavbar.displayName = "BasicNavbar";

export default BasicNavbar;
