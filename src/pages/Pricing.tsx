import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FadeUpSection } from '../components/SuperEffects'

const included = [
  'Design sur mesure',
  'Maquette interactive',
  'Développement front-end',
  'Optimisation mobile',
  'Charte graphique complète',
  'Formation administration',
  'Support 30 jours post-livraison',
  'Code source livré',
]

const faq = [
  {
    question: 'Pourquoi si peu cher ?',
    answer: "Je suis étudiant, pas agence. Pas de loyer, pas de salariés, pas de structure à rentabiliser. Maîtrise technique + connaissance métier = efficacité. C'est un tarif de lancement honnête.",
  },
  {
    question: 'Et après la livraison ?',
    answer: "Vous gérez le site. Je vous forme à la mise à jour du contenu. Pas de contrat de maintenance caché, pas de facturation récurrente obligatoire. Vous êtes propriétaire de votre site.",
  },
  {
    question: "Je n'ai pas de logo ?",
    answer: "Je crée votre identité visuelle dans la charte graphique : typographie, couleurs, éléments graphiques. Vous aurez un logo simple et élégant, adapté au web.",
  },
  {
    question: 'Le référencement ?',
    answer: "SEO technique intégré : vitesse de chargement, version mobile, balises meta structurées. Pour le contenu rédactionnel, je peux vous recommander des rédacteurs juridiques ou vous former.",
  },
  {
    question: 'Les délais ?',
    answer: "7 jours pour la maquette, 30 jours maximum pour la livraison. Je ne prends que 2 projets par mois pour garantir cette qualité et ces délais.",
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-8 bg-page">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Investissement</span>
          <h1 className="font-serif text-h1 text-primary mb-4">Un tarif simple, sans surprise</h1>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            Conçu pour les avocats en début d'activité qui ont besoin d'une présence professionnelle sans se ruiner.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="bg-surface border border-rule rounded-md p-8 md:p-12">
            <div className="font-mono text-label uppercase text-bronze bg-bronze-light inline-block px-3 py-1.5 rounded-sm mb-6">
              Offre de lancement
            </div>

            <div className="font-serif text-[64px] leading-none text-primary mb-1">
              690 <span className="font-sans text-xl text-secondary">€ TTC</span>
            </div>
            <p className="text-sm text-secondary mb-8">Clé en main, sur mesure, livré en 30 jours</p>

            <ul className="space-y-0 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 py-3 border-b border-rule text-sm text-primary">
                  <span className="text-bronze font-semibold text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="block w-full py-4 bg-primary text-page font-semibold text-center text-sm rounded-sm transition-opacity duration-200 hover:opacity-85"
            >
              Commencer mon projet
            </Link>

            <p className="text-center text-xs text-muted mt-4">
              50% à commande, 50% à livraison — ou 3 × 230€ sans frais
            </p>
          </div>
        </motion.div>

        {/* FAQ */}
        <FadeUpSection delay={0.1}>
          <h2 className="font-serif text-h2 text-primary mb-8 text-center">Questions fréquentes</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.06, ease: 'easeOut' }}
                className="p-6 bg-surface rounded-md border border-rule"
              >
                <h3 className="font-medium text-primary mb-2">{item.question}</h3>
                <p className="text-sm text-secondary leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </FadeUpSection>
      </div>
    </div>
  )
}
