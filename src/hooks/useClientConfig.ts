import { useEffect, useState } from 'react'
import type { ClientConfig } from '../config/types'

// import.meta.glob auto-descubre todos los JSONs de clientes en build time.
// Cada archivo se convierte en un chunk lazy-loaded independiente (~2-5KB).
// Agregar un cliente = agregar un JSON. Sin registro manual.
const modules = import.meta.glob('../clients/*.json')

interface State {
  config: ClientConfig | null
  loading: boolean
  notFound: boolean
}

export function useClientConfig(slug: string): State {
  const [state, setState] = useState<State>({ config: null, loading: true, notFound: false })

  useEffect(() => {
    if (!slug) {
      setState({ config: null, loading: false, notFound: true })
      return
    }

    const key = `../clients/${slug}.json`
    const loader = modules[key]

    if (!loader) {
      setState({ config: null, loading: false, notFound: true })
      return
    }

    setState({ config: null, loading: true, notFound: false })

    loader()
      .then((mod: unknown) => {
        setState({ config: (mod as { default: ClientConfig }).default, loading: false, notFound: false })
      })
      .catch(() => {
        setState({ config: null, loading: false, notFound: true })
      })
  }, [slug])

  return state
}
