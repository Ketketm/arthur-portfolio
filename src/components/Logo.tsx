interface LogoProps {
  className?: string
  /** Force a specific variant. By default the right one is shown for the current theme. */
  variant?: 'auto' | 'black' | 'white' | 'on-blue' | 'on-black'
  alt?: string
}

/**
 * Nérée brand mark.
 *
 * Source of truth: `/logos/mark-mono.png` — cleaned alpha channel (binary-ish),
 * white mark on fully transparent background, tightly cropped.
 * The black version is derived at runtime via `filter: invert(1)`.
 *
 * - `auto` (default) — picks black (light theme) or white (dark theme) based
 *   on `data-theme` on `<html>`. Both are transparent.
 * - `black` / `white` — force a specific monochrome version (transparent bg).
 * - `on-blue` / `on-black` — branded variants on a solid plate (unchanged).
 */
export default function Logo({ className = 'h-9 w-9', variant = 'auto', alt = '' }: LogoProps) {
  if (variant === 'black') {
    return (
      <img
        src="/logos/mark-mono.png"
        alt={alt}
        className={`${className} object-contain invert`}
      />
    )
  }
  if (variant === 'white') {
    return <img src="/logos/mark-mono.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'on-blue') {
    return <img src="/logos/mark-on-blue.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'on-black') {
    return <img src="/logos/mark-on-black.png" alt={alt} className={`${className} object-contain`} />
  }

  // auto — render both, hide one via CSS based on the active theme.
  // Source is mark-mono.png (cleaned alpha). The black version is derived via
  // `filter: invert(1)` — works cleanly because the source now has a true
  // transparent background (no haze, no square).
  return (
    <span className={`${className} relative inline-block`} aria-hidden={alt === '' ? true : undefined}>
      <img
        src="/logos/mark-mono.png"
        alt={alt}
        className="logo-mark logo-mark--white absolute inset-0 w-full h-full object-contain"
      />
      <img
        src="/logos/mark-mono.png"
        alt=""
        aria-hidden="true"
        className="logo-mark logo-mark--black absolute inset-0 w-full h-full object-contain invert"
      />
    </span>
  )
}
