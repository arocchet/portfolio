"use client";

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
  Divider,
  cn,
  NavbarProps,
} from "@heroui/react";
import { Logo } from "./icons";
import { ThemeSwitch } from "./theme-switch";

const BasicNavbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ classNames = {}, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    return (
      <Navbar
        ref={ref}
        {...props}
        classNames={{
          base: cn(
            "w-full items-center justify-center backdrop-blur-xl backdrop-saturate-150 max-w-xs sm:max-w-md md:max-w-screen-sm mx-auto rounded-full px-1.5 pr-[18px] md:pr-1.5 py-[5px] top-12 shadow-[0_4px_15px_0_rgba(0,0,0,0.25)]",
            {
              "border-none backdrop-blur-xl": isMenuOpen,
            }
          ),
          wrapper: "w-full max-w-[1024px] justify-between",
        }}
        height="40px"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Left Content */}
        <NavbarBrand className="">
          <div className="rounded-full bg-background -ml-5">
            <Logo />
          </div>
          <span className="ml-1 text-small font-medium ">Adrien R.</span>
        </NavbarBrand>

        {/* Center Content */}
        <NavbarContent className="hidden md:flex" justify="center">
          <NavbarItem>
            <Link className="text-default-500" href="/" size="sm">
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
        <NavbarContent className="hidden md:flex mt-1" justify="end">
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {/* Moved NavbarMenuToggle to the right side */}
        <NavbarContent justify="end" className="md:hidden -mr-5">
          <ThemeSwitch />
          <NavbarMenuToggle
            className="text-default-400"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          />
        </NavbarContent>

        <NavbarMenu
          className="z-30 px-6 fixed inset-x-0 w-screen flex-col gap-2 bottom-0 top-[initial] max-h-fit rounded-t-2xl bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150"
          motionProps={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 50 },
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          <NavbarMenuItem className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Link
                className="text-medium text-default-500 w-full py-2 flex justify-between items-center"
                href="/"
                size="md"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Divider className="opacity-50" />
              <Link
                className="text-medium text-default-500 w-full py-2"
                href="/school"
                size="md"
                onClick={handleLinkClick}
              >
                My school
              </Link>
              <Divider className="opacity-50" />
              <Link
                className="text-medium text-default-500 w-full py-2"
                href="/projects"
                size="md"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <Divider className="opacity-50" />
              <Link
                className="text-medium text-default-500 w-full py-2"
                href="/about"
                size="md"
                onClick={handleLinkClick}
              >
                About me
              </Link>
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  }
);

BasicNavbar.displayName = "BasicNavbar";

export default BasicNavbar;
