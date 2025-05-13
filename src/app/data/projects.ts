export interface TechProject {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  stats: {
    users: string
    rating: string
    performance: string
  }
}

export interface MarketingProject {
  id: string
  title: string
  description: string
  image: string
  platforms: string[]
  results: string
  metrics: {
    reach: string
    engagement: string
    conversion: string
  }
}

// Projetos Técnicos
export const techProjects: TechProject[] = [
  {
    id: 'PortoSeguro',
    title: 'Porto Seguro Auto Atendimento',
    description: 'Plataforma de auto atendimento para a Porto Seguro, com integração com Chat Bot e banco de dados.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-FABhyQMoP2KhwDqbsM4giJw4E7uVqTGUQ&s',
    technologies: ['Next.js', 'TypeScript', 'Banco de Dados', 'Tailwind CSS'],
    github: 'https://github.com/luvieirasantos/porto-autodiagnostico',
    demo: 'https://porto-autodiagnostico.vercel.app',
    stats: {
      users: '10k+',
      rating: '4.9',
      performance: '98%'
    }
  },
  {
    id: 'Mottu',
    title: 'Sistema de Gerenciamento de motos para a Mottu',
    description: 'Sistema de Gerenciamento de motos no pátio em tempo real usando bluetooth para a identificação das motos.',
    image: 'https://media.licdn.com/dms/image/sync/v2/D4D27AQEjZp3yOwOK2A/articleshare-shrink_1280_800/B4DZZoDCKiGcAU-/0/1745502348399?e=2147483647&v=beta&t=GTPJM4JyPDkstA-bUCyg_JNSvXV7R6_irh3rVEFv7Xw',
    technologies: ['React', 'BLE', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/luvieirasantos/mottu-app.git',
    demo: 'https://demo.com',
    stats: {
      users: '5k+',
      rating: '4.8',
      performance: '95%'
    }
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Site portfolio moderno com animações e design responsivo',
    image: 'https://cdn-icons-png.flaticon.com/512/686/686104.png',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/luvieirasantos/Portifolio',
    demo: 'https://demo.com',
    stats: {
      users: '2k+',
      rating: '4.7',
      performance: '99%'
    }
  }
]

// Projetos de Marketing
export const marketingProjects: MarketingProject[] = [
  {
    id: 'tennisbar',
    title: 'Marketing Digital - Tennisbar',
    description: 'Implementação completa do marketing digital através das redes sociais, incluindo criação de artes e copys estratégicas para aumentar o engajamento e visibilidade da marca.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq23sLCYEdVQ30aPEZDSr0Kmnj6qRYZcmeBQ&s',
    platforms: ['Instagram', 'Facebook', 'LinkedIn'],
    results: 'Aumento de 200% no engajamento orgânico',
    metrics: {
      reach: '50k+',
      engagement: '8.5%',
      conversion: '15%'
    }
  },
  {
    id: 'frubana',
    title: 'Growth Marketing - Frubana',
    description: 'Estratégia de crescimento abrangente incluindo gerenciamento de briefings, calendário de posts, campanhas out of home e implementação de descontos estratégicos para públicos segmentados.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5mFFnKYA9yjWMK1jIAzQzfKhnHtJlDO-MQ&s',
    platforms: ['Instagram', 'Facebook', 'OOH', 'Email Marketing'],
    results: 'Aumento de 150% em conversões de novos clientes',
    metrics: {
      reach: '100k+',
      engagement: '12%',
      conversion: '25%'
    }
  },
  {
    id: 'pittasports',
    title: 'Social Media - PittaSports',
    description: 'Criação e implementação completa da presença digital da empresa, desenvolvendo estratégias de conteúdo, gestão de comunidade e campanhas integradas.',
    image: 'https://images.tcdn.com.br/img/img_prod/879259/180_camisa_ciclista_manga_curta_ziper_parcial_hanya_1273_1_562815ff8d622bd7d97bc61a2abe6ae6.jpg',
    platforms: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn'],
    results: 'Crescimento de 300% na base de seguidores',
    metrics: {
      reach: '200k+',
      engagement: '15%',
      conversion: '20%'
    }
  }
] 