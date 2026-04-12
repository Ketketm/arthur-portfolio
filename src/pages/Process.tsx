import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection, TextReveal, ClipReveal, CountUp, MagneticButton } from '../components/SuperEffects'

const steps = [
  {
    number: '01',
    title: "L'Échange",
    duration: 'Jours 1-7',
    description: "Un appel de 30 minutes pour comprendre votre cabinet, votre clientèle, vos objectifs. Pas de questionnaire impersonnel. Un vrai dialogue.",
    deliverable: 'Brief complet validé',
  },
  {
    number: '02',
    title: 'La Maquette',
    duration: 'Jours 7-14',
    description: "Vous recevez une maquette interactive en 7 jours. Pas une image figée. Un site fonctionnel que vous pouvez cliquer, tester, valider.",
    deliverable: 'Maquette interactive',
  },
  {
    number: '03',
    title: 'La Livraison',
    duration: 'Jours 14-30',
    description: "Site en ligne, formation à l'administration, support 30 jours. Et si vous avez besoin de modifier du texte plus tard ? Nous vous montrons comment.",
    deliverable: 'Site en ligne + Formation',
  },
]

const trustSignals = [
  { label: 'Spécialisation', value: "Cabinets d'avocats" },
  { label: 'Projets livrés', value: '+15' },
  { label: 'Conformité', value: 'Obligations CNB respectées' },
  { label: 'Délai moyen', value: '30 jours' },
]

export default function Process() {
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
        <div className="max-w-content mx-auto text-center">
          <motion.span
            className="section-label mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Processus
          </motion.span>
          <TextReveal
            className="font-serif text-h1 lg:text-hero text-primary mb-6 leading-[1.1]"
            delay={0.1}
            stagger={0.08}
          >
            La méthode
          </TextReveal>
          <motion.p
            className="text-body text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Un processus simple, transparent, conçu pour les avocats qui n'ont pas le temps de gérer des projets techniques.
          </motion.p>
        </div>
      </div>

      {/* Steps — timeline with clip reveals */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, index) => (
            <ClipReveal key={step.number} direction="left" delay={index * 0.15}>
              <div className="relative pl-16 pb-14 border-l border-rule last:pb-0 group">
                <motion.div
                  className="absolute left-0 -translate-x-1/2 w-10 h-10 bg-page border-2 border-rule-strong rounded-full flex items-center justify-center group-hover:border-bronze transition-colors duration-300"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="font-mono text-xs font-bold text-bronze">{step.number}</span>
                </motion.div>

                <div className="font-mono text-label uppercase text-bronze mb-3">{step.duration}</div>
                <h3 className="font-serif text-h3 text-primary mb-3">{step.title}</h3>
                <p className="text-body text-secondary leading-relaxed mb-4">{step.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-rule rounded-sm">
                  <svg className="w-3.5 h-3.5 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-primary">{step.deliverable}</span>
                </div>
              </div>
            </ClipReveal>
          ))}
        </div>
      </section>

      {/* Trust signals — stats band */}
      <section className="border-t border-b border-rule bg-surface">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-rule">
            {trustSignals.map((signal) => (
              <FadeUpSection key={signal.label} className="py-10 text-center px-4">
                <div className="font-mono text-label uppercase text-muted mb-2">{signal.label}</div>
                <div className="font-serif text-lg text-primary">{signal.value}</div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline stats */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection className="text-center mb-16">
            <span className="section-label mb-4 block">En chiffres</span>
            <h2 className="font-serif text-h2 text-primary">Un processus éprouvé</h2>
          </FadeUpSection>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <FadeUpSection className="text-center" delay={0}>
              <div className="font-serif text-h1 text-bronze">
                <CountUp value={30} suffix="j" />
              </div>
              <div className="font-mono text-label uppercase text-muted mt-2">Délai max</div>
            </FadeUpSection>
            <FadeUpSection className="text-center" delay={0.1}>
              <div className="font-serif text-h1 text-bronze">
                <CountUp value={3} />
              </div>
              <div className="font-mono text-label uppercase text-muted mt-2">Étapes</div>
            </FadeUpSection>
            <FadeUpSection className="text-center" delay={0.2}>
              <div className="font-serif text-h1 text-bronze">
                <CountUp value={100} suffix="%" />
              </div>
              <div className="font-mono text-label uppercase text-muted mt-2">Satisfaction</div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-20 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 300">
            <defs>
              <pattern id="process-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#process-grid)" />
          </svg>
        </div>
        <div className="max-w-content mx-auto text-center relative z-10">
          <ClipReveal>
            <h2 className="font-serif text-h2 text-page mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-body text-page/60 max-w-lg mx-auto mb-8">
              Première consultation gratuite. Discutons de vos besoins en 30 minutes.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bronze text-white font-semibold text-base rounded-sm transition-all duration-300 hover:bg-bronze-hover hover:shadow-xl hover:shadow-bronze/40"
              >
                Prendre rendez-vous
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
