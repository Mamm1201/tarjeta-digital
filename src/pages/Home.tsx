import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { FiSmartphone, FiShare2, FiRefreshCw } from "react-icons/fi";

const WA_NUMBER = "573205841112";
const WA_MSG = encodeURIComponent(
  "Hola Mario, tengo dudas sobre la tarjeta digital. ¿Me puedes ayudar?",
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
const FORM_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLSev2PQKr58FtSWR3lDhF0PDHbtFeNDo5Evse-x-ZsTCwVzR-Q/viewform";

const DEMOS = [
  {
    slug: "mario",
    label: "Mario Márquez",
    trade: "Desarrollador Full Stack",
    theme: "Tech",
  },
  {
    slug: "electricista-carlos",
    label: "Carlos Ramírez",
    trade: "Electricista Certificado RETIE",
    theme: "Comercial",
  },
];

const STEPS = [
  {
    icon: <FiSmartphone size={24} />,
    step: "1",
    title: "Eliges tu plan y llenas el formulario",
    desc: "Te toma menos de 5 minutos. Allí nos das tus datos, foto y servicios.",
  },
  {
    icon: <FiShare2 size={24} />,
    step: "2",
    title: "Revisas tu tarjeta antes de pagar",
    desc: "En menos de 24h te mandamos el link para que la veas funcionando en tu celular.",
  },
  {
    icon: <FiRefreshCw size={24} />,
    step: "3",
    title: "Pagas y recibes tu tarjeta",
    desc: "Nequi o Bancolombia. La tarjeta NFC llega a tu puerta en 2–3 días.",
  },
];

const PLANS = [
  {
    name: "Básico",
    price: "$50.000",
    desc: "Para empezar a compartir tu perfil",
    items: [
      "Perfil digital personalizado",
      "Código QR descargable",
      "Link permanente para compartir",
      "Botones de contacto directo",
    ],
    cta: "Pedir plan Básico",
    featured: false,
  },
  {
    name: "Profesional",
    price: "$80.000",
    desc: "Con tarjeta NFC física incluida",
    items: [
      "Todo lo del plan Básico",
      "Tarjeta NFC física programada",
      "Sin app — funciona en cualquier celular",
      "Envío a toda Colombia",
    ],
    cta: "Pedir plan Profesional",
    featured: true,
  },
  {
    name: "Premium",
    price: "$130.000",
    desc: "Perfil completo con diseño avanzado",
    items: [
      "Perfil digital personalizado",
      "Código QR descargable",
      "Tarjeta NFC física programada",
      "Galería de fotos y portafolio",
      "Sección de testimonios",
      "Diseño y colores personalizados",
      "Envío a toda Colombia",
    ],
    cta: "Pedir plan Premium",
    featured: false,
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <div className="px-6 pt-14 pb-10 text-center max-w-lg mx-auto">
        <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
          Tarjeta digital profesional
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight tracking-tight">
          Tu cliente acerca el celular
          <br />y te contacta al instante
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Sin apps. Sin papel. Sin que pierdan tu número.
          <br />
          Comparte tus servicios, fotos y contacto desde una sola tarjeta.
        </p>
        <a
          href="#planes"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 active:scale-95 transition-all text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-lg shadow-blue-500/20"
        >
          Ver planes y precios ↓
        </a>
      </div>

      {/* Cómo funciona */}
      <div className="px-5 pb-12 max-w-lg mx-auto">
        <h2 className="text-lg font-semibold mb-5 text-center text-gray-200">
          Cómo funciona
        </h2>
        <div className="flex flex-col gap-4">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                {s.step}
              </div>
              <div>
                <p className="font-semibold text-sm text-white mb-0.5">
                  {s.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-green-400 font-medium mt-4">
          Ves tu tarjeta funcionando antes de pagar — sin riesgo
        </p>
      </div>

      {/* Demo */}
      <div className="px-5 pb-12 max-w-lg mx-auto">
        <h2 className="text-lg font-semibold mb-1 text-gray-200">
          Mira cómo queda
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          Ejemplos reales — abre desde tu celular
        </p>
        <div className="flex flex-col gap-3">
          {DEMOS.map((demo) => (
            <a
              key={demo.slug}
              href={`/${demo.slug}`}
              className="flex items-center justify-between p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 active:scale-[0.98] transition-all group"
            >
              <div>
                <p className="font-semibold text-sm text-white">{demo.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {demo.trade} · tema {demo.theme}
                </p>
              </div>
              <span className="text-blue-400 text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Precios */}
      <div id="planes" className="px-5 pb-12 max-w-lg mx-auto">
        <h2 className="text-lg font-semibold mb-1 text-center text-gray-200">
          Planes
        </h2>
        <p className="text-xs text-gray-500 text-center mb-5">
          Elige tu plan — llenas el formulario y en 24h ves tu tarjeta lista
        </p>
        <div className="flex flex-col gap-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-5 ${
                plan.featured
                  ? "bg-blue-600/10 border-blue-500/50"
                  : "bg-gray-900 border-gray-800"
              }`}
            >
              {plan.featured && (
                <span className="inline-block bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 uppercase tracking-wide">
                  Más pedido
                </span>
              )}
              <div className="flex items-end justify-between mb-1">
                <p className="font-bold text-white text-base">{plan.name}</p>
                <p className="text-2xl font-bold text-white">{plan.price}</p>
              </div>
              <p className="text-xs text-gray-400 mb-4">{plan.desc}</p>
              <ul className="flex flex-col gap-2 mb-5">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-gray-300"
                  >
                    <FaCheckCircle
                      className="text-green-400 shrink-0"
                      size={14}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={FORM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all active:scale-95 ${
                  plan.featured
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-200"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Garantía */}
      <div className="px-5 pb-12 max-w-lg mx-auto">
        <div className="rounded-xl bg-gray-900 border border-gray-800 p-5 text-center">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="font-bold text-white mb-2">Sin riesgo para ti</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Te muestro tu tarjeta lista{" "}
            <span className="text-white font-medium">antes de que pagues</span>.
            Si no te gusta cómo quedó, la modificamos hasta que estés contento.
            Sin costo extra, sin vueltas.
          </p>
        </div>
      </div>

      {/* CTA final */}
      <div className="px-5 pb-16 max-w-lg mx-auto text-center">
        <p className="text-gray-400 text-sm mb-4">
          ¿Tienes dudas? Escríbeme y te respondo en minutos.
        </p>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 active:scale-95 transition-all text-white font-bold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-green-500/20"
        >
          <FaWhatsapp size={20} />
          Hablar por WhatsApp
        </a>
        <p className="text-xs text-gray-600 mt-4">
          Tarjetas activas en Bogotá, Medellín, Cali y todo Colombia
        </p>
      </div>
    </div>
  );
}
