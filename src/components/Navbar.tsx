import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { path: '/realisations', label: 'Réalisations' },
  { path: '/methode', label: 'Méthode' },
  { path: '/tarifs', label: 'Tarifs' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-navy-700/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold text-navy-900 hover:text-gold-500 transition-colors">
          AS
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-gold-500'
                  : 'text-navy-700 hover:text-navy-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex px-4 py-2 bg-navy-900 text-paper-50 text-sm font-medium rounded hover:bg-gold-500 hover:text-navy-900 transition-colors"
        >
          Prendre rendez-vous
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-navy-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
