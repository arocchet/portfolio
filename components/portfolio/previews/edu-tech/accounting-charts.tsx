import { ChartColumn } from "lucide-react"
import type { Locale } from "@/lib/messages"
import {
  accountingSeries,
  accountingTotals,
  accountingTypes,
  formatAccountingMoney,
  formatAccountingNumber,
  type AccountingCopy,
} from "./fixtures"

const plot = { left: 70, right: 842, top: 22, bottom: 398 }
const minimum = -250000
const maximum = 1000000
const x = (index: number) =>
  plot.left + (index / (accountingSeries.length - 1)) * (plot.right - plot.left)
const y = (amount: number) =>
  plot.bottom -
  ((amount - minimum) / (maximum - minimum)) * (plot.bottom - plot.top)
const ticks = [1000000, 750000, 500000, 250000, 0, -250000]
const series = [
  { key: "income", color: "var(--chart-1)", opacity: 0.18 },
  { key: "expense", color: "var(--chart-2)", opacity: 0.12 },
  { key: "net", color: "var(--chart-3)", opacity: 0.08 },
] as const

export function AccountingTrend({
  locale,
  copy,
}: {
  locale: Locale
  copy: AccountingCopy
}) {
  const dateFormat = new Intl.DateTimeFormat(
    locale === "fr" ? "fr-FR" : "en-GB",
    {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    }
  )

  return (
    <div className="edu-tech-panel edu-tech-trend">
      <strong className="edu-tech-panel-title">{copy.chart}</strong>
      <svg viewBox="0 0 860 438" aria-hidden="true">
        {ticks.map((amount) => (
          <g key={amount}>
            <line
              x1={plot.left}
              x2={plot.right}
              y1={y(amount)}
              y2={y(amount)}
              className="edu-tech-gridline"
            />
            <text x={plot.left - 12} y={y(amount) + 4} textAnchor="end">
              {formatAccountingNumber(amount, locale)}
            </text>
          </g>
        ))}
        {series.map(({ key, color, opacity }) => {
          const line = accountingSeries
            .map(
              (row, index) =>
                `${index ? "L" : "M"}${x(index).toFixed(2)},${y(row[key]).toFixed(2)}`
            )
            .join(" ")
          return (
            <g key={key}>
              <path
                d={`${line} L${plot.right},${y(0)} L${plot.left},${y(0)} Z`}
                fill={color}
                fillOpacity={opacity}
              />
              <path
                d={line}
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
              />
            </g>
          )
        })}
        {[0, 15, 30, 46, 61, 76, 91, 107, 122].map((index) => (
          <text key={index} x={x(index)} y="424" textAnchor="middle">
            {dateFormat.format(
              new Date(`${accountingSeries[index].date}T12:00:00Z`)
            )}
          </text>
        ))}
      </svg>
    </div>
  )
}

export function AccountingDistribution({
  locale,
  copy,
}: {
  locale: Locale
  copy: AccountingCopy
}) {
  const circumference = 2 * Math.PI * 62

  return (
    <div className="edu-tech-panel edu-tech-distribution">
      <div className="edu-tech-panel-title">
        <strong>{copy.distribution}</strong>
        <ChartColumn size={15} />
      </div>
      <svg className="edu-tech-donut" viewBox="0 0 180 180" aria-hidden="true">
        {accountingTypes.map((row, index) => {
          const preceding = accountingTypes
            .slice(0, index)
            .reduce((sum, item) => sum + item.count, 0)
          const length = (row.count / accountingTotals.count) * circumference
          return (
            <circle
              key={row.type}
              cx="90"
              cy="90"
              r="62"
              fill="none"
              stroke={row.color}
              strokeWidth="23"
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={
                (-preceding / accountingTotals.count) * circumference
              }
              transform="rotate(-90 90 90)"
            />
          )
        })}
        <text
          x="90"
          y="88"
          textAnchor="middle"
          className="edu-tech-donut-total"
        >
          {accountingTotals.count}
        </text>
        <text x="90" y="108" textAnchor="middle">
          {copy.total}
        </text>
      </svg>
      <div className="edu-tech-legend">
        {accountingTypes.map((row) => (
          <div key={row.type}>
            <span>
              <i style={{ background: row.color }} />
              {row.label[locale]}
            </span>
            <span>
              {row.count} (
              {Math.round((row.count / accountingTotals.count) * 100)}%)
            </span>
            <small>{formatAccountingMoney(row.amount, locale)}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
