'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Oops! Algo deu errado.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {error.message || 'Ocorreu um erro inesperado.'}
        </p>
        <button
          onClick={reset}
          className="btn"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
} 