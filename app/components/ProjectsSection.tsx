'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
	pt: {
		title: "Projetos Full Stack",
		offline: {
			title: "Conexão Solidária - Plataforma de Comunicação Offline",
			description: "Aplicativo de troca de mensagens offline via Bluetooth, criado para conectar pessoas em comunidades e cidades durante eventos extremos como guerras e desastres naturais. Permite comunicação sem internet, garantindo acesso à informação e suporte em situações críticas.",
			frontendTitle: "Tecnologias Mobile & Frontend",
			frontendItems: [
				"React Native para multiplataforma",
				"Interface intuitiva e acessível",
				"Notificações locais e histórico offline",
				"Design responsivo para diferentes dispositivos"
			],
			backendTitle: "Tecnologias Backend & Conectividade",
			backendItems: [
				"C# e Java para integração Bluetooth",
				"API REST para sincronização quando online",
				"Gerenciamento seguro de mensagens",
				"Armazenamento local criptografado"
			],
			achievementsTitle: "Impacto Social e Funcionalidades",
			achievementsItems: [
				"Comunicação garantida sem internet",
				"Suporte a grupos e mensagens privadas",
				"Baixo consumo de bateria",
				"Adotado em simulações de emergência"
			],
			architectureTitle: "Arquitetura do Sistema"
		},
		porto: {
			title: "Porto - AutoDiagnóstico (Porto Seguro)",
			description: "Aplicativo desenvolvido para a Porto Seguro que realiza diagnóstico automático de veículos ao chegarem nas oficinas credenciadas. Permite agendar atendimento com mecânico, comprar peças diretamente pelo app e gerenciar todos os seus veículos cadastrados.",
			frontendTitle: "Funcionalidades do App & Frontend",
			frontendItems: [
				"Agendamento rápido com mecânicos especializados",
				"Interface intuitiva para cadastro e visualização de veículos",
				"Compra de peças automotivas integrada",
				"Notificações sobre status do diagnóstico e manutenção"
			],
			backendTitle: "Tecnologias Backend & Integrações",
			backendItems: [
				"Integração com sistemas da Porto Seguro",
				"API REST para CRUD de veículos e agendamentos",
				"Banco de dados seguro para informações dos clientes",
				"Módulo de diagnóstico automatizado via sensores e OBD-II"
			],
			achievementsTitle: "Destaques e Benefícios",
			achievementsItems: [
				"Redução do tempo de atendimento nas oficinas",
				"Transparência no processo de manutenção",
				"Histórico completo de diagnósticos e serviços",
				"Acesso facilitado a peças originais"
			],
			architectureTitle: "Arquitetura do Sistema"
		},
		mottu: {
			title: "Mottu - Sistema de Mapeamento e Gestão de Pátio",
			description: "Sistema completo e escalável para mapeamento e gestão de pátio de motos, dividido em três módulos: organização do pátio com zonas e QR Codes, localização por Bluetooth (BLE) com ESP32, e IoT embarcado nas motos.",
			frontendTitle: "Organização do Pátio & Interface",
			frontendItems: [
				"Divisão do pátio em zonas numeradas (A1, B2, ...)",
				"QR Codes fixos para localização via app",
				"Interface digital interativa (web/app)",
				"Visualização em tempo real das zonas"
			],
			backendTitle: "Localização BLE & IoT",
			backendItems: [
				"ESP32 como receptor de sinais BLE",
				"Estimativa de zona pela força do sinal (RSSI)",
				"MVP com celulares simulando motos",
				"Futuro: ESP32 embarcado em cada moto"
			],
			achievementsTitle: "Destaques e Benefícios",
			achievementsItems: [
				"Gestão eficiente do pátio e localização rápida",
				"Escalável para centenas de motos",
				"Integração com sistemas de IoT",
				"Pronto para expansão com hardware dedicado"
			],
			architectureTitle: "Arquitetura do Sistema"
		},
		analytics: {
			title: "Plataforma de Analytics em Tempo Real",
			description: "Uma plataforma de analytics escalável processando mais de 1M de eventos por minuto com dashboards em tempo real e insights baseados em ML.",
			frontendTitle: "Recursos Frontend",
			frontendItems: [
				"Visualização de Dados em Tempo Real",
				"Dashboards Interativos",
				"Componentes de Gráficos Customizados",
				"Ferramentas de Exportação de Dados"
			],
			backendTitle: "Pipeline Backend",
			backendItems: [
				"Apache Kafka Streams",
				"ClickHouse Analytics DB",
				"Processamento de Dados Python",
				"Redis Time Series"
			],
			performanceTitle: "Métricas de Performance",
			performanceItems: [
				"1M+ Eventos/Minuto Processados",
				"Resposta de Query Sub-segundo",
				"99.99% de Precisão dos Dados"
			],
			architectureTitle: "Arquitetura de Fluxo de Dados"
		}
	},
	en: {
		title: "Full Stack Projects",
		offline: {
			title: "Conexão Solidária - Offline Communication Platform",
			description: "Offline messaging app via Bluetooth, designed to connect people in communities and cities during extreme events such as wars and natural disasters. Enables communication without internet, ensuring access to information and support in critical situations.",
			frontendTitle: "Mobile & Frontend Technologies",
			frontendItems: [
				"React Native for cross-platform",
				"Intuitive and accessible interface",
				"Local notifications and offline history",
				"Responsive design for various devices"
			],
			backendTitle: "Backend & Connectivity Technologies",
			backendItems: [
				"C# and Java for Bluetooth integration",
				"REST API for online sync",
				"Secure message management",
				"Encrypted local storage"
			],
			achievementsTitle: "Social Impact & Features",
			achievementsItems: [
				"Guaranteed communication without internet",
				"Support for groups and private messages",
				"Low battery consumption",
				"Adopted in emergency simulations"
			],
			architectureTitle: "System Architecture"
		},
		porto: {
			title: "Porto - AutoDiagnosis (Porto Seguro)",
			description: "App developed for Porto Seguro that performs automatic vehicle diagnostics upon arrival at authorized workshops. Allows scheduling with mechanics, purchasing parts directly in the app, and managing all your registered vehicles.",
			frontendTitle: "App Features & Frontend",
			frontendItems: [
				"Quick scheduling with specialized mechanics",
				"Intuitive interface for vehicle registration and overview",
				"Integrated automotive parts purchase",
				"Notifications about diagnosis and maintenance status"
			],
			backendTitle: "Backend Technologies & Integrations",
			backendItems: [
				"Integration with Porto Seguro systems",
				"REST API for vehicle and appointment CRUD",
				"Secure database for customer information",
				"Automated diagnostic module via sensors and OBD-II"
			],
			achievementsTitle: "Highlights & Benefits",
			achievementsItems: [
				"Reduced service time at workshops",
				"Transparency in the maintenance process",
				"Complete history of diagnostics and services",
				"Easy access to original parts"
			],
			architectureTitle: "System Architecture"
		},
		mottu: {
			title: "Mottu - Yard Mapping and Management System",
			description: "Complete and scalable system for mapping and managing motorcycle yards, divided into three modules: yard organization with zones and QR Codes, Bluetooth (BLE) location with ESP32, and embedded IoT on motorcycles.",
			frontendTitle: "Yard Organization & Interface",
			frontendItems: [
				"Yard divided into numbered zones (A1, B2, ...)",
				"Fixed QR Codes for location via app",
				"Interactive digital interface (web/app)",
				"Real-time zone visualization"
			],
			backendTitle: "BLE Location & IoT",
			backendItems: [
				"ESP32 as BLE signal receiver",
				"Zone estimation by signal strength (RSSI)",
				"MVP with phones simulating motorcycles",
				"Future: ESP32 embedded in each motorcycle"
			],
			achievementsTitle: "Highlights & Benefits",
			achievementsItems: [
				"Efficient yard management and quick location",
				"Scalable to hundreds of motorcycles",
				"Integration with IoT systems",
				"Ready for expansion with dedicated hardware"
			],
			architectureTitle: "System Architecture"
		},
		analytics: {
			title: "Real-time Analytics Platform",
			description: "A scalable analytics platform processing 1M+ events per minute with real-time dashboards and ML-powered insights.",
			frontendTitle: "Frontend Features",
			frontendItems: [
				"Real-time Data Visualization",
				"Interactive Dashboards",
				"Custom Chart Components",
				"Data Export Tools"
			],
			backendTitle: "Backend Pipeline",
			backendItems: [
				"Apache Kafka Streams",
				"ClickHouse Analytics DB",
				"Python Data Processing",
				"Redis Time Series"
			],
			performanceTitle: "Performance Metrics",
			performanceItems: [
				"1M+ Events/Minute Processing",
				"Sub-second Query Response",
				"99.99% Data Accuracy"
			],
			architectureTitle: "Data Flow Architecture"
		}
	}
};

export default function ProjectsSection() {
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					{t.title}
				</motion.h2>

				<div className="space-y-16">
					{/* E-commerce Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">{t.offline.title}</h3>
										<p className="text-gray-400">
											{t.offline.description}
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">{t.offline.frontendTitle}</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{t.offline.frontendItems.map((item, index) => (
													<li key={index}>• {item}</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">{t.offline.backendTitle}</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{t.offline.backendItems.map((item, index) => (
													<li key={index}>• {item}</li>
												))}
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">{t.offline.achievementsTitle}</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											{t.offline.achievementsItems.map((item, index) => (
												<li key={index}>• {item}</li>
											))}
										</ul>
									</div>
								</div>

								<div>
									<h4 className="text-sm font-semibold text-gray-400 mb-4">{t.offline.architectureTitle}</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* App Mobile */}
											<g>
												<rect x="20" y="20" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="105" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													App Mobile (Usuário)
												</text>
											</g>
											{/* Bluetooth */}
											<g>
												<rect x="210" y="20" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="295" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Conexão Bluetooth
												</text>
											</g>
											{/* Armazenamento Local */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Armazenamento Local
												</text>
											</g>
											{/* API de Sincronização */}
											<g>
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													API de Sincronização
												</text>
											</g>
											{/* Grupos & Mensagens */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Grupos & Mensagens
												</text>
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Notificações Locais
												</text>
											</g>
											{/* Histórico & Backup */}
											<g>
												<rect x="115" y="220" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="245" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Histórico & Backup
												</text>
											</g>
											{/* Linhas de conexão */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="105" y1="60" x2="105" y2="80" />
												<line x1="295" y1="60" x2="295" y2="80" />
												<line x1="105" y1="120" x2="105" y2="150" />
												<line x1="295" y1="120" x2="295" y2="150" />
												<line x1="105" y1="190" x2="200" y2="220" />
												<line x1="295" y1="190" x2="200" y2="220" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Real-time Analytics Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">{t.porto.title}</h3>
										<p className="text-gray-400">
											{t.porto.description}
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">{t.porto.frontendTitle}</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{t.porto.frontendItems.map((item, index) => (
													<li key={index}>• {item}</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">{t.porto.backendTitle}</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{t.porto.backendItems.map((item, index) => (
													<li key={index}>• {item}</li>
												))}
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">{t.porto.achievementsTitle}</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											{t.porto.achievementsItems.map((item, index) => (
												<li key={index}>• {item}</li>
											))}
										</ul>
									</div>
								</div>

								<div>
									<h4 className="text-sm font-semibold text-gray-400 mb-4">{t.porto.architectureTitle}</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* App Mobile */}
											<g>
												<rect x="20" y="20" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="105" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													App Mobile (Usuário)
												</text>
											</g>
											{/* API Porto Seguro */}
											<g>
												<rect x="210" y="20" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="295" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													API Porto Seguro
												</text>
											</g>
											{/* Módulo Diagnóstico OBD-II */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Diagnóstico OBD-II / Sensores
												</text>
											</g>
											{/* Banco de Dados de Veículos */}
											<g>
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Banco de Dados de Veículos
												</text>
											</g>
											{/* Agendamento e Peças */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Agendamento & Mecânicos
												</text>
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Compra de Peças
												</text>
											</g>
											{/* Notificações */}
											<g>
												<rect x="115" y="220" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="245" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Notificações & Histórico
												</text>
											</g>
											{/* Linhas de conexão */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="105" y1="60" x2="105" y2="80" />
												<line x1="295" y1="60" x2="295" y2="80" />
												<line x1="105" y1="120" x2="105" y2="150" />
												<line x1="295" y1="120" x2="295" y2="150" />
												<line x1="105" y1="190" x2="200" y2="220" />
												<line x1="295" y1="190" x2="200" y2="220" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Mottu Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">{t.mottu.title}</h3>
										<p className="text-gray-400">{t.mottu.description}</p>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">{t.mottu.frontendTitle}</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{t.mottu.frontendItems.map((item, index) => (
													<li key={index}>• {item}</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">{t.mottu.backendTitle}</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{t.mottu.backendItems.map((item, index) => (
													<li key={index}>• {item}</li>
												))}
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">{t.mottu.achievementsTitle}</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											{t.mottu.achievementsItems.map((item, index) => (
												<li key={index}>• {item}</li>
											))}
										</ul>
									</div>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-gray-400 mb-4">{t.mottu.architectureTitle}</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Interface Web/App */}
											<g>
												<rect x="20" y="20" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="105" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Interface Web/App
												</text>
											</g>
											{/* QR Codes & Zonas */}
											<g>
												<rect x="210" y="20" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="295" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													QR Codes & Zonas
												</text>
											</g>
											{/* ESP32 BLE */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													ESP32 BLE (Receptor)
												</text>
											</g>
											{/* Estimativa RSSI */}
											<g>
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Estimativa de Zona (RSSI)
												</text>
											</g>
											{/* IoT Embarcado */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													IoT Embarcado nas Motos
												</text>
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Integração Backend
												</text>
											</g>
											{/* Gestão & Monitoramento */}
											<g>
												<rect x="115" y="220" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="245" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Gestão & Monitoramento
												</text>
											</g>
											{/* Linhas de conexão */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="105" y1="60" x2="105" y2="80" />
												<line x1="295" y1="60" x2="295" y2="80" />
												<line x1="105" y1="120" x2="105" y2="150" />
												<line x1="295" y1="120" x2="295" y2="150" />
												<line x1="105" y1="190" x2="200" y2="220" />
												<line x1="295" y1="190" x2="200" y2="220" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
