import { AppWindow, ChevronsUpDown, Minus } from "lucide-react"
import type { Locale } from "@/lib/messages"
import { accountingNavigation } from "./fixtures"

export function AccountingSidebar({ locale }: { locale: Locale }) {
  return (
    <aside className="edu-admin-sidebar">
      <div className="edu-admin-brand">
        <span className="edu-tech-brand-icon">
          <AppWindow size={19} />
        </span>
        <div>
          <strong>Edu Tech & Services</strong>
          <small>v0.3.6 · DEMO</small>
        </div>
      </div>
      <div className="edu-admin-navigation">
        {accountingNavigation.map((group) => (
          <div className="edu-admin-nav-group" key={group.title.en}>
            <div className="edu-admin-nav-title">
              {group.title[locale]}
              <Minus size={13} />
            </div>
            <div className="edu-admin-nav-items">
              {group.items.map((item) => (
                <div
                  className={`edu-admin-nav-item ${"active" in item && item.active ? "is-current" : ""}`}
                  key={item.label.en}
                >
                  <item.icon size={14} />
                  <span>{item.label[locale]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="edu-admin-user">
        <span className="edu-admin-avatar">AR</span>
        <div>
          <strong>Adrien Rocchetti</strong>
          <small>admin@example.test</small>
        </div>
        <ChevronsUpDown size={13} />
      </div>
    </aside>
  )
}
