interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-9 w-9' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer double-ring border */}
      <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" fill="none" />

      {/* Serif N — classical Roman proportions with thick/thin contrast */}
      <g fill="currentColor">
        {/* Left vertical (thick) */}
        <path d="M 62 58 L 62 132 L 75 132 L 75 82 L 75 58 Z" />
        {/* Diagonal stroke */}
        <path d="M 75 58 L 75 78 L 125 132 L 125 112 Z" />
        {/* Right vertical (thick) */}
        <path d="M 125 58 L 125 132 L 138 132 L 138 58 Z" />
        {/* Top serifs */}
        <rect x="56" y="55" width="25" height="5" />
        <rect x="119" y="55" width="25" height="5" />
        {/* Bottom serifs */}
        <rect x="56" y="132" width="25" height="5" />
        <rect x="119" y="132" width="25" height="5" />
      </g>

      {/* Waves at bottom — 3 flowing lines */}
      <path
        d="M 20 150 Q 40 142 60 150 T 100 150 T 140 150 T 180 150"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 22 162 Q 42 156 62 162 T 102 162 T 142 162 T 180 162"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 24 172 Q 44 167 64 172 T 104 172 T 144 172 T 180 172"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Small decorative marine dots on left (nod to fish/seafoam) */}
      <circle cx="38" cy="90" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="46" cy="100" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="38" cy="112" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
