import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection, TextReveal, ClipReveal, CountUp, MagneticButton } from '../components/SuperEffects'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    duration: 'Semaine 1',
    description: "On creuse votre marque, votre marché, vos utilisateurs. Pas de questionnaire impersonnel — un atelier collaboratif pour cadrer la promesse.",
    deliverable: 'Brief stratégique + arborescence',
  },
  {
    number: '02',
    title: 'Design',
    duration: 'Semaines 2 à 4',
    description: "Direction artistique, design system, prototype interactif. Vous validez sur un produit cliquable, pas sur des écrans figés.",
    deliverable: 'Maquette interactive Figma',
  },
  {
    number: '03',
    title: 'Build',
    duration: 'Semaines 4 à 6',
    description: "Développement, intégrations, animations, optimisation. Code typé, performant, scalable. Mise en ligne et formation.",
    deliverable: 'Produit en ligne + handover',
  },
]

export default function Process() {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
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
            Méthode
          </motion.span>
          <TextReveal
            className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary mb-6 leading-[1.05] tracking-[-0.02em]"
            delay={0.1}
            stagger={0.08}
          >
            Du brief à la mise en orbite
          </TextReveal>
          <motion.p
            className="text-secondary max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Trois phases courtes, un seul interlocuteur, zéro angle mort.
            Vous voyez votre projet prendre forme à chaque sprint.
          </motion.p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20">
            <div>
              <FadeUpSection>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">3 phases</span>
                <h2 className="font-serif text-h2 md:text-[2.8rem] text-primary leading-[1.15]">
                  Cadré,<br />itératif,<br />livré.
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
              { value: 6, suffix: ' sem', label: 'Délai moyen' },
              { value: 3, suffix: '', label: 'Phases' },
              { value: 30, suffix: '+', label: 'Projets livrés' },
              { value: 100, suffix: '%', label: 'Sur-mesure' },
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

      {/* ═══ DELIVERABLES ═══ */}
      <section className="py-28 px-6 lg:px-8 bg-surface border-b border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Ce que vous recevez</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.1]">
                Tout est livré, rien n'est en location.
              </h2>
            </FadeUpSection>
            <div className="border-t border-rule">
              {[
                { cat: 'Stratégie', items: ['Brief stratégique', 'Audit concurrentiel'] },
                { cat: 'Design', items: ['Prototype interactif', 'Charte éditoriale + ton', 'Librairie d\'icônes et d\'assets'] },
                { cat: 'Code & mise en ligne', items: ['Code source (Git complet)', 'Déploiement & configuration CDN', 'Documentation technique', 'Session de formation de 2h'] },
                { cat: 'Après livraison', items: ['Garantie sans bug', 'Session de suivi', 'Analytics & recommandations'] },
              ].map((block, i) => (
                <ClipReveal key={block.cat} direction="left" delay={i * 0.06}>
                  <div className="py-6 border-b border-rule">
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-4">{block.cat}</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                      {block.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-sm text-primary">
                          <svg className="w-3.5 h-3.5 text-accent mt-[0.3em] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ClipReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TOOLS & STACK ═══ */}
      <section className="py-24 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 mb-10">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Stack</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.1]">
                Les outils qui servent le résultat.
              </h2>
            </FadeUpSection>
            <FadeUpSection delay={0.1}>
              <p className="text-secondary leading-relaxed max-w-xl md:mt-3">
                Pas de techno pour la techno. Chaque choix de stack répond à un besoin métier : performance, maintenabilité, vitesse de mise à jour. On ajuste selon le projet.
              </p>
            </FadeUpSection>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 border-t border-rule pt-10">
            {[
              'Figma', 'Next.js', 'Astro', 'Vite',
              'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP',
              'Sanity', 'Payload CMS', 'Shopify', 'Stripe',
              'Vercel', 'Cloudflare', 'Plausible', 'Sentry',
            ].map((tool, i) => (
              <FadeUpSection key={tool} delay={i * 0.02}>
                <div className="flex items-center gap-3 py-3 border-b border-rule">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
                  <span className="font-serif text-[clamp(1rem,1.5vw,1.25rem)] text-primary">{tool}</span>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-28 px-6 lg:px-8 bg-surface border-b border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Questions fréquentes</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.1]">
                Ce que les clients demandent avant de signer.
              </h2>
            </FadeUpSection>
            <div className="border-t border-rule">
              {[
                { q: 'À partir de quel budget travaillez-vous ?', a: 'Ça dépend des projets.' },
                { q: 'Combien de projets gérez-vous en parallèle ?', a: 'Deux. Maximum. Chaque client a un seul interlocuteur référent pendant toute la durée du projet — pas de chef de projet qui relaie, pas de perte d\'information.' },
                { q: 'Travaillez-vous avec des agences ou uniquement en direct ?', a: 'Les deux. Nous collaborons régulièrement en marque blanche avec des studios de branding ou des agences de communication qui n\'ont pas d\'équipe digitale interne.' },
                { q: 'Et si je veux faire évoluer le site après la livraison ?', a: 'Vous êtes propriétaire du code et du design system. Vous pouvez faire intervenir n\'importe quel développeur. Nous proposons aussi un forfait de maintenance mensuelle sur-mesure.' },
                { q: 'Travaillez-vous à l\'international ?', a: 'Oui. Nous avons des clients en France, en Belgique et en Suisse, et nous livrons régulièrement des sites multilingues (FR / EN / DE). Tous les échanges peuvent se faire en anglais.' },
              ].map((item, i) => (
                <ClipReveal key={item.q} direction="left" delay={i * 0.05}>
                  <details className="border-b border-rule group">
                    <summary className="py-6 flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-serif text-lg md:text-xl text-primary pr-6">{item.q}</h3>
                      <span className="font-mono text-xl text-accent flex-shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <p className="text-sm text-secondary leading-relaxed pb-6 max-w-2xl">{item.a}</p>
                  </details>
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
              On démarre ?
            </h2>
            <p className="text-secondary max-w-md mx-auto mb-10">
              Premier échange offert. Briefing en 30 minutes.
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
