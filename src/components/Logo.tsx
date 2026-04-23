interface LogoProps {
  className?: string
  /** Force a specific variant. By default the right one is shown for the current theme. */
  variant?: 'auto' | 'black' | 'white' | 'on-blue' | 'on-black'
  alt?: string
}

/**
 * Nérée brand mark.
 *
 * - `auto` (default) — picks black or white automatically based on `data-theme`
 *   on `<html>`. Light theme → black logo. Dark theme → white logo.
 * - `black` / `white` — force a specific monochrome version (transparent bg).
 * - `on-blue` / `on-black` — branded variants on a solid plate.
 *
 * Sized via the className width/height.
 */
export default function Logo({ className = 'h-9 w-9', variant = 'auto', alt = '' }: LogoProps) {
  if (variant === 'black') {
    return <img src="/logos/mark-black.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'white') {
    return <img src="/logos/mark-white.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'on-blue') {
    return <img src="/logos/mark-on-blue.png" alt={alt} className={`${className} object-contain`} />
  }
  if (variant === 'on-black') {
    return <img src="/logos/mark-on-black.png" alt={alt} className={`${className} object-contain`} />
  }

  // auto — render both, hide one via CSS based on the active theme
  return (
    <span className={`${className} relative inline-block`} aria-hidden={alt === '' ? true : undefined}>
      <img
        src="/logos/mark-white.png"
        alt={alt}
        className="logo-mark logo-mark--white absolute inset-0 w-full h-full object-contain"
      />
      <img
        src="/logos/mark-black.png"
        alt=""
        aria-hidden="true"
        className="logo-mark logo-mark--black absolute inset-0 w-full h-full object-contain"
      />
    </span>
  )
}
