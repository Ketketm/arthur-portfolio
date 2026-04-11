import { useState } from 'react'
import { motion } from 'framer-motion'

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
    // Formspree integration would go here
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-paper-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium text-navy-900 mb-4">
            Contact
          </h1>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Prêt à créer votre identité digitale ? Je réponds sous 4 heures en moyenne.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="p-8 bg-gold-500/10 rounded-lg text-center">
                <svg className="w-12 h-12 text-gold-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-display text-xl text-navy-900 mb-2">Message envoyé</h3>
                <p className="text-navy-700">Je vous réponds dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-paper-100 border border-navy-700/20 rounded focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Maître Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-paper-100 border border-navy-700/20 rounded focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="contact@cabinet.fr"
                  />
                </div>

                <div>
                  <label htmlFor="barreau" className="block text-sm font-medium text-navy-900 mb-2">
                    Barreau
                  </label>
                  <input
                    type="text"
                    id="barreau"
                    name="barreau"
                    value={formData.barreau}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-paper-100 border border-navy-700/20 rounded focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Barreau de Paris"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-paper-100 border border-navy-700/20 rounded focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-paper-100 border border-navy-700/20 rounded focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Décrivez votre cabinet et vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy-900 text-paper-50 font-medium rounded hover:bg-navy-800 transition-colors"
                >
                  Envoyer le message
                </button>

                <p className="text-xs text-navy-700 text-center">
                  Ou écrivez-moi directement :{' '}
                  <a href="mailto:arthursouleil@gmail.com" className="text-gold-500 hover:underline">
                    arthursouleil@gmail.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Alternative contact methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-6 bg-paper-100 rounded-lg">
              <h3 className="font-display text-lg text-navy-900 mb-4">Prendre rendez-vous</h3>
              <p className="text-navy-700 text-sm mb-4">
                Réservez un appel de 20 minutes pour discuter de votre projet.
                Pas de préparation nécessaire — juste votre curiosité.
              </p>
              <a
                href="https://calendly.com/arthursouleil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-navy-900 text-navy-900 font-medium rounded hover:bg-navy-900 hover:text-paper-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Voir les disponibilités
              </a>
            </div>

            <div className="p-6 bg-paper-100 rounded-lg">
              <h3 className="font-display text-lg text-navy-900 mb-4">Coordonnées</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:arthursouleil@gmail.com" className="text-navy-700 hover:text-gold-500 transition-colors">
                    arthursouleil@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+33782447255" className="text-navy-700 hover:text-gold-500 transition-colors">
                    07 82 44 72 55
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <a href="https://linkedin.com/in/arthursouleil" target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-gold-500 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-navy-900 rounded-lg">
              <p className="text-paper-100/80 text-sm">
                <span className="text-gold-500 font-medium">Délai de réponse :</span> sous 4 heures en moyenne.
                Si c'est urgent, appelez-moi directement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
