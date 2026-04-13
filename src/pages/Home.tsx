import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FadeUpSection, CountUp, TextReveal, Marquee,
  MagneticButton, ClipReveal,
} from '../components/SuperEffects'
import { useRef } from 'react'

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
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0])
  const heroY = useTransform(heroScroll, [0, 1], [0, 200])

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
        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <div className="min-h-[100vh] flex flex-col justify-end pb-24">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">
                  Agence digitale pour avocats
                </span>
              </motion.div>

              <div className="mt-6 mb-16">
                <TextReveal
                  className="font-serif text-[clamp(3rem,9vw,8rem)] text-primary leading-[0.95] tracking-[-0.03em]"
                  delay={0.4}
                  stagger={0.08}
                >
                  Des sites qui honorent votre profession
                </TextReveal>
              </div>

              <motion.div
                className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-rule pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-secondary max-w-[400px] text-[15px] leading-relaxed">
                  Verne conçoit des expériences web sur-mesure pour les cabinets d'avocats
                  exigeants. Design éditorial, exécution technique, conformité CNB.
                </p>
                <MagneticButton strength={0.15}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-page text-sm tracking-wide rounded-sm hover:opacity-80 transition-opacity duration-300"
                  >
                    Démarrer un projet
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="py-6 border-t border-b border-rule">
        <Marquee speed={35} className="text-muted">
          {barreaux.map((b) => (
            <span key={b} className="font-mono text-[9px] uppercase tracking-[0.3em] whitespace-nowrap flex items-center gap-6">
              {b}
              <span className="w-[3px] h-[3px] rounded-full bg-accent inline-block" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ═══ NUMBERS ═══ */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { val: 15, suf: '+', label: 'Cabinets accompagnés' },
              { val: 100, suf: '%', label: 'Sur-mesure' },
              { val: 30, suf: 'j', label: 'Livraison max' },
              { val: 0, suf: '€', label: 'Frais cachés', display: '0' },
            ].map((s) => (
              <FadeUpSection key={s.label}>
                <div className="font-serif text-[clamp(3rem,6vw,5rem)] text-primary leading-none tracking-[-0.02em]">
                  {s.display ?? <CountUp value={s.val} suffix={s.suf} />}
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-4">{s.label}</div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-28 px-6 lg:px-8 bg-surface">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-6">Services</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-primary leading-[1.1] max-w-2xl mb-20">
              De la stratégie à la mise en ligne
            </h2>
          </FadeUpSection>
          <div className="grid md:grid-cols-3 gap-px">
            {[
              { num: '01', title: 'Design', desc: 'Identité visuelle unique. Typographie, couleurs, mise en page éditoriale. Rien de générique.' },
              { num: '02', title: 'Développement', desc: 'Code performant, SEO-first, responsive. Moins de 2 secondes de chargement.' },
              { num: '03', title: 'Conformité', desc: 'Mentions légales, RGPD, obligations CNB. Intégrées dès la conception.' },
            ].map((s, i) => (
              <ClipReveal key={s.num} direction="up" delay={i * 0.1}>
                <div className="border-t border-rule pt-8 pr-8 pb-8 group">
                  <span className="font-mono text-[10px] text-accent">{s.num}</span>
                  <h3 className="font-serif text-2xl text-primary mt-4 mb-3">{s.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WORK LIST ═══ */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex items-end justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Sélection</span>
              <Link to="/realisations" className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted hover:text-primary transition-colors">
                Tout voir →
              </Link>
            </div>
          </FadeUpSection>
          <div className="border-t border-rule">
            {[
              { name: 'LexConfig', type: 'Site vitrine', year: '2024' },
              { name: 'Cabinet DSA', type: 'Identité digitale', year: '2024' },
              { name: 'Avocats Associés', type: 'Site corporate', year: '2023' },
              { name: 'LexInnov', type: 'Landing page', year: '2023' },
            ].map((p, i) => (
              <ClipReveal key={p.name} direction="left" delay={i * 0.06}>
                <Link
                  to="/realisations"
                  className="group flex items-center justify-between py-7 border-b border-rule"
                >
                  <h3 className="font-serif text-[clamp(1.2rem,3vw,2rem)] text-primary group-hover:translate-x-3 transition-transform duration-500">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-8">
                    <span className="hidden md:block font-mono text-[9px] tracking-[0.2em] uppercase text-muted">{p.type}</span>
                    <span className="font-mono text-[11px] text-muted">{p.year}</span>
                  </div>
                </Link>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="py-32 px-6 lg:px-8 border-t border-rule">
        <div className="max-w-content mx-auto">
          <ClipReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-primary leading-[1.3] italic">
                "L'équipe Verne a parfaitement compris les contraintes de notre profession.
                Le résultat est à la hauteur de notre exigence."
              </blockquote>
              <div className="mt-10">
                <div className="text-sm text-primary">Maître Sophie Renard</div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-1">Avocate, Barreau de Paris</div>
              </div>
            </div>
          </ClipReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-40 px-6 lg:px-8 bg-surface">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary leading-[0.95] tracking-[-0.02em] max-w-xl">
                Prêt à démarquer votre cabinet ?
              </h2>
              <div className="flex flex-col items-start md:items-end gap-4 pb-2">
                <p className="text-secondary text-sm max-w-xs md:text-right">
                  Première consultation gratuite. Sans engagement.
                </p>
                <MagneticButton strength={0.15}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-7 py-4 bg-accent text-white text-sm tracking-wide rounded-sm hover:bg-accent/80 transition-all duration-300"
                  >
                    Prendre rendez-vous
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </FadeUpSection>
        </div>
      </section>
    </motion.div>
  )
}
