import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Phase = 'loading' | 'morphing' | 'done'

const IntroContext = createContext<Phase>('done')

export const useIntroPhase = () => useContext(IntroContext)

export function IntroProvider({ children }: { children: ReactNode }) {
  // Always start the intro on every page load (no session caching).
  const [phase, setPhase] = useState<Phase>('loading')

  useEffect(() => {
    if (phase === 'done') return
    const t1 = setTimeout(() => setPhase('morphing'), 950)
    // Morph window must accommodate the staggered text + logo morph (the
    // logo morph kicks in 0.45s after the text and runs for 0.85s).
    const t2 = setTimeout(() => setPhase('done'), 2400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [phase])

  return <IntroContext.Provider value={phase}>{children}</IntroContext.Provider>
}
