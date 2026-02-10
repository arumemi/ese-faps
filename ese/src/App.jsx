import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import ReturnToMain from './components/layouts/ReturnToMain'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Technolgy from './components/sections/Technolgy'
import Skills from './components/sections/Skills'
import Project from './components/sections/Project'
import Service from './components/sections/Services'
import Contact from './components/sections/Contact'


function App() {
 
  return (
      <>
      <div className='min-h-screen bg-black'>
        <ReturnToMain />
        <Navbar />
        <main>
          <Hero />
          <About/>
          <Technolgy/>
          <Skills/>
          <Project/>
          <Service/>
          <Contact/>
        </main>
        <Footer />
      </div>
      </>
  )
}

export default App
