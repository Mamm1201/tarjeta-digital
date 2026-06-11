// Sector: Carnicerías, Tiendas, Ferreterías, Comercios
// Secciones: Hero → Horario/Dirección → Servicios/Productos → Galería → Testimonios → Social
import { FiMapPin, FiClock } from 'react-icons/fi'
import type { ClientConfig } from '../config/types'
import { HeroSection } from '../components/HeroSection'
import { SocialLinks } from '../components/SocialLinks'
import { ServicesSection } from '../components/ServicesSection'
import { GallerySection } from '../components/GallerySection'
import { TestimonialsSection } from '../components/TestimonialsSection'

interface Props {
  config: ClientConfig
}

export function ComercialLayout({ config }: Props) {
  const { contact } = config

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      <HeroSection config={config} />

      {/* Dirección y horario prominentes — clave para comercios */}
      {(contact.address || contact.schedule || contact.mapUrl) && (
        <section className="px-5 pb-5">
          <div className="rounded-card border border-brand-border bg-brand-surface overflow-hidden">
            {contact.mapUrl && (
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-32 bg-brand-surface-alt relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-brand-primary">
                  <div className="flex flex-col items-center gap-2">
                    <FiMapPin size={32} />
                    <span className="text-sm font-medium">Ver en mapa</span>
                  </div>
                </div>
              </a>
            )}
            <div className="p-4 flex flex-col gap-2">
              {contact.address && (
                <div className="flex items-start gap-2 text-sm text-brand-muted">
                  <FiMapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                  <span>{contact.address}{contact.city ? `, ${contact.city}` : ''}</span>
                </div>
              )}
              {contact.schedule && (
                <div className="flex items-start gap-2 text-sm text-brand-muted">
                  <FiClock size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <span>{contact.schedule}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {config.services && config.services.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <ServicesSection services={config.services} />
        </>
      )}

      {config.gallery && config.gallery.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <GallerySection items={config.gallery} title="Nuestros productos" />
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
