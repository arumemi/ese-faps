import React from 'react'

const ReturnToMain = () => {
  const mainSiteUrl = 'https://my-website-beta-lovat.vercel.app/'

  return (
    <a
      href={mainSiteUrl}
      aria-label='voltar ao site'
      onClick={(event) => {
        event.preventDefault()
        window.location.href = mainSiteUrl
      }}
      className='fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-fulltext-white shadow-lg hover:bg-lime-400 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300'
    >
      <svg
        className='w-5 h-5'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <path d='M19 12H5' />
        <path d='M12 19l-7-7 7-7' />
      </svg>
      <span className='text-sm font-medium'>voltar.</span>
    </a>
  )
}

export default ReturnToMain
