'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import About from './components/About'
import Projects from './components/Projects'
import Materials from './components/Materials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import MobileMenu from './components/MobileMenu'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-display font-bold text-primary">
              Portfolio
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <Link href="#sobre" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors">
                  Sobre
                </Link>
                <Link href="#projetos" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors">
                  Projetos
                </Link>
                <Link href="#materiais" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors">
                  Materiais
                </Link>
                <Link href="#contato" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors">
                  Contato
                </Link>
              </div>
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900 dark:text-white">
              Transformo ideias em{' '}
              <span className="text-primary">soluções digitais</span> e{' '}
              <span className="text-primary">campanhas memoráveis</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Desenvolvedor web e especialista em marketing digital, unindo tecnologia e criatividade para criar experiências únicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#projetos" 
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Ver Projetos
              </Link>
              <Link 
                href="#contato" 
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a 
                href="https://github.com/luvieirasantos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/luhenrivieira/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/vieirasantx/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Projects />
      <Materials />
      <Contact />
    </main>
  )
} 