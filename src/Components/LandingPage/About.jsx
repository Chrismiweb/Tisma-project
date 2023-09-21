import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='ti'><h1>About tisma.site</h1></div>
        <div className='des'><p>Tisma.site is a business page website specifically built for business owners who doesn’t have a website or landing page for their business. Any registered business owner will be able to access the following features on tisma.site</p></div>
        <div className='ting'>
            <div className='grad'>
                <h1>1.</h1>
                <div className='grad0'>
                    <h1>Create a business page</h1>
                    <p>You will be able to create a business website page and customize to your business taste.</p>
                </div>
            </div>
            <div className='grad2'>
                <h1>2.</h1>
                <div className='grad0'>
                    <h1>Upload a product</h1>
                    <p>After creating a business page, you will be able to upload your products and manage the products accordingly.</p>
                </div>
            </div>
            <div className='grad3'>
                <h1>3.</h1>
                <div className='grad0'>
                    <h1>Contact form integration</h1>
                    <p>Collect your customers and visitors contact information so as to be able to get in touch with them or they should be able to contact you for a reason.</p>
                </div>
            </div>
            <div className='grad4'>
                <h1>4.</h1>
                <div className='grad0'>
                    <h1>Sell your product online</h1>
                    <p>Having a website or business website page allows you to sell your products online even while you are sleeping!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About