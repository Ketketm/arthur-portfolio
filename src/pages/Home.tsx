import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        {/* Gold accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-2xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-24 h-24 mx-auto"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#c9a961"
                strokeWidth="1"
                className="opacity-50"
              />
              <text
                x="50"
                y="58"
                textAnchor="middle"
                fill="#c9a961"
                fontSize="32"
                fontFamily="Playfair Display, serif"
                fontWeight="500"
              >
                AS
              </text>
            </svg>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-paper-50 mb-6"
          >
            L'identité digitale
            <br />
            <span className="text-gradient">des cabinets d'avocats</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg md:text-xl text-paper-100/80 max-w-2xl mx-auto mb-12"
          >
            Conçue par un juriste, codée sur mesure.
            <br />
            Formation UT1 Capitole · Assas Paris II · CRFPA
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-medium rounded hover:bg-gold-400 transition-colors"
            >
              Explorer les réalisations
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-paper-50/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why a jurist section */}
      <section className="py-24 px-6 bg-paper-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-900 mb-4">
              Pourquoi un juriste ?
            </h2>
            <p className="text-navy-700 max-w-2xl mx-auto">
              Je ne suis pas un développeur devenu curieux du droit.
              Je suis un juriste devenu développeur par nécessité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Formation juridique',
                desc: 'UT1 Capitole et Assas Paris II. Je comprends le langage, la culture, les contraintes de la profession.',
              },
              {
                icon: '⚖️',
                title: 'CRFPA en préparation',
                desc: '2025. Maîtrise du cadre déontologique, des obligations de publicité réglementée, des barreaux.',
              },
              {
                icon: '🔒',
                title: 'Déontologie intégrée',
                desc: 'Chaque site respecte les obligations du CNB. Pas de mentions interdites, pas de risque disciplinaire.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-paper-100 rounded-lg border border-navy-700/10 hover:border-gold-500/30 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-medium text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work preview */}
      <section className="py-24 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-paper-50 mb-4">
                Réalisations sélectionnées
              </h2>
              <p className="text-paper-100/70">
                Quelques exemples de ce que je conçois pour mes confrères.
              </p>
            </div>
            <Link
              to="/realisations"
              className="hidden md:inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
            >
              Voir tout
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Maître Sophie Renard', bar: 'Barreau de Paris', domain: 'Contentieux' },
              { name: 'Cabinet Dupont & Associés', bar: 'Barreau de Lyon', domain: 'Affaires' },
              { name: 'Maître Pierre Martin', bar: 'Barreau de Bordeaux', domain: 'Famille' },
            ].map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] bg-navy-800 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy-900/60">
                  <span className="px-4 py-2 bg-gold-500 text-navy-900 font-medium rounded">
                    Voir la maquette
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-gold-500 uppercase tracking-wider">{project.domain}</span>
                  <h3 className="font-display text-lg text-paper-50 mt-1">{project.name}</h3>
                  <p className="text-sm text-paper-100/60">{project.bar}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 text-gold-500"
            >
              Voir tout
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-paper-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-900 mb-6">
              Prêt à créer votre identité digitale ?
            </h2>
            <p className="text-navy-700 mb-8 max-w-xl mx-auto">
              À partir de 690€ TTC. Délai de 30 jours maximum.
              <br />
              Seulement 2 projets par mois.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-paper-50 font-medium rounded hover:bg-navy-800 transition-colors"
              >
                Commencer mon projet
              </Link>
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center px-8 py-4 border border-navy-900 text-navy-900 font-medium rounded hover:bg-navy-900 hover:text-paper-50 transition-colors"
              >
                Voir les tarifs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-navy-900 border-t border-navy-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-paper-100/60 text-sm">
            © 2025 Arthur SOULEIL. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:arthursouleil@gmail.com" className="text-paper-100/60 hover:text-gold-500 transition-colors text-sm">
              arthursouleil@gmail.com
            </a>
            <a href="tel:+33782447255" className="text-paper-100/60 hover:text-gold-500 transition-colors text-sm">
              07 82 44 72 55
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
