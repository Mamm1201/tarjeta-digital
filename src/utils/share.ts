import type { ClientConfig } from '../config/types'

export async function shareProfile(config: ClientConfig): Promise<'shared' | 'copied' | 'error'> {
  const url = window.location.href
  const title = config.profile.name
  const text = `${config.profile.title}${config.profile.company ? ` · ${config.profile.company}` : ''}`

  if (navigator.share) {
    try {
      await navigator.share({ title, text, url })
      return 'shared'
    } catch {
      // User cancelled — not an error
      return 'error'
    }
  }

  try {
    await navigator.clipboard.writeText(url)
    return 'copied'
  } catch {
    return 'error'
  }
}
