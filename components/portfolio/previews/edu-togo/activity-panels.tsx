import {
  CalendarDays,
  ChartColumn,
  ChevronLeft,
  ChevronRight,
  Construction,
  Info,
} from "lucide-react"
import type { CSSProperties } from "react"
import {
  demoHeatmap,
  demoRoles,
  demoTotalUsers,
  type EduCopy,
} from "./fixtures"
import { EduPanel } from "./panel"

export function EduLoginHeatmap({ copy }: { copy: EduCopy }) {
  return (
    <EduPanel
      title={copy.heatmap}
      icon={CalendarDays}
      className="edu-admin-heatmap"
    >
      <div className="edu-admin-week">
        <span>
          <ChevronLeft size={12} />
          <CalendarDays size={12} />
          {copy.week}
          <ChevronRight size={12} />
        </span>
        <Info size={13} />
      </div>
      <table>
        <thead>
          <tr>
            <th>{copy.hour}</th>
            {copy.days.map((day, index) => (
              <th key={day}>
                {day}
                <small>{12 + index} / 10</small>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {demoHeatmap.map((row, hour) => (
            <tr key={hour}>
              <th>{String(hour + 8).padStart(2, "0")}:00</th>
              {row.map((count, day) => (
                <td
                  key={day}
                  data-level={
                    count === 0
                      ? 0
                      : count < 4
                        ? 1
                        : count < 9
                          ? 2
                          : count < 14
                            ? 3
                            : 4
                  }
                >
                  {count || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="edu-admin-heatmap-legend">
        {copy.less}
        {[0, 1, 2, 3, 4].map((level) => (
          <i key={level} data-level={level} />
        ))}
        {copy.more}
      </div>
    </EduPanel>
  )
}

export function EduRoleDistribution({ copy }: { copy: EduCopy }) {
  const gradient = demoRoles
    .map((role, index) => {
      const previous = demoRoles
        .slice(0, index)
        .reduce((total, item) => total + item.count, 0)
      const start = (previous / demoTotalUsers) * 100
      const end = ((previous + role.count) / demoTotalUsers) * 100
      return `${role.color} ${start}% ${end}%`
    })
    .join(", ")

  return (
    <EduPanel title={copy.distribution} icon={ChartColumn}>
      <div className="edu-admin-distribution">
        <div
          className="edu-admin-donut"
          style={{ background: `conic-gradient(${gradient})` }}
        >
          <div>
            <strong>{demoTotalUsers.toLocaleString(copy.numberLocale)}</strong>
            <small>{copy.total}</small>
          </div>
        </div>
        <ul>
          {demoRoles.map((role) => (
            <li
              key={role.key}
              style={{ "--role-color": role.color } as CSSProperties}
            >
              <i />
              <span>{copy[role.key]}</span>
              <strong>{role.count}</strong>
              <small>
                ({Math.round((role.count / demoTotalUsers) * 100)} %)
              </small>
            </li>
          ))}
        </ul>
      </div>
    </EduPanel>
  )
}

export function EduDevelopmentPanel({ copy }: { copy: EduCopy }) {
  return (
    <EduPanel title={copy.development} icon={Construction}>
      <div className="edu-admin-development">
        <Construction size={32} strokeWidth={1.5} />
        <p>{copy.comingSoon}</p>
      </div>
    </EduPanel>
  )
}
