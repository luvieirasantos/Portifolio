'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
	pt: {
		title: "Lu Vieira",
		subtitle: "Desenvolvedor Full Stack",
		description: "Crio soluções completas com mais de 3 anos de experiência construindo aplicações escaláveis e contribuindo em equipes de desenvolvimento.",
		experience: "Anteriormente Analista de dados na",
		experience2: "e Desenvolvedor Frontend na",
		frontend: "Desenvolvimento Frontend",
		frontendItems: [
			"Arquiteturas React Modernas",
			"Otimização de Performance",
			"UIs Responsivas e Interativas"
		],
		backend: "Desenvolvimento Backend",
		backendItems: [
			"Design e Desenvolvimento de APIs",
			"Arquitetura de Banco de Dados",
			"Sistemas em Tempo Real"
		],
		devops: "DevOps e Cloud",
		devopsItems: [
			"Infraestrutura AWS",
			"Pipelines CI/CD",
			"Arquitetura Escalável"
		]
	},
	en: {
		title: "Lu Vieira",
		subtitle: "Full Stack Developer",
		description: "I craft end-to-end solutions with 3+ years of experience building scalable applications and contributing development teams.",
		experience: "Previously data analyst at",
		experience2: "and Frontend Developer at",
		frontend: "Frontend Development",
		frontendItems: [
			"Modern React Architectures",
			"Performance Optimization",
			"Responsive & Interactive UIs"
		],
		backend: "Backend Development",
		backendItems: [
			"API Design & Development",
			"Database Architecture",
			"Real-time Systems"
		],
		devops: "DevOps & Cloud",
		devopsItems: [
			"AWS Infrastructure",
			"CI/CD Pipelines",
			"Scalable Architecture"
		]
	}
};

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
							{t.title}
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">{t.subtitle}</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							{t.description}
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							{t.experience} <span className="text-blue-400">Frubana</span> {t.experience2}{' '}
							<span className="text-purple-400">PittaSports</span>
						</p>
					</div>
					
					<div className="flex flex-wrap justify-center gap-2 md:gap-3">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">TypeScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">React & Next.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Node.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Python</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">AWS</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">SQL</span>
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">{t.frontend}</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									{t.frontendItems.map((item, index) => (
										<li key={index} className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
											{item}
										</li>
									))}
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">{t.backend}</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									{t.backendItems.map((item, index) => (
										<li key={index} className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
											{item}
										</li>
									))}
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">{t.devops}</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									{t.devopsItems.map((item, index) => (
										<li key={index} className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
