import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className="btn">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
} 