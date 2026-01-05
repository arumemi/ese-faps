import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Hero from './components/sections/Hero'

function App() {
 
  return (
  
      <>
      <div className='min-h-screen bg-black'>
      <Navbar />
    </div>

    <main>
      <Hero />
    </main>
    
    
    
    
    </>
    
  )
}

export default App
