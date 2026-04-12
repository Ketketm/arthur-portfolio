import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection, TextReveal, ClipReveal, MagneticButton } from '../components/SuperEffects'

const timeline = [
  {
    year: '2021',
    title: 'Les prémices',
    description: "Premiers sites conçus pour des avocats en début d'activité. La conviction que le secteur juridique méritait mieux que des templates génériques.",
  },
  {
    year: '2022',
    title: 'Spécialisation',
    description: "Choix délibéré de se concentrer exclusivement sur les cabinets d'avocats. Développement d'une expertise CNB et déontologie numérique.",
  },
  {
    year: '2023',
    title: 'Premiers grands cabinets',
    description: "Accompagnement de cabinets multi-associés. Identités digitales complètes, sites corporate, landing pages.",
  },
  {
    year: '2024',
    title: 'Naissance de Verne',
    description: "Structuration en agence. Une équipe dédiée au digital juridique. +15 cabinets accompagnés à travers la France.",
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
            Verne
          </TextReveal>
          <motion.p
            className="text-xl text-secondary leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Verne est née d'un constat : les cabinets d'avocats méritent des outils
            numériques à la hauteur de leur profession. Pas des templates. Pas des
            agences généralistes. Un studio dédié, qui comprend les contraintes et
            les codes du métier.
          </motion.p>
        </div>
      </div>

      {/* Values band */}
      <section className="py-16 px-6 lg:px-8 bg-primary">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Spécialisation', desc: 'Un seul secteur, une seule obsession : le digital juridique.' },
              { title: 'Exigence', desc: 'Chaque pixel, chaque mot, chaque interaction est pensé pour votre profession.' },
              { title: 'Transparence', desc: 'Un tarif clair, un processus simple, un interlocuteur dédié.' },
            ].map((v) => (
              <FadeUpSection key={v.title}>
                <div className="border-l border-bronze/30 pl-6">
                  <h3 className="font-serif text-xl text-page mb-2">{v.title}</h3>
                  <p className="text-sm text-page/60 leading-relaxed">{v.desc}</p>
                </div>
              </FadeUpSection>
            ))}
          </div>
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
                — Notre philosophie
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
            <h2 className="font-serif text-h2 text-primary">Notre parcours</h2>
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
                Nous contacter
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
