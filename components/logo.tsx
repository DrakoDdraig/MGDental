const TOOTH_PATH =
  "M100,34 C80,14 44,17 37,50 C32,75 39,121 51,159 C56,178 72,178 76,151 C80,121 88,113 100,113 C112,113 120,121 124,151 C128,178 144,178 149,159 C161,121 168,75 163,50 C156,17 120,14 100,34 Z"

const SPARKLE_BIG =
  "M141,44 C142,53 148,59 157,60 C148,61 142,67 141,76 C140,67 134,61 125,60 C134,59 140,53 141,44 Z"

const SPARKLE_SMALL =
  "M157,74 C158,80 162,84 168,85 C162,86 158,90 157,96 C156,90 152,86 146,85 C152,84 156,80 157,74 Z"

export function Logo({ className, title = "MG Dental" }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={title}
      className={className}
      style={{ color: "var(--gold)" }}
      fill="none"
    >
      <path d={TOOTH_PATH} stroke="currentColor" strokeWidth={6} strokeLinejoin="round" />
      <path d={SPARKLE_BIG} fill="currentColor" />
      <path d={SPARKLE_SMALL} fill="currentColor" />
      <text
        x="90"
        y="96"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-serif), serif"
        fontStyle="italic"
        fontWeight={700}
        fontSize="52"
      >
        MG
      </text>
      <text
        x="92"
        y="146"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-serif), serif"
        fontStyle="italic"
        fontWeight={600}
        fontSize="42"
      >
        Dental
      </text>
    </svg>
  )
}
