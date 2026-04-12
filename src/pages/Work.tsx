import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TextReveal, ClipReveal, MagneticButton, StaggerContainer, StaggerItem } from '../components/SuperEffects'

const projects = [
  { name: 'Maître Sophie Renard', bar: 'Barreau de Paris', domain: 'Contentieux', year: '2024', color: '#D4C5A0' },
  { name: 'Cabinet Dupont & Associés', bar: 'Barreau de Lyon', domain: 'Affaires', year: '2024', color: '#B8C4C0' },
  { name: 'Maître Pierre Martin', bar: 'Barreau de Bordeaux', domain: 'Famille', year: '2024', color: '#C9BBA8' },
  { name: 'SCP Lefèvre & Moreau', bar: 'Barreau de Lille', domain: 'Immobilier', year: '2023', color: '#A8B8C9' },
  { name: 'Maître Claire Bernard', bar: 'Barreau de Nantes', domain: 'Social', year: '2023', color: '#C4B8A0' },
  { name: 'Cabinet Rivet', bar: 'Barreau de Marseille', domain: 'Pénal', year: '2023', color: '#B0C4B8' },
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
      <div className="pt-28 pb-16 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto">
          <motion.span
            className="section-label mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          <TextReveal
            className="font-serif text-h1 lg:text-hero text-primary mb-6 leading-[1.1]"
            delay={0.1}
            stagger={0.06}
          >
            Réalisations
          </TextReveal>
          <motion.p
            className="text-body text-secondary max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Chaque site est conçu sur mesure, en fonction de l'identité du cabinet,
            de sa clientèle et de ses objectifs.
          </motion.p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {projects.map((project) => (
              <StaggerItem key={project.name}>
                <div className="group rounded-md overflow-hidden cursor-pointer">
                  <div
                    className="aspect-[4/3] relative overflow-hidden"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                      <span className="font-serif text-2xl text-white/60 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                        {project.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5 bg-surface border-t border-rule">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-label uppercase text-bronze">{project.domain}</span>
                      <span className="text-muted">·</span>
                      <span className="font-mono text-label uppercase text-muted">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-lg text-primary group-hover:text-bronze transition-colors duration-200">{project.name}</h3>
                    <p className="text-sm text-secondary mt-1">{project.bar}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* CTA band */}
      <section className="py-20 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 300">
            <defs>
              <pattern id="work-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#work-grid)" />
          </svg>
        </div>
        <div className="max-w-content mx-auto text-center relative z-10">
          <ClipReveal>
            <h2 className="font-serif text-h2 text-page mb-4">
              Votre cabinet mérite la même attention
            </h2>
            <p className="text-body text-page/60 max-w-lg mx-auto mb-8">
              Je réalise des sites pour tous types de cabinets, quelle que soit votre spécialité.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bronze text-white font-semibold text-base rounded-sm transition-all duration-300 hover:bg-bronze-hover hover:shadow-xl hover:shadow-bronze/40"
              >
                Discutons de votre projet
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </MagneticButton>
          </ClipReveal>
        </div>
      </section>
    </motion.div>
  )
}
