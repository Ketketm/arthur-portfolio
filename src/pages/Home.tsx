import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection, StaggerContainer, StaggerItem } from '../components/SuperEffects'

export default function Home() {
  return (
    <div className="min-h-screen bg-page">
      {/* Hero Section — asymmetric editorial */}
      <section className="pt-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 min-h-[calc(100vh-64px)] items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <span className="section-label mb-6 block">
                Créateur de sites pour avocats
              </span>
              <h1 className="font-serif text-hero-mobile md:text-h1 lg:text-hero text-primary mb-6 leading-[1.1]">
                Des sites qui{' '}
                <em className="text-bronze">honorent</em>{' '}
                votre profession
              </h1>
              <p className="text-body text-secondary max-w-[420px] mb-10 leading-relaxed">
                Juriste de formation, je conçois des expériences web sur-mesure
                pour les cabinets d'avocats exigeants. Design éditorial, exécution
                technique, conformité CNB.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bronze text-white font-semibold text-sm rounded-sm transition-colors duration-200 hover:bg-bronze-hover"
                >
                  Démarrer un projet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/realisations"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-rule-strong text-primary font-medium text-sm rounded-sm transition-colors duration-200 hover:border-primary"
                >
                  Voir les réalisations
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="hidden md:flex items-center justify-center"
            >
              <div className="aspect-[4/5] w-full bg-surface rounded-md relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 500">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" className="text-muted" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[80px] text-muted/20">AS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          className="border-t border-rule mt-0"
        >
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-rule">
              {[
                { value: '15+', label: 'Sites livrés' },
                { value: '100%', label: 'Sur-mesure' },
                { value: 'Juriste', label: 'Profil unique' },
              ].map((stat) => (
                <div key={stat.label} className="py-8 text-center">
                  <div className="font-serif text-h3 md:text-h2 text-primary">{stat.value}</div>
                  <div className="font-mono text-label uppercase text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Jurist Section */}
      <FadeUpSection className="py-24 px-6 lg:px-8 border-t border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Pourquoi un juriste ?</span>
              <h2 className="font-serif text-h2 text-primary mb-6 leading-tight">
                Je parle votre langage
              </h2>
              <p className="text-body text-secondary leading-relaxed mb-6">
                Ancien juriste d'affaires, j'ai compris ce qui manque aux cabinets :
                des sites qui reflètent leur excellence sans tomber dans les clichés
                du droit corporate.
              </p>
              <p className="text-body text-secondary leading-relaxed">
                Je traduis votre expertise en expériences digitales qui impressionnent
                vos clients et rassurent vos prospects.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-surface rounded-md relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="font-mono text-label uppercase text-muted mb-2">Formation</span>
                  <span className="font-serif text-h3 text-primary">UT1 Capitole</span>
                  <span className="font-serif text-h3 text-primary">Assas Paris II</span>
                  <div className="mt-4 h-[1px] bg-rule-strong" />
                  <span className="font-mono text-label uppercase text-muted mt-4">Préparation CRFPA 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* Featured Work */}
      <section className="py-24 px-6 lg:px-8 border-t border-rule">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="section-label mb-4 block">Sélection</span>
                <h2 className="font-serif text-h2 text-primary">Réalisations récentes</h2>
              </div>
              <Link
                to="/realisations"
                className="hidden md:inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group"
              >
                Voir tout
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeUpSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {[
              { name: 'LexConfig', type: 'Site vitrine', year: '2024' },
              { name: 'Cabinet DSA', type: 'Identité digitale', year: '2024' },
              { name: 'Avocats Associés', type: 'Site corporate', year: '2023' },
              { name: 'LexInnov', type: 'Landing page', year: '2023' },
            ].map((project) => (
              <StaggerItem key={project.name}>
                <Link
                  to="/realisations"
                  className="group block card-hover bg-surface rounded-md overflow-hidden"
                >
                  <div className="aspect-[16/10] bg-surface-hover relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-3xl text-muted group-hover:text-primary transition-colors duration-200">
                        {project.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between border-t border-rule">
                    <div>
                      <h3 className="font-serif text-lg text-primary mb-0.5 group-hover:text-bronze transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="font-mono text-label uppercase text-muted">
                        {project.type}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-muted">{project.year}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-surface border-t border-rule">
        <div className="max-w-content mx-auto text-center">
          <FadeUpSection>
            <span className="section-label mb-6 block">Prochain projet</span>
            <h2 className="font-serif text-h2 md:text-h1 text-primary mb-6 leading-tight">
              Prêt à démarquer<br />votre cabinet ?
            </h2>
            <p className="text-body text-secondary max-w-xl mx-auto mb-10">
              Discutons de votre projet. Première consultation gratuite,
              sans engagement.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-page font-semibold text-base rounded-sm transition-opacity duration-200 hover:opacity-85"
            >
              Prendre rendez-vous
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeUpSection>
        </div>
      </section>
    </div>
  )
}
