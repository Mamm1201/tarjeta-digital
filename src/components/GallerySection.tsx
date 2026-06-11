import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import type { GalleryItem } from '../config/types'

interface Props {
  items: GalleryItem[]
  title?: string
}

export function GallerySection({ items, title = 'Galería' }: Props) {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  if (items.length === 0) return null

  return (
    <section className="px-5 py-6">
      <h2 className="text-xl font-bold font-heading text-brand-text mb-4">{title}</h2>

      {/* Masonry grid — CSS columns approach */}
      <div className="columns-2 sm:columns-3 gap-2 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="block w-full overflow-hidden rounded-card break-inside-avoid cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            <FiX size={28} />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {selected.caption && (
            <p className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm px-4">
              {selected.caption}
            </p>
          )}
        </div>
      )}
    </section>
  )
}
