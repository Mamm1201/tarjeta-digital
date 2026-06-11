// Sector: Abogados, Contadores, Consultores
// Secciones: Hero → Social → Bio destacada → Servicios → Testimonios
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi'
import type { ClientConfig } from '../config/types'
import { HeroSection } from '../components/HeroSection'
import { SocialLinks } from '../components/SocialLinks'
import { ServicesSection } from '../components/ServicesSection'
import { TestimonialsSection } from '../components/TestimonialsSection'

interface Props {
  config: ClientConfig
}

export function ProfesionalLayout({ config }: Props) {
  const { contact } = config

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      <HeroSection config={config} />

      {/* Info de contacto visible (sin duplicar sticky bar) */}
      {(contact.address || contact.schedule) && (
        <section className="px-5 pb-4">
          <div className="rounded-card border border-brand-border bg-brand-surface p-4 flex flex-col gap-2">
            {contact.address && (
              <div className="flex items-start gap-2 text-sm text-brand-muted">
                <FiMapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <span>{contact.address}{contact.city ? `, ${contact.city}` : ''}</span>
              </div>
            )}
            {contact.schedule && (
              <div className="flex items-start gap-2 text-sm text-brand-muted">
                <FiClock size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <span>{contact.schedule}</span>
              </div>
            )}
          </div>
        </section>
      )}

      <div className="border-t border-brand-border" />
      <SocialLinks social={config.social} />

      {config.services && config.services.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <ServicesSection services={config.services} />
        </>
      )}

      {/* Áreas de práctica / especialidades como lista */}
      {config.profile.certifications && config.profile.certifications.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <section className="px-5 py-6">
            <h2 className="text-xl font-bold font-heading text-brand-text mb-4 flex items-center gap-2">
              <FiBriefcase size={20} className="text-brand-primary" />
              Especialidades
            </h2>
            <ul className="flex flex-col gap-2">
              {config.profile.certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-brand-muted text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {config.testimonials && config.testimonials.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <TestimonialsSection testimonials={config.testimonials} />
        </>
      )}

      <div className="h-6" />
    </div>
  )
}
