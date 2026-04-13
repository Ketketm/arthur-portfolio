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
      <div className="pt-28 pb-20 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto">
          <motion.span
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            À propos
          </motion.span>
          <TextReveal
            className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary mb-8 leading-[1.05] tracking-[-0.02em]"
            delay={0.1}
            stagger={0.1}
          >
            Verne
          </TextReveal>
          <motion.p
            className="text-xl text-secondary leading-relaxed max-w-2xl"
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

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 bg-primary">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="grid md:grid-cols-3 gap-16 md:gap-12">
              {[
                { title: 'Spécialisation', desc: 'Un seul secteur, une seule obsession : le digital juridique. Nous ne faisons que ça.' },
                { title: 'Exigence', desc: 'Chaque pixel, chaque mot, chaque interaction est pensé pour votre profession.' },
                { title: 'Transparence', desc: 'Un tarif clair, un processus simple, un interlocuteur dédié. Pas de surprises.' },
              ].map((v, i) => (
                <div key={v.title}>
                  <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-2xl text-page mt-3 mb-3">{v.title}</h3>
                  <p className="text-sm text-page/50 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* Quote */}
      <section className="py-28 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto max-w-3xl">
          <ClipReveal direction="up">
            <blockquote className="font-serif text-[clamp(1.3rem,3vw,2.2rem)] text-primary italic leading-relaxed text-center">
              "Les avocats méritent des outils numériques à la hauteur de leur profession.
              Pas des templates génériques. Pas des agences qui ne comprennent pas le métier."
            </blockquote>
            <cite className="block mt-8 text-center text-secondary not-italic text-sm">
              — La conviction qui guide chacun de nos projets
            </cite>
          </ClipReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Parcours</span>
            <h2 className="font-serif text-h2 md:text-[2.8rem] text-primary leading-[1.15]">Notre parcours</h2>
          </FadeUpSection>
          <div className="max-w-2xl">
            {timeline.map((item, index) => (
              <ClipReveal key={item.year} direction="left" delay={index * 0.1}>
                <div className="flex gap-8 py-10 border-b border-rule group">
                  <div className="flex-shrink-0">
                    <span className="font-mono text-sm font-bold text-accent">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl text-primary mb-3 group-hover:text-accent transition-colors duration-200">{item.title}</h3>
                    <p className="text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-page mb-4 leading-tight">
              Envie d'en discuter ?
            </h2>
            <p className="text-page/50 max-w-md mx-auto mb-10">
              Parlons de votre projet. Première consultation gratuite.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-page/20 text-page text-sm tracking-wide rounded-sm hover:bg-page hover:text-primary transition-all duration-300"
              >
                Nous contacter
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
