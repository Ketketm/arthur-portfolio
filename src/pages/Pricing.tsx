import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FadeUpSection, TextReveal, ClipReveal, CountUp, MagneticButton, StaggerContainer, StaggerItem } from '../components/SuperEffects'

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
    question: 'Pourquoi ce tarif ?',
    answer: "Notre structure légère et notre spécialisation nous permettent d'être efficaces. Pas de processus inutiles, pas de couches hiérarchiques. L'expertise sectorielle réduit le temps de conception. C'est un tarif de lancement honnête.",
  },
  {
    question: 'Et après la livraison ?',
    answer: "Vous gérez le site. Nous vous formons à la mise à jour du contenu. Pas de contrat de maintenance caché, pas de facturation récurrente obligatoire. Vous êtes propriétaire de votre site.",
  },
  {
    question: "Je n'ai pas de logo ?",
    answer: "Nous créons votre identité visuelle dans la charte graphique : typographie, couleurs, éléments graphiques. Vous aurez un logo simple et élégant, adapté au web.",
  },
  {
    question: 'Le référencement ?',
    answer: "SEO technique intégré : vitesse de chargement, version mobile, balises meta structurées. Pour le contenu rédactionnel, nous pouvons vous recommander des rédacteurs juridiques ou vous former.",
  },
  {
    question: 'Les délais ?',
    answer: "7 jours pour la maquette, 30 jours maximum pour la livraison. Nous limitons nos engagements à quelques projets par mois pour garantir cette qualité.",
  },
]

export default function Pricing() {
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
            Investissement
          </motion.span>
          <TextReveal
            className="font-serif text-h1 lg:text-hero text-primary mb-6 leading-[1.1]"
            delay={0.1}
            stagger={0.04}
          >
            Un tarif simple, sans surprise
          </TextReveal>
          <motion.p
            className="text-body text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Conçu pour les avocats en début d'activité qui ont besoin d'une présence professionnelle sans se ruiner.
          </motion.p>
        </div>
      </div>

      {/* Pricing card */}
      <section className="py-20 px-6 lg:px-8">
        <ClipReveal direction="up" delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-surface border border-rule rounded-md p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-bronze/[0.03] rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="font-mono text-label uppercase text-bronze bg-bronze-light inline-block px-3 py-1.5 rounded-sm mb-6">
                  Offre de lancement
                </div>

                <div className="font-serif text-[64px] leading-none text-primary mb-1">
                  <CountUp value={690} duration={2} /> <span className="font-sans text-xl text-secondary">€ TTC</span>
                </div>
                <p className="text-sm text-secondary mb-8">Clé en main, sur mesure, livré en 30 jours</p>

                <ul className="space-y-0 mb-8">
                  {included.map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 py-3 border-b border-rule text-sm text-primary"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <svg className="w-3.5 h-3.5 text-bronze flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <MagneticButton className="block" strength={0.1}>
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-primary text-page font-semibold text-center text-sm rounded-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  >
                    Commencer mon projet
                  </Link>
                </MagneticButton>

                <p className="text-center text-xs text-muted mt-4">
                  50% à commande, 50% à livraison — ou 3 × 230€ sans frais
                </p>
              </div>
            </div>
          </div>
        </ClipReveal>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8 bg-surface border-t border-rule">
        <div className="max-w-content mx-auto">
          <FadeUpSection className="text-center mb-12">
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="font-serif text-h2 text-primary">Questions fréquentes</h2>
          </FadeUpSection>
          <StaggerContainer className="max-w-2xl mx-auto space-y-4" staggerDelay={0.06}>
            {faq.map((item) => (
              <StaggerItem key={item.question}>
                <div className="p-6 bg-page rounded-md border border-rule hover:border-bronze/20 transition-colors duration-300 group">
                  <h3 className="font-medium text-primary mb-2 group-hover:text-bronze transition-colors duration-200">{item.question}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-20 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 300">
            <defs>
              <pattern id="pricing-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-grid)" />
          </svg>
        </div>
        <div className="max-w-content mx-auto text-center relative z-10">
          <ClipReveal>
            <h2 className="font-serif text-h2 text-page mb-4">
              Convaincu ?
            </h2>
            <p className="text-body text-page/60 max-w-lg mx-auto mb-8">
              Réservez votre créneau. Places limitées chaque mois.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bronze text-white font-semibold text-base rounded-sm transition-all duration-300 hover:bg-bronze-hover hover:shadow-xl hover:shadow-bronze/40"
              >
                Réserver mon créneau
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
