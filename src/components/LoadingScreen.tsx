import { motion, AnimatePresence } from 'framer-motion'
import { useIntroPhase } from '../hooks/useIntro'
import Logo from './Logo'

const LETTERS = ['N', 'é', 'r', 'é', 'e']
const MORPH = { duration: 0.85, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }

/**
 * Full-screen intro:
 *  1. A giant faint logo watermark fades in.
 *  2. Each letter of "Nérée" appears staggered above it.
 *  3. The watermark itself morphs (via shared layoutId `neree-logo`) into
 *     the small navbar logo — shrinking AND ramping from faint to opaque.
 *  4. The "Nérée" word morphs (via shared layoutId `neree-brand`) into
 *     the navbar brand text.
 */
export default function LoadingScreen() {
  const phase = useIntroPhase()
  const showOverlay = phase === 'loading'

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-page overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] } }}
        >
          {/* Giant faint logo watermark — same layoutId as navbar logo,
              so it morphs into the navbar mark when phase changes. */}
          <motion.div
            layoutId="neree-logo"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            transition={{ layout: MORPH }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.025 }}
            aria-hidden="true"
          >
            <Logo
              variant="smile"
              className="text-primary w-[min(80vh,80vw)] h-[min(80vh,80vw)]"
            />
          </motion.div>

          {/* "Nérée" word — letters reveal, then morph to navbar */}
          <motion.div
            layoutId="neree-brand"
            className="font-serif text-primary leading-none flex items-baseline relative"
            style={{
              fontSize: 'clamp(5rem, 18vw, 14rem)',
              letterSpacing: '-0.04em',
            }}
            transition={{ layout: MORPH }}
          >
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.32,
                  delay: i * 0.13,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
