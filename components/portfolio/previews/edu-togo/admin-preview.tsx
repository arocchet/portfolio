"use client"

import { Bell, ChevronDown, PanelLeft, Sun } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import ScaledPreview from "../scaled-preview"
import { demoAccount, eduCopy } from "./fixtures"
import { EduSidebar } from "./sidebar"
import { EduKpiCards } from "./kpi-cards"
import { EduStaffPanel } from "./staff-panel"
import {
  EduDevelopmentPanel,
  EduLoginHeatmap,
  EduRoleDistribution,
} from "./activity-panels"

export default function EduTogoAdminPreview() {
  const { locale } = useLocale()
  const copy = eduCopy[locale]
  return (
    <div className="edu-admin-render" role="img" aria-label={copy.previewLabel}>
      <ScaledPreview width={1440} height={940}>
        <div className="edu-admin" aria-hidden="true">
          <EduSidebar locale={locale} copy={copy} />
          <div className="edu-admin-main">
            <div className="edu-admin-toolbar">
              <div>
                <PanelLeft size={16} />
                <span className="edu-admin-toolbar-divider" />
                <span>{copy.dashboard}</span>
              </div>
              <div>
                <span className="edu-admin-demo-label mono">{copy.demo}</span>
                <span className="edu-admin-year">
                  2026 – 2027
                  <ChevronDown size={12} />
                </span>
                <span className="edu-admin-language">
                  {locale === "fr" ? "🇫🇷 Fr" : "🇬🇧 En"}
                </span>
                <span className="edu-admin-toolbar-icon">
                  <Bell size={15} />
                </span>
                <span className="edu-admin-toolbar-icon">
                  <Sun size={15} />
                </span>
              </div>
            </div>
            <div className="edu-admin-content">
              <div className="edu-admin-welcome">
                <strong>
                  {copy.welcome} {demoAccount.name}
                </strong>
                <small>{copy.date}</small>
              </div>
              <EduKpiCards copy={copy} />
              <div className="edu-admin-panels">
                <EduStaffPanel copy={copy} />
                <EduLoginHeatmap copy={copy} />
                <EduRoleDistribution copy={copy} />
                <EduDevelopmentPanel copy={copy} />
              </div>
            </div>
          </div>
        </div>
      </ScaledPreview>
    </div>
  )
}
