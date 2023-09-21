import React from 'react'
import Hero from './Hero'
import Prod1 from './Prod1'
import About from './About'
import Ready from './Ready'
import Footer from './Footer'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <div className='landing'>
        <Navbar/>
        <Hero/>
        <Prod1/>
        <About/>
        <Ready/>
        <Footer/>
    </div>
  )
}

export default Landing