import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='overall'>
        <div className='easy'>
            <h1>Tisma.site</h1>
            <p>Tisma is the easiest and the most secure business page website that allow users to buy and sell their their products within Africa.</p>
        </div>
        <div className='con'>
            <h4>Contact Us</h4>
            <p>info@tisma.site</p>
            <p>(+234) 810 385 6846</p>
            <p>45B Ibrahim Taiwo Road Ilroin Kwara state</p>
        </div>
        <div className='our'>
            <h4>Subscribe to our newletter</h4>
            <input type="text" placeholder='Email address' />
            <button>Subscribe Now</button>
        </div>
        </div>
        <h3 className='mo'>2023 copyright by Tisma.site. All rights reserved.</h3>
    </div>
  )
}

export default Footer