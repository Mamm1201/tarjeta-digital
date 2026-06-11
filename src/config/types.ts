export type ThemeId = 'tech' | 'profesional' | 'comercial' | 'salud' | 'belleza'
export type LayoutId = 'tech' | 'profesional' | 'comercial' | 'salud' | 'belleza'

export interface Profile {
  name: string
  title: string
  company?: string
  avatar?: string
  cover?: string
  bio?: string
  certifications?: string[]
  yearsExperience?: number
}

export interface Contact {
  phone?: string
  whatsapp?: string
  email?: string
  address?: string
  city?: string
  schedule?: string
  mapUrl?: string
}

export interface Social {
  linkedin?: string
  instagram?: string
  facebook?: string
  twitter?: string
  github?: string
  tiktok?: string
  youtube?: string
  website?: string
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
  price?: string
  featured?: boolean
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  caption?: string
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  image?: string
  url?: string
  tags?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  text: string
  rating: number
  avatar?: string
}

export interface ClientConfig {
  slug: string
  theme: ThemeId
  layout: LayoutId
  profile: Profile
  contact: Contact
  social: Social
  services?: Service[]
  gallery?: GalleryItem[]
  portfolio?: PortfolioItem[]
  testimonials?: Testimonial[]
  seo: {
    title: string
    description: string
    keywords?: string[]
    ogImage?: string
  }
}
