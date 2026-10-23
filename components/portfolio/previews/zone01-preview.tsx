"use client"

import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import { useLocale } from "@/components/locale-provider"
import Zone01Galaxy from "./zone01-galaxy"

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zone01-sans",
  display: "swap",
  preload: false,
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zone01-mono",
  display: "swap",
  preload: false,
})

export default function Zone01Preview() {
  const { locale } = useLocale()

  return (
    <div
      className={`visual-inner zone01-preview ${sans.variable} ${mono.variable}`}
      role="img"
      aria-label={
        locale === "fr"
          ? "Galaxie du cursus Zone01 : projets et branches de spécialisation, avec les états de progression fournis."
          : "Zone01 curriculum galaxy: projects and specialization branches, with the supplied progress states."
      }
    >
      <Zone01Galaxy />
    </div>
  )
}
