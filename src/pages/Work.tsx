import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection } from '../components/SuperEffects'

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
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-8 bg-bg">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="section-label mb-4 block">Portfolio</span>
          <h1 className="font-serif text-h1 text-text-primary mb-4">Réalisations</h1>
          <p className="text-body text-text-secondary max-w-2xl">
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
              className="group card-hover bg-surface rounded-md overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] bg-surface-hover relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl text-text-tertiary group-hover:text-text-primary transition-colors duration-200">
                    {project.name}
                  </span>
                </div>
              </div>
              <div className="p-5 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-label uppercase text-accent">{project.domain}</span>
                  <span className="text-text-tertiary">·</span>
                  <span className="font-mono text-label uppercase text-text-tertiary">{project.year}</span>
                </div>
                <h3 className="font-serif text-lg text-text-primary">{project.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{project.bar}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <FadeUpSection className="mt-16 p-8 border border-border rounded-md text-center" delay={0.2}>
          <p className="text-text-secondary">
            Votre domaine n'est pas dans la liste ?
          </p>
          <p className="text-text-secondary mt-2">
            Je réalise des sites pour tous types de cabinets.{' '}
            <Link to="/contact" className="text-accent hover:text-accent-hover transition-colors">
              Discutons-en
            </Link>
          </p>
        </FadeUpSection>
      </div>
    </div>
  )
}
