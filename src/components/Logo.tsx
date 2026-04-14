interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-9 w-9' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Wave hint at bottom */}
      <path d="M 12 62 Q 25 56 38 62 T 64 62 T 88 62" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M 14 70 Q 28 65 42 70 T 68 70 T 86 70" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Stylized N letterform */}
      <path
        d="M 33 28 L 33 72 L 39 72 L 39 42 L 61 72 L 67 72 L 67 28 L 61 28 L 61 58 L 39 28 Z"
        fill="currentColor"
      />
    </svg>
  )
}
