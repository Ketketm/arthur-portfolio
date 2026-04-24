interface LogoProps {
  className?: string
  /** Force a specific variant. By default the right one is shown for the current theme. */
  variant?: 'auto' | 'black' | 'white' | 'on-blue' | 'on-black'
  alt?: string
}

/**
 * Nérée brand mark.
 *
 * Two clean PNGs with proper transparent backgrounds:
 * - Day / light mode  → `/logos/mark-black-clean.png`
 * - Night / dark mode → `/logos/mark-white-clean.png`
 *
 * `on-blue` / `on-black` are branded plate variants (solid background).
 */
export default function Logo({ className = 'h-9 w-9', variant = 'auto', alt = '' }: LogoProps) {
  if (variant === 'black') {
    return <img src="/logos/mark-black-clean.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'white') {
    return <img src="/logos/mark-white-clean.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'on-blue') {
    return <img src="/logos/mark-on-blue.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'on-black') {
    return <img src="/logos/mark-on-black.png" alt={alt} className={`${className} object-contain`} />
  }

  // auto — render both, CSS hides the wrong one based on [data-theme].
  // Dark theme (no attribute)   → shows white logo
  // Light theme (data-theme=light) → shows black logo
  return (
    <span className={`${className} relative inline-block`} aria-hidden={alt === '' ? true : undefined}>
      <img
        src="/logos/mark-white-clean.png"
        alt={alt}
        className="logo-mark logo-mark--white absolute inset-0 w-full h-full object-contain"
      />
      <img
        src="/logos/mark-black-clean.png"
        alt=""
        aria-hidden="true"
        className="logo-mark logo-mark--black absolute inset-0 w-full h-full object-contain"
      />
    </span>
  )
}
