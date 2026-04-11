import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { TextReveal, FadeUpSection, StaggerContainer, StaggerItem } from '../components/SuperEffects'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scaleSpring = useSpring(scale, springConfig)

  return (
    <div ref={containerRef} className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 bg-bg-primary"
          style={{ y, scale: scaleSpring }}
        />
        
        {/* Ambient Glow Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{ opacity }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-text-secondary uppercase">
              Créateur de sites pour cabinets d'avocats
            </span>
          </motion.div>

          {/* Main Headline with Text Reveal */}
          <div className="mb-8">
            <TextReveal 
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold text-text-primary leading-[1.1]"
              delay={0.4}
            >
              Des sites qui convertissent
            </TextReveal>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Je conçois des expériences web premium pour les cabinets d'avocats exigeants. 
            Design sur-mesure, animations fluides, et résultats mesurables.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg-primary font-semibold overflow-hidden transition-all duration-300 hover:bg-accent-hover glow-hover"
            >
              <span className="relative z-10">Démarrer un projet</span>
              <svg 
                className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 px-8 py-4 border border-text-tertiary text-text-primary font-medium transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Voir les réalisations
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">15+</div>
                <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider">Sites livrés</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">100%</div>
                <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider">Sur-mesure</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">Juriste</div>
                <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider">Profile unique</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] tracking-widest text-text-tertiary uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Jurist Section */}
      <FadeUpSection className="py-32 px-6 lg:px-8" delay={0}>
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4 block">
                Pourquoi un juriste ?
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                Je parle votre langage
              </h2>
              <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
                Ancien juriste d'affaires, j'ai compris ce qui manque aux cabinets : 
                des sites qui reflètent leur excellence sans tomber dans les clichés 
                du droit corporate.
              </p>
              <p className="font-body text-lg text-text-secondary leading-relaxed">
                Je traduis votre expertise en expériences digitales qui impressionnent 
                vos clients et rassurent vos prospects.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-bg-elevated relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                {/* Abstract geometric pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" className="text-accent" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* Featured Work Preview */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <FadeUpSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4 block">
                  Sélection
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                  Réalisations récentes
                </h2>
              </div>
              <Link
                to="/realisations"
                className="hidden md:inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors group"
              >
                Voir tout
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeUpSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {[
              { name: 'LexConfig', type: 'Site vitrine', year: '2024' },
              { name: 'Cabinet DSA', type: 'Identité digitale', year: '2024' },
              { name: 'Avocats Associés', type: 'Site corporate', year: '2023' },
              { name: 'LexInnov', type: 'Landing page', year: '2023' },
            ].map((project, _index) => (
              <StaggerItem key={project.name}>
                <Link 
                  to="/realisations" 
                  className="group block card-hover bg-bg-elevated overflow-hidden"
                >
                  <div className="aspect-[16/10] bg-bg-hover relative overflow-hidden img-zoom">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-text-tertiary group-hover:text-text-primary transition-colors">
                        {project.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                        {project.type}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-text-tertiary">{project.year}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-bg-elevated" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <div className="max-w-content mx-auto text-center relative z-10">
          <FadeUpSection>
            <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-6 block">
              Prochain projet
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Prêt à démarquer<br />votre cabinet ?
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-xl mx-auto mb-12">
              Discutons de votre projet. Première consultation gratuite, 
              sans engagement.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-bg-primary font-semibold text-lg transition-all duration-300 hover:bg-accent-hover glow-hover"
            >
              <span>Prendre rendez-vous</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeUpSection>
        </div>
      </section>
    </div>
  )
}
