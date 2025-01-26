"use client"

import { Link } from "@heroui/react"; // Utilisation du composant Link de HeroUI
import { FaDiscord, FaGithub,FaLinkedin   } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`text-white py-4 ${className}`}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          {/* Discord Link */}
          <Link
            isExternal
            aria-label="Discord"
            href={siteConfig.links.discord}
            className="text-lg text-gray-400 hover:text-white"
          >
            <FaDiscord size={24} />
          </Link>
          
          {/* GitHub Link */}
          <Link
            isExternal
            aria-label="GitHub"
            href={siteConfig.links.github}
            className="text-lg text-gray-400 hover:text-white"
          >
            <FaGithub  size={24} />
          </Link>

          {/* LinkedIn Link */}
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
            className="text-lg text-gray-400 hover:text-white"
          >
            <FaLinkedin  size={24} />
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-400 opacity-70">
          © 2025 My Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
