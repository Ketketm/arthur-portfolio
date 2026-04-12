import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FadeUpSection, CountUp, TextReveal, Marquee,
  MagneticButton, FloatingBlobs, ClipReveal,
} from '../components/SuperEffects'
import { useRef } from 'react'

const projects = [
  { name: 'LexConfig', type: 'Site vitrine', year: '2024' },
  { name: 'Cabinet DSA', type: 'Identité digitale', year: '2024' },
  { name: 'Avocats Associés', type: 'Site corporate', year: '2023' },
  { name: 'LexInnov', type: 'Landing page', year: '2023' },
]

const barreaux = [
  'Barreau de Paris', 'Barreau de Lyon', 'Barreau de Bordeaux',
  'Barreau de Lille', 'Barreau de Nantes', 'Barreau de Marseille',
  'Barreau de Toulouse', 'Barreau de Strasbourg',
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])
  const heroY = useTransform(heroScroll, [0, 1], [0, 150])

  return (
    <motion.div
      className="min-h-screen bg-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative pt-16 overflow-hidden">
        <FloatingBlobs />
        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <div className="min-h-[100vh] flex flex-col justify-center pb-12">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-bronze">
                  Agence digitale pour avocats
                </span>
              </motion.div>

              <TextReveal
                className="font-serif text-[clamp(2.5rem,8vw,7rem)] text-primary leading-[1.0] tracking-[-0.02em] max-w-[900px]"
                delay={0.3}
                stagger={0.08}
              >
                Des sites qui honorent votre profession
              </TextReveal>

              <motion.div
                className="mt-12 flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-secondary max-w-[380px] leading-relaxed">
                  Verne conçoit des expériences web sur-mesure pour les cabinets d'avocats
                  exigeants. Design éditorial, exécution technique, conformité CNB.
                </p>
                <div className="flex gap-4">
                  <MagneticButton strength={0.15}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-page text-sm font-medium rounded-sm hover:bg-bronze transition-colors duration-300"
                    >
                      Démarrer un projet
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                      </svg>
                    </Link>
                  </MagneticButton>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ NUMBERS BAND ═══ */}
      <section className="border-t border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-rule">
            {[
              { value: 15, suffix: '+', label: 'Cabinets' },
              { value: 100, suffix: '%', label: 'Sur-mesure' },
              { value: 30, suffix: 'j', label: 'Livraison' },
              { value: 0, suffix: '€', label: 'Maintenance', display: '0' },
            ].map((stat) => (
              <div key={stat.label} className="py-10 md:py-14 text-center">
                <div className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-primary leading-none">
                  {stat.display ?? <CountUp value={stat.value} suffix={stat.suffix} />}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="py-5 bg-surface border-b border-rule">
        <Marquee speed={30} className="text-muted">
          {barreaux.map((b) => (
            <span key={b} className="font-mono text-[10px] uppercase tracking-[0.25em] whitespace-nowrap flex items-center gap-4">
              {b}
              <span className="w-1 h-1 rounded-full bg-bronze inline-block" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bronze block mb-4">Services</span>
                <h2 className="font-serif text-h2 md:text-[2.8rem] text-primary leading-[1.15]">
                  De la stratégie<br />à la mise en ligne
                </h2>
              </div>
              <div className="grid gap-0 border-t border-rule">
                {[
                  { num: '01', title: 'Design sur mesure', desc: 'Identité visuelle unique pensée pour votre cabinet. Typographie, couleurs, mise en page éditoriale. Pas de template.' },
                  { num: '02', title: 'Développement', desc: 'Code performant, SEO-first, responsive. Votre site se charge en moins de 2 secondes et se positionne sur Google.' },
                  { num: '03', title: 'Conformité CNB', desc: "Mentions légales, RGPD, obligations ordinales. Chaque règle déontologique est intégrée dès la conception." },
                ].map((s) => (
                  <div key={s.num} className="flex gap-6 py-8 border-b border-rule group cursor-default">
                    <span className="font-mono text-[11px] text-bronze mt-1.5">{s.num}</span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl text-primary mb-2 group-hover:text-bronze transition-colors duration-300">{s.title}</h3>
                      <p className="text-sm text-secondary leading-relaxed max-w-lg">{s.desc}</p>
                    </div>
                    <svg className="w-5 h-5 text-muted mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* ═══ NOTRE DIFFÉRENCE — dark section ═══ */}
      <section className="py-32 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="max-w-content mx-auto relative z-10">
          <FadeUpSection>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bronze block mb-8">
              Notre différence
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-page leading-[1.15] max-w-3xl mb-8">
              Nous parlons votre langage. Nous connaissons votre métier.
            </h2>
            <p className="text-page/50 max-w-xl leading-relaxed mb-16">
              Notre équipe allie expertise juridique et savoir-faire digital.
              Contraintes déontologiques, attentes des justiciables, codes de la profession
              — nous les intégrons dès la première ligne de code.
            </p>
          </FadeUpSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-page/10 rounded-md overflow-hidden">
            {[
              { value: '+15', label: 'Cabinets accompagnés' },
              { value: '30j', label: 'Délai de livraison' },
              { value: '100%', label: 'Sur-mesure' },
              { value: 'CNB', label: 'Conformité intégrée' },
            ].map((stat, i) => (
              <ClipReveal key={stat.label} direction="up" delay={i * 0.1}>
                <div className="p-8 md:p-10 bg-primary">
                  <div className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-bronze mb-2">{stat.value}</div>
                  <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-page/40 leading-relaxed">{stat.label}</div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WORK ═══ */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bronze block mb-4">Sélection</span>
                <h2 className="font-serif text-h2 md:text-[2.8rem] text-primary leading-[1.15]">Réalisations récentes</h2>
              </div>
              <MagneticButton strength={0.15}>
                <Link to="/realisations" className="hidden md:inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group">
                  Tout voir
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </Link>
              </MagneticButton>
            </div>
          </FadeUpSection>

          <div className="space-y-0 border-t border-rule">
            {projects.map((project, i) => (
              <ClipReveal key={project.name} direction="left" delay={i * 0.08}>
                <Link
                  to="/realisations"
                  className="group flex items-center justify-between py-8 md:py-10 border-b border-rule hover:pl-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-serif text-xl md:text-3xl text-primary group-hover:text-bronze transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="hidden md:block font-mono text-[10px] tracking-[0.2em] uppercase text-muted">{project.type}</span>
                    <span className="font-mono text-sm text-muted">{project.year}</span>
                    <svg className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-3 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </div>
                </Link>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-32 px-6 lg:px-8 bg-surface border-t border-rule">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bronze block mb-4 text-center">Témoignages</span>
            <h2 className="font-serif text-h2 text-primary mb-20 text-center">Ce qu'en disent nos clients</h2>
          </FadeUpSection>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {[
              {
                quote: "L'équipe Verne a parfaitement compris les contraintes de notre profession. Le résultat est à la hauteur de notre exigence.",
                author: 'Maître Sophie Renard',
                title: 'Avocate, Barreau de Paris',
              },
              {
                quote: "Une équipe qui parle notre langage. Notre site reflète enfin l'image que nous voulons donner à notre cabinet.",
                author: 'Cabinet Dupont & Associés',
                title: 'Barreau de Lyon',
              },
            ].map((t, i) => (
              <ClipReveal key={t.author} direction={i === 0 ? 'left' : 'right'} delay={i * 0.15}>
                <div>
                  <blockquote className="font-serif text-xl md:text-2xl text-primary leading-relaxed italic mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <div className="text-sm font-medium text-primary">{t.author}</div>
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mt-1">{t.title}</div>
                  </div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-40 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <FloatingBlobs color="#8B6914" className="opacity-40" />
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <h2 className="font-serif text-[clamp(2rem,6vw,5rem)] text-page leading-[1.05] mb-8">
              Prêt à démarquer<br />votre cabinet ?
            </h2>
            <p className="text-page/50 max-w-md mx-auto mb-12">
              Première consultation gratuite. Sans engagement.
            </p>
            <MagneticButton className="inline-block" strength={0.2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bronze text-white font-medium rounded-sm transition-all duration-300 hover:bg-bronze-hover hover:shadow-xl hover:shadow-bronze/30"
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
