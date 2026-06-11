import { FaStar, FaRegStar } from 'react-icons/fa'
import type { Testimonial } from '../config/types'

interface Props {
  testimonials: Testimonial[]
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? (
          <FaStar key={i} size={14} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} size={14} className="text-brand-border" />
        )
      )}
    </div>
  )
}

export function TestimonialsSection({ testimonials }: Props) {
  if (testimonials.length === 0) return null

  return (
    <section className="px-5 py-6">
      <h2 className="text-xl font-bold font-heading text-brand-text mb-4">Testimonios</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-5 px-5">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="shrink-0 w-72 rounded-card border border-brand-border bg-brand-surface p-4 flex flex-col gap-3"
          >
            <Stars rating={t.rating} />
            <p className="text-brand-muted text-sm leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-auto pt-2 border-t border-brand-border">
              <div className="w-9 h-9 rounded-full bg-brand-surface-alt overflow-hidden shrink-0">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-primary font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="text-brand-text text-sm font-semibold leading-tight">{t.name}</p>
                {t.role && <p className="text-brand-muted text-xs">{t.role}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
