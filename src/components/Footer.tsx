import { Link } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { label: 'Inspirations', path: '/inspirations' },
  { label: 'Méthode', path: '/methode' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <Logo className="h-9 w-9 rounded-full overflow-hidden" variant="on-blue" alt="Nérée" />
              <span className="font-serif text-xl text-primary">Nérée</span>
            </Link>
            <p className="text-sm text-secondary mt-3 leading-relaxed max-w-[280px]">
              Studio digital ultra premium — design, développement et applications sur-mesure.
            </p>
            <div className="mt-4 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
              Basé à Paris
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-label uppercase text-muted mb-4">Navigation</div>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-label uppercase text-muted mb-4">Contact</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="mailto:contact@nérée.com"
                className="text-secondary hover:text-primary transition-colors"
              >
                contact@nérée.com
              </a>
              <a
                href="tel:+33782447255"
                className="text-secondary hover:text-primary transition-colors"
              >
                07 82 44 72 55
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-rule flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Nérée. Tous droits réservés.</span>
          <span className="font-mono">Conçu avec exigence.</span>
        </div>
      </div>
    </footer>
  )
}
