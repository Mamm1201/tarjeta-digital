import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import type { ClientConfig } from '../config/types'
import { downloadVCF } from '../utils/vcf'
import { shareProfile } from '../utils/share'

interface Props {
  config: ClientConfig
}

export function HeroSection({ config }: Props) {
  const { profile } = config
  const [shareMsg, setShareMsg] = useState('')

  async function handleShare() {
    const result = await shareProfile(config)
    if (result === 'copied') {
      setShareMsg('¡Enlace copiado!')
      setTimeout(() => setShareMsg(''), 2500)
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Cover image */}
      <div className="h-40 sm:h-52 bg-brand-secondary">
        {profile.cover && (
          <img
            src={profile.cover}
            alt="Cover"
            className="w-full h-full object-cover"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 h-40 sm:h-52 bg-gradient-to-b from-transparent to-brand-bg opacity-80" />
      </div>

      {/* Avatar + info */}
      <div className="relative px-5 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center -mt-14"
        >
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full border-4 border-brand-bg bg-brand-surface overflow-hidden shadow-lg mb-4">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-brand-primary text-white text-3xl font-bold font-heading">
                {profile.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Name & title */}
          <h1 className="text-2xl font-bold font-heading text-brand-text leading-tight">
            {profile.name}
          </h1>
          <p className="text-brand-primary font-semibold mt-1 text-sm">{profile.title}</p>
          {profile.company && (
            <p className="text-brand-muted text-sm mt-0.5">{profile.company}</p>
          )}
          {profile.yearsExperience && (
            <p className="text-brand-muted text-xs mt-1">
              {profile.yearsExperience}+ años de experiencia
            </p>
          )}

          {/* Bio */}
          {profile.bio && (
            <p className="text-brand-muted text-sm mt-4 max-w-sm leading-relaxed">
              {profile.bio}
            </p>
          )}

          {/* Certifications */}
          {profile.certifications && profile.certifications.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {profile.certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs px-3 py-1 rounded-full border border-brand-border text-brand-muted"
                >
                  {cert}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => downloadVCF(config)}
              className="flex items-center gap-2 px-4 py-2 rounded-card bg-brand-primary text-white text-sm font-medium transition-opacity hover:opacity-90 active:opacity-75"
            >
              <FiDownload size={16} />
              Guardar contacto
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-card bg-brand-surface border border-brand-border text-brand-text text-sm font-medium transition-opacity hover:opacity-90 active:opacity-75"
            >
              <FiShare2 size={16} />
              Compartir
            </button>
          </div>

          {shareMsg && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-accent text-xs mt-2"
            >
              {shareMsg}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
