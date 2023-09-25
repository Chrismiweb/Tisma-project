import React from 'react'
import './CreateBusiness.css'
import upload from '../CreateBusiness/upload.png'

function CreateBusiness() {
  return (
    <div className='CreateBusiness'>
        <div className='Business-Heading'>
            <h2>Create Business Page</h2>
        </div>
        <div className='Business-Inputs'>
            <div className='Business-Name'>
                <input type="text" placeholder='Business Name' />
                <input type="text" placeholder='Business Address' />
            </div>
            <textarea name="" id="" cols="30" rows="12" placeholder='Business Description'></textarea>
            <p className='bus-reg'>Is your business registered?</p>

        </div>
        <div className='choose-yes-no'>
            <div className='yes-no'>
                <p>yes</p>
                <input type='checkbox' />
            </div>
            <div className='yes-no'>
                <p>No</p>
                <input type='checkbox' />
            </div>
        </div>
        <div className='bus-ver-num'>
            <input type="text" placeholder='Business Verification Number (Optional)' />
        </div>
        <div className='upload-sect'>
            <input type="text" placeholder='Phone Number'/>
            <div className='upload-icon'>
                <img src={upload} alt="" />
                <p>Profile Image</p>
            </div>
        </div>
        <div className='create-bus'>
            <button>Create Business</button>
        </div>
    </div>
  )
}

export default CreateBusiness