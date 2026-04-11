import { motion } from 'framer-motion'
import { FadeUpSection } from '../components/SuperEffects'

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
    description: "Site en ligne, formation à l'administration, support 30 jours. Et si vous avez besoin de modifier du texte plus tard ? Je vous montre comment.",
    deliverable: 'Site en ligne + Formation',
  },
]

const trustSignals = [
  { label: 'Formation', value: 'UT1 Capitole + Assas Paris II' },
  { label: 'Préparation', value: 'CRFPA 2025' },
  { label: 'Conformité', value: 'Obligations CNB respectées' },
  { label: 'Délai', value: '30 jours maximum' },
]

export default function Process() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-8 bg-page">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Processus</span>
          <h1 className="font-serif text-h1 text-primary mb-4">La méthode</h1>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            Un processus simple, transparent, conçu pour les avocats qui n'ont pas le temps de gérer des projets techniques.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              className="relative pl-16 pb-12 border-l border-rule last:pb-0"
            >
              <div className="absolute left-0 -translate-x-1/2 w-8 h-8 bg-page border border-rule-strong rounded-full flex items-center justify-center">
                <span className="font-mono text-xs font-medium text-bronze">{step.number}</span>
              </div>

              <div className="font-mono text-label uppercase text-bronze mb-3">{step.duration}</div>
              <h3 className="font-serif text-h3 text-primary mb-3">{step.title}</h3>
              <p className="text-body text-secondary leading-relaxed mb-4">{step.description}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bronze-light rounded-sm">
                <span className="text-sm font-medium text-primary">{step.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <FadeUpSection className="mt-20 pt-16 border-t border-rule" delay={0.2}>
          <div className="grid md:grid-cols-4 gap-8">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <div className="font-mono text-label uppercase text-muted mb-2">{signal.label}</div>
                <div className="font-medium text-primary">{signal.value}</div>
              </div>
            ))}
          </div>
        </FadeUpSection>
      </div>
    </div>
  )
}
