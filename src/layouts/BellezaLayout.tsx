// Sector: Barberías, Estilistas, Spa, Nail art
// Secciones: Hero → Servicios con precios → Galería de trabajos → Testimonios → Social
import type { ClientConfig } from '../config/types'
import { HeroSection } from '../components/HeroSection'
import { SocialLinks } from '../components/SocialLinks'
import { ServicesSection } from '../components/ServicesSection'
import { GallerySection } from '../components/GallerySection'
import { TestimonialsSection } from '../components/TestimonialsSection'

interface Props {
  config: ClientConfig
}

export function BellezaLayout({ config }: Props) {
  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      <HeroSection config={config} />

      {/* Social prominente — Instagram es el portfolio en belleza */}
      <div className="border-t border-brand-border" />
      <SocialLinks social={config.social} />

      {config.services && config.services.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <ServicesSection services={config.services} />
        </>
      )}

      {/* Galería de trabajos — el portfolio visual es lo que vende */}
      {config.gallery && config.gallery.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <GallerySection items={config.gallery} title="Mis trabajos" />
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
