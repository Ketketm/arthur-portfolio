import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUpSection, TextReveal, ClipReveal, MagneticButton } from '../components/SuperEffects'

const timeline = [
  {
    year: '2018',
    title: 'Études de droit',
    description: "Arthur Souley entame des études de droit. Il y développe une obsession pour la précision, la rigueur du raisonnement et la culture professionnelle des cabinets — un vocabulaire qui reviendra plus tard.",
  },
  {
    year: '2021',
    title: 'Bascule vers le code',
    description: "Le développement web devient une activité parallèle, menée en marge du travail principal. Les soirées sont consacrées à apprendre le métier de fond en comble : design, performance, architecture.",
  },
  {
    year: '2022',
    title: 'Spécialisation cabinets d\'avocats',
    description: "Premiers sites livrés pour des avocats. La double culture droit + dev est un avantage rare : compréhension du métier, des contraintes déontologiques, des codes visuels du secteur.",
  },
  {
    year: '2023',
    title: 'Élargissement du terrain',
    description: "Au-delà du juridique : marques de mode, fondateurs, e-commerces, applications. Le langage de l'agence se forge — éditorial, exigeant, sur-mesure.",
  },
  {
    year: '2024',
    title: 'Naissance de Nérée',
    description: "Structuration en studio digital indépendant. Une seule promesse : aucun projet ne ressemble à un autre. Aujourd'hui +30 projets livrés à travers 3 pays.",
  },
]

export default function About() {
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            À propos
          </motion.span>
          <TextReveal
            className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary mb-8 leading-[1.05] tracking-[-0.02em]"
            delay={0.1}
            stagger={0.1}
          >
            Nérée
          </TextReveal>
          <motion.p
            className="text-xl text-secondary leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Nérée est un studio digital indépendant basé à Paris, fondé par
            Arthur Souley. Une trajectoire singulière — études de droit,
            bascule vers le développement, spécialisation cabinets d'avocats
            puis ouverture à toutes les marques exigeantes. Aucun projet ne
            ressemble à un autre, le détail est un produit en soi.
          </motion.p>
        </div>
      </div>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 bg-surface">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="grid md:grid-cols-3 gap-16 md:gap-12">
              {[
                { title: 'Singularité', desc: 'Aucun projet ne ressemble à un autre. Chaque livrable porte la signature de la marque, jamais celle d\'un thème.' },
                { title: 'Exigence', desc: 'Pixel, micro-interaction, performance, accessibilité. Le détail est un produit en soi.' },
                { title: 'Engagement', desc: 'Un seul interlocuteur, transparent, qui défend votre projet du brief à la mise en orbite.' },
              ].map((v, i) => (
                <div key={v.title}>
                  <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-2xl text-primary mt-3 mb-3">{v.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* Quote */}
      <section className="py-28 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto max-w-3xl">
          <ClipReveal direction="up">
            <blockquote className="font-serif text-[clamp(1.3rem,3vw,2.2rem)] text-primary italic leading-relaxed text-center">
              « Une marque mémorable mérite un produit numérique mémorable.
              Le reste n'est qu'un compromis. »
            </blockquote>
            <cite className="block mt-8 text-center text-secondary not-italic text-sm">
              — La conviction qui guide chacun de nos projets
            </cite>
          </ClipReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Parcours</span>
            <h2 className="font-serif text-h2 md:text-[2.8rem] text-primary leading-[1.15]">Notre parcours</h2>
          </FadeUpSection>
          <div className="max-w-2xl">
            {timeline.map((item, index) => (
              <ClipReveal key={item.year} direction="left" delay={index * 0.1}>
                <div className="flex gap-8 py-10 border-b border-rule group">
                  <div className="flex-shrink-0">
                    <span className="font-mono text-sm font-bold text-accent">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl text-primary mb-3 group-hover:text-accent transition-colors duration-200">{item.title}</h3>
                    <p className="text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER ═══ */}
      <section className="py-28 px-6 lg:px-8 bg-surface border-t border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Fondateur</span>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-primary leading-[1.1] mb-8">
                Arthur Souley
              </h2>
              <div className="aspect-[4/5] max-w-xs rounded-md overflow-hidden relative border border-rule-strong bg-gradient-to-br from-[#1a1a18] to-[#3A6B95]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[8rem] text-white/15">AS</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/70">Paris · FR</span>
                  <span className="font-serif text-white text-lg">Directeur de studio</span>
                </div>
              </div>
            </FadeUpSection>
            <div className="space-y-8">
              <FadeUpSection delay={0.1}>
                <p className="text-secondary leading-relaxed text-[15px]">
                  Arthur combine un parcours atypique : droit, développement, direction artistique. Cette triangulation se retrouve dans chaque projet — la rigueur d'un juriste, l'exigence d'un designer, la précision d'un ingénieur.
                </p>
              </FadeUpSection>
              <FadeUpSection delay={0.15}>
                <p className="text-secondary leading-relaxed text-[15px]">
                  Il intervient personnellement sur toutes les phases des projets Nérée : cadrage stratégique, direction artistique, architecture technique. Aucune délégation sur les décisions structurantes.
                </p>
              </FadeUpSection>
              <FadeUpSection delay={0.2}>
                <div className="grid grid-cols-2 gap-6 border-t border-rule pt-8">
                  {[
                    { k: 'Formation', v: 'Master de droit\nAutodidacte en design & code' },
                    { k: 'Spécialités', v: 'Direction artistique\nArchitecture produit' },
                    { k: 'Conférences', v: 'EFB Paris, Awwwards\nMeetups DA' },
                    { k: 'Langues', v: 'Français, Anglais,\nItalien' },
                  ].map((row) => (
                    <div key={row.k}>
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mb-2">{row.k}</div>
                      <div className="text-sm text-primary whitespace-pre-line leading-relaxed">{row.v}</div>
                    </div>
                  ))}
                </div>
              </FadeUpSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RECOGNITION ═══ */}
      <section className="py-24 px-6 lg:px-8 border-t border-b border-rule">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 mb-10">
            <FadeUpSection>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Reconnaissance</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-primary leading-[1.1]">
                Cité, primé, cité à nouveau.
              </h2>
            </FadeUpSection>
            <FadeUpSection delay={0.1}>
              <p className="text-secondary leading-relaxed max-w-xl md:mt-3">
                Nos projets sont régulièrement distingués dans la presse sectorielle et sur les plateformes de référence de la profession — sans que ce soit une fin en soi.
              </p>
            </FadeUpSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-t border-rule">
            {[
              { label: 'Awwwards', items: ['Site of the Day — 2024', 'Honorable Mention — 2024', 'Developer Award — 2023'] },
              { label: 'CSS Design Awards', items: ['Website of the Day — 2024', 'Special Kudos UI — 2024'] },
              { label: 'Presse', items: ['Grazia — Portrait studio, 2024', 'L\'ADN — Dossier direction artistique, 2024'] },
              { label: 'Podcast & Conférences', items: ['Design Matters Paris — 2024', 'Numérique & Métiers — intervenant invité 2023'] },
            ].map((block, i) => (
              <FadeUpSection key={block.label} delay={i * 0.06}>
                <div className="pt-8 pb-8 pr-8">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-4">{block.label}</div>
                  <ul className="space-y-3">
                    {block.items.map((it) => (
                      <li key={it} className="text-sm text-primary leading-relaxed">{it}</li>
                    ))}
                  </ul>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 lg:px-8 bg-surface relative overflow-hidden">
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <h2 className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-primary mb-4 leading-tight">
              On en parle ?
            </h2>
            <p className="text-secondary max-w-md mx-auto mb-10">
              Premier échange offert. Briefing en 30 minutes.
            </p>
            <MagneticButton className="inline-block" strength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-sm tracking-wide rounded-sm hover:bg-accent/80 transition-all duration-300"
              >
                Nous contacter
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
