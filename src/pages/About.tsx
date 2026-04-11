import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2022',
    title: 'UT1 Capitole',
    description: 'Licence de droit à Toulouse. Découverte du droit et de sa rigueur. Première approche des obligations, du droit des affaires, des contrats.',
  },
  {
    year: '2023',
    title: 'Assas Paris II',
    description: "Master 1 à Paris. Approfondissement, spécialisation. Immersion dans l'excellence juridique parisienne. Premiers contacts avec la profession.",
  },
  {
    year: '2024',
    title: 'Premier site pour un avocat',
    description: "La rencontre du droit et du code. Un confrère en début d'activité avait besoin d'un site. J'ai appris à coder pour le lui faire. Ça a fonctionné.",
  },
  {
    year: '2025',
    title: 'LexConfig',
    description: "Un outil pour générer des identités digitales sur mesure. Maquettes dynamiques, chartes graphiques automatisées. La technologie au service des avocats.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-paper-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium text-navy-900 mb-6">
            À propos
          </h1>
          <p className="text-xl text-navy-700 leading-relaxed max-w-3xl">
            Je ne suis pas un développeur devenu curieux du droit. Je suis un juriste
            devenu développeur par nécessité — parce que les outils existants ne
            respectaient pas la profession.
          </p>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="aspect-[3/2] md:aspect-[21/9] bg-navy-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-paper-100/40">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>Votre photo ici</p>
              <p className="text-sm mt-2">(Professionnelle mais chaleureuse)</p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 p-8 bg-paper-100 rounded-lg border-l-4 border-gold-500"
        >
          <blockquote className="font-display text-2xl md:text-3xl text-navy-900 italic leading-relaxed">
            "Les avocats méritent des outils numériques à la hauteur de leur profession.
            Pas des templates génériques. Pas des agences qui ne comprennent pas le métier."
          </blockquote>
          <cite className="block mt-4 text-navy-700 not-italic">
            — Ce que je me dis à chaque projet
          </cite>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="font-display text-2xl font-medium text-navy-900 mb-8">
            Le parcours
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-16 pt-1">
                  <span className="font-mono text-gold-500 font-medium">{item.year}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-navy-700/10 last:border-0">
                  <h3 className="font-display text-xl font-medium text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-700 mb-4">
            Vous voulez en savoir plus ? Discutons.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium"
          >
            Me contacter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
