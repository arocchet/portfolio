"use client"

import Image from "next/image"
import { useLocale } from "@/components/locale-provider"
import ScaledPreview from "./scaled-preview"

export default function NuakePreview() {
  const { locale } = useLocale()
  const fr = locale === "fr"
  return (
    <div className="visual-inner nuake-preview" aria-hidden="true">
      <ScaledPreview width={1440} height={940}>
        <div className="nuake-hero-render">
          <div className="nuake-hero-brand">
            <span className="nuake-hero-heading">Nuaké</span>
            <Image src="/nuake.png" width={120} height={120} alt="" />
          </div>
          <div className="nuake-hero-mission">
            <span className="nuake-hero-heading">{fr ? "ONG" : "NGO"}</span>
            <p>
              {fr
                ? "Car demain c’est déjà aujourd’hui."
                : "Because tomorrow starts today."}
            </p>
          </div>
          <div className="nuake-hero-action">
            <p>
              {fr
                ? "Agir avec les communautés locales pour des projets durables et utiles. Des actions concrètes, pensées avec celles et ceux qu’elles accompagnent."
                : "Working with local communities on lasting, useful projects. Practical action, shaped with the people it supports."}
            </p>
            <span className="nuake-hero-heading">Togo</span>
          </div>
          <p className="nuake-hero-closing">
            {fr
              ? "Prévenir, sensibiliser et construire aux côtés des populations. Une ONG de terrain, engagée pour un développement local durable."
              : "Preventing, raising awareness and building alongside communities. A grassroots NGO committed to sustainable local development."}
          </p>
        </div>
      </ScaledPreview>
    </div>
  )
}
