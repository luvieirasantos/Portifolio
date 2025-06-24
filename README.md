# Lu Vieira - Portfólio Full Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-blue?style=for-the-badge&logo=vercel)](https://luvieira.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lu%20Vieira-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/luhenrivieira)
[![GitHub](https://img.shields.io/badge/GitHub-luvieirasantos-black?style=for-the-badge&logo=github)](https://github.com/luvieirasantos)

## 👨‍💻 Sobre Mim

Olá! Sou **Lu Vieira**, um desenvolvedor Full Stack apaixonado por criar soluções completas e escaláveis. Com mais de 3 anos de experiência, tenho trabalhado em projetos que vão desde aplicações mobile até sistemas de analytics em tempo real.

### 🚀 Experiência Profissional

- **Analista de Dados** na **Frubana** - Análise de dados e insights de negócio
- **Desenvolvedor Frontend** na **PittaSports** - Desenvolvimento de interfaces responsivas e interativas

### 🛠️ Stack Tecnológica

**Frontend:**
- React & Next.js
- TypeScript
- Framer Motion
- Tailwind CSS

**Backend:**
- Node.js
- Python
- APIs REST
- Banco de dados SQL

**DevOps & Cloud:**
- AWS
- CI/CD Pipelines
- Docker
- Infraestrutura escalável

## 🎯 Projetos em Destaque

### 1. Conexão Solidária - Plataforma de Comunicação Offline
Aplicativo de troca de mensagens offline via Bluetooth para situações de emergência.

**Tecnologias:** React Native, C#, Java, APIs REST

### 2. Porto - AutoDiagnóstico (Porto Seguro)
Sistema de diagnóstico automático de veículos para oficinas credenciadas.

**Tecnologias:** React Native, APIs REST, Integração OBD-II

### 3. Mottu - Sistema de Mapeamento e Gestão de Pátio
Sistema completo para gestão de pátio de motos com localização BLE.

**Tecnologias:** ESP32, BLE, IoT, React Native

### 4. Plataforma de Analytics em Tempo Real
Processamento de mais de 1M de eventos por minuto com dashboards em tempo real.

**Tecnologias:** Apache Kafka, ClickHouse, Python, Redis

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/luvieirasantos/Portifolio.git
cd Portifolio
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse o projeto:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Características do Portfólio

### ✨ Funcionalidades

- **Design Responsivo** - Otimizado para todos os dispositivos
- **Animações Suaves** - Usando Framer Motion
- **Suporte Bilíngue** - Português e Inglês
- **Modo Escuro** - Interface moderna e elegante
- **Performance Otimizada** - Next.js 15 com Turbopack

### 🏗️ Arquitetura

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Estilização utilitária e responsiva
- **Framer Motion** - Animações e transições suaves
- **Context API** - Gerenciamento de estado para idiomas

## 📁 Estrutura do Projeto

```
Portifolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navegação e seletor de idioma
│   │   ├── HeroSection.tsx     # Seção principal com apresentação
│   │   ├── ProjectsSection.tsx # Portfólio de projetos
│   │   └── ContactSection.tsx  # Informações de contato
│   ├── contexts/
│   │   └── LanguageContext.tsx # Contexto para internacionalização
│   ├── globals.css             # Estilos globais
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página inicial
├── public/
│   ├── resume.pdf              # Currículo
│   └── images/                 # Assets do projeto
└── package.json
```

## 🎯 Personalização

### Informações Pessoais

1. **Atualize o metadata** em `app/layout.tsx`:
   - Título do site
   - Descrição
   - URLs das redes sociais
   - Imagens Open Graph

2. **Modifique o conteúdo** em `app/page.tsx`:
   - Seção hero
   - Projetos
   - Informações de contato

3. **Substitua assets:**
   - Imagens na pasta `public`
   - Currículo (`resume.pdf`)
   - Ícones de redes sociais

### Estilização

1. **Cores e Tema:**
   - Personalize cores no `tailwind.config.ts`
   - Modifique variáveis de tema em `app/globals.css`

2. **Tipografia:**
   - Atualize fontes no `tailwind.config.ts`
   - Ajuste tamanhos e pesos de texto

## 🚀 Deploy

### Deploy na Vercel (Recomendado)

1. **Crie um repositório no GitHub**

2. **Conecte com Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub
   - Clique em "New Project"
   - Importe seu repositório
   - Clique em "Deploy"

Seu portfólio estará online em minutos com um domínio gratuito da Vercel!

### Deploy Manual

```bash
npm run build
npm start
```

## 📞 Contato

- **Email:** henrique3.terceiro@gmail.com
- **LinkedIn:** [Lu Vieira](https://www.linkedin.com/in/luhenrivieira)
- **GitHub:** [luvieirasantos](https://github.com/luvieirasantos)
- **Portfólio:** [luvieira.vercel.app](https://luvieira.vercel.app)
- **Localização:** São Paulo, SP

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Se este portfólio te ajudou, considere dar uma estrela no repositório!**
