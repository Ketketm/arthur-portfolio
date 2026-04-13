import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FadeUpSection, TextReveal, ClipReveal, CountUp, MagneticButton } from '../components/SuperEffects'

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
    answer: "Notre structure légère et notre spécialisation nous permettent d'être efficaces. Pas de processus inutiles, pas de couches hiérarchiques. L'expertise sectorielle réduit le temps de conception.",
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
      <div className="pt-28 pb-20 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto">
          <motion.span
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Investissement
          </motion.span>
          <TextReveal
            className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary mb-6 leading-[1.05] tracking-[-0.02em]"
            delay={0.1}
            stagger={0.04}
          >
            Un tarif simple, sans surprise
          </TextReveal>
          <motion.p
            className="text-secondary max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Un investissement transparent pour une présence digitale à la hauteur de votre cabinet.
          </motion.p>
        </div>
      </div>

      {/* Pricing */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-20">
            {/* Price */}
            <ClipReveal direction="left" delay={0.1}>
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent inline-block mb-8">
                  Offre de lancement
                </span>
                <div className="font-serif text-[clamp(4rem,10vw,7rem)] leading-none text-primary">
                  <CountUp value={690} duration={2} />
                </div>
                <div className="font-sans text-secondary mt-2 mb-8">€ TTC — Clé en main, livré en 30 jours</div>
                <MagneticButton className="block" strength={0.1}>
                  <Link
                    to="/contact"
                    className="block w-full md:w-auto md:inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-page font-medium text-sm text-center rounded-sm transition-all duration-200 hover:opacity-80"
                  >
                    Commencer mon projet
                    <svg className="w-4 h-4 hidden md:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </Link>
                </MagneticButton>
                <p className="text-xs text-muted mt-4">
                  50% à commande, 50% à livraison — ou 3 × 230€ sans frais
                </p>
              </div>
            </ClipReveal>

            {/* Included */}
            <ClipReveal direction="right" delay={0.2}>
              <div className="border-t border-rule">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-4 py-4 border-b border-rule">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 lg:px-8 border-t border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">FAQ</span>
              <h2 className="font-serif text-h2 md:text-[2.8rem] text-primary leading-[1.15]">
                Questions<br />fréquentes
              </h2>
            </FadeUpSection>
            <div className="border-t border-rule">
              {faq.map((item, i) => (
                <ClipReveal key={item.question} direction="left" delay={i * 0.08}>
                  <div className="py-8 border-b border-rule group">
                    <h3 className="font-serif text-lg md:text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                      {item.question}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed max-w-lg">{item.answer}</p>
                  </div>
                </ClipReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 bg-surface relative overflow-hidden">
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-primary mb-4 leading-tight">
              Convaincu ?
            </h2>
            <p className="text-secondary max-w-md mx-auto mb-10">
              Réservez votre créneau. Places limitées chaque mois.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-sm tracking-wide rounded-sm hover:bg-accent/80 transition-all duration-300"
              >
                Réserver mon créneau
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
