import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = ()=>{
        setToggle(!toggle)
  }
  return (
    <div className="header">
        <div className='maya'>
        <div className='large'>
        <div className='tis'>
            <a href=""><h4>tisma.site</h4></a>
        </div>
        <div className='bar'>
            <a href=""><h4>Get started</h4></a>
            <a href=""><h4>Features</h4></a>
            <a href=""><h4>Pricing</h4></a>
        </div>
        <div className='btn'>
            <a href=""><button>Login</button></a>
        </div>
        <div className="mobile_btn">
            <button onClick={handleClick}>=</button>
        </div>
        </div>
        
        <div className={toggle? 'mobile_sub':'mobile_menu'}>
            <a href=""><h4>Get started</h4></a>
            <a href=""><h4>Features</h4></a>
            <a href=""><h4>Pricing</h4></a>
          <div className='phone_btn'>
            <a href=""><button>Login</button></a>
          </div>
        </div>
        
        
        </div>

    </div>
  )
}

export default Header