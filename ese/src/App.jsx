import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Hero from './components/sections/Hero'

function App() {
 
  return (
      <>
      <div className='min-h-screen bg-black pb-[100vh]'>
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
      </>
  )
}

export default App
