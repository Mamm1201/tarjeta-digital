const WA_NUMBER = '573205841112'
const WA_MSG = encodeURIComponent('Hola Mario, vi la tarjeta demo y quiero la mía. ¿Cuánto cuesta y cómo funciona?')

export function DemoBanner() {
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
      <div className="max-w-lg mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        <p className="text-white text-xs sm:text-sm leading-tight">
          <span className="font-semibold">Esta es una demostración.</span>{' '}
          <span className="opacity-90">Así quedará tu tarjeta personalizada.</span>
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-white text-blue-600 font-bold text-xs px-3 py-1.5 rounded-full hover:bg-blue-50 active:scale-95 transition-all whitespace-nowrap"
        >
          Quiero la mía
        </a>
      </div>
    </div>
  )
}
