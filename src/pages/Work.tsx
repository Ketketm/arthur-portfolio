import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection } from '../components/SuperEffects'

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
      className="min-h-screen pt-24 pb-16 px-6 lg:px-8 bg-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="section-label mb-4 block">Portfolio</span>
          <h1 className="font-serif text-h1 text-primary mb-4">Réalisations</h1>
          <p className="text-body text-secondary max-w-2xl">
            Chaque site est conçu sur mesure, en fonction de l'identité du cabinet,
            de sa clientèle et de ses objectifs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              className="group rounded-md overflow-hidden cursor-pointer"
            >
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="font-serif text-2xl text-white/60 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                    {project.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <FadeUpSection className="mt-16 p-8 border border-rule rounded-md text-center" delay={0.2}>
          <p className="text-secondary">
            Votre domaine n'est pas dans la liste ?
          </p>
          <p className="text-secondary mt-2">
            Je réalise des sites pour tous types de cabinets.{' '}
            <Link to="/contact" className="text-bronze hover:text-bronze-hover transition-colors">
              Discutons-en
            </Link>
          </p>
        </FadeUpSection>
      </div>
    </motion.div>
  )
}
