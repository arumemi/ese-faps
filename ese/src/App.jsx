import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills  from './components/sections/Skills'


function App() {
 
  return (
      <>
      <div className='min-h-screen bg-black pb-[100vh]'>
        <Navbar />
        <main>
          <Hero />
          <About/>
          <Skills/>

         
        </main>
      </div>
      </>
  )
}

export default App
