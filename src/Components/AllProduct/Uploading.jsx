import React from 'react'
import './Uploading.css'
import upload from '../Upload to the Cloud.png'

const Uploading = () => {
  return (
    <div className='uploading'>
        <h3>Upload Product</h3>
        <div className='uploader'>
            <input className='product-name' type="text" placeholder='Product Name here' />
            <textarea name="" id="" cols="50" rows="15" placeholder='Product Design here'></textarea>
            <div className='flexing'>
                <input type="text" placeholder='Price(NGN)' />
                <input type="text" name="" id="" placeholder='WhatsApp Number' />
                <input type="text" placeholder='Available(QTY)' />
            </div>
            <p>Negotiate</p>
            <div className='check'>
            <div className='check1'><p>Yes</p> <input type="radio" name="" id=""  /></div>
            <div className='check2'><p>No</p> <input type="radio" name="" id=""  /></div>
            </div>
            <div className='nw'>
                <img src={upload} alt="" />
                <p>Product image</p>
            </div>
            <div className='up_btn'>
              <button>Upload Product</button>
            </div>
        </div>
    </div>
  )
}

export default Uploading