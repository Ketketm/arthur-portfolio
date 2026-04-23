import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextReveal, ClipReveal } from '../components/SuperEffects'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // No backend yet — open the user's email client with a prefilled draft
    // so the message actually reaches us. When a form service (Formspree,
    // Resend, etc.) is wired in, replace this with a fetch POST.
    const subject = `Projet — ${formData.company || formData.name}`
    const body = [
      `Nom : ${formData.name}`,
      `Email : ${formData.email}`,
      `Marque / société : ${formData.company}`,
      formData.phone ? `Téléphone : ${formData.phone}` : null,
      '',
      formData.message || '(pas de message)',
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:contact@nérée.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass = "w-full px-4 py-3 bg-surface border border-rule-strong rounded-sm text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted"

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.span>
          <TextReveal
            className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-primary mb-6 leading-[1.05] tracking-[-0.02em]"
            delay={0.1}
            stagger={0.05}
          >
            Discutons de votre projet
          </TextReveal>
          <motion.p
            className="text-secondary max-w-xl leading-relaxed"
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
              <div className="p-8 bg-surface rounded-md text-center">
                <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Jeanne Dupont" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="contact@marque.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">
                    Marque / société
                  </label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className={inputClass} placeholder="Atelier Volta" />
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
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className={`${inputClass} resize-none`} placeholder="Décrivez votre marque, votre projet et votre ambition..." />
                </div>

                <button type="submit" className="w-full py-4 bg-accent text-white font-semibold text-sm rounded-sm transition-all duration-200 hover:bg-accent/80">
                  Envoyer le message
                </button>

                <p className="text-xs text-muted text-center">
                  Ou écrivez-nous directement :{' '}
                  <a href="mailto:contact@nérée.com" className="text-accent hover:text-primary transition-colors">
                    contact@nérée.com
                  </a>
                </p>
              </form>
            )}
          </ClipReveal>

          {/* Contact info */}
          <ClipReveal direction="right" delay={0.2} className="space-y-6">
            <div className="p-6 bg-surface rounded-md">
              <h3 className="font-serif text-lg text-primary mb-3">Un échange direct</h3>
              <p className="text-sm text-secondary mb-4">
                Un appel de 20 minutes vaut souvent plus qu'un long formulaire.
                Appelez ou écrivez-nous, on répond sous 4 heures.
              </p>
              <a
                href="tel:+33782447255"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-rule-strong text-primary text-sm font-medium rounded-sm hover:border-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                07 82 44 72 55
              </a>
            </div>

            <div className="p-6 bg-surface rounded-md">
              <h3 className="font-serif text-lg text-primary mb-4">Coordonnées</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 py-3 border-b border-rule">
                  <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted mb-0.5">Email</div>
                    <a href="mailto:contact@nérée.com" className="text-primary hover:text-accent transition-colors font-medium">contact@nérée.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted mb-0.5">Téléphone</div>
                    <a href="tel:+33782447255" className="text-primary hover:text-accent transition-colors font-medium">07 82 44 72 55</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-surface rounded-md">
              <p className="text-sm text-secondary">
                <span className="text-accent font-semibold">Délai de réponse :</span> sous 4 heures en moyenne.
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
