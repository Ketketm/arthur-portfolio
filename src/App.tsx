import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StarField from './components/StarField'
import LoadingScreen from './components/LoadingScreen'
import ContactWidget from './components/ContactWidget'
import { useTheme } from './hooks/useTheme'
import { IntroProvider, useIntroPhase } from './hooks/useIntro'
import Home from './pages/Home'
import Work from './pages/Work'
import Process from './pages/Process'
import About from './pages/About'
import Contact from './pages/Contact'

function AppShell() {
  const location = useLocation()
  const lenisRef = useRef<Lenis | null>(null)
  const { theme, toggleTheme } = useTheme()
  const phase = useIntroPhase()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true })
    lenisRef.current = lenis
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  // Block scroll while intro is playing
  useEffect(() => {
    if (phase === 'done') {
      document.body.style.overflow = ''
      lenisRef.current?.start()
    } else {
      document.body.style.overflow = 'hidden'
      lenisRef.current?.stop()
    }
  }, [phase])

  // Reveal page content as soon as morph starts
  const contentVisible = phase !== 'loading'

  return (
    <div className="relative min-h-screen bg-page text-primary">
      <LoadingScreen />
      <StarField />
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <motion.div
          initial={false}
          animate={{ opacity: contentVisible ? 1 : 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/inspiration" element={<Work />} />
              <Route path="/methode" element={<Process />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </motion.div>
      </div>
      <ContactWidget />
    </div>
  )
}

export default function App() {
  return (
    <IntroProvider>
      <AppShell />
    </IntroProvider>
  )
}
