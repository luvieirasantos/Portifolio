'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaFilePdf, FaFileImage, FaFileAlt, FaDownload, FaFilter } from 'react-icons/fa'

const materials = [
  {
    title: 'Apresentação de Projeto',
    category: 'Design',
    type: 'pdf',
    url: '/materials/presentation.pdf',
    size: '2.4 MB',
    date: '2024-03-01'
  },
  {
    title: 'Análise de Campanha',
    category: 'Campanhas',
    type: 'pdf',
    url: '/materials/campaign-analysis.pdf',
    size: '1.8 MB',
    date: '2024-02-28'
  },
  {
    title: 'Relatório de Métricas',
    category: 'Documentos Técnicos',
    type: 'pdf',
    url: '/materials/metrics.pdf',
    size: '3.2 MB',
    date: '2024-02-25'
  },
  {
    title: 'Mockup de Campanha',
    category: 'Design',
    type: 'image',
    url: '/materials/mockup.jpg',
    size: '4.5 MB',
    date: '2024-02-20'
  },
  {
    title: 'Estratégia de Conteúdo',
    category: 'Campanhas',
    type: 'doc',
    url: '/materials/content-strategy.pdf',
    size: '1.5 MB',
    date: '2024-02-15'
  },
]

const categories = ['Todos', 'Design', 'Campanhas', 'Documentos Técnicos']

export default function Materials() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredMaterials = materials.filter(
    (material) => selectedCategory === 'Todos' || material.category === selectedCategory
  )

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FaFilePdf className="w-6 h-6 text-red-500" />
      case 'image':
        return <FaFileImage className="w-6 h-6 text-blue-500" />
      case 'doc':
        return <FaFileAlt className="w-6 h-6 text-green-500" />
      default:
        return <FaFileAlt className="w-6 h-6 text-gray-500" />
    }
  }

  return (
    <section id="materiais" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <FaFilter className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">
              Materiais <span className="text-primary">Disponíveis</span>
            </h2>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material, index) => (
              <motion.a
                key={material.title}
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      {getFileIcon(material.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {material.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{material.category}</span>
                        <span>•</span>
                        <span>{material.size}</span>
                        <span>•</span>
                        <span>{new Date(material.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {material.type.toUpperCase()}
                    </span>
                    <FaDownload className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 