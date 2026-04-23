import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntroPhase } from '../hooks/useIntro'

const PHONE_DISPLAY = '07 82 44 72 55'
const PHONE_TEL = '+33782447255'
const WHATSAPP = 'https://wa.me/33782447255'

export default function ContactWidget() {
  const phase = useIntroPhase()
  const [open, setOpen] = useState(false)

  if (phase !== 'done') return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-30 flex flex-col items-end gap-2"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="actions"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex flex-col items-end gap-2"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-full bg-page border border-rule-strong shadow-lg hover:border-accent transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-secondary group-hover:text-primary transition-colors">
                WhatsApp
              </span>
              <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="group flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-full bg-page border border-rule-strong shadow-lg hover:border-accent transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-secondary group-hover:text-primary transition-colors">
                {PHONE_DISPLAY}
              </span>
              <span className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fermer le widget de contact' : 'Ouvrir le widget de contact'}
        aria-expanded={open}
        className="relative w-14 h-14 rounded-full bg-accent text-white shadow-xl flex items-center justify-center hover:bg-accent-hover transition-all duration-300 hover:scale-105"
        style={{ boxShadow: '0 10px 30px rgba(107,157,196,0.35)' }}
      >
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" aria-hidden />
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          )}
        </motion.span>
      </button>
    </motion.div>
  )
}
