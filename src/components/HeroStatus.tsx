import { useEffect, useState } from 'react'

/**
 * Subtle live status badge for the hero.
 *
 * Renders "● Studio ouvert — Paris · HH:MM" with a pulsing accent dot.
 * Studio hours: Mon–Fri, 9h–19h Europe/Paris. Outside those hours the dot
 * dims and the label switches to "Hors ligne". Updates every 30s.
 */
export default function HeroStatus() {
  const [label, setLabel] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    function update() {
      // Get Paris time via Intl (honors DST automatically).
      const fmt = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        weekday: 'short',
        hour12: false,
      })
      const parts = fmt.formatToParts(new Date())
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
      const hh = get('hour')
      const mm = get('minute')
      setLabel(`${hh}:${mm}`)

      // Compute weekday + hour in Paris tz by formatting to en-US for stable parsing.
      const fmtUS = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Paris',
        weekday: 'short',
        hour: 'numeric',
        hour12: false,
      })
      const usParts = fmtUS.formatToParts(new Date())
      const weekday = usParts.find((p) => p.type === 'weekday')?.value ?? 'Mon'
      const hour = parseInt(usParts.find((p) => p.type === 'hour')?.value ?? '0', 10)
      const weekdayIdx = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(weekday)
      const weekday0to6 = weekdayIdx === -1 ? new Date().getDay() : weekdayIdx
      setIsOpen(weekday0to6 >= 1 && weekday0to6 <= 5 && hour >= 9 && hour < 19)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-muted select-none">
      <span
        className={`inline-block w-[6px] h-[6px] rounded-full ${isOpen ? 'bg-accent' : 'bg-muted'}`}
        style={isOpen ? { animation: 'hero-status-pulse 2.4s ease-in-out infinite' } : undefined}
        aria-hidden
      />
      <span className="text-primary/70">{isOpen ? 'Studio ouvert' : 'Hors ligne'}</span>
      <span className="opacity-50">—</span>
      <span>Paris · {label}</span>
    </div>
  )
}
