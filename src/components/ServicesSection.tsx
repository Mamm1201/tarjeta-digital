import { motion } from 'framer-motion'
import type { Service } from '../config/types'

interface Props {
  services: Service[]
}

export function ServicesSection({ services }: Props) {
  if (services.length === 0) return null

  return (
    <section className="px-5 py-6">
      <h2 className="text-xl font-bold font-heading text-brand-text mb-4">Servicios</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className={`relative p-4 rounded-card border border-brand-border bg-brand-surface flex flex-col gap-2 ${
              service.featured ? 'border-brand-primary ring-1 ring-brand-primary' : ''
            }`}
          >
            {service.featured && (
              <span className="absolute -top-2 right-3 text-xs px-2 py-0.5 bg-brand-primary text-white rounded-full font-medium">
                Destacado
              </span>
            )}
            <span className="text-2xl">{service.icon}</span>
            <h3 className="text-sm font-semibold font-heading text-brand-text leading-tight">
              {service.name}
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed flex-1">
              {service.description}
            </p>
            {service.price && (
              <p className="text-sm font-bold text-brand-primary mt-1">{service.price}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
