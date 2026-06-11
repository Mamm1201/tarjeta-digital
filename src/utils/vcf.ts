import type { ClientConfig } from '../config/types'

export function generateVCF(config: ClientConfig): string {
  const { profile, contact, social } = config

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    `N:${profile.name.split(' ').slice(1).join(' ')};${profile.name.split(' ')[0]};;;`,
    profile.company ? `ORG:${profile.company}` : null,
    profile.title ? `TITLE:${profile.title}` : null,
    contact.phone ? `TEL;TYPE=CELL,VOICE:${contact.phone}` : null,
    contact.whatsapp && contact.whatsapp !== contact.phone
      ? `TEL;TYPE=WORK,VOICE:${contact.whatsapp}`
      : null,
    contact.email ? `EMAIL;TYPE=INTERNET:${contact.email}` : null,
    contact.address ? `ADR;TYPE=WORK:;;${contact.address};;;;` : null,
    social.website ? `URL:${social.website}` : null,
    social.linkedin ? `X-SOCIALPROFILE;type=linkedin:${social.linkedin}` : null,
    social.instagram ? `X-SOCIALPROFILE;type=instagram:${social.instagram}` : null,
    profile.bio ? `NOTE:${profile.bio.replace(/\n/g, '\\n')}` : null,
    'END:VCARD',
  ].filter(Boolean)

  return lines.join('\r\n')
}

export function downloadVCF(config: ClientConfig): void {
  const vcf = generateVCF(config)
  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${config.profile.name.replace(/\s+/g, '_')}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
