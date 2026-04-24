import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useIntroPhase } from '../hooks/useIntro'

/**
 * Floating "Démarrer un projet" CTA that appears once the user scrolls past
 * the first viewport and hides again as they approach the footer — so it
 * never competes with the in-page CTAs.
 *
 * Positioned bottom-left to avoid the ContactWidget at bottom-right.
 * Hidden on /contact (no point CTAing to where they already are).
 */
export default function ScrollCTA() {
  const [visible, setVisible] = useState(false)
  const phase = useIntroPhase()
  const location = useLocation()

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY
      const viewport = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const pastHero = scrolled > viewport * 0.6
      const nearFooter = scrolled + viewport > docHeight - 420
      setVisible(pastHero && !nearFooter)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (phase !== 'done') return null
  if (location.pathname === '/contact') return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-cta"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed bottom-5 left-5 md:bottom-7 md:left-7 z-30"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 pl-5 pr-4 py-3 rounded-full bg-primary text-page shadow-xl hover:bg-accent transition-colors duration-300"
            style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
              Démarrer un projet
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
            </svg>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
