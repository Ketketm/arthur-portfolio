import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GrainOverlay, SmoothCursor } from './components/SuperEffects'
import Home from './pages/Home'
import Work from './pages/Work'
import Process from './pages/Process'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    })
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

  return (
    <div className="relative min-h-screen bg-page text-primary">
      <GrainOverlay />
      <SmoothCursor />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Work />} />
          <Route path="/methode" element={<Process />} />
          <Route path="/tarifs" element={<Pricing />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
