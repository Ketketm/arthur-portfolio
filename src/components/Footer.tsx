import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Méthode', path: '/methode' },
  { label: 'Tarifs', path: '/tarifs' },
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
            <Link to="/" className="font-serif text-xl text-primary">
              Verne
            </Link>
            <p className="text-sm text-secondary mt-3 leading-relaxed max-w-[280px]">
              L'agence digitale dédiée aux cabinets d'avocats exigeants.
            </p>
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
                href="mailto:contact@verne.fr"
                className="text-secondary hover:text-primary transition-colors"
              >
                contact@verne.fr
              </a>
              <a
                href="tel:+33100000000"
                className="text-secondary hover:text-primary transition-colors"
              >
                01 00 00 00 00
              </a>
              <a
                href="https://linkedin.com/company/verne-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-rule flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Verne. Tous droits réservés.</span>
          <span className="font-mono">Conçu avec exigence.</span>
        </div>
      </div>
    </footer>
  )
}
