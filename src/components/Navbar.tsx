import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useIntroPhase } from '../hooks/useIntro'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/inspirations', label: 'Inspirations' },
  { path: '/methode', label: 'Méthode' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
]

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const location = useLocation()
  const phase = useIntroPhase()
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Brand mark (logo + word) only mounts once intro starts morphing —
  // that's when layoutId hands the giant brand off to the navbar position.
  const showBrand = phase !== 'loading'

  // Fade in chrome (theme toggle, burger) only after morph completes.
  const chromeOpacity = phase === 'done' ? 1 : 0
  const chromeY = phase === 'done' ? 0 : -4
  const chromeTransition = {
    duration: 0.9,
    ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number],
    delay: 0.25,
  }
  const MORPH = {
    layout: { duration: 0.85, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav border-b border-rule shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand — Nérée mark + word */}
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-primary hover:text-accent transition-colors duration-200"
              aria-label="Nérée — Accueil"
            >
              {showBrand && (
                <motion.span
                  layoutId="neree-logo"
                  className="inline-flex origin-center"
                  initial={{ opacity: 0.025 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    layout: {
                      duration: 0.85,
                      ease: [0.22, 0.61, 0.36, 1],
                      delay: 0.45,
                    },
                    opacity: {
                      duration: 0.75,
                      ease: [0.22, 0.61, 0.36, 1],
                      delay: 0.5,
                    },
                  }}
                >
                  <Logo className="h-9 w-9 md:h-11 md:w-11" alt="Nérée" />
                </motion.span>
              )}
              {showBrand && (
                <motion.span
                  layoutId="neree-brand"
                  className="font-serif text-primary leading-none flex items-baseline"
                  style={{ fontSize: 'clamp(1.25rem, 1.7vw, 1.65rem)', letterSpacing: '-0.01em' }}
                  transition={MORPH}
                >
                  Nérée
                </motion.span>
              )}
            </Link>

            {/* Right: theme toggle + burger */}
            <motion.div
              initial={false}
              animate={{ opacity: chromeOpacity, y: chromeY }}
              transition={chromeTransition}
              className="flex items-center gap-2"
            >
              <button
                onClick={toggleTheme}
                className="p-2 text-secondary hover:text-primary transition-colors duration-200 rounded-sm"
                aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              >
                {theme === 'dark' ? (
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={open}
                className="relative w-10 h-10 flex items-center justify-center text-primary rounded-sm hover:bg-surface transition-colors"
              >
                <span className="sr-only">Menu</span>
                <div className="w-6 h-4 flex flex-col justify-between">
                  <span className={`block h-[1.5px] bg-current transition-transform duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`block h-[1.5px] bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
                  <span className={`block h-[1.5px] bg-current transition-transform duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Fullscreen menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 glass-nav"
          >
            <div className="max-w-content mx-auto px-6 lg:px-8 h-[100dvh] pt-20 pb-6 flex flex-col justify-between gap-6 overflow-hidden">
              <ul className="flex flex-col gap-3 md:gap-4 min-h-0 justify-center flex-1">
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.path
                  return (
                    <li key={link.path} className="overflow-hidden">
                      <motion.div
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '110%', transition: { duration: 0.25, delay: (navLinks.length - i - 1) * 0.04 } }}
                        transition={{
                          duration: 0.55,
                          delay: 0.08 + i * 0.06,
                          ease: [0.22, 0.61, 0.36, 1],
                        }}
                      >
                        <Link
                          to={link.path}
                          className={`group flex items-baseline gap-3 md:gap-5 font-serif leading-[1.02] tracking-[-0.02em] transition-colors duration-200 ${
                            active ? 'text-accent' : 'text-primary hover:text-accent'
                          }`}
                          style={{ fontSize: 'clamp(1.8rem, 8vh, 4.5rem)' }}
                        >
                          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted self-start mt-2">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span>{link.label}</span>
                        </Link>
                      </motion.div>
                    </li>
                  )
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-5 border-t border-rule"
              >
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-2">Contact</div>
                  <a href="mailto:contact@nérée.com" className="text-primary hover:text-accent transition-colors text-lg">
                    contact@nérée.com
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white text-sm tracking-wide rounded-sm hover:bg-accent/80 transition-all duration-300 self-start md:self-auto"
                >
                  Démarrer un projet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
