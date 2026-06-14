import { useParams } from 'react-router-dom'
import type { LayoutId } from '../config/types'
import type { ClientConfig } from '../config/types'
import { useClientConfig } from '../hooks/useClientConfig'
import { useTheme } from '../hooks/useTheme'
import { useSEO } from '../hooks/useSEO'
import { LoadingScreen } from '../components/LoadingScreen'
import { ContactButtons } from '../components/ContactButtons'
import { DemoBanner } from '../components/DemoBanner'
import { NotFound } from './NotFound'
import { TechLayout } from '../layouts/TechLayout'
import { ProfesionalLayout } from '../layouts/ProfesionalLayout'
import { ComercialLayout } from '../layouts/ComercialLayout'
import { SaludLayout } from '../layouts/SaludLayout'
import { BellezaLayout } from '../layouts/BellezaLayout'

const LAYOUTS: Record<LayoutId, React.ComponentType<{ config: ClientConfig }>> = {
  tech: TechLayout,
  profesional: ProfesionalLayout,
  comercial: ComercialLayout,
  salud: SaludLayout,
  belleza: BellezaLayout,
}

export function ClientCard() {
  const { slug = '' } = useParams<{ slug: string }>()
  const { config, loading, notFound } = useClientConfig(slug)
  const themeVars = useTheme(config?.theme ?? 'tech')

  useSEO(config?.seo)

  if (loading) return <LoadingScreen />
  if (notFound || !config) return <NotFound />

  const Layout = LAYOUTS[config.layout] ?? TechLayout

  return (
    <div style={themeVars as React.CSSProperties}>
      {config.isDemo && <DemoBanner />}
      <Layout config={config} />
      <ContactButtons contact={config.contact} />
    </div>
  )
}
