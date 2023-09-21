import React from 'react';
import './AboutDesigner.css';
import woman from '../View/woman.png';

function AboutDesigner() {
  return (
    <div className='About-container'>
        <div className='about-user'>
            <div className='user-img'>
                <img src={woman} alt="" />
            </div>
            <div className='user-name'>
                <h3>Ashlyco Fashion Designer</h3>
                <p>Joined 2023</p>
            </div>
        </div>
        <div className='user-work-container'>
            <div className='about-user-product'>
                <h3>Ashlyco Fashion Designer</h3>
                <h4>Fashion Design company in Lagos, Nigeria</h4>
                <h5>At Ashlyco, we believe that fashion is more 
                    than just clothing; it's a form of self-expression, 
                    creativity, and confidence. Founded by a team of 
                    passionate designers, our company is driven by 
                    the desire to redefine and elevate the fashion industry.</h5>
            </div>
            <div className='user-contact'>
                <h3>Contact Us</h3>
                <h4>+234 810 356 432</h4>
                <h5>talk2ashly@yahoo.com</h5>
                <div className='user-btn'>
                    <button></button>
                    <button></button>
                    <button></button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutDesigner