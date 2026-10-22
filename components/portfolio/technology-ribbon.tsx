import { ribbonTechnologies } from "@/lib/portfolio-config"
import { TechnologyIcon } from "./technology-icon"

export default function TechnologyRibbon() {
  return (
    <div className="stack-ribbon">
      <ul className="technology-ribbon">
        {ribbonTechnologies.map((name) => (
          <li key={name}>
            <span className="ribbon-logo" title={name}>
              <TechnologyIcon name={name} size={34} />
              <span className="technology-tooltip" aria-hidden="true">
                {name}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
