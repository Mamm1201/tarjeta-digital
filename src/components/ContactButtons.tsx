import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import type { Contact } from '../config/types'

interface Props {
  contact: Contact
}

interface ButtonDef {
  href: string
  icon: React.ReactNode
  label: string
  primary?: boolean
}

export function ContactButtons({ contact }: Props) {
  const buttons: ButtonDef[] = []

  if (contact.phone)
    buttons.push({ href: `tel:${contact.phone}`, icon: <FaPhone size={20} />, label: 'Llamar' })

  if (contact.whatsapp) {
    const msg = encodeURIComponent('Hola, vi tu tarjeta digital y me gustaría contactarte.')
    buttons.push({
      href: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${msg}`,
      icon: <FaWhatsapp size={20} />,
      label: 'WhatsApp',
      primary: true,
    })
  }

  if (contact.email)
    buttons.push({ href: `mailto:${contact.email}`, icon: <FaEnvelope size={20} />, label: 'Email' })

  if (contact.mapUrl)
    buttons.push({ href: contact.mapUrl, icon: <FaMapMarkerAlt size={20} />, label: 'Ubicación' })

  if (buttons.length === 0) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-surface border-t border-brand-border pb-safe shadow-2xl"
      style={{ backdropFilter: 'blur(8px)', backgroundColor: 'color-mix(in srgb, var(--color-surface) 95%, transparent)' }}
    >
      <div className={`grid gap-1 p-2 max-w-lg mx-auto`} style={{ gridTemplateColumns: `repeat(${buttons.length}, 1fr)` }}>
        {buttons.map((btn) => (
          <a
            key={btn.href}
            href={btn.href}
            target={btn.href.startsWith('http') ? '_blank' : undefined}
            rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-card transition-all active:scale-95 ${
              btn.primary
                ? 'bg-brand-primary text-white'
                : 'bg-brand-surface-alt text-brand-primary'
            }`}
          >
            {btn.icon}
            <span className="text-xs font-medium leading-none">{btn.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
