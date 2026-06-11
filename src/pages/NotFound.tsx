import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gray-950">
      <div className="text-8xl mb-4">🪪</div>
      <h1 className="text-4xl font-bold text-white mb-2">404</h1>
      <p className="text-gray-400 mb-1">Tarjeta digital no encontrada</p>
      <p className="text-gray-600 text-sm mb-8">Verifica que el enlace sea correcto</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
      >
        Ir al inicio
      </Link>
    </div>
  )
}
