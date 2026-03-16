import React from 'react'
import { useTranslation } from 'react-i18next'

const safeUrl = (url) => {
  if (!url) return null
  // If URL already has a protocol, return as-is
  if (/^https?:\/\//i.test(url)) return url
  // otherwise prepend https://
  return `https://${url}`
}

const ProjectCard = ({ project }) => {
  const { t } = useTranslation()
  if (!project) return null

  const liveUrl = project.projectUrl || null
  const liveHref = safeUrl(liveUrl)
  const codeHref = safeUrl(project.githubUrl)

  const openLink = (href) => {
    if (!href) return
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      role='link'
      tabIndex={0}
      onClick={() => openLink(liveHref)}
      onKeyDown={(e) => { if (e.key === 'Enter') openLink(liveHref) }}
      className='bg-white/10 sm:bg-white/5 p-4 rounded-2xl overflow-hidden backdrop-blur-md sm:backdrop-blur-sm border border-white/20 sm:border-white/10 hover:scale-[1.01] transition-transform duration-300 cursor-pointer hover:bg-white/15 sm:hover:bg-white/8'
    >
      {project.imageUrl && (
        <div className='w-full h-44 md:h-48 lg:h-56 mb-4 bg-gray-800 rounded-md overflow-hidden ring-1 ring-white/20'>
          <img src={project.imageUrl} alt={project.title} className='w-full h-full object-cover' />
        </div>
      )}
      <h3 className='text-lime-200 text-lg font-bold mb-1 tracking-tight'>{project.title}</h3>
      <p className='text-white/80 sm:text-white/70 text-sm mb-3 line-clamp-3 font-medium'>{project.description}</p>
      <div className='flex flex-wrap gap-2 mb-3'>
        {project.technologies?.map((t, i) => (
          <span key={i} className='text-xs bg-white/20 sm:bg-white/5 text-white/90 sm:text-white/80 px-2 py-1 rounded font-medium border border-white/15 sm:border-white/5'>
            {t}
          </span>
        ))}
      </div>
      <div className='flex items-center gap-3'>
        {liveHref ? (
          <a href={liveHref} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()} className='text-sm text-primary underline flex items-center gap-1.5 font-semibold' aria-label={`${t('projectCard.openLiveDemoFor')} ${project.title}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            {t('projectCard.liveDemo')}
          </a>
        ) : (
          <span className='text-sm text-white/40'>{t('projectCard.liveDemo')}</span>
        )}
        {codeHref ? (
          <a href={codeHref} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()} className='text-sm text-white/80 sm:text-white/70 underline flex items-center gap-1 font-semibold' aria-label={`${t('projectCard.openSourceCodeFor')} ${project.title}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('projectCard.code')}
          </a>
        ) : (
          <span className='text-sm text-white/40'>{t('projectCard.code')}</span>
        )}
      </div>
    </article>
  )
}

export default ProjectCard