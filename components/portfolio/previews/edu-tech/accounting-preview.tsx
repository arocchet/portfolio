"use client"

import {
  Bell,
  CalendarDays,
  ChevronDown,
  Download,
  Euro,
  PanelLeft,
  Sun,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import ScaledPreview from "../scaled-preview"
import PreviewLanguage from "../preview-language"
import { AccountingSidebar } from "./accounting-sidebar"
import { AccountingDistribution, AccountingTrend } from "./accounting-charts"
import {
  accountingCopy,
  accountingTotals,
  formatAccountingMoney,
  formatAccountingNumber,
} from "./fixtures"

export default function AccountingPreview() {
  const { locale } = useLocale()
  const copy = accountingCopy[locale]
  const stats = [
    {
      label: copy.income,
      value: formatAccountingMoney(accountingTotals.income, locale),
      hint: copy.incomeHint,
      icon: TrendingUp,
      color: "var(--teal)",
    },
    {
      label: copy.expense,
      value: formatAccountingMoney(accountingTotals.expense, locale),
      hint: copy.expenseHint,
      icon: TrendingDown,
      color: "var(--red)",
    },
    {
      label: copy.net,
      value: formatAccountingMoney(accountingTotals.net, locale),
      hint: copy.netHint,
      icon: Euro,
      color: "var(--teal)",
    },
    {
      label: copy.pending,
      value: formatAccountingNumber(accountingTotals.pending, locale),
      hint: copy.pendingHint,
      icon: WalletCards,
      color: "var(--textMinimal)",
    },
  ]

  return (
    <div
      className="visual-inner edu-tech-preview"
      role="img"
      aria-label={copy.label}
    >
      <ScaledPreview width={1440} height={940}>
        <div className="edu-admin edu-tech" aria-hidden="true" inert>
          <AccountingSidebar locale={locale} />
          <div className="edu-admin-main">
            <div className="edu-admin-toolbar">
              <div>
                <PanelLeft size={16} />
                <span className="edu-admin-toolbar-divider" />
              </div>
              <div>
                <span className="edu-admin-demo-label">{copy.demo}</span>
                <PreviewLanguage locale={locale} />
                <span className="edu-admin-toolbar-icon">
                  <Bell size={14} />
                </span>
                <span className="edu-admin-toolbar-icon">
                  <Sun size={14} />
                </span>
              </div>
            </div>
            <div className="edu-tech-content">
              <div className="edu-tech-filters">
                <div>
                  <small>{copy.organization}</small>
                  <span className="edu-tech-control">
                    Edu Tech & Services
                    <ChevronDown size={13} />
                  </span>
                </div>
                <div>
                  <small>{copy.start}</small>
                  <span className="edu-tech-control">
                    01 / 07 / 2026
                    <CalendarDays size={13} />
                  </span>
                </div>
                <div>
                  <small>{copy.end}</small>
                  <span className="edu-tech-control">
                    31 / 10 / 2026
                    <CalendarDays size={13} />
                  </span>
                </div>
                <span className="edu-tech-reset">{copy.reset}</span>
                <div>
                  <small>{copy.currency}</small>
                  <span className="edu-tech-control">
                    XOF
                    <ChevronDown size={13} />
                  </span>
                </div>
                <span className="edu-tech-control edu-tech-export">
                  <Download size={13} />
                  {copy.export}
                </span>
              </div>
              <div className="edu-tech-kpis">
                {stats.map((stat) => (
                  <div className="edu-tech-kpi" key={stat.label}>
                    <div>
                      <span>{stat.label}</span>
                      <stat.icon size={15} style={{ color: stat.color }} />
                    </div>
                    <strong>{stat.value}</strong>
                    <small>{stat.hint}</small>
                  </div>
                ))}
              </div>
              <div className="edu-tech-panels">
                <AccountingTrend locale={locale} copy={copy} />
                <AccountingDistribution locale={locale} copy={copy} />
              </div>
            </div>
          </div>
        </div>
      </ScaledPreview>
    </div>
  )
}
