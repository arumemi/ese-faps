import React from 'react'

const ReturnToMain = () => {
  return (
    <a
      href='/'
      aria-label='voltar'
      className='fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-full text-white shadow-lg hover:bg-lime-400 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300'
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
      <span className='text-sm font-medium'></span>
    </a>
  )
}

export default Return