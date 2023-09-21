import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='Contact-form'>
        <div className='contact-container'>
            <h1>Contact Ashyco?</h1>
            <div className='contact-details'>
              <p>What is your name</p>
              <input type="text" />
            </div>
            <div className='contact-details'>
              <p>Purpose of contacting Ashlyco</p>
              <input type="text" />
            </div>
            <div className='contact-message'>
              <p>Your message to Ashlyco</p>
              <textarea name="" id="" cols="105" rows="10"></textarea>
            </div>
            <div className='send-btn'>
              <a href=""><button>Send Message</button></a>
            </div>
        </div>
    </div>
  )
}

export default Contact