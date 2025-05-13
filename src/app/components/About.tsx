'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCode, FaPalette, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa'

const skills = [
  {
    category: 'Desenvolvimento',
    icon: <FaCode className="w-6 h-6" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    category: 'Design',
    icon: <FaPalette className="w-6 h-6" />,
    items: ['UI/UX', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator']
  },
  {
    category: 'Marketing',
    icon: <FaChartLine className="w-6 h-6" />,
    items: ['Social Media', 'SEO', 'Analytics', 'Content Strategy', 'Branding']
  }
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Sobre <span className="text-primary">Mim</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Sou um profissional apaixonado por tecnologia e marketing digital, com experiência em desenvolvimento web e estratégias de marketing. Minha abordagem combina habilidades técnicas com criatividade para criar soluções inovadoras.
              </p>
            </motion.div>

            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white dark:bg-gray-800 shadow-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaLightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-gray-900 dark:text-white">Criatividade</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Sempre inovando</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaRocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-gray-900 dark:text-white">Resultados</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Foco em performance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 