"use client"

import { RevealWords } from "./reveal-words"

import { useLocale } from "@/components/locale-provider"

export default function AboutSection() {
  const { t } = useLocale()
  return (
    <section id="about" className="section-shell about-section">
      <div className="about-copy reveal">
        <p className="eyebrow mono">03 / {t.aboutLabel}</p>
        <h2>
          <RevealWords text={t.aboutTitle} />
          <br />
          <span>
            <RevealWords text={t.aboutEmphasis} />
          </span>
        </h2>
        <p>{t.aboutText}</p>
        <p>{t.aboutFreelance}</p>
        <p>{t.aboutSecond}</p>
        <div className="school-note">
          <span className="school-mark">01</span>
          <div>
            <h3>{t.schoolTitle}</h3>
            <p>{t.schoolText}</p>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-track">
          <div className="timeline-fill" />
        </div>
        {t.timeline.map((item, index) => (
          <article className="timeline-item reveal" key={item.title}>
            <span className="timeline-point" />
            <span className="eyebrow mono">
              0{index + 1} / {item.subtitle}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
