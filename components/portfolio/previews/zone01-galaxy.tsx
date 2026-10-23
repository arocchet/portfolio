"use client"

import { useId } from "react"

/** Imported Zone01 geometry. IDs are scoped so the card and dialog can coexist. */
export default function Zone01Galaxy() {
  const prefix = `zone01-${useId().replace(/:/g, "")}`
  return (
    <svg
      className="zone01-galaxy"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 300 2300 2000"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <title>Module graph</title>
      <defs>
        <radialGradient id={`${prefix}-RadialGradient-purple`}>
          <stop offset="0%" stopColor="var(--purple)" stopOpacity="100%"></stop>
          <stop offset="2%" stopColor="var(--purple)" stopOpacity="95%"></stop>
          <stop offset="25%" stopColor="var(--purple)" stopOpacity="54%"></stop>
          <stop offset="37%" stopColor="var(--purple)" stopOpacity="37%"></stop>
          <stop offset="61%" stopColor="var(--purple)" stopOpacity="13%"></stop>
          <stop offset="74%" stopColor="var(--purple)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--purple)" stopOpacity="1%"></stop>
          <stop offset="100%" stopColor="var(--purple)" stopOpacity="0%"></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-teal`}>
          <stop offset="0%" stopColor="var(--teal)" stopOpacity="100%"></stop>
          <stop offset="2%" stopColor="var(--teal)" stopOpacity="95%"></stop>
          <stop offset="25%" stopColor="var(--teal)" stopOpacity="54%"></stop>
          <stop offset="37%" stopColor="var(--teal)" stopOpacity="37%"></stop>
          <stop offset="61%" stopColor="var(--teal)" stopOpacity="13%"></stop>
          <stop offset="74%" stopColor="var(--teal)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--teal)" stopOpacity="1%"></stop>
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0%"></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-red`}>
          <stop offset="0%" stopColor="var(--red)" stopOpacity="100%"></stop>
          <stop offset="2%" stopColor="var(--red)" stopOpacity="95%"></stop>
          <stop offset="25%" stopColor="var(--red)" stopOpacity="54%"></stop>
          <stop offset="37%" stopColor="var(--red)" stopOpacity="37%"></stop>
          <stop offset="61%" stopColor="var(--red)" stopOpacity="13%"></stop>
          <stop offset="74%" stopColor="var(--red)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--red)" stopOpacity="1%"></stop>
          <stop offset="100%" stopColor="var(--red)" stopOpacity="0%"></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-green`}>
          <stop offset="0%" stopColor="var(--green)" stopOpacity="100%"></stop>
          <stop offset="2%" stopColor="var(--green)" stopOpacity="95%"></stop>
          <stop offset="25%" stopColor="var(--green)" stopOpacity="54%"></stop>
          <stop offset="37%" stopColor="var(--green)" stopOpacity="37%"></stop>
          <stop offset="61%" stopColor="var(--green)" stopOpacity="13%"></stop>
          <stop offset="74%" stopColor="var(--green)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--green)" stopOpacity="1%"></stop>
          <stop offset="100%" stopColor="var(--green)" stopOpacity="0%"></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-neutral`}>
          <stop
            offset="0%"
            stopColor="var(--neutral)"
            stopOpacity="100%"
          ></stop>
          <stop offset="2%" stopColor="var(--neutral)" stopOpacity="95%"></stop>
          <stop
            offset="25%"
            stopColor="var(--neutral)"
            stopOpacity="54%"
          ></stop>
          <stop
            offset="37%"
            stopColor="var(--neutral)"
            stopOpacity="37%"
          ></stop>
          <stop
            offset="61%"
            stopColor="var(--neutral)"
            stopOpacity="13%"
          ></stop>
          <stop offset="74%" stopColor="var(--neutral)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--neutral)" stopOpacity="1%"></stop>
          <stop
            offset="100%"
            stopColor="var(--neutral)"
            stopOpacity="0%"
          ></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-yellow`}>
          <stop offset="0%" stopColor="var(--yellow)" stopOpacity="100%"></stop>
          <stop offset="2%" stopColor="var(--yellow)" stopOpacity="95%"></stop>
          <stop offset="25%" stopColor="var(--yellow)" stopOpacity="54%"></stop>
          <stop offset="37%" stopColor="var(--yellow)" stopOpacity="37%"></stop>
          <stop offset="61%" stopColor="var(--yellow)" stopOpacity="13%"></stop>
          <stop offset="74%" stopColor="var(--yellow)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--yellow)" stopOpacity="1%"></stop>
          <stop offset="100%" stopColor="var(--yellow)" stopOpacity="0%"></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-blue`}>
          <stop offset="0%" stopColor="var(--blue)" stopOpacity="100%"></stop>
          <stop offset="2%" stopColor="var(--blue)" stopOpacity="95%"></stop>
          <stop offset="25%" stopColor="var(--blue)" stopOpacity="54%"></stop>
          <stop offset="37%" stopColor="var(--blue)" stopOpacity="37%"></stop>
          <stop offset="61%" stopColor="var(--blue)" stopOpacity="13%"></stop>
          <stop offset="74%" stopColor="var(--blue)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--blue)" stopOpacity="1%"></stop>
          <stop offset="100%" stopColor="var(--blue)" stopOpacity="0%"></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-textNeutral`}>
          <stop
            offset="0%"
            stopColor="var(--textNeutral)"
            stopOpacity="100%"
          ></stop>
          <stop
            offset="2%"
            stopColor="var(--textNeutral)"
            stopOpacity="95%"
          ></stop>
          <stop
            offset="25%"
            stopColor="var(--textNeutral)"
            stopOpacity="54%"
          ></stop>
          <stop
            offset="37%"
            stopColor="var(--textNeutral)"
            stopOpacity="37%"
          ></stop>
          <stop
            offset="61%"
            stopColor="var(--textNeutral)"
            stopOpacity="13%"
          ></stop>
          <stop
            offset="74%"
            stopColor="var(--textNeutral)"
            stopOpacity="6%"
          ></stop>
          <stop
            offset="86%"
            stopColor="var(--textNeutral)"
            stopOpacity="1%"
          ></stop>
          <stop
            offset="100%"
            stopColor="var(--textNeutral)"
            stopOpacity="0%"
          ></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-textMinimal`}>
          <stop
            offset="0%"
            stopColor="var(--textMinimal)"
            stopOpacity="100%"
          ></stop>
          <stop
            offset="2%"
            stopColor="var(--textMinimal)"
            stopOpacity="95%"
          ></stop>
          <stop
            offset="25%"
            stopColor="var(--textMinimal)"
            stopOpacity="54%"
          ></stop>
          <stop
            offset="37%"
            stopColor="var(--textMinimal)"
            stopOpacity="37%"
          ></stop>
          <stop
            offset="61%"
            stopColor="var(--textMinimal)"
            stopOpacity="13%"
          ></stop>
          <stop
            offset="74%"
            stopColor="var(--textMinimal)"
            stopOpacity="6%"
          ></stop>
          <stop
            offset="86%"
            stopColor="var(--textMinimal)"
            stopOpacity="1%"
          ></stop>
          <stop
            offset="100%"
            stopColor="var(--textMinimal)"
            stopOpacity="0%"
          ></stop>
        </radialGradient>
        <radialGradient id={`${prefix}-RadialGradient-grey60`}>
          <stop offset="0%" stopColor="var(--grey60)" stopOpacity="100%"></stop>
          <stop offset="2%" stopColor="var(--grey60)" stopOpacity="95%"></stop>
          <stop offset="25%" stopColor="var(--grey60)" stopOpacity="54%"></stop>
          <stop offset="37%" stopColor="var(--grey60)" stopOpacity="37%"></stop>
          <stop offset="61%" stopColor="var(--grey60)" stopOpacity="13%"></stop>
          <stop offset="74%" stopColor="var(--grey60)" stopOpacity="6%"></stop>
          <stop offset="86%" stopColor="var(--grey60)" stopOpacity="1%"></stop>
          <stop offset="100%" stopColor="var(--grey60)" stopOpacity="0%"></stop>
        </radialGradient>
      </defs>
      <g id={`${prefix}-checkpoint`}>
        <g style={{ opacity: "0.85" }}>
          <circle
            r="14.399999999999999"
            cx="1150"
            cy="1150"
            fill="transparent"
          ></circle>
          <svg
            width="28.799999999999997"
            height="28.799999999999997"
            viewBox="0 0 24 24"
            x="1135.6"
            y="1135.6"
          >
            <path
              fillRule="evenodd"
              d="M3 23V1h1.6v1.4c1.7-1 4.5-1.7 7.8 0 3.1 1.7 6.1.7 7.2 0l1.4-.8v11.1l-.4.3c-1.5.9-5.2 2-9.1 0-3.2-1.6-5.7-.3-6.5.4l-.4.3V23H3Zm6.4-12.4V7.8c-2.2-.3-4 .6-4.7 1.2v-.1 2.6a7.8 7.8 0 0 1 4.7-.9Zm4.9-1.1c2 .3 3.6 0 4.8-.4v2.7c-1 .4-2.7.9-4.8.4V9.5Zm0-1.2c-.7-.2-1.4-.4-2.1-.8-1-.4-2-.7-2.8-.8V3.2c.6.1 1.3.4 2 .7 1 .6 2 .9 2.9 1v3.4Z"
              clipRule="evenodd"
              fill="var(--textMinimal)"
            ></path>
          </svg>
        </g>
        <text
          x="1150"
          y="1190.8"
          fontSize="14.399999999999999px"
          textAnchor="middle"
          fill="var(--textMinimal)"
          fontFamily="var(--font-zone01-mono)"
          pointerEvents="none"
          style={{ textTransform: "uppercase" }}
        >
          checkpoint
        </text>
      </g>
      <g id={`${prefix}-slice-1`}>
        <g id={`${prefix}-g-slice-1-text-path`}>
          <path
            d="M 1015.0146019658267 989.1306669450146 A 210 210 0 0 1 1284.9853980341732 989.1306669450146"
            id={`${prefix}-slice-1-text-path`}
            fill="none"
          ></path>
          <text fill="var(--teal)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-slice-1-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Imperative
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-slice-1-inner-arc`}>
          <path
            d="M 918.5964605128459 874.2240004771679 A 360 360 0 0 1 1381.4035394871541 874.2240004771679"
            fill="none"
            stroke="var(--grey)"
            strokeWidth="0.25"
          ></path>
          <g id={`${prefix}-checkpoint-go`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="14.399999999999999"
                cx="918.5964605128459"
                cy="874.2240004771679"
                fill="transparent"
              ></circle>
              <svg
                width="28.799999999999997"
                height="28.799999999999997"
                viewBox="0 0 24 24"
                x="904.1964605128459"
                y="859.8240004771679"
              >
                <path
                  fillRule="evenodd"
                  d="M3 23V1h1.6v1.4c1.7-1 4.5-1.7 7.8 0 3.1 1.7 6.1.7 7.2 0l1.4-.8v11.1l-.4.3c-1.5.9-5.2 2-9.1 0-3.2-1.6-5.7-.3-6.5.4l-.4.3V23H3Zm6.4-12.4V7.8c-2.2-.3-4 .6-4.7 1.2v-.1 2.6a7.8 7.8 0 0 1 4.7-.9Zm4.9-1.1c2 .3 3.6 0 4.8-.4v2.7c-1 .4-2.7.9-4.8.4V9.5Zm0-1.2c-.7-.2-1.4-.4-2.1-.8-1-.4-2-.7-2.8-.8V3.2c.6.1 1.3.4 2 .7 1 .6 2 .9 2.9 1v3.4Z"
                  clipRule="evenodd"
                  fill="var(--textMinimal)"
                ></path>
              </svg>
            </g>
            <text
              x="918.5964605128459"
              y="922.2240004771679"
              fontSize="14.399999999999999px"
              textAnchor="middle"
              fill="var(--textMinimal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              checkpoint-go
            </text>
          </g>
          <g id={`${prefix}-go-reloaded`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="988.4322951278338"
                cy="828.2922494835715"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="976.4322951278338"
                y="816.2922494835715"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="988.4322951278338"
              y="868.2922494835715"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              go-reloaded
            </text>
          </g>
          <g id={`${prefix}-ascii-art`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1066.9782865327215"
                cy="799.7038465912634"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="1054.9782865327215"
                y="787.7038465912634"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="1066.9782865327215"
              y="839.7038465912634"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              ascii-art
            </text>
            <g id={`${prefix}-ascii-art-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-ascii-art-subContents`}
                  x1="1049.6820962270385"
                  y1="726.7254812977766"
                  x2="1066.9782865327215"
                  y2="799.7038465912634"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-ascii-art-subContents)`}
                x1="1066.9782865327215"
                y1="799.7038465912634"
                x2="1049.6820962270385"
                y2="726.7254812977766"
              ></line>
              <g id={`${prefix}-color`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1009.5748751885795"
                    cy="738.2891981964804"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1009.5748751885795"
                    cy="738.2891981964804"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-output`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1029.4897044227198"
                    cy="732.025995234301"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1029.4897044227198"
                    cy="732.025995234301"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-fs`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1049.6820962270385"
                    cy="726.7254812977766"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1049.6820962270385"
                    cy="726.7254812977766"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-justify`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1070.1055429389303"
                    cy="722.3998646738792"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1070.1055429389303"
                    cy="722.3998646738792"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-reverse`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1090.71300472388"
                    cy="719.0591082397386"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--textNeutral)"
                    r="3.25"
                    cx="1090.71300472388"
                    cy="719.0591082397386"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
          <g id={`${prefix}-ascii-art-web`}>
            <g style={{ opacity: "0.85" }}>
              <circle r="12" cx="1150" cy="790" fill="transparent"></circle>
              <svg width="24" height="24" viewBox="0 0 24 24" x="1138" y="778">
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="1150"
              y="830"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              ascii-art-web
            </text>
            <g id={`${prefix}-ascii-art-web-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-ascii-art-web-subContents`}
                  x1="1150"
                  y1="715"
                  x2="1150"
                  y2="790"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-ascii-art-web-subContents)`}
                x1="1150"
                y1="790"
                x2="1150"
                y2="715"
              ></line>
              <g id={`${prefix}-stylize`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1129.1295140932154"
                    cy="715.5009518790464"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1129.1295140932154"
                    cy="715.5009518790464"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-dockerize`}>
                <g style={{ opacity: "0.85" }}>
                  <circle r="9" cx="1150" cy="715" fill="transparent"></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1150"
                    cy="715"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-exportfile`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1170.8704859067846"
                    cy="715.5009518790464"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1170.8704859067846"
                    cy="715.5009518790464"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
          <g id={`${prefix}-groupie-tracker`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1233.0217134672785"
                cy="799.7038465912634"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="1221.0217134672785"
                y="787.7038465912634"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="1233.0217134672785"
              y="839.7038465912634"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              groupie-tracker
            </text>
            <g id={`${prefix}-groupie-tracker-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-groupie-tracker-subContents`}
                  x1="1250.3179037729617"
                  y1="726.7254812977767"
                  x2="1233.0217134672785"
                  y2="799.7038465912634"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-groupie-tracker-subContents)`}
                x1="1233.0217134672785"
                y1="799.7038465912634"
                x2="1250.3179037729617"
                y2="726.7254812977767"
              ></line>
              <g id={`${prefix}-filters`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1209.28699527612"
                    cy="719.0591082397386"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1209.28699527612"
                    cy="719.0591082397386"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-geolocalization`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1229.89445706107"
                    cy="722.3998646738792"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1229.89445706107"
                    cy="722.3998646738792"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-visualizations`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1250.3179037729617"
                    cy="726.7254812977767"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1250.3179037729617"
                    cy="726.7254812977767"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-search-bar`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1270.5102955772804"
                    cy="732.025995234301"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1270.5102955772804"
                    cy="732.025995234301"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
          <g id={`${prefix}-lem-in`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1311.5677048721664"
                cy="828.2922494835716"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="10"
                cx="1311.5677048721664"
                cy="828.2922494835716"
              ></circle>
            </g>
            <text
              x="1311.5677048721664"
              y="868.2922494835716"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              lem-in
            </text>
          </g>
          <g id={`${prefix}-forum`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1381.4035394871541"
                cy="874.2240004771679"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="1369.4035394871541"
                y="862.2240004771679"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="1381.4035394871541"
              y="914.2240004771679"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              forum
            </text>
            <g id={`${prefix}-forum-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-forum-subContents`}
                  x1="1429.6126102136445"
                  y1="816.7706672432446"
                  x2="1381.4035394871541"
                  y2="874.2240004771679"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-forum-subContents)`}
                x1="1381.4035394871541"
                y1="874.2240004771679"
                x2="1429.6126102136445"
                y2="816.7706672432446"
              ></line>
              <g id={`${prefix}-authentication`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1396.3867130623023"
                    cy="791.5051079494232"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1396.3867130623023"
                    cy="791.5051079494232"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-image-upload`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1413.302884798659"
                    cy="803.7391288974394"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1413.302884798659"
                    cy="803.7391288974394"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-security`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1429.6126102136445"
                    cy="816.7706672432446"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1429.6126102136445"
                    cy="816.7706672432446"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-moderation`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1445.2783243068297"
                    cy="830.5697083954767"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1445.2783243068297"
                    cy="830.5697083954767"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-advanced-features`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1460.2639453820689"
                    cy="845.1044700295649"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1460.2639453820689"
                    cy="845.1044700295649"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id={`${prefix}-slice-1-outer-arc-1`}>
          <path
            d="M 783.6110624786726 713.3546674221825 A 570 570 0 0 1 1516.3889375213275 713.3546674221825"
            fill="none"
            stroke="var(--grey)"
            strokeWidth="0.25"
          ></path>
          <g id={`${prefix}-git`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="783.6110624786726"
                cy="713.3546674221825"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="5"
                cx="783.6110624786726"
                cy="713.3546674221825"
              ></circle>
            </g>
            <text
              x="783.6110624786726"
              y="747.3546674221825"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              git
            </text>
          </g>
          <g id={`${prefix}-tetris-optimizer`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="918.160113446794"
                cy="629.2790891437174"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="918.160113446794"
                cy="629.2790891437174"
              ></circle>
            </g>
            <text
              x="918.160113446794"
              y="663.2790891437174"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              tetris-optimizer
            </text>
          </g>
          <g id={`${prefix}-atm-management-system`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1070.6713324527627"
                cy="585.5472008173049"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="1070.6713324527627"
                cy="585.5472008173049"
              ></circle>
            </g>
            <text
              x="1070.6713324527627"
              y="619.5472008173049"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              atm-management-system
            </text>
          </g>
          <g id={`${prefix}-push-swap`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1229.3286675472375"
                cy="585.547200817305"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="5"
                cx="1229.3286675472375"
                cy="585.547200817305"
              ></circle>
            </g>
            <text
              x="1229.3286675472375"
              y="619.547200817305"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              push-swap
            </text>
          </g>
          <g id={`${prefix}-my-ls-1`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1381.839886553206"
                cy="629.2790891437176"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="5"
                cx="1381.839886553206"
                cy="629.2790891437176"
              ></circle>
            </g>
            <text
              x="1381.839886553206"
              y="663.2790891437176"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              my-ls-1
            </text>
          </g>
          <g id={`${prefix}-net-cat`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1516.3889375213275"
                cy="713.3546674221825"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="5"
                cx="1516.3889375213275"
                cy="713.3546674221825"
              ></circle>
            </g>
            <text
              x="1516.3889375213275"
              y="747.3546674221825"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              net-cat
            </text>
          </g>
        </g>
      </g>
      <g id={`${prefix}-line-2`}>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${prefix}-LinearGradient-white-line-2`}
            x1="1647.9646071760521"
            y1="862.5"
            x2="1340.5255888325764"
            y2="1040"
          >
            <stop offset="0" stopColor="var(--neutral)"></stop>
            <stop
              offset="1"
              stopColor="var(--neutral)"
              stopOpacity="0.25"
            ></stop>
          </linearGradient>
        </defs>
        <line
          opacity="0.5"
          strokeWidth="1"
          stroke={`url(#${prefix}-LinearGradient-white-line-2)`}
          x1="1340.5255888325764"
          y1="1040"
          x2="1647.9646071760521"
          y2="862.5"
        ></line>
        <text
          x="1340.5255888325764"
          y="1040"
          fontSize="21px"
          fill="var(--neutral)"
          fontFamily="var(--font-zone01-mono)"
          alignmentBaseline="middle"
          textAnchor="end"
          style={{
            transform: "rotate(-30deg)",
            transformOrigin: "1340.53px 1040px",
          }}
        >
          AdminSys
        </text>
        <g id={`${prefix}-linux`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1401.1473670974872"
              cy="1005"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="4"
              cx="1401.1473670974872"
              cy="1005"
            ></circle>
          </g>
          <text
            x="1401.1473670974872"
            y="1039"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            linux
          </text>
        </g>
        <g id={`${prefix}-login`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1442.283573777248"
              cy="981.25"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--textNeutral)"
              r="4"
              cx="1442.283573777248"
              cy="981.25"
            ></circle>
          </g>
          <text
            x="1442.283573777248"
            y="1015.25"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            login
          </text>
        </g>
        <g id={`${prefix}-add-vm`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1483.419780457009"
              cy="957.5"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="4"
              cx="1483.419780457009"
              cy="957.5"
            ></circle>
          </g>
          <text
            x="1483.419780457009"
            y="991.5"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            add-vm
          </text>
        </g>
        <g id={`${prefix}-connect`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1524.5559871367698"
              cy="933.75"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="4"
              cx="1524.5559871367698"
              cy="933.75"
            ></circle>
          </g>
          <text
            x="1524.5559871367698"
            y="967.75"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            connect
          </text>
        </g>
        <g id={`${prefix}-remote`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1565.6921938165306"
              cy="910"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="4"
              cx="1565.6921938165306"
              cy="910"
            ></circle>
          </g>
          <text
            x="1565.6921938165306"
            y="944"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            remote
          </text>
        </g>
        <g id={`${prefix}-scan`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1606.8284004962914"
              cy="886.25"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="4"
              cx="1606.8284004962914"
              cy="886.25"
            ></circle>
          </g>
          <text
            x="1606.8284004962914"
            y="920.25"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            scan
          </text>
        </g>
        <g id={`${prefix}-piscine-cybersecurity`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="1647.9646071760521"
              cy="862.5"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="1633.564607176052"
              y="848.1"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--textNeutral)"
              ></path>
            </svg>
          </g>
          <text
            x="1647.9646071760521"
            y="903.3"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscine-cybersecurity
          </text>
        </g>
      </g>
      <g id={`${prefix}-slice-3`}>
        <g id={`${prefix}-g-slice-3-text-path`}>
          <path
            d="M 943.1903718674363 1186.4661173100553 A 210 210 0 1 0 1078.1757699016093 952.6645496349593"
            id={`${prefix}-slice-3-text-path`}
            fill="none"
          ></path>
          <text fill="var(--teal)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-slice-3-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Full-Stack
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-piscine-js`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="1236.6025403784438"
              cy="1200"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="1222.2025403784437"
              y="1185.6"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--teal)"
              ></path>
            </svg>
          </g>
          <text
            x="1236.6025403784438"
            y="1242"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscine-js
          </text>
        </g>
        <g id={`${prefix}-slice-3-inner-arc`}>
          <path
            d="M 1504.5307910843949 1087.486656039905 A 360 360 0 0 1 1273.1272515972407 1488.289343482927"
            fill="none"
            stroke="var(--grey)"
            strokeWidth="0.25"
          ></path>
          <g id={`${prefix}-checkpointjs`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="14.399999999999999"
                cx="1504.5307910843949"
                cy="1087.486656039905"
                fill="transparent"
              ></circle>
              <svg
                width="28.799999999999997"
                height="28.799999999999997"
                viewBox="0 0 24 24"
                x="1490.1307910843948"
                y="1073.086656039905"
              >
                <path
                  fillRule="evenodd"
                  d="M3 23V1h1.6v1.4c1.7-1 4.5-1.7 7.8 0 3.1 1.7 6.1.7 7.2 0l1.4-.8v11.1l-.4.3c-1.5.9-5.2 2-9.1 0-3.2-1.6-5.7-.3-6.5.4l-.4.3V23H3Zm6.4-12.4V7.8c-2.2-.3-4 .6-4.7 1.2v-.1 2.6a7.8 7.8 0 0 1 4.7-.9Zm4.9-1.1c2 .3 3.6 0 4.8-.4v2.7c-1 .4-2.7.9-4.8.4V9.5Zm0-1.2c-.7-.2-1.4-.4-2.1-.8-1-.4-2-.7-2.8-.8V3.2c.6.1 1.3.4 2 .7 1 .6 2 .9 2.9 1v3.4Z"
                  clipRule="evenodd"
                  fill="var(--textMinimal)"
                ></path>
              </svg>
            </g>
            <text
              x="1504.5307910843949"
              y="1135.486656039905"
              fontSize="14.399999999999999px"
              textAnchor="middle"
              fill="var(--textMinimal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              checkpointjs
            </text>
          </g>
          <g id={`${prefix}-make-your-game`}>
            <g style={{ opacity: "0.85" }}>
              <circle r="12" cx="1510" cy="1150" fill="transparent"></circle>
              <svg width="24" height="24" viewBox="0 0 24 24" x="1498" y="1138">
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="1510"
              y="1190"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              make-your-game
            </text>
            <g id={`${prefix}-make-your-game-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-make-your-game-subContents`}
                  x1="1585"
                  y1="1150"
                  x2="1510"
                  y2="1150"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-make-your-game-subContents)`}
                x1="1510"
                y1="1150"
                x2="1585"
                y2="1150"
              ></line>
              <g id={`${prefix}-score-handling`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1584.4990481209536"
                    cy="1129.1295140932154"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1584.4990481209536"
                    cy="1129.1295140932154"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-history`}>
                <g style={{ opacity: "0.85" }}>
                  <circle r="9" cx="1585" cy="1150" fill="transparent"></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1585"
                    cy="1150"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-different-maps`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1584.4990481209536"
                    cy="1170.8704859067846"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--teal)"
                    r="3.25"
                    cx="1584.4990481209536"
                    cy="1170.8704859067846"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
          <g id={`${prefix}-real-time-forum`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1504.5307910843949"
                cy="1212.513343960095"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="10"
                cx="1504.5307910843949"
                cy="1212.513343960095"
              ></circle>
            </g>
            <text
              x="1504.5307910843949"
              y="1252.513343960095"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              real-time-forum
            </text>
            <g id={`${prefix}-real-time-forum-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-real-time-forum-subContents`}
                  x1="1578.3913725603106"
                  y1="1225.5369572851148"
                  x2="1504.5307910843949"
                  y2="1212.513343960095"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-real-time-forum-subContents)`}
                x1="1504.5307910843949"
                y1="1212.513343960095"
                x2="1578.3913725603106"
                y2="1225.5369572851148"
              ></line>
              <g id={`${prefix}-typing-in-progress`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1578.3913725603106"
                    cy="1225.5369572851148"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--textNeutral)"
                    r="3.25"
                    cx="1578.3913725603106"
                    cy="1225.5369572851148"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
          <g id={`${prefix}-graphql`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1488.289343482927"
                cy="1273.1272515972407"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="1476.289343482927"
                y="1261.1272515972407"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="1488.289343482927"
              y="1313.1272515972407"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              graphql
            </text>
          </g>
          <g id={`${prefix}-social-network`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1461.769145362398"
                cy="1330"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="10"
                cx="1461.769145362398"
                cy="1330"
              ></circle>
            </g>
            <text
              x="1461.769145362398"
              y="1370"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              social-network
            </text>
            <g id={`${prefix}-social-network-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-social-network-subContents`}
                  x1="1526.7210506462309"
                  y1="1367.5"
                  x2="1461.769145362398"
                  y2="1330"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-social-network-subContents)`}
                x1="1461.769145362398"
                y1="1330"
                x2="1526.7210506462309"
                y2="1367.5"
              ></line>
              <g id={`${prefix}-cross-platform-appimage`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="1526.7210506462309"
                    cy="1367.5"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--textNeutral)"
                    r="3.25"
                    cx="1526.7210506462309"
                    cy="1367.5"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
          <g id={`${prefix}-mini-framework`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1425.775999522832"
                cy="1381.4035394871541"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="1413.775999522832"
                y="1369.4035394871541"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--teal)"
                ></path>
              </svg>
            </g>
            <text
              x="1425.775999522832"
              y="1421.4035394871541"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              mini-framework
            </text>
          </g>
          <g id={`${prefix}-bomberman-dom`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1381.4035394871541"
                cy="1425.775999522832"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="10"
                cx="1381.4035394871541"
                cy="1425.775999522832"
              ></circle>
            </g>
            <text
              x="1381.4035394871541"
              y="1465.775999522832"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              bomberman-dom
            </text>
          </g>
          <g id={`${prefix}-guidely`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1330"
                cy="1461.769145362398"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="10"
                cx="1330"
                cy="1461.769145362398"
              ></circle>
            </g>
            <text
              x="1330"
              y="1501.769145362398"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              guidely
            </text>
          </g>
          <g id={`${prefix}-detecto`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1273.1272515972407"
                cy="1488.289343482927"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="10"
                cx="1273.1272515972407"
                cy="1488.289343482927"
              ></circle>
            </g>
            <text
              x="1273.1272515972407"
              y="1528.289343482927"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              detecto
            </text>
          </g>
        </g>
        <g id={`${prefix}-slice-3-outer-arc-1`}>
          <path
            d="M 1711.3404192169587 1051.0205387298497 A 570 570 0 0 1 1666.5954386108906 1390.8924091921986"
            fill="none"
            stroke="var(--grey)"
            strokeWidth="0.25"
          ></path>
          <g id={`${prefix}-piscine-ux`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="14.399999999999999"
                cx="1711.3404192169587"
                cy="1051.0205387298497"
                fill="transparent"
              ></circle>
              <svg
                width="28.799999999999997"
                height="28.799999999999997"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                x="1696.9404192169586"
                y="1036.6205387298496"
              >
                <path
                  fillRule="evenodd"
                  d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                  clipRule="evenodd"
                  fill="var(--textNeutral)"
                ></path>
              </svg>
            </g>
            <text
              x="1711.3404192169587"
              y="1091.8205387298497"
              fontSize="14.399999999999999px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              piscine-ux
            </text>
          </g>
          <g id={`${prefix}-piscine-ui`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="14.399999999999999"
                cx="1719.2188348101072"
                cy="1120.168504941522"
                fill="transparent"
              ></circle>
              <svg
                width="28.799999999999997"
                height="28.799999999999997"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                x="1704.818834810107"
                y="1105.768504941522"
              >
                <path
                  fillRule="evenodd"
                  d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                  clipRule="evenodd"
                  fill="var(--grey60)"
                ></path>
              </svg>
            </g>
            <text
              x="1719.2188348101072"
              y="1160.968504941522"
              fontSize="14.399999999999999px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              piscine-ui
            </text>
          </g>
          <g id={`${prefix}-a-table`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1718.6115086480997"
                cy="1189.7611900341515"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--grey60)"
                r="5"
                cx="1718.6115086480997"
                cy="1189.7611900341515"
              ></circle>
            </g>
            <text
              x="1718.6115086480997"
              y="1223.7611900341515"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              a-table
            </text>
          </g>
          <g id={`${prefix}-get-a-room`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1709.5274945651686"
                cy="1258.7611273646305"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--grey60)"
                r="5"
                cx="1709.5274945651686"
                cy="1258.7611273646305"
              ></circle>
            </g>
            <text
              x="1709.5274945651686"
              y="1292.7611273646305"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              get-a-room
            </text>
          </g>
          <g id={`${prefix}-lets-do-some-sports`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1692.1022142882375"
                cy="1326.13968679372"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--grey60)"
                r="5"
                cx="1692.1022142882375"
                cy="1326.13968679372"
              ></circle>
            </g>
            <text
              x="1692.1022142882375"
              y="1360.13968679372"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              lets-do-some-sports
            </text>
          </g>
          <g id={`${prefix}-lets-fair-trade`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1666.5954386108906"
                cy="1390.8924091921986"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--grey60)"
                r="5"
                cx="1666.5954386108906"
                cy="1390.8924091921986"
              ></circle>
            </g>
            <text
              x="1666.5954386108906"
              y="1424.8924091921986"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              lets-fair-trade
            </text>
          </g>
        </g>
        <g id={`${prefix}-slice-3-outer-arc-2`}>
          <path
            d="M 1616.9166652447252 1476.9385687200963 A 570 570 0 0 1 1344.9514816956312 1685.6247938479678"
            fill="none"
            stroke="var(--grey)"
            strokeWidth="0.25"
          ></path>
          <g id={`${prefix}-stock-exchange-sim`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1616.9166652447252"
                cy="1476.9385687200963"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="1616.9166652447252"
                cy="1476.9385687200963"
              ></circle>
            </g>
            <text
              x="1616.9166652447252"
              y="1510.9385687200963"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              stock-exchange-sim
            </text>
          </g>
          <g id={`${prefix}-mister-quiz`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1541.1577335851782"
                cy="1564.6029756966377"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="1541.1577335851782"
                cy="1564.6029756966377"
              ></circle>
            </g>
            <text
              x="1541.1577335851782"
              y="1598.6029756966377"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              mister-quiz
            </text>
          </g>
          <g id={`${prefix}-shop`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1449.236650790699"
                cy="1635.13650328909"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="1449.236650790699"
                cy="1635.13650328909"
              ></circle>
            </g>
            <text
              x="1449.236650790699"
              y="1669.13650328909"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              shop
            </text>
          </g>
          <g id={`${prefix}-netfix`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1344.9514816956312"
                cy="1685.6247938479678"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="1344.9514816956312"
                cy="1685.6247938479678"
              ></circle>
            </g>
            <text
              x="1344.9514816956312"
              y="1719.6247938479678"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              netfix
            </text>
          </g>
        </g>
      </g>
      <g id={`${prefix}-line-4`}>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${prefix}-LinearGradient-white-line-4`}
            x1="1150"
            y1="1725"
            x2="1150"
            y2="1370"
          >
            <stop offset="0" stopColor="var(--neutral)"></stop>
            <stop
              offset="1"
              stopColor="var(--neutral)"
              stopOpacity="0.25"
            ></stop>
          </linearGradient>
        </defs>
        <line
          opacity="0.5"
          strokeWidth="1"
          stroke={`url(#${prefix}-LinearGradient-white-line-4)`}
          x1="1150"
          y1="1370"
          x2="1150"
          y2="1725"
        ></line>
        <text
          x="1150"
          y="1370"
          fontSize="21px"
          fill="var(--neutral)"
          fontFamily="var(--font-zone01-mono)"
          alignmentBaseline="middle"
          textAnchor="start"
          style={{
            transform: "rotate(270deg)",
            transformOrigin: "1150px 1370px",
          }}
        >
          Employability
        </text>
        <g id={`${prefix}-formation-git`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1440" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1440"></circle>
          </g>
          <text
            x="1150"
            y="1474"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            formation-git
          </text>
        </g>
        <g id={`${prefix}-atelier-softskills`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1475.625" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1475.625"></circle>
          </g>
          <text
            x="1150"
            y="1509.625"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            atelier-softskills
          </text>
        </g>
        <g id={`${prefix}-formation-reseau`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1511.25" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1511.25"></circle>
          </g>
          <text
            x="1150"
            y="1545.25"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            formation-reseau
          </text>
        </g>
        <g id={`${prefix}-atelier-photo`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1546.875" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1546.875"></circle>
          </g>
          <text
            x="1150"
            y="1580.875"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            atelier-photo
          </text>
        </g>
        <g id={`${prefix}-atelier-certification`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1582.5" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1582.5"></circle>
          </g>
          <text
            x="1150"
            y="1616.5"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            atelier-certification
          </text>
        </g>
        <g id={`${prefix}-atelier-pitch`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1618.125" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1618.125"></circle>
          </g>
          <text
            x="1150"
            y="1652.125"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            atelier-pitch
          </text>
        </g>
        <g id={`${prefix}-job-dating`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1653.75" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1653.75"></circle>
          </g>
          <text
            x="1150"
            y="1687.75"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            job-dating
          </text>
        </g>
        <g id={`${prefix}-atelier-hardskills`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1689.375" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1689.375"></circle>
          </g>
          <text
            x="1150"
            y="1723.375"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            atelier-hardskills
          </text>
        </g>
        <g id={`${prefix}-create-your-portfolio`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="1725" fill="transparent"></circle>
            <circle fill="var(--teal)" r="4" cx="1150" cy="1725"></circle>
          </g>
          <text
            x="1150"
            y="1759"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            create-your-portfolio
          </text>
        </g>
      </g>
      <g id={`${prefix}-slice-5`}>
        <g id={`${prefix}-g-slice-5-text-path`}>
          <path
            d="M 1221.8242300983902 952.6645496349593 A 210 210 0 1 0 1356.8096281325638 1186.4661173100553"
            id={`${prefix}-slice-5-text-path`}
            fill="none"
          ></path>
          <text fill="var(--teal)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-slice-5-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Architecture
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-piscine-rust`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="1063.3974596215562"
              cy="1200"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="1048.9974596215561"
              y="1185.6"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--textNeutral)"
              ></path>
            </svg>
          </g>
          <text
            x="1063.3974596215562"
            y="1242"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscine-rust
          </text>
        </g>
        <g id={`${prefix}-slice-5-inner-arc`}>
          <path
            d="M 1026.8727484027593 1488.289343482927 A 360 360 0 0 1 795.4692089156051 1087.486656039905"
            fill="none"
            stroke="var(--grey)"
            strokeWidth="0.25"
          ></path>
          <g id={`${prefix}-smart-road`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="1026.8727484027593"
                cy="1488.289343482927"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--grey60)"
                r="10"
                cx="1026.8727484027593"
                cy="1488.289343482927"
              ></circle>
            </g>
            <text
              x="1026.8727484027593"
              y="1528.289343482927"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              smart-road
            </text>
          </g>
          <g id={`${prefix}-filler`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="952.1767678945098"
                cy="1450.775612108657"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="940.1767678945098"
                y="1438.775612108657"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--grey60)"
                ></path>
              </svg>
            </g>
            <text
              x="952.1767678945098"
              y="1490.775612108657"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              filler
            </text>
          </g>
          <g id={`${prefix}-rt`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="888.1454890337025"
                cy="1397.046989632744"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="876.1454890337025"
                y="1385.046989632744"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--grey60)"
                ></path>
              </svg>
            </g>
            <text
              x="888.1454890337025"
              y="1437.046989632744"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              rt
            </text>
          </g>
          <g id={`${prefix}-localhost`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="838.2308546376021"
                cy="1330"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="826.2308546376021"
                y="1318"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--grey60)"
                ></path>
              </svg>
            </g>
            <text
              x="838.2308546376021"
              y="1370"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              localhost
            </text>
          </g>
          <g id={`${prefix}-rustlocalserver`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="805.123775566424"
                cy="1253.2491637759924"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--grey60)"
                r="10"
                cx="805.123775566424"
                cy="1253.2491637759924"
              ></circle>
            </g>
            <text
              x="805.123775566424"
              y="1293.2491637759924"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              rustlocalserver
            </text>
          </g>
          <g id={`${prefix}-multiplayer-fps`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="790.6090630223434"
                cy="1170.9321384077712"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="778.6090630223434"
                y="1158.9321384077712"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--grey60)"
                ></path>
              </svg>
            </g>
            <text
              x="790.6090630223434"
              y="1210.9321384077712"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              multiplayer-fps
            </text>
          </g>
          <g id={`${prefix}-0-shell`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="795.4692089156051"
                cy="1087.486656039905"
                fill="transparent"
              ></circle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                x="783.4692089156051"
                y="1075.486656039905"
              >
                <path
                  fillRule="evenodd"
                  d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                  clipRule="evenodd"
                  fill="var(--grey60)"
                ></path>
              </svg>
            </g>
            <text
              x="795.4692089156051"
              y="1127.486656039905"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              0-shell
            </text>
            <g id={`${prefix}-0-shell-sub-contents`}>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id={`${prefix}-LinearGradient-white-0-shell-subContents`}
                  x1="721.6086274396895"
                  y1="1074.4630427148852"
                  x2="795.4692089156051"
                  y2="1087.486656039905"
                >
                  <stop offset="0" stopColor="var(--neutral)"></stop>
                  <stop
                    offset="1"
                    stopColor="var(--neutral)"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <line
                opacity="0.5"
                strokeWidth="1"
                stroke={`url(#${prefix}-LinearGradient-white-0-shell-subContents)`}
                x1="795.4692089156051"
                y1="1087.486656039905"
                x2="721.6086274396895"
                y2="1074.4630427148852"
              ></line>
              <g id={`${prefix}-job-control`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="718.4778468893239"
                    cy="1095.103448425914"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--grey60)"
                    r="3.25"
                    cx="718.4778468893239"
                    cy="1095.103448425914"
                  ></circle>
                </g>
              </g>
              <g id={`${prefix}-scripting`}>
                <g style={{ opacity: "0.85" }}>
                  <circle
                    r="9"
                    cx="721.6086274396895"
                    cy="1074.4630427148852"
                    fill="transparent"
                  ></circle>
                  <circle
                    fill="var(--grey60)"
                    r="3.25"
                    cx="721.6086274396895"
                    cy="1074.4630427148852"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id={`${prefix}-slice-5-outer-arc-1`}>
          <path
            d="M 955.0485183043688 1685.6247938479678 A 570 570 0 0 1 588.6595807830414 1051.0205387298497"
            fill="none"
            stroke="var(--grey)"
            strokeWidth="0.25"
          ></path>
          <g id={`${prefix}-wget`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="955.0485183043688"
                cy="1685.6247938479678"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--teal)"
                r="5"
                cx="955.0485183043688"
                cy="1685.6247938479678"
              ></circle>
            </g>
            <text
              x="955.0485183043688"
              y="1719.6247938479678"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--teal)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              wget
            </text>
          </g>
          <g id={`${prefix}-system-monitor`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="783.6110624786726"
                cy="1586.6453325778175"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="783.6110624786726"
                cy="1586.6453325778175"
              ></circle>
            </g>
            <text
              x="783.6110624786726"
              y="1620.6453325778175"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              system-monitor
            </text>
          </g>
          <g id={`${prefix}-zappy`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="656.36551984287"
                cy="1435"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--grey60)"
                r="5"
                cx="656.36551984287"
                cy="1435"
              ></circle>
            </g>
            <text
              x="656.36551984287"
              y="1469"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--grey60)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              zappy
            </text>
          </g>
          <g id={`${prefix}-corewar`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="588.6595807830414"
                cy="1248.9794612701503"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="588.6595807830414"
                cy="1248.9794612701503"
              ></circle>
            </g>
            <text
              x="588.6595807830414"
              y="1282.9794612701503"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              corewar
            </text>
          </g>
          <g id={`${prefix}-make-your-own`}>
            <g style={{ opacity: "0.85" }}>
              <circle
                r="12"
                cx="588.6595807830414"
                cy="1051.0205387298497"
                fill="transparent"
              ></circle>
              <circle
                fill="var(--textNeutral)"
                r="5"
                cx="588.6595807830414"
                cy="1051.0205387298497"
              ></circle>
            </g>
            <text
              x="588.6595807830414"
              y="1085.0205387298497"
              fontSize="12px"
              textAnchor="middle"
              fill="var(--textNeutral)"
              fontFamily="var(--font-zone01-mono)"
              pointerEvents="none"
              style={{ textTransform: "uppercase" }}
            >
              make-your-own
            </text>
          </g>
        </g>
      </g>
      <g id={`${prefix}-line-6`}>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${prefix}-LinearGradient-white-line-6`}
            x1="652.0353928239479"
            y1="862.5"
            x2="959.4744111674236"
            y2="1040"
          >
            <stop offset="0" stopColor="var(--neutral)"></stop>
            <stop
              offset="1"
              stopColor="var(--neutral)"
              stopOpacity="0.25"
            ></stop>
          </linearGradient>
        </defs>
        <line
          opacity="0.5"
          strokeWidth="1"
          stroke={`url(#${prefix}-LinearGradient-white-line-6)`}
          x1="959.4744111674236"
          y1="1040"
          x2="652.0353928239479"
          y2="862.5"
        ></line>
        <text
          x="959.4744111674236"
          y="1040"
          fontSize="21px"
          fill="var(--neutral)"
          fontFamily="var(--font-zone01-mono)"
          alignmentBaseline="middle"
          textAnchor="start"
          style={{
            transform: "rotate(390deg)",
            transformOrigin: "959.474px 1040px",
          }}
        >
          Algorithm
        </text>
        <g id={`${prefix}-math-skills`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="898.8526329025128"
              cy="1005"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="4"
              cx="898.8526329025128"
              cy="1005"
            ></circle>
          </g>
          <text
            x="898.8526329025128"
            y="1039"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            math-skills
          </text>
        </g>
        <g id={`${prefix}-guess-it-1`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="816.5802195429911"
              cy="957.5"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--textNeutral)"
              r="4"
              cx="816.5802195429911"
              cy="957.5"
            ></circle>
          </g>
          <text
            x="816.5802195429911"
            y="991.5"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            guess-it-1
          </text>
        </g>
        <g id={`${prefix}-linear-stats`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="734.3078061834694"
              cy="910"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="4"
              cx="734.3078061834694"
              cy="910"
            ></circle>
          </g>
          <text
            x="734.3078061834694"
            y="944"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            linear-stats
          </text>
        </g>
        <g id={`${prefix}-guess-it-2`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="652.0353928239479"
              cy="862.5"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="4"
              cx="652.0353928239479"
              cy="862.5"
            ></circle>
          </g>
          <text
            x="652.0353928239479"
            y="896.5"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            guess-it-2
          </text>
        </g>
      </g>
      <g id={`${prefix}-middle-circle-1`}>
        <path
          d="M 848.4675966993287 392.83211256702043 A 815 815 0 0 1 1451.5324033006714 392.83211256702043"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-middle-circle-1-text-path`}>
          <path
            d="M 891.0151137294847 499.6717531250482 A 700 700 0 0 1 1408.9848862705153 499.6717531250482"
            id={`${prefix}-middle-circle-1-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-middle-circle-1-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Java Full-Stack
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-piscine-java`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="848.4675966993287"
              cy="392.83211256702043"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="834.0675966993288"
              y="378.43211256702045"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--teal)"
              ></path>
            </svg>
          </g>
          <text
            x="848.4675966993287"
            y="433.63211256702044"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscine-java
          </text>
        </g>
        <g id={`${prefix}-lets-play`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="906.6695996834256"
              cy="372.1726950782869"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="906.6695996834256"
              cy="372.1726950782869"
            ></circle>
          </g>
          <text
            x="906.6695996834256"
            y="406.1726950782869"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            lets-play
          </text>
        </g>
        <g id={`${prefix}-angul-it`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="966.2689174609646"
              cy="355.9799188250752"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="966.2689174609646"
              cy="355.9799188250752"
            ></circle>
          </g>
          <text
            x="966.2689174609646"
            y="389.9799188250752"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            angul-it
          </text>
        </g>
        <g id={`${prefix}-buy-01`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1026.9233034063643"
              cy="344.34677015753357"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="1026.9233034063643"
              cy="344.34677015753357"
            ></circle>
          </g>
          <text
            x="1026.9233034063643"
            y="378.34677015753357"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            buy-01
          </text>
        </g>
        <g id={`${prefix}-mr-jenk`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1088.2844522085811"
              cy="337.3400519523525"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="1088.2844522085811"
              cy="337.3400519523525"
            ></circle>
          </g>
          <text
            x="1088.2844522085811"
            y="371.3400519523525"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            mr-jenk
          </text>
        </g>
        <g id={`${prefix}-safe-zone`}>
          <g style={{ opacity: "0.85" }}>
            <circle r="12" cx="1150" cy="335" fill="transparent"></circle>
            <circle fill="var(--teal)" r="5" cx="1150" cy="335"></circle>
          </g>
          <text
            x="1150"
            y="369"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            safe-zone
          </text>
        </g>
        <g id={`${prefix}-buy-02`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1211.715547791419"
              cy="337.3400519523526"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="1211.715547791419"
              cy="337.3400519523526"
            ></circle>
          </g>
          <text
            x="1211.715547791419"
            y="371.3400519523526"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            buy-02
          </text>
        </g>
        <g id={`${prefix}-nexus`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1273.076696593636"
              cy="344.34677015753357"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="1273.076696593636"
              cy="344.34677015753357"
            ></circle>
          </g>
          <text
            x="1273.076696593636"
            y="378.34677015753357"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            nexus
          </text>
        </g>
        <g id={`${prefix}-neo-4-flix`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1333.7310825390357"
              cy="355.9799188250753"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="1333.7310825390357"
              cy="355.9799188250753"
            ></circle>
          </g>
          <text
            x="1333.7310825390357"
            y="389.9799188250753"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            neo-4-flix
          </text>
        </g>
        <g id={`${prefix}-travel-plan`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1393.3304003165742"
              cy="372.1726950782869"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="1393.3304003165742"
              cy="372.1726950782869"
            ></circle>
          </g>
          <text
            x="1393.3304003165742"
            y="406.1726950782869"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            travel-plan
          </text>
        </g>
        <g id={`${prefix}-lets-travel`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1451.5324033006714"
              cy="392.83211256702043"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--teal)"
              r="5"
              cx="1451.5324033006714"
              cy="392.83211256702043"
            ></circle>
          </g>
          <text
            x="1451.5324033006714"
            y="426.83211256702043"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            lets-travel
          </text>
        </g>
      </g>
      <g id={`${prefix}-middle-circle-2`}>
        <path
          d="M 1553.9753135209894 442.166018005904 A 815 815 0 0 1 1929.980070296836 913.6610697753272"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-middle-circle-2-text-path`}>
          <path
            d="M 1496.9726619198682 542.0444326431077 A 700 700 0 0 1 1819.9215327702886 947.0095077824897"
            id={`${prefix}-middle-circle-2-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-middle-circle-2-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Video Games
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-firing-range`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1553.9753135209894"
              cy="442.166018005904"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--textNeutral)"
              r="5"
              cx="1553.9753135209894"
              cy="442.166018005904"
            ></circle>
          </g>
          <text
            x="1553.9753135209894"
            y="476.166018005904"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            firing-range
          </text>
        </g>
        <g id={`${prefix}-widget-factory`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1612.0861599633056"
              cy="478.65703193496813"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1612.0861599633056"
              cy="478.65703193496813"
            ></circle>
          </g>
          <text
            x="1612.0861599633056"
            y="512.6570319349681"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            widget-factory
          </text>
        </g>
        <g id={`${prefix}-army-of-one`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1666.9214351559508"
              cy="519.9069672847411"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1666.9214351559508"
              cy="519.9069672847411"
            ></circle>
          </g>
          <text
            x="1666.9214351559508"
            y="553.9069672847411"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            army-of-one
          </text>
        </g>
        <g id={`${prefix}-zombie-ai`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1718.0924305279887"
              cy="565.6234173268041"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1718.0924305279887"
              cy="565.6234173268041"
            ></circle>
          </g>
          <text
            x="1718.0924305279887"
            y="599.6234173268041"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            zombie-ai
          </text>
        </g>
        <g id={`${prefix}-nascar-online-alpha`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1765.2364123388738"
              cy="615.4823137328465"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1765.2364123388738"
              cy="615.4823137328465"
            ></circle>
          </g>
          <text
            x="1765.2364123388738"
            y="649.4823137328465"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            nascar-online-alpha
          </text>
        </g>
        <g id={`${prefix}-mouse-vr`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1808.0191929742732"
              cy="669.1302237845614"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1808.0191929742732"
              cy="669.1302237845614"
            ></circle>
          </g>
          <text
            x="1808.0191929742732"
            y="703.1302237845614"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            mouse-vr
          </text>
        </g>
        <g id={`${prefix}-the-pages`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1846.1374998881283"
              cy="726.1868557376894"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1846.1374998881283"
              cy="726.1868557376894"
            ></circle>
          </g>
          <text
            x="1846.1374998881283"
            y="760.1868557376894"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            the-pages
          </text>
        </g>
        <g id={`${prefix}-stealth-boom`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1879.3211253983413"
              cy="786.2477545805432"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1879.3211253983413"
              cy="786.2477545805432"
            ></circle>
          </g>
          <text
            x="1879.3211253983413"
            y="820.2477545805432"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            stealth-boom
          </text>
        </g>
        <g id={`${prefix}-jumpo`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1907.3348420969119"
              cy="848.8871690776934"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1907.3348420969119"
              cy="848.8871690776934"
            ></circle>
          </g>
          <text
            x="1907.3348420969119"
            y="882.8871690776934"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            jumpo
          </text>
        </g>
        <g id={`${prefix}-vehicle-physics`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1929.980070296836"
              cy="913.6610697753272"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1929.980070296836"
              cy="913.6610697753272"
            ></circle>
          </g>
          <text
            x="1929.980070296836"
            y="947.6610697753272"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            vehicle-physics
          </text>
        </g>
      </g>
      <g id={`${prefix}-middle-circle-3`}>
        <path
          d="M 1955.2813796667142 1024.5133490682251 A 815 815 0 0 1 1821.0868356655994 1612.458061878407"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-middle-circle-3-text-path`}>
          <path
            d="M 458.34728126785285 1257.779945585574 A 700 700 0 1 0 573.6063988148223 752.7967566688532"
            id={`${prefix}-middle-circle-3-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-middle-circle-3-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Mobile Applications
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-piscine-flutter`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="1955.2813796667142"
              cy="1024.5133490682251"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="1940.881379666714"
              y="1010.1133490682251"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--textNeutral)"
              ></path>
            </svg>
          </g>
          <text
            x="1955.2813796667142"
            y="1065.313349068225"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscine-flutter
          </text>
        </g>
        <g id={`${prefix}-twenty-forty-eight`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1964.6746336060266"
              cy="1126.9730297501778"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1964.6746336060266"
              cy="1126.9730297501778"
            ></circle>
          </g>
          <text
            x="1964.6746336060266"
            y="1160.9730297501778"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            twenty-forty-eight
          </text>
        </g>
        <g id={`${prefix}-sky-map`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1961.083846898328"
              cy="1229.7997073967688"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1961.083846898328"
              cy="1229.7997073967688"
            ></circle>
          </g>
          <text
            x="1961.083846898328"
            y="1263.7997073967688"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            sky-map
          </text>
        </g>
        <g id={`${prefix}-chess`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1944.566248428186"
              cy="1331.3545611743964"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1944.566248428186"
              cy="1331.3545611743964"
            ></circle>
          </g>
          <text
            x="1944.566248428186"
            y="1365.3545611743964"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            chess
          </text>
        </g>
        <g id={`${prefix}-kaquiz`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1915.3850907397227"
              cy="1430.0190401978884"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1915.3850907397227"
              cy="1430.0190401978884"
            ></circle>
          </g>
          <text
            x="1915.3850907397227"
            y="1464.0190401978884"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            kaquiz
          </text>
        </g>
        <g id={`${prefix}-stock-market`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1874.0054543962983"
              cy="1524.2206595104144"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1874.0054543962983"
              cy="1524.2206595104144"
            ></circle>
          </g>
          <text
            x="1874.0054543962983"
            y="1558.2206595104144"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            stock-market
          </text>
        </g>
        <g id={`${prefix}-secure-messenger`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1821.0868356655994"
              cy="1612.458061878407"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1821.0868356655994"
              cy="1612.458061878407"
            ></circle>
          </g>
          <text
            x="1821.0868356655994"
            y="1646.458061878407"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            secure-messenger
          </text>
        </g>
      </g>
      <g id={`${prefix}-middle-circle-4`}>
        <path
          d="M 1750.1941421768652 1701.3546877433591 A 815 815 0 0 1 1206.8515261014622 1963.0147009617567"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-middle-circle-4-text-path`}>
          <path
            d="M 634.4958288051464 676.4438264780966 A 700 700 0 1 0 1101.1704683791122 451.7051648181231"
            id={`${prefix}-middle-circle-4-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-middle-circle-4-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Cybersecurity
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-pentestkit`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1750.1941421768652"
              cy="1701.3546877433591"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1750.1941421768652"
              cy="1701.3546877433591"
            ></circle>
          </g>
          <text
            x="1750.1941421768652"
            y="1735.3546877433591"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            pentestkit
          </text>
        </g>
        <g id={`${prefix}-osintmaster`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1701.6871543302686"
              cy="1749.8885594399767"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1701.6871543302686"
              cy="1749.8885594399767"
            ></circle>
          </g>
          <text
            x="1701.6871543302686"
            y="1783.8885594399767"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            osintmaster
          </text>
        </g>
        <g id={`${prefix}-imageinspector`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1649.2694443324606"
              cy="1794.1700256577888"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1649.2694443324606"
              cy="1794.1700256577888"
            ></circle>
          </g>
          <text
            x="1649.2694443324606"
            y="1828.1700256577888"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            imageinspector
          </text>
        </g>
        <g id={`${prefix}-defuse`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1593.3125834589273"
              cy="1833.8851901795883"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1593.3125834589273"
              cy="1833.8851901795883"
            ></circle>
          </g>
          <text
            x="1593.3125834589273"
            y="1867.8851901795883"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            defuse
          </text>
        </g>
        <g id={`${prefix}-escalator`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1534.2132308191167"
              cy="1868.752525744109"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1534.2132308191167"
              cy="1868.752525744109"
            ></circle>
          </g>
          <text
            x="1534.2132308191167"
            y="1902.752525744109"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            escalator
          </text>
        </g>
        <g id={`${prefix}-holeinbin`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1472.390321575243"
              cy="1898.5248696968001"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1472.390321575243"
              cy="1898.5248696968001"
            ></circle>
          </g>
          <text
            x="1472.390321575243"
            y="1932.5248696968001"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            holeinbin
          </text>
        </g>
        <g id={`${prefix}-vulnhunter`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1408.2820972537486"
              cy="1922.991176041619"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1408.2820972537486"
              cy="1922.991176041619"
            ></circle>
          </g>
          <text
            x="1408.2820972537486"
            y="1956.991176041619"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            vulnhunter
          </text>
        </g>
        <g id={`${prefix}-hiddenbytes`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1342.3429992005324"
              cy="1941.978011474147"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1342.3429992005324"
              cy="1941.978011474147"
            ></circle>
          </g>
          <text
            x="1342.3429992005324"
            y="1975.978011474147"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            hiddenbytes
          </text>
        </g>
        <g id={`${prefix}-merge`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1275.0404472011803"
              cy="1955.3507847911546"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1275.0404472011803"
              cy="1955.3507847911546"
            ></circle>
          </g>
          <text
            x="1275.0404472011803"
            y="1989.3507847911546"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            merge
          </text>
        </g>
        <g id={`${prefix}-ransomwarelab`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1206.8515261014622"
              cy="1963.0147009617567"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1206.8515261014622"
              cy="1963.0147009617567"
            ></circle>
          </g>
          <text
            x="1206.8515261014622"
            y="1997.0147009617567"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            ransomwarelab
          </text>
        </g>
      </g>
      <g id={`${prefix}-middle-circle-5`}>
        <path
          d="M 1093.1484738985378 1963.0147009617567 A 815 815 0 0 1 549.8058578231348 1701.3546877433591"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-middle-circle-5-text-path`}>
          <path
            d="M 1198.8295316208876 451.70516481812297 A 700 700 0 1 0 1665.5041711948538 676.4438264780966"
            id={`${prefix}-middle-circle-5-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-middle-circle-5-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Blockchain &amp; Crypto
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-piscine-blockchain`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="1093.1484738985378"
              cy="1963.0147009617567"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="1078.7484738985377"
              y="1948.6147009617566"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--textNeutral)"
              ></path>
            </svg>
          </g>
          <text
            x="1093.1484738985378"
            y="2003.8147009617567"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscine-blockchain
          </text>
        </g>
        <g id={`${prefix}-nft-marketplace`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="941.0259529572968"
              cy="1937.753037228416"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="941.0259529572968"
              cy="1937.753037228416"
            ></circle>
          </g>
          <text
            x="941.0259529572968"
            y="1971.753037228416"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            nft-marketplace
          </text>
        </g>
        <g id={`${prefix}-payment-channel`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="796.3847526191898"
              cy="1884.2896273404713"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="796.3847526191898"
              cy="1884.2896273404713"
            ></circle>
          </g>
          <text
            x="796.3847526191898"
            y="1918.2896273404713"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            payment-channel
          </text>
        </g>
        <g id={`${prefix}-node-dashboard`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="664.4030622692869"
              cy="1804.5384740919008"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="664.4030622692869"
              cy="1804.5384740919008"
            ></circle>
          </g>
          <text
            x="664.4030622692869"
            y="1838.5384740919008"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            node-dashboard
          </text>
        </g>
        <g id={`${prefix}-financial-instruments`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="549.8058578231348"
              cy="1701.3546877433591"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="549.8058578231348"
              cy="1701.3546877433591"
            ></circle>
          </g>
          <text
            x="549.8058578231348"
            y="1735.3546877433591"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            financial-instruments
          </text>
        </g>
      </g>
      <g id={`${prefix}-middle-circle-6`}>
        <path
          d="M 478.91316433440056 1612.458061878407 A 815 815 0 0 1 344.7186203332857 1024.513349068225"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-middle-circle-6-text-path`}>
          <path
            d="M 1726.3936011851774 752.7967566688526 A 700 700 0 1 0 1841.6527187321472 1257.7799455855738"
            id={`${prefix}-middle-circle-6-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-middle-circle-6-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Cloud DevOps
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-piscinescripting`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="478.91316433440056"
              cy="1612.458061878407"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="464.5131643344006"
              y="1598.058061878407"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--teal)"
              ></path>
            </svg>
          </g>
          <text
            x="478.91316433440056"
            y="1653.258061878407"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--teal)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscinescripting
          </text>
        </g>
        <g id={`${prefix}-deep-in-net`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="432.86561575658266"
              cy="1537.225095953006"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--textNeutral)"
              r="5"
              cx="432.86561575658266"
              cy="1537.225095953006"
            ></circle>
          </g>
          <text
            x="432.86561575658266"
            y="1571.225095953006"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            deep-in-net
          </text>
        </g>
        <g id={`${prefix}-deep-in-system`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="395.21819525955425"
              cy="1457.456382650866"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="395.21819525955425"
              cy="1457.456382650866"
            ></circle>
          </g>
          <text
            x="395.21819525955425"
            y="1491.456382650866"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            deep-in-system
          </text>
        </g>
        <g id={`${prefix}-crud-master`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="366.4118845631084"
              cy="1374.08628995559"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="366.4118845631084"
              cy="1374.08628995559"
            ></circle>
          </g>
          <text
            x="366.4118845631084"
            y="1408.08628995559"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            crud-master
          </text>
        </g>
        <g id={`${prefix}-play-with-containers`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="346.78410536212107"
              cy="1288.091370480098"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="346.78410536212107"
              cy="1288.091370480098"
            ></circle>
          </g>
          <text
            x="346.78410536212107"
            y="1322.091370480098"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            play-with-containers
          </text>
        </g>
        <g id={`${prefix}-orchestrator`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="336.5647669495394"
              cy="1200.4789226523594"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="336.5647669495394"
              cy="1200.4789226523594"
            ></circle>
          </g>
          <text
            x="336.5647669495394"
            y="1234.4789226523594"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            orchestrator
          </text>
        </g>
        <g id={`${prefix}-cloud-design`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="335.87357318206443"
              cy="1112.275191761116"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="335.87357318206443"
              cy="1112.275191761116"
            ></circle>
          </g>
          <text
            x="335.87357318206443"
            y="1146.275191761116"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            cloud-design
          </text>
        </g>
        <g id={`${prefix}-code-keeper`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="344.7186203332857"
              cy="1024.513349068225"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="344.7186203332857"
              cy="1024.513349068225"
            ></circle>
          </g>
          <text
            x="344.7186203332857"
            y="1058.513349068225"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            code-keeper
          </text>
        </g>
      </g>
      <g id={`${prefix}-middle-circle-7`}>
        <path
          d="M 370.01992970316405 913.661069775327 A 815 815 0 0 1 746.0246864790108 442.16601800590377"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-middle-circle-7-text-path`}>
          <path
            d="M 480.07846722971146 947.0095077824894 A 700 700 0 0 1 803.027338080132 542.0444326431075"
            id={`${prefix}-middle-circle-7-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-middle-circle-7-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Artificial Intelligence
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-piscine-ai`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="14.399999999999999"
              cx="370.01992970316405"
              cy="913.661069775327"
              fill="transparent"
            ></circle>
            <svg
              width="28.799999999999997"
              height="28.799999999999997"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              x="355.6199297031641"
              y="899.261069775327"
            >
              <path
                fillRule="evenodd"
                d="m8.7 1 .8 1c-1 1-1.8 1.6-1.8 4.4h8.7A6 6 0 0 1 18.7 1l.9 1c-.7.4-2 1.7-1.8 4.4V16c.4 0 1.5.3 2.2 1 .7.6 1.6.7 2 .7v1.4c-.5 0-1.6 0-2.6-.8s-1.9-1-2.2-1c-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1a4 4 0 0 1 1.9-.7V5c.2-1.2.4-2.6 2.4-3.9Zm-1 15.1v-2.7h8.7V16c-.6.2-1.8.5-2.4 1-.6.6-1.6.8-2.1.8a4 4 0 0 1-2.2-1c-.3-.2-1.2-.7-2-.8Zm0-8.4V12h8.7V7.7H7.7Zm9.4 12.1a5 5 0 0 1 2.9 1c.7.7 1.6.8 2 .8V23c-.5 0-1.6 0-2.6-.8-1-.9-1.9-1-2.2-1-.4 0-1.4 0-2.4.9-1 .8-2.3.9-2.9.8-.5 0-1.7-.2-2.7-.8-1-.7-1.9-.9-2.2-.9-.5 0-1.6.2-2.2.9-.6.6-2.1.9-2.8.9v-1.4c.3 0 1.3 0 2.4-1 .9-.5 1.3-.7 2.5-.8 1.7.2 2 .4 2.5.7l.3.2c.8.5 1.6 1 2.2 1 .5 0 1.5-.3 2.1-.7 1.4-1.2 2.3-1.2 2.9-1.2h.2Z"
                clipRule="evenodd"
                fill="var(--textNeutral)"
              ></path>
            </svg>
          </g>
          <text
            x="370.01992970316405"
            y="954.4610697753269"
            fontSize="14.399999999999999px"
            textAnchor="middle"
            fill="var(--textNeutral)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            piscine-ai
          </text>
        </g>
        <g id={`${prefix}-kaggle-titanic`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="392.665157903088"
              cy="848.8871690776937"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="392.665157903088"
              cy="848.8871690776937"
            ></circle>
          </g>
          <text
            x="392.665157903088"
            y="882.8871690776937"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            kaggle-titanic
          </text>
        </g>
        <g id={`${prefix}-nlp-scraper`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="420.6788746016589"
              cy="786.2477545805427"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="420.6788746016589"
              cy="786.2477545805427"
            ></circle>
          </g>
          <text
            x="420.6788746016589"
            y="820.2477545805427"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            nlp-scraper
          </text>
        </g>
        <g id={`${prefix}-matrixfactorization`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="453.862500111872"
              cy="726.1868557376888"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="453.862500111872"
              cy="726.1868557376888"
            ></circle>
          </g>
          <text
            x="453.862500111872"
            y="760.1868557376888"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            matrixfactorization
          </text>
        </g>
        <g id={`${prefix}-spectrallearning`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="491.9808070257269"
              cy="669.1302237845609"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="491.9808070257269"
              cy="669.1302237845609"
            ></circle>
          </g>
          <text
            x="491.9808070257269"
            y="703.1302237845609"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            spectrallearning
          </text>
        </g>
        <g id={`${prefix}-visiontrack`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="534.7635876611266"
              cy="615.482313732846"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="534.7635876611266"
              cy="615.482313732846"
            ></circle>
          </g>
          <text
            x="534.7635876611266"
            y="649.482313732846"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            visiontrack
          </text>
        </g>
        <g id={`${prefix}-documentcategorization`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="581.9075694720119"
              cy="565.6234173268037"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="581.9075694720119"
              cy="565.6234173268037"
            ></circle>
          </g>
          <text
            x="581.9075694720119"
            y="599.6234173268037"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            documentcategorization
          </text>
        </g>
        <g id={`${prefix}-emotions-detector`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="633.0785648440497"
              cy="519.906967284741"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="633.0785648440497"
              cy="519.906967284741"
            ></circle>
          </g>
          <text
            x="633.0785648440497"
            y="553.906967284741"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            emotions-detector
          </text>
        </g>
        <g id={`${prefix}-sp500-strategies`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="687.9138400366951"
              cy="478.6570319349677"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="687.9138400366951"
              cy="478.6570319349677"
            ></circle>
          </g>
          <text
            x="687.9138400366951"
            y="512.6570319349677"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            sp500-strategies
          </text>
        </g>
        <g id={`${prefix}-credit-scoring`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="746.0246864790108"
              cy="442.16601800590377"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="746.0246864790108"
              cy="442.16601800590377"
            ></circle>
          </g>
          <text
            x="746.0246864790108"
            y="476.16601800590377"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            credit-scoring
          </text>
        </g>
      </g>
      <g id={`${prefix}-outer-circle-1`}>
        <path
          d="M 787.3702635634577 138.00954833952903 A 1075 1075 0 0 1 1512.6297364365423 138.00954833952915"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-outer-circle-1-text-path`}>
          <path
            d="M 826.1632121124833 246.26899200553294 A 960 960 0 0 1 1473.836787887517 246.26899200553305"
            id={`${prefix}-outer-circle-1-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-outer-circle-1-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              ‏‏‎ ‎
            </textPath>
          </text>
        </g>
      </g>
      <g id={`${prefix}-outer-circle-2`}>
        <path
          d="M 1715.1100525462925 235.51892938611002 A 1075 1075 0 0 1 2167.3019375841013 802.5496182364554"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-outer-circle-2-text-path`}>
          <path
            d="M 1654.6564190180845 333.347136940154 A 960 960 0 0 1 2058.4742884471975 839.7187288437183"
            id={`${prefix}-outer-circle-2-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-outer-circle-2-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              ‏‏‎ ‎
            </textPath>
          </text>
        </g>
      </g>
      <g id={`${prefix}-outer-circle-3`}>
        <path
          d="M 2217.310445817475 1021.6512086192372 A 1075 1075 0 0 1 2055.9250305530923 1728.7269122974835"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-outer-circle-3-text-path`}>
          <path
            d="M 196.86695071183624 1264.6184555586353 A 960 960 0 1 0 340.9878796921223 633.1834085529451"
            id={`${prefix}-outer-circle-3-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-outer-circle-3-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              ‏‏‎ ‎
            </textPath>
          </text>
        </g>
      </g>
      <g id={`${prefix}-outer-circle-4`}>
        <path
          d="M 1915.8043042226955 1904.4327456002907 A 1075 1075 0 0 1 1262.3680980127274 2219.1110375208937"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-outer-circle-4-text-path`}>
          <path
            d="M 466.11894692670876 476.2740132313686 A 960 960 0 1 0 1049.6526752630527 195.25898044645749"
            id={`${prefix}-outer-circle-4-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-outer-circle-4-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Cybersecurity (Archive)
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-passive`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1915.8043042226955"
              cy="1904.4327456002907"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1915.8043042226955"
              cy="1904.4327456002907"
            ></circle>
          </g>
          <text
            x="1915.8043042226955"
            y="1938.4327456002907"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            passive
          </text>
        </g>
        <g id={`${prefix}-inspector-image`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1862.115785063836"
              cy="1955.304978665174"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1862.115785063836"
              cy="1955.304978665174"
            ></circle>
          </g>
          <text
            x="1862.115785063836"
            y="1989.304978665174"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            inspector-image
          </text>
        </g>
        <g id={`${prefix}-active`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1805.0562869800187"
              cy="2002.3650983516109"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1805.0562869800187"
              cy="2002.3650983516109"
            ></circle>
          </g>
          <text
            x="1805.0562869800187"
            y="2036.3650983516109"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            active
          </text>
        </g>
        <g id={`${prefix}-local`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1744.8959154365948"
              cy="2045.390333763357"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1744.8959154365948"
              cy="2045.390333763357"
            ></circle>
          </g>
          <text
            x="1744.8959154365948"
            y="2079.390333763357"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            local
          </text>
        </g>
        <g id={`${prefix}-web-hack`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1681.9194546622589"
              cy="2084.1770141422903"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1681.9194546622589"
              cy="2084.1770141422903"
            ></circle>
          </g>
          <text
            x="1681.9194546622589"
            y="2118.1770141422903"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            web-hack
          </text>
        </g>
        <g id={`${prefix}-injector`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1616.4250195513753"
              cy="2118.5415329951006"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1616.4250195513753"
              cy="2118.5415329951006"
            ></circle>
          </g>
          <text
            x="1616.4250195513753"
            y="2152.5415329951006"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            injector
          </text>
        </g>
        <g id={`${prefix}-holeinbinold`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1548.722644462247"
              cy="2148.3212172407398"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1548.722644462247"
              cy="2148.3212172407398"
            ></circle>
          </g>
          <text
            x="1548.722644462247"
            y="2182.3212172407398"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            holeinbinold
          </text>
        </g>
        <g id={`${prefix}-mal-track`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1479.1328155916171"
              cy="2173.3750972643093"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1479.1328155916171"
              cy="2173.3750972643093"
            ></circle>
          </g>
          <text
            x="1479.1328155916171"
            y="2207.3750972643093"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            mal-track
          </text>
        </g>
        <g id={`${prefix}-evasion`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1407.984953872758"
              cy="2193.584574232137"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1407.984953872758"
              cy="2193.584574232137"
            ></circle>
          </g>
          <text
            x="1407.984953872758"
            y="2227.584574232137"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            evasion
          </text>
        </g>
        <g id={`${prefix}-obfuscator`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1335.6158555787501"
              cy="2208.853981509145"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1335.6158555787501"
              cy="2208.853981509145"
            ></circle>
          </g>
          <text
            x="1335.6158555787501"
            y="2242.853981509145"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            obfuscator
          </text>
        </g>
        <g id={`${prefix}-malware`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1262.3680980127274"
              cy="2219.1110375208937"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1262.3680980127274"
              cy="2219.1110375208937"
            ></circle>
          </g>
          <text
            x="1262.3680980127274"
            y="2253.1110375208937"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            malware
          </text>
        </g>
      </g>
      <g id={`${prefix}-outer-circle-5`}>
        <path
          d="M 1037.6319019872726 2219.1110375208937 A 1075 1075 0 0 1 384.1956957773042 1904.4327456002907"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-outer-circle-5-text-path`}>
          <path
            d="M 1250.3473247369468 195.25898044645749 A 960 960 0 1 0 1833.881053073291 476.27401323136826"
            id={`${prefix}-outer-circle-5-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-outer-circle-5-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Certificates
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-computer-science`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="1037.6319019872726"
              cy="2219.1110375208937"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="1037.6319019872726"
              cy="2219.1110375208937"
            ></circle>
          </g>
          <text
            x="1037.6319019872726"
            y="2253.1110375208937"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            computer-science
          </text>
        </g>
        <g id={`${prefix}-developer-certifications`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="892.0150461272414"
              cy="2193.584574232137"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="892.0150461272414"
              cy="2193.584574232137"
            ></circle>
          </g>
          <text
            x="892.0150461272414"
            y="2227.584574232137"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            developer-certifications
          </text>
        </g>
        <g id={`${prefix}-networking`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="751.277355537753"
              cy="2148.3212172407398"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="751.277355537753"
              cy="2148.3212172407398"
            ></circle>
          </g>
          <text
            x="751.277355537753"
            y="2182.3212172407398"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            networking
          </text>
        </g>
        <g id={`${prefix}-cloud-foundations`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="618.0805453377405"
              cy="2084.1770141422903"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="618.0805453377405"
              cy="2084.1770141422903"
            ></circle>
          </g>
          <text
            x="618.0805453377405"
            y="2118.1770141422903"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            cloud-foundations
          </text>
        </g>
        <g id={`${prefix}-cloud-fundamentals`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="494.9437130199814"
              cy="2002.3650983516109"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="494.9437130199814"
              cy="2002.3650983516109"
            ></circle>
          </g>
          <text
            x="494.9437130199814"
            y="2036.3650983516109"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            cloud-fundamentals
          </text>
        </g>
        <g id={`${prefix}-cybercloud-basics`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="384.1956957773042"
              cy="1904.4327456002907"
              fill="transparent"
            ></circle>
            <circle
              fill="var(--grey60)"
              r="5"
              cx="384.1956957773042"
              cy="1904.4327456002907"
            ></circle>
          </g>
          <text
            x="384.1956957773042"
            y="1938.4327456002907"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            cybercloud-basics
          </text>
        </g>
      </g>
      <g id={`${prefix}-outer-circle-6`}>
        <path
          d="M 244.07496944690786 1728.7269122974835 A 1075 1075 0 0 1 82.68955418252494 1021.6512086192372"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-outer-circle-6-text-path`}>
          <path
            d="M 1959.0121203078772 633.1834085529445 A 960 960 0 1 0 2103.133049288164 1264.6184555586347"
            id={`${prefix}-outer-circle-6-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-outer-circle-6-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              Projet, Archi &amp; Green IT
            </textPath>
          </text>
        </g>
        <g id={`${prefix}-infrastructure`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="244.07496944690786"
              cy="1728.7269122974835"
              fill="transparent"
            ></circle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              x="232.07496944690786"
              y="1716.7269122974835"
            >
              <path
                fillRule="evenodd"
                d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                clipRule="evenodd"
                fill="var(--grey60)"
              ></path>
            </svg>
          </g>
          <text
            x="244.07496944690786"
            y="1762.7269122974835"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            infrastructure
          </text>
        </g>
        <g id={`${prefix}-optimisation`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="158.37502010076594"
              cy="1565.096252982177"
              fill="transparent"
            ></circle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              x="146.37502010076594"
              y="1553.096252982177"
            >
              <path
                fillRule="evenodd"
                d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                clipRule="evenodd"
                fill="var(--grey60)"
              ></path>
            </svg>
          </g>
          <text
            x="158.37502010076594"
            y="1599.096252982177"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            optimisation
          </text>
        </g>
        <g id={`${prefix}-architecture`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="101.95249440453972"
              cy="1389.2100040030382"
              fill="transparent"
            ></circle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              x="89.95249440453972"
              y="1377.2100040030382"
            >
              <path
                fillRule="evenodd"
                d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                clipRule="evenodd"
                fill="var(--grey60)"
              ></path>
            </svg>
          </g>
          <text
            x="101.95249440453972"
            y="1423.2100040030382"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            architecture
          </text>
        </g>
        <g id={`${prefix}-workshopcertification`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="76.47325013883324"
              cy="1206.2611529611645"
              fill="transparent"
            ></circle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              x="64.47325013883324"
              y="1194.2611529611645"
            >
              <path
                fillRule="evenodd"
                d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                clipRule="evenodd"
                fill="var(--grey60)"
              ></path>
            </svg>
          </g>
          <text
            x="76.47325013883324"
            y="1240.2611529611645"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            workshopcertification
          </text>
        </g>
        <g id={`${prefix}-mission`}>
          <g style={{ opacity: "0.85" }}>
            <circle
              r="12"
              cx="82.68955418252494"
              cy="1021.6512086192372"
              fill="transparent"
            ></circle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              x="70.68955418252494"
              y="1009.6512086192372"
            >
              <path
                fillRule="evenodd"
                d="m12 2.03 3.32 6.44 7.18 1.1-5.15 5.15 1.1 7.18L12 18.09 5.55 22 6.65 14.82 1.5 9.67l7.18-1.1L12 2.03Z"
                clipRule="evenodd"
                fill="var(--grey60)"
              ></path>
            </svg>
          </g>
          <text
            x="82.68955418252494"
            y="1055.6512086192372"
            fontSize="12px"
            textAnchor="middle"
            fill="var(--grey60)"
            fontFamily="var(--font-zone01-mono)"
            pointerEvents="none"
            style={{ textTransform: "uppercase" }}
          >
            mission
          </text>
        </g>
      </g>
      <g id={`${prefix}-outer-circle-7`}>
        <path
          d="M 132.69806241589856 802.5496182364554 A 1075 1075 0 0 1 584.8899474537084 235.51892938610933"
          fill="none"
          stroke="var(--grey)"
          strokeWidth="0.25"
        ></path>
        <g id={`${prefix}-g-outer-circle-7-text-path`}>
          <path
            d="M 241.52571155280248 839.7187288437184 A 960 960 0 0 1 645.3435809819164 333.3471369401535"
            id={`${prefix}-outer-circle-7-text-path`}
            fill="none"
          ></path>
          <text fill="var(--neutral)">
            <textPath
              startOffset="50%"
              textAnchor="middle"
              href={`#${prefix}-outer-circle-7-text-path`}
              alignmentBaseline="middle"
              fontSize="50"
              fontFamily="var(--font-zone01-sans)"
              style={{ letterSpacing: "0.75px" }}
            >
              ‏‏‎ ‎
            </textPath>
          </text>
        </g>
      </g>
    </svg>
  )
}
