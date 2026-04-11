import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
    <div className="min-h-screen pt-24 pb-16 px-6 bg-paper-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium text-navy-900 mb-4">
            Tarifs
          </h1>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Un tarif transparent, sans surprise. Conçu pour les avocats en début d'activité
            qui ont besoin d'une présence professionnelle sans se ruiner.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-navy-900 rounded-2xl overflow-hidden mb-16"
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-500 text-sm font-medium rounded-full mb-4">
                Offre de lancement
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-paper-50 mb-2">
                Création site internet avocat
              </h2>
              <p className="text-paper-100/60">
                Clé en main, sur mesure, livré en 30 jours
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-paper-50 font-medium mb-4">Ce qui est inclus :</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-paper-100/80">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
                    <span className="font-display text-5xl md:text-6xl text-gold-500">690</span>
                    <span className="text-xl text-paper-100">€ TTC</span>
                  </div>
                  <p className="text-paper-100/60 text-sm mb-6">
                    Équivalent à 3-4 factures d'avocat junior
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-paper-100/60">Paiement</span>
                      <span className="text-paper-50">50% à commande, 50% à livraison</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-paper-100/60">Ou en 3 fois</span>
                      <span className="text-paper-50">3 × 230€ sans frais</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gold-500 text-navy-900 font-medium text-center rounded hover:bg-gold-400 transition-colors"
                  >
                    Commencer mon projet
                  </Link>
                </div>
              </div>
            </div>

            {/* Scarcity */}
            <div className="flex items-center justify-center gap-2 text-sm text-paper-100/60 pt-6 border-t border-paper-50/10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Seulement 2 projets par mois — Disponibilité à vérifier</span>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-display text-2xl font-medium text-navy-900 mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-paper-100 rounded-lg border border-navy-700/10"
              >
                <h3 className="font-medium text-navy-900 mb-2">{item.question}</h3>
                <p className="text-navy-700 text-sm leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
