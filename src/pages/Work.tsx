import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TextReveal, ClipReveal, MagneticButton, FadeUpSection } from '../components/SuperEffects'

const projects = [
  { name: 'Maître Sophie Renard', bar: 'Barreau de Paris', domain: 'Contentieux', year: '2024' },
  { name: 'Cabinet Dupont & Associés', bar: 'Barreau de Lyon', domain: 'Affaires', year: '2024' },
  { name: 'Maître Pierre Martin', bar: 'Barreau de Bordeaux', domain: 'Famille', year: '2024' },
  { name: 'SCP Lefèvre & Moreau', bar: 'Barreau de Lille', domain: 'Immobilier', year: '2023' },
  { name: 'Maître Claire Bernard', bar: 'Barreau de Nantes', domain: 'Social', year: '2023' },
  { name: 'Cabinet Rivet', bar: 'Barreau de Marseille', domain: 'Pénal', year: '2023' },
]

export default function Work() {
  return (
    <motion.div
      className="min-h-screen bg-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="pt-28 pb-20 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto">
          <motion.span
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-bronze block mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          <TextReveal
            className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary mb-6 leading-[1.05] tracking-[-0.02em]"
            delay={0.1}
            stagger={0.06}
          >
            Réalisations
          </TextReveal>
          <motion.p
            className="text-secondary max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Chaque site est conçu sur mesure, en fonction de l'identité du cabinet,
            de sa clientèle et de ses objectifs.
          </motion.p>
        </div>
      </div>

      {/* Project List */}
      <div className="px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          {projects.map((project, i) => (
            <ClipReveal key={project.name} direction="left" delay={i * 0.06}>
              <div className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-rule hover:pl-4 transition-all duration-300 cursor-pointer">
                <div className="flex items-start md:items-center gap-5 md:gap-8 mb-3 md:mb-0">
                  <span className="font-mono text-[11px] text-muted mt-1 md:mt-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-3xl text-primary group-hover:text-bronze transition-colors duration-300 mb-1 md:mb-0">
                      {project.name}
                    </h3>
                    <span className="md:hidden font-mono text-[10px] tracking-[0.15em] uppercase text-muted">{project.bar}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 md:gap-10 pl-10 md:pl-0">
                  <span className="hidden md:block font-mono text-[10px] tracking-[0.2em] uppercase text-muted w-32">{project.bar}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-bronze w-24">{project.domain}</span>
                  <span className="font-mono text-sm text-muted">{project.year}</span>
                  <svg className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-3 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </div>
              </div>
            </ClipReveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="mt-20 py-28 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-page mb-4 leading-tight">
              Votre cabinet mérite la même attention
            </h2>
            <p className="text-page/50 max-w-md mx-auto mb-10">
              Nous réalisons des sites pour tous types de cabinets, quelle que soit votre spécialité.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bronze text-white font-medium rounded-sm transition-all duration-300 hover:bg-bronze-hover hover:shadow-xl hover:shadow-bronze/30"
              >
                Discutons de votre projet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                </svg>
              </Link>
            </MagneticButton>
          </FadeUpSection>
        </div>
      </section>
    </motion.div>
  )
}
