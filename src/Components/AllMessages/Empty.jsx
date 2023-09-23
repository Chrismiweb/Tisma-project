import React from 'react'
import './Empty.css'
import envelope from '../Envelope Dots (1).png'
const Empty = () => {
  return (
    <div className='empty'>
        <h3>All Messages</h3>
      <div className='envy'>
          <p>No new messages yet!</p>
          <div className='envy_image'>
            <img src={envelope} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Empty