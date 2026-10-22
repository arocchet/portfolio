import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Users,
} from "lucide-react"
import type { CSSProperties } from "react"
import { demoStaff, eduRoleColors, type EduCopy } from "./fixtures"
import { EduPanel } from "./panel"

export function EduStaffPanel({ copy }: { copy: EduCopy }) {
  return (
    <EduPanel title={copy.staff} icon={Users} className="edu-admin-staff">
      <div className="edu-admin-filters">
        <div>
          <Search size={13} />
          {copy.search}
        </div>
        <div>
          {copy.allRoles}
          <ChevronDown size={12} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {copy.staffColumns.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {demoStaff.map((person) => (
            <tr key={person.id}>
              <td className="edu-admin-staff-id">{person.id}</td>
              <td>
                <div className="edu-admin-person">
                  <span className="edu-admin-avatar">{person.initials}</span>
                  <div>
                    <strong>{person.name}</strong>
                    <small>{person.email}</small>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="edu-admin-role"
                  style={
                    {
                      "--edu-role-color":
                        person.role === "direction"
                          ? eduRoleColors.direction
                          : eduRoleColors.teachers,
                    } as CSSProperties
                  }
                >
                  {person.role === "direction" ? copy.direction : copy.teacher}
                </span>
              </td>
              <td>{person.school}</td>
              <td>
                <span
                  className={`edu-admin-status ${person.present ? "is-present" : "is-absent"}`}
                >
                  ● {person.present ? copy.present : copy.absent}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="edu-admin-pagination">
        <span>{copy.pagination}</span>
        <span className="edu-admin-page-controls">
          <ChevronLeft size={12} />
          <span>1</span>
          <ChevronRight size={12} />
        </span>
        <span>
          {copy.perPage}
          <ChevronDown size={11} />
        </span>
      </div>
    </EduPanel>
  )
}
