import { TechnologyIcon, type TechnologyName } from "./technology-icon"

type TechnologyListProps = {
  items: readonly TechnologyName[]
  className?: string
}

export function TechnologyList({
  items,
  className = "tags",
}: TechnologyListProps) {
  return (
    <ul className={`${className} technology-list`}>
      {items.map((name) => (
        <li key={name}>
          <TechnologyIcon name={name} decorative />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )
}
