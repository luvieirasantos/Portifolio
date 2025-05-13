'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaUsers, FaStar, FaChartLine } from 'react-icons/fa'
import { TechProject } from '@/app/data/projects'

interface TechProjectCardProps {
  project: TechProject
  index: number
}

export default function TechProjectCard({ project, index }: TechProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-display font-semibold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-1">
              <FaUsers className="w-4 h-4" />
              <span className="font-semibold">{project.stats.users}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Usuários</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-1">
              <FaStar className="w-4 h-4" />
              <span className="font-semibold">{project.stats.rating}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Avaliação</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-1">
              <FaChartLine className="w-4 h-4" />
              <span className="font-semibold">{project.stats.performance}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Performance</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span>Código</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
} 