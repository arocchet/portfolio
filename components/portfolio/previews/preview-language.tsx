import type { Locale } from "@/lib/messages"

/** SVG flags render consistently on platforms without flag emoji support. */
export default function PreviewLanguage({ locale }: { locale: Locale }) {
  return (
    <span className="edu-admin-language">
      <svg width="18" height="12" viewBox="0 0 60 40" aria-hidden="true">
        {locale === "fr" ? (
          <>
            <path fill="#002395" d="M0 0h20v40H0z" />
            <path fill="#fff" d="M20 0h20v40H20z" />
            <path fill="#ed2939" d="M40 0h20v40H40z" />
          </>
        ) : (
          <>
            <path fill="#012169" d="M0 0h60v40H0z" />
            <path stroke="#fff" strokeWidth="8" d="m0 0 60 40m0-40L0 40" />
            <path stroke="#c8102e" strokeWidth="3" d="m0 0 60 40m0-40L0 40" />
            <path stroke="#fff" strokeWidth="13" d="M30 0v40M0 20h60" />
            <path stroke="#c8102e" strokeWidth="7" d="M30 0v40M0 20h60" />
          </>
        )}
      </svg>
      {locale === "fr" ? "Fr" : "En"}
    </span>
  )
}
