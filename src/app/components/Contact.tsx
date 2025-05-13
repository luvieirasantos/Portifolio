'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Vamos <span className="text-primary">Conversar</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e parcerias. Entre em contato para discutirmos como posso ajudar no seu próximo projeto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Como posso ajudar?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FaEnvelope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                      <a
                        href="mailto:henrique3.terceiro@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                      >
                        henrique3.terceiro@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FaPhone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Telefone</h4>
                      <a
                        href="tel:+5511948803155"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                      >
                        (11) 94880-3155
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Localização</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        São Paulo, SP - Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
                  Redes Sociais
                </h3>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/luvieirasantos"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/luhenrivieira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/vieirasantx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
                  Currículo
                </h3>
                <motion.a
                  href="/Curriculo%20-%20marketing%20(2).pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 