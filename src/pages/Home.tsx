import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FadeUpSection, StaggerContainer, StaggerItem, CountUp, TextReveal, Marquee,
  MagneticButton, FloatingBlobs, ParallaxSection, ClipReveal,
} from '../components/SuperEffects'
import { useRef } from 'react'

const projects = [
  { name: 'LexConfig', type: 'Site vitrine', year: '2024', color: '#D4C5A0' },
  { name: 'Cabinet DSA', type: 'Identité digitale', year: '2024', color: '#B8C4C0' },
  { name: 'Avocats Associés', type: 'Site corporate', year: '2023', color: '#C9BBA8' },
  { name: 'LexInnov', type: 'Landing page', year: '2023', color: '#A8B8C9' },
]

const testimonials = [
  {
    quote: "L'équipe Verne a parfaitement compris les contraintes de notre profession. Le résultat est à la hauteur de notre exigence.",
    author: 'Maître Sophie Renard',
    title: 'Avocate au Barreau de Paris',
  },
  {
    quote: "Une équipe qui parle notre langage. Notre site reflète enfin l'image que nous voulons donner à notre cabinet.",
    author: 'Cabinet Dupont & Associés',
    title: 'Barreau de Lyon',
  },
]

const barreaux = [
  'Barreau de Paris', 'Barreau de Lyon', 'Barreau de Bordeaux',
  'Barreau de Lille', 'Barreau de Nantes', 'Barreau de Marseille',
  'Barreau de Toulouse', 'Barreau de Strasbourg',
]

const services = [
  { icon: '◎', title: 'Design sur mesure', desc: 'Identité visuelle unique, à votre image' },
  { icon: '⬡', title: 'Développement', desc: 'Code performant, SEO-first, responsive' },
  { icon: '△', title: 'Conformité CNB', desc: 'Respect des règles déontologiques' },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroImageY = useTransform(heroScroll, [0, 1], [0, 120])
  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.08])
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0])

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
        <motion.div style={{ opacity: heroOpacity }}>
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 min-h-[calc(100vh-64px)] items-center">
              <div>
                <motion.span
                  className="section-label mb-6 block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Agence digitale pour avocats
                </motion.span>
                <TextReveal
                  className="font-serif text-hero-mobile md:text-h1 lg:text-hero text-primary mb-6 leading-[1.1]"
                  delay={0.2}
                  stagger={0.06}
                >
                  Des sites qui honorent votre profession
                </TextReveal>
                <motion.p
                  className="text-body text-secondary max-w-[420px] mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Verne conçoit des expériences web sur-mesure
                  pour les cabinets d'avocats exigeants. Design éditorial, exécution
                  technique, conformité CNB.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.85 }}
                >
                  <MagneticButton strength={0.15}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bronze text-white font-semibold text-sm rounded-sm transition-all duration-200 hover:bg-bronze-hover hover:shadow-lg hover:shadow-bronze/20"
                    >
                      Démarrer un projet
                      <motion.svg
                        className="w-4 h-4"
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
                  <MagneticButton strength={0.1}>
                    <Link
                      to="/realisations"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-rule-strong text-primary font-medium text-sm rounded-sm transition-all duration-200 hover:border-primary hover:bg-surface"
                    >
                      Voir les réalisations
                    </Link>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Hero image with parallax */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="hidden md:flex items-center justify-center"
                style={{ y: heroImageY, scale: heroImageScale }}
              >
                <div className="aspect-[4/5] w-full bg-surface rounded-md relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-muted" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="font-serif text-[80px] text-muted/15"
                      animate={{ rotate: [0, 1, -1, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      V
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats row — animated counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="border-t border-rule"
        >
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-rule">
              <div className="py-8 text-center">
                <div className="font-serif text-h3 md:text-h2 text-primary">
                  <CountUp value={15} suffix="+" />
                </div>
                <div className="font-mono text-label uppercase text-muted mt-1">Sites livrés</div>
              </div>
              <div className="py-8 text-center">
                <div className="font-serif text-h3 md:text-h2 text-primary">
                  <CountUp value={100} suffix="%" />
                </div>
                <div className="font-mono text-label uppercase text-muted mt-1">Sur-mesure</div>
              </div>
              <div className="py-8 text-center">
                <div className="font-serif text-h3 md:text-h2 text-primary italic">Droit</div>
                <div className="font-mono text-label uppercase text-muted mt-1">Expertise sectorielle</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ TRUST MARQUEE ═══ */}
      <div className="border-t border-rule py-5 bg-surface">
        <Marquee speed={25} className="text-muted">
          {barreaux.map((b) => (
            <span key={b} className="font-mono text-xs uppercase tracking-widest whitespace-nowrap flex items-center gap-3">
              {b}
              <span className="w-1 h-1 rounded-full bg-bronze inline-block" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ═══ SERVICES — icon grid with clip reveal ═══ */}
      <section className="py-28 px-6 lg:px-8 border-t border-rule">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <span className="section-label mb-4 block text-center">Expertise</span>
            <h2 className="font-serif text-h2 text-primary mb-16 text-center leading-tight">
              De la stratégie à la mise en ligne
            </h2>
          </FadeUpSection>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ClipReveal key={s.title} direction="up" delay={i * 0.15}>
                <div className="group p-8 bg-surface rounded-md border border-rule hover:border-bronze/30 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-bronze/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
                      <span className="text-page text-xl">{s.icon}</span>
                    </div>
                    <h3 className="font-serif text-xl text-primary mb-3">{s.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY JURIST — parallax ═══ */}
      <section className="py-28 px-6 lg:px-8 border-t border-rule bg-surface relative overflow-hidden">
        <FloatingBlobs color="var(--text-primary)" className="opacity-30" />
        <div className="max-w-content mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUpSection>
              <span className="section-label mb-4 block">Notre différence</span>
              <h2 className="font-serif text-h2 text-primary mb-6 leading-tight">
                Nous parlons votre langage
              </h2>
              <p className="text-body text-secondary leading-relaxed mb-6">
                Notre équipe allie expertise juridique et savoir-faire digital.
                Nous comprenons les contraintes déontologiques, les attentes des
                justiciables, et les codes de la profession.
              </p>
              <p className="text-body text-secondary leading-relaxed">
                Pas de templates génériques. Des sites conçus par ceux qui
                connaissent votre métier.
              </p>
            </FadeUpSection>
            <ParallaxSection speed={0.15}>
              <ClipReveal direction="right" delay={0.2}>
                <div className="aspect-[4/5] bg-page rounded-md relative overflow-hidden border border-rule">
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="font-mono text-label uppercase text-muted mb-2">Expertise</span>
                    <span className="font-serif text-h3 text-primary">+15 cabinets</span>
                    <span className="font-serif text-h3 text-primary">accompagnés</span>
                    <div className="mt-4 h-[1px] bg-rule-strong" />
                    <span className="font-mono text-label uppercase text-muted mt-4">Conformité CNB intégrée</span>
                  </div>
                </div>
              </ClipReveal>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED WORK — stagger + hover ═══ */}
      <section className="py-28 px-6 lg:px-8 border-t border-rule">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="section-label mb-4 block">Sélection</span>
                <h2 className="font-serif text-h2 text-primary">Réalisations récentes</h2>
              </div>
              <MagneticButton strength={0.2}>
                <Link
                  to="/realisations"
                  className="hidden md:inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group"
                >
                  Voir tout
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </div>
          </FadeUpSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.name}>
                <Link
                  to="/realisations"
                  className="group block rounded-md overflow-hidden"
                >
                  <div
                    className="aspect-[16/10] relative overflow-hidden"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                      <span className="font-serif text-3xl text-white/70 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                        {project.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5 bg-surface flex items-center justify-between border-t border-rule">
                    <div>
                      <h3 className="font-serif text-lg text-primary mb-0.5 group-hover:text-bronze transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="font-mono text-label uppercase text-muted">
                        {project.type}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-muted group-hover:text-primary transition-colors">
                      {project.year}
                      <svg className="w-3.5 h-3.5 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-28 px-6 lg:px-8 border-t border-rule bg-surface">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <span className="section-label mb-4 block text-center">Témoignages</span>
            <h2 className="font-serif text-h2 text-primary mb-16 text-center">
              Ce qu'en disent nos clients
            </h2>
          </FadeUpSection>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <ClipReveal key={t.author} direction={i === 0 ? 'left' : 'right'} delay={i * 0.15}>
                <div className="p-8 bg-page rounded-md border border-rule relative group hover:border-bronze/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-bronze/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-body text-primary leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center">
                      <span className="font-serif text-sm text-bronze">{t.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">{t.author}</div>
                      <div className="font-mono text-label text-muted">{t.title}</div>
                    </div>
                  </div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DARK CTA — inverted with blobs ═══ */}
      <section className="py-36 px-6 lg:px-8 bg-primary relative overflow-hidden">
        <FloatingBlobs color="#8B6914" className="opacity-50" />
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <defs>
              <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-bronze mb-6 block">
              Prochain projet
            </span>
            <h2 className="font-serif text-h2 md:text-h1 lg:text-hero text-page mb-6 leading-tight">
              Prêt à démarquer<br />votre cabinet ?
            </h2>
            <p className="text-body text-page/60 max-w-xl mx-auto mb-12">
              Discutons de votre projet. Première consultation gratuite,
              sans engagement.
            </p>
            <MagneticButton className="inline-block" strength={0.2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-bronze text-white font-semibold text-base rounded-sm transition-all duration-300 hover:bg-bronze-hover hover:shadow-xl hover:shadow-bronze/40"
              >
                Prendre rendez-vous
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
          </FadeUpSection>
        </div>
      </section>
    </motion.div>
  )
}
