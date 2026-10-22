import { Fragment } from "react"

/** React owns the word spans, so translations never conflict with DOM splitting. */
export function RevealWords({ text }: { text: string }) {
  const words = text.split(" ")
  return words.map((word, index) => (
    <Fragment key={`${index}-${word}`}>
      <span className="reveal-word-mask">
        <span data-reveal-word>{word}</span>
      </span>
      {index < words.length - 1 ? " " : null}
    </Fragment>
  ))
}
