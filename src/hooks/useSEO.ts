import { useEffect } from 'react'
import type { ClientConfig } from '../config/types'

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.content = content
}

function setOG(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.content = content
}

export function useSEO(seo: ClientConfig['seo'] | undefined) {
  useEffect(() => {
    if (!seo) return

    document.title = seo.title
    setMeta('description', seo.description)
    if (seo.keywords?.length) setMeta('keywords', seo.keywords.join(', '))
    setOG('og:title', seo.title)
    setOG('og:description', seo.description)
    setOG('og:type', 'profile')
    setOG('og:url', window.location.href)
    if (seo.ogImage) setOG('og:image', seo.ogImage)

    return () => {
      document.title = 'Tarjeta Digital Profesional'
    }
  }, [seo])
}
