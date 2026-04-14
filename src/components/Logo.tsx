interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-9 w-9' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer double-ring border */}
      <circle cx="200" cy="200" r="192" stroke="currentColor" strokeWidth="7" fill="none" />
      <circle cx="200" cy="200" r="175" stroke="currentColor" strokeWidth="2" fill="none" />

      {/* ═══ NEREUS SILHOUETTE (right side, profile facing left) ═══ */}
      <g fill="currentColor">
        {/* Head profile + shoulder */}
        <path d="
          M 275 105
          Q 255 95 238 105
          Q 225 115 222 135
          Q 220 148 225 158
          Q 223 170 230 175
          Q 232 185 240 190
          Q 250 200 265 198
          L 270 215
          Q 280 225 295 225
          L 310 220
          L 310 280
          Q 290 290 270 290
          L 270 240
          Q 260 235 258 225
          Q 250 230 245 225
          L 245 215
          Z
        " />
        {/* Laurel crown — small leaves above head */}
        <path d="M 225 98 L 232 92 L 230 100 Z" />
        <path d="M 240 93 L 247 88 L 246 97 Z" />
        <path d="M 255 90 L 263 86 L 263 95 Z" />
        <path d="M 270 90 L 278 88 L 280 97 Z" />
        {/* Beard flowing down */}
        <path d="
          M 230 175
          Q 220 195 215 220
          Q 212 235 220 240
          Q 235 235 245 225
          L 245 215
          Q 238 205 235 195
          Q 232 185 230 175 Z
        " />
        {/* Arm extended holding dolphin */}
        <path d="
          M 310 235
          Q 325 238 335 245
          Q 340 250 342 258
          L 338 265
          Q 325 260 315 255
          L 312 250 Z
        " />
      </g>

      {/* ═══ DOLPHIN in Nereus's hand (small, to the right) ═══ */}
      <g fill="currentColor">
        <path d="
          M 340 225
          Q 355 218 365 228
          Q 368 235 362 242
          L 355 244
          Q 358 248 356 252
          L 348 250
          Q 342 247 340 240
          Z
        " />
        {/* Dolphin eye */}
        <circle cx="355" cy="233" r="1.5" fill="#fff" stroke="none" />
      </g>

      {/* ═══ LEFT SIDE: DOLPHINS + DECORATIVE SPIRAL ═══ */}
      <g fill="currentColor">
        {/* Upper dolphin leaping */}
        <path d="
          M 75 120
          Q 95 110 118 120
          Q 130 125 135 135
          L 128 140
          Q 115 145 105 148
          Q 92 148 82 142
          Q 72 135 72 128
          Z
        " />
        <circle cx="120" cy="128" r="1.8" fill="#fff" stroke="none" />
        {/* Tail fin */}
        <path d="M 72 128 L 62 120 L 65 138 Z" />

        {/* Lower dolphin */}
        <path d="
          M 70 175
          Q 90 168 112 178
          Q 122 183 124 192
          L 116 196
          Q 100 200 85 198
          Q 75 195 68 188
          Q 65 180 70 175 Z
        " />
        <circle cx="108" cy="186" r="1.5" fill="#fff" stroke="none" />
        <path d="M 68 188 L 58 182 L 60 198 Z" />
      </g>

      {/* Decorative spiral / foam on left */}
      <g stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round">
        <path d="M 115 220 Q 135 210 145 225 Q 150 238 135 245 Q 120 245 118 232" />
        <circle cx="130" cy="228" r="3" fill="currentColor" stroke="none" />
      </g>
      {/* Dotted foam */}
      <g fill="currentColor">
        <circle cx="155" cy="218" r="2" />
        <circle cx="165" cy="225" r="1.5" />
        <circle cx="160" cy="232" r="1.5" />
        <circle cx="172" cy="215" r="1.2" />
      </g>

      {/* ═══ CENTRAL SERIF "N" ═══ */}
      <g fill="currentColor">
        {/* Left vertical (thick) */}
        <path d="M 148 168 L 148 268 L 170 268 L 170 210 L 170 168 Z" />
        {/* Diagonal (thin) */}
        <path d="M 170 168 L 170 198 L 238 268 L 238 238 Z" />
        {/* Right vertical (thick) */}
        <path d="M 238 168 L 238 268 L 260 268 L 260 168 Z" />
        {/* Top serifs */}
        <rect x="138" y="162" width="42" height="8" />
        <rect x="228" y="162" width="42" height="8" />
        {/* Bottom serifs */}
        <rect x="138" y="268" width="42" height="8" />
        <rect x="228" y="268" width="42" height="8" />
      </g>

      {/* ═══ WAVES AT BOTTOM ═══ */}
      <g stroke="currentColor" fill="none" strokeLinecap="round">
        <path
          d="M 35 310 Q 70 298 105 310 T 175 310 T 245 310 T 315 310 T 365 310"
          strokeWidth="4"
        />
        <path
          d="M 40 325 Q 75 315 110 325 T 180 325 T 250 325 T 320 325 T 368 325"
          strokeWidth="3"
          opacity="0.8"
        />
        <path
          d="M 45 340 Q 80 332 115 340 T 185 340 T 255 340 T 325 340 T 370 340"
          strokeWidth="2.5"
          opacity="0.55"
        />
        <path
          d="M 50 355 Q 85 349 120 355 T 190 355 T 260 355 T 330 355 T 372 355"
          strokeWidth="2"
          opacity="0.35"
        />
      </g>
    </svg>
  )
}
