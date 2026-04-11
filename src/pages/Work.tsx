import { motion } from 'framer-motion'

const projects = [
  { name: 'Maître Sophie Renard', bar: 'Barreau de Paris', domain: 'Contentieux', year: '2024' },
  { name: 'Cabinet Dupont & Associés', bar: 'Barreau de Lyon', domain: 'Affaires', year: '2024' },
  { name: 'Maître Pierre Martin', bar: 'Barreau de Bordeaux', domain: 'Famille', year: '2024' },
  { name: 'SCP Lefèvre & Moreau', bar: 'Barreau de Lille', domain: 'Immobilier', year: '2023' },
  { name: 'Maître Claire Bernard', bar: 'Barreau de Nantes', domain: 'Social', year: '2023' },
  { name: 'Cabinet Rivet', bar: 'Barreau de Marseille', domain: 'Pénal', year: '2023' },
]

const filters = ['Tous', 'Contentieux', 'Affaires', 'Famille', 'Immobilier', 'Social', 'Pénal']

export default function Work() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-paper-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium text-navy-900 mb-4">
            Réalisations
          </h1>
          <p className="text-navy-700 max-w-2xl">
            Chaque site est conçu sur mesure, en fonction de l'identité du cabinet,
            de sa clientèle et de ses objectifs.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-navy-900 text-paper-50'
                  : 'bg-paper-100 text-navy-700 hover:bg-navy-700/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] bg-navy-800 rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy-900/70">
                <span className="px-6 py-3 bg-gold-500 text-navy-900 font-medium rounded">
                  Voir la maquette
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gold-500 uppercase tracking-wider">{project.domain}</span>
                  <span className="text-xs text-paper-100/40">·</span>
                  <span className="text-xs text-paper-100/40">{project.year}</span>
                </div>
                <h3 className="font-display text-lg text-paper-50">{project.name}</h3>
                <p className="text-sm text-paper-100/60">{project.bar}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 border border-dashed border-navy-700/30 rounded-lg text-center"
        >
          <p className="text-navy-700">
            Votre domaine n'est pas dans la liste ?
          </p>
          <p className="text-navy-700 mt-2">
            Je réalise des sites pour tous types de cabinets.{' '}
            <a href="/contact" className="text-gold-500 hover:underline">
              Discutons-en
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
