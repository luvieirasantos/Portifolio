'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MarketingProject } from '@/app/data/projects'

interface MarketingProjectCardProps {
  project: MarketingProject
  index: number
}

export default function MarketingProjectCard({ project, index }: MarketingProjectCardProps) {
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
          {project.platforms.map((platform) => (
            <span
              key={platform}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {platform}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {project.metrics.reach}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Alcance</span>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {project.metrics.engagement}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Engajamento</span>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {project.metrics.conversion}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Conversão</span>
          </div>
        </div>
        <div className="bg-primary/10 rounded-lg p-4">
          <p className="text-primary font-semibold">{project.results}</p>
        </div>
      </div>
    </motion.div>
  )
} 