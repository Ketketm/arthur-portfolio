import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection, TextReveal, ClipReveal, CountUp, MagneticButton } from '../components/SuperEffects'

const steps = [
  {
    number: '01',
    title: "L'Échange",
    duration: 'Jours 1–7',
    description: "Un appel de 30 minutes pour comprendre votre cabinet, votre clientèle, vos objectifs. Pas de questionnaire impersonnel. Un vrai dialogue.",
    deliverable: 'Brief complet validé',
  },
  {
    number: '02',
    title: 'La Maquette',
    duration: 'Jours 7–14',
    description: "Vous recevez une maquette interactive en 7 jours. Pas une image figée. Un site fonctionnel que vous pouvez cliquer, tester, valider.",
    deliverable: 'Maquette interactive',
  },
  {
    number: '03',
    title: 'La Livraison',
    duration: 'Jours 14–30',
    description: "Site en ligne, formation à l'administration, support 30 jours. Besoin de modifier du texte plus tard ? Nous vous montrons comment.",
    deliverable: 'Site en ligne + Formation',
  },
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
      <div className="pt-28 pb-20 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto">
          <motion.span
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Processus
          </motion.span>
          <TextReveal
            className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary mb-6 leading-[1.05] tracking-[-0.02em]"
            delay={0.1}
            stagger={0.08}
          >
            La méthode
          </TextReveal>
          <motion.p
            className="text-secondary max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Un processus simple, transparent, conçu pour les avocats qui n'ont pas
            le temps de gérer des projets techniques.
          </motion.p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20">
            <div>
              <FadeUpSection>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">3 étapes</span>
                <h2 className="font-serif text-h2 md:text-[2.8rem] text-primary leading-[1.15]">
                  Du brief<br />à la mise en ligne
                </h2>
              </FadeUpSection>
            </div>
            <div className="border-t border-rule">
              {steps.map((step, i) => (
                <ClipReveal key={step.number} direction="left" delay={i * 0.12}>
                  <div className="py-10 border-b border-rule group">
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-[11px] text-accent mt-1.5">{step.number}</span>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="font-serif text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                            {step.title}
                          </h3>
                          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-1 md:mt-0">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-sm text-secondary leading-relaxed mb-4 max-w-lg">{step.description}</p>
                        <div className="inline-flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary">{step.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ClipReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-t border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-rule">
            {[
              { value: 30, suffix: 'j', label: 'Délai max' },
              { value: 3, suffix: '', label: 'Étapes' },
              { value: 15, suffix: '+', label: 'Projets livrés' },
              { value: 100, suffix: '%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="py-12 md:py-16 text-center">
                <div className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-primary leading-none">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 bg-surface relative overflow-hidden">
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-primary mb-4 leading-tight">
              Prêt à commencer ?
            </h2>
            <p className="text-secondary max-w-md mx-auto mb-10">
              Première consultation gratuite. Discutons de vos besoins en 30 minutes.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-sm tracking-wide rounded-sm hover:bg-accent/80 transition-all duration-300"
              >
                Prendre rendez-vous
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
