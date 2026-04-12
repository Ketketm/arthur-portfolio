import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextReveal, ClipReveal } from '../components/SuperEffects'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    barreau: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass = "w-full px-4 py-3 bg-page border border-rule-strong rounded-sm text-primary text-sm focus:outline-none focus:border-bronze transition-colors placeholder:text-muted"

  return (
    <motion.div
      className="min-h-screen bg-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="pt-28 pb-16 px-6 lg:px-8 border-b border-rule">
        <div className="max-w-content mx-auto text-center">
          <motion.span
            className="section-label mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.span>
          <TextReveal
            className="font-serif text-h1 lg:text-hero text-primary mb-6 leading-[1.1]"
            delay={0.1}
            stagger={0.05}
          >
            Discutons de votre projet
          </TextReveal>
          <motion.p
            className="text-body text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Nous répondons sous 4 heures en moyenne. Première consultation gratuite.
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-6 lg:px-8">
      <div className="max-w-content mx-auto">

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <ClipReveal direction="left" delay={0.1}>
            {submitted ? (
              <div className="p-8 bg-bronze-light rounded-md text-center">
                <svg className="w-10 h-10 text-bronze mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-serif text-xl text-primary mb-2">Message envoyé</h3>
                <p className="text-secondary text-sm">Nous vous répondons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                    Nom complet
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Maître Jean Dupont" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="contact@cabinet.fr" />
                </div>
                <div>
                  <label htmlFor="barreau" className="block text-sm font-medium text-primary mb-1.5">
                    Barreau
                  </label>
                  <input type="text" id="barreau" name="barreau" value={formData.barreau} onChange={handleChange} required className={inputClass} placeholder="Barreau de Paris" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
                    Téléphone (optionnel)
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Décrivez votre cabinet et vos besoins..." />
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-page font-semibold text-sm rounded-sm transition-opacity duration-200 hover:opacity-85">
                  Envoyer le message
                </button>

                <p className="text-xs text-muted text-center">
                  Ou écrivez-nous directement :{' '}
                  <a href="mailto:contact@verne.fr" className="text-bronze hover:text-bronze-hover transition-colors">
                    contact@verne.fr
                  </a>
                </p>
              </form>
            )}
          </ClipReveal>

          {/* Contact info */}
          <ClipReveal direction="right" delay={0.2} className="space-y-6">
            <div className="p-6 bg-surface rounded-md">
              <h3 className="font-serif text-lg text-primary mb-3">Prendre rendez-vous</h3>
              <p className="text-sm text-secondary mb-4">
                Réservez un appel de 20 minutes pour discuter de votre projet.
                Pas de préparation nécessaire — juste votre curiosité.
              </p>
              <a
                href="https://calendly.com/verne-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-rule-strong text-primary text-sm font-medium rounded-sm hover:border-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Voir les disponibilités
              </a>
            </div>

            <div className="p-6 bg-surface rounded-md">
              <h3 className="font-serif text-lg text-primary mb-4">Coordonnées</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 py-3 border-b border-rule">
                  <div className="w-8 h-8 rounded-full bg-bronze-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted mb-0.5">Email</div>
                    <a href="mailto:contact@verne.fr" className="text-primary hover:text-bronze transition-colors font-medium">contact@verne.fr</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-rule">
                  <div className="w-8 h-8 rounded-full bg-bronze-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted mb-0.5">Téléphone</div>
                    <a href="tel:+33100000000" className="text-primary hover:text-bronze transition-colors font-medium">01 00 00 00 00</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-full bg-bronze-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-bronze" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted mb-0.5">LinkedIn</div>
                    <a href="https://linkedin.com/company/verne-agency" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-bronze transition-colors font-medium">Verne</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-bronze-light rounded-md">
              <p className="text-sm text-secondary">
                <span className="text-bronze font-semibold">Délai de réponse :</span> sous 4 heures en moyenne.
                Si c'est urgent, appelez directement.
              </p>
            </div>
          </ClipReveal>
        </div>
      </div>
      </div>
    </motion.div>
  )
}
