import { GraduationCap, UserPlus, Users } from "lucide-react"
import { demoTotalUsers, type EduCopy } from "./fixtures"

export function EduKpiCards({ copy }: { copy: EduCopy }) {
  const metrics = [
    {
      label: copy.users,
      value: demoTotalUsers.toLocaleString(copy.numberLocale),
      description: copy.registrations,
      icon: Users,
      color: "#3b82f6",
      path: "M0,52 C18,50 22,44 42,42 S62,48 80,34 S105,32 116,19 S142,22 160,4",
    },
    {
      label: copy.classes,
      value: "36",
      description: copy.creations,
      icon: GraduationCap,
      color: "#00ab81",
      path: "M0,52 C24,52 25,48 45,48 S70,38 86,38 S110,28 121,26 S145,16 160,7",
    },
    {
      label: copy.newUsers,
      value: "148",
      description: copy.thisMonth,
      icon: UserPlus,
      color: "#9969ff",
      path: "M0,49 C18,49 22,43 42,41 S61,36 80,31 S107,35 120,18 S145,15 160,5",
    },
  ]
  return (
    <div className="edu-admin-kpis">
      {metrics.map((metric) => (
        <div className="edu-admin-kpi" key={metric.label}>
          <div className="edu-admin-kpi-label">
            {metric.label}
            <metric.icon size={15} />
          </div>
          <div className="edu-admin-kpi-value">
            <strong>{metric.value}</strong>
            <svg
              viewBox="0 0 160 60"
              aria-hidden="true"
              style={{ color: metric.color }}
            >
              <path
                d={`${metric.path} L160,60 L0,60 Z`}
                fill="currentColor"
                opacity="0.09"
              />
              <path
                d={metric.path}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <small>{metric.description}</small>
        </div>
      ))}
    </div>
  )
}
