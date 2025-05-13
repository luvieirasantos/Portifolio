'use client'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="https://github.com/luvieirasantos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luhenrivieira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/vieirasantx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Lu Vieira. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 