import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection } from '../components/SuperEffects'

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
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-8 bg-page">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">À propos</span>
          <h1 className="font-serif text-h1 text-primary mb-6">Arthur Souleil</h1>
          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            Je ne suis pas un développeur devenu curieux du droit. Je suis un juriste
            devenu développeur par nécessité — parce que les outils existants ne
            respectaient pas la profession.
          </p>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="aspect-[3/2] md:aspect-[21/9] bg-surface rounded-md flex items-center justify-center">
            <div className="text-center text-muted">
              <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Photo à ajouter</p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <FadeUpSection className="mb-16 p-8 bg-surface rounded-md border-l-2 border-bronze" delay={0.1}>
          <blockquote className="font-serif text-h3 md:text-h2 text-primary italic leading-relaxed">
            "Les avocats méritent des outils numériques à la hauteur de leur profession.
            Pas des templates génériques. Pas des agences qui ne comprennent pas le métier."
          </blockquote>
          <cite className="block mt-4 text-secondary not-italic text-sm">
            — Ce que je me dis à chaque projet
          </cite>
        </FadeUpSection>

        {/* Timeline */}
        <FadeUpSection delay={0.15}>
          <h2 className="font-serif text-h2 text-primary mb-8">Le parcours</h2>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                className="flex gap-6 py-6 border-b border-rule last:border-0"
              >
                <div className="flex-shrink-0 w-16 pt-1">
                  <span className="font-mono text-sm font-medium text-bronze">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-primary mb-2">{item.title}</h3>
                  <p className="text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUpSection>

        {/* Contact CTA */}
        <FadeUpSection className="mt-16 text-center" delay={0.3}>
          <p className="text-secondary mb-4">Vous voulez en savoir plus ? Discutons.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-bronze hover:text-bronze-hover font-medium transition-colors"
          >
            Me contacter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeUpSection>
      </div>
    </div>
  )
}
