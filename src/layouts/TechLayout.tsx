// Sector: Desarrolladores, Ingenieros, IT, Contratistas de software
// Secciones: Hero → Social → Servicios → Portafolio → Testimonios
import type { ClientConfig } from '../config/types'
import { HeroSection } from '../components/HeroSection'
import { SocialLinks } from '../components/SocialLinks'
import { ServicesSection } from '../components/ServicesSection'
import { PortfolioSection } from '../components/PortfolioSection'
import { TestimonialsSection } from '../components/TestimonialsSection'

interface Props {
  config: ClientConfig
}

export function TechLayout({ config }: Props) {
  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      <HeroSection config={config} />
      <div className="border-t border-brand-border" />
      <SocialLinks social={config.social} />
      {config.services && config.services.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <ServicesSection services={config.services} />
        </>
      )}
      {config.portfolio && config.portfolio.length > 0 && (
        <>
          <div className="border-t border-brand-border" />
          <PortfolioSection items={config.portfolio} />
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
