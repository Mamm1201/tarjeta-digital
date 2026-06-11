import type { ThemeId } from '../config/types'

export type ThemeVars = {
  '--color-primary': string
  '--color-secondary': string
  '--color-accent': string
  '--color-bg': string
  '--color-surface': string
  '--color-surface-alt': string
  '--color-text': string
  '--color-text-muted': string
  '--color-border': string
  '--font-heading': string
  '--font-body': string
  '--radius-card': string
}

export const themes: Record<ThemeId, ThemeVars> = {
  // Oscuro, azul/cyan — desarrolladores, ingenieros, IT
  tech: {
    '--color-primary': '#3B82F6',
    '--color-secondary': '#1E40AF',
    '--color-accent': '#06B6D4',
    '--color-bg': '#0F172A',
    '--color-surface': '#1E293B',
    '--color-surface-alt': '#334155',
    '--color-text': '#F1F5F9',
    '--color-text-muted': '#94A3B8',
    '--color-border': '#334155',
    '--font-heading': '"Inter", sans-serif',
    '--font-body': '"Inter", sans-serif',
    '--radius-card': '12px',
  },

  // Claro, azul marino/dorado — abogados, contadores, consultores
  profesional: {
    '--color-primary': '#1D4ED8',
    '--color-secondary': '#1E3A5F',
    '--color-accent': '#B45309',
    '--color-bg': '#F8FAFC',
    '--color-surface': '#FFFFFF',
    '--color-surface-alt': '#EFF6FF',
    '--color-text': '#0F172A',
    '--color-text-muted': '#64748B',
    '--color-border': '#E2E8F0',
    '--font-heading': '"Playfair Display", serif',
    '--font-body': '"Inter", sans-serif',
    '--radius-card': '8px',
  },

  // Cálido, naranja/verde — tiendas, carnicerías, ferreterías
  comercial: {
    '--color-primary': '#EA580C',
    '--color-secondary': '#9A3412',
    '--color-accent': '#16A34A',
    '--color-bg': '#FFF7ED',
    '--color-surface': '#FFFFFF',
    '--color-surface-alt': '#FEF3C7',
    '--color-text': '#1C1917',
    '--color-text-muted': '#78716C',
    '--color-border': '#FED7AA',
    '--font-heading': '"Nunito", sans-serif',
    '--font-body': '"Nunito", sans-serif',
    '--radius-card': '16px',
  },

  // Limpio, teal/blanco — médicos, odontólogos, psicólogos
  salud: {
    '--color-primary': '#0D9488',
    '--color-secondary': '#0F766E',
    '--color-accent': '#0EA5E9',
    '--color-bg': '#F0FDFA',
    '--color-surface': '#FFFFFF',
    '--color-surface-alt': '#CCFBF1',
    '--color-text': '#134E4A',
    '--color-text-muted': '#64748B',
    '--color-border': '#99F6E4',
    '--font-heading': '"DM Sans", sans-serif',
    '--font-body': '"DM Sans", sans-serif',
    '--radius-card': '12px',
  },

  // Elegante, rosa/dorado — barberías, estilistas, spa
  belleza: {
    '--color-primary': '#BE185D',
    '--color-secondary': '#9D174D',
    '--color-accent': '#D97706',
    '--color-bg': '#FFF1F2',
    '--color-surface': '#FFFFFF',
    '--color-surface-alt': '#FFE4E6',
    '--color-text': '#1C1917',
    '--color-text-muted': '#9F1239',
    '--color-border': '#FECDD3',
    '--font-heading': '"Playfair Display", serif',
    '--font-body': '"Raleway", sans-serif',
    '--radius-card': '20px',
  },
}
