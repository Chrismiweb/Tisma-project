import React from 'react'
// import './All.css'
import {IoMdCloudUpload} from 'react-icons/io'

// import upload from '../Upload to the Cloud.png'

const All = ({handleUploadPage}) => {
  return (
    <div className='  p-10 w-full'>
      <h3 className='text-2xl'>All Products</h3>
      <div className=' flex flex-col justify-center items-center h-screen'>
          <p className='text-lg'>No Products Yet, Kindly upload product to continue</p>
          <div onClick={handleUploadPage} className='flex flex-col'>
            <IoMdCloudUpload style={{fontSize:"50px" , cursor:"pointer", }}/>

            <button onClick={handleUploadPage} className='text-[blue]' >Upload Now</button>
          </div>
      </div>
    </div>
  )
}

export default All