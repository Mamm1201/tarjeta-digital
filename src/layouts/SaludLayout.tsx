// Sector: Médicos, Odontólogos, Psicólogos
// Secciones: Hero → Credenciales → Especialidades → Horario → Testimonios → Social
import { FiShield, FiClock, FiMapPin } from 'react-icons/fi'
import type { ClientConfig } from '../config/types'
import { HeroSection } from '../components/HeroSection'
import { SocialLinks } from '../components/SocialLinks'
import { ServicesSection } from '../components/ServicesSection'
import { TestimonialsSection } from '../components/TestimonialsSection'

interface Props {
  config: ClientConfig
}

export function SaludLayout({ config }: Props) {
  const { contact, profile } = config

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      <HeroSection config={config} />

      {/* Credenciales / Títulos médicos — genera confianza */}
      {profile.certifications && profile.certifications.length > 0 && (
        <section className="px-5 pb-5">
          <div className="rounded-card border border-brand-border bg-brand-surface p-4">
            <h3 className="text-sm font-semibold font-heading text-brand-text flex items-center gap-2 mb-3">
              <FiShield size={16} className="text-brand-primary" />
              Formación y credenciales
            </h3>
            <ul className="flex flex-col gap-2">
              {profile.certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm text-brand-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {config.services && config.services.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <ServicesSection services={config.services} />
        </>
      )}

      {/* Horario de atención — fundamental en salud */}
      {(contact.schedule || contact.address) && (
        <>
          <div className="border-t border-brand-border" />
          <section className="px-5 py-6">
            <h2 className="text-xl font-bold font-heading text-brand-text mb-4">
              Información de contacto
            </h2>
            <div className="rounded-card border border-brand-border bg-brand-surface p-4 flex flex-col gap-3">
              {contact.schedule && (
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-surface-alt flex items-center justify-center shrink-0">
                    <FiClock size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted uppercase tracking-wide mb-0.5">Horario</p>
                    <p className="text-sm text-brand-text">{contact.schedule}</p>
                  </div>
                </div>
              )}
              {contact.address && (
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-surface-alt flex items-center justify-center shrink-0">
                    <FiMapPin size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted uppercase tracking-wide mb-0.5">Consultorio</p>
                    <p className="text-sm text-brand-text">
                      {contact.address}{contact.city ? `, ${contact.city}` : ''}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {config.testimonials && config.testimonials.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <TestimonialsSection testimonials={config.testimonials} />
        </>
      )}

      <div className="border-t border-brand-border" />
      <SocialLinks social={config.social} />
      <div className="h-6" />
    </div>
  )
}
