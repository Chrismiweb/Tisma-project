import React from 'react'
import './All.css'
import upload from '../Upload to the Cloud.png'

const All = () => {
  return (
    <div className='all'>
      <h3>All Products</h3>
      <div className='upload'>
          <p>No Products Yet, Kindly upload product to continue</p>
          <div className='upload_image'>
            <img src={upload} alt="" />
            <a href=""><h2>Upload Now</h2></a>
          </div>
      </div>
    </div>
  )
}

export default All