import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lu Vieira | Desenvolvimento Web & Marketing Digital',
  description: 'Portfólio profissional de Lu Vieira combinando desenvolvimento web e marketing digital',
  keywords: [
    'Lu Vieira',
    'desenvolvimento web',
    'marketing digital',
    'front-end',
    'social media',
    'portfolio',
    'desenvolvedor',
    'design',
    'criatividade',
  ],
  authors: [{ name: 'Lu Vieira' }],
  creator: 'Lu Vieira',
  publisher: 'Lu Vieira',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://luvieira.com.br',
    title: 'Lu Vieira | Desenvolvimento Web & Marketing Digital',
    description: 'Portfólio profissional de Lu Vieira combinando desenvolvimento web e marketing digital',
    siteName: 'Lu Vieira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lu Vieira | Desenvolvimento Web & Marketing Digital',
    description: 'Portfólio profissional de Lu Vieira combinando desenvolvimento web e marketing digital',
    creator: '@luhenrivieira',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
} 