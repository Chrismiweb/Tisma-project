import React from 'react'
import Navbar from './Navbar'
import AboutDesigner from './AboutDesigner'
import AvailableProduct from './AvailableProduct'
import Review from './Review'
import Contact from './Contact'
import Footer from '../LandingPage/Footer'

const View = () => {
  return (
    <div>
        <Navbar/>
        <AboutDesigner/>
        <AvailableProduct/>
        <Review/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default View