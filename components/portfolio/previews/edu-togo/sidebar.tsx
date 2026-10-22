import Image from "next/image"
import { ChevronsUpDown, Minus } from "lucide-react"
import type { Locale } from "@/lib/messages"
import { demoAccount, eduNavigation, type EduCopy } from "./fixtures"

export function EduSidebar({
  locale,
  copy,
}: {
  locale: Locale
  copy: EduCopy
}) {
  return (
    <aside className="edu-admin-sidebar">
      <div className="edu-admin-brand">
        <Image
          src="/projects/edu-togo-logo.png"
          alt=""
          width={24}
          height={27}
        />
        <div>
          <strong>Edu Togo</strong>
          <small>v0.9.0 · DEMO</small>
        </div>
      </div>
      <div className="edu-admin-navigation">
        {eduNavigation.map((section) => (
          <div className="edu-admin-nav-group" key={section.title.en}>
            <div className="edu-admin-nav-title">
              {section.title[locale]}
              <Minus size={13} />
            </div>
            <div className="edu-admin-nav-items">
              {section.items.map((item) => (
                <div
                  className={`edu-admin-nav-item ${"active" in item && item.active ? "is-current" : ""}`}
                  key={item.label.en}
                >
                  <item.icon size={15} />
                  <span>{item.label[locale]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="edu-admin-user">
        <span className="edu-admin-avatar">{demoAccount.initials}</span>
        <div>
          <strong>{demoAccount.name}</strong>
          <small>{copy.administrator}</small>
        </div>
        <ChevronsUpDown size={13} />
      </div>
    </aside>
  )
}
