import { useState, useCallback, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

interface HoverPreviewProps {
  children: ReactNode
  src?: string
  gradient?: string
  label?: string
  className?: string
}

const PREVIEW_W = 320
const PREVIEW_H = 200
const OFFSET_Y = 28

/**
 * Wrap any element to show a small floating image preview that follows the cursor.
 * Renders via a portal on document.body so ancestor clip-path / overflow / transform
 * never trap the floating preview.
 */
export default function HoverPreview({
  children,
  src,
  gradient,
  label,
  className = '',
}: HoverPreviewProps) {
  const [hover, setHover] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 220, damping: 22, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 220, damping: 22, mass: 0.4 })

  useEffect(() => setMounted(true), [])

  const place = useCallback(
    (clientX: number, clientY: number) => {
      const half = PREVIEW_W / 2
      const margin = 12
      const minX = half + margin
      const maxX = window.innerWidth - half - margin
      const x = Math.min(Math.max(clientX, minX), maxX)

      const above = clientY - PREVIEW_H / 2 - OFFSET_Y
      const below = clientY + PREVIEW_H / 2 + OFFSET_Y
      const y = above - PREVIEW_H / 2 < margin ? below : above

      mx.set(x)
      my.set(y)
    },
    [mx, my],
  )

  const onMove = useCallback(
    (e: React.MouseEvent) => place(e.clientX, e.clientY),
    [place],
  )

  const overlay = (
    <AnimatePresence>
      {hover && (
        <motion.div
          className="pointer-events-none fixed z-[9999] hidden md:block"
          style={{
            top: 0,
            left: 0,
            x: sx,
            y: sy,
            width: PREVIEW_W,
            height: PREVIEW_H,
            marginLeft: -PREVIEW_W / 2,
            marginTop: -PREVIEW_H / 2,
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <div
            className="w-full h-full rounded-md overflow-hidden shadow-2xl"
            style={{
              background: src
                ? `url(${src}) center/cover no-repeat`
                : gradient || 'linear-gradient(135deg, var(--accent), var(--surface-hover))',
              boxShadow:
                '0 24px 60px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.20)',
            }}
          >
            {!src && (
              <div className="w-full h-full flex items-end p-4">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/85">
                  {label}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div
      className={className}
      onMouseEnter={(e) => {
        mx.jump(e.clientX)
        my.jump(e.clientY - PREVIEW_H / 2 - OFFSET_Y)
        place(e.clientX, e.clientY)
        setHover(true)
      }}
      onMouseLeave={() => setHover(false)}
      onMouseMove={onMove}
    >
      {children}
      {mounted && createPortal(overlay, document.body)}
    </div>
  )
}
