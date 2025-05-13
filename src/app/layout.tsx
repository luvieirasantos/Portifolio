import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lu Vieira | Desenvolvimento Web & Marketing Digital',
  description: 'Portfolio profissional de Lu Vieira combinando desenvolvimento web e marketing digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>

        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 