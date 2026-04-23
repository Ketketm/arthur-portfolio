import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FadeUpSection, CountUp, TextReveal, Marquee,
  MagneticButton, ClipReveal, HorizontalScroll,
} from '../components/SuperEffects'
import HoverPreview from '../components/HoverPreview'
import { previewUrl } from '../utils/preview'
import { useRef } from 'react'

const ticker = [
  'Web Design', 'Développement', 'Applications', 'E-commerce',
  'Identité', 'Motion', 'SEO', 'Performance',
]

interface Item {
  name: string
  url: string
  type: string
  year: string
  gradient: string
}

const showcase: Item[] = [
  { name: 'Carve',            url: 'https://carve.fr/',                          type: 'Studio créatif',         year: '2024', gradient: 'linear-gradient(135deg, #1f2a3d, #6B9DC4)' },
  { name: 'Dessena Marianne', url: 'http://www.dessenamarianne.com/',            type: 'Portfolio artiste',      year: '2024', gradient: 'linear-gradient(135deg, #2a1f1c, #C46A5C)' },
  { name: 'Pastene Avocat',   url: 'https://pastene-avocat.fr/',                 type: 'Cabinet d\'avocats',     year: '2024', gradient: 'linear-gradient(135deg, #0f1118, #5C8AC4)' },
  { name: 'Talt',             url: 'https://talt.fr/',                           type: 'Studio branding',        year: '2024', gradient: 'linear-gradient(135deg, #1c1817, #B07C5C)' },
  { name: 'ORWL',             url: 'https://www.orwl.fr/',                       type: 'Tech & droit',           year: '2023', gradient: 'linear-gradient(135deg, #0d1118, #4C7A9E)' },
  { name: 'Amplitude Law',    url: 'https://amplitude-law.be/',                  type: 'Cabinet international',  year: '2024', gradient: 'linear-gradient(135deg, #15191e, #6B9DC4)' },
]

const work: Item[] = [
  { name: 'Khalvadjian Avocats',   url: 'https://www.khalvadjian-avocats.com/',      type: 'Cabinet d\'avocats', year: '2024', gradient: 'linear-gradient(135deg, #1a1a18, #C4A054)' },
  { name: 'Cabinet Alessandrello', url: 'https://cabinet-alessandrello.vercel.app/', type: 'Cabinet d\'avocats', year: '2024', gradient: 'linear-gradient(135deg, #0F1118, #5C9A6E)' },
  { name: 'HKA Avocat',            url: 'https://www.hka-avocat.com/',               type: 'Cabinet d\'avocats', year: '2023', gradient: 'linear-gradient(135deg, #161923, #86B5D8)' },
  { name: 'Archers',               url: 'https://www.archers.fr/',                   type: 'Cabinet d\'avocats', year: '2024', gradient: 'linear-gradient(135deg, #1a1f2c, #7A8FA8)' },
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
      className="min-h-screen"
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
                  Studio digital ultra premium
                </span>
              </motion.div>

              <div className="mt-6 mb-16">
                <TextReveal
                  className="font-serif text-[clamp(3rem,9vw,8rem)] text-primary leading-[0.95] tracking-[-0.03em]"
                  delay={0.4}
                  stagger={0.08}
                >
                  Du design à la mise en orbite.
                </TextReveal>
              </div>

              <motion.div
                className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-rule pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-secondary max-w-[440px] text-[15px] leading-relaxed">
                  Nérée conçoit des sites, des e-commerces et des applications
                  sur-mesure pour les marques qui refusent le générique.
                  Direction artistique, ingénierie produit, exécution sans concession.
                </p>
                <MagneticButton strength={0.15}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-7 py-4 bg-accent text-white text-sm tracking-wide rounded-sm hover:bg-accent/80 transition-all duration-300"
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
          {ticker.map((b) => (
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
              { val: 30, suf: '+', label: 'Projets livrés' },
              { val: 100, suf: '%', label: 'Sur-mesure' },
              { val: 6, suf: ' sem', label: 'Délai moyen' },
              { val: 3, suf: ' pays', label: 'Clients' },
            ].map((s) => (
              <FadeUpSection key={s.label}>
                <div className="font-serif text-[clamp(3rem,6vw,5rem)] text-primary leading-none tracking-[-0.02em]">
                  <CountUp value={s.val} suffix={s.suf} />
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
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-6">Disciplines</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-primary leading-[1.1] max-w-2xl mb-20">
              Direction artistique, ingénierie, produit.
            </h2>
          </FadeUpSection>
          <div className="grid md:grid-cols-3 gap-px">
            {[
              { num: '01', title: 'Design', desc: 'Identité, direction artistique, design d\'interface. Une signature visuelle qui ne ressemble à personne d\'autre.' },
              { num: '02', title: 'Développement', desc: 'Sites, e-commerces, applications web et mobiles. Code propre, performance native, scalabilité.' },
              { num: '03', title: 'Produit', desc: 'Stratégie produit, architecture, intégrations. De l\'idée à la mise en orbite, sans rupture.' },
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

      {/* ═══ HORIZONTAL SHOWCASE — vertical scroll drives horizontal cards ═══ */}
      <section className="bg-page">
        <div className="px-6 lg:px-8 pt-28 pb-12 max-w-content mx-auto">
          <FadeUpSection>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Showcase</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-primary leading-[1.1] max-w-2xl">
              Les projets qui nous obsèdent.
            </h2>
          </FadeUpSection>
        </div>

        <HorizontalScroll className="bg-page">
          <div className="pl-6 lg:pl-8 flex gap-8">
            {showcase.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-[58vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] aspect-[4/5] rounded-md overflow-hidden border border-rule-strong relative transition-transform duration-300 hover:-translate-y-1"
                style={{ background: p.gradient }}
              >
                <img
                  src={previewUrl(p.url, 800)}
                  alt={p.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/75" />
                <div className="relative h-full p-5 flex flex-col justify-between text-white">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-90">{p.year}</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl leading-tight mb-1">{p.name}</h3>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-90">{p.type}</span>
                  </div>
                </div>
              </a>
            ))}
            <div className="w-[10vw] flex-shrink-0" />
          </div>
        </HorizontalScroll>
      </section>

      {/* ═══ WORK LIST with hover preview ═══ */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex items-end justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Inspiration</span>
              <Link to="/inspiration" className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted hover:text-primary transition-colors">
                Tout voir →
              </Link>
            </div>
          </FadeUpSection>
          <div className="border-t border-rule">
            {work.map((p, i) => (
              <ClipReveal key={p.name} direction="left" delay={i * 0.06}>
                <HoverPreview src={previewUrl(p.url, 700)} gradient={p.gradient} label={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-7 border-b border-rule"
                  >
                    <h3 className="font-serif text-[clamp(1.4rem,3.5vw,2.4rem)] text-primary group-hover:text-accent group-hover:translate-x-3 transition-all duration-500">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-8">
                      <span className="hidden md:block font-mono text-[9px] tracking-[0.2em] uppercase text-muted">{p.type}</span>
                      <span className="font-mono text-[11px] text-muted">{p.year}</span>
                    </div>
                  </a>
                </HoverPreview>
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
                « Nérée a saisi notre marque mieux que nous. Le résultat ne ressemble
                à rien de ce qui existe — et c'est exactement ce qu'on cherchait. »
              </blockquote>
              <div className="mt-10">
                <div className="text-sm text-primary">Léa Vidal</div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-1">Fondatrice, Maison Reverse</div>
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
                On parle de votre prochain projet ?
              </h2>
              <div className="flex flex-col items-start md:items-end gap-4 pb-2">
                <p className="text-secondary text-sm max-w-xs md:text-right">
                  Premier échange offert. Briefing en 30 minutes.
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
