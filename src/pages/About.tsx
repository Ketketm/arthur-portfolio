import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection, TextReveal, ClipReveal, MagneticButton } from '../components/SuperEffects'

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
            À propos
          </motion.span>
          <TextReveal
            className="font-serif text-h1 lg:text-hero text-primary mb-6 leading-[1.1]"
            delay={0.1}
            stagger={0.06}
          >
            Arthur Souleil
          </TextReveal>
          <motion.p
            className="text-xl text-secondary leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Je ne suis pas un développeur devenu curieux du droit. Je suis un juriste
            devenu développeur par nécessité — parce que les outils existants ne
            respectaient pas la profession.
          </motion.p>
        </div>
      </div>

      {/* Photo placeholder with clip reveal */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <ClipReveal direction="up" delay={0.1}>
            <div className="aspect-[3/2] md:aspect-[21/9] bg-surface rounded-md flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 1200 400">
                  <defs>
                    <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid)" className="text-muted" />
                </svg>
              </div>
              <div className="text-center text-muted relative z-10">
                <motion.div
                  animate={{ rotate: [0, 1, -1, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="font-serif text-[80px] text-muted/20">AS</span>
                </motion.div>
                <p className="text-sm mt-2">Photo à ajouter</p>
              </div>
            </div>
          </ClipReveal>
        </div>
      </section>

      {/* Philosophy — quote block */}
      <section className="py-16 px-6 lg:px-8 bg-surface border-t border-b border-rule">
        <div className="max-w-content mx-auto">
          <ClipReveal direction="left">
            <div className="p-8 md:p-12 bg-page rounded-md border-l-2 border-bronze relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bronze/[0.02] rounded-full blur-[40px]" />
              <svg className="w-10 h-10 text-bronze/20 mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-serif text-h3 md:text-h2 text-primary italic leading-relaxed relative z-10">
                "Les avocats méritent des outils numériques à la hauteur de leur profession.
                Pas des templates génériques. Pas des agences qui ne comprennent pas le métier."
              </blockquote>
              <cite className="block mt-6 text-secondary not-italic text-sm">
                — Ce que je me dis à chaque projet
              </cite>
            </div>
          </ClipReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection className="mb-12">
            <span className="section-label mb-4 block">Parcours</span>
            <h2 className="font-serif text-h2 text-primary">De juriste à développeur</h2>
          </FadeUpSection>
          <div className="max-w-2xl space-y-0">
            {timeline.map((item, index) => (
              <ClipReveal key={item.year} direction="left" delay={index * 0.12}>
                <div className="flex gap-6 py-8 border-b border-rule last:border-0 group">
                  <div className="flex-shrink-0 w-16 pt-1">
                    <motion.span
                      className="font-mono text-sm font-bold text-bronze"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.year}
                    </motion.span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-primary mb-2 group-hover:text-bronze transition-colors duration-200">{item.title}</h3>
                    <p className="text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-20 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 300">
            <defs>
              <pattern id="about-cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-cta-grid)" />
          </svg>
        </div>
        <div className="max-w-content mx-auto text-center relative z-10">
          <ClipReveal>
            <h2 className="font-serif text-h2 text-page mb-4">
              Envie d'en discuter ?
            </h2>
            <p className="text-body text-page/60 max-w-lg mx-auto mb-8">
              Parlons de votre projet. Première consultation gratuite.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bronze text-white font-semibold text-base rounded-sm transition-all duration-300 hover:bg-bronze-hover hover:shadow-xl hover:shadow-bronze/40"
              >
                Me contacter
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
