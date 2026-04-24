import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FadeUpSection, CountUp, TextReveal, Marquee,
  MagneticButton, ClipReveal,
} from '../components/SuperEffects'
import HoverPreview from '../components/HoverPreview'
import { previewUrl } from '../utils/preview'
import { useEffect, useRef, useState } from 'react'

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

  // Showcase horizontal-scroll: title stays sticky inside the same pinned
  // container while cards translate horizontally based on vertical scroll.
  const showcaseRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [trackOffset, setTrackOffset] = useState(0)

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      // Distance the track must translate so the last card is fully visible
      setTrackOffset(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress: showcaseScroll } = useScroll({
    target: showcaseRef,
    offset: ['start start', 'end end'],
  })
  const showcaseX = useTransform(showcaseScroll, [0, 1], [0, -trackOffset])

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative pt-16 overflow-hidden">
        {/* Subtle oceanic rings in the background — thematic to Nérée,
            positioned far to the right and extending off-screen so they
            feel like a detail, not the focal point. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-10%] right-[-18%] w-[70vw] max-w-[900px] aspect-square z-0 opacity-60"
          style={{ animation: 'hero-ring-drift 40s linear infinite' }}
        >
          <svg viewBox="0 0 600 600" className="w-full h-full text-accent">
            <g fill="none" stroke="currentColor" strokeWidth="0.6">
              <circle cx="300" cy="300" r="295" opacity="0.25" />
              <circle cx="300" cy="300" r="240" opacity="0.20" />
              <circle cx="300" cy="300" r="180" opacity="0.16" />
              <circle cx="300" cy="300" r="120" opacity="0.12" />
              <circle cx="300" cy="300" r="60"  opacity="0.08" />
            </g>
            {/* Two small orbiting dots to hint at motion */}
            <circle cx="300" cy="5"   r="2" fill="currentColor" opacity="0.35" />
            <circle cx="595" cy="300" r="1.5" fill="currentColor" opacity="0.25" />
          </svg>
        </div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <div className="min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24">
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
      <section className="py-16 px-6 lg:px-8">
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

      {/* ═══ HORIZONTAL SHOWCASE — title + cards cluster vertically in a 100dvh pin ═══ */}
      <section
        ref={showcaseRef}
        className="bg-page relative"
        style={{ height: `calc(${trackOffset}px + 100dvh)` }}
      >
        <div className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col justify-center gap-8 md:gap-10">
          <div className="px-6 lg:px-8 max-w-content mx-auto w-full">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-2">Showcase</span>
            <h2 className="font-serif text-[clamp(1.4rem,3.2vw,2.1rem)] text-primary leading-[1.1] max-w-2xl">
              Les projets qui nous obsèdent.
            </h2>
          </div>

          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x: showcaseX }}
              className="flex gap-5 pl-6 lg:pl-8"
            >
              {showcase.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-[68vw] sm:w-[44vw] md:w-[32vw] lg:w-[25vw] aspect-[16/10] rounded-md overflow-hidden border border-rule-strong relative transition-transform duration-300 hover:-translate-y-1"
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
              <div className="w-[6vw] flex-shrink-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES MATRIX ═══ */}
      <section className="pt-12 pb-24 px-6 lg:px-8 bg-surface border-t border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 mb-12">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Savoir-faire</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.1]">
                Un périmètre large, zéro approximation.
              </h2>
            </FadeUpSection>
            <FadeUpSection delay={0.1}>
              <p className="text-secondary leading-relaxed max-w-xl md:mt-3">
                L'équipe couvre l'intégralité de la chaîne — du positionnement de marque à la mise en production. Voici les terrains que nous maîtrisons en interne, sans sous-traitance.
              </p>
            </FadeUpSection>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 border-t border-rule pt-10">
            {[
              { cat: 'Design', items: ['Identité visuelle', 'Design system', 'Art direction', 'Typographie sur-mesure', 'Motion & micro-interactions', 'Illustration éditoriale'] },
              { cat: 'Ingénierie', items: ['Next.js, Astro, Vite', 'Headless CMS (Sanity, Payload)', 'Shopify Hydrogen / WooCommerce', 'API & intégrations', 'SEO technique', 'Analytics & privacy-first tracking'] },
              { cat: 'Produit', items: ['Research & discovery', 'Information architecture', 'Prototypage Figma interactif', 'A/B testing, mesure', 'Accessibilité WCAG 2.2', 'Accompagnement post-lancement'] },
            ].map((col, i) => (
              <FadeUpSection key={col.cat} delay={i * 0.08}>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-5">{col.cat}</div>
                  <ul className="space-y-3">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-primary">
                        <span className="text-accent mt-[0.35em] w-3 h-[1px] bg-accent inline-block flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY SPOTLIGHT ═══ */}
      <section className="py-24 px-6 lg:px-8 border-t border-rule">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-6">Étude de cas</span>
          </FadeUpSection>
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-center">
            <FadeUpSection>
              <a
                href="https://cabinet-alessandrello.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-[4/3] rounded-md overflow-hidden border border-rule-strong relative"
                style={{ background: 'linear-gradient(135deg, #0F1118, #5C9A6E)' }}
              >
                <img
                  src={previewUrl('https://cabinet-alessandrello.vercel.app/', 1000)}
                  alt="Cabinet Alessandrello"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </a>
            </FadeUpSection>
            <FadeUpSection delay={0.1}>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
                  Cabinet d'avocats · Paris · 2024
                </div>
                <h3 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.1] mb-6">
                  Cabinet Alessandrello
                </h3>
                <p className="text-secondary leading-relaxed mb-8">
                  Refonte éditoriale pour un cabinet spécialisé en droit des affaires. Ton sobre, parcours dense, accessibilité AAA. Livraison rapide, hébergement privé, formation incluse.
                </p>
                <div className="grid grid-cols-3 gap-6 border-t border-rule pt-6">
                  {[
                    { k: 'Trafic', v: '+180%' },
                    { k: 'LCP', v: '0.9s' },
                    { k: 'Audit A11Y', v: 'AAA' },
                  ].map((s) => (
                    <div key={s.k}>
                      <div className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-primary leading-none">{s.v}</div>
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-2">{s.k}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/inspirations" className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors">
                    Voir tous les projets
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS MARQUEE ═══ */}
      <section className="py-16 border-t border-b border-rule bg-surface overflow-hidden">
        <div className="px-6 lg:px-8 max-w-content mx-auto mb-8">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Ils nous ont fait confiance</span>
        </div>
        <Marquee speed={45} className="text-primary">
          {[
            'HOULL AVOCATS',
            'ALESSANDRELLO AVOCAT',
            'MAISON REVERSE',
            'ABMC CABINET D\'AVOCATS',
            'CABINET LACROIX',
            'DUMAS & ASSOCIÉS',
            'STUDIO SOREL',
            'MAISON VAUBAN',
            'RIVET PARTNERS',
            'ATELIER HÉDÉ',
            'CLÉMENT AVOCAT',
            'SCP BEAUMONT',
            'PERRIN & CIE',
            'CABINET MONET',
          ].map((name) => (
            <span key={name} className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] whitespace-nowrap flex items-center gap-8 px-4 opacity-70">
              {name}
              <span className="w-[5px] h-[5px] rounded-full bg-accent inline-block flex-shrink-0" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══ WORK LIST with hover preview ═══ */}
      <section className="pt-20 pb-20 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex items-end justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Sélection récente</span>
              <Link to="/inspirations" className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted hover:text-primary transition-colors">
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

      {/* ═══ PROCESS PREVIEW ═══ */}
      <section className="py-24 px-6 lg:px-8 border-t border-rule bg-surface">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Méthode</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.1] mb-6">
                Du brief à la mise en orbite.
              </h2>
              <p className="text-secondary leading-relaxed text-sm mb-6">
                Trois phases, un seul interlocuteur, zéro angle mort. Vous voyez votre projet avancer à chaque sprint.
              </p>
              <Link to="/methode" className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors">
                Voir la méthode complète
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                </svg>
              </Link>
            </FadeUpSection>
            <div className="border-t border-rule">
              {[
                { num: '01', title: 'Discovery', week: 'Semaine 1', desc: 'Atelier collaboratif. On cadre la marque, la cible, la promesse. Brief stratégique + arborescence livrés.' },
                { num: '02', title: 'Design', week: 'Semaines 2 à 4', desc: 'Direction artistique, design system, prototype interactif. Vous validez sur un produit cliquable.' },
                { num: '03', title: 'Build', week: 'Semaines 4 à 6', desc: 'Développement, intégrations, animations, optimisation. Mise en ligne et formation.' },
              ].map((s, i) => (
                <ClipReveal key={s.num} direction="left" delay={i * 0.08}>
                  <div className="flex items-start gap-6 py-6 border-b border-rule">
                    <span className="font-mono text-[11px] text-accent mt-1.5">{s.num}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2 gap-4">
                        <h3 className="font-serif text-lg md:text-xl text-primary">{s.title}</h3>
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted flex-shrink-0">{s.week}</span>
                      </div>
                      <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </ClipReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="py-24 px-6 lg:px-8 border-t border-rule">
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
      <section className="py-28 px-6 lg:px-8 bg-surface">
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
