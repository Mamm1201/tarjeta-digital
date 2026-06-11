import { useRef } from 'react'
import QRCode from 'react-qr-code'
import { FiX, FiDownload, FiShare2 } from 'react-icons/fi'
import type { ClientConfig } from '../config/types'
import { shareProfile } from '../utils/share'

interface Props {
  config: ClientConfig
  onClose: () => void
}

export function QRModal({ config, onClose }: Props) {
  const qrRef = useRef<HTMLDivElement>(null)
  const url = `${window.location.origin}/${config.slug}`

  async function downloadQR() {
    const svgEl = qrRef.current?.querySelector('svg')
    if (!svgEl) return

    const serializer = new XMLSerializer()
    const svgStr = serializer.serializeToString(svgEl)
    const blob = new Blob([svgStr], { type: 'image/svg+xml' })
    const svgUrl = URL.createObjectURL(blob)

    // 512px = buena calidad para impresión en tarjeta física
    const size = 512
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, size, size)

    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size)
      URL.revokeObjectURL(svgUrl)
      const link = document.createElement('a')
      link.download = `qr-${config.slug}.png`
      link.href = canvas.toDataURL('image/png')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    img.src = svgUrl
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xs shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h3 className="font-semibold text-gray-900 text-base">Código QR</h3>
            <p className="text-xs text-gray-400 mt-0.5">{config.profile.name}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            aria-label="Cerrar"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center px-8 py-6 gap-4">
          <div
            ref={qrRef}
            className="p-4 rounded-xl border-2 border-gray-100 bg-white"
          >
            <QRCode
              value={url}
              size={200}
              level="M"
              style={{ display: 'block' }}
            />
          </div>

          {/* URL */}
          <div className="text-center">
            <p className="text-xs text-gray-400 break-all leading-relaxed">{url}</p>
          </div>

          {/* Instrucción */}
          <p className="text-xs text-gray-400 text-center bg-gray-50 rounded-lg px-3 py-2 w-full">
            📱 Apunta la cámara del teléfono para abrir la tarjeta
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 px-5 pb-5">
          <button
            onClick={downloadQR}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold transition-opacity hover:opacity-90 active:opacity-75"
          >
            <FiDownload size={16} />
            Descargar PNG
          </button>
          <button
            onClick={() => shareProfile(config)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 text-gray-800 text-sm font-semibold transition-opacity hover:opacity-90 active:opacity-75"
          >
            <FiShare2 size={16} />
            Compartir
          </button>
        </div>
      </div>
    </div>
  )
}
