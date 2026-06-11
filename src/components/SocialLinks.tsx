import {
  FaLinkedin, FaInstagram, FaFacebook, FaTwitter,
  FaGithub, FaTiktok, FaYoutube, FaGlobe,
} from 'react-icons/fa'
import type { Social } from '../config/types'

interface SocialLink {
  key: keyof Social
  icon: React.ReactNode
  label: string
}

const SOCIAL_DEFS: SocialLink[] = [
  { key: 'linkedin',  icon: <FaLinkedin size={22} />,  label: 'LinkedIn' },
  { key: 'instagram', icon: <FaInstagram size={22} />, label: 'Instagram' },
  { key: 'facebook',  icon: <FaFacebook size={22} />,  label: 'Facebook' },
  { key: 'twitter',   icon: <FaTwitter size={22} />,   label: 'Twitter' },
  { key: 'github',    icon: <FaGithub size={22} />,    label: 'GitHub' },
  { key: 'tiktok',    icon: <FaTiktok size={22} />,    label: 'TikTok' },
  { key: 'youtube',   icon: <FaYoutube size={22} />,   label: 'YouTube' },
  { key: 'website',   icon: <FaGlobe size={22} />,     label: 'Sitio web' },
]

interface Props {
  social: Social
}

export function SocialLinks({ social }: Props) {
  const active = SOCIAL_DEFS.filter((def) => social[def.key])
  if (active.length === 0) return null

  return (
    <section className="px-5 py-6">
      <div className="flex flex-wrap justify-center gap-3">
        {active.map((def) => (
          <a
            key={def.key}
            href={social[def.key] as string}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={def.label}
            className="w-12 h-12 flex items-center justify-center rounded-card bg-brand-surface-alt text-brand-primary border border-brand-border transition-all hover:scale-110 active:scale-95"
          >
            {def.icon}
          </a>
        ))}
      </div>
    </section>
  )
}
