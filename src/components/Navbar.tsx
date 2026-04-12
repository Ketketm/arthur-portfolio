import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
  { path: '/realisations', label: 'Réalisations' },
  { path: '/methode', label: 'Méthode' },
  { path: '/tarifs', label: 'Tarifs' },
  { path: '/a-propos', label: 'À propos' },
]

export default function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-rule shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl text-primary hover:text-bronze transition-colors duration-200"
            >
              Verne
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm transition-colors duration-200 line-animate ${
                    location.pathname === link.path
                      ? 'text-primary font-medium'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-primary"
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-page text-sm font-semibold rounded-sm transition-all duration-200 hover:opacity-90 hover:shadow-md hover:-translate-y-px"
              >
                Prendre rendez-vous
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-[1.5px] bg-current transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-page/98 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-serif text-2xl ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-page font-semibold rounded-sm mt-4"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
