import { FiSmartphone, FiZap, FiUsers, FiLink } from 'react-icons/fi'

const DEMOS = [
  { slug: 'mario', label: 'Mario Marquez · Full Stack Developer', theme: 'Tech' },
  { slug: 'electricista-carlos', label: 'Electricista Carlos · Demo', theme: 'Comercial' },
]

export function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <div className="px-6 pt-16 pb-12 text-center max-w-lg mx-auto">
        <div className="text-5xl mb-4">🪪</div>
        <h1 className="text-3xl font-bold mb-3 leading-tight">
          Tarjeta Digital<br />Profesional
        </h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Reemplaza tu tarjeta física con una landing page moderna, optimizada para móvil
          y lista en minutos.
        </p>
      </div>

      {/* Features */}
      <div className="px-5 pb-10 max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <FiSmartphone size={22} />, title: 'Mobile First', desc: 'Diseñado para verse perfecto en el teléfono' },
            { icon: <FiZap size={22} />, title: 'Rápido', desc: 'Carga en menos de 1 segundo' },
            { icon: <FiUsers size={22} />, title: 'Multi-cliente', desc: 'Una app para decenas de tarjetas' },
            { icon: <FiLink size={22} />, title: 'Tu link propio', desc: 'tutarjetadigital.com/tunombre' },
          ].map((f) => (
            <div key={f.title} className="p-4 rounded-xl bg-gray-900 border border-gray-800">
              <div className="text-blue-400 mb-2">{f.icon}</div>
              <h3 className="text-sm font-semibold mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Demo cards */}
      <div className="px-5 pb-16 max-w-lg mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-300">Ver demos</h2>
        <div className="flex flex-col gap-3">
          {DEMOS.map((demo) => (
            <a
              key={demo.slug}
              href={`/${demo.slug}`}
              className="flex items-center justify-between p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors group"
            >
              <div>
                <p className="font-medium text-sm">{demo.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">/{demo.slug} · Tema {demo.theme}</p>
              </div>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center pb-8">
        <a
          href="https://wa.me/573205841112?text=Hola,%20quiero%20mi%20tarjeta%20digital%20profesional"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-green-400 transition-colors"
        >
          ¿Quieres tu tarjeta digital? Escríbenos →
        </a>
      </div>
    </div>
  )
}
