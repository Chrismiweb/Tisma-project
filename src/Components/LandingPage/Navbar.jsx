import React, { useState } from 'react'
import './Navbar.css'


function Navbar() {
    const[hideToggle, ShowToggle] = useState(false);
    const click = ()=>{
        ShowToggle(!hideToggle)
    }
    
    return (
    <div className='navbar'>
            <nav>
                <a href=""><h4>tisma.site</h4></a>
                <div className='navbar-page'>
                    <a href=""><p>Get Started</p></a>
                    <a href=""><p>Features</p></a>
                    <a href=""><p>Pricing</p></a>   
                </div>
                <a href=""><button className='loginbtn'>Login</button></a>
                
                <div className='toggle'>
                    <button onClick={click}>=</button>
                </div>
            </nav>
            <div className={hideToggle ? "mobile1" : 'mobile2'}>
                <a href=""><p>Get Started</p></a>
                <a href=""><p>Features</p></a>
                <a href=""><p>Pricing</p></a> 
                <a href=""><button>Login</button></a>
            </div>
            

    </div>
  )
}

export default Navbar