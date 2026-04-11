import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: "L'Échange",
    duration: 'Jours 1-7',
    description: "Un appel de 30 minutes pour comprendre votre cabinet, votre clientèle, vos objectifs. Pas de questionnaire impersonnel. Un vrai dialogue.",
    deliverable: 'Brief complet validé',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'La Maquette',
    duration: 'Jours 7-14',
    description: "Vous recevez une maquette interactive en 7 jours. Pas une image figée. Un site fonctionnel que vous pouvez cliquer, tester, valider.",
    deliverable: 'Maquette interactive',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.077-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.048 4.025a3 3 0 01-4.622 0 2.25 2.25 0 00-2.4-2.245 4.5 4.5 0 008.4 2.245c0-.399-.077-.78-.22-1.128a15.996 15.996 0 006.354-1.265M12 9.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'La Livraison',
    duration: 'Jours 14-30',
    description: "Site en ligne, formation à l'administration, support 30 jours. Et si vous avez besoin de modifier du texte plus tard ? Je vous montre comment.",
    deliverable: 'Site en ligne + Formation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a6 6 0 01-7.38 5.84m4.8-5.84v4.8m-4.8-5.84a6 6 0 017.38-5.84m-7.38 5.84v-4.8m0 4.8h4.8m0 0v-4.8" />
      </svg>
    ),
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
    <div className="min-h-screen pt-24 pb-16 px-6 bg-paper-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium text-navy-900 mb-4">
            La méthode
          </h1>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Un processus simple, transparent, conçu pour les avocats qui n'ont pas le temps de gérer des projets techniques.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-navy-700/20 md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center z-10">
                <span className="text-gold-500 font-mono text-lg font-medium">{step.number}</span>
              </div>

              {/* Content */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
              }`}>
                <div className={`flex items-center gap-3 mb-3 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <span className="text-gold-500">{step.icon}</span>
                  <span className="text-sm text-navy-700 font-mono">{step.duration}</span>
                </div>
                <h3 className="font-display text-2xl font-medium text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-700 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 rounded ${
                  index % 2 === 0 ? 'md:ml-auto' : ''
                }`}>
                  <span className="text-sm font-medium text-navy-900">{step.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-navy-700/10"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <div className="text-sm text-navy-700 mb-1">{signal.label}</div>
                <div className="font-medium text-navy-900">{signal.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
