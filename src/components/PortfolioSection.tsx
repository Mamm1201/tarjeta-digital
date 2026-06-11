import { FiExternalLink } from 'react-icons/fi'
import type { PortfolioItem } from '../config/types'

interface Props {
  items: PortfolioItem[]
}

export function PortfolioSection({ items }: Props) {
  if (items.length === 0) return null

  return (
    <section className="px-5 py-6">
      <h2 className="text-xl font-bold font-heading text-brand-text mb-4">Portafolio</h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-card border border-brand-border bg-brand-surface overflow-hidden"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold font-heading text-brand-text leading-tight">
                  {item.title}
                </h3>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary shrink-0"
                    aria-label="Ver proyecto"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="text-brand-muted text-sm mt-2 leading-relaxed">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-brand-surface-alt text-brand-muted border border-brand-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
