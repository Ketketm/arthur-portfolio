import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  vy: number
  alpha: number
  twinkle: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>()
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0

    const COUNT = 90

    const seed = () => {
      starsRef.current = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.3,
        vy: Math.random() * 0.18 + 0.04,
        alpha: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const isLight = () =>
      document.documentElement.getAttribute('data-theme') === 'light'

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      const light = isLight()
      const baseColor = light ? '26, 26, 24' : '240, 237, 232'

      for (const s of starsRef.current) {
        s.y += s.vy
        s.twinkle += 0.02
        if (s.y - s.r > h) {
          s.y = -2
          s.x = Math.random() * w
        }
        const a =
          s.alpha *
          (0.55 + 0.45 * Math.sin(s.twinkle)) *
          (light ? 0.45 : 1)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${baseColor}, ${a})`
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
