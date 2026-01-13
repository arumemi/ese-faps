import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Technolgy from './components/sections/Technolgy'
import Skills from './components/sections/Skills'
import Project from './components/sections/Project'
import Service from './components/sections/Services'


function App() {
 
  return (
      <>
      <div className='min-h-screen bg-black pb-[100vh]'>
        <Navbar />
        <main>
          <Hero />
          <About/>
          <Technolgy/>
          <Skills/>
          <Project/>
          <Service/>

         
        </main>
      </div>
      </>
  )
}

export default App
