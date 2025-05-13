'use client'

import { motion } from 'framer-motion'
import { FaCode, FaChartLine } from 'react-icons/fa'
import { techProjects, marketingProjects } from '@/app/data/projects'
import TechProjectCard from './projects/TechProjectCard'
import MarketingProjectCard from './projects/MarketingProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Projetos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore meus projetos de desenvolvimento e marketing digital
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Tech Projects Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <FaCode className="text-3xl text-primary" />
              <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">
                Projetos Técnicos
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techProjects.map((project, index) => (
                <TechProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Marketing Projects Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <FaChartLine className="text-3xl text-primary" />
              <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">
                Projetos de Marketing
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingProjects.map((project, index) => (
                <MarketingProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 