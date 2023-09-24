import React from 'react';
import './Upload.css';
import upload from '../CreateBusiness/upload.png';


function Upload() {
  
  return (
    <div className='UploadImg'>
        <div className='All-product'>
            <h3>All Products</h3>
        </div>
        <div className='No-product'>
            <p>No Products Yet, Kindly upload product to continue</p>
            <div className='No-product-img'>
                <img src={upload} alt="" />
                <p>Upload Now</p>
            </div>
        </div>


    </div>
  )
}

export default Upload